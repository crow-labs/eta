/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "crowlabs.eta.whitelist";

export interface Member {
  addresss: string;
  memberId: number;
  status: string;
  orders: number[];
  listings: number[];
  disputes: number[];
  crows: number[];
  votes: number[];
}

function createBaseMember(): Member {
  return { addresss: "", memberId: 0, status: "", orders: [], listings: [], disputes: [], crows: [], votes: [] };
}

export const Member = {
  encode(message: Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addresss !== "") {
      writer.uint32(10).string(message.addresss);
    }
    if (message.memberId !== 0) {
      writer.uint32(16).uint64(message.memberId);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    writer.uint32(34).fork();
    for (const v of message.orders) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.listings) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.disputes) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.crows) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(66).fork();
    for (const v of message.votes) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresss = reader.string();
          break;
        case 2:
          message.memberId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.status = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.orders.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.orders.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.listings.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.listings.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.disputes.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.disputes.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.crows.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.crows.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.votes.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.votes.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Member {
    return {
      addresss: isSet(object.addresss) ? String(object.addresss) : "",
      memberId: isSet(object.memberId) ? Number(object.memberId) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Number(e)) : [],
      listings: Array.isArray(object?.listings) ? object.listings.map((e: any) => Number(e)) : [],
      disputes: Array.isArray(object?.disputes) ? object.disputes.map((e: any) => Number(e)) : [],
      crows: Array.isArray(object?.crows) ? object.crows.map((e: any) => Number(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.addresss !== undefined && (obj.addresss = message.addresss);
    message.memberId !== undefined && (obj.memberId = Math.round(message.memberId));
    message.status !== undefined && (obj.status = message.status);
    if (message.orders) {
      obj.orders = message.orders.map((e) => Math.round(e));
    } else {
      obj.orders = [];
    }
    if (message.listings) {
      obj.listings = message.listings.map((e) => Math.round(e));
    } else {
      obj.listings = [];
    }
    if (message.disputes) {
      obj.disputes = message.disputes.map((e) => Math.round(e));
    } else {
      obj.disputes = [];
    }
    if (message.crows) {
      obj.crows = message.crows.map((e) => Math.round(e));
    } else {
      obj.crows = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => Math.round(e));
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.addresss = object.addresss ?? "";
    message.memberId = object.memberId ?? 0;
    message.status = object.status ?? "";
    message.orders = object.orders?.map((e) => e) || [];
    message.listings = object.listings?.map((e) => e) || [];
    message.disputes = object.disputes?.map((e) => e) || [];
    message.crows = object.crows?.map((e) => e) || [];
    message.votes = object.votes?.map((e) => e) || [];
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
