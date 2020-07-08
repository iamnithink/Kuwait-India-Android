import { Component, OnInit } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { NavController } from "@ionic/angular";
import { TransactionListService } from "../api/transactionList/transaction-list.service";
import { TransactionHistory } from "../models/transaction-history.interface";
import { StorageService } from "../api/storage/storage.service";
import { TransListFilter } from "../models/trans-list-filter.enum";
import { UtilsProviderService } from "../utils/utils-provider.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.page.html",
  styleUrls: ["./history.page.scss"],
})
export class HistoryPage implements OnInit {
  showToolbar = false;
  currentColor = "light";

  avatarBackground2 = this.avatarBackgroundMethod();

  transactions: TransactionHistory[];
  originalTransactions: TransactionHistory[];

  searchEnabled: boolean = false;

  searchTerm: string;

  constructor(
    private navCtrl: NavController,
    private transactionApi: TransactionListService,
    private storage: StorageService,
    private utils: UtilsProviderService
  ) {
    storage.getUser().then(user => {
      if (user && user.token && user.UserID) {
        transactionApi.getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_DATE).subscribe(
          res => {
            if (res.Status !== "00" && res.ErrorCode === "94") {
              utils.showSessionExpired();
            } else if (res.Status === "00") {
              this.transactions = res.TransactionHistory;
              this.originalTransactions = res.TransactionHistory;
            } else {
              utils.showAlert("Error", res.ErrorDesc);
            }
          },
          err => {
            this.utils.hideLoader();
            this.utils.showAlertAndBack();
          }
        );
      }
    });
  }

  ionViewWillLeave() {
    this.utils.hideLoader();
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

  toggleSearch() {
    this.searchEnabled = !this.searchEnabled;
  }

  search() {
    this.transactions = this.originalTransactions.filter(item => {
      return item.BeneficiaryName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  gotoDetails(clickedTransaction: TransactionHistory) {
    this.navCtrl.navigateForward("transaction-details", { state: { transaction: clickedTransaction } });
  }
}
