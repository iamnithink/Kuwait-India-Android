(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-beneficiary-add-beneficiary-module"],{

/***/ "./src/app/add-beneficiary/add-beneficiary.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary.module.ts ***!
  \***********************************************************/
/*! exports provided: AddBeneficiaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBeneficiaryPageModule", function() { return AddBeneficiaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_beneficiary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-beneficiary.page */ "./src/app/add-beneficiary/add-beneficiary.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: "",
        component: _add_beneficiary_page__WEBPACK_IMPORTED_MODULE_6__["AddBeneficiaryPage"],
    },
];
var AddBeneficiaryPageModule = /** @class */ (function () {
    function AddBeneficiaryPageModule() {
    }
    AddBeneficiaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_add_beneficiary_page__WEBPACK_IMPORTED_MODULE_6__["AddBeneficiaryPage"]],
        })
    ], AddBeneficiaryPageModule);
    return AddBeneficiaryPageModule;
}());



/***/ }),

/***/ "./src/app/add-beneficiary/add-beneficiary.page.html":
/*!***********************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button>\n        <ion-icon [color]=\"currentColor\" slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button> -->\n      <!-- <ion-menu-toggle>\n        <ion-button>\n          <ion-icon [color]=\"currentColor\" src=\"../../assets/menu.svg\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle> -->\n      <!-- <ion-menu-button [color]=\"currentColor\"></ion-menu-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 20vh; min-height: 20vh; max-height: 20vh\">\n      <h1 class=\"big-title\" style=\"color: white\">Add a Beneficiary</h1>\n      <h5 style=\"color: white\">Fill the applicable details</h5>\n    </div>\n    <div class=\"content\">\n      <form [formGroup]=\"addForm\">\n        <mat-form-field>\n          <input formControlName=\"name\" type=\"text\" matInput placeholder=\"Name Of Beneficiary\">\n        </mat-form-field>\n        <mat-form-field style=\"min-width: 100%\">\n          <mat-select formControlName=\"nationality\" name=\"nationality\" placeholder=\"Select Nationality\">\n            <mat-option *ngFor=\"let nationality of nationalityList\" [value]=\"nationality\">\n              {{nationality.Name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"number\" formControlName=\"accountNo\" matInput placeholder=\"Beneficiary Account Number\">\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"text\" formControlName=\"bankName\" matInput placeholder=\"Bank Name\">\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"text\" formControlName=\"branchName\" matInput placeholder=\"Branch Name\">\n        </mat-form-field>\n        <!-- <mat-form-field>\n          <input formControlName=\"purpose\" type=\"text\" matInput placeholder=\"Purpose\" [matAutocomplete]=\"auto1\">\n          <mat-autocomplete #auto1=\"matAutocomplete\">\n            <mat-option *ngFor=\"let purpose of purposeList\" [value]=\"purpose.Description\">\n              {{purpose.Description}}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field> -->\n        <!-- <mat-form-field style=\"min-width: 100%\">\n          <mat-select formControlName=\"purpose\" name=\"purpose\" placeholder=\"Select Purpose\">\n            <mat-option *ngFor=\"let purpose of purposeList\" [value]=\"purpose\">\n              {{purpose.Description}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field> -->\n        <mat-form-field style=\"min-width: 100%\">\n          <mat-select formControlName=\"relation\" name=\"relation\" placeholder=\"Select Relation\">\n            <mat-option *ngFor=\"let relation of relationList\" [value]=\"relation\">\n              {{relation.Description}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field style=\"min-width: 100%\">\n          <mat-select formControlName=\"currency\" name=\"currency\" placeholder=\"Select Currency\">\n            <mat-option *ngFor=\"let currency of rateList\" [value]=\"currency\">\n              {{currency.CurrencyName}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"text\" formControlName=\"ifsc\" matInput placeholder=\"IFSC Code\">\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"text\" formControlName=\"swift\" matInput placeholder=\"Swift Code\">\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"text\" formControlName=\"iban\" matInput placeholder=\"IBAN Code\">\n        </mat-form-field>\n        <ion-button (click)=\"onSubmit()\" expand=\"block\">\n          Proceed\n        </ion-button>\n      </form>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/add-beneficiary/add-beneficiary.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: var(--ion-color-white); }\n\nmat-form-field {\n  width: 100%; }\n\n::ng-deep mat-option.mat-option-text {\n  white-space: normal; }\n\n::ng-deep .mat-select-value-text {\n  white-space: normal !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9hZGQtYmVuZWZpY2lhcnkvYWRkLWJlbmVmaWNpYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdEQUFhLEVBQUE7O0FBR2YsdUNBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGQtYmVuZWZpY2lhcnkvYWRkLWJlbmVmaWNpYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwNzNkNiwgIzg0ZGZmZCwgIzAwYzBmZik7XG4gIH1cblxuICAvKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXG4gIC5zaG93LWJhY2tncm91bmQge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgbWF0LW9wdGlvbi5tYXQtb3B0aW9uLXRleHQge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlLXRleHQge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/add-beneficiary/add-beneficiary.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-beneficiary/add-beneficiary.page.ts ***!
  \*********************************************************/
/*! exports provided: AddBeneficiaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBeneficiaryPage", function() { return AddBeneficiaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");
/* harmony import */ var _api_beneficiary_beneficiary_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/beneficiary/beneficiary.service */ "./src/app/api/beneficiary/beneficiary.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_getDaysRate_get_days_rate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/getDaysRate/get-days-rate.service */ "./src/app/api/getDaysRate/get-days-rate.service.ts");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");










var AddBeneficiaryPage = /** @class */ (function () {
    function AddBeneficiaryPage(formBuilder, utils, beneficiaryService, getRateService, storage, navController, authService, alertController) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.beneficiaryService = beneficiaryService;
        this.getRateService = getRateService;
        this.storage = storage;
        this.navController = navController;
        this.authService = authService;
        this.alertController = alertController;
        this.showToolbar = false;
        this.currentColor = "light";
        this.yes = true;
        storage.getUser().then(function (user) { return (_this.currentUser = user); });
    }
    AddBeneficiaryPage.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            accountNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            bankName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            branchName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            ifsc: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)])],
            swift: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose(null)],
            iban: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose(null)],
            nationality: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            relation: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            // purpose: ["", Validators.compose([Validators.required])],
            currency: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    };
    AddBeneficiaryPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.utils.showLoader();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(this.beneficiaryService.getPurposeList(), this.beneficiaryService.getRelationList(), this.getRateService.getDaysRate(), this.beneficiaryService.getNationalityList()).subscribe(function (_a) {
            var purposeRes = _a[0], relationRes = _a[1], ratesRes = _a[2], nationalityRes = _a[3];
            _this.utils.hideLoader();
            if (purposeRes.Status === "00" && relationRes.Status === "00" && nationalityRes.Status === "00") {
                _this.purposeList = purposeRes.PurposeCodeList;
                _this.relationList = relationRes.RelationsList;
                _this.rateList = ratesRes.RateList;
                _this.nationalityList = nationalityRes.NationalityList;
            }
            else if (purposeRes.ErrorCode === "94" ||
                relationRes.ErrorCode === "94" ||
                nationalityRes.ErrorCode === "94") {
                _this.utils.showSessionExpired();
            }
        }, function (err) {
            _this.utils.hideLoader();
            _this.utils.showAlertAndBack();
        });
    };
    AddBeneficiaryPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    AddBeneficiaryPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.addForm.valid) {
            if (!this.currentUser) {
                this.utils.showAlert("Error", "Please fill all the correctly to proceed.");
            }
            else {
                var form = this.addForm.value;
                // console.log(form);
                var postData_1;
                if (form.currency.CurrencyCode === "INR") {
                    if (form.ifsc && form.ifsc !== "" && form.ifsc.length === 11) {
                        postData_1 = {
                            ACCT: String(form.accountNo),
                            UserID: this.currentUser.UserID,
                            CivilID: this.currentUser.CivilID,
                            CUR_ALPHA: form.currency.CurrencyCode,
                            CUR_CODE: form.currency.CurrencyNo,
                            NATIONALITY: form.nationality.Code,
                            BENEF: form.name,
                            BANK: form.bankName,
                            BRANCH: form.branchName,
                            IFSC: form.ifsc,
                            // PURPOSECODE: form.purpose.Code,
                            PURPOSETYPE: "",
                            IBAN: form.iban && form.iban !== "" ? form.iban : "",
                            SWIFT: form.swift && form.swift !== "" ? form.swift : "",
                        };
                    }
                    else {
                        this.utils.showAlert("Error", "Please enter a valid IFSC Code.");
                        return;
                    }
                }
                else {
                    if (form.swift && form.iban && form.iban !== "" && form.swift !== "") {
                        postData_1 = {
                            ACCT: String(form.accountNo),
                            UserID: this.currentUser.UserID,
                            CivilID: this.currentUser.CivilID,
                            CUR_ALPHA: form.currency.CurrencyCode,
                            CUR_CODE: form.currency.CurrencyNo,
                            NATIONALITY: form.nationality.Code,
                            BENEF: form.name,
                            BANK: form.bankName,
                            BRANCH: form.branchName,
                            // PURPOSECODE: form.purpose.Code,
                            PURPOSETYPE: "",
                            IBAN: form.iban,
                            SWIFT: form.swift,
                            IFSC: form.ifsc && form.ifsc !== "" ? form.ifsc : "",
                        };
                    }
                    else {
                        this.utils.showAlert("Error", "Please enter a valid SWIFT and IBAN numbers.");
                        return;
                    }
                }
                // let postData = {
                //   ACCT: form.accountNo,
                //   UserID: this.currentUser.UserID,
                //   CivilID: this.currentUser.CivilID,
                //   CUR_ALPHA: form.currency.CurrencyCode,
                //   CUR_CODE: form.currency.CurrencyNo,
                //   NATIONALITY: form.nationality.Code,
                //   BENEF: form.name,
                //   BANK: form.bankName,
                //   BRANCH: form.branchName,
                //   IFSC: form.ifsc,
                //   // PURPOSECODE: form.purpose.Code,
                //   PURPOSETYPE: "",
                //   IBAN: form.iban,
                //   SWIFT: form.swift,
                // };
                // console.log(JSON.stringify(postData));
                this.utils.showLoader();
                this.authService.getOtp().subscribe(function (otpRes) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alert;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.utils.hideLoader();
                                return [4 /*yield*/, this.alertController.create({
                                        header: "Please enter OTP to continue",
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
                                                        _this.beneficiaryService.addBeneficiary(postData_1).subscribe(function (res) {
                                                            _this.utils.hideLoader();
                                                            if (res.Status === "00") {
                                                                _this.utils.showAlert("Success", "Successfully added the beneficiary.");
                                                                _this.navController.pop();
                                                            }
                                                            else if (res.ErrorCode !== "94") {
                                                                _this.utils.showAlert("Error", res.ErrorDesc);
                                                            }
                                                            else {
                                                                _this.utils.showSessionExpired();
                                                            }
                                                        }, function (err) {
                                                            _this.utils.showAlert("Error", "Some error occured. Please try again.", false);
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
        }
        else {
            this.utils.showAlert("Error", "Please fill all the fields correctly to proceed.");
        }
    };
    AddBeneficiaryPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    AddBeneficiaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-beneficiary",
            template: __webpack_require__(/*! ./add-beneficiary.page.html */ "./src/app/add-beneficiary/add-beneficiary.page.html"),
            styles: [__webpack_require__(/*! ./add-beneficiary.page.scss */ "./src/app/add-beneficiary/add-beneficiary.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_4__["UtilsProviderService"],
            _api_beneficiary_beneficiary_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiaryService"],
            _api_getDaysRate_get_days_rate_service__WEBPACK_IMPORTED_MODULE_7__["GetDaysRateService"],
            _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AddBeneficiaryPage);
    return AddBeneficiaryPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-beneficiary-add-beneficiary-module.js.map