/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "crowlabs.eta.escrow";

export interface BuyerEvidence {
  title: string;
  description: string;
  externalLinks: string[];
}

function createBaseBuyerEvidence(): BuyerEvidence {
  return { title: "", description: "", externalLinks: [] };
}

export const BuyerEvidence = {
  encode(message: BuyerEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.externalLinks) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyerEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyerEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.externalLinks.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyerEvidence {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      externalLinks: Array.isArray(object?.externalLinks) ? object.externalLinks.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: BuyerEvidence): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.externalLinks) {
      obj.externalLinks = message.externalLinks.map((e) => e);
    } else {
      obj.externalLinks = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuyerEvidence>, I>>(object: I): BuyerEvidence {
    const message = createBaseBuyerEvidence();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.externalLinks = object.externalLinks?.map((e) => e) || [];
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
