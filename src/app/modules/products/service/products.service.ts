import { Injectable } from '@angular/core';
/**
 * Observable:
 * Se importa y asigna este tipo a la respuesta http, ya que al ser asíncrona puede usarse un observador que esté atento al resultado de la consulta
 */
import { Observable } from 'rxjs';
/**
 * Product (Interfaz):
 * Se importa la interfaz de los productos para asignarla al tipo de contenido del observador y a la respuesta del requerimiento GET, ya que el resultado de este tendrá el mismo formato
 */
import { Product } from '../product/interface'
/**
 * HttpClient:
 * Realiza requerimientos tales como en este caso GET
 */
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root' // Rango de disponibilidad para el uso del servicio
})
export class ProductsService {

	constructor(
		private http: HttpClient
	) { }

	get_products(): Observable<Product[]> {
		return this.http.get<Product[]>('http://localhost:3000/products')
	}
}
