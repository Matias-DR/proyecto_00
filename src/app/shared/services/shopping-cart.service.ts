import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../modules/shopping/components/product-types/interface/product';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    products: Product[] = [];
    private _productsQuantity = new BehaviorSubject<number>(0)
    private _productsTotalPrice = new BehaviorSubject<number>(0)
    private _productsInCart = new BehaviorSubject<Product[]>([])

    constructor() { }

    get productsQuantity$(): Observable<number> { return this._productsQuantity.asObservable() }
    get productsTotalPrice$(): Observable<number> { return this._productsTotalPrice.asObservable() }
    get productsInCart$(): Observable<Product[]> { return this._productsInCart.asObservable() }

    private addProduct(product: Product): void {
        try { this.products.find(({ id }) => id === product.id)!.quantity++ }
        catch { this.products.push({ ...product, quantity: 1 }) }
    }

    private updateQuantity(): void {
        this._productsQuantity.next(
            this.products.reduce(
                (prev, product) => prev + product.quantity, 0
            )
        )
    }

    private updateProductsTotalPrice(): void {
        this._productsTotalPrice.next(
            this.products.reduce(
                (prev, product) => prev + product.quantity * product.price, 0
            )
        )
    }

    addProductToCart(product: Product): void {
        this.addProduct(product);
        this.updateQuantity();
        this.updateProductsTotalPrice();
        this._productsInCart.next(this.products)
    }
}
