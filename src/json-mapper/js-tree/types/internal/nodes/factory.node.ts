import { Ref } from "..";
import { 
  ArrayNode, 
  DateNode, 
  EmailNode, 
  ObjectNode, 
  StringNode
} from ".";
import { Type, Meta } from "../types";
import { Node } from "../node.type";
import { IntegerNode } from "./integer.node";

export function createNode(obj: any, payload: any, meta: Meta): Node | null {
  const chain = [
    ArrayNode.build,
    DateNode.build,
    EmailNode.build,
    ObjectNode.build,
    StringNode.build,
    IntegerNode.build,
    Node.build
  ];
  
  if (obj.$ref) {
    const ref = new Ref(obj.$ref);
    meta.ref = obj.$ref;
    obj = ref.getDefinition(payload);
    return createNode(obj, payload, meta);
  }

  for (const builder of chain) {
    const node = builder(obj, payload, meta);
    if (node) return node;
  }

  return null;
}

export function typeCheck(type: Type, obj: any): boolean {
  let types: Type[] = obj.type;
  if (!Array.isArray(types)) {
    types = [types];
  }

  return types.includes(type);
}
