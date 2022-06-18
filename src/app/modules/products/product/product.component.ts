import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from './interface';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
	@Input() product!: Product;

	constructor() { }

	ngOnInit(): void {
	}

}
