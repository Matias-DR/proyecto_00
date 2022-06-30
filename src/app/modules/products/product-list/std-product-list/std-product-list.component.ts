import { Component } from '@angular/core';
import { ProductList } from '../interface/product-list';
import { ProductFactory } from 'src/app/modules/products/products/product-factories/interface/product-factory';


@Component({
    selector: 'app-std-product-list',
    templateUrl: './std-product-list.component.html',
    styleUrls: ['./std-product-list.component.sass']
})
export class StdProductListComponent implements ProductList {
    protected readonly _productFactory!: ProductFactory;

    constructor() { }

    ngOnInit(): void {
    }

    get productFactory(): ProductFactory { return this._productFactory }
}
