import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import TestApi from "../constants/test.enum";
import PublicApi from "../constants/public";
import { TransRatePostData } from "src/app/models/trans-rate-post-data.interface";
import { TransRateResponse } from "src/app/models/trans-rate-response.interface";
import { SendAmountPostData } from "src/app/models/send-amount-post-data.interface";
import { SourceOfFunds } from "src/app/models/source-of-funds.interface";

interface TransactionRes {
  RedirectURL?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
  Status?: string;
}

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTransRate(postData: TransRatePostData): Observable<TransRateResponse> {
    return this.http
      .post<TransRateResponse>(TestApi.BASE_URL + "getTransRate", postData, {
        ...TestApi.HEADERS,
        withCredentials: true,
      })
      .pipe(
        tap(res => console.log("getTransRate", res)),
        catchError(err => this.handleError<TransRateResponse>("getTransRate"))
      );
  }

  sendAmount(postData: SendAmountPostData): Observable<TransactionRes> {
    return this.http
      .post<TransactionRes>(TestApi.BASE_URL + "sendAmount", postData, {
        ...TestApi.HEADERS,
        withCredentials: true,
      })
      .pipe(tap(res => console.log("Send Amonut", res)));
  }
}
