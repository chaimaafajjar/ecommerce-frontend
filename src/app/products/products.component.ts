import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products;
public title;
  constructor(public catService:CatalogueService,
  public route:ActivatedRoute, private router: Router, public authService:AuthenticationService) {

    }

  ngOnInit(): void {

    this.router.events.subscribe((val)=>
    {
      if (val instanceof NavigationEnd ) {
        let url = val.url;
        console.log(url);
        let p1=this.route.snapshot.params.p1;


        if(p1==1){

          this.getProducts('/products');
        }

        else if(p1==2) {

          let idCat=this.route.snapshot.params.p2;
          this.getProducts('/categories/'+idCat+'/products');
        }
      }
    })
    let p1=this.route.snapshot.params.p1;
    if(p1==1){

      this.getProducts('/products');

    }  else if(p1==2) {

      let idCat=this.route.snapshot.params.p2;
      this.getProducts('/categories/'+idCat+'/products');
    }

  }
private getProducts(url){
    this.catService.getResource(url)
      .subscribe(data=> {
        this.products = data;
      },err=>{
        console.log(err);
      })


}

  AddProduct() {
    this.router.navigateByUrl("/formproducts/add/"+1);
  }

  ModifyProduct(p) {
    this.router.navigateByUrl("/formproducts/update/"+p.id);

  }
}
