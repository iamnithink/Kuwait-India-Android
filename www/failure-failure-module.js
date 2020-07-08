(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["failure-failure-module"],{

/***/ "./src/app/failure/failure.module.ts":
/*!*******************************************!*\
  !*** ./src/app/failure/failure.module.ts ***!
  \*******************************************/
/*! exports provided: FailurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailurePageModule", function() { return FailurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _failure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./failure.page */ "./src/app/failure/failure.page.ts");







var routes = [
    {
        path: '',
        component: _failure_page__WEBPACK_IMPORTED_MODULE_6__["FailurePage"]
    }
];
var FailurePageModule = /** @class */ (function () {
    function FailurePageModule() {
    }
    FailurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_failure_page__WEBPACK_IMPORTED_MODULE_6__["FailurePage"]]
        })
    ], FailurePageModule);
    return FailurePageModule;
}());



/***/ }),

/***/ "./src/app/failure/failure.page.html":
/*!*******************************************!*\
  !*** ./src/app/failure/failure.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\" fullscreen>\n  <div style=\"width: 100%\">\n    <img src=\"../../assets/false.png\" class=\"success\" />\n  </div>\n  <!-- <ion-label color=\"light\">\n    Thank you for registering with\n    Kuwait India International Exchange.\n  </ion-label> -->\n\n  <ion-text color=\"light\" style=\"line-height: 1.5em\">\n    Failure!\n    <br>\n    <div style=\"padding: 1em 2em 1em 2em\">\n      Unable to process your transaction. Please try again.\n    </div>\n  </ion-text>\n  <div style=\"position: absolute; bottom: 0; width: 100%\" class=\"ion-text-center\">\n    <ion-button expand=\"full\" fill=\"clear\" strong=\"true\" style=\"--color: var(--ion-color-light); width: 100%;\"\n      (click)=\"retry()\">\n      Try Again1\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/failure/failure.page.scss":
/*!*******************************************!*\
  !*** ./src/app/failure/failure.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(#0073d6, #00c0ff); }\n\n:host .locate-btn {\n  --color: var(--ion-color-primary);\n  padding: 0 3em;\n  --background: var(--ion-color-light)\n    ; }\n\n:host .success {\n  height: 40vh;\n  max-height: 40vh;\n  margin: 10% 0 5vh 0; }\n\n:host .tnc-btn {\n  --color: var(--ion-color-light);\n  padding: 0 3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9mYWlsdXJlL2ZhaWx1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sK0NBQWEsRUFBQTs7QUFGbkI7RUFNTSxpQ0FBUTtFQUNSLGNBQWM7RUFDZDtJQUFhLEVBQUE7O0FBUm5CO0VBWU0sWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFkekI7RUFrQk0sK0JBQVE7RUFDUixjQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mYWlsdXJlL2ZhaWx1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDczZDYsICMwMGMwZmYpO1xuICAgIH1cblxuICAgIC5sb2NhdGUtYnRuIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgXG4gICAgICBwYWRkaW5nOiAwIDNlbTsgXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodClcbiAgICB9XG5cbiAgICAuc3VjY2VzcyB7XG4gICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA0MHZoO1xuICAgICAgbWFyZ2luOiAxMCUgMCA1dmggMDtcbiAgICB9XG5cbiAgICAudG5jLWJ0biB7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyBcbiAgICAgIHBhZGRpbmc6IDAgM2VtXG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/failure/failure.page.ts":
/*!*****************************************!*\
  !*** ./src/app/failure/failure.page.ts ***!
  \*****************************************/
/*! exports provided: FailurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailurePage", function() { return FailurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FailurePage = /** @class */ (function () {
    function FailurePage() {
    }
    FailurePage.prototype.ngOnInit = function () { };
    FailurePage.prototype.retry = function () { };
    FailurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-failure",
            template: __webpack_require__(/*! ./failure.page.html */ "./src/app/failure/failure.page.html"),
            styles: [__webpack_require__(/*! ./failure.page.scss */ "./src/app/failure/failure.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FailurePage);
    return FailurePage;
}());



/***/ })

}]);
//# sourceMappingURL=failure-failure-module.js.map