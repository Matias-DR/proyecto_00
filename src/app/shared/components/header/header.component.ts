import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Router nos permite utilizar sus funcionalidades tales como la vida en el método checkout_redirects

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	/**
	 * Método que se ejecuta automáticamente al usuario clickear sobre el ícono del carrito
	 * Con el método 'navigate' del objeto Router, podemos redirigir el cliente hacia el módulo deseado
	 */
	checkout_redirects(): void {
		this.router.navigate(['checkout'])
	}

}
