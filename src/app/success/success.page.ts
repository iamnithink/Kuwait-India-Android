import { Component, OnInit } from "@angular/core";
import { Platform, NavController } from "@ionic/angular";
import { UtilsProviderService } from "../utils/utils-provider.service";

@Component({
  selector: "app-success",
  templateUrl: "./success.page.html",
  styleUrls: ["./success.page.scss"],
})
export class SuccessPage implements OnInit {
  subscription: any;

  constructor(private platform: Platform, private utils: UtilsProviderService, private navCtrl: NavController) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      this.utils.showToast("Please press Go to Home button to continue.");
    });
  }

  gotoHome() {
    this.navCtrl.navigateForward("home");
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}
