import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../api/auth/auth.service";
import { SecretQuestion } from "../models/secret-question";
import { UtilsProviderService } from "../utils/utils-provider.service";
import { StorageService } from "../api/storage/storage.service";
import { Push } from "@ionic-native/push/ngx";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  username: string = "";

  constructor(
    private router: Router,
    private authService: AuthService,
    private utils: UtilsProviderService,
    private push: Push
  ) {}

  ngOnInit() {
    //this.authService.getMyIp().subscribe(() => console.log("ip"), err => console.log("err", err));
  }

  loginPressed() {
    this.capitalizeUserId();
    this.username = this.username.trim();
    if (!this.username) return;
    this.utils.showLoader();
    this.authService.isValidId(this.username).subscribe(
      res => {
        this.authService.getSecretQuestion(this.username).subscribe(
          (secretQuestion: SecretQuestion) => {
            this.utils.hideLoader();
            if (secretQuestion.Status === "00") {
              this.router.navigate(["/security-image-and-phrase"], {
                state: { userId: this.username, secretQuestion: secretQuestion, isValidIdRes: res },
              });
            } else {
              this.showError(secretQuestion.ErrorDesc);
            }
          },
          err => {
            this.utils.hideLoader();
            this.showError();
          }
        );
      },
      err => {
        this.utils.hideLoader();
        this.showError();
      }
    );

    // this.router.navigate(["/security-question"], {
    //   state: { username: this.username },
    // });
  }

  ionViewWillLeave() {
    this.utils.hideLoader();
  }

  capitalizeUserId() {
    this.username = this.username.toUpperCase();
  }

  private showError(message = "Some error occured. Please try again.") {
    this.utils.showAlert("Error", message);
  }

  gotoSignup() {
    this.router.navigate(["/sign-up"]);
  }
  
  gotoForgotPassword() {
    this.router.navigate(["/forgot-password"]);
  }

}
