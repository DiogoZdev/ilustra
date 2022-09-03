export interface Product {
  title: string;
  collection: string;
  url: string;
  imageUrl: string
}

export interface ProductsList {
  productsList: Product[];
}