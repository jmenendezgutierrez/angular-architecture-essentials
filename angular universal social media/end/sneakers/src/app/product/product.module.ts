import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './conatiners/product-list/product-list.component';
import { ProductDetailsComponent } from './conatiners/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductDetailsComponent, ProductComponent, ProductsComponent]
})
export class ProductModule { }
