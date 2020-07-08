import { Component, OnInit, NgZone } from "@angular/core";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
} from "@ionic-native/google-maps";
import { ToastController, Platform, NavController } from "@ionic/angular";
import { Branch } from "../models/branch.interface";
import { LaunchNavigator, LaunchNavigatorOptions } from "@ionic-native/launch-navigator/ngx";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { UtilsProviderService } from "../utils/utils-provider.service";
import { BranchService } from "../api/branch/branch.service";

@Component({
  selector: "app-branch-locator",
  templateUrl: "./branch-locator.page.html",
  styleUrls: ["./branch-locator.page.scss"],
})
export class BranchLocatorPage implements OnInit {
  map: GoogleMap;
  loading: any;

  locations: Branch[];

  clickedLocation: Branch;

  constructor(
    public toastCtrl: ToastController,
    private platform: Platform,
    private navCtrl: NavController,
    private zone: NgZone,
    private utils: UtilsProviderService,
    private launchNavigator: LaunchNavigator,
    private callNumber: CallNumber,
    private branchService: BranchService
  ) {}

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    this.utils.showLoader();
    this.branchService.getBranchList().subscribe(
      res => {
        this.utils.hideLoader();
        if (res.Status === "00") {
          this.locations = res.BranchList;
          this.loadMap();
        } else if (res.ErrorCode === "94") {
          this.utils.showSessionExpired();
        } else {
          this.utils.showAlert("Error", res.ErrorDesc);
        }
      },
      err => {
        this.utils.hideLoader();
        this.utils.showAlertAndBack();
      }
    );
  }

  ionViewWillLeave() {
    this.utils.hideLoader();
  }

  loadMap() {
    // this.locations = [
    //   {
    //     NAME: "Corprate Head Office",
    //     ADDRESS: "Hamad A.S. Al Ateeqi Building, Al-Shuhada Street, Al-Mirqaab, P.O.Box. 25965, Safat, 13120 Kuwait",
    //     LATITUDE: "29.3476724",
    //     LONGITUDE: "47.9931029",
    //     TEL1: "+96522422677",
    //     TIMINGS: "8.30 am to 1.00 pm and 4.00 pm to 7.30 pm",
    //   },
    //   {
    //     NAME: "Fahaheel Branch",
    //     ADDRESS: "Shop No. 5 and 6,Ground Floor,Oive Super Market, Al Dabbous Street,Fahaheel",
    //     LATITUDE: "29.0772528",
    //     LONGITUDE: "48.132403",
    //     TEL1: "+96523926648",
    //     TIMINGS: "8.30 am to 1.00 pm and 4.00 pm to 7.30 pm",
    //   },
    // ];
    let loc = {
      lat: Number(this.locations[0].LATITUDE),
      lng: Number(this.locations[0].LONGITUDE),
    };
    this.map = GoogleMaps.create("map_canvas", {
      controls: {
        zoom: false,
        mapToolbar: false,
        myLocationButton: false,
        compass: false,
        indoorPicker: false,
      },
      camera: {
        target: loc,
        zoom: 12,
      },
    });
    this.locations.forEach((location, index) => {
      let marker: Marker = this.map.addMarkerSync({
        title: location.NAME,
        icon: "assets/mark.png",
        position: {
          lat: Number(location.LATITUDE),
          lng: Number(location.LONGITUDE),
        },
      });
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.zone.run(() => {
          this.clickedLocation = location;
        });
      });
    });
    this.clickedLocation = this.locations[0];
  }

  navigateClicked() {
    this.launchNavigator.navigate([Number(this.clickedLocation.LATITUDE), Number(this.clickedLocation.LONGITUDE)]);
  }

  callClicked() {
    this.callNumber.callNumber(this.clickedLocation.TEL1, true).then(() => {
      console.log("Called ", this.clickedLocation.TEL1);
    });
  }

  gotoList() {
    this.navCtrl.navigateForward("branch-list", { state: { list: this.locations } });
  }
}
