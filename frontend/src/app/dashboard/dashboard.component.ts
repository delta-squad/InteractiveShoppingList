import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ShoppingListDialogComponent} from "./shopping-list-dialog/shopping-list-dialog.component";
import {ShoppingList} from "../interfaces/shoppingList";
import {Product} from "../interfaces/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})

export class DashboardComponent implements OnInit {

  columnsNumber: number;
  bigScreenSize: number = 850;
  mediumScreenSize: number = 550;

  product1: Product = {id: 1, name: "Eggs", category: "Category"};
  product2: Product = {id: 2, name: "Bread", category: "Category"};
  product3: Product = {id: 3, name: "Juice", category: "Category"};
  product4: Product = {id: 4, name: "Beer", category: "Category"};
  product5: Product = {id: 5, name: "Apple", category: "Category"};
  product6: Product = {id: 6, name: "Vodka", category: "Category"};

  shoppingLists: Array<ShoppingList> = [
    {id: 1, title: 'First list', products: [this.product1, this.product2, this.product3, this.product4, this.product5]},
    {id: 2, title: 'Second shopping list', products: [this.product3, this.product4, this.product5]},
    {id: 3, title: 'Another shopping list', products: [this.product1, this.product4, this.product6, this.product5]},
    {id: 4, title: 'Saturday shopping list', products: [this.product2, this.product5, this.product1]},
    {id: 5, title: 'Shopping list no 5', products: [this.product3, this.product1, this.product6]},
  ];

  constructor(public dialog: MatDialog) {
  }

  openDialog(list: ShoppingList): void {
    //TODO: if list is not here, then we have to create a new one
    let dialogRef = this.dialog.open(ShoppingListDialogComponent, {
      data: {
        shoppingList: list
      },
      autoFocus: list == undefined,
      height: '90vh',
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        let index = this.shoppingLists.indexOf(list);

        if (index !== -1) {
          this.shoppingLists[index] = result;
        } else {
          this.shoppingLists.push(result);
        }
      }
    });
  }

  ngOnInit() {
    this.calculateColumnsNumber();
  }

  private calculateColumnsNumber() {
    if (window.innerWidth > this.bigScreenSize) {
      this.columnsNumber = 3;
    } else if (window.innerWidth <= this.bigScreenSize && window.innerWidth > this.mediumScreenSize) {
      this.columnsNumber = 2;
    } else this.columnsNumber = 1;
  }

  onResize(event) {
    if (event.target.innerWidth > this.bigScreenSize) {
      this.columnsNumber = 3;
    } else if (event.target.innerWidth <= this.bigScreenSize && event.target.innerWidth > this.mediumScreenSize) {
      this.columnsNumber = 2;
    } else this.columnsNumber = 1;
  }
}
