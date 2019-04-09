import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Product} from "../../interfaces/product";
import {ShoppingList} from "../../interfaces/shoppingList";

@Component({
  selector: 'app-shopping-list-dialog',
  templateUrl: './shopping-list-dialog.component.html',
  styleUrls: ['./shopping-list-dialog.component.css', '../../app.component.css']
})
export class ShoppingListDialogComponent implements OnInit {

  shoppingList: ShoppingList;
  shoppingListProducts: Array<Product> = [];
  editTitleMode: boolean = false;
  title: String = "";

  constructor(public dialogRef: MatDialogRef<ShoppingListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.shoppingList = this.data.shoppingList;
    this.shoppingListProducts = this.data.shoppingList.products;
    this.title = this.data.shoppingList.title;
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    console.log(this.data.shoppingList);
    console.log(this.data);
  }

  removeProductAt(index: number) {
    this.shoppingListProducts.splice(index, 1);
  }

  save() {
    this.dialogRef.close(this.shoppingListProducts);
  }

  saveTitle(title: String) {
    this.title = title;
  }
}
