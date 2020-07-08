import { Component, OnInit } from "@angular/core";
import { StorageService } from "../api/storage/storage.service";
import { Notification } from "../models/notification.interface";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage implements OnInit {
  showToolbar = false;
  currentColor = "light";

  avatarBackground2 = this.avatarBackgroundMethod();

  notifications: Notification[];

  constructor(private storage: StorageService) {
    storage.getNotifications().then(res => {
      if (res) {
        this.notifications = res.reverse();
      } else {
        this.notifications = [];
      }
    });
  }

  ngOnInit() {}

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
