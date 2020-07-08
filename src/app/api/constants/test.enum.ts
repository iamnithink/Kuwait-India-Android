import { HttpHeaders } from "@angular/common/http";

export default class TestApi {
  static BASE = "https://etrans.kuwaitindiaexchange.com/";
  static BASE_URL = "https://etrans.kuwaitindiaexchange.com/sendresponse.aspx?process=";
  static HEADERS = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      AppID: "TESTING",
      AppKey: "t6wguIDL8F1fip9DW0KCI4spZsASEwF7",
    }),
  };
}
