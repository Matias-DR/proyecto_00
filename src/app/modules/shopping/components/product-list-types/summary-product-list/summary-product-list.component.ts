import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Product } from '../../product-types/interface/product';
import { ProductList } from '../interface/product-list';

@Component({
    selector: 'app-summary-product-list',
    templateUrl: './summary-product-list.component.html',
    styleUrls: ['./summary-product-list.component.scss']
})
export class SummaryProductListComponent implements ProductList {
    products!: Product[];

    constructor(
        private shoppingCartService: ShoppingCartService
    ) { }

    ngOnInit(): void {
    }

    getProducts(): void {
        this.shoppingCartService.getProducts().pipe(
            tap((res: Product[]) => this.products = res)
        ).subscribe()
    }
}
