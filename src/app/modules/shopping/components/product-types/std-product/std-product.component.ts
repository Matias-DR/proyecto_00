import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-std-product',
  templateUrl: './std-product.component.html',
  styleUrls: ['./std-product.component.scss']
})
export class StdProductComponent implements OnInit {
  @Input() values!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
