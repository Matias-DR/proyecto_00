import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierComponent } from './components/cashier/cashier.component';
import { ShoppingProductsComponent } from './components/shopping-products/shopping-products.component';
import { ShoppingComponent } from './shopping.component';


const routes: Routes = [
    {
        path: '',
        component: ShoppingComponent,
        children: [
            {
                path: 'products',
                component: ShoppingProductsComponent
            },
            {
                path: 'cashier',
                component: CashierComponent
            },
            { path: '', redirectTo: 'products', pathMatch: 'full' },
        ]
    },
    { path: '', redirectTo: 'shopping', pathMatch: 'full' },
    { path: '**', redirectTo: 'shopping' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule { }
