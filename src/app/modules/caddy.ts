import {ItemProduct} from "./itemProduct";

export class Caddy {

  constructor(name:string)
        {this.name=name;}
  public name: string;
  public items:Map<number,ItemProduct>=new Map();
}
