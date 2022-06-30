import { Component } from '@angular/core';
import { Product } from '../interface/product';

@Component({
    selector: 'app-std-product',
    templateUrl: './std-product.component.html',
    styleUrls: ['./std-product.component.sass']
})
export class StdProductComponent implements Product {
    private _id!: number;
    private _name!: string;
    private _description!: string;
    private _price!: number;

    constructor() { }

    ngOnInit(): void {
    }

    get id(): number { return this._id }
    get name(): string { return this._name }
    get description(): string { return this._description }
    get price(): number { return this._price }
}
