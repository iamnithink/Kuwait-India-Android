import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import TestApi from "../constants/test.enum";
import { SecretQuestion } from "src/app/models/secret-question";
import { CommonError } from "src/app/models/common-error";
import PublicApi from "../constants/public";
import { SecretQuestionSignupList } from "../../models/secret-question-signup-list";
import { User } from "src/app/models/user.interface";
import { SignupPost } from "src/app/models/signup-post.interface";
import { SecurityImage } from "../../models/security-image.interface";
import { SecurityPhrase } from "src/app/models/security-phrase.interface";
import { StorageService } from "../storage/storage.service";
import { IsValidIdRes } from "src/app/models/is-valid-id-res.interface";

interface IPObject {
  IPaddress: string;
  SessionID: string;
  ErrorCode: string;
  Status: string;
}

interface SessionToken {
  Status?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
  SessionToken: string;
}

interface OTP {
  Status: string;
  ErrorCode: string;
  MobileNo: string;
  OTP: string;
  ErrorDesc?: string;
}

interface ApplicationRes {
  Status: string;
  ErrorCode: string;
  OTP?: string;
  ErrorDesc?: string;
}

interface SecurityImageList {
  Status: string;
  ErrorCode: string;
  ErrorDesc?: string;
  AvatarsList: [SecurityImage];
}

interface SecurityPhraseList {
  Status: string;
  ErrorCode: string;
  ErrorDesc?: string;
  PhrasesList: [SecurityPhrase];
}

interface CivilID {
  Status: string;
  ErrorCode: string;
  ErrorDesc?: string;
  Exists?: string;
}

interface SupportNumber {
  Status: string;
  ErrorCode: string;
  SupportNo: string;
  ErrorDesc?: string;
  Exists?: string;
}


interface CivilIdUpload {
  Status: string;
  ErrorCode: string;
  ImageNo?: string;
  ErrorDesc?: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      console.log(JSON.stringify(error));
      return throwError("Some error occured. Please try again");
    };
  }

  getMyIp(fcmToken: string): Observable<IPObject> {
    let postData = {
      DeviceID: fcmToken,
    };
    return this.http
      .post<IPObject>(TestApi.BASE_URL + "getMyIP", postData, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap((ip: IPObject) => console.log(ip)),
        catchError(this.handleError<IPObject>("getIpAddress"))
      );
  }

  isValidId(userId: string): Observable<IsValidIdRes> {
    let postData = {
      UserID: userId,
    };
    return this.http
      .post<IsValidIdRes>(PublicApi.BASE_URL + "isValidUserID", postData, {
        ...PublicApi.HEADERS,
        withCredentials: true,
      })
      .pipe(
        tap(res => console.log("IsValid", res)),
        catchError(this.handleError<IsValidIdRes>("isValid"))
      );
  }

  getSecretQuestion(userId: string): Observable<SecretQuestion> {
    let postData = {
      UserID: userId,
    };
    return this.http
      .post<SecretQuestion>(TestApi.BASE_URL + "getSecretQuestion", postData, {
        ...TestApi.HEADERS,
        withCredentials: true,
      })
      .pipe(
        tap((question: SecretQuestion) => console.log("SecretQuestion", question)),
        catchError(this.handleError<SecretQuestion>("getSecretQuestion"))
      );
  }

  validateSecretQuestion(userId: string, answer: string): Observable<CommonError> {
    let postData = {
      UserID: userId,
      Answer: answer,
    };
    return this.http
      .post<CommonError>(TestApi.BASE_URL + "validateSecretAnswer", postData, {
        ...TestApi.HEADERS,
        withCredentials: true,
      })
      .pipe(
        tap((res: CommonError) => console.log("ValidateQuestion", JSON.stringify(res))),
        catchError(this.handleError<CommonError>("validateQuestion"))
      );
  }

  login(userId: string, time: string, password: string): Observable<SessionToken> {
    let postData = {
      UserID: userId,
      UserTime: time,
      UserPWD: password,
    };
    return this.http
      .post<SessionToken>(TestApi.BASE_URL + "Customerlogin", postData, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap((res: SessionToken) => console.log("LOGIN", res)),
        catchError(this.handleError<SessionToken>("login"))
      );
  }

  logout(): Observable<CommonError> {
    return this.http
      .post<CommonError>(TestApi.BASE_URL + "Logout", {}, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("Logout", res)),
        catchError(this.handleError<CommonError>("Logout"))
      );
  }

  changePassword(userId: string, oldPassword: string, newPassword: string): Observable<CommonError> {
    let postData = {
      UserID: userId,
      OldPWD: oldPassword,
      NewPWD: newPassword,
    };
    return this.http
      .post<CommonError>(TestApi.BASE_URL + "ChangePassword", postData, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("ChangePwd", res)),
        catchError(this.handleError<CommonError>("changPwd"))
      );
  }

  getApplicant(userId: string): Observable<User> {
    let postData = {
      UserID: userId,
    };
    return this.http
      .post<User>(TestApi.BASE_URL + "getApplicant", postData, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap((res: User) => console.log("GetApplicant", res)),
        catchError(this.handleError<User>("getApplicant"))
      );
  }

  getSecurityQuestionList(): Observable<SecretQuestionSignupList> {
    return this.http
      .post<SecretQuestionSignupList>(
        PublicApi.BASE_URL + "getSecretQuestionList",
        {},
        { ...PublicApi.HEADERS, withCredentials: true }
      )
      .pipe(
        tap(res => console.log(res)),
        catchError(this.handleError<SecretQuestionSignupList>("getQuestions"))
      );
  }

  getSecurityImages(): Observable<SecurityImageList> {
    return this.http
      .post<SecurityImageList>(
        PublicApi.BASE_URL + "getAvatarsList",
        {},
        { ...PublicApi.HEADERS, withCredentials: true }
      )
      .pipe(
        tap(res => console.log("SecurityImageList", res)),
        catchError(this.handleError<SecurityImageList>("getAvatarsList"))
      );
  }

  getSecurityPhrases(): Observable<SecurityPhraseList> {
    return this.http
      .post<SecurityPhraseList>(
        PublicApi.BASE_URL + "getPhrasesList",
        {},
        { ...PublicApi.HEADERS, withCredentials: true }
      )
      .pipe(
        tap(res => console.log("SecurtiyPhrasesList", res)),
        catchError(this.handleError<SecurityPhraseList>("getPhrasesList"))
      );
  }

  isValidCivilID(civilId: string): Observable<CivilID> {
    const postData = {
      CivilID: civilId,
    };
    return this.http
      .post<CivilID>(PublicApi.BASE_URL + "isRegisteredCivilID", postData, {
        ...PublicApi.HEADERS,
        withCredentials: true,
      })
      .pipe(
        tap(res => console.log("CivilIdExists", res))
        // catchError(this.handleError<OTP>("CivilIdExists Error"))
      );
  }

  getOtp(phone?: string): Observable<OTP> {
    let postData;
    if (phone) {
      postData = {
        MobileNo: phone,
      };
    } else {
      postData = {
        MobileNo: null,
      };
    }
    // const postData = {
    //   MobileNo: phone,
    // };
    return this.http
      .post<OTP>(PublicApi.BASE_URL + "getOTP", postData, { ...PublicApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("OTP", JSON.stringify(res))),
        catchError(this.handleError<OTP>("Otp"))
      );
  }

  registerApplicant(data: SignupPost): Observable<ApplicationRes> {
    return this.http
      .post<ApplicationRes>(TestApi.BASE_URL + "registerApplicant", data, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("RegisterApplicant", res)),
        catchError(this.handleError<ApplicationRes>("Applicant"))
      );
  }

  forgotPassword(userId: string, newPassword: string, otp: string): Observable<ApplicationRes> {
    let postData = {
      UserID: userId,
      OTP: otp,
      NewPWD: newPassword
    };
    return this.http
      .post<ApplicationRes>(TestApi.BASE_URL + "forgotpassword", postData, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("forgotpassword", JSON.stringify(res))),
        catchError(this.handleError<ApplicationRes>("forgotpassword"))
      );
  }

  gethelpdesknumber(): Observable<SupportNumber> {
    return this.http
      .get<SupportNumber>(TestApi.BASE_URL + "getSupportNo", { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("getSupportNo", JSON.stringify(res))),
        catchError(this.handleError<SupportNumber>("getSupportNo"))
      );
  }

  fileUpload(file): Observable<CivilIdUpload> {
    return this.http
      .post<CivilIdUpload>('https://etrans.kuwaitindiaexchange.com/fileupload.asp', file, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("File Upload", JSON.stringify(res))),
        catchError(this.handleError<CivilIdUpload>("file Upload error"))
      );
  }

  civilIdUpload(postData): Observable<CivilIdUpload> {
    return this.http
      .post<CivilIdUpload>(TestApi.BASE_URL + "SetCivilID", postData, { ...TestApi.HEADERS, withCredentials: true })
      .pipe(
        tap(res => console.log("CivilId", JSON.stringify(res))),
        catchError(this.handleError<CivilIdUpload>("Civil id error"))
      );
  }
}
