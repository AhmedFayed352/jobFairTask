import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private _HttpClient: HttpClient) { }

  url: string = "http://localhost:3000";

  get(controller: string): Observable<any> {
    return this._HttpClient.get(`${this.url}/${controller}`);
  }
}
