import { Component, OnInit } from "@angular/core";
import { Branch } from "../models/branch.interface";
import { Router } from "@angular/router";
import { LaunchNavigator } from "@ionic-native/launch-navigator/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";

@Component({
  selector: "app-branch-list",
  templateUrl: "./branch-list.page.html",
  styleUrls: ["./branch-list.page.scss"],
})
export class BranchListPage implements OnInit {
  locations: Branch[];

  constructor(private router: Router, private launchNavigator: LaunchNavigator, private callNumber: CallNumber) {
    const { list } = router.getCurrentNavigation().extras.state;
    this.locations = list;
  }

  ngOnInit() {}

  onCallClick(location: Branch) {
    this.callNumber.callNumber(location.TEL1, true).then(() => {
      console.log("Called ", location.TEL1);
    });
  }

  onLocationClick(location: Branch) {
    this.launchNavigator.navigate([Number(location.LATITUDE), Number(location.LONGITUDE)]);
  }
}
