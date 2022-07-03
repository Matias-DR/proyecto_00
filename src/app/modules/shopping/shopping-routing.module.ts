import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierComponent } from './components/cashier/cashier.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ShoppingComponent },
            // { path: 'cashier', component: CashierComponent}
        ]
    },
    // Es correcto direccionar ahí mismo?
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
