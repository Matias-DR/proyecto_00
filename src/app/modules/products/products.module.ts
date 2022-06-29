import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from 'src/app/material.module';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DelProductComponent } from './del-product/del-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { ShoppingCartComponent } from 'src/app/shared/components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    AddProductComponent,
    DelProductComponent,
    EditProductComponent,
    ToolbarComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
