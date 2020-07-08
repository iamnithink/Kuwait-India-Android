import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../api/auth/auth.service";
import { CommonError } from "../models/common-error";
import { UtilsProviderService } from "../utils/utils-provider.service";
import { IsValidIdRes } from "../models/is-valid-id-res.interface";

@Component({
  selector: "app-security-question",
  templateUrl: "./security-question.page.html",
  styleUrls: ["./security-question.page.scss"],
})
export class SecurityQuestionPage implements OnInit {
  username: string = "";
  answer: string = "";
  question: string;
  isValidIdRes: IsValidIdRes;

  constructor(private router: Router, private authService: AuthService, private utils: UtilsProviderService) {
    const { userId, secretQuestion, isValidIdRes } = router.getCurrentNavigation().extras.state;
    this.username = userId;
    this.question = secretQuestion.SecretQuestion;
    this.isValidIdRes = isValidIdRes;
  }

  ngOnInit() {}

  gotoPassword() {
    this.answer = this.answer.trim();
    if (!this.answer) return;

    //this.router.navigate(["/password"], { state: { answer: this.answer, userId: this.username } });
    this.utils.showLoader();
    this.authService.validateSecretQuestion(this.username, this.answer).subscribe(
      (res: CommonError) => {
        this.utils.hideLoader();
        if (res.Status === "00") {
          this.router.navigate(["/security-image-and-phrase"], {
            state: { answer: this.answer, userId: this.username, isValidIdRes: this.isValidIdRes },
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
  }

  ionViewWillLeave() {
    this.utils.hideLoader();
  }
}
