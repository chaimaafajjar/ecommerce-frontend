import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "./catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

constructor(private catService:CatalogueService , private router:Router ){}

ngOnInit():void{

}


  retCategories() {

    this.router.navigateByUrl("/categories");
  }
}
