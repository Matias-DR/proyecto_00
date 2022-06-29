import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './signin/sign-in.component';
import { SignUpComponent } from './signup/sign-up.component';
import { PwdResetComponent } from './pwd-reset/pwd-reset.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    PwdResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
