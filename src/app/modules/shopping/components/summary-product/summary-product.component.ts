import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductQuantityUpdater } from 'src/app/shared/interfaces/product-quantity-updater';


@Component({
    selector: 'app-summary-product',
    templateUrl: './summary-product.component.html',
    styleUrls: ['./summary-product.component.scss']
})
export class SummaryProductComponent implements OnInit {
    @Input() values!: Product;
    @Output() delMeEvent: EventEmitter<number> = new EventEmitter<number>()
    @Output() updateQuantityEvent: EventEmitter<ProductQuantityUpdater> = new EventEmitter<ProductQuantityUpdater>()

    constructor() { }

    ngOnInit(): void { }

    delMe(): void { this.delMeEvent.emit(this.values.id) }

    updateQuantity(product: ProductQuantityUpdater): void { this.updateQuantityEvent.emit(product) }
}
