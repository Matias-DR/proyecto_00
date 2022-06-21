import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/products', pathMatch: 'full'}, // Cuando el cliente solicita la página principal, lo redirigimos a 'products'
	{ path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
	{ path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule) },
	{ path: '**', redirectTo: '/products', pathMatch: 'full'} // El camino '**' es cualquiera. Por eso, esta sentencia conviene indicarla al final de las rutas, ya que como la lectura de caminos es en serie, si no se encontró la dirección ingresada por el usuario, podemos redirigirnos a donde se desee independientemente de cual fuera esta dirección
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
