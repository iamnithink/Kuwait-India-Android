(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thank-you-thank-you-module"],{

/***/ "./src/app/thank-you/thank-you.module.ts":
/*!***********************************************!*\
  !*** ./src/app/thank-you/thank-you.module.ts ***!
  \***********************************************/
/*! exports provided: ThankYouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function() { return ThankYouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thank-you.page */ "./src/app/thank-you/thank-you.page.ts");







var routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_6__["ThankYouPage"]
    }
];
var ThankYouPageModule = /** @class */ (function () {
    function ThankYouPageModule() {
    }
    ThankYouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_6__["ThankYouPage"]]
        })
    ], ThankYouPageModule);
    return ThankYouPageModule;
}());



/***/ }),

/***/ "./src/app/thank-you/thank-you.page.html":
/*!***********************************************!*\
  !*** ./src/app/thank-you/thank-you.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-text-center\">\n  <div style=\"width: 100%\">\n    <img src=\"../../assets/balloons.png\" class=\"balloons\" />\n  </div>\n  <!-- <ion-label color=\"light\">\n    Thank you for registering with\n    Kuwait India International Exchange.\n  </ion-label> -->\n\n  <ion-text color=\"light\" style=\"line-height: 1.5em\">\n    Thank you for registering with\n    <br>\n    Kuwait India International Exchange.\n    <div style=\"padding: 1em 2em 1em 2em\">\n      If you are a new customer, please visit any branch along with your CIVIL ID to complete the registration process or\n      complete the e-KYC from the menu to send your CIVIL ID and video statement.\n    </div>\n  </ion-text>\n  <ion-button fill=\"solid\" size=\"block\" class=\"locate-btn\" (click)=\"gotoLocations()\">\n    LOCATE BRANCH\n  </ion-button>\n  <!-- <ion-button fill=\"clear\" size=\"block\" class=\"tnc-btn\">\n    Terms and Conditions\n  </ion-button> -->\n  <a href=\"http://www.kuwaitindiaexchange.com/disclaimers/\" style=\"color: white; margin-top: 8px\">Terms and\n    Conditions</a>\n  <div style=\"position: absolute; bottom: 0; width: 100%\" class=\"ion-text-center\">\n    <ion-button expand=\"full\" fill=\"clear\" strong=\"true\" style=\"--color: var(--ion-color-light); width: 100%;\"\n      (click)=\"gotoWelcome()\">\n      CONTINUE\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/thank-you/thank-you.page.scss":
/*!***********************************************!*\
  !*** ./src/app/thank-you/thank-you.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(#0073d6, #00c0ff); }\n\n:host .locate-btn {\n  --color: var(--ion-color-primary);\n  padding: 0 3em;\n  --background: var(--ion-color-light)\n    ; }\n\n:host .balloons {\n  height: 30vh;\n  max-height: 30vh;\n  margin: 5vh 0; }\n\n:host .tnc-btn {\n  --color: var(--ion-color-light);\n  padding: 0 3em;\n  margin-bottom: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC90aGFuay15b3UvdGhhbmsteW91LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLCtDQUFhLEVBQUE7O0FBRm5CO0VBTU0saUNBQVE7RUFDUixjQUFjO0VBQ2Q7SUFBYSxFQUFBOztBQVJuQjtFQVlNLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFDRixFQUFBOztBQWZKO0VBa0JNLCtCQUFRO0VBQ1IsY0FBYztFQUNkLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwNzNkNiwgIzAwYzBmZik7XG4gICAgfVxuXG4gICAgLmxvY2F0ZS1idG4ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBcbiAgICAgIHBhZGRpbmc6IDAgM2VtOyBcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KVxuICAgIH1cblxuICAgIC5iYWxsb29ucyB7XG4gICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICBtYXgtaGVpZ2h0OiAzMHZoOyBcbiAgICAgIG1hcmdpbjogNXZoIDBcbiAgICB9XG5cbiAgICAudG5jLWJ0biB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyBcbiAgICAgIHBhZGRpbmc6IDAgM2VtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/thank-you/thank-you.page.ts":
/*!*********************************************!*\
  !*** ./src/app/thank-you/thank-you.page.ts ***!
  \*********************************************/
/*! exports provided: ThankYouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPage", function() { return ThankYouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ThankYouPage = /** @class */ (function () {
    function ThankYouPage(platform, nacCtrl) {
        this.platform = platform;
        this.nacCtrl = nacCtrl;
    }
    ThankYouPage.prototype.ngOnInit = function () { };
    ThankYouPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.subscription = this.platform.backButton.subscribeWithPriority(1, function () {
            _this.gotoWelcome();
        });
    };
    ThankYouPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    ThankYouPage.prototype.gotoLocations = function () {
        this.nacCtrl.navigateBack("branch-locator");
    };
    ThankYouPage.prototype.gotoWelcome = function () {
        this.nacCtrl.navigateBack("welcome");
    };
    ThankYouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-thank-you",
            template: __webpack_require__(/*! ./thank-you.page.html */ "./src/app/thank-you/thank-you.page.html"),
            styles: [__webpack_require__(/*! ./thank-you.page.scss */ "./src/app/thank-you/thank-you.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ThankYouPage);
    return ThankYouPage;
}());



/***/ })

}]);
//# sourceMappingURL=thank-you-thank-you-module.js.map