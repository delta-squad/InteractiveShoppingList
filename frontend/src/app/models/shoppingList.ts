import {Product} from "./product";

export class ShoppingList {
  constructor(
      public id: number,
      public title: string,
      public products: Array<Product>
  ) {
  }
}
