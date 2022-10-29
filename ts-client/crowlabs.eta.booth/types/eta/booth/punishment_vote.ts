/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.eta.booth";

export interface PunishmentVote {
  voteId: number;
  pollId: number;
  voterId: number;
  jailTime: number;
  blacklist: boolean;
  refundAmount: Coin | undefined;
}

function createBasePunishmentVote(): PunishmentVote {
  return { voteId: 0, pollId: 0, voterId: 0, jailTime: 0, blacklist: false, refundAmount: undefined };
}

export const PunishmentVote = {
  encode(message: PunishmentVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voteId !== 0) {
      writer.uint32(8).uint64(message.voteId);
    }
    if (message.pollId !== 0) {
      writer.uint32(16).uint64(message.pollId);
    }
    if (message.voterId !== 0) {
      writer.uint32(24).uint64(message.voterId);
    }
    if (message.jailTime !== 0) {
      writer.uint32(32).uint64(message.jailTime);
    }
    if (message.blacklist === true) {
      writer.uint32(40).bool(message.blacklist);
    }
    if (message.refundAmount !== undefined) {
      Coin.encode(message.refundAmount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PunishmentVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePunishmentVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pollId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.voterId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.jailTime = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.blacklist = reader.bool();
          break;
        case 6:
          message.refundAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PunishmentVote {
    return {
      voteId: isSet(object.voteId) ? Number(object.voteId) : 0,
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
      voterId: isSet(object.voterId) ? Number(object.voterId) : 0,
      jailTime: isSet(object.jailTime) ? Number(object.jailTime) : 0,
      blacklist: isSet(object.blacklist) ? Boolean(object.blacklist) : false,
      refundAmount: isSet(object.refundAmount) ? Coin.fromJSON(object.refundAmount) : undefined,
    };
  },

  toJSON(message: PunishmentVote): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = Math.round(message.voteId));
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    message.voterId !== undefined && (obj.voterId = Math.round(message.voterId));
    message.jailTime !== undefined && (obj.jailTime = Math.round(message.jailTime));
    message.blacklist !== undefined && (obj.blacklist = message.blacklist);
    message.refundAmount !== undefined
      && (obj.refundAmount = message.refundAmount ? Coin.toJSON(message.refundAmount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PunishmentVote>, I>>(object: I): PunishmentVote {
    const message = createBasePunishmentVote();
    message.voteId = object.voteId ?? 0;
    message.pollId = object.pollId ?? 0;
    message.voterId = object.voterId ?? 0;
    message.jailTime = object.jailTime ?? 0;
    message.blacklist = object.blacklist ?? false;
    message.refundAmount = (object.refundAmount !== undefined && object.refundAmount !== null)
      ? Coin.fromPartial(object.refundAmount)
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
