/**
 * ChangeDetectionStrategy:
 * Este objeto nos permite determinar cuándo se desea checkear un elemento para su actualización. Son posibles 2 estrategias de chekckeo y estas son "default" o "onPush". Default, la cual es aplicada de manera predeterminada, consiste en checkear el elemento cada vez que ocurre algún evento (sea por el usuario o no) o se cumplan otras condiciones. onPush consiste en checkear el elemento solo cuando ingresan datos por algúna de sus enrtadas (@Input()), lo que nos permite ganar rendimiento.
 */
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from './interface';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
	@Input() product!: Product;
	@Output() add_to_cart = new EventEmitter<Product>();

	constructor() { }

	ngOnInit(): void {
	}

	add_to_cart_event(): void {
		this.add_to_cart.emit(this.product)
	}
}
