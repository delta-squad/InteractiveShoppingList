import {Component} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ShoppingListDialogComponent} from "./shopping-list-dialog/shopping-list-dialog.component";
import {ShoppingList} from "../interfaces/shoppingList";
import {Product} from "../interfaces/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})

export class DashboardComponent {

  product1: Product = {id: 1, name: "Eggs", category: "Category"};
  product2: Product = {id: 2, name: "Bread", category: "Category"};
  product3: Product = {id: 3, name: "Juice", category: "Category"};
  product4: Product = {id: 4, name: "Beer", category: "Category"};
  product5: Product = {id: 5, name: "Apple", category: "Category"};
  product6: Product = {id: 6, name: "Vodka", category: "Category"};

  shoppingLists: Array<ShoppingList> = [
    {id: 1, title: 'First shopping list', products: [this.product1, this.product2, this.product3]},
    {id: 2, title: 'Second shopping list', products: [this.product3, this.product4, this.product5]},
    {id: 3, title: 'Another shopping list', products: [this.product1, this.product4, this.product6]},
    {id: 4, title: 'Saturday shopping list', products: [this.product2, this.product5, this.product1]},
  ];

  constructor(public dialog: MatDialog) {
  }

  openDialog(list: ShoppingList): void {
    let dialogRef = this.dialog.open(ShoppingListDialogComponent, {
      data: {
        shoppingList: list
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      //TODO: Replace list in current array with list from result
    });
  }
}
