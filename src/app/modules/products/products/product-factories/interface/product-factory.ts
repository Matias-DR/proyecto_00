import { OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/products/product-types/interface/product'

export interface ProductFactory extends OnInit {
    manufactureProducts(): Product[]
}
