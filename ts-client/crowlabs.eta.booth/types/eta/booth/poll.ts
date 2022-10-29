/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.eta.booth";

export interface Poll {
  pollId: number;
  funding: Coin | undefined;
  disputeId: number;
  guiltyVotes: number[];
  guiltVerdict: string;
  punishmentVotes: number[];
  punishmentVerdict: string;
}

function createBasePoll(): Poll {
  return {
    pollId: 0,
    funding: undefined,
    disputeId: 0,
    guiltyVotes: [],
    guiltVerdict: "",
    punishmentVotes: [],
    punishmentVerdict: "",
  };
}

export const Poll = {
  encode(message: Poll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pollId !== 0) {
      writer.uint32(8).uint64(message.pollId);
    }
    if (message.funding !== undefined) {
      Coin.encode(message.funding, writer.uint32(18).fork()).ldelim();
    }
    if (message.disputeId !== 0) {
      writer.uint32(24).uint64(message.disputeId);
    }
    writer.uint32(34).fork();
    for (const v of message.guiltyVotes) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.guiltVerdict !== "") {
      writer.uint32(42).string(message.guiltVerdict);
    }
    writer.uint32(50).fork();
    for (const v of message.punishmentVotes) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.punishmentVerdict !== "") {
      writer.uint32(58).string(message.punishmentVerdict);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Poll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pollId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.funding = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.guiltyVotes.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.guiltyVotes.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 5:
          message.guiltVerdict = reader.string();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.punishmentVotes.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.punishmentVotes.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 7:
          message.punishmentVerdict = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Poll {
    return {
      pollId: isSet(object.pollId) ? Number(object.pollId) : 0,
      funding: isSet(object.funding) ? Coin.fromJSON(object.funding) : undefined,
      disputeId: isSet(object.disputeId) ? Number(object.disputeId) : 0,
      guiltyVotes: Array.isArray(object?.guiltyVotes) ? object.guiltyVotes.map((e: any) => Number(e)) : [],
      guiltVerdict: isSet(object.guiltVerdict) ? String(object.guiltVerdict) : "",
      punishmentVotes: Array.isArray(object?.punishmentVotes) ? object.punishmentVotes.map((e: any) => Number(e)) : [],
      punishmentVerdict: isSet(object.punishmentVerdict) ? String(object.punishmentVerdict) : "",
    };
  },

  toJSON(message: Poll): unknown {
    const obj: any = {};
    message.pollId !== undefined && (obj.pollId = Math.round(message.pollId));
    message.funding !== undefined && (obj.funding = message.funding ? Coin.toJSON(message.funding) : undefined);
    message.disputeId !== undefined && (obj.disputeId = Math.round(message.disputeId));
    if (message.guiltyVotes) {
      obj.guiltyVotes = message.guiltyVotes.map((e) => Math.round(e));
    } else {
      obj.guiltyVotes = [];
    }
    message.guiltVerdict !== undefined && (obj.guiltVerdict = message.guiltVerdict);
    if (message.punishmentVotes) {
      obj.punishmentVotes = message.punishmentVotes.map((e) => Math.round(e));
    } else {
      obj.punishmentVotes = [];
    }
    message.punishmentVerdict !== undefined && (obj.punishmentVerdict = message.punishmentVerdict);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Poll>, I>>(object: I): Poll {
    const message = createBasePoll();
    message.pollId = object.pollId ?? 0;
    message.funding = (object.funding !== undefined && object.funding !== null)
      ? Coin.fromPartial(object.funding)
      : undefined;
    message.disputeId = object.disputeId ?? 0;
    message.guiltyVotes = object.guiltyVotes?.map((e) => e) || [];
    message.guiltVerdict = object.guiltVerdict ?? "";
    message.punishmentVotes = object.punishmentVotes?.map((e) => e) || [];
    message.punishmentVerdict = object.punishmentVerdict ?? "";
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
