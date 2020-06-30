export class Ref {
  path: string = '';
  separator: string = '/';

  constructor(definition: string) {
    this.path = definition;    
  }

  getDefinition(payload: any) {
    const tokens = this.path.split(this.separator).slice(1);
    let final = payload;

    for (const token of tokens) {
      final = final[token];
    }

    return final;
  }
}