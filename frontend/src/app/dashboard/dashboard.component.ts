import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../authorization-page/authorization-page.component.css']
})
export class DashboardComponent implements OnInit {
  products: string[] = ['Banana', 'Bread', 'Apple', 'Chicken', 'Pasta'];
  constructor() {
  }

  ngOnInit() {
  }

}
