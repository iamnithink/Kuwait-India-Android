(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["our-services-our-services-module"],{

/***/ "./src/app/our-services/our-services.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/our-services/our-services.module.ts ***!
  \*****************************************************/
/*! exports provided: OurServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesPageModule", function() { return OurServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _our_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-services.page */ "./src/app/our-services/our-services.page.ts");







var routes = [
    {
        path: '',
        component: _our_services_page__WEBPACK_IMPORTED_MODULE_6__["OurServicesPage"]
    }
];
var OurServicesPageModule = /** @class */ (function () {
    function OurServicesPageModule() {
    }
    OurServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_our_services_page__WEBPACK_IMPORTED_MODULE_6__["OurServicesPage"]]
        })
    ], OurServicesPageModule);
    return OurServicesPageModule;
}());



/***/ }),

/***/ "./src/app/our-services/our-services.page.html":
/*!*****************************************************!*\
  !*** ./src/app/our-services/our-services.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"true\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"big-title title-color\" style=\"font-size: 1.5em; padding: 16px\">Our Services</div>\n  <div style=\"padding: 0 16px 16px 16px\">\n    <ion-label>We offer:</ion-label>\n    <ion-list>\n      <ion-item lines=\"none\">\n        <img src=\"../../assets/thumb.png\" slot=\"start\" />\n        <div>Personal and corporate/trade remittances</div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <img src=\"../../assets/thumb.png\" slot=\"start\" />\n        <div>Remittances in all major currencies to all over the world</div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <img src=\"../../assets/thumb.png\" slot=\"start\" />\n        <div>Exchange of currencies</div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <img src=\"../../assets/thumb.png\" slot=\"start\" />\n        <div>Account credit services as well as cash pick-up services</div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <img src=\"../../assets/thumb.png\" slot=\"start\" />\n        <div>Correspondent partners all over the world for instant, hassel free money transfer</div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <img src=\"../../assets/thumb.png\" slot=\"start\" />\n        <div>Friendly, trust-worthy, reliable and courteous services</div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <img src=\"../../assets/thumb.png\" slot=\"start\" />\n        <div>Unmatched after sales services and trouble shooting</div>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <img src=\"../../assets/thumb.png\" slot=\"start\" />\n        <div>Door-step services through our Mobile-van branches</div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/our-services/our-services.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/our-services/our-services.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  padding: 8px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9vdXItc2VydmljZXMvb3VyLXNlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL291ci1zZXJ2aWNlcy9vdXItc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgcGFkZGluZzogOHB4IDBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/our-services/our-services.page.ts":
/*!***************************************************!*\
  !*** ./src/app/our-services/our-services.page.ts ***!
  \***************************************************/
/*! exports provided: OurServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesPage", function() { return OurServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OurServicesPage = /** @class */ (function () {
    function OurServicesPage() {
    }
    OurServicesPage.prototype.ngOnInit = function () {
    };
    OurServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-services',
            template: __webpack_require__(/*! ./our-services.page.html */ "./src/app/our-services/our-services.page.html"),
            styles: [__webpack_require__(/*! ./our-services.page.scss */ "./src/app/our-services/our-services.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OurServicesPage);
    return OurServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=our-services-our-services-module.js.map