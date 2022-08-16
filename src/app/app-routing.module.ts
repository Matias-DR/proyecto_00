import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: 'shopping',
        loadChildren: () => import('./modules/shopping/shopping.module').then(module => module.ShoppingModule)
    },
    { path: '', redirectTo: 'shopping', pathMatch: 'full' },
    { path: '**', redirectTo: 'shopping' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
