import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';


@Component({
    selector: 'app-shopping-product',
    templateUrl: './shopping-product.component.html',
    styleUrls: ['./shopping-product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingProductComponent implements OnInit {
    @Input() values!: Product;
    @Output() addMeEvent: EventEmitter<Product> = new EventEmitter<Product>()

    constructor() { }

    ngOnInit(): void { }

    addMe(): void {
        this.addMeEvent.emit(this.values)
    }

}
