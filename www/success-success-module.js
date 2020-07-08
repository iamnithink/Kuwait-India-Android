(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["success-success-module"],{

/***/ "./src/app/success/success.module.ts":
/*!*******************************************!*\
  !*** ./src/app/success/success.module.ts ***!
  \*******************************************/
/*! exports provided: SuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function() { return SuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/success/success.page.ts");







var routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]
    }
];
var SuccessPageModule = /** @class */ (function () {
    function SuccessPageModule() {
    }
    SuccessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
        })
    ], SuccessPageModule);
    return SuccessPageModule;
}());



/***/ }),

/***/ "./src/app/success/success.page.html":
/*!*******************************************!*\
  !*** ./src/app/success/success.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-text-center\">\n  <div style=\"width: 100%\">\n    <img src=\"../../assets/yes.png\" class=\"success\" />\n  </div>\n  <!-- <ion-label color=\"light\">\n    Thank you for registering with\n    Kuwait India International Exchange.\n  </ion-label> -->\n\n  <ion-text color=\"light\" style=\"line-height: 1.5em\">\n    Success!\n    <br>\n    <div style=\"padding: 1em 2em 1em 2em\">\n      Your Payment has been processed successfully.\n    </div>\n  </ion-text>\n  <div style=\"position: absolute; bottom: 0; width: 100%\" class=\"ion-text-center\">\n    <ion-button expand=\"full\" fill=\"clear\" strong=\"true\" style=\"--color: var(--ion-color-light); width: 100%;\"\n      (click)=\"gotoHome()\">\n      GO TO HOME\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/success/success.page.scss":
/*!*******************************************!*\
  !*** ./src/app/success/success.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(#0073d6, #00c0ff); }\n\n:host .locate-btn {\n  --color: var(--ion-color-primary);\n  padding: 0 3em;\n  --background: var(--ion-color-light)\n    ; }\n\n:host .success {\n  height: 40vh;\n  max-height: 40vh;\n  margin: 30% 0 5vh 0;\n  padding: 3vh; }\n\n:host .tnc-btn {\n  --color: var(--ion-color-light);\n  padding: 0 3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9zdWNjZXNzL3N1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sK0NBQWEsRUFBQTs7QUFGbkI7RUFNTSxpQ0FBUTtFQUNSLGNBQWM7RUFDZDtJQUFhLEVBQUE7O0FBUm5CO0VBWU0sWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQWZsQjtFQW1CTSwrQkFBUTtFQUNSLGNBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzAwNzNkNiwgIzAwYzBmZik7XG4gICAgfVxuXG4gICAgLmxvY2F0ZS1idG4ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBcbiAgICAgIHBhZGRpbmc6IDAgM2VtOyBcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KVxuICAgIH1cblxuICAgIC5zdWNjZXNzIHtcbiAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDQwdmg7XG4gICAgICBtYXJnaW46IDMwJSAwIDV2aCAwO1xuICAgICAgcGFkZGluZzogM3ZoO1xuICAgIH1cblxuICAgIC50bmMtYnRuIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7IFxuICAgICAgcGFkZGluZzogMCAzZW1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/success/success.page.ts":
/*!*****************************************!*\
  !*** ./src/app/success/success.page.ts ***!
  \*****************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");




var SuccessPage = /** @class */ (function () {
    function SuccessPage(platform, utils, navCtrl) {
        this.platform = platform;
        this.utils = utils;
        this.navCtrl = navCtrl;
    }
    SuccessPage.prototype.ngOnInit = function () { };
    SuccessPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.subscription = this.platform.backButton.subscribe(function () {
            _this.utils.showToast("Please press Go to Home button to continue.");
        });
    };
    SuccessPage.prototype.gotoHome = function () {
        this.navCtrl.navigateForward("home");
    };
    SuccessPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    SuccessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-success",
            template: __webpack_require__(/*! ./success.page.html */ "./src/app/success/success.page.html"),
            styles: [__webpack_require__(/*! ./success.page.scss */ "./src/app/success/success.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_3__["UtilsProviderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SuccessPage);
    return SuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=success-success-module.js.map