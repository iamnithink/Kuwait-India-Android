import { Component } from "@angular/core";
import { StorageService } from "../api/storage/storage.service";
import { NavController, MenuController, Platform } from "@ionic/angular";
import { ScrollDetail } from "@ionic/core";
import { TransactionListService } from "../api/transactionList/transaction-list.service";
import { TransListFilter } from "../models/trans-list-filter.enum";
import { TransactionHistory } from "../models/transaction-history.interface";
import { User } from "../models/user.interface";
import { forkJoin } from "rxjs";
import { AuthService } from '../api/auth/auth.service';
import { UtilsProviderService } from "../utils/utils-provider.service";
import { Beneficiary } from "../models/beneficiary.interface";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  showToolbar = false;
  currentColor = "light";

  subscription: any;

  latestTransactions: TransactionHistory[];

  frequentBeneficiaries: TransactionHistory[];

  user: User;

  avatarBackground2 = this.avatarBackgroundMethod();

  isNoData: boolean = false;
  contactNumber = '';

  constructor(
    private storage: StorageService,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private platform: Platform,
    private authService: AuthService,
    private transListService: TransactionListService,
    private utils: UtilsProviderService
  ) {
    this.menuCtrl.enable(true);
    storage.getUser().then(user => {
      if (user) {
        this.user = user;
        forkJoin(
          this.transListService.getTransListWithFilter(user.UserID, user.token, TransListFilter.BENEFICIARY),
          this.transListService.getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_DATE)
        ).subscribe(([frequentBenefRes, latestTransRes]) => {
          if (
            frequentBenefRes.Status !== "00" &&
            latestTransRes.Status !== "00" &&
            (frequentBenefRes.ErrorCode === "94" || latestTransRes.ErrorCode === "94")
          ) {
            utils.showSessionExpired();
          } else if (frequentBenefRes.Status === "00" && latestTransRes.Status === "00") {
            this.frequentBeneficiaries = frequentBenefRes.TransactionHistory;
            this.latestTransactions = latestTransRes.TransactionHistory;
            if (this.frequentBeneficiaries.length == 0 && this.latestTransactions.length == 0) {
              this.isNoData = true;
            }
          }
        });

        // this.transListService
        //   .getTransListWithFilter(user.UserID, user.token, TransListFilter.BENEFICIARY)
        //   .subscribe(res => {
        //     //console.log("HOME 1", JSON.stringify(res));
        //     if (res.Status === "00") {
        //       this.frequentBeneficiaries = res.TransactionHistory;
        //     }
        //   });

        // this.transListService
        //   .getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_DATE)
        //   .subscribe(res => {
        //     //console.log("HOME 2", res);
        //     if (res.Status === "00") {
        //       this.latestTransactions = res.TransactionHistory;
        //     }
        //   });

        // this.transListService.getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_FC).subscribe(res => {
        //   console.log("HOME 3", res);
        // });

        // this.transListService.getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_KD).subscribe(res => {
        //   console.log("HOME 4", res);
        // });

        // this.transListService
        //   .getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_NUMBER)
        //   .subscribe(res => {
        //     console.log("HOME 5", res);
        //   });
      }
    });
  }

  ngOnInit() {
    this.fetchContactNumber();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator["app"].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
    this.menuCtrl.enable(false);
    this.utils.hideLoader();
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 80;
      this.currentColor = this.showToolbar ? "dark" : "light";
    }
  }

  didClickLogout() {
    this.navCtrl.navigateForward("branch-locator");
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

  gotoTransDetails(transaction: TransactionHistory) {
    this.navCtrl.navigateForward("transaction-details", { state: { transaction: transaction } });
  }

  initiateTransaction(previousBenef) {
    let beneficiary: Beneficiary = {
      ID: previousBenef.BeneficiaryID,
      Name: previousBenef.BeneficiaryName,
      BankBranch: previousBenef.BankBranch,
      BankName: previousBenef.BankName,
      Mode: "",
      AccNo: previousBenef.AccNo,
      LastDate: previousBenef.Date,
      Count: "",
      Currency: previousBenef.Currency,
      AmountFC: previousBenef.AmountFC,
      AmountKD: previousBenef.AmountKD,
      Color: previousBenef.BenefColor,
    };
    console.log(beneficiary);

    this.navCtrl.navigateForward("remittance-details", { state: { beneficiary: beneficiary } });
  }

  headerButtonClicked(forIndex: Number) {
    switch (forIndex) {
      case 1:
        this.navCtrl.navigateForward("/history");
        break;
      case 2:
        this.navCtrl.navigateForward("/select-beneficiary");
        break;
      case 3:
        this.navCtrl.navigateForward("/daily-rates");
        break;
      case 4:
        this.navCtrl.navigateForward("add-beneficiary");
        break;
      default:
        break;
    }
  }


  fetchContactNumber() {
    this.authService.gethelpdesknumber().subscribe(
      res => {
        if (res && res.Status === "00" && res.SupportNo) {
          this.contactNumber = res.SupportNo;
        } else {
          console.log('gethelpdesknumber error', res.ErrorDesc);
        }
      },
      err => {
        console.log('gethelpdesknumber error', err);
      }
    );
  }

}
