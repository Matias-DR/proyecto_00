import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        private productsService: ProductsService,
        private _router: Router
    ) { }

    ngOnInit(): void {
        this.getProducts();
    }

    get router(): Router { return this._router }

    getProducts(): void {
        this.productsService.getProducts().pipe(
            tap((res: Product[]) => this.products = res)
        ).subscribe()
    }
}
