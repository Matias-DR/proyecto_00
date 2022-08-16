import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingProductComponent } from './components/shopping-product/shopping-product.component';
import { ShoppingComponent } from './shopping.component';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { ShoppingCartComponent } from 'src/app/shared/components/shopping-cart/shopping-cart.component';
import { ShoppingProductsComponent } from './components/shopping-products/shopping-products.component';


@NgModule({
    declarations: [
        ShoppingProductComponent,
        ShoppingComponent,
        NavbarComponent,
        CarouselComponent,
        ShoppingCartComponent,
        ShoppingProductsComponent
    ],
    imports: [
        CommonModule,
        ShoppingRoutingModule
    ]
})
export class ShoppingModule { }
