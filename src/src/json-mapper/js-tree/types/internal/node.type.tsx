import React, { ReactElement } from 'react';
import { Type, Ref } from '../index';
import { Base } from './base.type';
import { Meta, Schema } from './types';
import { iDrawing } from './iDrawing';
import Expander from './render/expander';

export class NodeWrapper implements iDrawing {
  node: Node | null = null;
  $schema: Schema | null = null;

  render(): ReactElement {
    return this.node?.render()!;
  }
}

export class Node extends Base implements iDrawing {
  static $separator: string = '.'; 

  /**
   * Node builder functions.
   */
  ref(value: string) {
    this.$ref = new Ref(value);
  }

  type(value: Type | Array<Type>) {
    this.$type = value;
  }

  payload(value: string) {
    this.$payload = value;
  }

  depth(value: number) {
    this.$depth = value
  }

  name(value: string) {
    this.$name = value;
  }

  getTypeStr(): String {
    return this.$type?.toString()!;
  }

  static build(payload: any, global: any, meta: Meta): Node | null {
    const node = new Node();
    node.type(payload.type);
    node.ref(meta.ref!);
    node.payload(meta.payloadName);
    node.depth(meta.depth);
    return node;
  }

  render(): ReactElement {
    return (
      <Expander node={this} type={this.getTypeStr()} expandable={false} name={this.$name}>
      </Expander>
    );
  };
}