import { Node } from '../node.type'
import { typeCheck } from './factory.node';
import { Meta } from '../types';

export class IntegerNode extends Node {
  _exclusiveMinimum: number | null = null;

  static build(payload: any, global: any, meta: Meta): IntegerNode | null {
    if (typeCheck('integer', payload)) {
      const node = new IntegerNode();
      node._exclusiveMinimum = payload.exclusiveMinimum;
      node.type(payload.type);
      node.ref(meta.ref!);
      node.depth(meta.depth);
      node.payload(meta.payloadName);
      return node;
    }

    return null;
  }
}
