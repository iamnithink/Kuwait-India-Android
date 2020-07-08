import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import TestApi from "../constants/test.enum";
import PublicApi from "../constants/public";
import { Purpose } from "src/app/models/purpose.interface";
import { Relation } from "src/app/models/relation.interface";
import { CommonError } from "src/app/models/common-error";
import { BeneficiaryListFilter } from "src/app/models/beneficiary-filter.enum";
import { Beneficiary } from "src/app/models/beneficiary.interface";
import { Nationality } from "src/app/models/nationality.interface";
import { SourceOfFunds } from "src/app/models/source-of-funds.interface";

export interface PurposeList {
  Status: string;
  ErrorCode: string;
  ErrorDesc?: string;
  PurposeCodeList?: Purpose[];
}

export interface RelationList {
  Status: string;
  ErrorCode: string;
  ErrorDesc?: string;
  RelationsList?: Relation[];
}

export interface BeneficiaryList {
  Status: string;
  ErrorCode: string;
  ErrorDesc?: string;
  BeneficiaryList: Beneficiary[];
}

export interface NationalityList {
  Status: string;
  ErrorCode: string;
  ErrorDesc?: string;
  NationalityList: Nationality[];
}

export interface SourceOfFundsList {
  Status: string;
  ErrorCode: string;
  ErrorDesc?: string;
  SourceOfFundsCodeList: SourceOfFunds[];
}

@Injectable({
  providedIn: "root",
})
export class BeneficiaryService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      // console.log(JSON.stringify(error));
      return throwError("Some error occured. Please try again");
    };
  }

  addBeneficiary(postData): Observable<CommonError> {
    return this.http
      .post<CommonError>(TestApi.BASE_URL + "addBeneficiary", postData, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("AddBeneficiary", res)),
        catchError(err => this.handleError<CommonError>("addBeneficiary"))
      );
  }

  getPurposeList(): Observable<PurposeList> {
    return this.http
      .post<PurposeList>(PublicApi.BASE_URL + "getPurposeCodeList", {}, { ...PublicApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => {
          console.log("PurposeList", res);
        }),
        catchError(err => this.handleError<PurposeList>("getPurposeCodeList"))
      );
  }

  getSourceOfFundsList(): Observable<SourceOfFundsList> {
    return this.http
      .post<SourceOfFundsList>(
        TestApi.BASE_URL + "getSourceOfFundList",
        {},
        { ...TestApi.HEADERS, withCredentials: true }
      )
      .pipe(
        tap(res => console.log("SourceOfFunds", res)),
        catchError(err => this.handleError<SourceOfFundsList>("sourceOfFunds"))
      );
  }

  getRelationList(): Observable<RelationList> {
    return this.http
      .post<RelationList>(PublicApi.BASE_URL + "getRelationsList", {}, { ...PublicApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("RelationList", res)),
        catchError(err => this.handleError<RelationList>("getRelationList"))
      );
  }

  getNationalityList(): Observable<NationalityList> {
    return this.http
      .post<NationalityList>(
        PublicApi.BASE_URL + "getNationalityList",
        {},
        { ...PublicApi.HEADERS, withCredentials: true }
      )
      .pipe(
        tap(res => console.log("GetNationality", res)),
        catchError(err => this.handleError<NationalityList>("getNationalityList"))
      );
  }

  getBeneficiaryListByFilter(
    userId: string,
    token: string,
    filter: BeneficiaryListFilter
  ): Observable<BeneficiaryList> {
    const postData = {
      UserID: userId,
      SessionToken: token,
      SortOrder: filter,
    };
    return this.http
      .post<BeneficiaryList>(TestApi.BASE_URL + "getBeneficiaryList", postData, {
        ...TestApi.HEADERS,
        withCredentials: true,
      })
      .pipe(
        tap(res => console.log("getBeneficiaryList", res)),
        catchError(this.handleError<BeneficiaryList>("getBeneficiaryList"))
      );
  }
}
