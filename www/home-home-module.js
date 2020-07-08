(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: "",
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                    },
                ]),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" [class.no-show-bg]=\"!showToolbar\">\n    <ion-title slot=\"start\">\n      <ion-item lines='none' style=\"--background: 'transparent'\">\n        <ion-avatar slot=\"start\">\n          <div class=\"avatar\" [ngStyle]=\"{'background': avatarBackground2}\">\n            {{user.Name | slice:0:1}}\n          </div>\n        </ion-avatar>\n        <ion-label [color]=\"currentColor\">\n          <h3 style='font-weight: bold'>\n            {{user.Name}}\n          </h3>\n          <h3>\n            {{user.Nationality}}\n          </h3>\n        </ion-label>\n      </ion-item>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <a href=\"tel:{{contactNumber}}\"><ion-icon [color]=\"currentColor\" slot=\"icon-only\" src=\"../../assets/help.svg\"></ion-icon></a>\n      </ion-button>\n      <ion-button (click)=\"didClickLogout()\">\n        <ion-icon [color]=\"currentColor\" slot=\"icon-only\" src=\"../../assets/location_dark.svg\"></ion-icon>\n      </ion-button>\n      <ion-menu-button [color]=\"currentColor\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" scrollX=\"true\">\n  <div class=\"container\">\n    <div class=\"header\" style='max-height: 20vh; height: 20vh; padding: 8px'>\n      <ion-grid style=\"margin-left: 8px; margin-right: 8px\" no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"3\" no-padding (click)=\"headerButtonClicked(1)\">\n            <ion-row class=\"ion-text-center\" no-padding>\n              <ion-col size=\"12\">\n                <div class='avatar menu-icons'>\n                  <img src=\"../../assets/history.svg\" />\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <div class='menu-text main-menu-color'>\n                  Transaction History\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"3\" no-padding (click)=\"headerButtonClicked(2)\">\n            <ion-row class=\"ion-text-center\" no-padding>\n              <ion-col size=\"12\">\n                <div class='avatar menu-icons'>\n                  <img src=\"../../assets/send_money.svg\" />\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <div class='menu-text main-menu-color'>\n                  Send Money\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"3\" no-padding (click)=\"headerButtonClicked(3)\">\n            <ion-row class=\"ion-text-center\" no-padding>\n              <ion-col size=\"12\">\n                <div class='avatar menu-icons'>\n                  <img src=\"../../assets/rates.svg\" />\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <div class='menu-text main-menu-color'>\n                  Exchange Rates\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"3\" no-padding (click)=\"headerButtonClicked(4)\">\n            <ion-row class=\"ion-text-center\" no-padding>\n              <ion-col size=\"12\">\n                <div class='avatar menu-icons'>\n                  <img src=\"../../assets/add_benficiary.svg\" />\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <div class='menu-text main-menu-color'>\n                  Add a Benificiary\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class=\"content\" style='padding: 16px'>\n      <div style=\"text-align: center\">\n        <ion-spinner *ngIf=\"!latestTransactions || !frequentBeneficiaries\"></ion-spinner>\n      </div>\n      <div *ngIf=\"isNoData\" class=\"no-data\">\n        No Transactions or Frequent Beneficairies!\n      </div>\n      <div *ngIf=\"!isNoData\">\n        <div *ngIf=\"latestTransactions\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"auto\">\n                <div class=\"bold\">\n                  Latest Transactions\n                </div>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"see-more\" (click)=\"headerButtonClicked(1)\">\n                  SEE ALL\n                </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <div class=\"scrolling-wrapper\">\n            <div class=\"card\" *ngFor=\"let transaction of latestTransactions\" (click)=\"gotoTransDetails(transaction)\">\n              <ion-item class=\"transaction-card\">\n                <div class=\"inner\">\n                  <ion-grid no-padding>\n                    <ion-row no-padding>\n                      <ion-item style=\"--padding-start: 0px; min-width: 100%\" lines=\"none\">\n                        <ion-avatar slot=\"start\">\n                          <div class=\"avatar\" [ngStyle]=\"{background: transaction.BenefColor}\">\n                            {{transaction.BeneficiaryName | slice:0:1}}\n                          </div>\n                        </ion-avatar>\n                        <ion-label>\n                          <h3 class=\"title-color\">\n                            {{transaction.BeneficiaryName}}\n                          </h3>\n                          <h3 class=\"subtitle-color\">\n                            {{transaction.Date}}\n                          </h3>\n                        </ion-label>\n                      </ion-item>\n                    </ion-row>\n                    <app-transaction [firstAmount]=\"transaction.TotalKD\" [secondAmount]=\"transaction.AmountFC\"\n                      firstUnit=\"KWD\" [secondUnit]=\"transaction.Currency\">\n                    </app-transaction>\n                  </ion-grid>\n                </div>\n              </ion-item>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"frequentBeneficiaries\">\n          <div class=\"bold\" style=\"padding: 16px 16px 8px 10px\">\n            Frequent Beneficiaries\n          </div>\n\n          <ion-list lines=\"none\" *ngIf=\"frequentBeneficiaries\">\n            <ion-item class=\"beneficiary-card\" *ngFor=\"let beneficiary of frequentBeneficiaries\"\n              (click)=\"initiateTransaction(beneficiary)\">\n              <ion-grid no-padding>\n                <ion-row no-padding>\n                  <ion-col size=\"11\" no-padding>\n                    <ion-item class=\"name-item inner\" lines=\"none\">\n                      <ion-avatar slot=\"start\">\n                        <div class=\"avatar\" [ngStyle]=\"{background: beneficiary.BenefColor}\">\n                          {{beneficiary.BeneficiaryName | slice:0:1}}\n                        </div>\n                      </ion-avatar>\n                      <ion-label style=\"max-width: 100%\">\n                        <h3 class=\"title-color\">\n                          {{beneficiary.BeneficiaryName}}\n                        </h3>\n                        <h3 class=\"subtitle-color\">\n                          {{beneficiary.AccNo | creditCard}}\n                        </h3>\n                        <ion-label color=\"primary\" style=\"\n                    padding: 4px 0 4px 0;\">\n                          {{beneficiary.BankName}}\n                        </ion-label>\n                      </ion-label>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"1\" no-padding style=\"text-align: center\">\n                    <ion-icon name=\"ios-arrow-forward\" class=\"beneficiary-forward-icon\"></ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n          </ion-list>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n:host ion-toolbar {\n  --padding-top: 0; }\n\nion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n.menu-icons {\n  background: var(--ion-color-primary-shade);\n  height: 13vw;\n  width: 13vw;\n  border-width: 1px;\n  border-color: var(--ion-color-primary); }\n\n.scrolling-wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto; }\n\n.scrolling-wrapper::-webkit-scrollbar {\n    display: none; }\n\n.scrolling-wrapper .card {\n    padding: 8px;\n    flex: 0 0 auto; }\n\n.transaction-card {\n  width: 65vw;\n  --border-top-width: 2px;\n  --border-end-width: 2px;\n  --border-bottom-width: 2px;\n  --border-start-width: 2px;\n  --border-radius: 8px;\n  --inner-border-width: 0;\n  --border-width: var(--border-top-width) var(--border-end-width) var(--border-bottom-width) var(--border-start-width);\n  --border-color: var(--ion-color-grey); }\n\n.transaction-card .inner {\n    min-width: 100%;\n    max-width: 100%;\n    padding: 8px 0 8px 0;\n    display: flex;\n    align-self: flex-start; }\n\n.transaction-card .forward-icon {\n    font-size: 1.5em;\n    top: 5%;\n    position: relative; }\n\n.beneficiary-forward-icon {\n  top: 42%;\n  color: var(--ion-color-grey);\n  position: relative; }\n\n.name-item {\n  --padding-start: 0px;\n  min-width: 100%;\n  max-width: 100%;\n  --inner-padding-end: 0px; }\n\n.beneficiary-card {\n  width: 100%;\n  padding: 0 8px 8px 8px;\n  --border-top-width: 2px;\n  --border-end-width: 2px;\n  --border-bottom-width: 2px;\n  --border-start-width: 2px;\n  --border-radius: 5px;\n  --inner-border-width: 0;\n  --inner-padding-end: 0px;\n  --border-width: var(--border-top-width) var(--border-end-width) var(--border-bottom-width) var(--border-start-width);\n  --border-color: var(--ion-beneficiary-border-color);\n  --background: var(--ion-beneficiary-background-color); }\n\n.beneficiary-card .inner {\n    --background: var(--ion-beneficiary-background-color); }\n\n.help-number {\n  color: var(--ion-color-primary-shade); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQVNsQjtFQUVJLGdCQUFjLEVBQUE7O0FBSWxCO0VBQ0Usd0RBQWEsRUFBQTs7QUFHZjtFQUNFLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixzQ0FBc0MsRUFBQTs7QUFHeEM7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUhsQjtJQUtJLGFBQWEsRUFBQTs7QUFMakI7SUFTSSxZQUFZO0lBQ1osY0FBYyxFQUFBOztBQUlsQjtFQUNFLFdBQVc7RUFDWCx1QkFBbUI7RUFDbkIsdUJBQW1CO0VBQ25CLDBCQUFzQjtFQUN0Qix5QkFBcUI7RUFDckIsb0JBQWdCO0VBRWhCLHVCQUFxQjtFQUNyQixvSEFBZTtFQUNmLHFDQUFlLEVBQUE7O0FBVmpCO0lBWUksZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFxQixFQUFBOztBQWhCekI7SUFtQkksZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxrQkFDRixFQUFBOztBQUdGO0VBQ0UsUUFBUTtFQUNSLDRCQUE0QjtFQUM1QixrQkFDRixFQUFBOztBQUVBO0VBQ0Usb0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysd0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBbUI7RUFDbkIsdUJBQW1CO0VBQ25CLDBCQUFzQjtFQUN0Qix5QkFBcUI7RUFDckIsb0JBQWdCO0VBRWhCLHVCQUFxQjtFQUNyQix3QkFBb0I7RUFDcEIsb0hBQWU7RUFDZixtREFBZTtFQUNmLHFEQUFhLEVBQUE7O0FBYmY7SUFlSSxxREFBYSxFQUFBOztBQUlqQjtFQUNFLHFDQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIC8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXG4vLyBpb24tdG9vbGJhciB7XG4vLyAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbjpob3N0IHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDA3M2Q2LCAjODRkZmZkLCAjMDBjMGZmKTtcbn1cblxuLm1lbnUtaWNvbnMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7IFxuICBoZWlnaHQ6IDEzdnc7IFxuICB3aWR0aDogMTN2dzsgXG4gIGJvcmRlci13aWR0aDogMXB4OyBcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcbn1cblxuLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgfVxufVxuXG4udHJhbnNhY3Rpb24tY2FyZCB7XG4gIHdpZHRoOiA2NXZ3O1xuICAtLWJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItZW5kLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICAtLWJvcmRlci1zdGFydC13aWR0aDogMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAtLWJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLXRvcC13aWR0aCkgdmFyKC0tYm9yZGVyLWVuZC13aWR0aCkgdmFyKC0tYm9yZGVyLWJvdHRvbS13aWR0aCkgdmFyKC0tYm9yZGVyLXN0YXJ0LXdpZHRoKTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgLmlubmVyIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDhweCAwIDhweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGFsaWduLXNlbGY6ZmxleC1zdGFydDtcbiAgfVxuICAuZm9yd2FyZC1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHRvcDogNSU7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB9XG59XG5cbi5iZW5lZmljaWFyeS1mb3J3YXJkLWljb24ge1xuICB0b3A6IDQyJTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlXG59XG5cbi5uYW1lLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWluLXdpZHRoOiAxMDAlOyBcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbi5iZW5lZmljaWFyeS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgOHB4IDhweCA4cHg7XG4gIC0tYm9yZGVyLXRvcC13aWR0aDogMnB4O1xuICAtLWJvcmRlci1lbmQtd2lkdGg6IDJweDtcbiAgLS1ib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLXN0YXJ0LXdpZHRoOiAycHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1ib3JkZXItd2lkdGg6IHZhcigtLWJvcmRlci10b3Atd2lkdGgpIHZhcigtLWJvcmRlci1lbmQtd2lkdGgpIHZhcigtLWJvcmRlci1ib3R0b20td2lkdGgpIHZhcigtLWJvcmRlci1zdGFydC13aWR0aCk7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tYmVuZWZpY2lhcnktYm9yZGVyLWNvbG9yKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmVuZWZpY2lhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIC5pbm5lciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmVuZWZpY2lhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cbn1cblxuLmhlbHAtbnVtYmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _api_transactionList_transaction_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/transactionList/transaction-list.service */ "./src/app/api/transactionList/transaction-list.service.ts");
/* harmony import */ var _models_trans_list_filter_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/trans-list-filter.enum */ "./src/app/models/trans-list-filter.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");









var HomePage = /** @class */ (function () {
    function HomePage(storage, navCtrl, menuCtrl, platform, authService, transListService, utils) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.authService = authService;
        this.transListService = transListService;
        this.utils = utils;
        this.showToolbar = false;
        this.currentColor = "light";
        this.avatarBackground2 = this.avatarBackgroundMethod();
        this.isNoData = false;
        this.contactNumber = '';
        this.menuCtrl.enable(true);
        storage.getUser().then(function (user) {
            if (user) {
                _this.user = user;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(_this.transListService.getTransListWithFilter(user.UserID, user.token, _models_trans_list_filter_enum__WEBPACK_IMPORTED_MODULE_5__["TransListFilter"].BENEFICIARY), _this.transListService.getTransListWithFilter(user.UserID, user.token, _models_trans_list_filter_enum__WEBPACK_IMPORTED_MODULE_5__["TransListFilter"].TX_DATE)).subscribe(function (_a) {
                    var frequentBenefRes = _a[0], latestTransRes = _a[1];
                    if (frequentBenefRes.Status !== "00" &&
                        latestTransRes.Status !== "00" &&
                        (frequentBenefRes.ErrorCode === "94" || latestTransRes.ErrorCode === "94")) {
                        utils.showSessionExpired();
                    }
                    else if (frequentBenefRes.Status === "00" && latestTransRes.Status === "00") {
                        _this.frequentBeneficiaries = frequentBenefRes.TransactionHistory;
                        _this.latestTransactions = latestTransRes.TransactionHistory;
                        if (_this.frequentBeneficiaries.length == 0 && _this.latestTransactions.length == 0) {
                            _this.isNoData = true;
                        }
                    }
                });
                // this.transListService
                //   .getTransListWithFilter(user.UserID, user.token, TransListFilter.BENEFICIARY)
                //   .subscribe(res => {
                //     //console.log("HOME 1", JSON.stringify(res));
                //     if (res.Status === "00") {
                //       this.frequentBeneficiaries = res.TransactionHistory;
                //     }
                //   });
                // this.transListService
                //   .getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_DATE)
                //   .subscribe(res => {
                //     //console.log("HOME 2", res);
                //     if (res.Status === "00") {
                //       this.latestTransactions = res.TransactionHistory;
                //     }
                //   });
                // this.transListService.getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_FC).subscribe(res => {
                //   console.log("HOME 3", res);
                // });
                // this.transListService.getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_KD).subscribe(res => {
                //   console.log("HOME 4", res);
                // });
                // this.transListService
                //   .getTransListWithFilter(user.UserID, user.token, TransListFilter.TX_NUMBER)
                //   .subscribe(res => {
                //     console.log("HOME 5", res);
                //   });
            }
        });
    }
    HomePage.prototype.ngOnInit = function () {
        this.fetchContactNumber();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.subscription = this.platform.backButton.subscribe(function () {
            navigator["app"].exitApp();
        });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
        this.menuCtrl.enable(false);
        this.utils.hideLoader();
    };
    HomePage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 80;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    HomePage.prototype.didClickLogout = function () {
        this.navCtrl.navigateForward("branch-locator");
    };
    HomePage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    HomePage.prototype.gotoTransDetails = function (transaction) {
        this.navCtrl.navigateForward("transaction-details", { state: { transaction: transaction } });
    };
    HomePage.prototype.initiateTransaction = function (previousBenef) {
        var beneficiary = {
            ID: previousBenef.BeneficiaryID,
            Name: previousBenef.BeneficiaryName,
            BankBranch: previousBenef.BankBranch,
            BankName: previousBenef.BankName,
            Mode: "",
            AccNo: previousBenef.AccNo,
            LastDate: previousBenef.Date,
            Count: "",
            Currency: previousBenef.Currency,
            AmountFC: previousBenef.AmountFC,
            AmountKD: previousBenef.AmountKD,
            Color: previousBenef.BenefColor,
        };
        console.log(beneficiary);
        this.navCtrl.navigateForward("remittance-details", { state: { beneficiary: beneficiary } });
    };
    HomePage.prototype.headerButtonClicked = function (forIndex) {
        switch (forIndex) {
            case 1:
                this.navCtrl.navigateForward("/history");
                break;
            case 2:
                this.navCtrl.navigateForward("/select-beneficiary");
                break;
            case 3:
                this.navCtrl.navigateForward("/daily-rates");
                break;
            case 4:
                this.navCtrl.navigateForward("add-beneficiary");
                break;
            default:
                break;
        }
    };
    HomePage.prototype.fetchContactNumber = function () {
        var _this = this;
        this.authService.gethelpdesknumber().subscribe(function (res) {
            if (res && res.Status === "00" && res.SupportNo) {
                _this.contactNumber = res.SupportNo;
            }
            else {
                console.log('gethelpdesknumber error', res.ErrorDesc);
            }
        }, function (err) {
            console.log('gethelpdesknumber error', err);
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _api_transactionList_transaction_list_service__WEBPACK_IMPORTED_MODULE_4__["TransactionListService"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_8__["UtilsProviderService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map