/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Item } from "./item";
import { Listing } from "./listing";
import { Params } from "./params";

export const protobufPackage = "crowlabs.eta.market";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetItemRequest {
  itemId: number;
}

export interface QueryGetItemResponse {
  item: Item | undefined;
}

export interface QueryAllItemRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllItemResponse {
  item: Item[];
  pagination: PageResponse | undefined;
}

export interface QueryGetListingRequest {
  listingId: number;
}

export interface QueryGetListingResponse {
  listing: Listing | undefined;
}

export interface QueryAllListingRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllListingResponse {
  listing: Listing[];
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

function createBaseQueryGetItemRequest(): QueryGetItemRequest {
  return { itemId: 0 };
}

export const QueryGetItemRequest = {
  encode(message: QueryGetItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetItemRequest {
    return { itemId: isSet(object.itemId) ? Number(object.itemId) : 0 };
  },

  toJSON(message: QueryGetItemRequest): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetItemRequest>, I>>(object: I): QueryGetItemRequest {
    const message = createBaseQueryGetItemRequest();
    message.itemId = object.itemId ?? 0;
    return message;
  },
};

function createBaseQueryGetItemResponse(): QueryGetItemResponse {
  return { item: undefined };
}

export const QueryGetItemResponse = {
  encode(message: QueryGetItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.item !== undefined) {
      Item.encode(message.item, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item = Item.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetItemResponse {
    return { item: isSet(object.item) ? Item.fromJSON(object.item) : undefined };
  },

  toJSON(message: QueryGetItemResponse): unknown {
    const obj: any = {};
    message.item !== undefined && (obj.item = message.item ? Item.toJSON(message.item) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetItemResponse>, I>>(object: I): QueryGetItemResponse {
    const message = createBaseQueryGetItemResponse();
    message.item = (object.item !== undefined && object.item !== null) ? Item.fromPartial(object.item) : undefined;
    return message;
  },
};

function createBaseQueryAllItemRequest(): QueryAllItemRequest {
  return { pagination: undefined };
}

export const QueryAllItemRequest = {
  encode(message: QueryAllItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllItemRequest();
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

  fromJSON(object: any): QueryAllItemRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllItemRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllItemRequest>, I>>(object: I): QueryAllItemRequest {
    const message = createBaseQueryAllItemRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllItemResponse(): QueryAllItemResponse {
  return { item: [], pagination: undefined };
}

export const QueryAllItemResponse = {
  encode(message: QueryAllItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.item) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllItemResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.item.push(Item.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllItemResponse {
    return {
      item: Array.isArray(object?.item) ? object.item.map((e: any) => Item.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllItemResponse): unknown {
    const obj: any = {};
    if (message.item) {
      obj.item = message.item.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.item = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllItemResponse>, I>>(object: I): QueryAllItemResponse {
    const message = createBaseQueryAllItemResponse();
    message.item = object.item?.map((e) => Item.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetListingRequest(): QueryGetListingRequest {
  return { listingId: 0 };
}

export const QueryGetListingRequest = {
  encode(message: QueryGetListingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listingId !== 0) {
      writer.uint32(8).uint64(message.listingId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetListingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetListingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetListingRequest {
    return { listingId: isSet(object.listingId) ? Number(object.listingId) : 0 };
  },

  toJSON(message: QueryGetListingRequest): unknown {
    const obj: any = {};
    message.listingId !== undefined && (obj.listingId = Math.round(message.listingId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetListingRequest>, I>>(object: I): QueryGetListingRequest {
    const message = createBaseQueryGetListingRequest();
    message.listingId = object.listingId ?? 0;
    return message;
  },
};

function createBaseQueryGetListingResponse(): QueryGetListingResponse {
  return { listing: undefined };
}

export const QueryGetListingResponse = {
  encode(message: QueryGetListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listing !== undefined) {
      Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetListingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing = Listing.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetListingResponse {
    return { listing: isSet(object.listing) ? Listing.fromJSON(object.listing) : undefined };
  },

  toJSON(message: QueryGetListingResponse): unknown {
    const obj: any = {};
    message.listing !== undefined && (obj.listing = message.listing ? Listing.toJSON(message.listing) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetListingResponse>, I>>(object: I): QueryGetListingResponse {
    const message = createBaseQueryGetListingResponse();
    message.listing = (object.listing !== undefined && object.listing !== null)
      ? Listing.fromPartial(object.listing)
      : undefined;
    return message;
  },
};

function createBaseQueryAllListingRequest(): QueryAllListingRequest {
  return { pagination: undefined };
}

export const QueryAllListingRequest = {
  encode(message: QueryAllListingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllListingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllListingRequest();
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

  fromJSON(object: any): QueryAllListingRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllListingRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllListingRequest>, I>>(object: I): QueryAllListingRequest {
    const message = createBaseQueryAllListingRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllListingResponse(): QueryAllListingResponse {
  return { listing: [], pagination: undefined };
}

export const QueryAllListingResponse = {
  encode(message: QueryAllListingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.listing) {
      Listing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllListingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllListingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listing.push(Listing.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllListingResponse {
    return {
      listing: Array.isArray(object?.listing) ? object.listing.map((e: any) => Listing.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllListingResponse): unknown {
    const obj: any = {};
    if (message.listing) {
      obj.listing = message.listing.map((e) => e ? Listing.toJSON(e) : undefined);
    } else {
      obj.listing = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllListingResponse>, I>>(object: I): QueryAllListingResponse {
    const message = createBaseQueryAllListingResponse();
    message.listing = object.listing?.map((e) => Listing.fromPartial(e)) || [];
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
  /** Queries a Item by index. */
  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse>;
  /** Queries a list of Item items. */
  ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse>;
  /** Queries a Listing by index. */
  Listing(request: QueryGetListingRequest): Promise<QueryGetListingResponse>;
  /** Queries a list of Listing items. */
  ListingAll(request: QueryAllListingRequest): Promise<QueryAllListingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Item = this.Item.bind(this);
    this.ItemAll = this.ItemAll.bind(this);
    this.Listing = this.Listing.bind(this);
    this.ListingAll = this.ListingAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.market.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse> {
    const data = QueryGetItemRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.market.Query", "Item", data);
    return promise.then((data) => QueryGetItemResponse.decode(new _m0.Reader(data)));
  }

  ItemAll(request: QueryAllItemRequest): Promise<QueryAllItemResponse> {
    const data = QueryAllItemRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.market.Query", "ItemAll", data);
    return promise.then((data) => QueryAllItemResponse.decode(new _m0.Reader(data)));
  }

  Listing(request: QueryGetListingRequest): Promise<QueryGetListingResponse> {
    const data = QueryGetListingRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.market.Query", "Listing", data);
    return promise.then((data) => QueryGetListingResponse.decode(new _m0.Reader(data)));
  }

  ListingAll(request: QueryAllListingRequest): Promise<QueryAllListingResponse> {
    const data = QueryAllListingRequest.encode(request).finish();
    const promise = this.rpc.request("crowlabs.eta.market.Query", "ListingAll", data);
    return promise.then((data) => QueryAllListingResponse.decode(new _m0.Reader(data)));
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
