import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories;
  public currentCategorie;



  constructor(public catService:CatalogueService , private router:Router) { }

  ngOnInit(): void {
    this.getCategories();

  }

  public getCategories() {
    this.catService.getResource("/categories").subscribe(data=>{
      this.categories=data;
    },err=>{
      console.log(err);

    })


  }

  ModifyCategory(c) {
    this.router.navigateByUrl("/formcategories/update/"+c.id);
  }



  getProductsByCat(c){
    this.currentCategorie=c;
    this.router.navigateByUrl('/products/2/'+c.id);
  }


}
