import { Injectable, NgZone } from "@angular/core";
import { LoadingController, AlertController, ToastController, NavController, Platform } from "@ionic/angular";
import { Network } from "@ionic-native/network/ngx";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class UtilsProviderService {
  loader: any;

  constructor(
    private loadingController: LoadingController,
    public alertController: AlertController,
    private toastController: ToastController,
    private navCtrl: NavController,
    private zone: NgZone,
    private platform: Platform,
    private network: Network,
    private router: Router
  ) {
    platform.ready().then(() => {
      let disconnectSubscription = this.network.onDisconnect().subscribe(async () => {
        console.log("network was disconnected");
        if (router.url !== "/welcome") {
          this.hideLoader();
          const alert = await alertController.create({
            header: `Connection Lost`,
            message: `Please check your internet connection and try again.`,
            buttons: [
              {
                text: "OK",
                handler: () => {
                  navCtrl.navigateRoot("/welcome");
                },
              },
            ],
          });
          await alert.present();
        }
      });
    });
  }

  async showLoader(message = "Please wait...") {
    let loader = await this.loadingController.create({
      message: `${message}`,
      translucent: true,
    });
    this.loader = loader;
    await this.loader.present();
    this.zone.run(() => {
      setTimeout(() => {
        this.loader.message = "Kindly wait while the server responds...";
      }, 20000);
    });
  }

  async hideLoader() {
    if (this.loader) {
      await this.loader.dismiss();
    }
  }

  async showAlert(title = "Error", message = "Some error occured. Please try again.", backdropDismiss: boolean = true) {
    const alert = await this.alertController.create({
      header: `${title}`,
      message: `${message}`,
      backdropDismiss: backdropDismiss,
      buttons: ["OK"],
    });

    await alert.present();
  }

  async showAlertAndBack(title = "Error", message = "Some error occured. Please try again.") {
    const alert = await this.alertController.create({
      header: `${title}`,
      message: `${message}`,
      backdropDismiss: false,
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navCtrl.pop();
          },
        },
      ],
    });

    await alert.present();
  }

  async showToast(message: string, duration = 3000) {
    const toast = await this.toastController.create({
      message: `${message}`,
      duration: duration,
    });
    toast.present();
  }

  async showSessionExpired(title = "Error", message = "The session has expired. Please log-in again to continue.") {
    const alert = await this.alertController.create({
      header: `${title}`,
      message: `${message}`,
      backdropDismiss: false,
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.navCtrl.navigateRoot("welcome");
          },
        },
      ],
    });

    await alert.present();
  }
}
