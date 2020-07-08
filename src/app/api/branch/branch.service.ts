import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import TestApi from "../constants/test.enum";
import PublicApi from "../constants/public";
import { Branch } from "src/app/models/branch.interface";

interface BranchList {
  Status: string;
  ErrorCode: string;
  ErrorDesc: string;
  BranchList: Branch[];
}

@Injectable({
  providedIn: "root",
})
export class BranchService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getBranchList(): Observable<BranchList> {
    return this.http
      .post<BranchList>(PublicApi.BASE_URL + "getBranchList", {}, { ...PublicApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("getBranchList", JSON.stringify(res))),
        catchError(err => this.handleError<BranchList>("getBranchList"))
      );
  }
}
