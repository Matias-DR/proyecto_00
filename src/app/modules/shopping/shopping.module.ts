import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ShoppingRoutingModule } from './shopping-routing.module';
import { MaterialModule } from 'src/app/material.module';

// Components
import { ShoppingProductComponent } from './components/product-types/shopping-product/shopping-product.component';
import { SummaryProductComponent } from './components/product-types/summary-product/summary-product.component';
import { ShoppingProductListComponent } from './components/product-list-types/shopping-product-list/shopping-product-list.component';
import { SummaryProductListComponent } from './components/product-list-types/summary-product-list/summary-product-list.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { CashierComponent } from './components/cashier/cashier.component';
import { ShoppingCartComponent } from '../../shared/components/shopping-cart/shopping-cart.component';
import { SlideshowComponent } from '../../shared/components/slideshow/slideshow.component';


@NgModule({
    declarations: [
        ShoppingProductComponent,
        SummaryProductComponent,
        ShoppingProductListComponent,
        SummaryProductListComponent,
        ShoppingComponent,
        ToolbarComponent,
        CashierComponent,
        ShoppingCartComponent,
        SlideshowComponent
    ],
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        MaterialModule
    ]
})
export class ShoppingModule { }
