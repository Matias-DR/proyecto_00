import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';
import { Product } from '../products/product/interface';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from 'src/app/shared/interfaces/store';

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
	stores: Store[] = [];

	constructor(private data_svc: DataService) { }

	ngOnInit(): void {
		this.get_store()
	}

	get_store(): void {
		this.data_svc.get_store().pipe(
			tap((stores: Store[]) => this.stores = stores)
		).subscribe();
	}

	on_shipping_mode_change(): void {
		this.shipping = !this.shipping
		console.log('llega')
	}

	on_subsidiary_change(option: string): void {
		this.subsidiary_selected = option
		console.log(this.subsidiary_selected)
	}

	buy(): void {
		console.log('buy')
	}
}
