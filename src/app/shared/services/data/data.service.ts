import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../interfaces/store';
import { Order } from '../../interfaces/order';
import { DetailOrder } from '../../interfaces/detail-order';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) { }

	get_url(): string {
		return 'http://localhost:3000'
	}

	get_store(): Observable<Store[]> {
		return this.http.get<Store[]>(this.get_url()+'/stores')
	}

	save_order(order: Order): Observable<Order> {
		return this.http.post<Order>(this.get_url()+'/orders', order)
	}

	save_order_detail(detail_order: DetailOrder): Observable<DetailOrder> {
		return this.http.post<DetailOrder>(this.get_url()+'/detailsOrders', detail_order)
	}
}
