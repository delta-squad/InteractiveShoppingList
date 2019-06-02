import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ShoppingList} from "../../models/shoppingList";
import {Product} from "../../models/product";
import {EventService} from "../event.service";

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
              @Inject(MAT_DIALOG_DATA) public data: any,
              private EventService: EventService ) {
    this.evaluateShoppingList();
    this.editTitleMode = !this.nameExists(this.shoppingList.title);
    dialogRef.backdropClick().subscribe(() => {
      this.saveOnClose()
    })
  }

  private evaluateShoppingList() {
    if (this.data.shoppingList != undefined) {
      this.saveListValues();
    } else {
      this.shoppingList = new ShoppingList(99, "", new Array<Product>());
    }
  }

  private saveListValues() {
    this.shoppingList = this.data.shoppingList;
    //pass by value workaround to store old products state
    this.oldTitle = this.data.shoppingList.title;
    if (this.data.shoppingList.products != undefined)
      this.oldProducts = this.data.shoppingList.products.slice(0);
  }

  ngOnInit() {
  }

  ngOnClose(){

  }

  removeProductAt(index: number) {
    this.shoppingList.products.splice(index, 1);
  }

  saveOnClose() {
    if (this.nameExists(this.shoppingList.title)) {
      this.dialogRef.close(this.shoppingList);
      this.EventService.sendEvent();
    }
  }

  discardChanges() {
    this.shoppingList.products = this.oldProducts;
    this.shoppingList.title = this.oldTitle;
    this.saveOnClose();
  }

  saveTitle(title: string) {
    if (this.nameExists(title)) {
      this.shoppingList.title = title;
      this.editTitleMode = false;
    }
  }

  addProduct(productName: string) {
    if (this.nameExists(productName))
      this.shoppingList.products.push(new Product(99, productName, "Category"))
  }

  nameExists(name: string){
    return name != "" && name != undefined;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.saveOnClose();
  }
}
