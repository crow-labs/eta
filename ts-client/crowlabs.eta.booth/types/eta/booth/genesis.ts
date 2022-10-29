/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { GuiltyVote } from "./guilty_vote";
import { Params } from "./params";
import { Poll } from "./poll";
import { PunishmentVote } from "./punishment_vote";

export const protobufPackage = "crowlabs.eta.booth";

/** GenesisState defines the booth module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  guiltyVoteList: GuiltyVote[];
  punishmentVoteList: PunishmentVote[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  pollList: Poll[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, guiltyVoteList: [], punishmentVoteList: [], pollList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.guiltyVoteList) {
      GuiltyVote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.punishmentVoteList) {
      PunishmentVote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.pollList) {
      Poll.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.guiltyVoteList.push(GuiltyVote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.punishmentVoteList.push(PunishmentVote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.pollList.push(Poll.decode(reader, reader.uint32()));
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
      guiltyVoteList: Array.isArray(object?.guiltyVoteList)
        ? object.guiltyVoteList.map((e: any) => GuiltyVote.fromJSON(e))
        : [],
      punishmentVoteList: Array.isArray(object?.punishmentVoteList)
        ? object.punishmentVoteList.map((e: any) => PunishmentVote.fromJSON(e))
        : [],
      pollList: Array.isArray(object?.pollList) ? object.pollList.map((e: any) => Poll.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.guiltyVoteList) {
      obj.guiltyVoteList = message.guiltyVoteList.map((e) => e ? GuiltyVote.toJSON(e) : undefined);
    } else {
      obj.guiltyVoteList = [];
    }
    if (message.punishmentVoteList) {
      obj.punishmentVoteList = message.punishmentVoteList.map((e) => e ? PunishmentVote.toJSON(e) : undefined);
    } else {
      obj.punishmentVoteList = [];
    }
    if (message.pollList) {
      obj.pollList = message.pollList.map((e) => e ? Poll.toJSON(e) : undefined);
    } else {
      obj.pollList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.guiltyVoteList = object.guiltyVoteList?.map((e) => GuiltyVote.fromPartial(e)) || [];
    message.punishmentVoteList = object.punishmentVoteList?.map((e) => PunishmentVote.fromPartial(e)) || [];
    message.pollList = object.pollList?.map((e) => Poll.fromPartial(e)) || [];
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
