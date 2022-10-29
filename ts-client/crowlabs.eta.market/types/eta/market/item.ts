/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "crowlabs.eta.market";

export interface Item {
  itemId: number;
  imageURL: string[];
  name: string;
  description: string;
  condition: string;
  location: string;
  creatorId: number;
}

function createBaseItem(): Item {
  return { itemId: 0, imageURL: [], name: "", description: "", condition: "", location: "", creatorId: 0 };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).uint64(message.itemId);
    }
    for (const v of message.imageURL) {
      writer.uint32(18).string(v!);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.condition !== "") {
      writer.uint32(42).string(message.condition);
    }
    if (message.location !== "") {
      writer.uint32(50).string(message.location);
    }
    if (message.creatorId !== 0) {
      writer.uint32(56).uint64(message.creatorId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.imageURL.push(reader.string());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.condition = reader.string();
          break;
        case 6:
          message.location = reader.string();
          break;
        case 7:
          message.creatorId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      imageURL: Array.isArray(object?.imageURL) ? object.imageURL.map((e: any) => String(e)) : [],
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      condition: isSet(object.condition) ? String(object.condition) : "",
      location: isSet(object.location) ? String(object.location) : "",
      creatorId: isSet(object.creatorId) ? Number(object.creatorId) : 0,
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    if (message.imageURL) {
      obj.imageURL = message.imageURL.map((e) => e);
    } else {
      obj.imageURL = [];
    }
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.condition !== undefined && (obj.condition = message.condition);
    message.location !== undefined && (obj.location = message.location);
    message.creatorId !== undefined && (obj.creatorId = Math.round(message.creatorId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Item>, I>>(object: I): Item {
    const message = createBaseItem();
    message.itemId = object.itemId ?? 0;
    message.imageURL = object.imageURL?.map((e) => e) || [];
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.condition = object.condition ?? "";
    message.location = object.location ?? "";
    message.creatorId = object.creatorId ?? 0;
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
