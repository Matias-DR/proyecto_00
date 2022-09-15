import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
    selector: 'app-cashier',
    templateUrl: './cashier.component.html',
    styleUrls: ['./cashier.component.scss']
})
export class CashierComponent implements OnInit {
    products!: Product[];
    email = new FormControl('', [Validators.required, Validators.email]);

    constructor() { }

    ngOnInit(): void {
    }

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : ''
    }
}
