/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.eta.market";

export interface Order {
  orderId: number;
  whitelistId: number;
  listingId: number;
  buyerId: number;
  price: Coin | undefined;
  collateral: Coin | undefined;
  location: string;
  note: string;
}

function createBaseOrder(): Order {
  return {
    orderId: 0,
    whitelistId: 0,
    listingId: 0,
    buyerId: 0,
    price: undefined,
    collateral: undefined,
    location: "",
    note: "",
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== 0) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.whitelistId !== 0) {
      writer.uint32(16).uint64(message.whitelistId);
    }
    if (message.listingId !== 0) {
      writer.uint32(24).uint64(message.listingId);
    }
    if (message.buyerId !== 0) {
      writer.uint32(32).uint64(message.buyerId);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(50).fork()).ldelim();
    }
    if (message.location !== "") {
      writer.uint32(58).string(message.location);
    }
    if (message.note !== "") {
      writer.uint32(66).string(message.note);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.whitelistId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.listingId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.buyerId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.price = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.location = reader.string();
          break;
        case 8:
          message.note = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
      whitelistId: isSet(object.whitelistId) ? Number(object.whitelistId) : 0,
      listingId: isSet(object.listingId) ? Number(object.listingId) : 0,
      buyerId: isSet(object.buyerId) ? Number(object.buyerId) : 0,
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined,
      collateral: isSet(object.collateral) ? Coin.fromJSON(object.collateral) : undefined,
      location: isSet(object.location) ? String(object.location) : "",
      note: isSet(object.note) ? String(object.note) : "",
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    message.whitelistId !== undefined && (obj.whitelistId = Math.round(message.whitelistId));
    message.listingId !== undefined && (obj.listingId = Math.round(message.listingId));
    message.buyerId !== undefined && (obj.buyerId = Math.round(message.buyerId));
    message.price !== undefined && (obj.price = message.price ? Coin.toJSON(message.price) : undefined);
    message.collateral !== undefined
      && (obj.collateral = message.collateral ? Coin.toJSON(message.collateral) : undefined);
    message.location !== undefined && (obj.location = message.location);
    message.note !== undefined && (obj.note = message.note);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.orderId = object.orderId ?? 0;
    message.whitelistId = object.whitelistId ?? 0;
    message.listingId = object.listingId ?? 0;
    message.buyerId = object.buyerId ?? 0;
    message.price = (object.price !== undefined && object.price !== null) ? Coin.fromPartial(object.price) : undefined;
    message.collateral = (object.collateral !== undefined && object.collateral !== null)
      ? Coin.fromPartial(object.collateral)
      : undefined;
    message.location = object.location ?? "";
    message.note = object.note ?? "";
    return message;
  },
};

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
