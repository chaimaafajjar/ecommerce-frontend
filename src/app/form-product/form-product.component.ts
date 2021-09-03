import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../modules/category";
import {Product} from "../modules/product";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product:Product=new Product();
  isUpdate:boolean;
  public categorie;
  constructor(public catService:CatalogueService , private router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {

    let p1 = this.route.snapshot.params.p1;


    if (p1 == 'add') {

      this.isUpdate = false;
    } else if (p1 == 'update') {
      let p2 = this.route.snapshot.params.p2;
      this.isUpdate = true;
      this.getProduct(p2);
    }
  }
    getProduct(id) {
      this.catService.getResource("/products/"+2+id)
        .subscribe(data=>{
          this.product=<Product>data;
        },error => {
          console.log(error);
        })
    }


  /*getCategory() {
    this.catService.getResource("/categories")
      .subscribe(data=>{
        this.categorie=data;
      },error => {
        console.log(error);
      })
  }*/



  createProduct() {
    this.catService.createResource("/product",this.product).subscribe( data => {
      alert("Product created successfully.");
    });
  }

  updateProduct(){
    this.catService.updateResource("/product/"+this.product.id,this.product).subscribe(data=>{
      alert("Product updated successfully.")
    });
  }

  deleteProduct(){
    this.catService.deleteResource("/product/"+this.product.id).subscribe(data=>{
      alert("Product deleted successfully.")
    })
  }

}
