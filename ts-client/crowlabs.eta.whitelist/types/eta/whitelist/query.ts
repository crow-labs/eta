/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Member } from "./member";
import { Params } from "./params";
import { Whitelist } from "./whitelist";

export const protobufPackage = "crowlabs.eta.whitelist";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetMemberRequest {
  addresss: string;
}

export interface QueryGetMemberResponse {
  member: Member | undefined;
}

export interface QueryAllMemberRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMemberResponse {
  member: Member[];
  pagination: PageResponse | undefined;
}

export interface QueryGetWhitelistRequest {
  whitelistId: number;
}

export interface QueryGetWhitelistResponse {
  whitelist: Whitelist | undefined;
}

export interface QueryAllWhitelistRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWhitelistResponse {
  whitelist: Whitelist[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMemberRequest(): QueryGetMemberRequest {
  return { addresss: "" };
}

export const QueryGetMemberRequest = {
  encode(message: QueryGetMemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addresss !== "") {
      writer.uint32(10).string(message.addresss);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresss = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMemberRequest {
    return { addresss: isSet(object.addresss) ? String(object.addresss) : "" };
  },

  toJSON(message: QueryGetMemberRequest): unknown {
    const obj: any = {};
    message.addresss !== undefined && (obj.addresss = message.addresss);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMemberRequest>, I>>(object: I): QueryGetMemberRequest {
    const message = createBaseQueryGetMemberRequest();
    message.addresss = object.addresss ?? "";
    return message;
  },
};

function createBaseQueryGetMemberResponse(): QueryGetMemberResponse {
  return { member: undefined };
}

export const QueryGetMemberResponse = {
  encode(message: QueryGetMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMemberResponse {
    return { member: isSet(object.member) ? Member.fromJSON(object.member) : undefined };
  },

  toJSON(message: QueryGetMemberResponse): unknown {
    const obj: any = {};
    message.member !== undefined && (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMemberResponse>, I>>(object: I): QueryGetMemberResponse {
    const message = createBaseQueryGetMemberResponse();
    message.member = (object.member !== undefined && object.member !== null)
      ? Member.fromPartial(object.member)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMemberRequest(): QueryAllMemberRequest {
  return { pagination: undefined };
}

export const QueryAllMemberRequest = {
  encode(message: QueryAllMemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMemberRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMemberRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMemberRequest>, I>>(object: I): QueryAllMemberRequest {
    const message = createBaseQueryAllMemberRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMemberResponse(): QueryAllMemberResponse {
  return { member: [], pagination: undefined };
}

export const QueryAllMemberResponse = {
  encode(message: QueryAllMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.member) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member.push(Member.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMemberResponse {
    return {
      member: Array.isArray(object?.member) ? object.member.map((e: any) => Member.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMemberResponse): unknown {
    const obj: any = {};
    if (message.member) {
      obj.member = message.member.map((e) => e ? Member.toJSON(e) : undefined);
    } else {
      obj.member = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMemberResponse>, I>>(object: I): QueryAllMemberResponse {
    const message = createBaseQueryAllMemberResponse();
    message.member = object.member?.map((e) => Member.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetWhitelistRequest(): QueryGetWhitelistRequest {
  return { whitelistId: 0 };
}

export const QueryGetWhitelistRequest = {
  encode(message: QueryGetWhitelistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelistId !== 0) {
      writer.uint32(8).uint64(message.whitelistId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhitelistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistRequest {
    return { whitelistId: isSet(object.whitelistId) ? Number(object.whitelistId) : 0 };
  },

  toJSON(message: QueryGetWhitelistRequest): unknown {
    const obj: any = {};
    message.whitelistId !== undefined && (obj.whitelistId = Math.round(message.whitelistId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhitelistRequest>, I>>(object: I): QueryGetWhitelistRequest {
    const message = createBaseQueryGetWhitelistRequest();
    message.whitelistId = object.whitelistId ?? 0;
    return message;
  },
};

function createBaseQueryGetWhitelistResponse(): QueryGetWhitelistResponse {
  return { whitelist: undefined };
}

export const QueryGetWhitelistResponse = {
  encode(message: QueryGetWhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelist !== undefined) {
      Whitelist.encode(message.whitelist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWhitelistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelist = Whitelist.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhitelistResponse {
    return { whitelist: isSet(object.whitelist) ? Whitelist.fromJSON(object.whitelist) : undefined };
  },

  toJSON(message: QueryGetWhitelistResponse): unknown {
    const obj: any = {};
    message.whitelist !== undefined
      && (obj.whitelist = message.whitelist ? Whitelist.toJSON(message.whitelist) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWhitelistResponse>, I>>(object: I): QueryGetWhitelistResponse {
    const message = createBaseQueryGetWhitelistResponse();
    message.whitelist = (object.whitelist !== undefined && object.whitelist !== null)
      ? Whitelist.fromPartial(object.whitelist)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWhitelistRequest(): QueryAllWhitelistRequest {
  return { pagination: undefined };
}

export const QueryAllWhitelistRequest = {
  encode(message: QueryAllWhitelistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhitelistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhitelistRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllWhitelistRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhitelistRequest>, I>>(object: I): QueryAllWhitelistRequest {
    const message = createBaseQueryAllWhitelistRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWhitelistResponse(): QueryAllWhitelistResponse {
  return { whitelist: [], pagination: undefined };
}

export const QueryAllWhitelistResponse = {
  encode(message: QueryAllWhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.whitelist) {
      Whitelist.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWhitelistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWhitelistResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelist.push(Whitelist.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhitelistResponse {
    return {
      whitelist: Array.isArray(object?.whitelist) ? object.whitelist.map((e: any) => Whitelist.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWhitelistResponse): unknown {
    const obj: any = {};
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) => e ? Whitelist.toJSON(e) : undefined);
    } else {
      obj.whitelist = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWhitelistResponse>, I>>(object: I): QueryAllWhitelistResponse {
    const message = createBaseQueryAllWhitelistResponse();
    message.whitelist = object.whitelist?.map((e) => Whitelist.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Member by index. */
  Member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
  /** Queries a list of Member items. */
  MemberAll(request: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
  /** Queries a Whitelist by index. */
  Whitelist(request: QueryGetWhitelistRequest): Promise<QueryGetWhitelistResponse>;
  /** Queries a list of Whitelist items. */
  WhitelistAll(request: QueryAllWhitelistRequest): Promise<QueryAllWhitelistResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Member = this.Member.bind(this);
    this.MemberAll = this.MemberAll.bind(this);
    this.Whitelist = this.Whitelist.bind(this);
    this.WhitelistAll = this.WhitelistAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.whitelist.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse> {
    const data = QueryGetMemberRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.whitelist.Query", "Member", data);
    return promise.then((data) => QueryGetMemberResponse.decode(new _m0.Reader(data)));
  }

  MemberAll(request: QueryAllMemberRequest): Promise<QueryAllMemberResponse> {
    const data = QueryAllMemberRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.whitelist.Query", "MemberAll", data);
    return promise.then((data) => QueryAllMemberResponse.decode(new _m0.Reader(data)));
  }

  Whitelist(request: QueryGetWhitelistRequest): Promise<QueryGetWhitelistResponse> {
    const data = QueryGetWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.whitelist.Query", "Whitelist", data);
    return promise.then((data) => QueryGetWhitelistResponse.decode(new _m0.Reader(data)));
  }

  WhitelistAll(request: QueryAllWhitelistRequest): Promise<QueryAllWhitelistResponse> {
    const data = QueryAllWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.whitelist.Query", "WhitelistAll", data);
    return promise.then((data) => QueryAllWhitelistResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
