// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file v1/operations.proto (package v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { BackupProgressEntry, RepoStats, ResticSnapshot, RestoreProgressEntry } from "./restic_pb.js";
import { RetentionPolicy } from "./config_pb.js";

/**
 * OperationEventType indicates whether the operation was created or updated
 *
 * @generated from enum v1.OperationEventType
 */
export enum OperationEventType {
  /**
   * @generated from enum value: EVENT_UNKNOWN = 0;
   */
  EVENT_UNKNOWN = 0,

  /**
   * @generated from enum value: EVENT_CREATED = 1;
   */
  EVENT_CREATED = 1,

  /**
   * @generated from enum value: EVENT_UPDATED = 2;
   */
  EVENT_UPDATED = 2,

  /**
   * @generated from enum value: EVENT_DELETED = 3;
   */
  EVENT_DELETED = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(OperationEventType)
proto3.util.setEnumType(OperationEventType, "v1.OperationEventType", [
  { no: 0, name: "EVENT_UNKNOWN" },
  { no: 1, name: "EVENT_CREATED" },
  { no: 2, name: "EVENT_UPDATED" },
  { no: 3, name: "EVENT_DELETED" },
]);

/**
 * @generated from enum v1.OperationStatus
 */
export enum OperationStatus {
  /**
   * used to indicate that the status is unknown.
   *
   * @generated from enum value: STATUS_UNKNOWN = 0;
   */
  STATUS_UNKNOWN = 0,

  /**
   * used to indicate that the operation is pending.
   *
   * @generated from enum value: STATUS_PENDING = 1;
   */
  STATUS_PENDING = 1,

  /**
   * used to indicate that the operation is in progress.
   *
   * @generated from enum value: STATUS_INPROGRESS = 2;
   */
  STATUS_INPROGRESS = 2,

  /**
   * used to indicate that the operation completed successfully.
   *
   * @generated from enum value: STATUS_SUCCESS = 3;
   */
  STATUS_SUCCESS = 3,

  /**
   * used to indicate that the operation completed with warnings.
   *
   * @generated from enum value: STATUS_WARNING = 7;
   */
  STATUS_WARNING = 7,

  /**
   * used to indicate that the operation failed.
   *
   * @generated from enum value: STATUS_ERROR = 4;
   */
  STATUS_ERROR = 4,

  /**
   * indicates operation cancelled by the system.
   *
   * @generated from enum value: STATUS_SYSTEM_CANCELLED = 5;
   */
  STATUS_SYSTEM_CANCELLED = 5,

  /**
   * indicates operation cancelled by the user.
   *
   * @generated from enum value: STATUS_USER_CANCELLED = 6;
   */
  STATUS_USER_CANCELLED = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(OperationStatus)
proto3.util.setEnumType(OperationStatus, "v1.OperationStatus", [
  { no: 0, name: "STATUS_UNKNOWN" },
  { no: 1, name: "STATUS_PENDING" },
  { no: 2, name: "STATUS_INPROGRESS" },
  { no: 3, name: "STATUS_SUCCESS" },
  { no: 7, name: "STATUS_WARNING" },
  { no: 4, name: "STATUS_ERROR" },
  { no: 5, name: "STATUS_SYSTEM_CANCELLED" },
  { no: 6, name: "STATUS_USER_CANCELLED" },
]);

/**
 * @generated from message v1.OperationList
 */
export class OperationList extends Message<OperationList> {
  /**
   * @generated from field: repeated v1.Operation operations = 1;
   */
  operations: Operation[] = [];

  constructor(data?: PartialMessage<OperationList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.OperationList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "operations", kind: "message", T: Operation, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationList {
    return new OperationList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationList {
    return new OperationList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationList {
    return new OperationList().fromJsonString(jsonString, options);
  }

  static equals(a: OperationList | PlainMessage<OperationList> | undefined, b: OperationList | PlainMessage<OperationList> | undefined): boolean {
    return proto3.util.equals(OperationList, a, b);
  }
}

/**
 * @generated from message v1.Operation
 */
export class Operation extends Message<Operation> {
  /**
   * required, primary ID of the operation. ID is sequential based on creation time of the operation.
   *
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * required, repo id if associated with a repo
   *
   * @generated from field: string repo_id = 2;
   */
  repoId = "";

  /**
   * required, plan id if associated with a plan
   *
   * @generated from field: string plan_id = 3;
   */
  planId = "";

  /**
   * optional snapshot id if associated with a snapshot.
   *
   * @generated from field: string snapshot_id = 8;
   */
  snapshotId = "";

  /**
   * @generated from field: v1.OperationStatus status = 4;
   */
  status = OperationStatus.STATUS_UNKNOWN;

  /**
   * required, unix time in milliseconds of the operation's creation (ID is derived from this)
   *
   * @generated from field: int64 unix_time_start_ms = 5;
   */
  unixTimeStartMs = protoInt64.zero;

  /**
   * optional, unix time in milliseconds of the operation's completion
   *
   * @generated from field: int64 unix_time_end_ms = 6;
   */
  unixTimeEndMs = protoInt64.zero;

  /**
   * optional, human readable context message, typically an error message.
   *
   * @generated from field: string display_message = 7;
   */
  displayMessage = "";

  /**
   * @generated from oneof v1.Operation.op
   */
  op: {
    /**
     * @generated from field: v1.OperationBackup operation_backup = 100;
     */
    value: OperationBackup;
    case: "operationBackup";
  } | {
    /**
     * @generated from field: v1.OperationIndexSnapshot operation_index_snapshot = 101;
     */
    value: OperationIndexSnapshot;
    case: "operationIndexSnapshot";
  } | {
    /**
     * @generated from field: v1.OperationForget operation_forget = 102;
     */
    value: OperationForget;
    case: "operationForget";
  } | {
    /**
     * @generated from field: v1.OperationPrune operation_prune = 103;
     */
    value: OperationPrune;
    case: "operationPrune";
  } | {
    /**
     * @generated from field: v1.OperationRestore operation_restore = 104;
     */
    value: OperationRestore;
    case: "operationRestore";
  } | {
    /**
     * @generated from field: v1.OperationStats operation_stats = 105;
     */
    value: OperationStats;
    case: "operationStats";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Operation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.Operation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "repo_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "plan_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "snapshot_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "status", kind: "enum", T: proto3.getEnumType(OperationStatus) },
    { no: 5, name: "unix_time_start_ms", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "unix_time_end_ms", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "display_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 100, name: "operation_backup", kind: "message", T: OperationBackup, oneof: "op" },
    { no: 101, name: "operation_index_snapshot", kind: "message", T: OperationIndexSnapshot, oneof: "op" },
    { no: 102, name: "operation_forget", kind: "message", T: OperationForget, oneof: "op" },
    { no: 103, name: "operation_prune", kind: "message", T: OperationPrune, oneof: "op" },
    { no: 104, name: "operation_restore", kind: "message", T: OperationRestore, oneof: "op" },
    { no: 105, name: "operation_stats", kind: "message", T: OperationStats, oneof: "op" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Operation {
    return new Operation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Operation {
    return new Operation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Operation {
    return new Operation().fromJsonString(jsonString, options);
  }

  static equals(a: Operation | PlainMessage<Operation> | undefined, b: Operation | PlainMessage<Operation> | undefined): boolean {
    return proto3.util.equals(Operation, a, b);
  }
}

/**
 * OperationEvent is used in the wireformat to stream operation changes to clients
 *
 * @generated from message v1.OperationEvent
 */
export class OperationEvent extends Message<OperationEvent> {
  /**
   * @generated from field: v1.OperationEventType type = 1;
   */
  type = OperationEventType.EVENT_UNKNOWN;

  /**
   * @generated from field: v1.Operation operation = 2;
   */
  operation?: Operation;

  constructor(data?: PartialMessage<OperationEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.OperationEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(OperationEventType) },
    { no: 2, name: "operation", kind: "message", T: Operation },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationEvent {
    return new OperationEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationEvent {
    return new OperationEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationEvent {
    return new OperationEvent().fromJsonString(jsonString, options);
  }

  static equals(a: OperationEvent | PlainMessage<OperationEvent> | undefined, b: OperationEvent | PlainMessage<OperationEvent> | undefined): boolean {
    return proto3.util.equals(OperationEvent, a, b);
  }
}

/**
 * @generated from message v1.OperationBackup
 */
export class OperationBackup extends Message<OperationBackup> {
  /**
   * @generated from field: v1.BackupProgressEntry last_status = 3;
   */
  lastStatus?: BackupProgressEntry;

  constructor(data?: PartialMessage<OperationBackup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.OperationBackup";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "last_status", kind: "message", T: BackupProgressEntry },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationBackup {
    return new OperationBackup().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationBackup {
    return new OperationBackup().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationBackup {
    return new OperationBackup().fromJsonString(jsonString, options);
  }

  static equals(a: OperationBackup | PlainMessage<OperationBackup> | undefined, b: OperationBackup | PlainMessage<OperationBackup> | undefined): boolean {
    return proto3.util.equals(OperationBackup, a, b);
  }
}

/**
 * OperationIndexSnapshot tracks that a snapshot was detected by backrest. 
 *
 * @generated from message v1.OperationIndexSnapshot
 */
export class OperationIndexSnapshot extends Message<OperationIndexSnapshot> {
  /**
   * the snapshot that was indexed.
   *
   * @generated from field: v1.ResticSnapshot snapshot = 2;
   */
  snapshot?: ResticSnapshot;

  /**
   * tracks whether this snapshot is forgotten yet.
   *
   * @generated from field: bool forgot = 3;
   */
  forgot = false;

  /**
   * ID of a forget operation that removed this snapshot.
   *
   * @generated from field: int64 forgot_by_op = 4;
   */
  forgotByOp = protoInt64.zero;

  constructor(data?: PartialMessage<OperationIndexSnapshot>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.OperationIndexSnapshot";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "snapshot", kind: "message", T: ResticSnapshot },
    { no: 3, name: "forgot", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "forgot_by_op", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationIndexSnapshot {
    return new OperationIndexSnapshot().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationIndexSnapshot {
    return new OperationIndexSnapshot().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationIndexSnapshot {
    return new OperationIndexSnapshot().fromJsonString(jsonString, options);
  }

  static equals(a: OperationIndexSnapshot | PlainMessage<OperationIndexSnapshot> | undefined, b: OperationIndexSnapshot | PlainMessage<OperationIndexSnapshot> | undefined): boolean {
    return proto3.util.equals(OperationIndexSnapshot, a, b);
  }
}

/**
 * OperationForget tracks a forget operation.
 *
 * @generated from message v1.OperationForget
 */
export class OperationForget extends Message<OperationForget> {
  /**
   * @generated from field: repeated v1.ResticSnapshot forget = 1;
   */
  forget: ResticSnapshot[] = [];

  /**
   * @generated from field: v1.RetentionPolicy policy = 2;
   */
  policy?: RetentionPolicy;

  constructor(data?: PartialMessage<OperationForget>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.OperationForget";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "forget", kind: "message", T: ResticSnapshot, repeated: true },
    { no: 2, name: "policy", kind: "message", T: RetentionPolicy },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationForget {
    return new OperationForget().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationForget {
    return new OperationForget().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationForget {
    return new OperationForget().fromJsonString(jsonString, options);
  }

  static equals(a: OperationForget | PlainMessage<OperationForget> | undefined, b: OperationForget | PlainMessage<OperationForget> | undefined): boolean {
    return proto3.util.equals(OperationForget, a, b);
  }
}

/**
 * OperationPrune tracks a prune operation.
 *
 * @generated from message v1.OperationPrune
 */
export class OperationPrune extends Message<OperationPrune> {
  /**
   * @generated from field: string output = 1;
   */
  output = "";

  constructor(data?: PartialMessage<OperationPrune>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.OperationPrune";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "output", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationPrune {
    return new OperationPrune().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationPrune {
    return new OperationPrune().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationPrune {
    return new OperationPrune().fromJsonString(jsonString, options);
  }

  static equals(a: OperationPrune | PlainMessage<OperationPrune> | undefined, b: OperationPrune | PlainMessage<OperationPrune> | undefined): boolean {
    return proto3.util.equals(OperationPrune, a, b);
  }
}

/**
 * @generated from message v1.OperationRestore
 */
export class OperationRestore extends Message<OperationRestore> {
  /**
   * path in the snapshot to restore.
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * location to restore it to.
   *
   * @generated from field: string target = 2;
   */
  target = "";

  /**
   * status of the restore.
   *
   * @generated from field: v1.RestoreProgressEntry status = 3;
   */
  status?: RestoreProgressEntry;

  constructor(data?: PartialMessage<OperationRestore>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.OperationRestore";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "target", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "message", T: RestoreProgressEntry },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationRestore {
    return new OperationRestore().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationRestore {
    return new OperationRestore().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationRestore {
    return new OperationRestore().fromJsonString(jsonString, options);
  }

  static equals(a: OperationRestore | PlainMessage<OperationRestore> | undefined, b: OperationRestore | PlainMessage<OperationRestore> | undefined): boolean {
    return proto3.util.equals(OperationRestore, a, b);
  }
}

/**
 * @generated from message v1.OperationStats
 */
export class OperationStats extends Message<OperationStats> {
  /**
   * @generated from field: v1.RepoStats stats = 1;
   */
  stats?: RepoStats;

  constructor(data?: PartialMessage<OperationStats>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.OperationStats";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stats", kind: "message", T: RepoStats },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OperationStats {
    return new OperationStats().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OperationStats {
    return new OperationStats().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OperationStats {
    return new OperationStats().fromJsonString(jsonString, options);
  }

  static equals(a: OperationStats | PlainMessage<OperationStats> | undefined, b: OperationStats | PlainMessage<OperationStats> | undefined): boolean {
    return proto3.util.equals(OperationStats, a, b);
  }
}

