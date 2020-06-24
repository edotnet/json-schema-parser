import { Node } from "../node.type";
import { Format } from "../types";
import { typeCheck } from ".";

export class StringNode extends Node {
  _format: Format | undefined;

  static build(payload: any, global: any, meta: any): StringNode | null {
    if (typeCheck('string', payload)) {
      const node = new StringNode();
      node._format = payload.format;
      node.type(payload.type);
      node.ref(payload.$ref);
      node.depth(meta.depth);
      node.payload(meta.payloadName);
      return node;
    }

    return null;
  }
}
