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

export class Meta {
  ref: string | undefined;
  payloadName: string = 'unset';
  depth: number = -1;
}