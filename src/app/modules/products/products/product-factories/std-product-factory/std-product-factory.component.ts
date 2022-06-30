import { Component } from '@angular/core';

// Interface
import { ProductFactory } from '../interface/product-factory';
import { Product } from 'src/app/modules/products/products/product-types/interface/product'

@Component({
    selector: 'app-std-product-factory',
    templateUrl: './std-product-factory.component.html',
    styleUrls: ['./std-product-factory.component.sass']
})
export class StdProductFactoryComponent implements ProductFactory {

    constructor() { }

    ngOnInit(): void {
    }

    // Sería este quien se encarga de realizar los pasos tales como la llamada al servicio para solicitar los productos y así crear la lista que será devuelta
    // Podría crearse diferentes clases de Factory para realizar diferentes rutinas entre los métodos de creación
    manufactureProducts(): Product[] {
        return []
    }
}
