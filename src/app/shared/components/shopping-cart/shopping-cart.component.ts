import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { tap } from 'rxjs';


@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    productsQuantity$: Observable<number> = this.shoppingCartService.productsQuantity$;
    productsInCart$: Observable<Product[]> = this.shoppingCartService.productsInCart$;
    // @Output() shoppEvent: EventEmitter<any> = new EventEmitter<any>()

    constructor(
        private shoppingCartService: ShoppingCartService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    isProductsRoute(): boolean {
        return this.router.url === '/shopping/products'
    }

    getProductsInCart(): Product[] {
        let products!: Product[]
        this.productsInCart$.pipe(
            tap((res: Product[]) => products = res)
        ).subscribe()
        return products
    }
    // A este componente ponerle un modal xl, común (que se cierre al clickear por fuera de su contenedor), con la lista de elementos a comprar y la opción sobre cada uno para permitir eliminarlo y aumentarlo o disminuirlo en cantidad. Además, dos botones que permitan cerrar el modal o dirigirse al cajero
}
