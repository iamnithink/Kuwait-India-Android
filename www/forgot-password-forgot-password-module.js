(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.html":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 20vh; max-height: 20vh\">\n      <h1 class=\"big-title\" style=\"color: white\">Forgot Password</h1>\n    </div>\n    <div class=\"content\">\n      <form [formGroup]=\"forgotpasswordForm\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label position=\"floating\">User ID</ion-label>\n          <ion-input formControlName=\"username\" required autocapitalize=\"on\" (ionBlur)=\"capitalize()\">\n          </ion-input>\n        </ion-item>\n        <ion-grid no-padding>\n          <ion-row no-padding>\n            <ion-col size=\"10\" no-padding>\n              <ion-item style=\"--padding-start: 0px\">\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input formControlName=\"password\" required [type]=\"passwordType\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"2\" no-padding style=\"padding-top: 15px\">\n              <ion-button fill=\"clear\" (click)=\"didClickPasswordChange(1)\">\n                <ion-icon *ngIf=\"passwordType === 'password'\" slot=\"icon-only\" name=\"eye\"></ion-icon>\n                <ion-icon *ngIf=\"passwordType === 'text'\" slot=\"icon-only\" name=\"eye-off\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"10\" no-padding>\n              <ion-item style=\"--padding-start: 0px\">\n                <ion-label position=\"floating\">Confirm Password</ion-label>\n                <ion-input formControlName=\"confirmPassword\" required [type]=\"confirmPasswordType\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"2\" no-padding style=\"padding-top: 15px\">\n              <ion-button fill=\"clear\" (click)=\"didClickPasswordChange(2)\">\n                <ion-icon *ngIf=\"confirmPasswordType === 'password'\" slot=\"icon-only\" name=\"eye\"></ion-icon>\n                <ion-icon *ngIf=\"confirmPasswordType === 'text'\" slot=\"icon-only\" name=\"eye-off\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n\n      <ion-button class=\"login-btn\" expand=\"block\" size=\"large\" (click)=\"forgotPasswordSubmit()\">\n        SUBMIT\n      </ion-button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n:host .login-btn {\n  margin: 32px 0px 0px 0px;\n  --border-radius: 6px; }\n\n:host .bottom-hard {\n  position: absolute;\n  width: 90%;\n  padding: 0 40px 20px 0px;\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLHdEQUFhLEVBQUE7O0FBRm5CO0VBS00sd0JBQXdCO0VBQ3hCLG9CQUFnQixFQUFBOztBQU50QjtFQVNNLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDczZDYsICM4NGRmZmQsICMwMGMwZmYpO1xuICAgIH1cbiAgICAubG9naW4tYnRuIHtcbiAgICAgIG1hcmdpbjogMzJweCAwcHggMHB4IDBweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAuYm90dG9tLWhhcmQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIHBhZGRpbmc6IDAgNDBweCAyMHB4IDBweDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/push/ngx */ "./node_modules/@ionic-native/push/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(formBuilder, router, authService, utils, navCtrl, push, alertController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.utils = utils;
        this.navCtrl = navCtrl;
        this.push = push;
        this.alertController = alertController;
        this.passwordType = 'password';
        this.confirmPasswordType = 'password';
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
        this.forgotpasswordForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)])],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^([a-zA-Z0-9~!@#$%^&*()_\\-+=|\\/?><;:.,]{5,30})$'),
                ]),
            ],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    };
    ForgotPasswordPage.prototype.forgotPasswordSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var paswd;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.forgotpasswordForm.valid) {
                    // this.capitalize();
                    if (this.forgotpasswordForm.value.password === this.forgotpasswordForm.value.confirmPassword) {
                        paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
                        if (this.forgotpasswordForm.value.password.match(paswd)) {
                            this.postData = {
                                UserID: this.forgotpasswordForm.value.username,
                                Password: this.forgotpasswordForm.value.password,
                            };
                            this.authService.getOtp(this.forgotpasswordForm.value.username).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var alert_1;
                                var _this = this;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(res.Status === '00')) return [3 /*break*/, 3];
                                            this.utils.hideLoader();
                                            return [4 /*yield*/, this.alertController.create({
                                                    header: 'Enter OTP',
                                                    inputs: [
                                                        {
                                                            name: 'otp',
                                                            type: 'number',
                                                            max: 999999,
                                                            min: 0,
                                                            placeholder: 'OTP',
                                                        },
                                                    ],
                                                    buttons: [
                                                        {
                                                            text: 'Cancel',
                                                            role: 'cancel',
                                                        },
                                                        {
                                                            text: 'Submit',
                                                            handler: function (data) {
                                                                if (data.otp === res.OTP) {
                                                                    _this.authService.forgotPassword(_this.postData.UserID, _this.postData.Password, data.otp).subscribe(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                                            if (response.Status === '00') {
                                                                                this.utils.hideLoader();
                                                                                this.utils.showToast('OTP verified and password changed successfully.', 5000);
                                                                                this.navCtrl.navigateRoot('/login');
                                                                            }
                                                                            else if (response.Status === '01') {
                                                                                this.utils.hideLoader();
                                                                                this.utils.showAlert('Error', response.ErrorDesc);
                                                                            }
                                                                            else {
                                                                                this.utils.hideLoader();
                                                                                this.utils.showAlert('Error', 'Something went wrong');
                                                                            }
                                                                            return [2 /*return*/];
                                                                        });
                                                                    }); }, function (err) {
                                                                        _this.utils
                                                                            .showAlert('Error', 'Some error occured. Please try again.')
                                                                            .then(function () { return _this.utils.hideLoader(); });
                                                                    });
                                                                }
                                                                else {
                                                                    _this.utils.showToast('OTP verification failed. Please try again.');
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
                                            return [3 /*break*/, 4];
                                        case 3:
                                            this.utils.hideLoader();
                                            this.utils.showAlert('Error', 'Something went wrong');
                                            _a.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }, function (err) {
                                _this.utils
                                    .showAlert('Error', 'Some error occured. Please try again.')
                                    .then(function () { return _this.utils.hideLoader(); });
                            });
                        }
                        else {
                            this.utils.showAlert('Error', 'Check length and allowed characters - Min 7 with Number, Alpha and Special.');
                        }
                    }
                    else {
                        this.utils.showAlert('Error', 'Passwords doesn\'t match. Please check and try again.');
                    }
                }
                else {
                    this.utils.showAlert('Error', 'Please fill all the information correctly to proceed.');
                }
                return [2 /*return*/];
            });
        });
    };
    ForgotPasswordPage.prototype.capitalize = function () {
        var capitalized = this.forgotpasswordForm.value.username.toUpperCase();
        this.forgotpasswordForm.patchValue({ username4: capitalized });
    };
    ForgotPasswordPage.prototype.didClickPasswordChange = function (type) {
        switch (type) {
            case 1:
                this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
                break;
            case 2:
                this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
                break;
            default:
                break;
        }
    };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.page.html */ "./src/app/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_5__["UtilsProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module.js.map