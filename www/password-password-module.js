(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["password-password-module"],{

/***/ "./src/app/password/password.module.ts":
/*!*********************************************!*\
  !*** ./src/app/password/password.module.ts ***!
  \*********************************************/
/*! exports provided: PasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPageModule", function() { return PasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password.page */ "./src/app/password/password.page.ts");







var routes = [
    {
        path: '',
        component: _password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]
    }
];
var PasswordPageModule = /** @class */ (function () {
    function PasswordPageModule() {
    }
    PasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_password_page__WEBPACK_IMPORTED_MODULE_6__["PasswordPage"]]
        })
    ], PasswordPageModule);
    return PasswordPageModule;
}());



/***/ }),

/***/ "./src/app/password/password.page.html":
/*!*********************************************!*\
  !*** ./src/app/password/password.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"container\">\n    <div class=\"header\">\n      <h1 class=\"big-title\" style=\"color: white\">Password</h1>\n    </div>\n\n    <div class=\"content\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"10\" no-padding>\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input required [type]=\"passwordType\" [(ngModel)]=\"password\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"2\" no-padding style=\"padding-top: 15px\">\n            <ion-button fill=\"clear\" (click)=\"didClickPasswordChange()\">\n              <ion-icon *ngIf=\"passwordType === 'password'\" slot=\"icon-only\" name=\"eye\"></ion-icon>\n              <ion-icon *ngIf=\"passwordType === 'text'\" slot=\"icon-only\" name=\"eye-off\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-button class=\"login-btn\" expand=\"block\" size=\"large\" (click)=\"loginPressed()\">\n        LOGIN\n      </ion-button>\n      <div class=\"ion-text-center ion-padding\">\n        <span style=\"color: var(--ion-color-primary)\" (click)=\"gotoForgotPassword()\">FORGOT PASSWORD</span>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/password/password.page.scss":
/*!*********************************************!*\
  !*** ./src/app/password/password.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n.login-btn {\n  margin: 32px 0px 0px 0px;\n  --border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9wYXNzd29yZC9wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3REFBYSxFQUFBOztBQUVmO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFzc3dvcmQvcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDA3M2Q2LCAjODRkZmZkLCAjMDBjMGZmKTtcbn1cbi5sb2dpbi1idG4ge1xuICBtYXJnaW46IDMycHggMHB4IDBweCAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/password/password.page.ts":
/*!*******************************************!*\
  !*** ./src/app/password/password.page.ts ***!
  \*******************************************/
/*! exports provided: PasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function() { return PasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var PasswordPage = /** @class */ (function () {
    function PasswordPage(storage, router, authService, utils, events, navCtrl, alertController) {
        this.storage = storage;
        this.router = router;
        this.authService = authService;
        this.utils = utils;
        this.events = events;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.passwordType = "password";
        var userId = router.getCurrentNavigation().extras.state.userId;
        this.userId = userId;
    }
    PasswordPage.prototype.ngOnInit = function () { };
    PasswordPage.prototype.loginPressed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date, inhrs, mins, secs, hrs, toBeHashed, token, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.password = this.password.trim();
                        if (!this.password)
                            return [2 /*return*/];
                        this.utils.showLoader();
                        date = new Date();
                        inhrs = date.getUTCHours() + 3;
                        if (inhrs > 23) {
                            inhrs = 24 - inhrs;
                        }
                        mins = String(date.getUTCMinutes());
                        secs = String(date.getUTCSeconds());
                        if (secs.length === 1) {
                            secs = "0" + secs;
                        }
                        hrs = String(inhrs);
                        if (hrs.length === 1) {
                            hrs = "0" + hrs;
                        }
                        if (mins.length === 1) {
                            mins = "0" + mins;
                        }
                        toBeHashed = this.password + "-" + hrs + mins + secs + "-";
                        console.log(toBeHashed);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.storage.getFcmToken()];
                    case 2:
                        token = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        console.log("error getting token");
                        return [3 /*break*/, 4];
                    case 4:
                        this.authService.getMyIp(token).subscribe(function (ip) {
                            toBeHashed = toBeHashed + ip.IPaddress;
                            console.log(toBeHashed);
                            _this.digestMessage(toBeHashed).then(function (digestValue) {
                                var hashArray = Array.from(new Uint8Array(digestValue));
                                var hashHex = hashArray.map(function (b) { return ("00" + b.toString(16)).slice(-2); }).join("");
                                console.log("SHA VALUE", hashHex);
                                _this.authService.login(_this.userId, hrs + "" + mins + "" + secs, toBeHashed).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                    var _this = this;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                        if (res && res.Status === "00" && res.SessionToken) {
                                            // this.utils.hideLoader();
                                            this.authService.getOtp().subscribe(function (otpRes) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var alert;
                                                var _this = this;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            this.utils.hideLoader();
                                                            return [4 /*yield*/, this.alertController.create({
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
                                                                            handler: function (data) {
                                                                                if (data.otp === otpRes.OTP) {
                                                                                    _this.utils.showToast("OTP verified successfully.", 5000);
                                                                                    _this.utils.showLoader();
                                                                                    _this.authService.getApplicant(_this.userId).subscribe(function (user) {
                                                                                        // user.data = JSON.parse(user.data);
                                                                                        _this.utils.hideLoader();
                                                                                        var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user, { UserID: _this.userId, token: res.SessionToken });
                                                                                        _this.storage.login(data, res.SessionToken).then(function () {
                                                                                            // this.events.publish("logged-in", user);
                                                                                            //this.router.navigate(["/home"]);
                                                                                            _this.navCtrl.navigateRoot("/home");
                                                                                        });
                                                                                    }, function (err) {
                                                                                        _this.utils.hideLoader();
                                                                                    });
                                                                                }
                                                                                else {
                                                                                    // this.isOtpVerified = false;
                                                                                    _this.utils.showToast("OTP verification failed. Please try again.");
                                                                                }
                                                                            },
                                                                        },
                                                                    ],
                                                                })];
                                                        case 1:
                                                            alert = _a.sent();
                                                            return [4 /*yield*/, alert.present()];
                                                        case 2:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }, function (err) {
                                                _this.utils.hideLoader();
                                            });
                                        }
                                        else {
                                            this.utils.hideLoader();
                                            this.utils.showAlert("Error", res.ErrorDesc);
                                        }
                                        return [2 /*return*/];
                                    });
                                }); });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PasswordPage.prototype.digestMessage = function (message) {
        var encoder = new TextEncoder();
        var data = encoder.encode(message);
        return window.crypto.subtle.digest("SHA-256", data);
    };
    PasswordPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    PasswordPage.prototype.didClickPasswordChange = function () {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
    };
    PasswordPage.prototype.gotoForgotPassword = function () {
        this.router.navigate(["/forgot-password"]);
    };
    PasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-password",
            template: __webpack_require__(/*! ./password.page.html */ "./src/app/password/password.page.html"),
            styles: [__webpack_require__(/*! ./password.page.scss */ "./src/app/password/password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_5__["UtilsProviderService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], PasswordPage);
    return PasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=password-password-module.js.map