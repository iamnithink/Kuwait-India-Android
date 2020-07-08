import { Component, OnInit, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController, Platform } from "@ionic/angular";
import { StorageService } from "../api/storage/storage.service";
import { Push, PushObject, PushOptions } from "@ionic-native/push/ngx";
import { Notification } from "../models/notification.interface";
import { AuthService } from "../api/auth/auth.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  ip: String;
  subscription: any;
  notificationsCount = 0;
  constructor(
    private router: Router,
    private menuCtrl: MenuController,
    private storage: StorageService,
    private platform: Platform,
    private push: Push,
    private auth: AuthService,
    private zone: NgZone
  ) {
    this.menuCtrl.enable(false);
    this.platform.ready().then(() => {
      storage.getUnreadCount().then(count => {
        if (count) {
          this.zone.run(() => {
            this.notificationsCount = count;
          });
        }
      });
      this.registerPush();
    });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator["app"].exitApp();
    });
    this.storage.getUnreadCount().then(count => {
      if (count) {
        this.zone.run(() => {
          this.notificationsCount = count;
        });
      }
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
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
            this.zone.run(() => {
              this.notificationsCount = count;
            });
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
            this.auth.getMyIp(registration.registrationId).subscribe(res => {
              console.log("IPRES", res);
            });
          }
        });
      });
    });

    pushObject.on("error").subscribe(error => console.error("Error with Push plugin", error));
  }

  gotoLogin() {
    this.router.navigate(["/login"]);
  }

  gotoSignup() {
    this.router.navigate(["/sign-up"]);
  }

  goto(navTo: number) {
    switch (navTo) {
      case 1:
        this.router.navigate(["/branch-locator"]);
        break;
      case 2:
        this.storage.resetCount();
        this.notificationsCount = 0;
        this.router.navigate(["/notifications"]);
        break;
      default:
        break;
    }
  }
}
