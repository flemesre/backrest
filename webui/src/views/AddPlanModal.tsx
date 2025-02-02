import {
  Form,
  Modal,
  Input,
  Typography,
  Select,
  Button,
  Tooltip,
  Radio,
  InputNumber,
  Row,
  Card,
  Col,
  Collapse,
  FormInstance,
} from "antd";
import React, { useEffect, useState } from "react";
import { useShowModal } from "../components/ModalManager";
import { Plan, RetentionPolicy } from "../../gen/ts/v1/config_pb";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { URIAutocomplete } from "../components/URIAutocomplete";
import { useAlertApi } from "../components/Alerts";
import { Cron } from "react-js-cron";
import { namePattern, validateForm } from "../lib/formutil";
import { HooksFormList, hooksListTooltipText } from "../components/HooksFormList";
import { ConfirmButton, SpinButton } from "../components/SpinButton";
import { useConfig } from "../components/ConfigProvider";
import { backrestService } from "../api";

export const AddPlanModal = ({
  template,
}: {
  template: Plan | null;
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = useShowModal();
  const alertsApi = useAlertApi()!;
  const [config, setConfig] = useConfig();
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(template ? JSON.parse(template.toJsonString()) : {});
  }, [template])

  if (!config) {
    return null;
  }

  const handleDestroy = async () => {
    setConfirmLoading(true);

    try {
      if (!template) {
        throw new Error("template not found");
      }

      // Remove the plan from the config
      const idx = config.plans.findIndex((r) => r.id === template.id);
      if (idx === -1) {
        throw new Error("failed to update config, plan to delete not found");
      }

      config.plans.splice(idx, 1);

      // Update config and notify success.
      setConfig(await backrestService.setConfig(config));
      showModal(null);

      alertsApi.success(
        "Plan deleted from config, but not from restic repo. Snapshots will remain in storage and operations will be tracked until manually deleted. Reusing a deleted plan ID is not recommended if backups have already been performed.",
        30
      );
    } catch (e: any) {
      alertsApi.error("Operation failed: " + e.message, 15);
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleOk = async () => {
    setConfirmLoading(true);

    try {
      let planFormData = await validateForm(form);
      const plan = new Plan().fromJsonString(JSON.stringify(planFormData), { ignoreUnknownFields: false });

      if (plan.retention && plan.retention.equals(new RetentionPolicy())) {
        delete plan.retention;
      }

      // Merge the new plan (or update) into the config
      if (template) {
        const idx = config.plans.findIndex((r) => r.id === template.id);
        if (idx === -1) {
          throw new Error("failed to update plan, not found");
        }
        config.plans[idx] = plan;
      } else {
        config.plans.push(plan);
      }

      // Update config and notify success.
      setConfig(await backrestService.setConfig(config));
      showModal(null);
    } catch (e: any) {
      alertsApi.error("Operation failed: " + e.message, 15);
      console.error(e);
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    showModal(null);
  };

  const repos = config?.repos || [];

  return (
    <>
      <Modal
        open={true}
        onCancel={handleCancel}
        title={template ? "Update Plan" : "Add Plan"}
        width="40vw"
        footer={[
          <Button loading={confirmLoading} key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          template != null ? (
            <ConfirmButton
              key="delete"
              type="primary"
              danger
              onClickAsync={handleDestroy}
              confirmTitle="Confirm Delete"
            >
              Delete
            </ConfirmButton>
          ) : null,
          <SpinButton
            key="submit"
            type="primary"
            onClickAsync={handleOk}
          >
            Submit
          </SpinButton>,
        ]}
      >
        <Form
          autoComplete="off"
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          disabled={confirmLoading}
        >
          {/* Plan.id */}
          <Form.Item<Plan>
            hasFeedback
            name="id"
            label="Plan Name"
            initialValue={template ? template.id : ""}
            validateTrigger={["onChange", "onBlur"]}
            rules={[
              {
                required: true,
                message: "Please input plan name",
              },
              {
                validator: async (_, value) => {
                  if (template) return;
                  if (config?.plans?.find((r) => r.id === value)) {
                    throw new Error("Plan with name already exists");
                  }
                },
                message: "Plan with name already exists",
              },
              {
                pattern: namePattern,
                message: "Name must be alphanumeric with dashes or underscores as separators",
              }
            ]}
          >
            <Input
              placeholder={"plan" + ((config?.plans?.length || 0) + 1)}
              disabled={!!template}
            />
          </Form.Item>

          {/* Plan.repo */}
          <Form.Item<Plan>
            name="repo"
            label="Repository"
            validateTrigger={["onChange", "onBlur"]}
            initialValue={template ? template.repo : ""}
            rules={[
              {
                required: true,
                message: "Please select repository",
              },
            ]}
          >
            <Select
              // defaultValue={repos.length > 0 ? repos[0].id : undefined}
              options={repos.map((repo) => ({
                value: repo.id,
              }))}
              disabled={!!template}
            />
          </Form.Item>

          {/* Plan.paths */}
          <Form.Item label="Paths" required={true}>
            <Form.List
              name="paths"
              rules={[]}
              initialValue={template ? template.paths : []}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        initialValue={""}
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        noStyle
                      >
                        <URIAutocomplete
                          style={{ width: "90%" }}
                          onBlur={() => form.validateFields()}
                        />
                      </Form.Item>
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                        style={{ paddingLeft: "5px" }}
                      />
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "90%" }}
                      icon={<PlusOutlined />}
                    >
                      Add Path
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>

          {/* Plan.excludes */}
          <Form.Item label="Excludes" required={false}>
            <Form.List
              name="excludes"
              rules={[]}
              initialValue={template ? template.excludes : []}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        initialValue={""}
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        noStyle
                      >
                        <URIAutocomplete
                          style={{ width: "90%" }}
                          onBlur={() => form.validateFields()}
                          globAllowed={true}
                        />
                      </Form.Item>
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                        style={{ paddingLeft: "5px" }}
                      />
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "90%" }}
                      icon={<PlusOutlined />}
                    >
                      Add Exclusion Glob
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>

          {/* Plan.excludes */}
          <Form.Item label="Excludes (Case Insensitive)" required={false}>
            <Form.List
              name="iexcludes"
              rules={[]}
              initialValue={template ? template.iexcludes : []}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        initialValue={""}
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                        noStyle
                      >
                        <URIAutocomplete
                          style={{ width: "90%" }}
                          onBlur={() => form.validateFields()}
                          globAllowed={true}
                        />
                      </Form.Item>
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                        style={{ paddingLeft: "5px" }}
                      />
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ width: "90%" }}
                      icon={<PlusOutlined />}
                    >
                      Add Case Insensitive Exclusion Glob
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>

          {/* Plan.cron */}
          <Tooltip title="Cron expression to schedule the plan in 24 hour time">
            <Form.Item<Plan>
              name="cron"
              label="Schedule"
              initialValue={template ? template.cron : "0 0 * * *"}
              validateTrigger={["onChange", "onBlur"]}
              rules={[
                {
                  required: true,
                  message: "Please input schedule",
                },
              ]}
            >
              <Cron
                value={form.getFieldValue("cron")}
                setValue={(val: string) => {
                  form.setFieldValue("cron", val);
                }}
                clearButton={false}
              />
            </Form.Item>
          </Tooltip>

          {/* Plan.retention */}
          <RetentionPolicyView />

          {/* Plan.hooks */}
          <Form.Item
            label={<Tooltip title={hooksListTooltipText}>Hooks</Tooltip>}
          >
            <HooksFormList />
          </Form.Item>


          <Form.Item shouldUpdate label="Preview">
            {() => (
              <Collapse
                size="small"
                items={[
                  {
                    key: "1",
                    label: "Plan Config as JSON",
                    children: (
                      <Typography>
                        <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                      </Typography>
                    ),
                  },
                ]}
              />
            )}
          </Form.Item>
        </Form>
      </Modal >
    </>
  );
};

const RetentionPolicyView = () => {
  const form = Form.useFormInstance();
  const retention = Form.useWatch('retention', { form, preserve: true }) as RetentionPolicy | undefined;
  console.log("RETENTION: " + JSON.stringify(retention));

  let [mode, setMode] = useState(0);
  useEffect(() => {
    if (!retention || (!retention.keepDaily && !retention.keepHourly && !retention.keepLastN && !retention.keepMonthly && !retention.keepWeekly && !retention.keepYearly)) {
      console.log("RETENTION NOT SET");
      setMode(0);
    } else if (!!retention.keepLastN) {
      console.log("KEEP LAST N: ", retention.keepLastN);
      setMode(1);
    } else {
      setMode(2);
    }
  }, [retention])
  console.log("MODE: ", mode);

  let elem: React.ReactNode = null;
  if (mode === 0) {
    elem = <p>All backups are retained e.g. for append-only repos. Ensure that you manually forget / prune backups elsewhere. Backrest will register forgets performed externally on the next backup.</p>;
  } else if (mode === 1) {
    elem = (
      <Form.Item
        name={["retention", "keepLastN"]}
        initialValue={30}
        validateTrigger={["onChange", "onBlur"]}
        rules={[
          {
            required: true,
            message: "Please input keep last N",
          },
        ]}
      >
        <InputNumber addonBefore={<div style={{ width: "5em" }}>Count</div>} type="number" />
      </Form.Item>
    );
  } else if (mode === 2) {
    elem = (
      <Row>
        <Col span={11}>
          <Form.Item
            name={["retention", "keepYearly"]}
            validateTrigger={["onChange", "onBlur"]}
            initialValue={0}
            required={false}
          >
            <InputNumber
              addonBefore={<div style={{ width: "5em" }}>Yearly</div>}
              type="number"
            />
          </Form.Item>
          <Form.Item
            name={["retention", "keepMonthly"]}
            initialValue={3}
            validateTrigger={["onChange", "onBlur"]}
            required={false}
          >
            <InputNumber
              addonBefore={<div style={{ width: "5em" }}>Monthly</div>}
              type="number"
            />
          </Form.Item>
          <Form.Item
            name={["retention", "keepWeekly"]}
            initialValue={4}
            validateTrigger={["onChange", "onBlur"]}
            required={false}
          >
            <InputNumber
              addonBefore={<div style={{ width: "5em" }}>Weekly</div>}
              type="number"
            />
          </Form.Item>
        </Col>
        <Col span={11} offset={1}>
          <Form.Item
            name={["retention", "keepDaily"]}
            initialValue={7}
            validateTrigger={["onChange", "onBlur"]}
            required={false}
          >
            <InputNumber
              addonBefore={<div style={{ width: "5em" }}>Daily</div>}
              type="number"
            />
          </Form.Item>
          <Form.Item
            name={["retention", "keepHourly"]}
            initialValue={24}
            validateTrigger={["onChange", "onBlur"]}
            required={false}
          >
            <InputNumber
              addonBefore={<div style={{ width: "5em" }}>Hourly</div>}
              type="number"
            />
          </Form.Item>
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Form.Item label="Retention Policy">
        <Row>
          <Radio.Group value={mode} onChange={e => {
            console.log("SELECTED: ", e.target);
            const selected = e.target.value;
            if (selected === 1) {
              form.setFieldValue("retention", { keepLastN: 30 });
            } else if (selected === 2) {
              form.setFieldValue("retention", { keepYearly: 0, keepMonthly: 3, keepWeekly: 4, keepDaily: 7, keepHourly: 24 });
            } else {
              form.setFieldValue("retention", null);
            }
          }}>
            <Radio.Button value={1}>
              <Tooltip title="The last N snapshots will be kept by restic. Retention policy is applied to drop older snapshots after each backup run.">
                By Count
              </Tooltip>
            </Radio.Button>
            <Radio.Button value={2}>
              <Tooltip title="Snapshots older than the specified time period will be dropped by restic. Retention policy is applied to drop older snapshots after each backup run." >
                By Time Period
              </Tooltip>
            </Radio.Button>
            <Radio.Button value={0}>
              <Tooltip title="All backups will be retained. Note that this may result in slow backups if the set of snapshots grows very large.">
                None
              </Tooltip>
            </Radio.Button>
          </Radio.Group>
        </Row>
        <br />
        <Row>
          <Form.Item>
            {elem}
          </Form.Item>
        </Row>
      </Form.Item >
    </>
  );
};
