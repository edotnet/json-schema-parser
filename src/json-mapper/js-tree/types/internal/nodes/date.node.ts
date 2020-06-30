import { StringNode } from "./string.node";
import { typeCheck } from "./factory.node";
import { Meta } from "../types";

export class DateNode extends StringNode {
  static build(payload: any, global: any, meta: Meta): DateNode | null {
    if (typeCheck('string', payload) && payload.format === 'date-time') {
      const node = StringNode.build(payload, global, meta);
      node!._format = 'date-time';
      return node as DateNode;
    }

    return null;
  }
}
