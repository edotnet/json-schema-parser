export type Type = 
  'array' | 
  'object' | 
  'string' | 
  'number' | 
  'integer' | 
  'boolean' | 
  'null';

export type Format = 'email' | 'date-time';

export type Schema = string;

export declare type DragSRC = 'Payload'

export class Meta {
  ref: string | undefined;
  payloadName: string = 'unset';
  depth: number = -1;
}