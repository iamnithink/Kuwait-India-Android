(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-question-security-question-module"],{

/***/ "./src/app/security-question/security-question.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/security-question/security-question.module.ts ***!
  \***************************************************************/
/*! exports provided: SecurityQuestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQuestionPageModule", function() { return SecurityQuestionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _security_question_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security-question.page */ "./src/app/security-question/security-question.page.ts");







var routes = [
    {
        path: '',
        component: _security_question_page__WEBPACK_IMPORTED_MODULE_6__["SecurityQuestionPage"]
    }
];
var SecurityQuestionPageModule = /** @class */ (function () {
    function SecurityQuestionPageModule() {
    }
    SecurityQuestionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_security_question_page__WEBPACK_IMPORTED_MODULE_6__["SecurityQuestionPage"]]
        })
    ], SecurityQuestionPageModule);
    return SecurityQuestionPageModule;
}());



/***/ }),

/***/ "./src/app/security-question/security-question.page.html":
/*!***************************************************************!*\
  !*** ./src/app/security-question/security-question.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 20vh; max-height: 20vh\">\n      <h1 class=\"big-title\" style=\"color: white; margin-bottom: 16px\">\n        Security Question\n      </h1>\n    </div>\n    <div class=\"content\">\n      <ion-label>{{question}}</ion-label>\n      <ion-item style=\"--padding-start: 0px\">\n        <ion-input placeholder=\"Answer\" [(ngModel)]=\"answer\"></ion-input>\n      </ion-item>\n      <ion-button class=\"login-btn\" expand=\"block\" size=\"large\" (click)=\"gotoPassword()\">\n        NEXT\n      </ion-button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/security-question/security-question.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/security-question/security-question.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n:host .login-btn {\n  margin: 32px 0px 0px 0px;\n  --border-radius: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9zZWN1cml0eS1xdWVzdGlvbi9zZWN1cml0eS1xdWVzdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx3REFBYSxFQUFBOztBQUZqQjtFQUtJLHdCQUF3QjtFQUN4QixvQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5LXF1ZXN0aW9uL3NlY3VyaXR5LXF1ZXN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDczZDYsICM4NGRmZmQsICMwMGMwZmYpO1xuICB9XG4gIC5sb2dpbi1idG4ge1xuICAgIG1hcmdpbjogMzJweCAwcHggMHB4IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/security-question/security-question.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/security-question/security-question.page.ts ***!
  \*************************************************************/
/*! exports provided: SecurityQuestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityQuestionPage", function() { return SecurityQuestionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");





var SecurityQuestionPage = /** @class */ (function () {
    function SecurityQuestionPage(router, authService, utils) {
        this.router = router;
        this.authService = authService;
        this.utils = utils;
        this.username = "";
        this.answer = "";
        var _a = router.getCurrentNavigation().extras.state, userId = _a.userId, secretQuestion = _a.secretQuestion, isValidIdRes = _a.isValidIdRes;
        this.username = userId;
        this.question = secretQuestion.SecretQuestion;
        this.isValidIdRes = isValidIdRes;
    }
    SecurityQuestionPage.prototype.ngOnInit = function () { };
    SecurityQuestionPage.prototype.gotoPassword = function () {
        var _this = this;
        this.answer = this.answer.trim();
        if (!this.answer)
            return;
        //this.router.navigate(["/password"], { state: { answer: this.answer, userId: this.username } });
        this.utils.showLoader();
        this.authService.validateSecretQuestion(this.username, this.answer).subscribe(function (res) {
            _this.utils.hideLoader();
            if (res.Status === "00") {
                _this.router.navigate(["/security-image-and-phrase"], {
                    state: { answer: _this.answer, userId: _this.username, isValidIdRes: _this.isValidIdRes },
                });
            }
            else {
                _this.utils.showAlert("Error", res.ErrorDesc);
            }
        }, function (err) {
            _this.utils.hideLoader();
            _this.utils.showAlert();
        });
    };
    SecurityQuestionPage.prototype.ionViewWillLeave = function () {
        this.utils.hideLoader();
    };
    SecurityQuestionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-security-question",
            template: __webpack_require__(/*! ./security-question.page.html */ "./src/app/security-question/security-question.page.html"),
            styles: [__webpack_require__(/*! ./security-question.page.scss */ "./src/app/security-question/security-question.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_4__["UtilsProviderService"]])
    ], SecurityQuestionPage);
    return SecurityQuestionPage;
}());



/***/ })

}]);
//# sourceMappingURL=security-question-security-question-module.js.map