import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProducts} from "../interfaces/products";

@Injectable()
export class AdminConsoleService {
  private _url: string = "./assets/data/products.json";
  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<IProducts[]> {

    return this.http.get<IProducts[]>(this._url);
  }

}
