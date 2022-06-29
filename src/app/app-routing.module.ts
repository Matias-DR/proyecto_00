import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(module => module.ProductsModule)
  },
  {
    path: 'cashier',
    loadChildren: () => import('./modules/cashier/cashier.module').then(module => module.CashierModule)
  },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
