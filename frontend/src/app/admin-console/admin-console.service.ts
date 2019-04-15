import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product";

@Injectable()
export class AdminConsoleService {
  private _url: string = "./assets/data/products.json";
  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this._url);
  }

}
