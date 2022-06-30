import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from 'src/app/material.module';

import { AddProductComponent } from './add-product/add-product.component';
import { DelProductComponent } from './del-product/del-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { ShoppingCartComponent } from 'src/app/shared/components/shopping-cart/shopping-cart.component';
import { StdProductComponent } from './products/product-types/std-product/std-product.component';
import { StdProductFactoryComponent } from './products/product-factories/std-product-factory/std-product-factory.component';
import { StdProductListComponent } from './product-list/std-product-list/std-product-list.component';


@NgModule({
  declarations: [
    AddProductComponent,
    DelProductComponent,
    EditProductComponent,
    ToolbarComponent,
    ShoppingCartComponent,
    StdProductComponent,
    StdProductFactoryComponent,
    StdProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
