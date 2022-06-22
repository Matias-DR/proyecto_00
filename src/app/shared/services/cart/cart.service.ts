import { Injectable } from '@angular/core';
/**
 * BehaviorSubject: Observador que admite un valor inicial desde su instanciación. Se lo usa para indicar a los diferentes datos durante la compra tales como la cantidad de productos enlistados en el carro, que deben actualizarse. Esta actualización se genera a travez del método "next"
 */
import { BehaviorSubject } from 'rxjs';
// import { Subject } from 'rxjs'; En cambio Subject es un observador que no admite valor inicial
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/products/product/interface';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	products: Product[] = [];

	// Observadores para determinar los diferentes datos durante la compra
	// Se los declara como observadores ya que con estos podemos actualizar un dato impreso en la página en tiempo real

	private quantity_subject = new BehaviorSubject<number>(0)
	private total_price_subject = new BehaviorSubject<number>(0)
	private cartSubject = new BehaviorSubject<Product[]>([])

	constructor() {}

	/**
	 * Devuelve el observador de cantidad de productos enlistados en el carro
	 * La forma "<nombre>$" es requerida para devolver datos de tipo Observador
	 */
	get quantity_subject$(): Observable<number> {
		return this.quantity_subject.asObservable()
	}

	get cartSubject$(): Observable<Product[]> {
		return this.cartSubject.asObservable()
	}

	get total_price_subject$(): Observable<number> {
		return this.total_price_subject.asObservable()
	}

	private calculate_total_price(): number {
		return this.products.reduce(
			(acc, next) => acc += next.price * next.quantity, 0
		)
	}

	/**
	 * Actualiza el valor sobre el observador de precio total
	 */
	private update_total_price(): void {
		this.total_price_subject.next(this.calculate_total_price())
	}

	/**
	 * Actualiza el valor sobre el observador de cantidad
	 */
	private add_quantity_to_product(product: Product): void {
		console.log(product)
		let _product = this.products.find(({id}) => id === product.id)
		_product.quantity ? _product.quantity++ : product.quantity = 1 // No funciona porque el producto todavía no tiene el atributo 'quantity'
		console.log(product.quantity)
	}

	private update_quantity(): void {
		this.quantity_subject.next(this.products.length)
	}

	/**
	 * Método por el que llegan los productos seleccionados para la compra
	 * Se ejecuta automáticamente cuando el usuario selecciona un producto para agregar al carro
	 */
	add_product_to_cart(product: Product): void {
		this.products.push(product);
		this.add_quantity_to_product(product);
		this.update_total_price()
		this.update_quantity();
		this.cartSubject.next(this.products);
	}

	del_product_in_cart(product: Product): void {
		
	}
}
