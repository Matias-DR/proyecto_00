import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product/interface'

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
	model = {
		name: '',
		shipping_modes: ['Retiro por local', 'Envío a domicilio'],
		shipping_address: '',
		subsidiarys: ['Sucursal 1', 'Sucursal 2', 'Sucursal 3']
	}
	shipping: boolean = false;
	subsidiary_selected: string = '';

	constructor() { }

	ngOnInit(): void {
	}

	on_shipping_mode_change(): void {
		this.shipping = !this.shipping
	}

	on_subsidiary_change(option: string): void {
		this.subsidiary_selected = option
		console.log(this.subsidiary_selected)
	}

	buy(): void {
		console.log('buy')
	}
}
