import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product, ProductsList } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public productOnDisplay: string = '';
  public loading: boolean = false;

  constructor(
    private _http: HttpClient,
  ) { }

  ngOnInit() {
    this.loading = true;

    this._http.get("https://raw.githubusercontent.com/andressadesign/files/main/products.json")
      .toPromise()
      .then((res) => {
        this.products = (res as ProductsList).productsList;
        this.loading = false;
      }
    )
  }


  toggleDisplay(url?: string) {
    if (url) {
      this.productOnDisplay = url
    } else {
      this.productOnDisplay = '';
    }
    console.log(this.productOnDisplay);
  }
}
