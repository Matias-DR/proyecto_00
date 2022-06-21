import { Component, OnInit } from '@angular/core';
import { Product } from './product/interface'
import { ProductsService } from './service/products.service'
import { tap } from 'rxjs/operators';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
	products!: Product[];

	constructor(
		private products_service: ProductsService,
		private cart_svs: CartService
	) { }

	ngOnInit(): void {
		this.get_products()
	}

	/**
	 * Utiliza el servicio de productos para traer estos con la solicitud GET
	 */
	get_products(): void {
		// pipe(): Funciona de igual manera que en UNIX, envía la información de un lado a otro, desde izquierda (salida) a derecha (entrada)
		// tap(): Pendiente
		this.products_service.get_products().pipe(
			tap(
				(res: Product[]) => this.products = res
			)
		).subscribe()
	}

	/**
	 * Se ejecuta automáticamente al usuario generar el evento de agregado al carrito
	 * Envía el producto seleccionado al servicio para actualizar el carro de compras
	 */
	add_to_cart_event(product: Product): void {
		this.cart_svs.add_product_to_cart(product)
	}
}
