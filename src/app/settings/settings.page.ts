import { Component, OnInit, NgZone } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { StorageService } from "../api/storage/storage.service";
import { User } from "../models/user.interface";
import { NavController, AlertController } from "@ionic/angular";
import { AuthService } from "../api/auth/auth.service";
import { UtilsProviderService } from "../utils/utils-provider.service";
import { Push, PushOptions, PushObject } from "@ionic-native/push/ngx";
import { Notification } from "../models/notification.interface";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  showToolbar = false;
  currentColor = "light";

  isNotificationsEnabled: boolean;

  user: User;

  avatarBackground2 = this.avatarBackgroundMethod();

  constructor(
    private storage: StorageService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private auth: AuthService,
    private utils: UtilsProviderService,
    private push: Push,
    private zone: NgZone
  ) {
    storage.getUser().then(res => {
      this.user = res;
    });
  }

  ionViewWillEnter() {
    this.storage.getNotificationStatus().then(status => {
      this.zone.run(() => {
        this.isNotificationsEnabled = status;
      });
    });
  }

  toggleNotifications() {
    this.storage.setNotificationStatus(this.isNotificationsEnabled);
    if (this.isNotificationsEnabled) {
      this.registerPush();
    } else {
      const options: PushOptions = {
        android: {
          icon: "ic_notif",
          iconColor: "#00bfff",
        },
        ios: {
          alert: "true",
          badge: true,
          sound: "true",
        },
        windows: {},
        browser: {
          pushServiceURL: "http://push.api.phonegap.com/v1/push",
        },
      };

      const pushObject: PushObject = this.push.init(options);
      pushObject.unregister().then(() => {
        console.log("Unsubscribed from Notifications");
      });
    }
  }

  registerPush() {
    // to check if we have permission
    this.push.hasPermission().then((res: any) => {
      if (res.isEnabled) {
        console.log("We have permission to send push notifications");
      } else {
        console.log("We do not have permission to send push notifications");
      }
    });

    const options: PushOptions = {
      android: {
        icon: "ic_notif",
        iconColor: "#00bfff",
      },
      ios: {
        alert: "true",
        badge: true,
        sound: "true",
      },
      windows: {},
      browser: {
        pushServiceURL: "http://push.api.phonegap.com/v1/push",
      },
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on("notification").subscribe((notification: any) => {
      console.log("Received a notification", notification);
      let date = new Date();
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      let num1 = date.getDate();
      let num;
      if (String(num1).length === 1) {
        num = "0" + num1;
      }
      let storeData: Notification = {
        title: notification.title,
        body: notification.message,
        date: `${num}`,
        color: notification.additionalData.color,
        ts: notification.additionalData.ts,
        month: `${months[date.getMonth()]}`,
      };
      this.storage.setNotification(storeData).then(() => {
        this.storage.increaseUnreadCount().then(count => {
          if (count) {
            console.log("Increased the count");
          }
          pushObject.finish().then(
            () => {
              console.log("success");
            },
            () => {
              console.log("error");
            }
          );
        });
      });
    });

    pushObject.on("registration").subscribe((registration: any) => {
      console.log("Device registered", JSON.stringify(registration));
      this.storage.setFcmToken(registration.registrationId).then(() => {
        console.log("set token to secure storage");
        this.storage.checkLoginStatus().then(res => {
          if (res) {
            this.auth.getMyIp(registration.registrationId).subscribe();
          }
        });
      });
    });

    pushObject.on("error").subscribe(error => console.error("Error with Push plugin", error));
  }

  ngOnInit() {}

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 130;
      this.currentColor = this.showToolbar ? "dark" : "light";
    }
  }

  async onLogout() {
    const alert = await this.alertController.create({
      header: "Logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Yes",
          handler: () => {
            this.utils.showLoader();
            this.auth.logout().subscribe(
              res => {
                this.utils.hideLoader();
                if (res && res.Status === "00") {
                  this.storage.logout().then(() => {
                    this.navCtrl.navigateBack("/welcome");
                    this.utils.showAlert("Logged out", "You have been succssfully logged out of the session.");
                  });
                } else {
                  this.utils.showAlert("Error", res.ErrorDesc);
                }
              },
              err => {
                this.utils.hideLoader();
                this.utils.showAlert();
              }
            );
          },
        },
      ],
    });
    await alert.present();
  }

  ionViewWillLeave() {
    this.utils.hideLoader();
  }

  async changePassword() {
    const alert = await this.alertController.create({
      header: "Change Password",
      inputs: [
        {
          type: "password",
          placeholder: "Old password",
          name: "oldPass",
        },
        {
          type: "password",
          placeholder: "New password",
          name: "newPass",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Change",
          handler: async data => {
            let oldpass = data.oldPass;
            let regex = RegExp("^([a-zA-Z0-9~!@#$%^&*()_\\-+=|\\/?><;:.,]{5,30})$");
            if (data.newPass !== "" && data.oldPass !== "" && regex.test(oldpass)) {
              let user = await this.storage.getUser();
              this.utils.showLoader();
              this.auth.changePassword(user.UserID, data.oldPass, data.newPass).subscribe(
                async res => {
                  this.utils.hideLoader();
                  if (res && res.Status === "00") {
                    const okAlert = await this.alertController.create({
                      header: "Successful",
                      backdropDismiss: false,
                      message: "Password has been changed successfully.",
                      buttons: [
                        {
                          text: "OK",
                          handler: () => {
                            this.navCtrl.navigateRoot("welcome");
                          },
                        },
                      ],
                    });
                    okAlert.present();
                  } else if (res.ErrorCode === "17" || res.ErrorCode === "03") {
                    this.utils.showAlert("Error", res.ErrorDesc);
                  } else {
                    this.utils.showAlert("Error", "Some error occured. Please try again later.");
                  }
                },
                err => {
                  this.utils.hideLoader();
                  this.utils.showAlert();
                }
              );
            }
          },
        },
      ],
    });
    alert.present();
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
