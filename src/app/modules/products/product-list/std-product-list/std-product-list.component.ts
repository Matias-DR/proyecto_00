import { Component } from '@angular/core';
import { Product } from '../../product-types/interface/product';
import { ProductService } from '../../service/product.service';
import { ProductList } from '../interface/product-list';
import { tap } from 'rxjs/operators';


@Component({
    selector: 'app-std-product-list',
    templateUrl: './std-product-list.component.html',
    styleUrls: ['./std-product-list.component.sass']
})
export class StdProductListComponent implements ProductList {
    products!: Product[];

    constructor(
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        this.getProducts();
    }
    
    getProducts(): void {
        this.productService.getProducts().pipe(
            tap((res) => { this.products = res })
        ).subscribe()
    }
}
