import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProducts} from "../interfaces/products";
import {Observable} from "rxjs";
import {EnrollmentService} from "../enrollment.service";
import {AdminConsoleService} from "./admin-console.service";

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent implements OnInit {

  opened = true;
  public products=[



  ];
  constructor( private _service: AdminConsoleService, private _enrollService: EnrollmentService) {
  }

  onSubmit()
  {
    this._service.getProducts()
      .subscribe(data => this.products = data,
          error => console.error(alert("Something went wrong! Maybe JSON file is incorrect?"), error));
  }
  printLog()
  {
    console.log(this.products);
  }
  sendProducts()
  {
    this._enrollService.sendData(this.products)
      .subscribe(
        response => console.log(alert("The products has been send "), response),
        error => console.error('Error', error)
      );
  }
  ngOnInit() {

  }

}
