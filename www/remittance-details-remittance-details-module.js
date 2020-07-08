(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remittance-details-remittance-details-module"],{

/***/ "./src/app/remittance-details/remittance-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/remittance-details/remittance-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: RemittanceDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemittanceDetailsPageModule", function() { return RemittanceDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _remittance_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remittance-details.page */ "./src/app/remittance-details/remittance-details.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: "",
        component: _remittance_details_page__WEBPACK_IMPORTED_MODULE_6__["RemittanceDetailsPage"],
    },
];
var RemittanceDetailsPageModule = /** @class */ (function () {
    function RemittanceDetailsPageModule() {
    }
    RemittanceDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            ],
            declarations: [_remittance_details_page__WEBPACK_IMPORTED_MODULE_6__["RemittanceDetailsPage"]],
        })
    ], RemittanceDetailsPageModule);
    return RemittanceDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/remittance-details/remittance-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/remittance-details/remittance-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n  <div class=\"container\">\n    <div class=\"header\" text-center style=\"height: 42vh; min-height: 42vh\">\n      <div text-center>\n        <div class=\"new-avatar\" [ngStyle]=\"{'background': beneficiary.Color}\">\n          {{beneficiary.Name | slice:0:1}}\n        </div>\n        <ion-text class=\"white-text\" style=\"font-weight: bold\">\n          <h1>{{beneficiary.Name}}</h1>\n        </ion-text>\n        <div class=\"white-text\">\n          {{beneficiary.AccNo}}\n        </div>\n        <div class=\"white-text\" style=\"padding: 4px 0 0 0\">\n          {{beneficiary.BankName}}\n        </div>\n      </div>\n    </div>\n    <div class=\"content\" style=\"padding: 22px 22px 22px 22px\">\n      <ion-grid>\n        <ion-row no-padding style=\"align-items: center\">\n          <ion-col size=\"1\" no-padding style=\"padding: 0 4px 0 0\">\n            <img [src]=\"currentFlag\" style=\"width: 100%; height: 1.2em;\" *ngIf=\"currentFlag\">\n          </ion-col>\n          <ion-col size=\"5\" no-padding>\n            <mat-form-field style=\"max-width: 100%\">\n              <mat-select class=\"currency-drop\" [(ngModel)]=\"fromCurrency\" name=\"current\"\n                (selectionChange)=\"inputChanged()\">\n                <mat-option *ngFor=\"let current of list\" [value]=\"current\">\n                  {{current.CurrencyCode}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </ion-col>\n          <ion-col size=\"6\" no-padding style=\"text-align: end\">\n            <ion-input type=\"number\" placeholder=\"Amount\" [(ngModel)]=\"fromAmount\" (ionChange)=\"inputChanged()\">\n            </ion-input>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row no-padding style=\"align-items: center; text-align: end\">\n          <ion-col size=\"1\" no-padding style=\"padding: 0 4px 0 0\">\n            <ion-icon src=\"../../assets/india_flag.svg\" style=\"width: 100%; height: 1.2em;\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"5\" no-padding>\n            <mat-form-field style=\"max-width: 100%\">\n              <mat-select [(ngModel)]=\"toCurrency\" name=\"current2\">\n                <mat-option [value]=\"toCurrency\">\n                  {{toCurrency.CurrencyCode}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </ion-col>\n          <ion-col size=\"6\" no-padding>\n            <ion-input type=\"number\" placeholder=\"Amount\" readonly=\"true\" [(ngModel)]=\"toAmount\"></ion-input>\n          </ion-col>\n        </ion-row> -->\n        <ion-row no-padding style=\"align-items: center; text-align: end; padding: 8px 0 22px 0\">\n          <ion-col size=\"6\" no-padding>\n            <div class=\"subtitle-color ion-text-start\">\n              Amount in {{toCurrency.CurrencyCode}}\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" no-padding>\n            <div class=\"title-color\" style=\"font-weight: bold\">\n              {{toAmount}}\n            </div>\n          </ion-col>\n        </ion-row>\n        <form [formGroup]=\"paymentForm\">\n          <mat-form-field style=\"min-width: 100%\">\n            <mat-select formControlName=\"purpose\" name=\"purpose\" placeholder=\"Select Purpose\">\n              <mat-option *ngFor=\"let purpose of purposeList\" [value]=\"purpose\">\n                {{purpose.Description}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field style=\"min-width: 100%\">\n            <mat-select formControlName=\"source\" name=\"source\" placeholder=\"Source of Funds\">\n              <mat-option *ngFor=\"let source of sourceOfFundsList\" [value]=\"source\">\n                {{source.Description}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </form>\n\n        <ion-row no-padding style=\"align-items: center; text-align: end\">\n          <ion-col size=\"6\" no-padding>\n            <div class=\"subtitle-color ion-text-start\">\n              Conversion Rate (for 1 KWD)\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" no-padding>\n            <div class=\"title-color\" style=\"font-weight: bold\">\n              {{conversionRate}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer style=\"background: var(--ion-color-primary)\">\n  <ion-button expand=\"full\" style=\"--box-shadow: 0\" (click)=\"didClickProceed()\" [disabled]=\"nextDisabled\">\n    CALCULATE\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/remittance-details/remittance-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/remittance-details/remittance-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(#1f85df, #41d0ff, #00c0ff); }\n\nion-item {\n  padding: 8px 0 0 0;\n  --padding-start: 0; }\n\n#0073d6\n::ng-deep mat-option.mat-option-text {\n  white-space: normal; }\n\n::ng-deep .mat-select-value-text {\n  white-space: normal !important; }\n\n::ng-deep .mat-form-field-underline {\n  display: none; }\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1em; }\n\ncurrency-drop {\n  font-size: 1.2em;\n  font-weight: bold; }\n\nhr {\n  background-color: var(--ion-color-grey);\n  width: 90%;\n  float: center;\n  margin-top: 0;\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9yZW1pdHRhbmNlLWRldGFpbHMvcmVtaXR0YW5jZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdEQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWdCLEVBQUE7O0FBRWxCOztFQUVFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx1Q0FBdUM7RUFDdkMsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlbWl0dGFuY2UtZGV0YWlscy9yZW1pdHRhbmNlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMWY4NWRmLCAjNDFkMGZmLCAjMDBjMGZmKTtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICBwYWRkaW5nOiA4cHggMCAwIDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICB9XG4gICMwMDczZDZcbiAgOjpuZy1kZWVwIG1hdC1vcHRpb24ubWF0LW9wdGlvbi10ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIH1cblxuICBjdXJyZW5jeS1kcm9wIHtcbiAgICBmb250LXNpemU6IDEuMmVtOyBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7IFxuICAgIHdpZHRoOiA5MCU7IFxuICAgIGZsb2F0OiBjZW50ZXI7IFxuICAgIG1hcmdpbi10b3A6IDA7IFxuICAgIG1hcmdpbi1ib3R0b206IDBcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/remittance-details/remittance-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/remittance-details/remittance-details.page.ts ***!
  \***************************************************************/
/*! exports provided: RemittanceDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemittanceDetailsPage", function() { return RemittanceDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_getDaysRate_get_days_rate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/getDaysRate/get-days-rate.service */ "./src/app/api/getDaysRate/get-days-rate.service.ts");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/transaction/transaction.service */ "./src/app/api/transaction/transaction.service.ts");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_beneficiary_beneficiary_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/beneficiary/beneficiary.service */ "./src/app/api/beneficiary/beneficiary.service.ts");











var RemittanceDetailsPage = /** @class */ (function () {
    function RemittanceDetailsPage(navCtrl, router, rate, formBuilder, storage, transactionService, utils, beneficiaryService, zone) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.rate = rate;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.transactionService = transactionService;
        this.utils = utils;
        this.beneficiaryService = beneficiaryService;
        this.zone = zone;
        this.showToolbar = false;
        this.currentColor = "light";
        this.toCurrency = {
            CurrencyName: "Kuwaiti Dinar",
            CurrencyCode: "KWD",
            CurrencyNo: "0",
            Rate: "1",
            RateInv: "1",
        };
        this.fromAmount = "";
        this.toAmount = "";
        this.conversionRate = "--";
        this.avatarBackground2 = this.avatarBackgroundMethod();
        this.nextDisabled = true;
        var beneficiary = router.getCurrentNavigation().extras.state.beneficiary;
        this.beneficiary = beneficiary;
        // console.log("BENEFICIARY", this.beneficiary);
    }
    RemittanceDetailsPage.prototype.ngOnInit = function () {
        this.paymentForm = this.formBuilder.group({
            purpose: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])],
            source: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required])],
        });
    };
    RemittanceDetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.utils.showLoader();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(this.beneficiaryService.getPurposeList(), this.beneficiaryService.getSourceOfFundsList(), this.rate.getDaysRate()).subscribe(function (_a) {
            var purposeRes = _a[0], sourceOfFunds = _a[1], daysRate = _a[2];
            _this.utils.hideLoader();
            if (daysRate.RateList) {
                _this.zone.run(function () {
                    _this.list = daysRate.RateList;
                    //this.fromCurrency = this.list[0];
                    _this.toCurrency = {
                        CurrencyName: "Kuwaiti Dinar",
                        CurrencyCode: "KWD",
                        CurrencyNo: "0",
                        Rate: "1",
                        RateInv: "1",
                    };
                    _this.fromCurrency = _this.list.find(function (rate) { return rate.CurrencyCode === _this.beneficiary.Currency; });
                    if (!_this.fromCurrency) {
                        _this.fromCurrency = _this.toCurrency;
                    }
                    _this.list.length = 0;
                    if (_this.fromCurrency.CurrencyCode === _this.toCurrency.CurrencyCode) {
                        _this.list.push(_this.fromCurrency);
                    }
                    else {
                        _this.list.push(_this.fromCurrency);
                        _this.list.push(_this.toCurrency);
                    }
                    _this.currentFlag = "../../assets/flags/" + _this.fromCurrency.CurrencyCode + ".png";
                    _this.paymentForm.reset();
                });
                //this.toCurrency = this.list[1];
            }
            if (purposeRes.Status === "00" && sourceOfFunds.Status === "00") {
                _this.purposeList = purposeRes.PurposeCodeList;
                _this.sourceOfFundsList = sourceOfFunds.SourceOfFundsCodeList;
                _this.paymentForm.valueChanges.subscribe(function (res) { return _this.inputChanged(); });
            }
            else if (purposeRes.ErrorCode === "94" || sourceOfFunds.ErrorCode === "94") {
                _this.utils.showSessionExpired();
            }
        }, function (err) {
            _this.utils.hideLoader();
            _this.utils.showAlertAndBack();
        });
    };
    RemittanceDetailsPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    RemittanceDetailsPage.prototype.inputChanged = function () {
        var _this = this;
        this.zone.run(function () {
            _this.conversionRate = Number(_this.fromCurrency.Rate).toFixed(3);
            _this.currentFlag = "../../assets/flags/" + _this.fromCurrency.CurrencyCode + ".png";
            if (!isNaN(Number(_this.fromAmount))) {
                var amt = Number(_this.fromAmount);
                if (amt > 0) {
                    var kwdAmount = Number(Number(amt) / Number(_this.fromCurrency.RateInv)).toFixed(3);
                    _this.toAmount = Number(Number(kwdAmount) * Number(_this.toCurrency.RateInv)).toFixed(3);
                    _this.conversionRate = Number(_this.fromCurrency.RateInv).toFixed(3);
                    _this.nextDisabled = false;
                    _this.refreshProceed();
                }
                else {
                    _this.nextDisabled = true;
                    _this.refreshProceed();
                    _this.toAmount = "";
                    _this.conversionRate = "--";
                }
            }
            else {
                _this.nextDisabled = true;
                _this.refreshProceed();
                if (_this.fromAmount.trim().length === 0) {
                    _this.toAmount = "";
                    _this.conversionRate = "--";
                }
            }
        });
    };
    RemittanceDetailsPage.prototype.refreshProceed = function () {
        // console.log(this.nextDisabled, this.paymentForm.valid);
        if (!this.nextDisabled && this.paymentForm.valid) {
            this.nextDisabled = false;
        }
        else {
            this.nextDisabled = true;
        }
    };
    RemittanceDetailsPage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    RemittanceDetailsPage.prototype.didClickProceed = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getUser()];
                    case 1:
                        user = _a.sent();
                        if (this.fromCurrency.CurrencyCode === this.toCurrency.CurrencyCode) {
                            data = {
                                UserID: user.UserID,
                                SessionToken: user.token,
                                BeneficiaryID: this.beneficiary.ID,
                                FC_AMOUNT: "",
                                KD_AMOUNT: "" + this.toAmount,
                            };
                        }
                        else {
                            data = {
                                UserID: user.UserID,
                                SessionToken: user.token,
                                BeneficiaryID: this.beneficiary.ID,
                                FC_AMOUNT: "" + this.fromAmount,
                                KD_AMOUNT: "",
                            };
                        }
                        this.utils.showLoader();
                        this.transactionService.getTransRate(data).subscribe(function (res) {
                            _this.utils.hideLoader();
                            if (res.BeneficiaryID) {
                                _this.navCtrl
                                    .navigateForward("payment-details", {
                                    state: {
                                        transRateResponse: res,
                                        beneficiary: _this.beneficiary,
                                        fromCurrency: _this.fromCurrency,
                                        toCurrency: _this.toCurrency,
                                        purpose: _this.paymentForm.value.purpose,
                                        sourceOfFunds: _this.paymentForm.value.source,
                                    },
                                })
                                    .then(function () { return _this.utils.hideLoader(); })
                                    .catch(function (err) {
                                    _this.utils.hideLoader();
                                    console.log(err);
                                });
                            }
                            else if (res.Status && res.ErrorCode !== "94") {
                                _this.utils.hideLoader();
                                _this.utils.showAlert("Error", res.ErrorDesc);
                            }
                            else if (res.ErrorCode === "94") {
                                _this.utils.showSessionExpired();
                            }
                        }, function (err) {
                            _this.utils.showAlert();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RemittanceDetailsPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    RemittanceDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-remittance-details",
            template: __webpack_require__(/*! ./remittance-details.page.html */ "./src/app/remittance-details/remittance-details.page.html"),
            styles: [__webpack_require__(/*! ./remittance-details.page.scss */ "./src/app/remittance-details/remittance-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_getDaysRate_get_days_rate_service__WEBPACK_IMPORTED_MODULE_4__["GetDaysRateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _api_transaction_transaction_service__WEBPACK_IMPORTED_MODULE_7__["TransactionService"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_8__["UtilsProviderService"],
            _api_beneficiary_beneficiary_service__WEBPACK_IMPORTED_MODULE_10__["BeneficiaryService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], RemittanceDetailsPage);
    return RemittanceDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=remittance-details-remittance-details-module.js.map