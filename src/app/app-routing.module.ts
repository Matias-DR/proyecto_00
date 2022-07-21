import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping',
    loadChildren: () => import('./modules/shopping/shopping.module').then(module => module.ShoppingModule)
  },
  { path: '**', redirectTo: 'shopping', pathMatch: 'full' }
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
