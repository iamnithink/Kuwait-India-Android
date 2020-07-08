import { Component, OnInit } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { NavController } from "@ionic/angular";
import { GetDaysRateService } from "../api/getDaysRate/get-days-rate.service";
import { Rate } from "../models/rate.interface";

@Component({
  selector: "app-daily-rates",
  templateUrl: "./daily-rates.page.html",
  styleUrls: ["./daily-rates.page.scss"],
})
export class DailyRatesPage implements OnInit {
  showToolbar = false;
  currentColor = "light";

  avatarBackground2 = this.avatarBackgroundMethod();

  rateList: Rate[] = [];

  constructor(private navCtrl: NavController, private dailyRates: GetDaysRateService) {}

  ngOnInit() {
    this.dailyRates.getDaysRate().subscribe(rates => {
      if (rates.RateList) {
        this.rateList = rates.RateList.map(rate => {
          return { ...rate, Image: `../../assets/flags/${rate.CurrencyCode}.png` };
        });
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
}
