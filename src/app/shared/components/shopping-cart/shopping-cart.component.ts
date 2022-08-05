import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from '../../services/shopping-cart.service';


@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    productsQuantity$: Observable<number> = this.shoppingCartService.productsQuantity$;

    constructor(
        private shoppingCartService: ShoppingCartService,
    ) { }

    ngOnInit(): void {
    }

}
