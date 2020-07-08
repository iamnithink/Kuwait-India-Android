(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");








var routes = [
    {
        path: "",
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"],
    },
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
            declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]],
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/history/history.page.html":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"transactions && transactions.length !== 0\">\n      <ion-button (click)=\"toggleSearch()\">\n        <ion-icon slot=\"icon-only\" name=\"ios-search\" [color]=\"currentColor\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 15vh; max-height: 15vh;\">\n      <h1 class=\"big-title\" style=\"color: white\">Transactions</h1>\n    </div>\n    <div class=\"content\" style=\"padding: 8px\">\n      <ion-searchbar *ngIf=\"searchEnabled\" [(ngModel)]=\"searchTerm\" [showCancelButton]=\"true\" (ionChange)=\"search()\"\n        (ionCancel)=\"toggleSearch()\"></ion-searchbar>\n      <div style=\"text-align: center\">\n        <ion-spinner *ngIf=\"!transactions\"></ion-spinner>\n      </div>\n      <div class=\"no-data\" *ngIf=\"transactions && transactions.length === 0\">\n        No previous transactions!\n      </div>\n      <ion-list *ngIf=\"transactions && transactions.length !== 0\">\n        <ion-item *ngFor=\"let transaction of transactions\" (click)=\"gotoDetails(transaction)\">\n          <ion-grid no-padding>\n            <ion-row no-padding>\n              <ion-col size=\"8\" no-padding>\n                <ion-item lines='none' no-padding style=\"--inner-padding-end: 0; max-width: 100%;\">\n                  <ion-avatar slot=\"start\">\n                    <div class=\"avatar\" [ngStyle]=\"{'background': transaction.BenefColor}\">\n                      {{transaction.BeneficiaryName | slice:0:1}}\n                    </div>\n                  </ion-avatar>\n                  <ion-label>\n                    <h3 class=\"title-color\">\n                      {{transaction.BeneficiaryName}}\n                    </h3>\n                    <ion-label color=\"primary\" style=\"white-space: normal; font-size: small\">{{transaction.BankName}}\n                    </ion-label>\n                    <h3 class=\"subtitle-color\">{{transaction.AccNo | creditCard}}</h3>\n                    <h3 class=\"subtitle-color\">\n                      {{transaction.BankBranch}}\n                    </h3>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\" no-padding style=\"text-align: end; padding: 8px 0 0 0\">\n                <ion-chip color=\"success\" *ngIf=\"transaction.Status === 'COMPLETED'\">\n                  <div class=\"menu-text\">{{transaction.Status}}</div>\n                </ion-chip>\n                <ion-chip color=\"warning\" *ngIf=\"transaction.Status !== 'COMPLETED'\">\n                  <div class=\"menu-text\">{{transaction.Status}}</div>\n                </ion-chip>\n              </ion-col>\n            </ion-row>\n            <app-transaction [firstAmount]=\"transaction.TotalKD\" [secondAmount]=\"transaction.AmountFC\" firstUnit=\"KWD\"\n              [secondUnit]=\"transaction.Currency\"></app-transaction>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/history/history.page.scss":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Transparent standard */\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important; }\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  background: var(--ion-color-white); }\nion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n.forward-icon {\n  font-size: 1.5em;\n  top: 20%;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FBQ0E7RUFDSSx5QkFBYTtFQUNiLHdDQUFpQixFQUFBO0FBR25CLHVDQUFBO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDLEVBQUE7QUFHcEM7RUFDRSx3REFBYSxFQUFBO0FBR2Y7RUFDRSxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLGtCQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVHJhbnNwYXJlbnQgc3RhbmRhcmQgKi9cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbiAgLnNob3ctYmFja2dyb3VuZCB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDA3M2Q2LCAjODRkZmZkLCAjMDBjMGZmKTtcbiAgfVxuICBcbiAgLmZvcndhcmQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB0b3A6IDIwJTsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/history/history.page.ts":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_transactionList_transaction_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/transactionList/transaction-list.service */ "./src/app/api/transactionList/transaction-list.service.ts");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _models_trans_list_filter_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/trans-list-filter.enum */ "./src/app/models/trans-list-filter.enum.ts");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");







var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, transactionApi, storage, utils) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.transactionApi = transactionApi;
        this.storage = storage;
        this.utils = utils;
        this.showToolbar = false;
        this.currentColor = "light";
        this.avatarBackground2 = this.avatarBackgroundMethod();
        this.searchEnabled = false;
        storage.getUser().then(function (user) {
            if (user && user.token && user.UserID) {
                transactionApi.getTransListWithFilter(user.UserID, user.token, _models_trans_list_filter_enum__WEBPACK_IMPORTED_MODULE_5__["TransListFilter"].TX_DATE).subscribe(function (res) {
                    if (res.Status !== "00" && res.ErrorCode === "94") {
                        utils.showSessionExpired();
                    }
                    else if (res.Status === "00") {
                        _this.transactions = res.TransactionHistory;
                        _this.originalTransactions = res.TransactionHistory;
                    }
                    else {
                        utils.showAlert("Error", res.ErrorDesc);
                    }
                }, function (err) {
                    _this.utils.hideLoader();
                    _this.utils.showAlertAndBack();
                });
            }
        });
    }
    HistoryPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    HistoryPage.prototype.ngOnInit = function () { };
    HistoryPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    HistoryPage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    HistoryPage.prototype.toggleSearch = function () {
        this.searchEnabled = !this.searchEnabled;
    };
    HistoryPage.prototype.search = function () {
        var _this = this;
        this.transactions = this.originalTransactions.filter(function (item) {
            return item.BeneficiaryName.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    HistoryPage.prototype.gotoDetails = function (clickedTransaction) {
        this.navCtrl.navigateForward("transaction-details", { state: { transaction: clickedTransaction } });
    };
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-history",
            template: __webpack_require__(/*! ./history.page.html */ "./src/app/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _api_transactionList_transaction_list_service__WEBPACK_IMPORTED_MODULE_3__["TransactionListService"],
            _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_6__["UtilsProviderService"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module.js.map