import { OnInit } from '@angular/core';
import { ProductFactory } from 'src/app/modules/products/products/product-factories/interface/product-factory';

export interface ProductList extends OnInit {
    productFactory: ProductFactory;
}
