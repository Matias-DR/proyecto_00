import { Injectable } from '@angular/core';
/**
 * BehaviorSubject: Observador que admite un valor inicial desde su instanciación. Se lo usa para indicar a los diferentes datos durante la compra tales como la cantidad de productos enlistados en el carro, que deben actualizarse. Esta actualización se genera a travez del método "next"
 */
// import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/modules/products/product/interface';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	products: Product[] = [];

	// Observadores para determinar los diferentes datos durante la compra
	// Se los declara como observadores ya que con estos podemos actualizar un dato impreso en la página en tiempo real
	// private quantity_subject = new BehaviorSubject<number>(0)
	// private total_price_subject = new BehaviorSubject<number>(0)

	// En cambio Subject es un observador que no admite valor inicial
	private quantity_subject = new Subject<number>()
	private total_price_subject = new Subject<number>()

	constructor() {}

	/**
	 * Devuelve el observador de cantidad de productos enlistados en el carro
	 * La forma "<nombre>$" es requerida para devolver datos de tipo Observador
	 */
	get quantity_subject$(): Observable<number> {
		return this.quantity_subject.asObservable()
	}

	private calculate_total_price(): number {
		return this.products.reduce(
			(acc, next) => acc += next.price, 0
		)
	}

	/**
	 * Actualiza el valor sobre el observador de precio total
	 */
	update_total_price(): void {
		this.total_price_subject.next(this.calculate_total_price())
	}

	/**
	 * Actualiza el valor sobre el observador de cantidad
	 */
	update_quantity(): void {
		this.quantity_subject.next(this.products.length)
	}

	/**
	 * Método por el que llegan los productos seleccionados para la compra
	 * Se ejecuta automáticamente cuando el usuario selecciona un producto para agregar al carro
	 */
	add_product_to_cart(product: Product): void {
		this.products.push(product);
		this.update_total_price()
		this.update_quantity();
	}
}
