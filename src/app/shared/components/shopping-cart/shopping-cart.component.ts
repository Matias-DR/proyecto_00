import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { tap } from 'rxjs';
import { ProductQuantityUpdater } from '../../interfaces/product-quantity-updater';


@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    productsQuantity$: Observable<number> = this.shoppingCartService.productsQuantity$;
    productsInCart$: Observable<Product[]> = this.shoppingCartService.productsInCart$;
    productsTotalPrice$: Observable<number> = this.shoppingCartService.productsTotalPrice$;

    constructor(
        private shoppingCartService: ShoppingCartService,
        private router: Router
    ) { }

    ngOnInit(): void { }

    isProductsRoute(): boolean { return this.router.url === '/shopping/products' }

    getProductsInCart(): Product[] {
        let products!: Product[]
        this.productsInCart$.pipe(
            tap((res: Product[]) => products = res)
        ).subscribe()
        return products
    }

    delProduct(id: number): void { this.shoppingCartService.deleteProductInCart(id) }

    updateProductQuantity(product: ProductQuantityUpdater): void { this.shoppingCartService.updateProductQuantityFromId(product) }

    // PENDIENTE HACER
    // goToCashier(): void {
        // Habrá que hacer la validación de campos e ir a la caja
    // }
}
