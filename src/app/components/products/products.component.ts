import { Component } from '@angular/core';
import { productsList } from 'src/app/components/products/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public products = productsList;
  public productOnDisplay: string = '';

  constructor() { }


  toggleDisplay(url?: string) {
    if (url) {
      this.productOnDisplay = url
    } else {
      this.productOnDisplay = '';
    }
  }
}
