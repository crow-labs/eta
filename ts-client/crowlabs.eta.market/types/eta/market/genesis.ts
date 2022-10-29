/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Item } from "./item";
import { Listing } from "./listing";
import { Order } from "./order";
import { Params } from "./params";

export const protobufPackage = "crowlabs.eta.market";

/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  itemList: Item[];
  listingList: Listing[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  orderList: Order[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, itemList: [], listingList: [], orderList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.itemList) {
      Item.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.listingList) {
      Listing.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.orderList) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.itemList.push(Item.decode(reader, reader.uint32()));
          break;
        case 3:
          message.listingList.push(Listing.decode(reader, reader.uint32()));
          break;
        case 4:
          message.orderList.push(Order.decode(reader, reader.uint32()));
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
      itemList: Array.isArray(object?.itemList) ? object.itemList.map((e: any) => Item.fromJSON(e)) : [],
      listingList: Array.isArray(object?.listingList) ? object.listingList.map((e: any) => Listing.fromJSON(e)) : [],
      orderList: Array.isArray(object?.orderList) ? object.orderList.map((e: any) => Order.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.itemList) {
      obj.itemList = message.itemList.map((e) => e ? Item.toJSON(e) : undefined);
    } else {
      obj.itemList = [];
    }
    if (message.listingList) {
      obj.listingList = message.listingList.map((e) => e ? Listing.toJSON(e) : undefined);
    } else {
      obj.listingList = [];
    }
    if (message.orderList) {
      obj.orderList = message.orderList.map((e) => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orderList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.itemList = object.itemList?.map((e) => Item.fromPartial(e)) || [];
    message.listingList = object.listingList?.map((e) => Listing.fromPartial(e)) || [];
    message.orderList = object.orderList?.map((e) => Order.fromPartial(e)) || [];
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
