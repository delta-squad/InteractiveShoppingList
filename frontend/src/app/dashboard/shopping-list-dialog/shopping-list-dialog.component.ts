import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-shopping-list-dialog',
  templateUrl: './shopping-list-dialog.component.html',
  styleUrls: ['./shopping-list-dialog.component.css', '../../app.component.css']
})
export class ShoppingListDialogComponent implements OnInit {

  currentShoppingList: Array<String> = [];
  editTitleMode: boolean = false;
  title: String = "List title!";

  constructor(public dialogRef: MatDialogRef<ShoppingListDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentShoppingList = this.data.shoppingList;
    dialogRef.disableClose = true;
  }

  ngOnInit() {
  }

  removeProductAt(index: number) {
    this.currentShoppingList.splice(index, 1);
  }

  save() {
    this.dialogRef.close(this.currentShoppingList);
  }

  saveTitle(title: String) {
    this.title = title;
  }
}
