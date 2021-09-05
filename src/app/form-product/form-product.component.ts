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
  idChosenCategory:number;
  data: Object;
  category:Category=new Category();
  constructor(public catService:CatalogueService , private router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory();



    let p1 = this.route.snapshot.params.p1;


    if (p1 == 'add') {

      this.isUpdate = false;
    } else if (p1 == 'update') {
      let p2 = this.route.snapshot.params.p2;
      this.isUpdate = true;
      this.getProduct(p2);
      this.getCatByProd(p2);

    }
  }

    getProduct(id)
    {
      this.catService.getResource("/products/" + id)
        .subscribe(data => {
          this.product = <Product>data;
        }, error => {
          console.log(error);
        })
    }

    getCategory()
    {
      this.catService.getResource("/categories")
        .subscribe(data => {
          this.categorie = data;
        }, error => {
          console.log(error);
        })
    }



  getCatByProd(id)
  {
    this.catService.getResource("/products/"+id+"/category")
      .subscribe(data => {
        this.category =<Category> data;
      }, error => {
        console.log(error);
      })
  }


  getCategoryById(id): Category{
    this.catService.getResource("/categories/"+id+"")
      .subscribe(data=>{
        this.category=<Category>data;
      },error => {
        console.log(error);
      })
    return this.category
  }


  createProduct(){
    this.data = {
      "id":this.product.id,
      "name": this.product.name,
      "description": this.product.description,
      "currentprice": this.product.currentprice,
      "promotion": this.product.promotion,
      "selected": this.product.selected,
      "available": this.product.available,
      "photoName": this.product.photoName,
      "category":this.category
    };
    this.catService.createResource("/product",this.data).subscribe( data => {
      alert("Product created successfully.");
      this.router.navigateByUrl("/categories");
    });
  }
  updateProduct(){
    this.data = {
      "id":this.product.id,
      "name": this.product.name,
      "description": this.product.description,
      "currentprice": this.product.currentprice,
      "promotion": this.product.promotion,
      "selected": this.product.selected,
      "available": this.product.available,
      "photoName": this.product.photoName,
      "category":this.category
    };
    this.catService.updateResource("/product/"+this.product.id,this.data).subscribe( data => {
      alert("Product updated successfully.");
      this.router.navigateByUrl("/categories");
    });
  }

  deleteProduct(){
    this.catService.deleteResource("/product/"+this.product.id).subscribe( data => {
      alert("Product deleted successfully.");
      this.router.navigateByUrl("/categories");
    });
  }


}
