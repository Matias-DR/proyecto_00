import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './modules/products/products.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProductComponent } from './modules/products/product/product.component';

@NgModule({
	declarations: [
		AppComponent,
		ProductsComponent,
		CartComponent,
		HeaderComponent,
		ProductComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
