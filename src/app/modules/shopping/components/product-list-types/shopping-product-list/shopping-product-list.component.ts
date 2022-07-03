import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { ShoppingCartService } from '../../../../../shared/services/shopping-cart.service';
import { Product } from '../../product-types/interface/product';
import { ProductList } from '../interface/product-list';

@Component({
    selector: 'app-shopping-product-list',
    templateUrl: './shopping-product-list.component.html',
    styleUrls: ['./shopping-product-list.component.scss']
})
export class ShoppingProductListComponent implements ProductList {
    products!: Product[];

    constructor(
        private productsService: ProductsService,
        private shoppingCartService: ShoppingCartService
    ) { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productsService.getProducts().pipe(
            tap((res: Product[]) => this.products = res)
        ).subscribe()
    }

    addProductToCart(product: Product): void {
        this.shoppingCartService.addProductToCart(product)
    }
}
