import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/shopping/shopping.module').then(module => module.ShoppingModule),
        pathMatch: 'full'
    },
    { 
        path: 'cashier',
        loadChildren: () => import('./modules/cashier/cashier.module').then(module => module.CashierModule),
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
