/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BuyerEvidence } from "./buyer_evidence";
import { SellerEvidence } from "./seller_evidence";

export const protobufPackage = "crowlabs.eta.escrow";

export interface Dispute {
  disputeId: number;
  crowId: number;
  creatorId: number;
  buyerEvidence: BuyerEvidence | undefined;
  sellerEvidence: SellerEvidence | undefined;
}

function createBaseDispute(): Dispute {
  return { disputeId: 0, crowId: 0, creatorId: 0, buyerEvidence: undefined, sellerEvidence: undefined };
}

export const Dispute = {
  encode(message: Dispute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disputeId !== 0) {
      writer.uint32(8).uint64(message.disputeId);
    }
    if (message.crowId !== 0) {
      writer.uint32(16).uint64(message.crowId);
    }
    if (message.creatorId !== 0) {
      writer.uint32(24).uint64(message.creatorId);
    }
    if (message.buyerEvidence !== undefined) {
      BuyerEvidence.encode(message.buyerEvidence, writer.uint32(34).fork()).ldelim();
    }
    if (message.sellerEvidence !== undefined) {
      SellerEvidence.encode(message.sellerEvidence, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dispute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDispute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.crowId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.creatorId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.buyerEvidence = BuyerEvidence.decode(reader, reader.uint32());
          break;
        case 5:
          message.sellerEvidence = SellerEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Dispute {
    return {
      disputeId: isSet(object.disputeId) ? Number(object.disputeId) : 0,
      crowId: isSet(object.crowId) ? Number(object.crowId) : 0,
      creatorId: isSet(object.creatorId) ? Number(object.creatorId) : 0,
      buyerEvidence: isSet(object.buyerEvidence) ? BuyerEvidence.fromJSON(object.buyerEvidence) : undefined,
      sellerEvidence: isSet(object.sellerEvidence) ? SellerEvidence.fromJSON(object.sellerEvidence) : undefined,
    };
  },

  toJSON(message: Dispute): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = Math.round(message.disputeId));
    message.crowId !== undefined && (obj.crowId = Math.round(message.crowId));
    message.creatorId !== undefined && (obj.creatorId = Math.round(message.creatorId));
    message.buyerEvidence !== undefined
      && (obj.buyerEvidence = message.buyerEvidence ? BuyerEvidence.toJSON(message.buyerEvidence) : undefined);
    message.sellerEvidence !== undefined
      && (obj.sellerEvidence = message.sellerEvidence ? SellerEvidence.toJSON(message.sellerEvidence) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Dispute>, I>>(object: I): Dispute {
    const message = createBaseDispute();
    message.disputeId = object.disputeId ?? 0;
    message.crowId = object.crowId ?? 0;
    message.creatorId = object.creatorId ?? 0;
    message.buyerEvidence = (object.buyerEvidence !== undefined && object.buyerEvidence !== null)
      ? BuyerEvidence.fromPartial(object.buyerEvidence)
      : undefined;
    message.sellerEvidence = (object.sellerEvidence !== undefined && object.sellerEvidence !== null)
      ? SellerEvidence.fromPartial(object.sellerEvidence)
      : undefined;
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
