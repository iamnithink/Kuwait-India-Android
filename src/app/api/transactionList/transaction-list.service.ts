import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import PublicApi from "../constants/public";
import { TransListFilter } from "src/app/models/trans-list-filter.enum";
import TestApi from "../constants/test.enum";
import { TransactionHistory } from "src/app/models/transaction-history.interface";

interface TransactionHistoryRes {
  Status: string;
  ErrorCode: string;
  ErrorDesc?: string;
  TransactionHistory: TransactionHistory[];
}

@Injectable({
  providedIn: "root",
})
export class TransactionListService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTransListWithFilter(
    userId: string,
    token: string,
    filter: TransListFilter,
    transactionNo?: string
  ): Observable<TransactionHistoryRes> {
    let postData;
    if (transactionNo) {
      postData = {
        UserID: userId,
        SessionToken: token,
        SortOrder: filter,
        TransactionNo: transactionNo,
      };
    } else {
      postData = {
        UserID: userId,
        SessionToken: token,
        SortOrder: filter,
      };
    }
    return this.http
      .post<TransactionHistoryRes>(TestApi.BASE_URL + "getTransHist", postData, {
        ...TestApi.HEADERS,
        withCredentials: true,
      })
      .pipe(
        tap(res => console.log(res)),
        catchError(this.handleError<TransactionHistoryRes>("5 Translist"))
      );
  }
}
