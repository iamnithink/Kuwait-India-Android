(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-image-and-phrase-security-image-and-phrase-module"],{

/***/ "./src/app/security-image-and-phrase/security-image-and-phrase.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/security-image-and-phrase/security-image-and-phrase.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SecurityImageAndPhrasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityImageAndPhrasePageModule", function() { return SecurityImageAndPhrasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _security_image_and_phrase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security-image-and-phrase.page */ "./src/app/security-image-and-phrase/security-image-and-phrase.page.ts");







var routes = [
    {
        path: '',
        component: _security_image_and_phrase_page__WEBPACK_IMPORTED_MODULE_6__["SecurityImageAndPhrasePage"]
    }
];
var SecurityImageAndPhrasePageModule = /** @class */ (function () {
    function SecurityImageAndPhrasePageModule() {
    }
    SecurityImageAndPhrasePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_security_image_and_phrase_page__WEBPACK_IMPORTED_MODULE_6__["SecurityImageAndPhrasePage"]]
        })
    ], SecurityImageAndPhrasePageModule);
    return SecurityImageAndPhrasePageModule;
}());



/***/ }),

/***/ "./src/app/security-image-and-phrase/security-image-and-phrase.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/security-image-and-phrase/security-image-and-phrase.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 30vh; max-height: 30vh\">\n      <h1 class=\"big-title\" style=\"color: white\">\n        Please confirm your image and phrase\n      </h1>\n    </div>\n    <div class=\"content\">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-item lines='none' class=\"rounded-img\">\n              <ion-img [src]=\"image\" style=\"width: 100%; height: 100%\"></ion-img>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-row>\n              <ion-col size=\"12\">\n                {{isValidIdRes.PHRASE_TEXT}}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-item lines=\"none\" style=\"--padding-start: 0px\">\n                  <ion-checkbox [(ngModel)]=\"isChecked\"></ion-checkbox>\n                  <ion-label style=\"padding-left: 12px\">Confirm</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-button class=\"login-btn\" expand=\"block\" size=\"large\" (click)=\"gotoPassword()\">\n        NEXT\n      </ion-button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/security-image-and-phrase/security-image-and-phrase.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/security-image-and-phrase/security-image-and-phrase.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n:host .login-btn {\n  margin: 32px 0px 0px 0px;\n  --border-radius: 6px; }\n\n:host .rounded-img {\n  --border-radius: 6px;\n  height: 23vw;\n  --width: 23vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9zZWN1cml0eS1pbWFnZS1hbmQtcGhyYXNlL3NlY3VyaXR5LWltYWdlLWFuZC1waHJhc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sd0RBQWEsRUFBQTs7QUFGbkI7RUFLTSx3QkFBd0I7RUFDeEIsb0JBQWdCLEVBQUE7O0FBTnRCO0VBU00sb0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWN1cml0eS1pbWFnZS1hbmQtcGhyYXNlL3NlY3VyaXR5LWltYWdlLWFuZC1waHJhc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50IHtcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDczZDYsICM4NGRmZmQsICMwMGMwZmYpO1xuICAgIH1cbiAgICAubG9naW4tYnRuIHtcbiAgICAgIG1hcmdpbjogMzJweCAwcHggMHB4IDBweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAucm91bmRlZC1pbWcge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBoZWlnaHQ6IDIzdnc7XG4gICAgICAtLXdpZHRoOiAyM3Z3O1xuICAgIH1cbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/security-image-and-phrase/security-image-and-phrase.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/security-image-and-phrase/security-image-and-phrase.page.ts ***!
  \*****************************************************************************/
/*! exports provided: SecurityImageAndPhrasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityImageAndPhrasePage", function() { return SecurityImageAndPhrasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_constants_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/constants/public */ "./src/app/api/constants/public.ts");




var SecurityImageAndPhrasePage = /** @class */ (function () {
    function SecurityImageAndPhrasePage(router) {
        this.router = router;
        this.isChecked = false;
        var _a = router.getCurrentNavigation().extras.state, userId = _a.userId, isValidIdRes = _a.isValidIdRes;
        this.isValidIdRes = isValidIdRes;
        this.image = _api_constants_public__WEBPACK_IMPORTED_MODULE_3__["default"].BASE + "Avatars/" + this.isValidIdRes.AVATAR_IMAGE;
        this.userId = userId;
    }
    SecurityImageAndPhrasePage.prototype.ngOnInit = function () { };
    SecurityImageAndPhrasePage.prototype.gotoPassword = function () {
        if (this.isChecked) {
            this.router.navigate(["/password"], {
                state: { userId: this.userId },
            });
        }
    };
    SecurityImageAndPhrasePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-security-image-and-phrase",
            template: __webpack_require__(/*! ./security-image-and-phrase.page.html */ "./src/app/security-image-and-phrase/security-image-and-phrase.page.html"),
            styles: [__webpack_require__(/*! ./security-image-and-phrase.page.scss */ "./src/app/security-image-and-phrase/security-image-and-phrase.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SecurityImageAndPhrasePage);
    return SecurityImageAndPhrasePage;
}());



/***/ })

}]);
//# sourceMappingURL=security-image-and-phrase-security-image-and-phrase-module.js.map