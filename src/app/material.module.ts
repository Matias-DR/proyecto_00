import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	exports: [
		MatButtonModule,
		MatInputModule,
		MatToolbarModule,
		MatIconModule
	]
})
export class MaterialModule { }
