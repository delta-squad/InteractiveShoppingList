import {Product} from "./product";

export interface ShoppingList {
  id: number;
  title: string;
  products: Array<Product>;
}
