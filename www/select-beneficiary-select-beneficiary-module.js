(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-beneficiary-select-beneficiary-module"],{

/***/ "./src/app/models/beneficiary-filter.enum.ts":
/*!***************************************************!*\
  !*** ./src/app/models/beneficiary-filter.enum.ts ***!
  \***************************************************/
/*! exports provided: BeneficiaryListFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiaryListFilter", function() { return BeneficiaryListFilter; });
var BeneficiaryListFilter;
(function (BeneficiaryListFilter) {
    BeneficiaryListFilter["COUNT"] = "COUNT";
    BeneficiaryListFilter["LAST_TR_DATE"] = "LAST_TR_DATE";
    BeneficiaryListFilter["SUM_FC"] = "SUM_FC";
    BeneficiaryListFilter["SUM_KD"] = "SUM_KD";
    BeneficiaryListFilter["BENEFICIARYID"] = "BENEFICIARYID";
})(BeneficiaryListFilter || (BeneficiaryListFilter = {}));


/***/ }),

/***/ "./src/app/select-beneficiary/select-beneficiary.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/select-beneficiary/select-beneficiary.module.ts ***!
  \*****************************************************************/
/*! exports provided: SelectBeneficiaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBeneficiaryPageModule", function() { return SelectBeneficiaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _select_beneficiary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-beneficiary.page */ "./src/app/select-beneficiary/select-beneficiary.page.ts");







var routes = [
    {
        path: '',
        component: _select_beneficiary_page__WEBPACK_IMPORTED_MODULE_6__["SelectBeneficiaryPage"]
    }
];
var SelectBeneficiaryPageModule = /** @class */ (function () {
    function SelectBeneficiaryPageModule() {
    }
    SelectBeneficiaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_select_beneficiary_page__WEBPACK_IMPORTED_MODULE_6__["SelectBeneficiaryPage"]]
        })
    ], SelectBeneficiaryPageModule);
    return SelectBeneficiaryPageModule;
}());



/***/ }),

/***/ "./src/app/select-beneficiary/select-beneficiary.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/select-beneficiary/select-beneficiary.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"gotoAdd()\">\n        <ion-icon [color]=\"currentColor\" slot=\"icon-only\" src=\"../../assets/add_benficiary.svg\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"toggleSearch()\" *ngIf=\"beneficiaryList && beneficiaryList.length !== 0\">\n        <ion-icon slot=\"icon-only\" name=\"ios-search\" [color]=\"currentColor\"></ion-icon>\n      </ion-button>\n      <!-- <ion-menu-toggle>\n        <ion-button>\n          <ion-icon [color]=\"currentColor\" src=\"../../assets/menu.svg\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle> -->\n      <!-- <ion-menu-button [color]=\"currentColor\"></ion-menu-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 15vh; min-height: 15vh\">\n      <h1 class=\"big-title\" style=\"color: white\">Select Beneficiary</h1>\n    </div>\n    <div class=\"content\" style=\"padding: 12px 22px 22px 22px\">\n      <ion-searchbar *ngIf=\"searchEnabled\" [(ngModel)]=\"searchTerm\" [showCancelButton]=\"true\" (ionChange)=\"search()\"\n        (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n      <div style=\"text-align: center\">\n        <ion-spinner *ngIf=\"!beneficiaryList\"></ion-spinner>\n      </div>\n      <div *ngIf=\"beneficiaryList && beneficiaryList.length === 0\" class=\"no-data\">\n        No beneficiary to select. Please add a new one.\n      </div>\n      <ion-list *ngIf=\"beneficiaryList && beneficiaryList.length !== 0\">\n        <ion-item (click)=\"gotoDetails(beneficiary)\" *ngFor=\"let beneficiary of beneficiaryList\">\n          <ion-avatar slot=\"start\">\n            <div class=\"avatar\" [ngStyle]=\"{'background': beneficiary.Color}\">\n              {{beneficiary.Name | slice:0:1}}\n            </div>\n          </ion-avatar>\n          <ion-label>\n            <h3 class=\"title-color\">\n              {{beneficiary.Name}}\n            </h3>\n            <h3 class=\"subtitle-color\">\n              {{beneficiary.AccNo}}\n            </h3>\n            <ion-label color=\"primary\" style=\"padding: 4px 0 8px 0\">{{beneficiary.BankName}}</ion-label>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/select-beneficiary/select-beneficiary.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/select-beneficiary/select-beneficiary.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\nion-item {\n  padding: 8px 0 0 0;\n  --padding-start: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9zZWxlY3QtYmVuZWZpY2lhcnkvc2VsZWN0LWJlbmVmaWNpYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdEQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3QtYmVuZWZpY2lhcnkvc2VsZWN0LWJlbmVmaWNpYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwNzNkNiwgIzg0ZGZmZCwgIzAwYzBmZik7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgcGFkZGluZzogOHB4IDAgMCAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/select-beneficiary/select-beneficiary.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/select-beneficiary/select-beneficiary.page.ts ***!
  \***************************************************************/
/*! exports provided: SelectBeneficiaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBeneficiaryPage", function() { return SelectBeneficiaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_beneficiary_filter_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/beneficiary-filter.enum */ "./src/app/models/beneficiary-filter.enum.ts");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_beneficiary_beneficiary_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/beneficiary/beneficiary.service */ "./src/app/api/beneficiary/beneficiary.service.ts");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");







var SelectBeneficiaryPage = /** @class */ (function () {
    function SelectBeneficiaryPage(navCtrl, beneficiaryService, storage, zone, alertController, utils) {
        this.navCtrl = navCtrl;
        this.beneficiaryService = beneficiaryService;
        this.storage = storage;
        this.zone = zone;
        this.alertController = alertController;
        this.utils = utils;
        this.showToolbar = false;
        this.currentColor = "light";
        this.avatarBackground2 = this.avatarBackgroundMethod();
        this.searchEnabled = false;
    }
    SelectBeneficiaryPage.prototype.ngOnInit = function () { };
    SelectBeneficiaryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.getUser().then(function (user) {
            if (user && user.token) {
                _this.zone.run(function () {
                    _this.beneficiaryList = null;
                });
                _this.beneficiaryService
                    .getBeneficiaryListByFilter(user.UserID, user.token, _models_beneficiary_filter_enum__WEBPACK_IMPORTED_MODULE_1__["BeneficiaryListFilter"].COUNT)
                    .subscribe(function (data) {
                    if (data) {
                        if (data.Status !== "01" && data.ErrorCode !== "15") {
                            _this.beneficiaryList = data.BeneficiaryList;
                            _this.originalBeneficiaryList = data.BeneficiaryList;
                        }
                        else if (data.ErrorCode === "94") {
                            _this.utils.showSessionExpired();
                        }
                        else {
                            _this.beneficiaryList = [];
                            _this.originalBeneficiaryList = [];
                        }
                    }
                }, function (err) {
                    _this.utils.showAlertAndBack();
                });
                // this.beneficiaryService
                //   .getBeneficiaryListByFilter(user.UserID, user.token, BeneficiaryListFilter.LAST_TR_DATE)
                //   .subscribe();
                // this.beneficiaryService
                //   .getBeneficiaryListByFilter(user.UserID, user.token, BeneficiaryListFilter.SUM_FC)
                //   .subscribe();
                // this.beneficiaryService
                //   .getBeneficiaryListByFilter(user.UserID, user.token, BeneficiaryListFilter.BENEFICIARYID)
                //   .subscribe();
                // this.beneficiaryService
                //   .getBeneficiaryListByFilter(user.UserID, user.token, BeneficiaryListFilter.SUM_KD)
                //   .subscribe();
            }
        });
    };
    SelectBeneficiaryPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    SelectBeneficiaryPage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    SelectBeneficiaryPage.prototype.toggleSearch = function () {
        this.searchEnabled = !this.searchEnabled;
    };
    SelectBeneficiaryPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    SelectBeneficiaryPage.prototype.search = function () {
        var _this = this;
        this.beneficiaryList = this.originalBeneficiaryList.filter(function (item) {
            return item.Name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    SelectBeneficiaryPage.prototype.gotoAdd = function () {
        this.navCtrl.navigateForward("add-beneficiary");
    };
    SelectBeneficiaryPage.prototype.gotoDetails = function (beneficiary) {
        this.navCtrl.navigateForward("remittance-details", { state: { beneficiary: beneficiary } });
    };
    SelectBeneficiaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-select-beneficiary",
            template: __webpack_require__(/*! ./select-beneficiary.page.html */ "./src/app/select-beneficiary/select-beneficiary.page.html"),
            styles: [__webpack_require__(/*! ./select-beneficiary.page.scss */ "./src/app/select-beneficiary/select-beneficiary.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _api_beneficiary_beneficiary_service__WEBPACK_IMPORTED_MODULE_5__["BeneficiaryService"],
            _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_6__["UtilsProviderService"]])
    ], SelectBeneficiaryPage);
    return SelectBeneficiaryPage;
}());



/***/ })

}]);
//# sourceMappingURL=select-beneficiary-select-beneficiary-module.js.map