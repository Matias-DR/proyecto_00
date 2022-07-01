import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../product-types/interface/product';

@Component({
    selector: 'app-std-product-list',
    templateUrl: './std-product-list.component.html',
    styleUrls: ['./std-product-list.component.scss']
})
export class StdProductListComponent implements OnInit {
    products!: Product[];

    constructor(
        private productsService: ProductsService
    ) { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.productsService.getProducts().pipe(
            tap((res: Product[]) => this.products = res)
        ).subscribe()
    }
}
