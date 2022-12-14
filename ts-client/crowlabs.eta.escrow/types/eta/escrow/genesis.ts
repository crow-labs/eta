/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Crow } from "./crow";
import { Dispute } from "./dispute";
import { Params } from "./params";

export const protobufPackage = "crowlabs.eta.escrow";

/** GenesisState defines the escrow module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  crowList: Crow[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  disputeList: Dispute[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, crowList: [], disputeList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.crowList) {
      Crow.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.disputeList) {
      Dispute.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.crowList.push(Crow.decode(reader, reader.uint32()));
          break;
        case 3:
          message.disputeList.push(Dispute.decode(reader, reader.uint32()));
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
      crowList: Array.isArray(object?.crowList) ? object.crowList.map((e: any) => Crow.fromJSON(e)) : [],
      disputeList: Array.isArray(object?.disputeList) ? object.disputeList.map((e: any) => Dispute.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.crowList) {
      obj.crowList = message.crowList.map((e) => e ? Crow.toJSON(e) : undefined);
    } else {
      obj.crowList = [];
    }
    if (message.disputeList) {
      obj.disputeList = message.disputeList.map((e) => e ? Dispute.toJSON(e) : undefined);
    } else {
      obj.disputeList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.crowList = object.crowList?.map((e) => Crow.fromPartial(e)) || [];
    message.disputeList = object.disputeList?.map((e) => Dispute.fromPartial(e)) || [];
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
