import { Component, OnInit } from '@angular/core';
import { Product } from '../../products/product/interface';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
	products$ = this.cart_svs.cartSubject$;
	total$ = this.cart_svs.total_price_subject$;

	constructor(private cart_svs: CartService) { }

	ngOnInit(): void {
	}

}
