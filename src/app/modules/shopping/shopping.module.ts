import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ShoppingRoutingModule } from './shopping-routing.module';
import { MaterialModule } from 'src/app/material.module';

// Components
import { StdProductComponent } from './components/product-types/std-product/std-product.component';
import { SummaryProductComponent } from './components/product-types/summary-product/summary-product.component';
import { StdProductListComponent } from './components/product-list-types/std-product-list/std-product-list.component';
import { SummaryProductListComponent } from './components/product-list-types/summary-product-list/summary-product-list.component';
import { ShoppingComponent } from './components/shopping/shopping.component';


@NgModule({
    declarations: [
        StdProductComponent,
        SummaryProductComponent,
        StdProductListComponent,
        SummaryProductListComponent,
        ShoppingComponent
    ],
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        MaterialModule
    ]
})
export class ShoppingModule { }
