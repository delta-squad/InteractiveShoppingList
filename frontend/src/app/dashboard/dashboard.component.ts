import {Component} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ShoppingListDialogComponent} from "./shopping-list-dialog/shopping-list-dialog.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})
export class DashboardComponent {

  shoppingList: any = ["Bread", "Eggs", "Juice"];

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ShoppingListDialogComponent, {
      data: {
        shoppingList: this.shoppingList
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.shoppingList = result;
    });
  }
}
