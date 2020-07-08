import { Component, OnInit } from "@angular/core"
import { NavController } from "@ionic/angular"
import { ScrollDetail } from "@ionic/core"

@Component({
  selector: "app-payment-gateway",
  templateUrl: "./payment-gateway.page.html",
  styleUrls: ["./payment-gateway.page.scss"]
})
export class PaymentGatewayPage implements OnInit {
  showToolbar = false
  currentColor = "light"

  avatarBackground2 = this.avatarBackgroundMethod()

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop
      this.showToolbar = scrollTop >= 130
      this.currentColor = this.showToolbar ? "dark" : "light"
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
    )
  }
}
