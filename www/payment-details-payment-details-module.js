(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-details-payment-details-module"],{

/***/ "./src/app/payment-details/payment-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageModule", function() { return PaymentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-details.page */ "./src/app/payment-details/payment-details.page.ts");







var routes = [
    {
        path: '',
        component: _payment_details_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailsPage"]
    }
];
var PaymentDetailsPageModule = /** @class */ (function () {
    function PaymentDetailsPageModule() {
    }
    PaymentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_details_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailsPage"]]
        })
    ], PaymentDetailsPageModule);
    return PaymentDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/payment-details/payment-details.page.html":
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 25vh; min-height: 25vh\">\n      <div class=\"big-title white-text\" style=\"margin-bottom: 16px; font-size: 24px;\">\n        Payment Details\n      </div>\n      <ion-grid no-padding style=\"--margin-left: 0; --margin-right: 0\">\n        <ion-row no-padding style=\"align-items: center\">\n          <ion-col size=\"10\">\n            <div>\n              <span class=\"big-title white-text\" style=\"font-weight: bold\">KWD</span>\n              <span class=\"big-title white-text\"> {{transRateResponse.KD_AMOUNT}}</span>\n            </div>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-fab-button size=\"small\" color=\"light\" fill=\"solid\" shape=\"round\" (click)=\"goBack()\">\n              <ion-icon name=\"md-create\"></ion-icon>\n            </ion-fab-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class=\"content\" style=\"padding: 16px\">\n      <ion-item lines=\"none\">\n        <ion-label text-wrap *ngIf=\"transRateResponse.BeneficiaryID && transRateResponse.BeneficiaryID !== ''\">\n          <h2 class=\"bold-label\">Beneficiary ID</h2>\n          <h2>{{transRateResponse.BeneficiaryID}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"beneficiary.Name && beneficiary.Name !== ''\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">Beneficiary Name</h2>\n          <h2>{{beneficiary.Name}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"beneficiary.AccNo && beneficiary.AccNo !== ''\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">Beneficiary Account Number</h2>\n          <h2>{{beneficiary.AccNo}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"beneficiary.BankName && beneficiary.BankName !== ''\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">Beneficiary Bank</h2>\n          <h2>{{beneficiary.BankName}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"beneficiary.BankBranch && beneficiary.BankBranch !== ''\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">Beneficiary Branch Name</h2>\n          <h2>{{beneficiary.BankBranch}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"purpose && purpose.Description !== ''\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">Purpose</h2>\n          <h2>{{purpose.Description}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"sourceOfFunds && sourceOfFunds.Description !== ''\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">Source of Funds</h2>\n          <h2>{{sourceOfFunds.Description}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">Amount in {{toCurrency.CurrencyCode}}</h2>\n          <h2>{{kdAmt}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">Exchange Rate</h2>\n          <h2>{{transRateResponse.Rate}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">{{beneficiary.Currency}} Amount</h2>\n          <h2>{{transRateResponse.FC_AMOUNT}}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label class=\"bold-label\" text-wrap>\n          <h2 class=\"bold-label\">Commission</h2>\n          <h2>{{transRateResponse.Commission}}</h2>\n        </ion-label>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-grid no-padding>\n    <ion-row no-padding style=\"align-items: center; background-color: var(--ion-color-primary)\">\n      <ion-col size=\"6\" no-padding style=\"background-color: var(--ion-color-primary-shade); height: 100%;\">\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <span class=\"big-title white-text\" style=\"margin: 8px 8px 0 12px; font-size: 12px; line-height: 0\">\n              Payable Amount\n            </span>\n          </ion-col>\n        </ion-row>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding style=\"margin: 0 8px 0 12px;\">\n            <span class=\"big-title white-text\" style=\"font-weight: bold; font-size: 1em\">KWD</span>\n            <span class=\"big-title white-text\" style=\"font-size: 1em\"> {{transRateResponse.KD_AMOUNT}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\" no-padding style=\"background-color: var(--ion-color-primary); text-align: center\"\n        (click)=\"gotoPayment()\">\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <div class=\"white-text\">PROCEED</div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>"

/***/ }),

/***/ "./src/app/payment-details/payment-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n.bold-label {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdEQUFhLEVBQUE7O0FBR2Y7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDczZDYsICM4NGRmZmQsICMwMGMwZmYpO1xuICB9XG5cbiAgLmJvbGQtbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/payment-details/payment-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/payment-details/payment-details.page.ts ***!
  \*********************************************************/
/*! exports provided: PaymentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailsPage", function() { return PaymentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _api_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/transaction/transaction.service */ "./src/app/api/transaction/transaction.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");








var PaymentDetailsPage = /** @class */ (function () {
    function PaymentDetailsPage(navCtrl, router, storage, transactionApi, iab, utils) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.storage = storage;
        this.transactionApi = transactionApi;
        this.iab = iab;
        this.utils = utils;
        this.showToolbar = false;
        this.currentColor = "light";
        this.avatarBackground2 = this.avatarBackgroundMethod();
        var _a = router.getCurrentNavigation().extras.state, beneficiary = _a.beneficiary, transRateResponse = _a.transRateResponse, fromCurrency = _a.fromCurrency, toCurrency = _a.toCurrency, purpose = _a.purpose, sourceOfFunds = _a.sourceOfFunds;
        this.beneficiary = beneficiary;
        this.transRateResponse = transRateResponse;
        this.fromCurrency = fromCurrency;
        this.toCurrency = toCurrency;
        this.purpose = purpose;
        this.sourceOfFunds = sourceOfFunds;
        this.kdAmt = Number(this.transRateResponse.KD_AMOUNT) - Number(this.transRateResponse.Commission);
    }
    PaymentDetailsPage.prototype.ngOnInit = function () { };
    PaymentDetailsPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    PaymentDetailsPage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    PaymentDetailsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    PaymentDetailsPage.prototype.gotoPayment = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, postData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getUser()];
                    case 1:
                        user = _a.sent();
                        postData = {
                            BeneficiaryID: this.beneficiary.ID,
                            UserID: user.UserID,
                            SessionToken: user.token,
                            TransToken: this.transRateResponse.TransToken,
                            FC_AMOUNT: "" + this.transRateResponse.FC_AMOUNT,
                            KD_AMOUNT: "" + this.transRateResponse.KD_AMOUNT,
                            Rate: "" + this.transRateResponse.Rate,
                            PurposeCode: this.purpose.Code,
                            SourceOfFunds: this.sourceOfFunds.Code,
                            Commission: "" + this.transRateResponse.Commission,
                        };
                        this.utils.showLoader();
                        this.transactionApi.sendAmount(postData).subscribe(function (res) {
                            _this.utils.hideLoader();
                            if (res.RedirectURL) {
                                console.log(res.RedirectURL);
                                var options = {
                                    zoom: "no",
                                    beforeload: "yes",
                                };
                                var browser_1 = _this.iab.create(res.RedirectURL, "_self", options);
                                browser_1.on("loadstart").subscribe(function (data) {
                                    console.log(data);
                                    var resultUrl = data.url;
                                    if (resultUrl.startsWith("https://online.kuwaitindiaexchange.com/knetnew/Failed.asp")) {
                                        browser_1.close();
                                        _this.showError();
                                    }
                                    else if (resultUrl.startsWith("https://online.kuwaitindiaexchange.com/knetnew/Success.asp")) {
                                        _this.navCtrl.navigateForward("success", { state: { resultUrl: resultUrl } });
                                        // if (
                                        //   resultUrl.includes("paymentID") &&
                                        //   resultUrl.includes("TranID") &&
                                        //   resultUrl.includes("Auth") &&
                                        //   resultUrl.includes("ref")
                                        // ) {
                                        //   this.navCtrl.navigateForward("success", { state: { resultUrl: resultUrl } });
                                        // } else {
                                        //   this.showError();
                                        // }
                                    }
                                });
                                //this.navCtrl.navigateForward("payment-gateway", { state: { transactionNo: res.RedirectURL } });
                            }
                            else {
                                _this.utils.showAlert("Error", res.ErrorDesc);
                            }
                        }, function (err) {
                            _this.utils.hideLoader();
                            _this.utils.showAlert("Error", "Invalid bank details. Plese try again later.");
                            console.log(err.error.text);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentDetailsPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    PaymentDetailsPage.prototype.showError = function () {
        this.utils.showAlert("Error", "Some error occured. Please try again.");
    };
    PaymentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-payment-details",
            template: __webpack_require__(/*! ./payment-details.page.html */ "./src/app/payment-details/payment-details.page.html"),
            styles: [__webpack_require__(/*! ./payment-details.page.scss */ "./src/app/payment-details/payment-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _api_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_7__["UtilsProviderService"]])
    ], PaymentDetailsPage);
    return PaymentDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=payment-details-payment-details-module.js.map