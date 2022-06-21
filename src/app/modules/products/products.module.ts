import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module'
import { MaterialModule } from 'src/app/material.module';

@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		MaterialModule
	]
})
export class ProductsModule { }
