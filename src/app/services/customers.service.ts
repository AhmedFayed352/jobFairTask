import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private _HttpClient: HttpClient) { }

  url: string = "https://ahmedfayed352.github.io/ApiFile/customers.json";

  get(): Observable<any> {
    return this._HttpClient.get(`${this.url}`);
  }
}
