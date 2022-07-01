import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product-types/interface/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private url: string = 'http://localhost:3000/'

    constructor(
        private http: HttpClient
    ) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url + 'products')
    }
}
