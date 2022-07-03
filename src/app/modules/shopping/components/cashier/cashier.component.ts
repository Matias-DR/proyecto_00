import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../../shared/services/shopping-cart.service';
import { Product } from 'src/app/modules/shopping/components/product-types/interface/product'

@Component({
    selector: 'app-cashier',
    templateUrl: './cashier.component.html',
    styleUrls: ['./cashier.component.scss']
})
export class CashierComponent implements OnInit {

    constructor(
        private shoppingCartService: ShoppingCartService
    ) { }

    ngOnInit(): void {
    }
}
