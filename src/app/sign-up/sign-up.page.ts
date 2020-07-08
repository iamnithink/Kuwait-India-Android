import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material";
import { AuthService } from "../api/auth/auth.service";
import { SecretQuestionSignup } from "../models/secret-question-signup";
import { SecretQuestionSignupList } from "../models/secret-question-signup-list";
import { AlertController, NavController } from "@ionic/angular";
import { UtilsProviderService } from "../utils/utils-provider.service";
import { SignupPost } from "../models/signup-post.interface";
import PublicApi from "../api/constants/public";
import { BeneficiaryService } from "../api/beneficiary/beneficiary.service";
import { Nationality } from "../models/nationality.interface";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"],
})
export class SignUpPage implements OnInit {
  signupFormOne: FormGroup;
  signupFormTwo: FormGroup;
  signupFormThree: FormGroup;
  signupFormFour: FormGroup;

  @ViewChild("content") private content: any;

  isOtpVerified: boolean = false;
  isSecondComplete: boolean = false;

  minDate: string;
  maxDate: string;

  headerTitle: String = "Sign Up";
  headerSubtitle: String = "Set up your personal details";

  securityImages = [];
  securityPhrases = [];

  nationalityList: Nationality[];

  selectedPhrase;

  selectedQuestions: SecretQuestionSignup[] = [];
  allQuestions: SecretQuestionSignup[] = [];
  allQuestions1: SecretQuestionSignup[];
  allQuestions2: SecretQuestionSignup[];
  allQuestions3: SecretQuestionSignup[];
  allQuestions4: SecretQuestionSignup[];
  allQuestions5: SecretQuestionSignup[];
  firstQuestionSelected: SecretQuestionSignup;
  secondQuestionSelected: SecretQuestionSignup;

  postData: SignupPost;

  selectedImage: any;
  passwordType: string = "password";
  confirmPasswordType: string = "password";

  constructor(
    private formBuilder: FormBuilder,
    private zone: NgZone,
    private authService: AuthService,
    private alertController: AlertController,
    private utils: UtilsProviderService,
    private navCtrl: NavController,
    private beneficiaryService: BeneficiaryService
  ) {
    let date = new Date();
    let month = String(date.getMonth() + 1);
    if (month.length === 1) {
      month = "0" + month;
    }
    let day = String(date.getDate() + 1);
    if (day.length === 1) {
      day = "0" + day;
    }
    zone.run(() => {
      this.minDate = `${date.getFullYear()}-${month}-${day}`;
      this.maxDate = `${date.getFullYear() + 5}-${month}-${day}`;
      console.log(this.minDate, this.maxDate);
    });
  }

  ngOnInit() {
    this.signupFormOne = this.formBuilder.group({
      //username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      nationality: ["", Validators.compose([Validators.required])],
      name: ["", Validators.compose([Validators.required])],
      expiryDate: [new Date(), Validators.compose([Validators.required])],
      civilId: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      phone: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(8),
          Validators.maxLength(8),
        ]),
      ],
    });

    this.signupFormTwo = this.formBuilder.group({
      firstQuestion: ["", Validators.compose([Validators.required])],
      firstAnswer: ["", Validators.compose([Validators.required])],
      secondQuestion: ["", Validators.compose([Validators.required])],
      secondAnswer: ["", Validators.compose([Validators.required])],
      thirdQuestion: ["", Validators.compose([Validators.required])],
      thirdAnswer: ["", Validators.compose([Validators.required])],
      fourthQuestion: ["", Validators.compose([Validators.required])],
      fourthAnswer: ["", Validators.compose([Validators.required])],
      fifthQuestion: ["", Validators.compose([Validators.required])],
      fifthAnswer: ["", Validators.compose([Validators.required])],
    });

    this.signupFormThree = this.formBuilder.group({
      secPhrase: ["", Validators.compose([Validators.required])],
    });

    this.signupFormFour = this.formBuilder.group({
      //username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
      username4: ["", Validators.compose([Validators.required, Validators.maxLength(15)])],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9~!@#$%^&*()_\\-+=|\\/?><;:.,]{5,30})$"),
        ]),
      ],
      confirmPassword: ["", Validators.compose([Validators.required])],
    });

    // this.mockImages = this.mockImages.map(image => {
    //   return { ...image, isSelected: false };
    // });

    this.utils.showLoader();
    this.beneficiaryService.getNationalityList().subscribe(
      res => {
        this.utils.hideLoader();
        if (res && res.Status === "00") {
          this.nationalityList = res.NationalityList;
        }
      },
      err => this.utils.hideLoader()
    );

    this.authService.getSecurityQuestionList().subscribe(
      questionsArray => {
        if (questionsArray && questionsArray.ErrorCode === "00") {
          this.allQuestions = questionsArray.SecretQuestionsList;
          this.allQuestions1 = questionsArray.SecretQuestionsList;
          this.allQuestions2 = questionsArray.SecretQuestionsList;
          this.allQuestions3 = questionsArray.SecretQuestionsList;
          this.allQuestions4 = questionsArray.SecretQuestionsList;
          this.allQuestions5 = questionsArray.SecretQuestionsList;
          this.firstQuestionSelected = this.allQuestions1[0];
          this.selectionChange(1);
        }
      },
      err => {
        this.utils.showAlert("Error", "Unable to get Security Questions. Please check your internet connection.");
      }
    );

    // this.authService.getSecurityImages().subscribe(
    //   res => {
    //     this.utils.hideLoader();
    //     if (res && res.Status === "00") {
    //       this.zone.run(() => {
    //         this.securityImages = res.AvatarsList.map(image => {
    //           return { ...image, Filename: PublicApi.BASE + "Avatars/" + image.Filename, isSelected: false };
    //         });
    //         this.signupFormTwo.updateValueAndValidity();
    //       });
    //     }
    //   },
    //   err => {
    //     this.utils.showAlert("Unable get Security Images. Please check your internet connection.");
    //   }
    // );

    // this.signupFormTwo.statusChanges.subscribe(status => {
    //   if (status === "VALID") {
    //     this.signupFormTwo.updateValueAndValidity();
    //     this.isSecondComplete = true;
    //   } else {
    //     this.signupFormTwo.updateValueAndValidity();
    //     this.isSecondComplete = false;
    //   }
    // });
  }

  async nextStep(stepper: MatStepper) {
    // console.log(stepper.selectedIndex);
    // stepper.next();
    switch (stepper.selectedIndex) {
      case 0:
        if (this.signupFormOne.valid && !this.isOtpVerified) {
          this.utils.showLoader();
          // this.firstStepper = stepper;
          this.isOtpVerified = false;
          // this.capitalizeName();
          this.authService.isValidCivilID(this.signupFormOne.value.civilId).subscribe(
            res => {
              if (res.Status === "00" && res.Exists === "0") {
                this.authService.getOtp(this.signupFormOne.value.phone).subscribe(async res => {
                  this.utils.hideLoader();
                  if (res.Status === "00") {
                    const alert = await this.alertController.create({
                      header: "Enter OTP",
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
                            if (data.otp === res.OTP) {
                              this.utils.showToast("OTP verified successfully. Please press Next to proceed.", 5000);
                              this.postData = {
                                Name: this.signupFormOne.value.name,
                                Nationality: this.signupFormOne.value.nationality.Code,
                                CivilID: this.signupFormOne.value.civilId,
                                Email: this.signupFormOne.value.email,
                                MobileNo: this.signupFormOne.value.phone,
                                ValidDt: this.signupFormOne.value.expiryDate.replace(/-/g, "").substring(0, 8),
                                OTP: res.OTP,
                                Title: "Mr.",
                              };
                              this.zone.run(() => {
                                this.isOtpVerified = true;
                                // this.selectionChange(1);
                                stepper.next();
                              });
                            } else {
                              this.isOtpVerified = false;
                              this.utils.showToast("OTP verification failed. Please try again.");
                            }
                          },
                        },
                      ],
                    });
                    await alert.present();
                  }
                });
              } else {
                this.utils.hideLoader();
                this.utils.showAlert("Error", "Civil ID already exists");
              }
            },
            err => {
              this.utils
                .showAlert("Error", "Some error occured. Please try again.")
                .then(() => this.utils.hideLoader());
            },
            () => {
              this.utils.hideLoader();
            }
          );
        } else if (this.isOtpVerified && this.signupFormOne.valid) {
          stepper.next();
        } else {
          this.utils.showAlert("Error", "Please fill all the information correctly to proceed.");
        }
        break;
      case 1:
        // this.firstStepper.next();
        if (this.signupFormTwo.valid) {
          const secondFormValue = this.signupFormTwo.value;
          this.postData = {
            ...this.postData,
            S_Question_1: secondFormValue.firstQuestion.SecretQuestionNo,
            S_Answer_1: secondFormValue.firstAnswer,
            S_Question_2: secondFormValue.secondQuestion.SecretQuestionNo,
            S_Answer_2: secondFormValue.secondAnswer,
            S_Question_3: secondFormValue.thirdQuestion.SecretQuestionNo,
            S_Answer_3: secondFormValue.thirdAnswer,
            S_Question_4: secondFormValue.fourthQuestion.SecretQuestionNo,
            S_Answer_4: secondFormValue.fourthAnswer,
            S_Question_5: secondFormValue.fifthQuestion.SecretQuestionNo,
            S_Answer_5: secondFormValue.fifthAnswer,
          };
          this.utils.showLoader();
          this.authService.getSecurityImages().subscribe(
            res => {
              this.utils.hideLoader();
              if (res && res.Status === "00") {
                this.zone.run(() => {
                  this.securityImages = res.AvatarsList.map(image => {
                    return { ...image, Filename: PublicApi.BASE + "Avatars/" + image.Filename, isSelected: false };
                  });
                  this.isSecondComplete = true;
                  // stepper.selected.completed = true;
                  // this.signupFormTwo.updateValueAndValidity();
                  console.log(this.securityImages);
                  stepper.next();
                });
              }
            },
            err => {
              this.utils.showAlert("Unable get Security Images. Please check your internet connection.");
            }
          );
          // stepper.next();
        } else {
          this.utils.showAlert("Error", "Please fill all the details correctly to proceed.");
        }
        break;
      case 2:
        if (this.selectedImage && this.selectedImage.ID) {
          this.postData = {
            ...this.postData,
            AvatarID: this.selectedImage.ID,
          };
          this.utils.showLoader();
          this.authService.getSecurityPhrases().subscribe(res => {
            this.utils.hideLoader();
            if (res && res.Status === "00") {
              this.securityPhrases = res.PhrasesList;
              stepper.next();
            }
          });
        } else {
          this.utils.showAlert("Error", "Please select a security image.");
        }
        break;
      case 3:
        if (this.signupFormThree.value.secPhrase !== "") {
          let secPh;
          if (this.signupFormThree.value.secPhrase.length === 1) {
            secPh = "0" + this.signupFormThree.value.secPhrase;
          }
          this.postData = {
            ...this.postData,
            PhraseID: secPh,
          };
          stepper.next();
        }
        break;
      case 4:
        if (this.signupFormFour.valid) {
          // this.capitalize();
          if (this.signupFormFour.value.password === this.signupFormFour.value.confirmPassword) {
            this.postData = {
              ...this.postData,
              UserID: this.signupFormFour.value.username4,
              Password: this.signupFormFour.value.password,
            };
            this.utils.showLoader();
            this.authService.registerApplicant(this.postData).subscribe(
              res => {
                this.utils.hideLoader();
                if (res.Status === "00") {
                  this.navCtrl.navigateForward("thank-you");
                } else {
                  this.utils.showAlert("Error", res.ErrorDesc);
                }
              },
              err => this.utils.hideLoader()
            );
          } else {
            this.utils.showAlert("Error", "Passwords doesn't match. Please check and try again.");
          }
        } else {
          console.log(this.signupFormFour.errors);
        }
      default:
        break;
    }
  }

  ionViewWillLeave() {
    this.utils.hideLoader();
  }

  previousStep(stepper: MatStepper) {
    this.selectedImage = null;
    stepper.previous();
  }

  setHeaderText(event: any) {
    // this.isOtpVerified = false;
    switch (event.selectedIndex) {
      case 0:
        this.headerTitle = "Sign Up";
        this.headerSubtitle = "Set up your personal details";
        break;
      case 1:
        this.headerTitle = "Security Questions";
        this.headerSubtitle = "Set up five questions and answers";
        break;
      case 2:
        this.headerTitle = "Secure Access Image";
        this.headerSubtitle = "Select your security image";
        break;
      case 3:
        this.headerTitle = "Secure Phrase";
        this.headerSubtitle = "Select your security image";
        break;
      case 4:
        this.headerTitle = "Create Credentials";
        this.headerSubtitle = "Type in your desired User ID and password";
        break;
      default:
        this.headerTitle = "Sign Up";
        this.headerSubtitle = "Set up your personal details";
        break;
    }
  }

  didSelectImage(imageObj) {
    this.zone.run(() => {
      this.selectedImage = imageObj;
      console.log(imageObj);
      this.securityImages = this.securityImages.map(img => {
        if (img.ID === imageObj.ID) {
          return { ...img, isSelected: true };
        } else {
          return { ...img, isSelected: false };
        }
        return img;
      });
    });
    setTimeout(() => {
      this.zone.run(() => this.content.scrollToBottom(300));
    }, 200);
  }

  capitalize() {
    let capitalized = this.signupFormFour.value.username4.toUpperCase();
    this.signupFormFour.patchValue({ username4: capitalized });
  }

  capitalizeName() {
    let capitalized = this.signupFormOne.value.name.toUpperCase();
    this.signupFormOne.patchValue({ name: capitalized });
  }

  didClickPasswordChange(type: Number) {
    switch (type) {
      case 1:
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        break;
      case 2:
        this.confirmPasswordType = this.confirmPasswordType === "text" ? "password" : "text";
        break;
      default:
        break;
    }
  }

  selectionChange(questionNo) {
    let firstSelectedQuestion = this.signupFormTwo.value.firstQuestion;
    let secondSelectedQuestion = this.signupFormTwo.value.secondQuestion;
    let thirdSelectedQuestion = this.signupFormTwo.value.thirdQuestion;
    let fourthSelectedQuestion = this.signupFormTwo.value.fourthQuestion;
    let fifthSelectedQuestion = this.signupFormTwo.value.fifthQuestion;
    this.allQuestions1 = this.allQuestions.filter(item => {
      let shouldKeep = true;
      if (
        item &&
        ((secondSelectedQuestion !== "" && item.SecretQuestionNo === secondSelectedQuestion.SecretQuestionNo) ||
          (thirdSelectedQuestion !== "" && item.SecretQuestionNo === thirdSelectedQuestion.SecretQuestionNo) ||
          (fourthSelectedQuestion !== "" && item.SecretQuestionNo === fourthSelectedQuestion.SecretQuestionNo) ||
          (fifthSelectedQuestion !== "" && item.SecretQuestionNo === fifthSelectedQuestion.SecretQuestionNo))
      ) {
        shouldKeep = false;
      }
      return shouldKeep;
    });
    this.allQuestions2 = this.allQuestions.filter(item => {
      let shouldKeep = true;
      if (
        item &&
        ((firstSelectedQuestion !== "" && item.SecretQuestionNo === firstSelectedQuestion.SecretQuestionNo) ||
          (thirdSelectedQuestion !== "" && item.SecretQuestionNo === thirdSelectedQuestion.SecretQuestionNo) ||
          (fourthSelectedQuestion !== "" && item.SecretQuestionNo === fourthSelectedQuestion.SecretQuestionNo) ||
          (fifthSelectedQuestion !== "" && item.SecretQuestionNo === fifthSelectedQuestion.SecretQuestionNo))
      ) {
        shouldKeep = false;
      }
      return shouldKeep;
    });
    this.allQuestions3 = this.allQuestions.filter(item => {
      let shouldKeep = true;
      if (
        item &&
        ((firstSelectedQuestion !== "" && item.SecretQuestionNo === firstSelectedQuestion.SecretQuestionNo) ||
          (secondSelectedQuestion !== "" && item.SecretQuestionNo === secondSelectedQuestion.SecretQuestionNo) ||
          (fourthSelectedQuestion !== "" && item.SecretQuestionNo === fourthSelectedQuestion.SecretQuestionNo) ||
          (fifthSelectedQuestion !== "" && item.SecretQuestionNo === fifthSelectedQuestion.SecretQuestionNo))
      ) {
        shouldKeep = false;
      }
      return shouldKeep;
    });
    this.allQuestions4 = this.allQuestions.filter(item => {
      let shouldKeep = true;
      if (
        item &&
        ((firstSelectedQuestion !== "" && item.SecretQuestionNo === firstSelectedQuestion.SecretQuestionNo) ||
          (secondSelectedQuestion !== "" && item.SecretQuestionNo === secondSelectedQuestion.SecretQuestionNo) ||
          (thirdSelectedQuestion !== "" && item.SecretQuestionNo === thirdSelectedQuestion.SecretQuestionNo) ||
          (fifthSelectedQuestion !== "" && item.SecretQuestionNo === fifthSelectedQuestion.SecretQuestionNo))
      ) {
        shouldKeep = false;
      }
      return shouldKeep;
    });
    this.allQuestions5 = this.allQuestions.filter(item => {
      let shouldKeep = true;
      if (
        item &&
        ((firstSelectedQuestion !== "" && item.SecretQuestionNo === firstSelectedQuestion.SecretQuestionNo) ||
          (secondSelectedQuestion !== "" && item.SecretQuestionNo === secondSelectedQuestion.SecretQuestionNo) ||
          (thirdSelectedQuestion !== "" && item.SecretQuestionNo === thirdSelectedQuestion.SecretQuestionNo) ||
          (fourthSelectedQuestion !== "" && item.SecretQuestionNo === fourthSelectedQuestion.SecretQuestionNo))
      ) {
        shouldKeep = false;
      }
      return shouldKeep;
    });
  }
}
