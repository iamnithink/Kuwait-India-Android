import { HttpHeaders } from "@angular/common/http";

export default class PublicApi {
  static BASE = "https://etrans.kuwaitindiaexchange.com/";
  static BASE_URL = "https://etrans.kuwaitindiaexchange.com/sendresponse.aspx?process=";
  static HEADERS = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      AppID: "PUBLIC",
      AppKey: "3gKQp9VoA5ycH9qEwZ7y2lDZAO93y9m1",
    }),
  };
}
