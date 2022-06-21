import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
	exports: [
		MatButtonModule,
		MatInputModule,
		MatToolbarModule,
		MatIconModule,
		MatBadgeModule,
		MatGridListModule,
		MatCardModule,
		MatFormFieldModule,
		MatRadioModule,
		MatSelectModule
	]
})
export class MaterialModule { }
