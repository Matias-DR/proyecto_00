import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interface/product';

@Component({
    selector: 'app-summary-product',
    templateUrl: './summary-product.component.html',
    styleUrls: ['./summary-product.component.scss']
})
export class SummaryProductComponent implements OnInit {
    @Input() values!: Product;

    constructor() { }

    ngOnInit(): void {
    }

}
