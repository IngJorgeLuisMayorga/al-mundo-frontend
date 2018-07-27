import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { BehaviorSubject } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getHotels(): Observable<any[]> {
    return this.http
      .get<any[]>("https://almundo-mayorga.herokuapp.com/api/hotels")
      .pipe(
        tap(data => this.log(`fetched hotels`)),
        catchError(this.handleError("getHotels", []))
      );
  }

  getHotelsByNameSearch(name): Observable<any[]> {
    return this.http
      .get<any[]>(
        "https://almundo-mayorga.herokuapp.com/api/hotels/byName/:" +
          encodeURI(name)
      )
      .pipe(
        tap(data => this.log(`fetched hotels filtered`)),
        catchError(this.handleError("getHotels", []))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log("UserService: " + message);
  }
}
