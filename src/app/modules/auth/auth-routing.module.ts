import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdResetComponent } from './pwd-reset/pwd-reset.component';
import { SignInComponent } from './signin/sign-in.component';
import { SignUpComponent } from './signup/sign-up.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'pwd-reset', component: PwdResetComponent },
    ]
  },
  // Averiguar a dónde enviar al usuario cuando ingresa '/auth/**' (énfasis en sesiones)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
