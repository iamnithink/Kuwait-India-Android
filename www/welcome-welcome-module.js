(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







var routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.page.html":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-button style=\"position: absolute; top: 4%; right: 8px; z-index: 10;\" fill=\"clear\" (click)=\"goto(2)\">\n    <ion-icon slot=\"icon-only\" src=\"../../assets/bell.svg\" color=\"dark\">\n    </ion-icon>\n    <!-- <img src=\"../../assets/bell.png\"> -->\n  </ion-button>\n  <ion-badge *ngIf='notificationsCount !== 0' class=\"notifications-badge\">{{notificationsCount | number}}\n  </ion-badge>\n  <ion-button style=\"position: absolute; top: 4%; left: 8px; z-index: 10;\" fill=\"clear\" (click)=\"goto(1)\">\n    <ion-icon slot=\"icon-only\" src=\"../../assets/location_dark.svg\" color=\"dark\"></ion-icon>\n    <!-- <img src=\"../../assets/location_dark.svg\"> -->\n  </ion-button>\n  <ion-grid no-padding>\n    <ion-row style=\"flex-grow: 1;\" no-padding>\n      <ion-col no-padding size=\"12\" style=\"display: flex; justify-content: center\">\n        <div class=\"logo-container\">\n          <img class=\"logo\" src=\"../../assets/logo-svg.svg\" />\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-padding-horizontal bottom-buttons\">\n      <ion-col class=\"ion-padding\" size=\"12\">\n        <!-- <h1 class=\"big-title\">Welcome</h1>\n        <div class=\"transaction-text\">Customer's Trust -<br>Kuwait India's Pre-eminence</div> -->\n        <ion-button class=\"login-btn\" expand=\"block\" size=\"large\" (click)=\"gotoLogin()\">\n          Existing User?\n        </ion-button>\n        <ion-button class=\"signup-btn\" expand=\"block\" fill=\"outline\" size=\"large\" (click)=\"gotoSignup()\">\n          New User\n        </ion-button>\n        <div class=\"note ion-text-center\">\n          By signing up, you agree to our\n          <a href=\"http://www.kuwaitindiaexchange.com/disclaimers/\">terms and conditions.</a>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  max-height: 42vh;\n  padding: 10%;\n  padding-bottom: 0;\n  min-width: 100%;\n  text-align: center; }\n\n.logo-container {\n  text-align: center;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  top: 10%; }\n\nion-grid {\n  min-height: 100% !important;\n  display: flex;\n  flex-flow: column; }\n\n:host {\n  /* \n    ##Device = Most of the Smartphones Mobiles (Portrait)\n    ##Screen = B/w 320px to 479px\n  */ }\n\n:host .login-btn {\n    margin: 32px 0px 0px 0px;\n    --border-radius: 6px; }\n\n:host .signup-btn {\n    --border-radius: 6px;\n    --border-width: 2px;\n    margin: 10px 0px 0px 0px; }\n\n:host .note {\n    margin: 16px 0px 8px 0px;\n    font-size: 14px;\n    line-height: 1.5; }\n\n:host .note a {\n      color: var(--ion-color-primary); }\n\n:host .notifications-badge {\n    position: absolute;\n    top: 5%;\n    right: 20px;\n    font-size: 10px;\n    z-index: 20;\n    background: var(--ion-color-danger); }\n\n@media (min-width: 768px) and (max-width: 1024px) {\n    :host .bottom-buttons {\n      padding-bottom: 20%; } }\n\n@media (min-width: 320px) and (max-width: 410px) {\n    :host .bottom-buttons {\n      padding-bottom: 10%; } }\n\n@media (min-width: 411px) and (max-width: 767px) {\n    :host .bottom-buttons {\n      padding-bottom: 12%; } }\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {\n    :host .bottom-buttons {\n      padding-bottom: 20%; } }\n\n@media (min-width: 0px) and (max-width: 320px) {\n    :host .bottom-buttons {\n      padding-bottom: 8%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUSxFQUFBOztBQUVWO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFFbkI7RUFrQ0U7OztHQzlCQyxFRGlDQzs7QUFyQ0o7SUFFSSx3QkFBd0I7SUFDeEIsb0JBQWdCLEVBQUE7O0FBSHBCO0lBTUksb0JBQWdCO0lBQ2hCLG1CQUFlO0lBQ2Ysd0JBQXdCLEVBQUE7O0FBUjVCO0lBV0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUFicEI7TUFlTSwrQkFBK0IsRUFBQTs7QUFmckM7SUFtQkksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQ0FBbUMsRUFBQTs7QUFHckM7SUEzQkY7TUE4Qk0sbUJBQW1CLEVBQUEsRUFDcEI7O0FBUUg7SUF2Q0Y7TUEwQ00sbUJBQW1CLEVBQUEsRUFDcEI7O0FBR0g7SUE5Q0Y7TUFpRE0sbUJBQW1CLEVBQUEsRUFDcEI7O0FBR0g7SUFyREY7TUE0RFEsbUJBQ0YsRUFBQSxFQUFDOztBQUlMO0lBakVGO01Bb0VNLGtCQUNGLEVBQUEsRUFBQyIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIG1heC1oZWlnaHQ6IDQydmg7XG4gIHBhZGRpbmc6IDEwJTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ28tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMCU7XG59XG5pb24tZ3JpZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG46aG9zdCB7XG4gIC5sb2dpbi1idG4ge1xuICAgIG1hcmdpbjogMzJweCAwcHggMHB4IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuICAuc2lnbnVwLWJ0biB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG4gIH1cbiAgLm5vdGUge1xuICAgIG1hcmdpbjogMTZweCAwcHggOHB4IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBhIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG4gIC5ub3RpZmljYXRpb25zLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1JTtcbiAgICByaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgei1pbmRleDogMjA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgXG4gICAgLmJvdHRvbS1idXR0b25zIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMCU7XG4gICAgfVxuICB9XG4gIFxuICAvKiBcbiAgICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KVxuICAgICMjU2NyZWVuID0gQi93IDMyMHB4IHRvIDQ3OXB4XG4gICovXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTBweCkge1xuICAgIFxuICAgIC5ib3R0b20tYnV0dG9ucyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQxMXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBcbiAgICAuYm90dG9tLWJ1dHRvbnN7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTIlO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICAgIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIFxuICAgIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIFxuICAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxuICAgIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7IFxuICAgICAgXG4gICAgICAuYm90dG9tLWJ1dHRvbnMge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjAlXG4gICAgICB9XG4gIH1cbiAgXG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgICBcbiAgICAuYm90dG9tLWJ1dHRvbnMge1xuICAgICAgcGFkZGluZy1ib3R0b206IDglXG4gICAgfVxuICB9XG59XG4iLCIubG9nbyB7XG4gIG1heC1oZWlnaHQ6IDQydmg7XG4gIHBhZGRpbmc6IDEwJTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlOyB9XG5cbmlvbi1ncmlkIHtcbiAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjsgfVxuXG46aG9zdCB7XG4gIC8qIFxuICAgICMjRGV2aWNlID0gTW9zdCBvZiB0aGUgU21hcnRwaG9uZXMgTW9iaWxlcyAoUG9ydHJhaXQpXG4gICAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiAgKi8gfVxuICA6aG9zdCAubG9naW4tYnRuIHtcbiAgICBtYXJnaW46IDMycHggMHB4IDBweCAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7IH1cbiAgOmhvc3QgLnNpZ251cC1idG4ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4OyB9XG4gIDpob3N0IC5ub3RlIHtcbiAgICBtYXJnaW46IDE2cHggMHB4IDhweCAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7IH1cbiAgICA6aG9zdCAubm90ZSBhIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IH1cbiAgOmhvc3QgLm5vdGlmaWNhdGlvbnMtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICA6aG9zdCAuYm90dG9tLWJ1dHRvbnMge1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwJTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQxMHB4KSB7XG4gICAgOmhvc3QgLmJvdHRvbS1idXR0b25zIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMCU7IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDExcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIDpob3N0IC5ib3R0b20tYnV0dG9ucyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTIlOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgIDpob3N0IC5ib3R0b20tYnV0dG9ucyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjAlOyB9IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgOmhvc3QgLmJvdHRvbS1idXR0b25zIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4JTsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/push/ngx */ "./node_modules/@ionic-native/push/ngx/index.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");







var WelcomePage = /** @class */ (function () {
    function WelcomePage(router, menuCtrl, storage, platform, push, auth, zone) {
        var _this = this;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.platform = platform;
        this.push = push;
        this.auth = auth;
        this.zone = zone;
        this.notificationsCount = 0;
        this.menuCtrl.enable(false);
        this.platform.ready().then(function () {
            storage.getUnreadCount().then(function (count) {
                if (count) {
                    _this.zone.run(function () {
                        _this.notificationsCount = count;
                    });
                }
            });
            _this.registerPush();
        });
    }
    WelcomePage.prototype.ngOnInit = function () { };
    WelcomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.subscription = this.platform.backButton.subscribe(function () {
            navigator["app"].exitApp();
        });
        this.storage.getUnreadCount().then(function (count) {
            if (count) {
                _this.zone.run(function () {
                    _this.notificationsCount = count;
                });
            }
        });
    };
    WelcomePage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    WelcomePage.prototype.registerPush = function () {
        var _this = this;
        // to check if we have permission
        this.push.hasPermission().then(function (res) {
            if (res.isEnabled) {
                console.log("We have permission to send push notifications");
            }
            else {
                console.log("We do not have permission to send push notifications");
            }
        });
        var options = {
            android: {
                icon: "ic_notif",
                iconColor: "#00bfff",
            },
            ios: {
                alert: "true",
                badge: true,
                sound: "true",
            },
            windows: {},
            browser: {
                pushServiceURL: "http://push.api.phonegap.com/v1/push",
            },
        };
        var pushObject = this.push.init(options);
        pushObject.on("notification").subscribe(function (notification) {
            console.log("Received a notification", notification);
            var date = new Date();
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
            var num1 = date.getDate();
            var num;
            if (String(num1).length === 1) {
                num = "0" + num1;
            }
            var storeData = {
                title: notification.title,
                body: notification.message,
                date: "" + num,
                color: notification.additionalData.color,
                ts: notification.additionalData.ts,
                month: "" + months[date.getMonth()],
            };
            _this.storage.setNotification(storeData).then(function () {
                _this.storage.increaseUnreadCount().then(function (count) {
                    if (count) {
                        console.log("Increased the count");
                        _this.zone.run(function () {
                            _this.notificationsCount = count;
                        });
                    }
                    pushObject.finish().then(function () {
                        console.log("success");
                    }, function () {
                        console.log("error");
                    });
                });
            });
        });
        pushObject.on("registration").subscribe(function (registration) {
            console.log("Device registered", JSON.stringify(registration));
            _this.storage.setFcmToken(registration.registrationId).then(function () {
                console.log("set token to secure storage");
                _this.storage.checkLoginStatus().then(function (res) {
                    if (res) {
                        _this.auth.getMyIp(registration.registrationId).subscribe(function (res) {
                            console.log("IPRES", res);
                        });
                    }
                });
            });
        });
        pushObject.on("error").subscribe(function (error) { return console.error("Error with Push plugin", error); });
    };
    WelcomePage.prototype.gotoLogin = function () {
        this.router.navigate(["/login"]);
    };
    WelcomePage.prototype.gotoSignup = function () {
        this.router.navigate(["/sign-up"]);
    };
    WelcomePage.prototype.goto = function (navTo) {
        switch (navTo) {
            case 1:
                this.router.navigate(["/branch-locator"]);
                break;
            case 2:
                this.storage.resetCount();
                this.notificationsCount = 0;
                this.router.navigate(["/notifications"]);
                break;
            default:
                break;
        }
    };
    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-welcome",
            template: __webpack_require__(/*! ./welcome.page.html */ "./src/app/welcome/welcome.page.html"),
            styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_5__["Push"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module.js.map