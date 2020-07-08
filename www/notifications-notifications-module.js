(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");







var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.html":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"true\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"big-title title-color\" style=\"font-size: 1.5em; padding: 16px\">Notifications</div>\n\n  <div style=\"text-align: center; margin-top: 10%\" *ngIf=\"notifications && notifications.length === 0\">\n    No Notifications!\n  </div>\n\n  <ion-list lines=\"none\" *ngIf=\"notifications && notifications.length !== 0\">\n    <ion-item class=\"beneficiary-card\" *ngFor=\"let notification of notifications\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <ion-item class=\"name-item inner\" lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <div class=\"avatar\" style=\"font-size: 12px\" [ngStyle]=\"{background: notification.color}\">\n                  <ion-label>\n                    <div class=\"avatar-text\">{{notification.date}}</div>\n                    <div class=\"avatar-text\">{{notification.month}}</div>\n                  </ion-label>\n                </div>\n              </ion-avatar>\n              <ion-label style=\"max-width: 100%\">\n                <h3 class=\"title-color\">\n                  {{notification.title}}\n                </h3>\n                <h3 class=\"subtitle-color\">\n                  {{notification.body}}\n                </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".beneficiary-card {\n  width: 100%;\n  padding: 0 8px 8px 8px;\n  --border-top-width: 2px;\n  --border-end-width: 2px;\n  --border-bottom-width: 2px;\n  --border-start-width: 2px;\n  --border-radius: 5px;\n  --inner-border-width: 0;\n  --inner-padding-end: 0px;\n  --border-width: var(--border-top-width) var(--border-end-width) var(--border-bottom-width) var(--border-start-width);\n  --border-color: var(--ion-beneficiary-border-color);\n  --background: var(--ion-beneficiary-background-color); }\n  .beneficiary-card .inner {\n    --background: var(--ion-beneficiary-background-color); }\n  .avatar-text {\n  display: flex;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBbUI7RUFDbkIsdUJBQW1CO0VBQ25CLDBCQUFzQjtFQUN0Qix5QkFBcUI7RUFDckIsb0JBQWdCO0VBRWhCLHVCQUFxQjtFQUNyQix3QkFBb0I7RUFDcEIsb0hBQWU7RUFDZixtREFBZTtFQUNmLHFEQUFhLEVBQUE7RUFiakI7SUFlTSxxREFBYSxFQUFBO0VBSWpCO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZW5lZmljaWFyeS1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDhweCA4cHggOHB4O1xuICAgIC0tYm9yZGVyLXRvcC13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLWVuZC13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLXN0YXJ0LXdpZHRoOiAycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgXG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiB2YXIoLS1ib3JkZXItdG9wLXdpZHRoKSB2YXIoLS1ib3JkZXItZW5kLXdpZHRoKSB2YXIoLS1ib3JkZXItYm90dG9tLXdpZHRoKSB2YXIoLS1ib3JkZXItc3RhcnQtd2lkdGgpO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tYmVuZWZpY2lhcnktYm9yZGVyLWNvbG9yKTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iZW5lZmljaWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAuaW5uZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmVuZWZpY2lhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLmF2YXRhci10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");



var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(storage) {
        var _this = this;
        this.storage = storage;
        this.showToolbar = false;
        this.currentColor = "light";
        this.avatarBackground2 = this.avatarBackgroundMethod();
        storage.getNotifications().then(function (res) {
            if (res) {
                _this.notifications = res.reverse();
            }
            else {
                _this.notifications = [];
            }
        });
    }
    NotificationsPage.prototype.ngOnInit = function () { };
    NotificationsPage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notifications",
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map