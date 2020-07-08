(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");










var routes = [
    {
        path: "",
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"],
    },
];
var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollingModule"],
            ],
            declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.html":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen #content>\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 25vh; max-height: 25vh;\">\n      <h1 class=\"big-title\" style=\"color: white\">{{ headerTitle }}</h1>\n      <h5 style=\"color: white\">{{ headerSubtitle }}</h5>\n    </div>\n    <div class=\"content\" style=\"padding: 24px 16px 26px 16px\">\n      <mat-horizontal-stepper [linear]=\"true\" #stepper (selectionChange)=\"setHeaderText($event)\">\n\n        <mat-step [completed]=\"signupFormOne.valid && isOtpVerified\">\n          <form [formGroup]=\"signupFormOne\">\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label position=\"floating\">Civil ID</ion-label>\n              <ion-input formControlName=\"civilId\"></ion-input>\n            </ion-item>\n            <!-- <ion-grid no-padding>\n              <ion-row no-padding>\n                <ion-col size=\"3\" no-padding>\n                  <ion-item style=\"--padding-start: 0px\">\n                    <ion-label position=\"floating\">Prefix</ion-label>\n                    <ion-input></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"9\" no-padding style=\"padding-left: 16px\">\n                  <ion-item style=\"--padding-start: 0px\">\n                    <ion-label position=\"floating\">First Name</ion-label>\n                    <ion-input></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid> -->\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label position=\"floating\">Date of Expiry</ion-label>\n              <ion-datetime displayFormat=\"MMM DD, YYYY\" [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"expiryDate\">\n              </ion-datetime>\n            </ion-item>\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label position=\"floating\">Name as per Civil ID</ion-label>\n              <ion-input formControlName=\"name\" (ionBlur)=\"capitalizeName()\"></ion-input>\n            </ion-item>\n            <mat-form-field style=\"min-width: 100%\">\n              <mat-select formControlName=\"nationality\" name=\"nationality\" placeholder=\"Select Nationality\">\n                <mat-option *ngFor=\"let nationality of nationalityList\" [value]=\"nationality\">\n                  {{nationality.Name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label position=\"floating\">Email ID</ion-label>\n              <ion-input formControlName=\"email\" required></ion-input>\n            </ion-item>\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label position=\"floating\">Mobile Number</ion-label>\n              <ion-input formControlName=\"phone\" required placeholder=\"+965\"></ion-input>\n            </ion-item>\n          </form>\n        </mat-step>\n\n        <mat-step [stepControl]=\"signupFormTwo\">\n          <form [formGroup]=\"signupFormTwo\">\n            <mat-form-field style=\"min-width: 100%\">\n              <mat-select formControlName=\"firstQuestion\" name=\"firstQuestion\" (selectionChange)=\"selectionChange(1)\"\n                [(ngModel)]=\"firstQuestionSelected\" placeholder=\"Question 1\">\n                <mat-option *ngFor=\"let question of allQuestions1\" [value]=\"question\">\n                  {{question.SecretQuestion}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <ion-input class=\"answer-container\" no-padding type=\"text\" placeholder=\"Answer\"\n              formControlName=\"firstAnswer\">\n            </ion-input>\n            <mat-form-field style=\"min-width: 100%\">\n              <mat-select formControlName=\"secondQuestion\" name=\"secondQuestion\" (selectionChange)=\"selectionChange(2)\"\n                placeholder=\"Question 2\">\n                <mat-option *ngFor=\"let question of allQuestions2\" [value]=\"question\">\n                  {{question.SecretQuestion}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <ion-input no-padding class=\"answer-container\" type=\"text\" placeholder=\"Answer\"\n              formControlName=\"secondAnswer\"></ion-input>\n            <mat-form-field style=\"min-width: 100%\">\n              <mat-select formControlName=\"thirdQuestion\" name=\"thirdQuestion\" (selectionChange)=\"selectionChange(3)\"\n                placeholder=\"Question 3\">\n                <mat-option *ngFor=\"let question of allQuestions3\" [value]=\"question\">\n                  {{question.SecretQuestion}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <ion-input no-padding class=\"answer-container\" type=\"text\" placeholder=\"Answer\"\n              formControlName=\"thirdAnswer\">\n            </ion-input>\n            <mat-form-field style=\"min-width: 100%\">\n              <mat-select formControlName=\"fourthQuestion\" name=\"fourthQuestion\" (selectionChange)=\"selectionChange(4)\"\n                placeholder=\"Question 4\">\n                <mat-option *ngFor=\"let question of allQuestions4\" [value]=\"question\">\n                  {{question.SecretQuestion}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <ion-input no-padding class=\"answer-container\" type=\"text\" placeholder=\"Answer\"\n              formControlName=\"fourthAnswer\"></ion-input>\n            <mat-form-field style=\"min-width: 100%\">\n              <mat-select formControlName=\"fifthQuestion\" name=\"fifthQuestion\" (selectionChange)=\"selectionChange(5)\"\n                placeholder=\"Question 5\">\n                <mat-option *ngFor=\"let question of allQuestions5\" [value]=\"question\">\n                  {{question.SecretQuestion}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n            <ion-input no-padding class=\"answer-container\" type=\"text\" placeholder=\"Answer\"\n              formControlName=\"fifthAnswer\">\n            </ion-input>\n          </form>\n        </mat-step>\n\n        <mat-step>\n          <ion-grid no-padding>\n            <!-- <div style=\"margin-bottom: 12px\">Select any one image</div> -->\n            <ion-row>\n              <ion-col size=\"4\" *ngFor=\"let image of securityImages\" class=\"image-container\"\n                [class.selected]=\"image.isSelected\" (click)=\"didSelectImage(image)\">\n                <!-- <div >\n                  <img class='image' [src]=\"image.download_url\" />\n                </div> -->\n\n                <ion-button class=\"btn\" [fill]=\"image.isSelected ? 'outline' : 'clear'\">\n                  <img [src]=\"image.Filename\" />\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </mat-step>\n\n        <mat-step [stepControl]=\"signupFormThree\">\n          <!-- <ion-item lines=\"none\">\n            <ion-label position=\"stacked\">Select a Security Phrase</ion-label>\n            <ion-select interface=\"alert\" placeholder=\"Security Phrase\">\n              <ion-select-option *ngFor=\"let phrase of securityPhrases\" [value]=\"phrase.ID\">{{phrase.Phrase}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item> -->\n          <form [formGroup]=\"signupFormThree\">\n            <mat-form-field style=\"min-width: 100%\">\n              <mat-select formControlName=\"secPhrase\" name=\"secPhrase\" placeholder=\"Select Security Phrase\">\n                <mat-option *ngFor=\"let phrase of securityPhrases\" [value]=\"phrase.ID\">\n                  {{phrase.Phrase}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </form>\n        </mat-step>\n\n        <mat-step>\n          <form [formGroup]=\"signupFormFour\">\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label position=\"floating\">Username</ion-label>\n              <ion-input formControlName=\"username4\" required autocapitalize=\"on\" (ionBlur)=\"capitalize()\">\n              </ion-input>\n            </ion-item>\n            <ion-grid no-padding>\n              <ion-row no-padding>\n                <ion-col size=\"10\" no-padding>\n                  <ion-item style=\"--padding-start: 0px\">\n                    <ion-label position=\"floating\">Password</ion-label>\n                    <ion-input formControlName=\"password\" required [type]=\"passwordType\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"2\" no-padding style=\"padding-top: 15px\">\n                  <ion-button fill=\"clear\" (click)=\"didClickPasswordChange(1)\">\n                    <ion-icon *ngIf=\"passwordType === 'password'\" slot=\"icon-only\" name=\"eye\"></ion-icon>\n                    <ion-icon *ngIf=\"passwordType === 'text'\" slot=\"icon-only\" name=\"eye-off\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"10\" no-padding>\n                  <ion-item style=\"--padding-start: 0px\">\n                    <ion-label position=\"floating\">Confirm Password</ion-label>\n                    <ion-input formControlName=\"confirmPassword\" required [type]=\"confirmPasswordType\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"2\" no-padding style=\"padding-top: 15px\">\n                  <ion-button fill=\"clear\" (click)=\"didClickPasswordChange(2)\">\n                    <ion-icon *ngIf=\"confirmPasswordType === 'password'\" slot=\"icon-only\" name=\"eye\"></ion-icon>\n                    <ion-icon *ngIf=\"confirmPasswordType === 'text'\" slot=\"icon-only\" name=\"eye-off\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </form>\n        </mat-step>\n      </mat-horizontal-stepper>\n\n      <ion-grid style=\"padding: 8px 24px 24px 24px\">\n        <ion-row no-padding>\n          <ion-col size=\"3\" no-padding>\n            <ion-button matStepperPrevious (click)=\"previousStep(stepper)\" *ngIf=\"!(stepper.selectedIndex === 0)\">\n              Back\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\" offset=\"6\" no-padding>\n            <ion-button style=\"float:right\" matStepperNext class=\"ion-align-self-end\" (click)=\"nextStep(stepper)\">\n              {{\n                stepper.selectedIndex === stepper.steps.length - 1\n                  ? \"Finish\"\n                  : \" Next \"\n              }}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n:host .image-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n:host .btn {\n  --border-radius: 6px;\n  --border-width: 4px;\n  height: 23vw;\n  --width: 23vw;\n  --padding-start: 0px;\n  --padding-end: 0px; }\n\n:host ::ng-deep .mat-form-field-underline {\n  display: none; }\n\n:host ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 0;\n  padding-top: 24px; }\n\n:host ::ng-deep mat-option.mat-option-text {\n  white-space: normal; }\n\n:host ::ng-deep .mat-select-value-text {\n  white-space: normal; }\n\n:host .answer-container {\n  padding: 8px !important;\n  border-radius: 4px;\n  background: #f1f1f1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksd0RBQWEsRUFBQTs7QUFGakI7RUFLSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QixFQUFBOztBQVAzQjtFQVVJLG9CQUFnQjtFQUNoQixtQkFBZTtFQUNmLFlBQVk7RUFDWixhQUFRO0VBQ1Isb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUE7O0FBZmxCO0VBbUJJLGFBQWEsRUFBQTs7QUFuQmpCO0VBdUJJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUF4QnJCO0VBNEJJLG1CQUFtQixFQUFBOztBQTVCdkI7RUErQkksbUJBQW1CLEVBQUE7O0FBL0J2QjtFQW1DSSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDczZDYsICM4NGRmZmQsICMwMGMwZmYpO1xuICB9XG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5idG4ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiAyM3Z3O1xuICAgIC0td2lkdGg6IDIzdnc7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgfVxuXG4gIDo6bmctZGVlcCBtYXQtb3B0aW9uLm1hdC1vcHRpb24tdGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUtdGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuXG4gIC5hbnN3ZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");
/* harmony import */ var _api_constants_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/constants/public */ "./src/app/api/constants/public.ts");
/* harmony import */ var _api_beneficiary_beneficiary_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/beneficiary/beneficiary.service */ "./src/app/api/beneficiary/beneficiary.service.ts");








var SignUpPage = /** @class */ (function () {
    function SignUpPage(formBuilder, zone, authService, alertController, utils, navCtrl, beneficiaryService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.authService = authService;
        this.alertController = alertController;
        this.utils = utils;
        this.navCtrl = navCtrl;
        this.beneficiaryService = beneficiaryService;
        this.isOtpVerified = false;
        this.isSecondComplete = false;
        this.headerTitle = "Sign Up";
        this.headerSubtitle = "Set up your personal details";
        this.securityImages = [];
        this.securityPhrases = [];
        this.selectedQuestions = [];
        this.allQuestions = [];
        this.passwordType = "password";
        this.confirmPasswordType = "password";
        var date = new Date();
        var month = String(date.getMonth() + 1);
        if (month.length === 1) {
            month = "0" + month;
        }
        var day = String(date.getDate() + 1);
        if (day.length === 1) {
            day = "0" + day;
        }
        zone.run(function () {
            _this.minDate = date.getFullYear() + "-" + month + "-" + day;
            _this.maxDate = date.getFullYear() + 5 + "-" + month + "-" + day;
            console.log(_this.minDate, _this.maxDate);
        });
    }
    SignUpPage.prototype.ngOnInit = function () {
        var _this = this;
        this.signupFormOne = this.formBuilder.group({
            //username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
            nationality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            expiryDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            civilId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            phone: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8),
                ]),
            ],
        });
        this.signupFormTwo = this.formBuilder.group({
            firstQuestion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            firstAnswer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            secondQuestion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            secondAnswer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            thirdQuestion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            thirdAnswer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            fourthQuestion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            fourthAnswer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            fifthQuestion: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            fifthAnswer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        this.signupFormThree = this.formBuilder.group({
            secPhrase: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        this.signupFormFour = this.formBuilder.group({
            //username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
            username4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)])],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^([a-zA-Z0-9~!@#$%^&*()_\\-+=|\\/?><;:.,]{5,30})$"),
                ]),
            ],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        // this.mockImages = this.mockImages.map(image => {
        //   return { ...image, isSelected: false };
        // });
        this.utils.showLoader();
        this.beneficiaryService.getNationalityList().subscribe(function (res) {
            _this.utils.hideLoader();
            if (res && res.Status === "00") {
                _this.nationalityList = res.NationalityList;
            }
        }, function (err) { return _this.utils.hideLoader(); });
        this.authService.getSecurityQuestionList().subscribe(function (questionsArray) {
            if (questionsArray && questionsArray.ErrorCode === "00") {
                _this.allQuestions = questionsArray.SecretQuestionsList;
                _this.allQuestions1 = questionsArray.SecretQuestionsList;
                _this.allQuestions2 = questionsArray.SecretQuestionsList;
                _this.allQuestions3 = questionsArray.SecretQuestionsList;
                _this.allQuestions4 = questionsArray.SecretQuestionsList;
                _this.allQuestions5 = questionsArray.SecretQuestionsList;
                _this.firstQuestionSelected = _this.allQuestions1[0];
                _this.selectionChange(1);
            }
        }, function (err) {
            _this.utils.showAlert("Error", "Unable to get Security Questions. Please check your internet connection.");
        });
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
    };
    SignUpPage.prototype.nextStep = function (stepper) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var secondFormValue, secPh;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // console.log(stepper.selectedIndex);
                // stepper.next();
                switch (stepper.selectedIndex) {
                    case 0:
                        if (this.signupFormOne.valid && !this.isOtpVerified) {
                            this.utils.showLoader();
                            // this.firstStepper = stepper;
                            this.isOtpVerified = false;
                            // this.capitalizeName();
                            this.authService.isValidCivilID(this.signupFormOne.value.civilId).subscribe(function (res) {
                                if (res.Status === "00" && res.Exists === "0") {
                                    _this.authService.getOtp(_this.signupFormOne.value.phone).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var alert_1;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.utils.hideLoader();
                                                    if (!(res.Status === "00")) return [3 /*break*/, 3];
                                                    return [4 /*yield*/, this.alertController.create({
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
                                                                    handler: function (data) {
                                                                        if (data.otp === res.OTP) {
                                                                            _this.utils.showToast("OTP verified successfully. Please press Next to proceed.", 5000);
                                                                            _this.postData = {
                                                                                Name: _this.signupFormOne.value.name,
                                                                                Nationality: _this.signupFormOne.value.nationality.Code,
                                                                                CivilID: _this.signupFormOne.value.civilId,
                                                                                Email: _this.signupFormOne.value.email,
                                                                                MobileNo: _this.signupFormOne.value.phone,
                                                                                ValidDt: _this.signupFormOne.value.expiryDate.replace(/-/g, "").substring(0, 8),
                                                                                OTP: res.OTP,
                                                                                Title: "Mr.",
                                                                            };
                                                                            _this.zone.run(function () {
                                                                                _this.isOtpVerified = true;
                                                                                // this.selectionChange(1);
                                                                                stepper.next();
                                                                            });
                                                                        }
                                                                        else {
                                                                            _this.isOtpVerified = false;
                                                                            _this.utils.showToast("OTP verification failed. Please try again.");
                                                                        }
                                                                    },
                                                                },
                                                            ],
                                                        })];
                                                case 1:
                                                    alert_1 = _a.sent();
                                                    return [4 /*yield*/, alert_1.present()];
                                                case 2:
                                                    _a.sent();
                                                    _a.label = 3;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                }
                                else {
                                    _this.utils.hideLoader();
                                    _this.utils.showAlert("Error", "Civil ID already exists");
                                }
                            }, function (err) {
                                _this.utils
                                    .showAlert("Error", "Some error occured. Please try again.")
                                    .then(function () { return _this.utils.hideLoader(); });
                            }, function () {
                                _this.utils.hideLoader();
                            });
                        }
                        else if (this.isOtpVerified && this.signupFormOne.valid) {
                            stepper.next();
                        }
                        else {
                            this.utils.showAlert("Error", "Please fill all the information correctly to proceed.");
                        }
                        break;
                    case 1:
                        // this.firstStepper.next();
                        if (this.signupFormTwo.valid) {
                            secondFormValue = this.signupFormTwo.value;
                            this.postData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.postData, { S_Question_1: secondFormValue.firstQuestion.SecretQuestionNo, S_Answer_1: secondFormValue.firstAnswer, S_Question_2: secondFormValue.secondQuestion.SecretQuestionNo, S_Answer_2: secondFormValue.secondAnswer, S_Question_3: secondFormValue.thirdQuestion.SecretQuestionNo, S_Answer_3: secondFormValue.thirdAnswer, S_Question_4: secondFormValue.fourthQuestion.SecretQuestionNo, S_Answer_4: secondFormValue.fourthAnswer, S_Question_5: secondFormValue.fifthQuestion.SecretQuestionNo, S_Answer_5: secondFormValue.fifthAnswer });
                            this.utils.showLoader();
                            this.authService.getSecurityImages().subscribe(function (res) {
                                _this.utils.hideLoader();
                                if (res && res.Status === "00") {
                                    _this.zone.run(function () {
                                        _this.securityImages = res.AvatarsList.map(function (image) {
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, image, { Filename: _api_constants_public__WEBPACK_IMPORTED_MODULE_6__["default"].BASE + "Avatars/" + image.Filename, isSelected: false });
                                        });
                                        _this.isSecondComplete = true;
                                        // stepper.selected.completed = true;
                                        // this.signupFormTwo.updateValueAndValidity();
                                        console.log(_this.securityImages);
                                        stepper.next();
                                    });
                                }
                            }, function (err) {
                                _this.utils.showAlert("Unable get Security Images. Please check your internet connection.");
                            });
                            // stepper.next();
                        }
                        else {
                            this.utils.showAlert("Error", "Please fill all the details correctly to proceed.");
                        }
                        break;
                    case 2:
                        if (this.selectedImage && this.selectedImage.ID) {
                            this.postData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.postData, { AvatarID: this.selectedImage.ID });
                            this.utils.showLoader();
                            this.authService.getSecurityPhrases().subscribe(function (res) {
                                _this.utils.hideLoader();
                                if (res && res.Status === "00") {
                                    _this.securityPhrases = res.PhrasesList;
                                    stepper.next();
                                }
                            });
                        }
                        else {
                            this.utils.showAlert("Error", "Please select a security image.");
                        }
                        break;
                    case 3:
                        if (this.signupFormThree.value.secPhrase !== "") {
                            secPh = void 0;
                            if (this.signupFormThree.value.secPhrase.length === 1) {
                                secPh = "0" + this.signupFormThree.value.secPhrase;
                            }
                            this.postData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.postData, { PhraseID: secPh });
                            stepper.next();
                        }
                        break;
                    case 4:
                        if (this.signupFormFour.valid) {
                            // this.capitalize();
                            if (this.signupFormFour.value.password === this.signupFormFour.value.confirmPassword) {
                                this.postData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.postData, { UserID: this.signupFormFour.value.username4, Password: this.signupFormFour.value.password });
                                this.utils.showLoader();
                                this.authService.registerApplicant(this.postData).subscribe(function (res) {
                                    _this.utils.hideLoader();
                                    if (res.Status === "00") {
                                        _this.navCtrl.navigateForward("thank-you");
                                    }
                                    else {
                                        _this.utils.showAlert("Error", res.ErrorDesc);
                                    }
                                }, function (err) { return _this.utils.hideLoader(); });
                            }
                            else {
                                this.utils.showAlert("Error", "Passwords doesn't match. Please check and try again.");
                            }
                        }
                        else {
                            console.log(this.signupFormFour.errors);
                        }
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    SignUpPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    SignUpPage.prototype.previousStep = function (stepper) {
        this.selectedImage = null;
        stepper.previous();
    };
    SignUpPage.prototype.setHeaderText = function (event) {
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
    };
    SignUpPage.prototype.didSelectImage = function (imageObj) {
        var _this = this;
        this.zone.run(function () {
            _this.selectedImage = imageObj;
            console.log(imageObj);
            _this.securityImages = _this.securityImages.map(function (img) {
                if (img.ID === imageObj.ID) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, img, { isSelected: true });
                }
                else {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, img, { isSelected: false });
                }
                return img;
            });
        });
        setTimeout(function () {
            _this.zone.run(function () { return _this.content.scrollToBottom(300); });
        }, 200);
    };
    SignUpPage.prototype.capitalize = function () {
        var capitalized = this.signupFormFour.value.username4.toUpperCase();
        this.signupFormFour.patchValue({ username4: capitalized });
    };
    SignUpPage.prototype.capitalizeName = function () {
        var capitalized = this.signupFormOne.value.name.toUpperCase();
        this.signupFormOne.patchValue({ name: capitalized });
    };
    SignUpPage.prototype.didClickPasswordChange = function (type) {
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
    };
    SignUpPage.prototype.selectionChange = function (questionNo) {
        var firstSelectedQuestion = this.signupFormTwo.value.firstQuestion;
        var secondSelectedQuestion = this.signupFormTwo.value.secondQuestion;
        var thirdSelectedQuestion = this.signupFormTwo.value.thirdQuestion;
        var fourthSelectedQuestion = this.signupFormTwo.value.fourthQuestion;
        var fifthSelectedQuestion = this.signupFormTwo.value.fifthQuestion;
        this.allQuestions1 = this.allQuestions.filter(function (item) {
            var shouldKeep = true;
            if (item &&
                ((secondSelectedQuestion !== "" && item.SecretQuestionNo === secondSelectedQuestion.SecretQuestionNo) ||
                    (thirdSelectedQuestion !== "" && item.SecretQuestionNo === thirdSelectedQuestion.SecretQuestionNo) ||
                    (fourthSelectedQuestion !== "" && item.SecretQuestionNo === fourthSelectedQuestion.SecretQuestionNo) ||
                    (fifthSelectedQuestion !== "" && item.SecretQuestionNo === fifthSelectedQuestion.SecretQuestionNo))) {
                shouldKeep = false;
            }
            return shouldKeep;
        });
        this.allQuestions2 = this.allQuestions.filter(function (item) {
            var shouldKeep = true;
            if (item &&
                ((firstSelectedQuestion !== "" && item.SecretQuestionNo === firstSelectedQuestion.SecretQuestionNo) ||
                    (thirdSelectedQuestion !== "" && item.SecretQuestionNo === thirdSelectedQuestion.SecretQuestionNo) ||
                    (fourthSelectedQuestion !== "" && item.SecretQuestionNo === fourthSelectedQuestion.SecretQuestionNo) ||
                    (fifthSelectedQuestion !== "" && item.SecretQuestionNo === fifthSelectedQuestion.SecretQuestionNo))) {
                shouldKeep = false;
            }
            return shouldKeep;
        });
        this.allQuestions3 = this.allQuestions.filter(function (item) {
            var shouldKeep = true;
            if (item &&
                ((firstSelectedQuestion !== "" && item.SecretQuestionNo === firstSelectedQuestion.SecretQuestionNo) ||
                    (secondSelectedQuestion !== "" && item.SecretQuestionNo === secondSelectedQuestion.SecretQuestionNo) ||
                    (fourthSelectedQuestion !== "" && item.SecretQuestionNo === fourthSelectedQuestion.SecretQuestionNo) ||
                    (fifthSelectedQuestion !== "" && item.SecretQuestionNo === fifthSelectedQuestion.SecretQuestionNo))) {
                shouldKeep = false;
            }
            return shouldKeep;
        });
        this.allQuestions4 = this.allQuestions.filter(function (item) {
            var shouldKeep = true;
            if (item &&
                ((firstSelectedQuestion !== "" && item.SecretQuestionNo === firstSelectedQuestion.SecretQuestionNo) ||
                    (secondSelectedQuestion !== "" && item.SecretQuestionNo === secondSelectedQuestion.SecretQuestionNo) ||
                    (thirdSelectedQuestion !== "" && item.SecretQuestionNo === thirdSelectedQuestion.SecretQuestionNo) ||
                    (fifthSelectedQuestion !== "" && item.SecretQuestionNo === fifthSelectedQuestion.SecretQuestionNo))) {
                shouldKeep = false;
            }
            return shouldKeep;
        });
        this.allQuestions5 = this.allQuestions.filter(function (item) {
            var shouldKeep = true;
            if (item &&
                ((firstSelectedQuestion !== "" && item.SecretQuestionNo === firstSelectedQuestion.SecretQuestionNo) ||
                    (secondSelectedQuestion !== "" && item.SecretQuestionNo === secondSelectedQuestion.SecretQuestionNo) ||
                    (thirdSelectedQuestion !== "" && item.SecretQuestionNo === thirdSelectedQuestion.SecretQuestionNo) ||
                    (fourthSelectedQuestion !== "" && item.SecretQuestionNo === fourthSelectedQuestion.SecretQuestionNo))) {
                shouldKeep = false;
            }
            return shouldKeep;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("content"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignUpPage.prototype, "content", void 0);
    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sign-up",
            template: __webpack_require__(/*! ./sign-up.page.html */ "./src/app/sign-up/sign-up.page.html"),
            styles: [__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_5__["UtilsProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _api_beneficiary_beneficiary_service__WEBPACK_IMPORTED_MODULE_7__["BeneficiaryService"]])
    ], SignUpPage);
    return SignUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module.js.map