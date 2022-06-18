import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ProductsRoutingModule } from './modules/products/products-routing.module';

import { AppComponent } from './app.component';
// import { ProductsComponent } from './modules/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ProductsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
