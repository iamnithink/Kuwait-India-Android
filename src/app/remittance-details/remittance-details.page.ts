import { Component, OnInit, NgZone } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { NavController } from "@ionic/angular";
import { Beneficiary } from "../models/beneficiary.interface";
import { Router } from "@angular/router";
import { GetDaysRateService } from "../api/getDaysRate/get-days-rate.service";
import { Rate } from "../models/rate.interface";
import { TransRatePostData } from "../models/trans-rate-post-data.interface";
import { StorageService } from "../api/storage/storage.service";
import { User } from "../models/user.interface";
import { forkJoin } from "rxjs";
import { TransactionService } from "../api/transaction/transaction.service";
import { UtilsProviderService } from "../utils/utils-provider.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BeneficiaryService } from "../api/beneficiary/beneficiary.service";
import { Purpose } from "../models/purpose.interface";
import { SourceOfFunds } from "../models/source-of-funds.interface";

interface Demo {
  name: string;
  value: string;
}

@Component({
  selector: "app-remittance-details",
  templateUrl: "./remittance-details.page.html",
  styleUrls: ["./remittance-details.page.scss"],
})
export class RemittanceDetailsPage implements OnInit {
  showToolbar = false;
  currentColor = "light";

  paymentForm: FormGroup;

  list: Rate[];

  beneficiary: Beneficiary;

  fromCurrency: Rate;
  toCurrency: Rate = {
    CurrencyName: "Kuwaiti Dinar",
    CurrencyCode: "KWD",
    CurrencyNo: "0",
    Rate: "1",
    RateInv: "1",
  };

  currentFlag: string;

  fromAmount: string = "";
  toAmount: string = "";

  conversionRate = "--";

  purposeList: Purpose[];
  sourceOfFundsList: SourceOfFunds[];

  avatarBackground2 = this.avatarBackgroundMethod();

  nextDisabled: boolean = true;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private rate: GetDaysRateService,
    private formBuilder: FormBuilder,
    private storage: StorageService,
    private transactionService: TransactionService,
    private utils: UtilsProviderService,
    private beneficiaryService: BeneficiaryService,
    private zone: NgZone
  ) {
    const { beneficiary } = router.getCurrentNavigation().extras.state;
    this.beneficiary = beneficiary;
    // console.log("BENEFICIARY", this.beneficiary);
  }

  ngOnInit() {
    this.paymentForm = this.formBuilder.group({
      purpose: ["", Validators.compose([Validators.required])],
      source: ["", Validators.compose([Validators.required])],
    });
  }

  ionViewDidEnter() {
    this.utils.showLoader();
    forkJoin(
      this.beneficiaryService.getPurposeList(),
      this.beneficiaryService.getSourceOfFundsList(),
      this.rate.getDaysRate()
    ).subscribe(
      ([purposeRes, sourceOfFunds, daysRate]) => {
        this.utils.hideLoader();
        if (daysRate.RateList) {
          this.zone.run(() => {
            this.list = daysRate.RateList;
            //this.fromCurrency = this.list[0];
            this.toCurrency = {
              CurrencyName: "Kuwaiti Dinar",
              CurrencyCode: "KWD",
              CurrencyNo: "0",
              Rate: "1",
              RateInv: "1",
            };

            this.fromCurrency = this.list.find(rate => rate.CurrencyCode === this.beneficiary.Currency);
            if (!this.fromCurrency) {
              this.fromCurrency = this.toCurrency;
            }
            this.list.length = 0;
            if (this.fromCurrency.CurrencyCode === this.toCurrency.CurrencyCode) {
              this.list.push(this.fromCurrency);
            } else {
              this.list.push(this.fromCurrency);
              this.list.push(this.toCurrency);
            }
            this.currentFlag = `../../assets/flags/${this.fromCurrency.CurrencyCode}.png`;
            this.paymentForm.reset();
          });
          //this.toCurrency = this.list[1];
        }
        if (purposeRes.Status === "00" && sourceOfFunds.Status === "00") {
          this.purposeList = purposeRes.PurposeCodeList;
          this.sourceOfFundsList = sourceOfFunds.SourceOfFundsCodeList;
          this.paymentForm.valueChanges.subscribe(res => this.inputChanged());
        } else if (purposeRes.ErrorCode === "94" || sourceOfFunds.ErrorCode === "94") {
          this.utils.showSessionExpired();
        }
      },
      err => {
        this.utils.hideLoader();
        this.utils.showAlertAndBack();
      }
    );
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 130;
      this.currentColor = this.showToolbar ? "dark" : "light";
    }
  }

  inputChanged() {
    this.zone.run(() => {
      this.conversionRate = Number(this.fromCurrency.Rate).toFixed(3);
      this.currentFlag = `../../assets/flags/${this.fromCurrency.CurrencyCode}.png`;
      if (!isNaN(Number(this.fromAmount))) {
        let amt = Number(this.fromAmount);
        if (amt > 0) {
          let kwdAmount = Number(Number(amt) / Number(this.fromCurrency.RateInv)).toFixed(3);
          this.toAmount = Number(Number(kwdAmount) * Number(this.toCurrency.RateInv)).toFixed(3);
          this.conversionRate = Number(this.fromCurrency.RateInv).toFixed(3);
          this.nextDisabled = false;
          this.refreshProceed();
        } else {
          this.nextDisabled = true;
          this.refreshProceed();
          this.toAmount = "";
          this.conversionRate = "--";
        }
      } else {
        this.nextDisabled = true;
        this.refreshProceed();
        if (this.fromAmount.trim().length === 0) {
          this.toAmount = "";
          this.conversionRate = "--";
        }
      }
    });
  }

  refreshProceed() {
    // console.log(this.nextDisabled, this.paymentForm.valid);

    if (!this.nextDisabled && this.paymentForm.valid) {
      this.nextDisabled = false;
    } else {
      this.nextDisabled = true;
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

  async didClickProceed() {
    let user: User = await this.storage.getUser();
    let data: TransRatePostData;
    if (this.fromCurrency.CurrencyCode === this.toCurrency.CurrencyCode) {
      data = {
        UserID: user.UserID,
        SessionToken: user.token,
        BeneficiaryID: this.beneficiary.ID,
        FC_AMOUNT: "",
        KD_AMOUNT: `${this.toAmount}`,
      };
    } else {
      data = {
        UserID: user.UserID,
        SessionToken: user.token,
        BeneficiaryID: this.beneficiary.ID,
        FC_AMOUNT: `${this.fromAmount}`,
        KD_AMOUNT: "",
      };
    }
    this.utils.showLoader();
    this.transactionService.getTransRate(data).subscribe(
      res => {
        this.utils.hideLoader();
        if (res.BeneficiaryID) {
          this.navCtrl
            .navigateForward("payment-details", {
              state: {
                transRateResponse: res,
                beneficiary: this.beneficiary,
                fromCurrency: this.fromCurrency,
                toCurrency: this.toCurrency,
                purpose: this.paymentForm.value.purpose,
                sourceOfFunds: this.paymentForm.value.source,
              },
            })
            .then(() => this.utils.hideLoader())
            .catch(err => {
              this.utils.hideLoader();
              console.log(err);
            });
        } else if (res.Status && res.ErrorCode !== "94") {
          this.utils.hideLoader();
          this.utils.showAlert("Error", res.ErrorDesc);
        } else if (res.ErrorCode === "94") {
          this.utils.showSessionExpired();
        }
      },
      err => {
        this.utils.showAlert();
      }
    );
  }

  ionViewWillLeave() {
    this.utils.hideLoader();
  }
}
