import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingProductComponent } from './components/shopping-product/shopping-product.component';
import { ShoppingComponent } from './shopping.component';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';


@NgModule({
    declarations: [
        ShoppingProductComponent,
        ShoppingComponent,
        NavbarComponent,
        CarouselComponent
    ],
    imports: [
        CommonModule,
        ShoppingRoutingModule
    ]
})
export class ShoppingModule { }
