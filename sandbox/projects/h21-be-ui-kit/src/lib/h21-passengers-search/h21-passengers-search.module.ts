import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatIconModule, MatInputModule,
	MatListModule, MatSnackBarModule
} from '@angular/material';
import {H21PassengersSearchComponent} from "./h21-passengers-search.component"

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		MatListModule,
		MatCardModule,
		MatSnackBarModule,
		MatInputModule
	],
	declarations: [H21PassengersSearchComponent],
	exports: [H21PassengersSearchComponent]
})
export class H21PassengersSearchModule {

}
