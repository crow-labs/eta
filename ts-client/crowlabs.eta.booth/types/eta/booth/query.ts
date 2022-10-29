/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { GuiltyVote } from "./guilty_vote";
import { Params } from "./params";

export const protobufPackage = "crowlabs.eta.booth";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetGuiltyVoteRequest {
  voteId: number;
}

export interface QueryGetGuiltyVoteResponse {
  guiltyVote: GuiltyVote | undefined;
}

export interface QueryAllGuiltyVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllGuiltyVoteResponse {
  guiltyVote: GuiltyVote[];
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

function createBaseQueryGetGuiltyVoteRequest(): QueryGetGuiltyVoteRequest {
  return { voteId: 0 };
}

export const QueryGetGuiltyVoteRequest = {
  encode(message: QueryGetGuiltyVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voteId !== 0) {
      writer.uint32(8).uint64(message.voteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGuiltyVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuiltyVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGuiltyVoteRequest {
    return { voteId: isSet(object.voteId) ? Number(object.voteId) : 0 };
  },

  toJSON(message: QueryGetGuiltyVoteRequest): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = Math.round(message.voteId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGuiltyVoteRequest>, I>>(object: I): QueryGetGuiltyVoteRequest {
    const message = createBaseQueryGetGuiltyVoteRequest();
    message.voteId = object.voteId ?? 0;
    return message;
  },
};

function createBaseQueryGetGuiltyVoteResponse(): QueryGetGuiltyVoteResponse {
  return { guiltyVote: undefined };
}

export const QueryGetGuiltyVoteResponse = {
  encode(message: QueryGetGuiltyVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guiltyVote !== undefined) {
      GuiltyVote.encode(message.guiltyVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGuiltyVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuiltyVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guiltyVote = GuiltyVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGuiltyVoteResponse {
    return { guiltyVote: isSet(object.guiltyVote) ? GuiltyVote.fromJSON(object.guiltyVote) : undefined };
  },

  toJSON(message: QueryGetGuiltyVoteResponse): unknown {
    const obj: any = {};
    message.guiltyVote !== undefined
      && (obj.guiltyVote = message.guiltyVote ? GuiltyVote.toJSON(message.guiltyVote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGuiltyVoteResponse>, I>>(object: I): QueryGetGuiltyVoteResponse {
    const message = createBaseQueryGetGuiltyVoteResponse();
    message.guiltyVote = (object.guiltyVote !== undefined && object.guiltyVote !== null)
      ? GuiltyVote.fromPartial(object.guiltyVote)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGuiltyVoteRequest(): QueryAllGuiltyVoteRequest {
  return { pagination: undefined };
}

export const QueryAllGuiltyVoteRequest = {
  encode(message: QueryAllGuiltyVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGuiltyVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuiltyVoteRequest();
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

  fromJSON(object: any): QueryAllGuiltyVoteRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllGuiltyVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGuiltyVoteRequest>, I>>(object: I): QueryAllGuiltyVoteRequest {
    const message = createBaseQueryAllGuiltyVoteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGuiltyVoteResponse(): QueryAllGuiltyVoteResponse {
  return { guiltyVote: [], pagination: undefined };
}

export const QueryAllGuiltyVoteResponse = {
  encode(message: QueryAllGuiltyVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.guiltyVote) {
      GuiltyVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGuiltyVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuiltyVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guiltyVote.push(GuiltyVote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllGuiltyVoteResponse {
    return {
      guiltyVote: Array.isArray(object?.guiltyVote) ? object.guiltyVote.map((e: any) => GuiltyVote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllGuiltyVoteResponse): unknown {
    const obj: any = {};
    if (message.guiltyVote) {
      obj.guiltyVote = message.guiltyVote.map((e) => e ? GuiltyVote.toJSON(e) : undefined);
    } else {
      obj.guiltyVote = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGuiltyVoteResponse>, I>>(object: I): QueryAllGuiltyVoteResponse {
    const message = createBaseQueryAllGuiltyVoteResponse();
    message.guiltyVote = object.guiltyVote?.map((e) => GuiltyVote.fromPartial(e)) || [];
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
  /** Queries a GuiltyVote by index. */
  GuiltyVote(request: QueryGetGuiltyVoteRequest): Promise<QueryGetGuiltyVoteResponse>;
  /** Queries a list of GuiltyVote items. */
  GuiltyVoteAll(request: QueryAllGuiltyVoteRequest): Promise<QueryAllGuiltyVoteResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GuiltyVote = this.GuiltyVote.bind(this);
    this.GuiltyVoteAll = this.GuiltyVoteAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.booth.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  GuiltyVote(request: QueryGetGuiltyVoteRequest): Promise<QueryGetGuiltyVoteResponse> {
    const data = QueryGetGuiltyVoteRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.booth.Query", "GuiltyVote", data);
    return promise.then((data) => QueryGetGuiltyVoteResponse.decode(new _m0.Reader(data)));
  }

  GuiltyVoteAll(request: QueryAllGuiltyVoteRequest): Promise<QueryAllGuiltyVoteResponse> {
    const data = QueryAllGuiltyVoteRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.booth.Query", "GuiltyVoteAll", data);
    return promise.then((data) => QueryAllGuiltyVoteResponse.decode(new _m0.Reader(data)));
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
