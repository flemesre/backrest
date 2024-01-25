// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file v1/service.proto (package v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message v1.LoginRequest
 */
export class LoginRequest extends Message<LoginRequest> {
  /**
   * @generated from field: string username = 1;
   */
  username = "";

  /**
   * @generated from field: string password = 2;
   */
  password = "";

  constructor(data?: PartialMessage<LoginRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.LoginRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginRequest {
    return new LoginRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginRequest {
    return new LoginRequest().fromJsonString(jsonString, options);
  }

  static equals(a: LoginRequest | PlainMessage<LoginRequest> | undefined, b: LoginRequest | PlainMessage<LoginRequest> | undefined): boolean {
    return proto3.util.equals(LoginRequest, a, b);
  }
}

/**
 * @generated from message v1.LoginResponse
 */
export class LoginResponse extends Message<LoginResponse> {
  /**
   * @generated from field: string jwt = 1;
   */
  jwt = "";

  constructor(data?: PartialMessage<LoginResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.LoginResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "jwt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoginResponse {
    return new LoginResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoginResponse {
    return new LoginResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LoginResponse | PlainMessage<LoginResponse> | undefined, b: LoginResponse | PlainMessage<LoginResponse> | undefined): boolean {
    return proto3.util.equals(LoginResponse, a, b);
  }
}

/**
 * @generated from message v1.ClearHistoryRequest
 */
export class ClearHistoryRequest extends Message<ClearHistoryRequest> {
  /**
   * @generated from field: string repo_id = 1;
   */
  repoId = "";

  /**
   * @generated from field: string plan_id = 2;
   */
  planId = "";

  /**
   * @generated from field: bool only_failed = 3;
   */
  onlyFailed = false;

  constructor(data?: PartialMessage<ClearHistoryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.ClearHistoryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repo_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "plan_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "only_failed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearHistoryRequest {
    return new ClearHistoryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearHistoryRequest {
    return new ClearHistoryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearHistoryRequest {
    return new ClearHistoryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ClearHistoryRequest | PlainMessage<ClearHistoryRequest> | undefined, b: ClearHistoryRequest | PlainMessage<ClearHistoryRequest> | undefined): boolean {
    return proto3.util.equals(ClearHistoryRequest, a, b);
  }
}

/**
 * @generated from message v1.ListSnapshotsRequest
 */
export class ListSnapshotsRequest extends Message<ListSnapshotsRequest> {
  /**
   * @generated from field: string repo_id = 1;
   */
  repoId = "";

  /**
   * @generated from field: string plan_id = 2;
   */
  planId = "";

  constructor(data?: PartialMessage<ListSnapshotsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.ListSnapshotsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repo_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "plan_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSnapshotsRequest {
    return new ListSnapshotsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSnapshotsRequest {
    return new ListSnapshotsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSnapshotsRequest {
    return new ListSnapshotsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSnapshotsRequest | PlainMessage<ListSnapshotsRequest> | undefined, b: ListSnapshotsRequest | PlainMessage<ListSnapshotsRequest> | undefined): boolean {
    return proto3.util.equals(ListSnapshotsRequest, a, b);
  }
}

/**
 * @generated from message v1.GetOperationsRequest
 */
export class GetOperationsRequest extends Message<GetOperationsRequest> {
  /**
   * @generated from field: string repo_id = 1;
   */
  repoId = "";

  /**
   * @generated from field: string plan_id = 2;
   */
  planId = "";

  /**
   * @generated from field: string snapshot_id = 4;
   */
  snapshotId = "";

  /**
   * @generated from field: repeated int64 ids = 5;
   */
  ids: bigint[] = [];

  /**
   * limit to the last n operations
   *
   * @generated from field: int64 last_n = 3;
   */
  lastN = protoInt64.zero;

  constructor(data?: PartialMessage<GetOperationsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.GetOperationsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repo_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "plan_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "snapshot_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "last_n", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOperationsRequest {
    return new GetOperationsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOperationsRequest {
    return new GetOperationsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOperationsRequest {
    return new GetOperationsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetOperationsRequest | PlainMessage<GetOperationsRequest> | undefined, b: GetOperationsRequest | PlainMessage<GetOperationsRequest> | undefined): boolean {
    return proto3.util.equals(GetOperationsRequest, a, b);
  }
}

/**
 * @generated from message v1.RestoreSnapshotRequest
 */
export class RestoreSnapshotRequest extends Message<RestoreSnapshotRequest> {
  /**
   * @generated from field: string plan_id = 1;
   */
  planId = "";

  /**
   * @generated from field: string snapshot_id = 2;
   */
  snapshotId = "";

  /**
   * @generated from field: string path = 3;
   */
  path = "";

  /**
   * @generated from field: string target = 4;
   */
  target = "";

  constructor(data?: PartialMessage<RestoreSnapshotRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.RestoreSnapshotRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "plan_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "snapshot_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "target", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RestoreSnapshotRequest {
    return new RestoreSnapshotRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RestoreSnapshotRequest {
    return new RestoreSnapshotRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RestoreSnapshotRequest {
    return new RestoreSnapshotRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RestoreSnapshotRequest | PlainMessage<RestoreSnapshotRequest> | undefined, b: RestoreSnapshotRequest | PlainMessage<RestoreSnapshotRequest> | undefined): boolean {
    return proto3.util.equals(RestoreSnapshotRequest, a, b);
  }
}

/**
 * @generated from message v1.ListSnapshotFilesRequest
 */
export class ListSnapshotFilesRequest extends Message<ListSnapshotFilesRequest> {
  /**
   * @generated from field: string repo_id = 1;
   */
  repoId = "";

  /**
   * @generated from field: string snapshot_id = 2;
   */
  snapshotId = "";

  /**
   * @generated from field: string path = 3;
   */
  path = "";

  constructor(data?: PartialMessage<ListSnapshotFilesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.ListSnapshotFilesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repo_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "snapshot_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSnapshotFilesRequest {
    return new ListSnapshotFilesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSnapshotFilesRequest {
    return new ListSnapshotFilesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSnapshotFilesRequest {
    return new ListSnapshotFilesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSnapshotFilesRequest | PlainMessage<ListSnapshotFilesRequest> | undefined, b: ListSnapshotFilesRequest | PlainMessage<ListSnapshotFilesRequest> | undefined): boolean {
    return proto3.util.equals(ListSnapshotFilesRequest, a, b);
  }
}

/**
 * @generated from message v1.ListSnapshotFilesResponse
 */
export class ListSnapshotFilesResponse extends Message<ListSnapshotFilesResponse> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: repeated v1.LsEntry entries = 2;
   */
  entries: LsEntry[] = [];

  constructor(data?: PartialMessage<ListSnapshotFilesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.ListSnapshotFilesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entries", kind: "message", T: LsEntry, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSnapshotFilesResponse {
    return new ListSnapshotFilesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSnapshotFilesResponse {
    return new ListSnapshotFilesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSnapshotFilesResponse {
    return new ListSnapshotFilesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListSnapshotFilesResponse | PlainMessage<ListSnapshotFilesResponse> | undefined, b: ListSnapshotFilesResponse | PlainMessage<ListSnapshotFilesResponse> | undefined): boolean {
    return proto3.util.equals(ListSnapshotFilesResponse, a, b);
  }
}

/**
 * @generated from message v1.LsEntry
 */
export class LsEntry extends Message<LsEntry> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string type = 2;
   */
  type = "";

  /**
   * @generated from field: string path = 3;
   */
  path = "";

  /**
   * @generated from field: int64 uid = 4;
   */
  uid = protoInt64.zero;

  /**
   * @generated from field: int64 gid = 5;
   */
  gid = protoInt64.zero;

  /**
   * @generated from field: int64 size = 6;
   */
  size = protoInt64.zero;

  /**
   * @generated from field: int64 mode = 7;
   */
  mode = protoInt64.zero;

  /**
   * @generated from field: string mtime = 8;
   */
  mtime = "";

  /**
   * @generated from field: string atime = 9;
   */
  atime = "";

  /**
   * @generated from field: string ctime = 10;
   */
  ctime = "";

  constructor(data?: PartialMessage<LsEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "v1.LsEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "uid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "gid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "mode", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "mtime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "atime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "ctime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LsEntry {
    return new LsEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LsEntry {
    return new LsEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LsEntry {
    return new LsEntry().fromJsonString(jsonString, options);
  }

  static equals(a: LsEntry | PlainMessage<LsEntry> | undefined, b: LsEntry | PlainMessage<LsEntry> | undefined): boolean {
    return proto3.util.equals(LsEntry, a, b);
  }
}

