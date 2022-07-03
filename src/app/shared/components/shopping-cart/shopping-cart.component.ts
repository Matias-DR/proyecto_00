import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    productsQuantity$: Observable<number> = this.shoppingCartService.productsQuantity$;

    constructor(
        private shoppingCartService: ShoppingCartService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }
}
