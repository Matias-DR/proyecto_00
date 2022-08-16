import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { tap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
    selector: 'app-shopping-products',
    templateUrl: './shopping-products.component.html',
    styleUrls: ['./shopping-products.component.scss']
})
export class ShoppingProductsComponent implements OnInit {
    products!: Product[];

    constructor(
        private productService: ProductService,
        private shoppingCartService: ShoppingCartService
    ) { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productService.getProducts().pipe(
            tap((res: Product[]) => this.products = res)
        ).subscribe()
    }

    addProductToCart(product: Product): void {
        this.shoppingCartService.addProductToCart(product)
    }

}
