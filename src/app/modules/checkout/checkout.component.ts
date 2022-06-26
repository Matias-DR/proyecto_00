import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from 'src/app/shared/interfaces/store';
import { Order } from 'src/app/shared/interfaces/order';
import { NgForm } from '@angular/forms';
import { DetailOrder } from 'src/app/shared/interfaces/detail-order';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { Product } from '../products/product/interface';
import { Detail } from 'src/app/shared/interfaces/detail';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
	model = {
		name: '',
		store: '',
		shipping_address: '',
		city: ''
	}
	shipping: boolean = false;
	stores: Store[] = [];
	cart: Product[] = [];

	constructor(
		private data_svc: DataService,
		private cart_svs: CartService
	) { }

	ngOnInit(): void {
		this.get_store()
		this.get_data_cart()
		this.prepare_details()
	}

	private get_store(): void {
		this.data_svc.get_store().pipe(
			tap((stores: Store[]) => this.stores = stores)
		).subscribe();
	}

	on_shipping_mode_change(mode: boolean): void {
		this.shipping = mode
	}

	// private order_generate(): Order {
	// return ;
	// }

	private get_data_cart(): void {
		this.cart_svs.cartSubject$.pipe(
			tap((products) => this.cart = products)
		).subscribe()
	}
	
	private prepare_details(): Detail[] {
		const details: Detail[] = []
		this.cart.forEach((product: Product) => {
			const {id: product_id, name: product_name, quantity: product_quantity, stock: product_stock} = product
			details.push({product_id, this.order_generate(), product_quantity, product_name})
		}
		)
		return details
	}

	// 'NgForm'
	buy({ form: data }: NgForm): void {
		const order: Order = {
			...data,
			date: new Date().toLocaleDateString(),
			id: Math.round(Math.random() * 100),
			pickup: this.shipping,
			name: this.model.name,
			shippingAddress: this.model.shipping_address,
			city: this.model.city
		}
		this.data_svc.save_order(order).pipe(
			tap(
				(res) => console.log('LLEGA TMB', res),
				switchMap(
					(order) => {
						return this.data_svc.save_order_detail(
							{detail: this.prepare_details(), id: 1}
						)
					}
				)
			)
		).subscribe()
	}
}
