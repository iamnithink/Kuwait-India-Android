import { Component } from "@angular/core";

import { Platform, NavController, Events, AlertController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router, RouterEvent } from "@angular/router";
import { StorageService } from "./api/storage/storage.service";
import { User } from "./models/user.interface";
import { Notification } from "./models/notification.interface";
import { Push, PushObject, PushOptions } from "@ionic-native/push/ngx";
import { UtilsProviderService } from "./utils/utils-provider.service";
import { AuthService } from "./api/auth/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  showSubmenu = false;
  contactNumber = '';
  public appPages = [
    {
      title: "Transaction History",
      url: "/history",
      icon: "../assets/history-dark.svg",
    },
    {
      title: "Send Money",
      url: "/select-beneficiary",
      icon: "../assets/send_money-dark.svg",
    },
    {
      title: "Exchange Rates",
      url: "/daily-rates",
      icon: "../assets/rates-dark.svg",
    },
    {
      title: "Add a Beneficiary",
      url: "/add-beneficiary",
      icon: "../assets/add_beneficiary-dark.svg",
    },
    {
      title: "Civil ID",
      url: "/civil-id",
      icon: "../assets/kyc.svg",
    },
    // {
    //   title: "AML Verification",
    //   url: "/civil-video",
    //   icon: "../assets/kyc.svg",
    // },
    {
      title: "Our Services",
      url: "/our-services",
      icon: "../assets/history-dark.svg",
    },
    // {
    //   title: "Terms and Conditions",
    //   url: "/list",
    //   icon: "../assets/tnc.svg"
    // },
    {
      title: "Settings",
      url: "/settings",
      icon: "../assets/settings.svg",
    },
    {
      title: "Logout",
      url: "/list",
      icon: "../assets/logout.svg",
    },
  ];

  avatarBackground = this.avatarBackground2();

  rootUser: User;

  sub;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: StorageService,
    private navCtrl: NavController,
    private auth: AuthService,
    private alertController: AlertController,
    private utils: UtilsProviderService,
    private authService: AuthService
  ) {
    this.initializeApp();
    this.fetchContactNumber();

    this.sub = this.router.events.subscribe((event: RouterEvent) => {
      if (event.url === "/home") {
        setTimeout(() => {
          storage.getUser().then(user => {
            this.rootUser = user;
            console.log("user main", user);
            this.unsub();
          });
        }, 500);
      }
    });
  }

  unsub() {
    this.sub.unsubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#0073d6");
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      // this.registerPush();

      this.storage
        .checkLoginStatus()
        .then(res => {
          if (res) {
            this.navCtrl.navigateRoot("welcome");
          } else {
            this.navCtrl.navigateRoot("welcome");
          }
        })
        .catch(() => {
          this.navCtrl.navigateRoot("welcome");
        });
    });
  }

  avatarBackground2(): String {
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

  // registerPush() {
  //   // to check if we have permission
  //   this.push.hasPermission().then((res: any) => {
  //     if (res.isEnabled) {
  //       console.log("We have permission to send push notifications");
  //     } else {
  //       console.log("We do not have permission to send push notifications");
  //     }
  //   });

  //   const options: PushOptions = {
  //     android: {
  //       icon: "ic_notif",
  //       iconColor: "#00bfff",
  //     },
  //     ios: {
  //       alert: "true",
  //       badge: true,
  //       sound: "true",
  //     },
  //     windows: {},
  //     browser: {
  //       pushServiceURL: "http://push.api.phonegap.com/v1/push",
  //     },
  //   };

  //   const pushObject: PushObject = this.push.init(options);

  //   pushObject.on("notification").subscribe((notification: any) => {
  //     console.log("Received a notification", notification);
  //     let date = new Date();
  //     var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  //     let num1 = date.getDate();
  //     let num;
  //     if (String(num1).length === 1) {
  //       num = "0" + num1;
  //     }
  //     let storeData: Notification = {
  //       title: notification.title,
  //       body: notification.message,
  //       date: `${num}`,
  //       color: notification.additionalData.color,
  //       ts: notification.additionalData.ts,
  //       month: `${months[date.getMonth()]}`,
  //     };
  //     this.storage.setNotification(storeData).then(() => {
  //       pushObject.finish().then(
  //         () => {
  //           console.log("success");
  //         },
  //         () => {
  //           console.log("error");
  //         }
  //       );
  //     });
  //   });

  //   pushObject.on("registration").subscribe((registration: any) => {
  //     console.log("Device registered", JSON.stringify(registration));
  //     this.storage.setFcmToken(registration.registrationId).then(() => {
  //       console.log("set token to secure storage");
  //       this.storage.checkLoginStatus().then(res => {
  //         if (res) {
  //           this.auth.getMyIp(registration.registrationId).subscribe();
  //         }
  //       });
  //     });
  //   });

  //   pushObject.on("error").subscribe(error => console.error("Error with Push plugin", error));
  // }

  onMenuClick(menu: { title: String; url: String }) {
    if (menu.title !== 'Logout') {
      this.router.navigate([menu.url]);
    } else {
      this.onLogout();
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
