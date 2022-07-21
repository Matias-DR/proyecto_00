import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../interface/product';

@Component({
    selector: 'app-shopping-product',
    templateUrl: './shopping-product.component.html',
    styleUrls: ['./shopping-product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingProductComponent implements OnInit {
    @Input() values!: Product;
    @Output() addMe: EventEmitter<Product> = new EventEmitter<Product>()

    constructor(
    ) { }

    ngOnInit(): void {}

    addMeEvent(): void {
        this.addMe.emit(this.values)
    }
}
