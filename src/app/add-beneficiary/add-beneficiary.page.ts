import { Component, OnInit } from "@angular/core";
import { ScrollDetail } from "@ionic/core";
import { NavController, AlertController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UtilsProviderService } from "../utils/utils-provider.service";
import { BeneficiaryService } from "../api/beneficiary/beneficiary.service";
import { forkJoin } from "rxjs";
import { Purpose } from "../models/purpose.interface";
import { Relation } from "../models/relation.interface";
import { GetDaysRateService } from "../api/getDaysRate/get-days-rate.service";
import { Rate } from "../models/rate.interface";
import { User } from "../models/user.interface";
import { StorageService } from "../api/storage/storage.service";
import { Nationality } from "../models/nationality.interface";
import { AuthService } from "../api/auth/auth.service";

@Component({
  selector: "app-add-beneficiary",
  templateUrl: "./add-beneficiary.page.html",
  styleUrls: ["./add-beneficiary.page.scss"],
})
export class AddBeneficiaryPage implements OnInit {
  showToolbar = false;
  currentColor = "light";

  addForm: FormGroup;

  purposeList: Purpose[];
  relationList: Relation[];
  rateList: Rate[];
  nationalityList: Nationality[];

  yes = true;

  currentUser: User;

  constructor(
    private formBuilder: FormBuilder,
    private utils: UtilsProviderService,
    private beneficiaryService: BeneficiaryService,
    private getRateService: GetDaysRateService,
    private storage: StorageService,
    private navController: NavController,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    storage.getUser().then(user => (this.currentUser = user));
  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ["", Validators.compose([Validators.required])],
      accountNo: ["", Validators.compose([Validators.required])],
      bankName: ["", Validators.compose([Validators.required])],
      branchName: ["", Validators.compose([Validators.required])],
      ifsc: ["", Validators.compose([Validators.minLength(11), Validators.maxLength(11)])],
      swift: ["", Validators.compose(null)],
      iban: ["", Validators.compose(null)],
      nationality: ["", Validators.compose([Validators.required])],
      relation: ["", Validators.compose([Validators.required])],
      // purpose: ["", Validators.compose([Validators.required])],
      currency: ["", Validators.compose([Validators.required])],
    });
  }

  ionViewDidEnter() {
    this.utils.showLoader();
    forkJoin(
      this.beneficiaryService.getPurposeList(),
      this.beneficiaryService.getRelationList(),
      this.getRateService.getDaysRate(),
      this.beneficiaryService.getNationalityList()
    ).subscribe(
      ([purposeRes, relationRes, ratesRes, nationalityRes]) => {
        this.utils.hideLoader();
        if (purposeRes.Status === "00" && relationRes.Status === "00" && nationalityRes.Status === "00") {
          this.purposeList = purposeRes.PurposeCodeList;
          this.relationList = relationRes.RelationsList;
          this.rateList = ratesRes.RateList;
          this.nationalityList = nationalityRes.NationalityList;
        } else if (
          purposeRes.ErrorCode === "94" ||
          relationRes.ErrorCode === "94" ||
          nationalityRes.ErrorCode === "94"
        ) {
          this.utils.showSessionExpired();
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

  onSubmit() {
    if (this.addForm.valid) {
      if (!this.currentUser) {
        this.utils.showAlert("Error", "Please fill all the correctly to proceed.");
      } else {
        let form = this.addForm.value;
        // console.log(form);
        let postData;
        if (form.currency.CurrencyCode === "INR") {
          if (form.ifsc && form.ifsc !== "" && form.ifsc.length === 11) {
            postData = {
              ACCT: String(form.accountNo),
              UserID: this.currentUser.UserID,
              CivilID: this.currentUser.CivilID,
              CUR_ALPHA: form.currency.CurrencyCode,
              CUR_CODE: form.currency.CurrencyNo,
              NATIONALITY: form.nationality.Code,
              BENEF: form.name,
              BANK: form.bankName,
              BRANCH: form.branchName,
              IFSC: form.ifsc,
              // PURPOSECODE: form.purpose.Code,
              PURPOSETYPE: "",
              IBAN: form.iban && form.iban !== "" ? form.iban : "",
              SWIFT: form.swift && form.swift !== "" ? form.swift : "",
            };
          } else {
            this.utils.showAlert("Error", "Please enter a valid IFSC Code.");
            return;
          }
        } else {
          if (form.swift && form.iban && form.iban !== "" && form.swift !== "") {
            postData = {
              ACCT: String(form.accountNo),
              UserID: this.currentUser.UserID,
              CivilID: this.currentUser.CivilID,
              CUR_ALPHA: form.currency.CurrencyCode,
              CUR_CODE: form.currency.CurrencyNo,
              NATIONALITY: form.nationality.Code,
              BENEF: form.name,
              BANK: form.bankName,
              BRANCH: form.branchName,
              // PURPOSECODE: form.purpose.Code,
              PURPOSETYPE: "",
              IBAN: form.iban,
              SWIFT: form.swift,
              IFSC: form.ifsc && form.ifsc !== "" ? form.ifsc : "",
            };
          } else {
            this.utils.showAlert("Error", "Please enter a valid SWIFT and IBAN numbers.");
            return;
          }
        }
        // let postData = {
        //   ACCT: form.accountNo,
        //   UserID: this.currentUser.UserID,
        //   CivilID: this.currentUser.CivilID,
        //   CUR_ALPHA: form.currency.CurrencyCode,
        //   CUR_CODE: form.currency.CurrencyNo,
        //   NATIONALITY: form.nationality.Code,
        //   BENEF: form.name,
        //   BANK: form.bankName,
        //   BRANCH: form.branchName,
        //   IFSC: form.ifsc,
        //   // PURPOSECODE: form.purpose.Code,
        //   PURPOSETYPE: "",
        //   IBAN: form.iban,
        //   SWIFT: form.swift,
        // };
        // console.log(JSON.stringify(postData));
        this.utils.showLoader();
        this.authService.getOtp().subscribe(
          async otpRes => {
            this.utils.hideLoader();
            const alert = await this.alertController.create({
              header: "Please enter OTP to continue",
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
                      this.beneficiaryService.addBeneficiary(postData).subscribe(
                        res => {
                          this.utils.hideLoader();
                          if (res.Status === "00") {
                            this.utils.showAlert("Success", "Successfully added the beneficiary.");
                            this.navController.pop();
                          } else if (res.ErrorCode !== "94") {
                            this.utils.showAlert("Error", res.ErrorDesc);
                          } else {
                            this.utils.showSessionExpired();
                          }
                        },
                        err => {
                          this.utils.showAlert("Error", "Some error occured. Please try again.", false);
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
      }
    } else {
      this.utils.showAlert("Error", "Please fill all the fields correctly to proceed.");
    }
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 130;
      this.currentColor = this.showToolbar ? "dark" : "light";
    }
  }
}
