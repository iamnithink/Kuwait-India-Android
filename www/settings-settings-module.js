(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.html":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" *ngIf=\"user\">\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 20vh; min-height: 20vh\">\n      <ion-item style=\"--background: transparent\" lines=\"none\">\n        <div class=\"menu-avatar\" style=\"margin: 0 16px 0 0\" [ngStyle]=\"{background: avatarBackground2}\">\n          {{user.Name | slice:0:1}}\n        </div>\n        <ion-label style=\"max-width: 100%\">\n          <h2 class=\"white-text\">\n            {{user.Name}}\n          </h2>\n          <h3 class=\"white-text\">\n            {{user.Nationality}}\n          </h3>\n        </ion-label>\n      </ion-item>\n    </div>\n    <div class=\"content\" style=\"padding: 24px 24px\">\n      <ion-list>\n        <ion-label style=\"font-weight: bold\" class=\"title-color\">Account</ion-label>\n        <ion-item>\n          <ion-icon src=\"../../assets/phone.svg\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <div class=\"title-color\">Mobile</div>\n            <div class=\"subtitle-color\">{{user.Mobile}}</div>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon src=\"../../assets/email.svg\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <div class=\"title-color\">Email</div>\n            <div class=\"subtitle-color\">{{user.Email}}</div>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-icon src=\"../../assets/language.svg\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <div class=\"title-color\">Language</div>\n            <div class=\"subtitle-color\">English</div>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list style=\"margin-top: 16px\">\n\n        <ion-label style=\"font-weight: bold;\" class=\"title-color\">Privacy & Security</ion-label>\n        <ion-item (click)=\"changePassword()\">\n          <ion-icon src=\"../../assets/lock.svg\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <div class=\"title-color\">Security</div>\n            <div class=\"subtitle-color\">Change Password</div>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon src=\"../../assets/notification.svg\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <div class=\"title-color\">Notifications</div>\n            <div class=\"subtitle-color\">Turn Notifications on/off</div>\n          </ion-label>\n          <ion-toggle slot=\"end\" [(ngModel)]=\"isNotificationsEnabled\" (ionChange)=\"toggleNotifications()\"></ion-toggle>\n        </ion-item>\n        <ion-item (click)=\"onLogout()\">\n          <ion-icon src=\"../../assets/logout.svg\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <div class=\"title-color\">Logout</div>\n            <div class=\"subtitle-color\">Click here to log out of the app</div>\n          </ion-label>\n        </ion-item>\n\n      </ion-list>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\nion-item {\n  --padding-start: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3REFBYSxFQUFBOztBQUdqQjtFQUNJLGtCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDczZDYsICM4NGRmZmQsICMwMGMwZmYpO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/push/ngx */ "./node_modules/@ionic-native/push/ngx/index.js");







var SettingsPage = /** @class */ (function () {
    function SettingsPage(storage, navCtrl, alertController, auth, utils, push, zone) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.auth = auth;
        this.utils = utils;
        this.push = push;
        this.zone = zone;
        this.showToolbar = false;
        this.currentColor = "light";
        this.avatarBackground2 = this.avatarBackgroundMethod();
        storage.getUser().then(function (res) {
            _this.user = res;
        });
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.getNotificationStatus().then(function (status) {
            _this.zone.run(function () {
                _this.isNotificationsEnabled = status;
            });
        });
    };
    SettingsPage.prototype.toggleNotifications = function () {
        this.storage.setNotificationStatus(this.isNotificationsEnabled);
        if (this.isNotificationsEnabled) {
            this.registerPush();
        }
        else {
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
            pushObject.unregister().then(function () {
                console.log("Unsubscribed from Notifications");
            });
        }
    };
    SettingsPage.prototype.registerPush = function () {
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
                        _this.auth.getMyIp(registration.registrationId).subscribe();
                    }
                });
            });
        });
        pushObject.on("error").subscribe(function (error) { return console.error("Error with Push plugin", error); });
    };
    SettingsPage.prototype.ngOnInit = function () { };
    SettingsPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    SettingsPage.prototype.onLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Logout",
                            message: "Are you sure you want to logout?",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                },
                                {
                                    text: "Yes",
                                    handler: function () {
                                        _this.utils.showLoader();
                                        _this.auth.logout().subscribe(function (res) {
                                            _this.utils.hideLoader();
                                            if (res && res.Status === "00") {
                                                _this.storage.logout().then(function () {
                                                    _this.navCtrl.navigateBack("/welcome");
                                                    _this.utils.showAlert("Logged out", "You have been succssfully logged out of the session.");
                                                });
                                            }
                                            else {
                                                _this.utils.showAlert("Error", res.ErrorDesc);
                                            }
                                        }, function (err) {
                                            _this.utils.hideLoader();
                                            _this.utils.showAlert();
                                        });
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
        });
    };
    SettingsPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    SettingsPage.prototype.changePassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Change Password",
                            inputs: [
                                {
                                    type: "password",
                                    placeholder: "Old password",
                                    name: "oldPass",
                                },
                                {
                                    type: "password",
                                    placeholder: "New password",
                                    name: "newPass",
                                },
                            ],
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                },
                                {
                                    text: "Change",
                                    handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var oldpass, regex, user;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    oldpass = data.oldPass;
                                                    regex = RegExp("^([a-zA-Z0-9~!@#$%^&*()_\\-+=|\\/?><;:.,]{5,30})$");
                                                    if (!(data.newPass !== "" && data.oldPass !== "" && regex.test(oldpass))) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, this.storage.getUser()];
                                                case 1:
                                                    user = _a.sent();
                                                    this.utils.showLoader();
                                                    this.auth.changePassword(user.UserID, data.oldPass, data.newPass).subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                        var okAlert;
                                                        var _this = this;
                                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    this.utils.hideLoader();
                                                                    if (!(res && res.Status === "00")) return [3 /*break*/, 2];
                                                                    return [4 /*yield*/, this.alertController.create({
                                                                            header: "Successful",
                                                                            backdropDismiss: false,
                                                                            message: "Password has been changed successfully.",
                                                                            buttons: [
                                                                                {
                                                                                    text: "OK",
                                                                                    handler: function () {
                                                                                        _this.navCtrl.navigateRoot("welcome");
                                                                                    },
                                                                                },
                                                                            ],
                                                                        })];
                                                                case 1:
                                                                    okAlert = _a.sent();
                                                                    okAlert.present();
                                                                    return [3 /*break*/, 3];
                                                                case 2:
                                                                    if (res.ErrorCode === "17" || res.ErrorCode === "03") {
                                                                        this.utils.showAlert("Error", res.ErrorDesc);
                                                                    }
                                                                    else {
                                                                        this.utils.showAlert("Error", "Some error occured. Please try again later.");
                                                                    }
                                                                    _a.label = 3;
                                                                case 3: return [2 /*return*/];
                                                            }
                                                        });
                                                    }); }, function (err) {
                                                        _this.utils.hideLoader();
                                                        _this.utils.showAlert();
                                                    });
                                                    _a.label = 2;
                                                case 2: return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-settings",
            template: __webpack_require__(/*! ./settings.page.html */ "./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_5__["UtilsProviderService"],
            _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map