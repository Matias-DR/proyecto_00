import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './components/shopping/shopping.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ShoppingComponent }
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
