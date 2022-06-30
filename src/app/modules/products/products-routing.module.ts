import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StdProductListComponent } from './product-list/std-product-list/std-product-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: StdProductListComponent }
        ]
    },
    // Es correcto direccionar ahí mismo?
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }
