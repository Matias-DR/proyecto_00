import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../interfaces/store';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private http: HttpClient) { }

	get_store(): Observable<Store[]> {
		return this.http.get<Store[]>('http://localhost:3000/stores')
	}
}
