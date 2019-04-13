import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ShoppingList} from "../../interfaces/shoppingList";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-shopping-list-dialog',
  templateUrl: './shopping-list-dialog.component.html',
  styleUrls: ['./shopping-list-dialog.component.css', '../../app.component.css']
})
export class ShoppingListDialogComponent implements OnInit {
  shoppingList: ShoppingList;
  editTitleMode: boolean;
  oldTitle: string;
  oldProducts: Array<Product>;

  constructor(public dialogRef: MatDialogRef<ShoppingListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.shoppingList = this.data.shoppingList;
    //pass by value workaround to store old products state
    this.oldProducts = this.data.shoppingList.products.slice(0);
    this.oldTitle = this.data.shoppingList.title;
    this.editTitleMode = false;
    dialogRef.backdropClick().subscribe(() => {
      this.saveOnClose()
    })
  }

  ngOnInit() {
  }

  removeProductAt(index: number) {
    this.shoppingList.products.splice(index, 1);
  }

  saveOnClose() {
    this.dialogRef.close(this.shoppingList);
  }

  discardChanges() {
    this.shoppingList.products = this.oldProducts;
    this.shoppingList.title = this.oldTitle;
    this.saveOnClose();
  }

  saveTitle(title: string) {
    this.shoppingList.title = title;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.saveOnClose();
  }
}
