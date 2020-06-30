import { createNode, Meta, NodeWrapper } from "./types/internal";

export function parse(payload: any): NodeWrapper | null {
  const { $schema } = payload;

  const meta = new Meta();
  meta.payloadName = 'payload';
  meta.depth = 0;

  const node = createNode(payload, payload, meta);

  const result = new NodeWrapper();
  result.$schema = $schema;
  result.node = node;

  return result;
}
