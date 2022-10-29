/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.eta.market";

export interface Listing {
  listingId: number;
  whitelistId: number;
  sellerId: number;
  itemId: number;
  reqPrice: Coin | undefined;
  reqCollateral: Coin | undefined;
  offers: number[];
  crowId: number;
}

function createBaseListing(): Listing {
  return {
    listingId: 0,
    whitelistId: 0,
    sellerId: 0,
    itemId: 0,
    reqPrice: undefined,
    reqCollateral: undefined,
    offers: [],
    crowId: 0,
  };
}

export const Listing = {
  encode(message: Listing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listingId !== 0) {
      writer.uint32(8).uint64(message.listingId);
    }
    if (message.whitelistId !== 0) {
      writer.uint32(16).uint64(message.whitelistId);
    }
    if (message.sellerId !== 0) {
      writer.uint32(24).uint64(message.sellerId);
    }
    if (message.itemId !== 0) {
      writer.uint32(32).uint64(message.itemId);
    }
    if (message.reqPrice !== undefined) {
      Coin.encode(message.reqPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.reqCollateral !== undefined) {
      Coin.encode(message.reqCollateral, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.offers) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.crowId !== 0) {
      writer.uint32(64).uint64(message.crowId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Listing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listingId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.whitelistId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.sellerId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.reqPrice = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.reqCollateral = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.offers.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.offers.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 8:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Listing {
    return {
      listingId: isSet(object.listingId) ? Number(object.listingId) : 0,
      whitelistId: isSet(object.whitelistId) ? Number(object.whitelistId) : 0,
      sellerId: isSet(object.sellerId) ? Number(object.sellerId) : 0,
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      reqPrice: isSet(object.reqPrice) ? Coin.fromJSON(object.reqPrice) : undefined,
      reqCollateral: isSet(object.reqCollateral) ? Coin.fromJSON(object.reqCollateral) : undefined,
      offers: Array.isArray(object?.offers) ? object.offers.map((e: any) => Number(e)) : [],
      crowId: isSet(object.crowId) ? Number(object.crowId) : 0,
    };
  },

  toJSON(message: Listing): unknown {
    const obj: any = {};
    message.listingId !== undefined && (obj.listingId = Math.round(message.listingId));
    message.whitelistId !== undefined && (obj.whitelistId = Math.round(message.whitelistId));
    message.sellerId !== undefined && (obj.sellerId = Math.round(message.sellerId));
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.reqPrice !== undefined && (obj.reqPrice = message.reqPrice ? Coin.toJSON(message.reqPrice) : undefined);
    message.reqCollateral !== undefined
      && (obj.reqCollateral = message.reqCollateral ? Coin.toJSON(message.reqCollateral) : undefined);
    if (message.offers) {
      obj.offers = message.offers.map((e) => Math.round(e));
    } else {
      obj.offers = [];
    }
    message.crowId !== undefined && (obj.crowId = Math.round(message.crowId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Listing>, I>>(object: I): Listing {
    const message = createBaseListing();
    message.listingId = object.listingId ?? 0;
    message.whitelistId = object.whitelistId ?? 0;
    message.sellerId = object.sellerId ?? 0;
    message.itemId = object.itemId ?? 0;
    message.reqPrice = (object.reqPrice !== undefined && object.reqPrice !== null)
      ? Coin.fromPartial(object.reqPrice)
      : undefined;
    message.reqCollateral = (object.reqCollateral !== undefined && object.reqCollateral !== null)
      ? Coin.fromPartial(object.reqCollateral)
      : undefined;
    message.offers = object.offers?.map((e) => e) || [];
    message.crowId = object.crowId ?? 0;
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
