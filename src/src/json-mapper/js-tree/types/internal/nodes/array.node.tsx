import React, { ReactElement } from 'react';
import { Node } from '../node.type'
import { createNode, typeCheck } from './factory.node';
import { Meta } from '../types';
import Expander from '../render/expander';

export class ArrayNode extends Node {
  _items: Node | null = null;
  _uniqueItems: boolean | undefined;
  _minItems: number | undefined;
  _expandable = true;

  static build(payload: any, global: any, meta: Meta): ArrayNode | null {
    if (typeCheck('array', payload)) {
      const node = new ArrayNode();
      node.name(meta.payloadName);
      meta.payloadName = `${meta.payloadName}01`;
      node.payload(meta.payloadName);
      node.type(payload.type);
      node.ref(payload.items.$ref);
      node.depth(meta.depth);
      meta.depth++;
      node._items = createNode(payload.items, global, meta);
      node._uniqueItems = payload.uniqueItems;
      node._minItems = payload.minItems;
      return node;
    }

    return null;
  };

  getTypeStr(): String {
    return `${this.$type}<${this._items?.$type}>`;
  }

  render(): ReactElement {

    return (
      <Expander node={this} type={this.getTypeStr()} expandable={true} name={this.$name}>
        {this._items?.render()}
      </Expander>
    );
  };
};
