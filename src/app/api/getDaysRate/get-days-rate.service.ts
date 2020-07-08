import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import TestApi from "../constants/test.enum";
import PublicApi from "../constants/public";
import { Rate } from "src/app/models/rate.interface";

interface RateList {
  RateList: Rate[];
}

@Injectable({
  providedIn: "root",
})
export class GetDaysRateService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getDaysRate() {
    return this.http
      .post<RateList>(PublicApi.BASE_URL + "GetDaysRate", {}, { ...PublicApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("GetDaysRate", res)),
        catchError(err => this.handleError<RateList>("GetDaysRate"))
      );
  }
}
