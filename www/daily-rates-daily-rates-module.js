(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["daily-rates-daily-rates-module"],{

/***/ "./src/app/daily-rates/daily-rates.module.ts":
/*!***************************************************!*\
  !*** ./src/app/daily-rates/daily-rates.module.ts ***!
  \***************************************************/
/*! exports provided: DailyRatesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyRatesPageModule", function() { return DailyRatesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _daily_rates_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./daily-rates.page */ "./src/app/daily-rates/daily-rates.page.ts");







var routes = [
    {
        path: '',
        component: _daily_rates_page__WEBPACK_IMPORTED_MODULE_6__["DailyRatesPage"]
    }
];
var DailyRatesPageModule = /** @class */ (function () {
    function DailyRatesPageModule() {
    }
    DailyRatesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_daily_rates_page__WEBPACK_IMPORTED_MODULE_6__["DailyRatesPage"]]
        })
    ], DailyRatesPageModule);
    return DailyRatesPageModule;
}());



/***/ }),

/***/ "./src/app/daily-rates/daily-rates.page.html":
/*!***************************************************!*\
  !*** ./src/app/daily-rates/daily-rates.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 20vh; max-height: 20vh\">\n      <div class=\"white-text big-title\" style=\"font-size: 1.5em\">\n        Exchange Rates\n      </div>\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"6\" no-padding>\n            <ion-row>\n              <ion-col size=\"4\">\n                <img src=\"../../assets/flags/KWD.png\" style=\"width: 100%; height: 2em;\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-label color=\"light\" style=\"font-weight: bold\">1 KD</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"6\" style=\"align-items: center\">\n            <ion-label color=\"light\" style=\"font-weight: bold\">=</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class=\"content\" style=\"padding: 16px\">\n      <div style=\"text-align: center\">\n        <ion-spinner *ngIf=\"rateList.length === 0\"></ion-spinner>\n      </div>\n      <ion-list *ngIf=\"rateList.length !== 0\">\n        <ion-item *ngFor=\"let rate of rateList\">\n          <ion-thumbnail slot=\"start\" style=\"height: 100%\">\n            <img [src]=\"rate.Image\">\n          </ion-thumbnail>\n          <ion-grid no-padding>\n            <ion-row no-paading>\n              <ion-col size=\"auto\" style=\"max-width: 65%\">\n                <ion-label>\n                  <div class=\"title-color\">{{rate.CurrencyCode}}</div>\n                  <div class=\"subtitle-color\">{{rate.CurrencyName}}</div>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"auto\" style=\"max-width: 35%; position: absolute; right: 0;\">\n                <ion-label style=\"white-space: normal\">{{rate.RateInv}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-thumbnail slot=\"start\" style=\"height: 2em\">\n            <img src=\"../../assets/india_flag.svg\">\n          </ion-thumbnail>\n          <ion-grid no-padding>\n            <ion-row no-paading>\n              <ion-col size=\"auto\" style=\"max-width: 65%\">\n                <ion-label>\n                  <div class=\"title-color\">1 INR</div>\n                  <div class=\"subtitle-color\">Indian Rupee</div>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"auto\" style=\"max-width: 35%; position: absolute; right: 0;\">\n                <ion-label style=\"white-space: normal\">Rs 300</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item> -->\n      </ion-list>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/daily-rates/daily-rates.page.scss":
/*!***************************************************!*\
  !*** ./src/app/daily-rates/daily-rates.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\nion-row {\n  align-items: center; }\n\nion-item {\n  --inner-padding-end: 0;\n  --padding-start: 0\n; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9kYWlseS1yYXRlcy9kYWlseS1yYXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3REFBYSxFQUFBOztBQUdqQjtFQUNJLG1CQUNKLEVBQUE7O0FBRUE7RUFDSSxzQkFBb0I7RUFDcEI7QUFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RhaWx5LXJhdGVzL2RhaWx5LXJhdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDA3M2Q2LCAjODRkZmZkLCAjMDBjMGZmKTtcbn1cblxuaW9uLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxufVxuXG5pb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDsgXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwXG59Il19 */"

/***/ }),

/***/ "./src/app/daily-rates/daily-rates.page.ts":
/*!*************************************************!*\
  !*** ./src/app/daily-rates/daily-rates.page.ts ***!
  \*************************************************/
/*! exports provided: DailyRatesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyRatesPage", function() { return DailyRatesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_getDaysRate_get_days_rate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/getDaysRate/get-days-rate.service */ "./src/app/api/getDaysRate/get-days-rate.service.ts");




var DailyRatesPage = /** @class */ (function () {
    function DailyRatesPage(navCtrl, dailyRates) {
        this.navCtrl = navCtrl;
        this.dailyRates = dailyRates;
        this.showToolbar = false;
        this.currentColor = "light";
        this.avatarBackground2 = this.avatarBackgroundMethod();
        this.rateList = [];
    }
    DailyRatesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dailyRates.getDaysRate().subscribe(function (rates) {
            if (rates.RateList) {
                _this.rateList = rates.RateList.map(function (rate) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rate, { Image: "../../assets/flags/" + rate.CurrencyCode + ".png" });
                });
            }
        });
    };
    DailyRatesPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    DailyRatesPage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    DailyRatesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-daily-rates",
            template: __webpack_require__(/*! ./daily-rates.page.html */ "./src/app/daily-rates/daily-rates.page.html"),
            styles: [__webpack_require__(/*! ./daily-rates.page.scss */ "./src/app/daily-rates/daily-rates.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _api_getDaysRate_get_days_rate_service__WEBPACK_IMPORTED_MODULE_3__["GetDaysRateService"]])
    ], DailyRatesPage);
    return DailyRatesPage;
}());



/***/ })

}]);
//# sourceMappingURL=daily-rates-daily-rates-module.js.map