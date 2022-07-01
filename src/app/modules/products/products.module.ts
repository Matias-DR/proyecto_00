import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from 'src/app/material.module';

import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { ShoppingCartComponent } from 'src/app/shared/components/shopping-cart/shopping-cart.component';
import { StdProductListComponent } from './product-list/std-product-list/std-product-list.component';
import { StdProductComponent } from './product-types/std-product/std-product.component'
import { SummaryProductComponent } from './product-types/summary-product/summary-product.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    ShoppingCartComponent,
    StdProductListComponent,
    StdProductComponent,
    SummaryProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
