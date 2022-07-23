import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interface/product';

@Component({
    selector: 'app-summary-product',
    templateUrl: './summary-product.component.html',
    styleUrls: ['./summary-product.component.scss']
})
export class SummaryProductComponent implements OnInit {
    @Input() values!: Product;
    @Output() deleteMe: EventEmitter<Product> = new EventEmitter<Product>();

    constructor() { }

    ngOnInit(): void {
    }

    deleteMeEvent(): void {
        this.deleteMe.emit(this.values)
    }
}
