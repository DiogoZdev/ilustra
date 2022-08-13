import { Component, OnInit } from '@angular/core';
import { productsList } from 'src/app/components/products/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products = productsList;

  constructor() { }

  ngOnInit(): void {
  }

}
