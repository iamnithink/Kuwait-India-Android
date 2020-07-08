import { Component, OnInit } from "@angular/core";
import { StorageService } from "../api/storage/storage.service";
import { Router } from "@angular/router";
import sha256 from "fast-sha256";
import { AuthService } from "../api/auth/auth.service";
import { UtilsProviderService } from "../utils/utils-provider.service";
import { Events, NavController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-password",
  templateUrl: "./password.page.html",
  styleUrls: ["./password.page.scss"],
})
export class PasswordPage implements OnInit {
  password: string;

  passwordType: string = "password";

  userId: string;

  constructor(
    private storage: StorageService,
    private router: Router,
    private authService: AuthService,
    private utils: UtilsProviderService,
    private events: Events,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {
    const { userId } = router.getCurrentNavigation().extras.state;
    this.userId = userId;
  }

  ngOnInit() {}

  async loginPressed() {
    this.password = this.password.trim();
    if (!this.password) return;
    this.utils.showLoader();
    //let secs1 = new Date().getTime();
    // let date = new Date();
    // //date.setUTCSeconds(secs1 / 1000);
    // let hrs = String(date.getHours());

    // if (date.getHours() === 0) {
    //   hrs = "22";
    // } else if (date.getHours() === 1) {
    //   hrs = "23";
    // } else if (date.getHours() === 2) {
    //   hrs = "00";
    // } else {
    //   hrs = String(date.getHours() - 2);
    // }

    // console.log(hrs, hrs.length);
    // let inMin = date.getMinutes();

    // if (inMin > 30) {
    //   inMin = inMin - 30;
    // } else {
    //   hrs = String(Number(hrs) - 1);
    //   inMin = inMin + 30;
    // }

    // let mins = String(inMin);
    // if (mins.length === 1) {
    //   mins = "0" + mins;
    // }
    // let secs = String(date.getSeconds());
    // if (secs.length === 1) {
    //   secs = "0" + secs;
    // }
    // if (hrs.length === 1) {
    //   hrs = "0" + hrs;
    // }
    let date = new Date();
    let inhrs = date.getUTCHours() + 3;
    if (inhrs > 23) {
      inhrs = 24 - inhrs;
    }
    let mins = String(date.getUTCMinutes());
    let secs = String(date.getUTCSeconds());
    if (secs.length === 1) {
      secs = "0" + secs;
    }
    let hrs = String(inhrs);
    if (hrs.length === 1) {
      hrs = "0" + hrs;
    }
    if (mins.length === 1) {
      mins = "0" + mins;
    }
    let toBeHashed = this.password + "-" + hrs + mins + secs + "-";
    console.log(toBeHashed);

    //this.utils.showAlert("DEBUG", toBeHashed);

    let token;
    try {
      token = await this.storage.getFcmToken();
    } catch {
      console.log("error getting token");
    }

    this.authService.getMyIp(token).subscribe(ip => {
      toBeHashed = toBeHashed + ip.IPaddress;
      console.log(toBeHashed);
      this.digestMessage(toBeHashed).then(digestValue => {
        const hashArray = Array.from(new Uint8Array(digestValue));
        const hashHex = hashArray.map(b => ("00" + b.toString(16)).slice(-2)).join("");
        console.log("SHA VALUE", hashHex);
        this.authService.login(this.userId, hrs + "" + mins + "" + secs, toBeHashed).subscribe(async res => {
          if (res && res.Status === "00" && res.SessionToken) {
            // this.utils.hideLoader();
            this.authService.getOtp().subscribe(
              async otpRes => {
                this.utils.hideLoader();
                const alert = await this.alertController.create({
                  header: "Please enter OTP to complete login.",
                  inputs: [
                    {
                      name: "otp",
                      type: "number",
                      max: 999999,
                      min: 0,
                      placeholder: "OTP",
                    },
                  ],
                  buttons: [
                    {
                      text: "Cancel",
                      role: "cancel",
                    },
                    {
                      text: "Submit",
                      handler: data => {
                        if (data.otp === otpRes.OTP) {
                          this.utils.showToast("OTP verified successfully.", 5000);

                          this.utils.showLoader();
                          this.authService.getApplicant(this.userId).subscribe(
                            user => {
                              // user.data = JSON.parse(user.data);
                              this.utils.hideLoader();
                              let data = { ...user, UserID: this.userId, token: res.SessionToken };
                              this.storage.login(data, res.SessionToken).then(() => {
                                // this.events.publish("logged-in", user);
                                //this.router.navigate(["/home"]);
                                this.navCtrl.navigateRoot("/home");
                              });
                            },
                            err => {
                              this.utils.hideLoader();
                            }
                          );
                        } else {
                          // this.isOtpVerified = false;
                          this.utils.showToast("OTP verification failed. Please try again.");
                        }
                      },
                    },
                  ],
                });
                await alert.present();
              },
              err => {
                this.utils.hideLoader();
              }
            );
          } else {
            this.utils.hideLoader();
            this.utils.showAlert("Error", res.ErrorDesc);
          }
        });
      });
    });
    // this.storage.login(this.password).then(res => {
    //   if (res) {
    //     this.router.navigate(['/home'])
    //   }
    // })
    //this.router.navigate(['/security-question'], {state: { username: this.username }})
  }

  digestMessage(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    return window.crypto.subtle.digest("SHA-256", data);
  }

  ionViewWillLeave() {
    this.utils.hideLoader();
  }

  didClickPasswordChange() {
    this.passwordType = this.passwordType === "text" ? "password" : "text";
  }
  
  gotoForgotPassword() {
    this.router.navigate(["/forgot-password"]);
  }
}
