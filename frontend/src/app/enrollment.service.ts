import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = 'http://localhost:3000/enroll';
  constructor(private _http : HttpClient) { }

  sendData(userData)
  {
    return this._http.post<any>(this._url, userData);
  }
  getAnswer(){
    return this._http.get<any>(this._url);
  }
}
