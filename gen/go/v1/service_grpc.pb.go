// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: v1/service.proto

package v1

import (
	context "context"
	types "github.com/garethgeorge/resticui/gen/go/types"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	ResticUI_GetConfig_FullMethodName          = "/v1.ResticUI/GetConfig"
	ResticUI_SetConfig_FullMethodName          = "/v1.ResticUI/SetConfig"
	ResticUI_AddRepo_FullMethodName            = "/v1.ResticUI/AddRepo"
	ResticUI_GetOperationEvents_FullMethodName = "/v1.ResticUI/GetOperationEvents"
	ResticUI_GetOperations_FullMethodName      = "/v1.ResticUI/GetOperations"
	ResticUI_ListSnapshots_FullMethodName      = "/v1.ResticUI/ListSnapshots"
	ResticUI_ListSnapshotFiles_FullMethodName  = "/v1.ResticUI/ListSnapshotFiles"
	ResticUI_Backup_FullMethodName             = "/v1.ResticUI/Backup"
	ResticUI_PathAutocomplete_FullMethodName   = "/v1.ResticUI/PathAutocomplete"
)

// ResticUIClient is the client API for ResticUI service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ResticUIClient interface {
	GetConfig(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Config, error)
	SetConfig(ctx context.Context, in *Config, opts ...grpc.CallOption) (*Config, error)
	AddRepo(ctx context.Context, in *Repo, opts ...grpc.CallOption) (*Config, error)
	GetOperationEvents(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (ResticUI_GetOperationEventsClient, error)
	GetOperations(ctx context.Context, in *GetOperationsRequest, opts ...grpc.CallOption) (*OperationList, error)
	ListSnapshots(ctx context.Context, in *ListSnapshotsRequest, opts ...grpc.CallOption) (*ResticSnapshotList, error)
	ListSnapshotFiles(ctx context.Context, in *ListSnapshotFilesRequest, opts ...grpc.CallOption) (*ListSnapshotFilesResponse, error)
	// Backup schedules a backup operation. It accepts a plan id and returns empty if the task is enqueued.
	Backup(ctx context.Context, in *types.StringValue, opts ...grpc.CallOption) (*emptypb.Empty, error)
	// PathAutocomplete provides path autocompletion options for a given filesystem path.
	PathAutocomplete(ctx context.Context, in *types.StringValue, opts ...grpc.CallOption) (*types.StringList, error)
}

type resticUIClient struct {
	cc grpc.ClientConnInterface
}

func NewResticUIClient(cc grpc.ClientConnInterface) ResticUIClient {
	return &resticUIClient{cc}
}

func (c *resticUIClient) GetConfig(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*Config, error) {
	out := new(Config)
	err := c.cc.Invoke(ctx, ResticUI_GetConfig_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *resticUIClient) SetConfig(ctx context.Context, in *Config, opts ...grpc.CallOption) (*Config, error) {
	out := new(Config)
	err := c.cc.Invoke(ctx, ResticUI_SetConfig_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *resticUIClient) AddRepo(ctx context.Context, in *Repo, opts ...grpc.CallOption) (*Config, error) {
	out := new(Config)
	err := c.cc.Invoke(ctx, ResticUI_AddRepo_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *resticUIClient) GetOperationEvents(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (ResticUI_GetOperationEventsClient, error) {
	stream, err := c.cc.NewStream(ctx, &ResticUI_ServiceDesc.Streams[0], ResticUI_GetOperationEvents_FullMethodName, opts...)
	if err != nil {
		return nil, err
	}
	x := &resticUIGetOperationEventsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type ResticUI_GetOperationEventsClient interface {
	Recv() (*OperationEvent, error)
	grpc.ClientStream
}

type resticUIGetOperationEventsClient struct {
	grpc.ClientStream
}

func (x *resticUIGetOperationEventsClient) Recv() (*OperationEvent, error) {
	m := new(OperationEvent)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *resticUIClient) GetOperations(ctx context.Context, in *GetOperationsRequest, opts ...grpc.CallOption) (*OperationList, error) {
	out := new(OperationList)
	err := c.cc.Invoke(ctx, ResticUI_GetOperations_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *resticUIClient) ListSnapshots(ctx context.Context, in *ListSnapshotsRequest, opts ...grpc.CallOption) (*ResticSnapshotList, error) {
	out := new(ResticSnapshotList)
	err := c.cc.Invoke(ctx, ResticUI_ListSnapshots_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *resticUIClient) ListSnapshotFiles(ctx context.Context, in *ListSnapshotFilesRequest, opts ...grpc.CallOption) (*ListSnapshotFilesResponse, error) {
	out := new(ListSnapshotFilesResponse)
	err := c.cc.Invoke(ctx, ResticUI_ListSnapshotFiles_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *resticUIClient) Backup(ctx context.Context, in *types.StringValue, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, ResticUI_Backup_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *resticUIClient) PathAutocomplete(ctx context.Context, in *types.StringValue, opts ...grpc.CallOption) (*types.StringList, error) {
	out := new(types.StringList)
	err := c.cc.Invoke(ctx, ResticUI_PathAutocomplete_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ResticUIServer is the server API for ResticUI service.
// All implementations must embed UnimplementedResticUIServer
// for forward compatibility
type ResticUIServer interface {
	GetConfig(context.Context, *emptypb.Empty) (*Config, error)
	SetConfig(context.Context, *Config) (*Config, error)
	AddRepo(context.Context, *Repo) (*Config, error)
	GetOperationEvents(*emptypb.Empty, ResticUI_GetOperationEventsServer) error
	GetOperations(context.Context, *GetOperationsRequest) (*OperationList, error)
	ListSnapshots(context.Context, *ListSnapshotsRequest) (*ResticSnapshotList, error)
	ListSnapshotFiles(context.Context, *ListSnapshotFilesRequest) (*ListSnapshotFilesResponse, error)
	// Backup schedules a backup operation. It accepts a plan id and returns empty if the task is enqueued.
	Backup(context.Context, *types.StringValue) (*emptypb.Empty, error)
	// PathAutocomplete provides path autocompletion options for a given filesystem path.
	PathAutocomplete(context.Context, *types.StringValue) (*types.StringList, error)
	mustEmbedUnimplementedResticUIServer()
}

// UnimplementedResticUIServer must be embedded to have forward compatible implementations.
type UnimplementedResticUIServer struct {
}

func (UnimplementedResticUIServer) GetConfig(context.Context, *emptypb.Empty) (*Config, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetConfig not implemented")
}
func (UnimplementedResticUIServer) SetConfig(context.Context, *Config) (*Config, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetConfig not implemented")
}
func (UnimplementedResticUIServer) AddRepo(context.Context, *Repo) (*Config, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddRepo not implemented")
}
func (UnimplementedResticUIServer) GetOperationEvents(*emptypb.Empty, ResticUI_GetOperationEventsServer) error {
	return status.Errorf(codes.Unimplemented, "method GetOperationEvents not implemented")
}
func (UnimplementedResticUIServer) GetOperations(context.Context, *GetOperationsRequest) (*OperationList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOperations not implemented")
}
func (UnimplementedResticUIServer) ListSnapshots(context.Context, *ListSnapshotsRequest) (*ResticSnapshotList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListSnapshots not implemented")
}
func (UnimplementedResticUIServer) ListSnapshotFiles(context.Context, *ListSnapshotFilesRequest) (*ListSnapshotFilesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListSnapshotFiles not implemented")
}
func (UnimplementedResticUIServer) Backup(context.Context, *types.StringValue) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Backup not implemented")
}
func (UnimplementedResticUIServer) PathAutocomplete(context.Context, *types.StringValue) (*types.StringList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PathAutocomplete not implemented")
}
func (UnimplementedResticUIServer) mustEmbedUnimplementedResticUIServer() {}

// UnsafeResticUIServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ResticUIServer will
// result in compilation errors.
type UnsafeResticUIServer interface {
	mustEmbedUnimplementedResticUIServer()
}

func RegisterResticUIServer(s grpc.ServiceRegistrar, srv ResticUIServer) {
	s.RegisterService(&ResticUI_ServiceDesc, srv)
}

func _ResticUI_GetConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResticUIServer).GetConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ResticUI_GetConfig_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResticUIServer).GetConfig(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _ResticUI_SetConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Config)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResticUIServer).SetConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ResticUI_SetConfig_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResticUIServer).SetConfig(ctx, req.(*Config))
	}
	return interceptor(ctx, in, info, handler)
}

func _ResticUI_AddRepo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Repo)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResticUIServer).AddRepo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ResticUI_AddRepo_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResticUIServer).AddRepo(ctx, req.(*Repo))
	}
	return interceptor(ctx, in, info, handler)
}

func _ResticUI_GetOperationEvents_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(emptypb.Empty)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(ResticUIServer).GetOperationEvents(m, &resticUIGetOperationEventsServer{stream})
}

type ResticUI_GetOperationEventsServer interface {
	Send(*OperationEvent) error
	grpc.ServerStream
}

type resticUIGetOperationEventsServer struct {
	grpc.ServerStream
}

func (x *resticUIGetOperationEventsServer) Send(m *OperationEvent) error {
	return x.ServerStream.SendMsg(m)
}

func _ResticUI_GetOperations_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetOperationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResticUIServer).GetOperations(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ResticUI_GetOperations_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResticUIServer).GetOperations(ctx, req.(*GetOperationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ResticUI_ListSnapshots_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSnapshotsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResticUIServer).ListSnapshots(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ResticUI_ListSnapshots_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResticUIServer).ListSnapshots(ctx, req.(*ListSnapshotsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ResticUI_ListSnapshotFiles_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSnapshotFilesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResticUIServer).ListSnapshotFiles(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ResticUI_ListSnapshotFiles_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResticUIServer).ListSnapshotFiles(ctx, req.(*ListSnapshotFilesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ResticUI_Backup_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(types.StringValue)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResticUIServer).Backup(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ResticUI_Backup_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResticUIServer).Backup(ctx, req.(*types.StringValue))
	}
	return interceptor(ctx, in, info, handler)
}

func _ResticUI_PathAutocomplete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(types.StringValue)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResticUIServer).PathAutocomplete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: ResticUI_PathAutocomplete_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResticUIServer).PathAutocomplete(ctx, req.(*types.StringValue))
	}
	return interceptor(ctx, in, info, handler)
}

// ResticUI_ServiceDesc is the grpc.ServiceDesc for ResticUI service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ResticUI_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v1.ResticUI",
	HandlerType: (*ResticUIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetConfig",
			Handler:    _ResticUI_GetConfig_Handler,
		},
		{
			MethodName: "SetConfig",
			Handler:    _ResticUI_SetConfig_Handler,
		},
		{
			MethodName: "AddRepo",
			Handler:    _ResticUI_AddRepo_Handler,
		},
		{
			MethodName: "GetOperations",
			Handler:    _ResticUI_GetOperations_Handler,
		},
		{
			MethodName: "ListSnapshots",
			Handler:    _ResticUI_ListSnapshots_Handler,
		},
		{
			MethodName: "ListSnapshotFiles",
			Handler:    _ResticUI_ListSnapshotFiles_Handler,
		},
		{
			MethodName: "Backup",
			Handler:    _ResticUI_Backup_Handler,
		},
		{
			MethodName: "PathAutocomplete",
			Handler:    _ResticUI_PathAutocomplete_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetOperationEvents",
			Handler:       _ResticUI_GetOperationEvents_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "v1/service.proto",
}
