import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories;
  public currentCategorie;
  public nb:number;



  constructor(public catService:CatalogueService , private router:Router, public authService:AuthenticationService) { }

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


  AddCategory() {
    this.router.navigateByUrl("/formcategories/add/"+1);
  }
}
