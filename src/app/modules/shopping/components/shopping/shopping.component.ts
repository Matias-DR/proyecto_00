import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { Product } from '../product-types/interface/product'

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
    products: Product[] = [];

    constructor(
        private productsService: ProductsService
    ) { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productsService.getProducts().pipe(
            tap((res: Product[]) => this.products = res)
        ).subscribe()
    }
}
