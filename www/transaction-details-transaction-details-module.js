(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-details-transaction-details-module"],{

/***/ "./src/app/transaction-details/transaction-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPageModule", function() { return TransactionDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transaction_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-details.page */ "./src/app/transaction-details/transaction-details.page.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");








var routes = [
    {
        path: "",
        component: _transaction_details_page__WEBPACK_IMPORTED_MODULE_6__["TransactionDetailsPage"]
    }
];
var TransactionDetailsPageModule = /** @class */ (function () {
    function TransactionDetailsPageModule() {
    }
    TransactionDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            declarations: [_transaction_details_page__WEBPACK_IMPORTED_MODULE_6__["TransactionDetailsPage"]]
        })
    ], TransactionDetailsPageModule);
    return TransactionDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/transaction-details/transaction-details.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button>\n        <ion-icon [color]=\"currentColor\" slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button> -->\n      <!-- <ion-menu-toggle>\n        <ion-button>\n          <ion-icon [color]=\"currentColor\" src=\"../../assets/menu.svg\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle> -->\n      <!-- <ion-menu-button [color]=\"currentColor\"></ion-menu-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n  <div class=\"container\">\n    <div class=\"new-header\">\n    </div>\n    <div class=\"content\" style=\"padding: 32px 16px 16px 16px\">\n      <div text-center style=\"margin-top: -14vh\">\n        <div class=\"new-avatar\" [ngStyle]=\"{'background': transaction.BenefColor}\">\n          {{transaction.BeneficiaryName | slice:0:1}}\n        </div>\n      </div>\n      <ion-text text-center class=\"title-color\">\n        <h2>{{transaction.BeneficiaryName}}</h2>\n      </ion-text>\n      <div text-center class=\"title-color\" style=\"font-size: small; padding-bottom: 12px\">\n        Reference ID - {{transaction.TransactionNo}}\n      </div>\n\n      <app-transaction isDetails=true [firstAmount]=\"transaction.TotalKD\" firstUnit=\"KWD\"\n        [secondAmount]=\"transaction.AmountFC\" [secondUnit]=\"transaction.Currency\">\n      </app-transaction>\n\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <div text-center>\n              <ion-chip color=\"success\" *ngIf=\"transaction.Status === 'COMPLETED'\">{{transaction.Status}}</ion-chip>\n              <ion-chip color=\"warning\" *ngIf=\"transaction.Status !== 'COMPLETED'\">{{transaction.Status}}</ion-chip>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <section class=\"main-timeline-section\">\n        <div class=\"conference-center-line\"></div>\n        <div class=\"conference-timeline-content\">\n\n          <div class=\"timeline-article content-right-container\">\n\n            <div class=\"meta-date\"></div>\n            <div class=\"content-box\">\n              <div class=\"title-color\">Initiated Transaction</div>\n            </div>\n          </div>\n\n          <div class=\"timeline-article content-right-container\">\n\n            <div class=\"meta-date\"></div>\n            <div class=\"content-box\">\n              <div class=\"title-color\" *ngIf=\"transaction.Status === 'COMPLETED'\">Completed Successfully\n              </div>\n              <div class=\"title-color\" *ngIf=\"transaction.Status !== 'COMPLETED'\">{{transaction.Status}}\n              </div>\n              <!-- <div class=\"subtitle-color\">Time and date</div> -->\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer style=\"background: var(--ion-color-primary)\">\n  <ion-button expand=\"full\" style=\"--box-shadow: 0\" (click)=\"startNew()\">\n    SEND AGAIN\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/transaction-details/transaction-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n:host .new-header {\n  height: 15vh;\n  max-height: 15vh;\n  display: flex;\n  flex-direction: row;\n  padding-top: 8vh;\n  z-index: 5;\n  justify-content: center; }\n\n:host .pad {\n  padding: 32px 16px 16px 16px; }\n\n:host .main-timeline-section {\n  position: relative;\n  width: 100%;\n  margin: auto; }\n\n:host .main-timeline-section .timeline-start,\n:host .main-timeline-section .timeline-end {\n  background: var(--ion-color-primary);\n  border-radius: 100px;\n  width: 30px;\n  height: 30px; }\n\n:host .main-timeline-section .conference-center-line {\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 0;\n  left: 5%;\n  margin-left: -2px;\n  border-left: 2px dotted var(--ion-color-medium-shade);\n  z-index: -1; }\n\n:host .timeline-article {\n  width: 100%;\n  position: relative;\n  min-height: 65px;\n  z-index: 0; }\n\n:host .timeline-article .content-date {\n  position: absolute;\n  top: 33%;\n  left: 5%;\n  font-size: 18px;\n  margin-left: -150px;\n  transform: translateY(50%); }\n\n:host .timeline-article .meta-date {\n  position: absolute;\n  top: 50%;\n  left: 5%;\n  width: 20px;\n  height: 20px;\n  transform: translateY(-50%);\n  margin-left: -11px;\n  border-radius: 100%;\n  background: #fff;\n  border: 1px solid var(--ion-color-primary); }\n\n:host .timeline-article .content-box {\n  position: absolute;\n  width: 80%;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 8px;\n  left: 2%;\n  margin-left: 40px; }\n\n:host .content-left-container .content-box {\n  left: 0;\n  margin-left: 0px; }\n\n:host .content-left-container .content-date {\n  margin-left: 50px; }\n\n@media (max-width: 460px) {\n  :host .timeline-article.content-left-container .content-box {\n    left: -10px; }\n  :host .timeline-article .content-box p {\n    overflow: hidden; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC90cmFuc2FjdGlvbi1kZXRhaWxzL3RyYW5zYWN0aW9uLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsd0RBQWEsRUFBQTs7QUFGckI7RUFNUSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix1QkFBdUIsRUFBQTs7QUFaL0I7RUFnQlEsNEJBQ0osRUFBQTs7QUFqQko7RUFvQlEsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFXLEVBQUE7O0FBdEJuQjs7RUEwQlEsb0NBQW9DO0VBQ3BDLG9CQUFtQjtFQUNuQixXQUFVO0VBQ1YsWUFBVyxFQUFBOztBQTdCbkI7RUFnQ1Esa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFXO0VBQ1gsTUFBTTtFQUNOLFFBQU87RUFDUCxpQkFBaUI7RUFDakIscURBQXFEO0VBQ3JELFdBQVcsRUFBQTs7QUF2Q25CO0VBa0RRLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFyRGxCO0VBd0RRLGtCQUFrQjtFQUNsQixRQUFPO0VBQ1AsUUFBTztFQUNQLGVBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUE7O0FBN0RsQztFQWdFUSxrQkFBa0I7RUFDbEIsUUFBTztFQUNQLFFBQVE7RUFDUixXQUFVO0VBQ1YsWUFBVztFQUNYLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsMENBQXlDLEVBQUE7O0FBekVqRDtFQTRFUSxrQkFBaUI7RUFLakIsVUFBUztFQUNULFFBQU87RUFDUCwyQkFBMkI7RUFDM0IsWUFBVztFQUNYLFFBQVE7RUFDUixpQkFBZ0IsRUFBQTs7QUF0RnhCO0VBeUZRLE9BQU07RUFDTixnQkFBZ0IsRUFBQTs7QUExRnhCO0VBNkZRLGlCQUFpQixFQUFBOztBQXNCckI7RUFuSEo7SUFxSFksV0FBVyxFQUFBO0VBckh2QjtJQXdIWSxnQkFBZ0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uLWRldGFpbHMvdHJhbnNhY3Rpb24tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDA3M2Q2LCAjODRkZmZkLCAjMDBjMGZmKTtcbiAgICB9XG5cbiAgICAubmV3LWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMTV2aDsgXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dmg7IFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwYWRkaW5nLXRvcDogOHZoO1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucGFkIHtcbiAgICAgICAgcGFkZGluZzogMzJweCAxNnB4IDE2cHggMTZweFxuICAgIH1cblxuICAgIC5tYWluLXRpbWVsaW5lLXNlY3Rpb257XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7ICBcbiAgICAgICAgbWFyZ2luOmF1dG87XG4gICAgfVxuICAgIC5tYWluLXRpbWVsaW5lLXNlY3Rpb24gLnRpbWVsaW5lLXN0YXJ0LFxuICAgIC5tYWluLXRpbWVsaW5lLXNlY3Rpb24gLnRpbWVsaW5lLWVuZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMDBweDtcbiAgICAgICAgd2lkdGg6MzBweDtcbiAgICAgICAgaGVpZ2h0OjMwcHg7XG4gICAgfVxuICAgIC5tYWluLXRpbWVsaW5lLXNlY3Rpb24gLmNvbmZlcmVuY2UtY2VudGVyLWxpbmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6NSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gd2lkdGg6IDRweDtcbiAgICAgICAgLy8gaGVpZ2h0OjEwMCU7XG4gICAgICAgIC8vIHRvcDogMDtcbiAgICAgICAgLy8gbGVmdDoydmg7XG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiMwMDkzRDE7XG4gICAgICAgIC8vIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAudGltZWxpbmUtYXJ0aWNsZXtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDY1cHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICAgIC50aW1lbGluZS1hcnRpY2xlIC5jb250ZW50LWRhdGV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOjMzJTtcbiAgICAgICAgbGVmdDo1JTsgXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgICB9XG4gICAgLnRpbWVsaW5lLWFydGljbGUgLm1ldGEtZGF0ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOjUwJTtcbiAgICAgICAgbGVmdDogNSU7XG4gICAgICAgIHdpZHRoOjIwcHg7XG4gICAgICAgIGhlaWdodDoyMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IFxuICAgICAgICBtYXJnaW4tbGVmdDogLTExcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC50aW1lbGluZS1hcnRpY2xlIC5jb250ZW50LWJveHtcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDBweCAjYzFjMWMxO1xuICAgICAgICAvLyBib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDo4MCU7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgcGFkZGluZzo4cHg7XG4gICAgICAgIGxlZnQ6IDIlO1xuICAgICAgICBtYXJnaW4tbGVmdDo0MHB4O1xuICAgIH1cbiAgICAuY29udGVudC1sZWZ0LWNvbnRhaW5lciAuY29udGVudC1ib3h7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQtbGVmdC1jb250YWluZXIgLmNvbnRlbnQtZGF0ZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgfVxuICAgIC8vIC5jb250ZW50LXJpZ2h0LWNvbnRhaW5lciAuY29udGVudC1ib3g6YmVmb3Jle1xuICAgIC8vICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAvLyAgICAgcG9zaXRpb246YWJzb2x1dGU7IFxuICAgIC8vICAgICBsZWZ0Oi0xMHB4O1xuICAgIC8vICAgICB0b3A6NDMlO1xuICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgLy8gICAgIGJvcmRlcjoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIC8vICAgICBib3JkZXItcmlnaHQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8vICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIC8vIH1cbiAgICAvLyAuY29udGVudC1sZWZ0LWNvbnRhaW5lciAuY29udGVudC1ib3g6YmVmb3Jle1xuICAgIC8vICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAvLyAgICAgcG9zaXRpb246YWJzb2x1dGU7IFxuICAgIC8vICAgICB0b3A6NDAlO1xuICAgIC8vICAgICByaWdodDotMzBweDtcbiAgICAvLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIC8vICAgICBib3JkZXI6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAvLyAgICAgYm9yZGVyLWxlZnQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8vIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDo0NjBweCl7IFxuICAgICAgICAudGltZWxpbmUtYXJ0aWNsZS5jb250ZW50LWxlZnQtY29udGFpbmVyIC5jb250ZW50LWJveHtcbiAgICAgICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aW1lbGluZS1hcnRpY2xlIC5jb250ZW50LWJveCBwe1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/transaction-details/transaction-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/transaction-details/transaction-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsPage", function() { return TransactionDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_transactionList_transaction_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/transactionList/transaction-list.service */ "./src/app/api/transactionList/transaction-list.service.ts");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _models_trans_list_filter_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/trans-list-filter.enum */ "./src/app/models/trans-list-filter.enum.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var TransactionDetailsPage = /** @class */ (function () {
    function TransactionDetailsPage(router, transList, storage, navCtrl) {
        var _this = this;
        this.router = router;
        this.transList = transList;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.showToolbar = false;
        this.currentColor = "light";
        this.avatarBackground2 = this.avatarBackgroundMethod();
        var transaction = router.getCurrentNavigation().extras.state.transaction;
        this.transaction = transaction;
        console.log(this.transaction);
        storage.getUser().then(function (user) {
            if (user && user.UserID && user.token) {
                transList
                    .getTransListWithFilter(user.UserID, user.token, _models_trans_list_filter_enum__WEBPACK_IMPORTED_MODULE_5__["TransListFilter"].TX_NUMBER, _this.transaction.TransactionNo)
                    .subscribe();
            }
        });
    }
    TransactionDetailsPage.prototype.ngOnInit = function () { };
    TransactionDetailsPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? "dark" : "light";
        }
    };
    TransactionDetailsPage.prototype.startNew = function () {
        var beneficiary = {
            ID: this.transaction.BeneficiaryID,
            Name: this.transaction.BeneficiaryName,
            Mode: "",
            BankName: this.transaction.BankName,
            BankBranch: this.transaction.BankBranch,
            AccNo: this.transaction.AccNo,
            LastDate: this.transaction.Date,
            Count: "",
            Currency: this.transaction.Currency,
            AmountFC: this.transaction.AmountFC,
            AmountKD: this.transaction.AmountKD,
            Color: this.transaction.BenefColor,
        };
        this.navCtrl.navigateForward("remittance-details", { state: { beneficiary: beneficiary } });
    };
    TransactionDetailsPage.prototype.avatarBackgroundMethod = function () {
        return ("#" +
            ("000000" +
                Math.random()
                    .toString(16)
                    .slice(2, 8)
                    .toUpperCase()).slice(-6));
    };
    TransactionDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-transaction-details",
            template: __webpack_require__(/*! ./transaction-details.page.html */ "./src/app/transaction-details/transaction-details.page.html"),
            styles: [__webpack_require__(/*! ./transaction-details.page.scss */ "./src/app/transaction-details/transaction-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_transactionList_transaction_list_service__WEBPACK_IMPORTED_MODULE_3__["TransactionListService"],
            _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], TransactionDetailsPage);
    return TransactionDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=transaction-details-transaction-details-module.js.map