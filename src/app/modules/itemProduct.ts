import {Product} from "./product";

export class ItemProduct {

  constructor(price:number,quantity:number,product:Product)
  {this.price=price;
    this.quantity=quantity;
    this.product=product;
  }

  public price: number;
  public quantity: number;
  public product:Product;

}
