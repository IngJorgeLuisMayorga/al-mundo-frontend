import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class appService {
  private url = "https://almundo-mayorga.herokuapp.com/";
  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getHotels(): Observable<any> {
    return this.http.get(this.url + "hotels");
  }
}