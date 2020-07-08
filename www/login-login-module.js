(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 20vh; max-height: 20vh\">\n      <h1 class=\"big-title\" style=\"color: white\">Sign In</h1>\n    </div>\n    <div class=\"content\">\n      <ion-item style=\"--padding-start: 0px\">\n        <ion-label position=\"floating\">USER ID</ion-label>\n        <ion-input [(ngModel)]=\"username\"></ion-input>\n      </ion-item>\n      <ion-button class=\"login-btn\" expand=\"block\" size=\"large\" (click)=\"loginPressed()\">\n        NEXT\n      </ion-button>\n      <div class=\"ion-text-center ion-padding\">\n        Not a user yet?\n        <span style=\"color: var(--ion-color-primary)\" (click)=\"gotoSignup()\">SIGN UP</span> OR\n        <span style=\"color: var(--ion-color-primary)\" (click)=\"gotoForgotPassword()\">FORGOT PASSWORD</span>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n:host .login-btn {\n  margin: 32px 0px 0px 0px;\n  --border-radius: 6px; }\n\n:host .bottom-hard {\n  position: absolute;\n  width: 90%;\n  padding: 0 40px 20px 0px;\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx3REFBYSxFQUFBOztBQUZqQjtFQUtJLHdCQUF3QjtFQUN4QixvQkFBZ0IsRUFBQTs7QUFOcEI7RUFTSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDA3M2Q2LCAjODRkZmZkLCAjMDBjMGZmKTtcbiAgfVxuICAubG9naW4tYnRuIHtcbiAgICBtYXJnaW46IDMycHggMHB4IDBweCAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbiAgLmJvdHRvbS1oYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiAwIDQwcHggMjBweCAwcHg7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/push/ngx */ "./node_modules/@ionic-native/push/ngx/index.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(router, authService, utils, push) {
        this.router = router;
        this.authService = authService;
        this.utils = utils;
        this.push = push;
        this.username = "";
    }
    LoginPage.prototype.ngOnInit = function () {
        //this.authService.getMyIp().subscribe(() => console.log("ip"), err => console.log("err", err));
    };
    LoginPage.prototype.loginPressed = function () {
        var _this = this;
        this.capitalizeUserId();
        this.username = this.username.trim();
        if (!this.username)
            return;
        this.utils.showLoader();
        this.authService.isValidId(this.username).subscribe(function (res) {
            _this.authService.getSecretQuestion(_this.username).subscribe(function (secretQuestion) {
                _this.utils.hideLoader();
                if (secretQuestion.Status === "00") {
                    _this.router.navigate(["/security-image-and-phrase"], {
                        state: { userId: _this.username, secretQuestion: secretQuestion, isValidIdRes: res },
                    });
                }
                else {
                    _this.showError(secretQuestion.ErrorDesc);
                }
            }, function (err) {
                _this.utils.hideLoader();
                _this.showError();
            });
        }, function (err) {
            _this.utils.hideLoader();
            _this.showError();
        });
        // this.router.navigate(["/security-question"], {
        //   state: { username: this.username },
        // });
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    LoginPage.prototype.capitalizeUserId = function () {
        this.username = this.username.toUpperCase();
    };
    LoginPage.prototype.showError = function (message) {
        if (message === void 0) { message = "Some error occured. Please try again."; }
        this.utils.showAlert("Error", message);
    };
    LoginPage.prototype.gotoSignup = function () {
        this.router.navigate(["/sign-up"]);
    };
    LoginPage.prototype.gotoForgotPassword = function () {
        this.router.navigate(["/forgot-password"]);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_4__["UtilsProviderService"],
            _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_5__["Push"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map