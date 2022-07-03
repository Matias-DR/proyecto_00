import { Component, OnInit } from '@angular/core';
import { Product } from '../../product-types/interface/product';
import { ProductList } from '../interface/product-list';

@Component({
    selector: 'app-summary-product-list',
    templateUrl: './summary-product-list.component.html',
    styleUrls: ['./summary-product-list.component.scss']
})
export class SummaryProductListComponent implements ProductList {
    products!: Product[];

    constructor() { }

    ngOnInit(): void {
    }

    getProducts(): void {}
}
