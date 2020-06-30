import React, { ReactElement } from 'react';
import { Node } from "../node.type";
import { createNode, typeCheck } from "./factory.node";
import { Meta } from "../types";
import Expander from '../render/expander';
import { RenderContext } from '../iDrawing';

export class ObjectNode extends Node {
  _properties: Map<String, Node> | undefined;
  _required: Array<String> | undefined;
  _additionalProperties: Node | boolean | undefined;
  _minProperties: number | undefined;
  _maxProperties: number | undefined;

  static build(payload: any, global: any, meta: Meta): ObjectNode | null {
    if (typeCheck('object', payload)) {
      const node = new ObjectNode();
      node.type(payload.type);
      node.ref(meta.ref!);
      node.depth(meta.depth);
      node.payload(meta.payloadName);
      node._properties = new Map<string, Node>();

      for (const property in payload.properties) {
        if (payload.properties.hasOwnProperty(property)) {
          const element = payload.properties[property];
          const metaCopy = Object.assign({}, meta);
          metaCopy.payloadName = `${meta.payloadName}${Node.$separator}${property}`;
          metaCopy.depth++;
          const propNode = createNode(element, global, metaCopy)!
          propNode.name(property);
          node._properties.set(property, propNode);
        }
      }

      node._required = payload.required;
      node._additionalProperties = payload.additionalProperties;
      node._minProperties = payload.minProperties;
      node._maxProperties = payload.maxProperties;

      return node;
    }

    return null;
  }

  render(context: RenderContext): ReactElement {
    const renders: any[] = [];
    this._properties?.forEach((value: Node) => renders.push(value.render(context)));

    return (
      <Expander onExpand={Node.onExpand} node={this} type={this.getTypeStr()} expandable={!!this.$name} name={this.$name} context={context}>
          {renders.map(q => q)}
      </Expander>
    );
  };
}
