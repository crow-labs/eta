/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { GuiltyVote } from "./guilty_vote";
import { Params } from "./params";
import { Poll } from "./poll";
import { PunishmentVote } from "./punishment_vote";

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

export interface QueryGetPunishmentVoteRequest {
  voteId: number;
}

export interface QueryGetPunishmentVoteResponse {
  punishmentVote: PunishmentVote | undefined;
}

export interface QueryAllPunishmentVoteRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPunishmentVoteResponse {
  punishmentVote: PunishmentVote[];
  pagination: PageResponse | undefined;
}

export interface QueryGetPollRequest {
  pollId: number;
}

export interface QueryGetPollResponse {
  poll: Poll | undefined;
}

export interface QueryAllPollRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllPollResponse {
  poll: Poll[];
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

function createBaseQueryGetPunishmentVoteRequest(): QueryGetPunishmentVoteRequest {
  return { voteId: 0 };
}

export const QueryGetPunishmentVoteRequest = {
  encode(message: QueryGetPunishmentVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voteId !== 0) {
      writer.uint32(8).uint64(message.voteId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPunishmentVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPunishmentVoteRequest();
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

  fromJSON(object: any): QueryGetPunishmentVoteRequest {
    return { voteId: isSet(object.voteId) ? Number(object.voteId) : 0 };
  },

  toJSON(message: QueryGetPunishmentVoteRequest): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = Math.round(message.voteId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPunishmentVoteRequest>, I>>(
    object: I,
  ): QueryGetPunishmentVoteRequest {
    const message = createBaseQueryGetPunishmentVoteRequest();
    message.voteId = object.voteId ?? 0;
    return message;
  },
};

function createBaseQueryGetPunishmentVoteResponse(): QueryGetPunishmentVoteResponse {
  return { punishmentVote: undefined };
}

export const QueryGetPunishmentVoteResponse = {
  encode(message: QueryGetPunishmentVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.punishmentVote !== undefined) {
      PunishmentVote.encode(message.punishmentVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPunishmentVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPunishmentVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.punishmentVote = PunishmentVote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPunishmentVoteResponse {
    return {
      punishmentVote: isSet(object.punishmentVote) ? PunishmentVote.fromJSON(object.punishmentVote) : undefined,
    };
  },

  toJSON(message: QueryGetPunishmentVoteResponse): unknown {
    const obj: any = {};
    message.punishmentVote !== undefined
      && (obj.punishmentVote = message.punishmentVote ? PunishmentVote.toJSON(message.punishmentVote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPunishmentVoteResponse>, I>>(
    object: I,
  ): QueryGetPunishmentVoteResponse {
    const message = createBaseQueryGetPunishmentVoteResponse();
    message.punishmentVote = (object.punishmentVote !== undefined && object.punishmentVote !== null)
      ? PunishmentVote.fromPartial(object.punishmentVote)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPunishmentVoteRequest(): QueryAllPunishmentVoteRequest {
  return { pagination: undefined };
}

export const QueryAllPunishmentVoteRequest = {
  encode(message: QueryAllPunishmentVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPunishmentVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPunishmentVoteRequest();
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

  fromJSON(object: any): QueryAllPunishmentVoteRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPunishmentVoteRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPunishmentVoteRequest>, I>>(
    object: I,
  ): QueryAllPunishmentVoteRequest {
    const message = createBaseQueryAllPunishmentVoteRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPunishmentVoteResponse(): QueryAllPunishmentVoteResponse {
  return { punishmentVote: [], pagination: undefined };
}

export const QueryAllPunishmentVoteResponse = {
  encode(message: QueryAllPunishmentVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.punishmentVote) {
      PunishmentVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPunishmentVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPunishmentVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.punishmentVote.push(PunishmentVote.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPunishmentVoteResponse {
    return {
      punishmentVote: Array.isArray(object?.punishmentVote)
        ? object.punishmentVote.map((e: any) => PunishmentVote.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPunishmentVoteResponse): unknown {
    const obj: any = {};
    if (message.punishmentVote) {
      obj.punishmentVote = message.punishmentVote.map((e) => e ? PunishmentVote.toJSON(e) : undefined);
    } else {
      obj.punishmentVote = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPunishmentVoteResponse>, I>>(
    object: I,
  ): QueryAllPunishmentVoteResponse {
    const message = createBaseQueryAllPunishmentVoteResponse();
    message.punishmentVote = object.punishmentVote?.map((e) => PunishmentVote.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetPollRequest(): QueryGetPollRequest {
  return { pollId: 0 };
}

export const QueryGetPollRequest = {
  encode(message: QueryGetPollRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pollId !== 0) {
      writer.uint32(8).uint64(message.pollId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPollRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPollRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pollId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPollRequest {
    return { pollId: isSet(object.pollId) ? Number(object.pollId) : 0 };
  },

  toJSON(message: QueryGetPollRequest): unknown {
    const obj: any = {};
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPollRequest>, I>>(object: I): QueryGetPollRequest {
    const message = createBaseQueryGetPollRequest();
    message.pollId = object.pollId ?? 0;
    return message;
  },
};

function createBaseQueryGetPollResponse(): QueryGetPollResponse {
  return { poll: undefined };
}

export const QueryGetPollResponse = {
  encode(message: QueryGetPollResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.poll !== undefined) {
      Poll.encode(message.poll, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPollResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPollResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poll = Poll.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPollResponse {
    return { poll: isSet(object.poll) ? Poll.fromJSON(object.poll) : undefined };
  },

  toJSON(message: QueryGetPollResponse): unknown {
    const obj: any = {};
    message.poll !== undefined && (obj.poll = message.poll ? Poll.toJSON(message.poll) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPollResponse>, I>>(object: I): QueryGetPollResponse {
    const message = createBaseQueryGetPollResponse();
    message.poll = (object.poll !== undefined && object.poll !== null) ? Poll.fromPartial(object.poll) : undefined;
    return message;
  },
};

function createBaseQueryAllPollRequest(): QueryAllPollRequest {
  return { pagination: undefined };
}

export const QueryAllPollRequest = {
  encode(message: QueryAllPollRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPollRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPollRequest();
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

  fromJSON(object: any): QueryAllPollRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllPollRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPollRequest>, I>>(object: I): QueryAllPollRequest {
    const message = createBaseQueryAllPollRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllPollResponse(): QueryAllPollResponse {
  return { poll: [], pagination: undefined };
}

export const QueryAllPollResponse = {
  encode(message: QueryAllPollResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poll) {
      Poll.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPollResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPollResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poll.push(Poll.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPollResponse {
    return {
      poll: Array.isArray(object?.poll) ? object.poll.map((e: any) => Poll.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllPollResponse): unknown {
    const obj: any = {};
    if (message.poll) {
      obj.poll = message.poll.map((e) => e ? Poll.toJSON(e) : undefined);
    } else {
      obj.poll = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPollResponse>, I>>(object: I): QueryAllPollResponse {
    const message = createBaseQueryAllPollResponse();
    message.poll = object.poll?.map((e) => Poll.fromPartial(e)) || [];
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
  /** Queries a PunishmentVote by index. */
  PunishmentVote(request: QueryGetPunishmentVoteRequest): Promise<QueryGetPunishmentVoteResponse>;
  /** Queries a list of PunishmentVote items. */
  PunishmentVoteAll(request: QueryAllPunishmentVoteRequest): Promise<QueryAllPunishmentVoteResponse>;
  /** Queries a Poll by index. */
  Poll(request: QueryGetPollRequest): Promise<QueryGetPollResponse>;
  /** Queries a list of Poll items. */
  PollAll(request: QueryAllPollRequest): Promise<QueryAllPollResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GuiltyVote = this.GuiltyVote.bind(this);
    this.GuiltyVoteAll = this.GuiltyVoteAll.bind(this);
    this.PunishmentVote = this.PunishmentVote.bind(this);
    this.PunishmentVoteAll = this.PunishmentVoteAll.bind(this);
    this.Poll = this.Poll.bind(this);
    this.PollAll = this.PollAll.bind(this);
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

  PunishmentVote(request: QueryGetPunishmentVoteRequest): Promise<QueryGetPunishmentVoteResponse> {
    const data = QueryGetPunishmentVoteRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.booth.Query", "PunishmentVote", data);
    return promise.then((data) => QueryGetPunishmentVoteResponse.decode(new _m0.Reader(data)));
  }

  PunishmentVoteAll(request: QueryAllPunishmentVoteRequest): Promise<QueryAllPunishmentVoteResponse> {
    const data = QueryAllPunishmentVoteRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.booth.Query", "PunishmentVoteAll", data);
    return promise.then((data) => QueryAllPunishmentVoteResponse.decode(new _m0.Reader(data)));
  }

  Poll(request: QueryGetPollRequest): Promise<QueryGetPollResponse> {
    const data = QueryGetPollRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.booth.Query", "Poll", data);
    return promise.then((data) => QueryGetPollResponse.decode(new _m0.Reader(data)));
  }

  PollAll(request: QueryAllPollRequest): Promise<QueryAllPollResponse> {
    const data = QueryAllPollRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.booth.Query", "PollAll", data);
    return promise.then((data) => QueryAllPollResponse.decode(new _m0.Reader(data)));
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
