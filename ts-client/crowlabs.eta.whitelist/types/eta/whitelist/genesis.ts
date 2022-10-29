/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Member } from "./member";
import { Params } from "./params";
import { Whitelist } from "./whitelist";

export const protobufPackage = "crowlabs.eta.whitelist";

/** GenesisState defines the whitelist module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  memberList: Member[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  whitelistList: Whitelist[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, memberList: [], whitelistList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.memberList) {
      Member.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.whitelistList) {
      Whitelist.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.memberList.push(Member.decode(reader, reader.uint32()));
          break;
        case 3:
          message.whitelistList.push(Whitelist.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      memberList: Array.isArray(object?.memberList) ? object.memberList.map((e: any) => Member.fromJSON(e)) : [],
      whitelistList: Array.isArray(object?.whitelistList)
        ? object.whitelistList.map((e: any) => Whitelist.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.memberList) {
      obj.memberList = message.memberList.map((e) => e ? Member.toJSON(e) : undefined);
    } else {
      obj.memberList = [];
    }
    if (message.whitelistList) {
      obj.whitelistList = message.whitelistList.map((e) => e ? Whitelist.toJSON(e) : undefined);
    } else {
      obj.whitelistList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.memberList = object.memberList?.map((e) => Member.fromPartial(e)) || [];
    message.whitelistList = object.whitelistList?.map((e) => Whitelist.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
