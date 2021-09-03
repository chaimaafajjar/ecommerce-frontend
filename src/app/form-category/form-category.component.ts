import { Component, OnInit } from '@angular/core';
import {Category} from "../modules/category";
import {CatalogueService} from "../catalogue.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  category:Category=new Category();
isUpdate:boolean;

  constructor(public catService:CatalogueService , private router:Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
    let p1=this.route.snapshot.params.p1;


    if(p1=='add'){

        this.isUpdate=false;
    }

    else if(p1=='update') {
      let p2=this.route.snapshot.params.p2;
         this.isUpdate=true;
      this.getCategory(p2);

    }

  }

  getCategory(id) {
    this.catService.getResource("/categories/"+id)
      .subscribe(data=>{
        this.category=<Category>data;
      },error => {
        console.log(error);
      })
  }





   createCategory() {
     this.catService.createResource("/category",this.category).subscribe( data => {
       alert("Category created successfully.");
     });
  }

  updateCategory(){
    this.catService.updateResource("/category/"+this.category.id,this.category).subscribe(data=>{
      alert("Category updated successfully.")
    });
  }

  deleteCategory(){
    this.catService.deleteResource("/category/"+this.category.id).subscribe(data=>{
      alert("Category deleted successfully.")
    })
  }

}
