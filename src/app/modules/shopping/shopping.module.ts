import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingProductComponent } from './components/shopping-product/shopping-product.component';
import { ShoppingComponent } from './shopping.component';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { ShoppingCartComponent } from 'src/app/shared/components/shopping-cart/shopping-cart.component';
import { ShoppingProductsComponent } from './components/shopping-products/shopping-products.component';
import { MaterialModule } from 'src/app/material.module';
import { SummaryProductComponent } from './components/summary-product/summary-product.component';


@NgModule({
    declarations: [
        ShoppingProductComponent,
        ShoppingComponent,
        NavbarComponent,
        CarouselComponent,
        ShoppingCartComponent,
        ShoppingProductsComponent,
        SummaryProductComponent
    ],
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        MaterialModule
    ]
})
export class ShoppingModule { }
