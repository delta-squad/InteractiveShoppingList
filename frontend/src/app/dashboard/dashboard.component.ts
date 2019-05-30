import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ShoppingListDialogComponent} from "./shopping-list-dialog/shopping-list-dialog.component";
import {ShoppingList} from "../models/shoppingList";
import {DashboardService} from "./dashboard.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})

export class DashboardComponent implements OnInit {
  columnsNumber: number;
  bigScreenSize: number = 850;
  mediumScreenSize: number = 550;
  temp: boolean = true;
  shoppingLists: Array<ShoppingList>;

  constructor(public dialog: MatDialog, private _service: DashboardService, private router: Router,private http: HttpClient) {
  }

  getData() {
    this._service.getShoppingLists()
        .subscribe(data => this.shoppingLists = data, error => console.error(error));
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
  aboutPage(){
    alert("Authors(Alphabetically): Krzysztof Borowiecki, Daniel Cyktor, Tomasz Florczuk, Kamil Kamyszek, Sebastian Stanclik") //alfabetycznie guys alfabetycznie
  }
  refreshPage(){
    this.router.navigateByUrl('dashboard'); //nic sie nie dzieje bo chyba dzieje sie tak szybko ze zapier... jak swiatlo xD
  }
 logOut(){
   alert("Succesfully logged out!");
   let url = 'http://localhost:8080/login';
   this.http.post<Observable<boolean>>(url, {
     userName: '       ',
     password: '       '
   });
   this.router.navigateByUrl('**'); //lecimy do strony glownej
 }
  ngOnInit() {
    this.getData();
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
