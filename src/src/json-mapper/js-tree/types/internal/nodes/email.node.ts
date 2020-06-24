import { StringNode } from './string.node';
import { typeCheck } from '.';
import { Meta } from '../types';

export class EmailNode extends StringNode { 
  static build(payload: any, global: any, meta: Meta): EmailNode | null {
    if (typeCheck('string', payload) && payload.format === 'email') {
      const node = StringNode.build(payload, global, meta);
      node!._format = 'email';
      return node as EmailNode;
    }

    return null;
  }
}