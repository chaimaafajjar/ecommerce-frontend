import { Injectable } from '@angular/core';
import {ItemProduct} from "../modules/itemProduct";
import {Caddy} from "../modules/caddy";
import {Product} from "../modules/product";

@Injectable({
  providedIn: 'root'
})
export class CaddyService {
  public caddy:Caddy;

  constructor() {
  }

  public addProductToCaddy(product:Product) {

     let itemProduct:ItemProduct | undefined;
    itemProduct=this.caddy.items.get(product.id);
    if(itemProduct)
    {
      itemProduct.quantity=itemProduct.quantity++;
    }
    else{
      this.caddy.items[product.id]=new ItemProduct(product.currentprice,1,product);
    }
  }

 public removeProductItem(product:Product){

    this.caddy.items.delete(product.id);

 }

  public loadCaddyFromLocalStorage(){

      //let cad=localStorage.getItem("myCaddy_");


  }


  saveCaddy() {

    //localStorage.setItem();
  }



}
