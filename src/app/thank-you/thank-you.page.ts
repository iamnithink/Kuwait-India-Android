import { Component, OnInit } from "@angular/core";
import { Platform, NavController } from "@ionic/angular";

@Component({
  selector: "app-thank-you",
  templateUrl: "./thank-you.page.html",
  styleUrls: ["./thank-you.page.scss"],
})
export class ThankYouPage implements OnInit {
  subscription: any;

  constructor(private platform: Platform, private nacCtrl: NavController) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.subscription = this.platform.backButton.subscribeWithPriority(1, () => {
      this.gotoWelcome();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  gotoLocations() {
    this.nacCtrl.navigateBack("branch-locator");
  }

  gotoWelcome() {
    this.nacCtrl.navigateBack("welcome");
  }
}
