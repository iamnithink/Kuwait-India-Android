import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Platform } from "@ionic/angular";
import { Observable } from "rxjs";
import { User } from "src/app/models/user.interface";
import { reject } from "q";
import { Notification } from "src/app/models/notification.interface";
import { PurposeList } from "../beneficiary/beneficiary.service";

const TOKEN = "TOKEN";
const USER = "USER";
const NOTIFICATIONS = "NOTIFICATIONS";
const FCM = "FCM";
const COUNT = "COUNT";
const NOTIFICATIONS_STATUS = "NOTIFICATIONS_STATUS";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  isLoggedIn = false;

  constructor(private storage: Storage, private platform: Platform) {
    platform.ready().then(() => {
      this.checkLoginStatus()
        .then(res => {
          if (res) {
            this.isLoggedIn = true;
          }
        })
        .catch(() => {
          this.isLoggedIn = false;
        });
      this.setNotificationStatus(true);
    });
  }

  checkLoginStatus(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage.get(TOKEN).then(res => {
        if (res) {
          this.isLoggedIn = true;
          resolve(true);
        } else {
          reject();
        }
      });
    });
  }

  getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.storage.get(TOKEN).then(res => {
        if (res) {
          resolve(res);
        } else {
          reject();
        }
      });
    });
  }

  getUser(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.storage.get(USER).then(res => {
        if (res) {
          resolve(res);
        } else {
          reject();
        }
      });
    });
  }

  login(user: User, token: String): Promise<boolean> {
    let tokenPromise = new Promise((resolve, reject) => {
      this.storage
        .set(TOKEN, token)
        .then(
          () => {
            this.isLoggedIn = true;
            resolve();
          },
          err => {
            reject();
          }
        )
        .catch(() => {
          reject();
        });
    });

    let userPromise = new Promise((resolve, reject) => {
      this.storage
        .set(USER, user)
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });

    return new Promise((resolve, reject) => {
      Promise.all([tokenPromise, userPromise])
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });

    // return new Promise((resolve, reject) => {
    //   this.storage
    //     .set(TOKEN, token)
    //     .then(() => {
    //       this.isLoggedIn = true;
    //       resolve(true);
    //     })
    //     .catch(() => {
    //       reject();
    //     });
    // });
  }

  setToken(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage
        .set(TOKEN, token)
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    });
  }

  setNotification(notification): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      let notifs: Notification[] = [];
      try {
        let notifs = await this.getNotifications();
        if (notifs) {
          console.log(notification, notifs.find(i => i.ts === notification.ts));
          if (notifs.find(i => i.ts === notification.ts) === undefined) {
            notifs.push(notification);
          }
        } else {
          notifs = [];
          notifs.push(notification);
        }
        this.storage.set(NOTIFICATIONS, notifs).then(() => resolve(true));
      } catch (error) {
        reject();
      }
    });
  }

  increaseUnreadCount(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.getUnreadCount().then(count => {
        this.storage
          .set(COUNT, count + 1)
          .then(() => resolve(count + 1))
          .catch(() => reject());
      });
    });
  }

  getUnreadCount(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.storage
        .get(COUNT)
        .then(count => {
          if (count) {
            resolve(count);
          } else {
            resolve(0);
          }
        })
        .catch(() => {
          resolve(0);
        });
    });
  }

  resetCount() {
    this.storage.remove(COUNT).then(() => console.log("RESET THE COUNT"));
  }

  getNotifications(): Promise<Notification[]> {
    return new Promise((resolve, reject) => {
      this.storage
        .get(NOTIFICATIONS)
        .then(data => {
          resolve(data);
        })
        .catch(() => {
          reject();
        });
    });
  }

  setFcmToken(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage
        .set(FCM, token)
        .then(data => {
          resolve(true);
        })
        .catch(() => reject());
    });
  }

  getFcmToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.storage
        .get(FCM)
        .then(token => {
          resolve(token);
        })
        .catch(() => reject());
    });
  }

  setNotificationStatus(shouldEnable: boolean): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage
        .set(NOTIFICATIONS_STATUS, shouldEnable)
        .then(data => {
          resolve(true);
        })
        .catch(() => reject());
    });
  }

  getNotificationStatus(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage
        .get(NOTIFICATIONS_STATUS)
        .then(status => {
          if (status !== null) {
            resolve(status);
          } else {
            resolve(true);
          }
        })
        .catch(() => resolve(true));
    });
  }

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.storage.remove(NOTIFICATIONS_STATUS);
      this.storage.remove(USER);
      this.storage
        .remove(TOKEN)
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    });
  }
}
