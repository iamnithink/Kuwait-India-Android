import { Component, OnInit } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { NavController } from "@ionic/angular";
import { Beneficiary } from "../models/beneficiary.interface";
import { TransRateResponse } from "../models/trans-rate-response.interface";
import { Router } from "@angular/router";
import { Rate } from "../models/rate.interface";
import { SendAmountPostData } from "../models/send-amount-post-data.interface";
import { StorageService } from "../api/storage/storage.service";
import { TransactionService } from "../api/transaction/transaction.service";
import { InAppBrowser, InAppBrowserOptions, InAppBrowserEvent } from "@ionic-native/in-app-browser/ngx";
import { UtilsProviderService } from "../utils/utils-provider.service";
import { Purpose } from "../models/purpose.interface";
import { SourceOfFunds } from "../models/source-of-funds.interface";

@Component({
  selector: "app-payment-details",
  templateUrl: "./payment-details.page.html",
  styleUrls: ["./payment-details.page.scss"],
})
export class PaymentDetailsPage implements OnInit {
  showToolbar = false;
  currentColor = "light";

  avatarBackground2 = this.avatarBackgroundMethod();

  beneficiary: Beneficiary;
  transRateResponse: TransRateResponse;
  fromCurrency: Rate;
  toCurrency: Rate;
  kdAmt: number;
  purpose: Purpose;
  sourceOfFunds: SourceOfFunds;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private storage: StorageService,
    private transactionApi: TransactionService,
    private iab: InAppBrowser,
    private utils: UtilsProviderService
  ) {
    const {
      beneficiary,
      transRateResponse,
      fromCurrency,
      toCurrency,
      purpose,
      sourceOfFunds,
    } = router.getCurrentNavigation().extras.state;
    this.beneficiary = beneficiary;
    this.transRateResponse = transRateResponse;
    this.fromCurrency = fromCurrency;
    this.toCurrency = toCurrency;
    this.purpose = purpose;
    this.sourceOfFunds = sourceOfFunds;
    this.kdAmt = Number(this.transRateResponse.KD_AMOUNT) - Number(this.transRateResponse.Commission);
  }

  ngOnInit() {}

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 130;
      this.currentColor = this.showToolbar ? "dark" : "light";
    }
  }

  private avatarBackgroundMethod(): String {
    return (
      "#" +
      (
        "000000" +
        Math.random()
          .toString(16)
          .slice(2, 8)
          .toUpperCase()
      ).slice(-6)
    );
  }

  goBack() {
    this.navCtrl.back();
  }

  async gotoPayment() {
    let user = await this.storage.getUser();
    let postData: SendAmountPostData = {
      BeneficiaryID: this.beneficiary.ID,
      UserID: user.UserID,
      SessionToken: user.token,
      TransToken: this.transRateResponse.TransToken,
      FC_AMOUNT: `${this.transRateResponse.FC_AMOUNT}`,
      KD_AMOUNT: `${this.transRateResponse.KD_AMOUNT}`,
      Rate: `${this.transRateResponse.Rate}`,
      PurposeCode: this.purpose.Code,
      SourceOfFunds: this.sourceOfFunds.Code,
      Commission: `${this.transRateResponse.Commission}`,
    };
    this.utils.showLoader();
    this.transactionApi.sendAmount(postData).subscribe(
      res => {
        this.utils.hideLoader();
        if (res.RedirectURL) {
          console.log(res.RedirectURL);
          let options: InAppBrowserOptions = {
            zoom: "no",
            beforeload: "yes",
          };
          const browser = this.iab.create(res.RedirectURL, "_self", options);
          browser.on("loadstart").subscribe(data => {
            console.log(data);
            let resultUrl = data.url;
            if (resultUrl.startsWith("https://online.kuwaitindiaexchange.com/knetnew/Failed.asp")) {
              browser.close();
              this.showError();
            } else if (resultUrl.startsWith("https://online.kuwaitindiaexchange.com/knetnew/Success.asp")) {
              this.navCtrl.navigateForward("success", { state: { resultUrl: resultUrl } });
              // if (
              //   resultUrl.includes("paymentID") &&
              //   resultUrl.includes("TranID") &&
              //   resultUrl.includes("Auth") &&
              //   resultUrl.includes("ref")
              // ) {
              //   this.navCtrl.navigateForward("success", { state: { resultUrl: resultUrl } });
              // } else {
              //   this.showError();
              // }
            }
          });
          //this.navCtrl.navigateForward("payment-gateway", { state: { transactionNo: res.RedirectURL } });
        } else {
          this.utils.showAlert("Error", res.ErrorDesc);
        }
      },
      err => {
        this.utils.hideLoader();
        this.utils.showAlert("Error", "Invalid bank details. Plese try again later.");
        console.log(err.error.text);
      }
    );
  }

  ionViewWillLeave() {
    this.utils.hideLoader();
  }

  private showError() {
    this.utils.showAlert("Error", "Some error occured. Please try again.");
  }
}
