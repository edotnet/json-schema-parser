import { Type, Ref } from "..";

export class Base {
  $ref: Ref | undefined = undefined; 
  $type: Type | Array<Type> | undefined = undefined;
  $payload: string = '';
  $depth: number = 0;
  $name: string = '';
}
