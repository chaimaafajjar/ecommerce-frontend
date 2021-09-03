import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormCategoryComponent } from './form-category/form-category.component';
import {FormsModule} from "@angular/forms";
import { FormProductComponent } from './form-product/form-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    FormCategoryComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
