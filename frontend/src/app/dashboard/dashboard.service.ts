import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingList} from "../models/shoppingList";

@Injectable()
export class DashboardService {
  private _listsUrl: string = "http://localhost:8080/products";

  constructor(private http: HttpClient) {
  }

  getShoppingLists(): Observable<ShoppingList[]> {
    return this.http.get<ShoppingList[]>(this._listsUrl);
  }
}
