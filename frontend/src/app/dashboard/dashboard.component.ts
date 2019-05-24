import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ShoppingListDialogComponent} from "./shopping-list-dialog/shopping-list-dialog.component";
import {ShoppingList} from "../models/shoppingList";
import {DashboardService} from "./dashboard.service";
import {EventService} from "./event.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})

export class DashboardComponent implements OnInit {
  columnsNumber: number;
  bigScreenSize: number = 850;
  mediumScreenSize: number = 550;

  shoppingLists: Array<ShoppingList>;

  constructor(public dialog: MatDialog, private _service: DashboardService, private EventService: EventService) {
  }

  getData() {
    this._service.getShoppingLists()
        .subscribe(data => this.shoppingLists = data, error => console.error(error));

  }

  wsConnection(){
    let that = this;
    this.EventService.connect();
  }

  openDialog(list: ShoppingList): void {
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
    this.getData();
    this.calculateColumnsNumber();
    this.wsConnection();
  }

  ngOnDestroy(){
    this.EventService.disconnect();
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

  public
}
