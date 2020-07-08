import { BeneficiaryListFilter } from "./../models/beneficiary-filter.enum";
import { StorageService } from "./../api/storage/storage.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { NavController, AlertController } from "@ionic/angular";
import { BeneficiaryService } from "../api/beneficiary/beneficiary.service";
import { Beneficiary } from "../models/beneficiary.interface";
import { UtilsProviderService } from "../utils/utils-provider.service";

@Component({
  selector: "app-select-beneficiary",
  templateUrl: "./select-beneficiary.page.html",
  styleUrls: ["./select-beneficiary.page.scss"],
})
export class SelectBeneficiaryPage implements OnInit {
  showToolbar = false;
  currentColor = "light";

  avatarBackground2 = this.avatarBackgroundMethod();

  beneficiaryList: Beneficiary[];
  originalBeneficiaryList: Beneficiary[];

  searchEnabled: boolean = false;

  searchTerm: string;

  constructor(
    private navCtrl: NavController,
    private beneficiaryService: BeneficiaryService,
    private storage: StorageService,
    private zone: NgZone,
    private alertController: AlertController,
    private utils: UtilsProviderService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.storage.getUser().then(user => {
      if (user && user.token) {
        this.zone.run(() => {
          this.beneficiaryList = null;
        });
        this.beneficiaryService
          .getBeneficiaryListByFilter(user.UserID, user.token, BeneficiaryListFilter.COUNT)
          .subscribe(
            data => {
              if (data) {
                if (data.Status !== "01" && data.ErrorCode !== "15") {
                  this.beneficiaryList = data.BeneficiaryList;
                  this.originalBeneficiaryList = data.BeneficiaryList;
                } else if (data.ErrorCode === "94") {
                  this.utils.showSessionExpired();
                } else {
                  this.beneficiaryList = [];
                  this.originalBeneficiaryList = [];
                }
              }
            },
            err => {
              this.utils.showAlertAndBack();
            }
          );
        // this.beneficiaryService
        //   .getBeneficiaryListByFilter(user.UserID, user.token, BeneficiaryListFilter.LAST_TR_DATE)
        //   .subscribe();
        // this.beneficiaryService
        //   .getBeneficiaryListByFilter(user.UserID, user.token, BeneficiaryListFilter.SUM_FC)
        //   .subscribe();
        // this.beneficiaryService
        //   .getBeneficiaryListByFilter(user.UserID, user.token, BeneficiaryListFilter.BENEFICIARYID)
        //   .subscribe();
        // this.beneficiaryService
        //   .getBeneficiaryListByFilter(user.UserID, user.token, BeneficiaryListFilter.SUM_KD)
        //   .subscribe();
      }
    });
  }

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

  ionViewWillLeave() {
    this.utils.hideLoader();
  }

  search() {
    this.beneficiaryList = this.originalBeneficiaryList.filter(item => {
      return item.Name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  gotoAdd() {
    this.navCtrl.navigateForward("add-beneficiary");
  }

  gotoDetails(beneficiary: Beneficiary) {
    this.navCtrl.navigateForward("remittance-details", { state: { beneficiary: beneficiary } });
  }
}
