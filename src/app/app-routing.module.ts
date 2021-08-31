import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  {path:'products/:p1/:p2',component:ProductsComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'',redirectTo:'categories',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
