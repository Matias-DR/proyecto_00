import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
    selector: 'app-summary-product',
    templateUrl: './summary-product.component.html',
    styleUrls: ['./summary-product.component.scss']
})
export class SummaryProductComponent implements OnInit {
    @Input() values!: Product;
    @Output() delMeEvent: EventEmitter<number> = new EventEmitter<number>()

    constructor() { }

    ngOnInit(): void {
    }

    delMe(): void {
        this.delMeEvent.emit(this.values.id)
    }
}
