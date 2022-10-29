/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.eta.escrow";

export interface Crow {
  crowId: number;
  listingId: number;
  orderId: number;
  sellerCollateral: Coin | undefined;
  buyerCollateral: Coin | undefined;
  payment: Coin | undefined;
  itemId: number;
  disputeIds: number[];
}

function createBaseCrow(): Crow {
  return {
    crowId: 0,
    listingId: 0,
    orderId: 0,
    sellerCollateral: undefined,
    buyerCollateral: undefined,
    payment: undefined,
    itemId: 0,
    disputeIds: [],
  };
}

export const Crow = {
  encode(message: Crow, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.crowId !== 0) {
      writer.uint32(8).uint64(message.crowId);
    }
    if (message.listingId !== 0) {
      writer.uint32(16).uint64(message.listingId);
    }
    if (message.orderId !== 0) {
      writer.uint32(24).uint64(message.orderId);
    }
    if (message.sellerCollateral !== undefined) {
      Coin.encode(message.sellerCollateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.buyerCollateral !== undefined) {
      Coin.encode(message.buyerCollateral, writer.uint32(42).fork()).ldelim();
    }
    if (message.payment !== undefined) {
      Coin.encode(message.payment, writer.uint32(50).fork()).ldelim();
    }
    if (message.itemId !== 0) {
      writer.uint32(56).uint64(message.itemId);
    }
    writer.uint32(66).fork();
    for (const v of message.disputeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Crow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.listingId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.orderId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.sellerCollateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.buyerCollateral = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.payment = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.disputeIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.disputeIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Crow {
    return {
      crowId: isSet(object.crowId) ? Number(object.crowId) : 0,
      listingId: isSet(object.listingId) ? Number(object.listingId) : 0,
      orderId: isSet(object.orderId) ? Number(object.orderId) : 0,
      sellerCollateral: isSet(object.sellerCollateral) ? Coin.fromJSON(object.sellerCollateral) : undefined,
      buyerCollateral: isSet(object.buyerCollateral) ? Coin.fromJSON(object.buyerCollateral) : undefined,
      payment: isSet(object.payment) ? Coin.fromJSON(object.payment) : undefined,
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      disputeIds: Array.isArray(object?.disputeIds) ? object.disputeIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: Crow): unknown {
    const obj: any = {};
    message.crowId !== undefined && (obj.crowId = Math.round(message.crowId));
    message.listingId !== undefined && (obj.listingId = Math.round(message.listingId));
    message.orderId !== undefined && (obj.orderId = Math.round(message.orderId));
    message.sellerCollateral !== undefined
      && (obj.sellerCollateral = message.sellerCollateral ? Coin.toJSON(message.sellerCollateral) : undefined);
    message.buyerCollateral !== undefined
      && (obj.buyerCollateral = message.buyerCollateral ? Coin.toJSON(message.buyerCollateral) : undefined);
    message.payment !== undefined && (obj.payment = message.payment ? Coin.toJSON(message.payment) : undefined);
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    if (message.disputeIds) {
      obj.disputeIds = message.disputeIds.map((e) => Math.round(e));
    } else {
      obj.disputeIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Crow>, I>>(object: I): Crow {
    const message = createBaseCrow();
    message.crowId = object.crowId ?? 0;
    message.listingId = object.listingId ?? 0;
    message.orderId = object.orderId ?? 0;
    message.sellerCollateral = (object.sellerCollateral !== undefined && object.sellerCollateral !== null)
      ? Coin.fromPartial(object.sellerCollateral)
      : undefined;
    message.buyerCollateral = (object.buyerCollateral !== undefined && object.buyerCollateral !== null)
      ? Coin.fromPartial(object.buyerCollateral)
      : undefined;
    message.payment = (object.payment !== undefined && object.payment !== null)
      ? Coin.fromPartial(object.payment)
      : undefined;
    message.itemId = object.itemId ?? 0;
    message.disputeIds = object.disputeIds?.map((e) => e) || [];
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
