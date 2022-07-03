import { OnInit } from "@angular/core";
import { Product } from "../../product-types/interface/product";


export interface ProductList extends OnInit {
    products: Product[]

    getProducts(): void
}
