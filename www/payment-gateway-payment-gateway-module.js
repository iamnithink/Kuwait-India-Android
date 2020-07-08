(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-gateway-payment-gateway-module"],{

/***/ "./src/app/payment-gateway/payment-gateway.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/payment-gateway/payment-gateway.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentGatewayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGatewayPageModule", function() { return PaymentGatewayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_gateway_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-gateway.page */ "./src/app/payment-gateway/payment-gateway.page.ts");







var routes = [
    {
        path: '',
        component: _payment_gateway_page__WEBPACK_IMPORTED_MODULE_6__["PaymentGatewayPage"]
    }
];
var PaymentGatewayPageModule = /** @class */ (function () {
    function PaymentGatewayPageModule() {
    }
    PaymentGatewayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_payment_gateway_page__WEBPACK_IMPORTED_MODULE_6__["PaymentGatewayPage"]]
        })
    ], PaymentGatewayPageModule);
    return PaymentGatewayPageModule;
}());



/***/ }),

/***/ "./src/app/payment-gateway/payment-gateway.page.html":
/*!***********************************************************!*\
  !*** ./src/app/payment-gateway/payment-gateway.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 60vh; min-height: 60vh\">\n      <div class=\"big-title white-text\">\n        Make Payment\n      </div>\n      <div class=\"white-text\" style=\"padding: 12px 0\">\n        Payment must be done throught K-Net card\n      </div>\n      <div style=\"width: 100%; display: flex; justify-content: center; margin: 20px 0\">\n        <ion-img src=\"../../assets/knetLogo.png\" style=\"width: 50%\" ></ion-img>\n      </div>\n    </div>\n    <div style=\"position: absolute; bottom: 0; height: 48px; width: 100%; text-align: center\">\n      <ion-button fill=\"clear\" expand=\"full\" style=\"--color: white\">\n        Proceed to Pay\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/payment-gateway/payment-gateway.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/payment-gateway/payment-gateway.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(#0073d6, #00c0ff); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9wYXltZW50LWdhdGV3YXkvcGF5bWVudC1nYXRld2F5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50LWdhdGV3YXkvcGF5bWVudC1nYXRld2F5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwNzNkNiwgIzAwYzBmZik7XG59Il19 */"

/***/ }),

/***/ "./src/app/payment-gateway/payment-gateway.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/payment-gateway/payment-gateway.page.ts ***!
  \*********************************************************/
/*! exports provided: PaymentGatewayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentGatewayPage", function() { return PaymentGatewayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PaymentGatewayPage = /** @class */ (function () {
    function PaymentGatewayPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.showToolbar = false;
        this.currentColor = "light";
        this.avatarBackground2 = this.avatarBackgroundMethod();
    }
    PaymentGatewayPage.prototype.ngOnInit = function () { };
    PaymentGatewayPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    PaymentGatewayPage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    PaymentGatewayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-payment-gateway",
            template: __webpack_require__(/*! ./payment-gateway.page.html */ "./src/app/payment-gateway/payment-gateway.page.html"),
            styles: [__webpack_require__(/*! ./payment-gateway.page.scss */ "./src/app/payment-gateway/payment-gateway.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PaymentGatewayPage);
    return PaymentGatewayPage;
}());



/***/ })

}]);
//# sourceMappingURL=payment-gateway-payment-gateway-module.js.map