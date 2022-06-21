import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
	product_quantity$ = this.cart_svs.quantity_subject$;

  constructor(
    private cart_svs: CartService
  ) { }

  ngOnInit(): void {
  }

}
