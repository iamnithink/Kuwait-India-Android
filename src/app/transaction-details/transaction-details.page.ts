import { Component, OnInit } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { Router } from "@angular/router";
import { TransactionHistory } from "../models/transaction-history.interface";
import { TransactionListService } from "../api/transactionList/transaction-list.service";
import { StorageService } from "../api/storage/storage.service";
import { TransListFilter } from "../models/trans-list-filter.enum";
import { Beneficiary } from "../models/beneficiary.interface";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-transaction-details",
  templateUrl: "./transaction-details.page.html",
  styleUrls: ["./transaction-details.page.scss"],
})
export class TransactionDetailsPage implements OnInit {
  showToolbar = false;
  currentColor = "light";

  transaction: TransactionHistory;

  avatarBackground2 = this.avatarBackgroundMethod();

  constructor(
    private router: Router,
    private transList: TransactionListService,
    private storage: StorageService,
    private navCtrl: NavController
  ) {
    const { transaction } = router.getCurrentNavigation().extras.state;
    this.transaction = transaction;
    console.log(this.transaction);

    storage.getUser().then(user => {
      if (user && user.UserID && user.token) {
        transList
          .getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_NUMBER, this.transaction.TransactionNo)
          .subscribe();
      }
    });
  }

  ngOnInit() {}

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 130;
      this.currentColor = this.showToolbar ? "dark" : "light";
    }
  }

  startNew() {
    let beneficiary: Beneficiary = {
      ID: this.transaction.BeneficiaryID,
      Name: this.transaction.BeneficiaryName,
      Mode: "",
      BankName: this.transaction.BankName,
      BankBranch: this.transaction.BankBranch,
      AccNo: this.transaction.AccNo,
      LastDate: this.transaction.Date,
      Count: "",
      Currency: this.transaction.Currency,
      AmountFC: this.transaction.AmountFC,
      AmountKD: this.transaction.AmountKD,
      Color: this.transaction.BenefColor,
    };
    this.navCtrl.navigateForward("remittance-details", { state: { beneficiary: beneficiary } });
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
}
