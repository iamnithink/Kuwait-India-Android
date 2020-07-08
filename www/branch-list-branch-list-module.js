(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["branch-list-branch-list-module"],{

/***/ "./src/app/branch-list/branch-list.module.ts":
/*!***************************************************!*\
  !*** ./src/app/branch-list/branch-list.module.ts ***!
  \***************************************************/
/*! exports provided: BranchListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchListPageModule", function() { return BranchListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _branch_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branch-list.page */ "./src/app/branch-list/branch-list.page.ts");







var routes = [
    {
        path: '',
        component: _branch_list_page__WEBPACK_IMPORTED_MODULE_6__["BranchListPage"]
    }
];
var BranchListPageModule = /** @class */ (function () {
    function BranchListPageModule() {
    }
    BranchListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_branch_list_page__WEBPACK_IMPORTED_MODULE_6__["BranchListPage"]]
        })
    ], BranchListPageModule);
    return BranchListPageModule;
}());



/***/ }),

/***/ "./src/app/branch-list/branch-list.page.html":
/*!***************************************************!*\
  !*** ./src/app/branch-list/branch-list.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"true\" style=\"padding:0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div class=\"big-title title-color\" style=\"font-size: 1.5em; padding: 16px\">Our Branches</div>\n  <ion-list lines=\"none\">\n    <ion-item class=\"beneficiary-card\" *ngFor=\"let location of locations\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <ion-item class=\"name-item inner\" lines=\"none\">\n              <img src=\"../../assets/mark.svg\" slot=\"start\" style=\"position: relative; top: -20px\">\n              <ion-label>\n                <div class=\"title-color\" style=\"padding: 0 0 4px 0\">\n                  {{location.NAME}}\n                </div>\n                <div class=\"subtitle-color\" style=\"padding: 4px 0\">\n                  {{location.ADDRESS}}\n                </div>\n                <div style=\"white-space: normal; padding: 4px 0\">\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\" (click)=\"onCallClick(location)\">\n                    <ion-icon name=\"ios-call\"></ion-icon>\n                    <ion-label>Call</ion-label>\n                  </ion-chip>\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\" *ngIf=\"location.LATITUDE !== ''\"\n                    (click)=\"onLocationClick(location)\">\n                    <ion-icon name=\"md-navigate\"></ion-icon>\n                    <ion-label>Get Directions</ion-label>\n                  </ion-chip>\n                </div>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <!-- <ion-item class=\"beneficiary-card\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <ion-item class=\"name-item inner\" lines=\"none\">\n              <img src=\"../../assets/mark.svg\" slot=\"start\" style=\"position: relative; top: -20px\">\n              <ion-label>\n                <div class=\"title-color\" style=\"padding: 0 0 4px 0\">\n                  Branch Name\n                </div>\n                <div class=\"subtitle-color\" style=\"padding: 4px 0\">\n                  Branch Addresss\n                </div>\n                <div style=\"white-space: normal; padding: 4px 0\">\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"ios-call\"></ion-icon>\n                    <ion-label>Call</ion-label>\n                  </ion-chip>\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"md-navigate\"></ion-icon>\n                    <ion-label>Get Directions</ion-label>\n                  </ion-chip>\n                </div>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item class=\"beneficiary-card\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <ion-item class=\"name-item inner\" lines=\"none\">\n              <img src=\"../../assets/mark.svg\" slot=\"start\" style=\"position: relative; top: -20px\">\n              <ion-label>\n                <div class=\"title-color\" style=\"padding: 0 0 4px 0\">\n                  Branch Name\n                </div>\n                <div class=\"subtitle-color\" style=\"padding: 4px 0\">\n                  Branch Addresss\n                </div>\n                <div style=\"white-space: normal; padding: 4px 0\">\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"ios-call\"></ion-icon>\n                    <ion-label>Call</ion-label>\n                  </ion-chip>\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"md-navigate\"></ion-icon>\n                    <ion-label>Get Directions</ion-label>\n                  </ion-chip>\n                </div>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item class=\"beneficiary-card\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <ion-item class=\"name-item inner\" lines=\"none\">\n              <img src=\"../../assets/mark.svg\" slot=\"start\" style=\"position: relative; top: -20px\">\n              <ion-label>\n                <div class=\"title-color\" style=\"padding: 0 0 4px 0\">\n                  Branch Name\n                </div>\n                <div class=\"subtitle-color\" style=\"padding: 4px 0\">\n                  Branch Addresss\n                </div>\n                <div style=\"white-space: normal; padding: 4px 0\">\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"ios-call\"></ion-icon>\n                    <ion-label>Call</ion-label>\n                  </ion-chip>\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"md-navigate\"></ion-icon>\n                    <ion-label>Get Directions</ion-label>\n                  </ion-chip>\n                </div>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item class=\"beneficiary-card\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <ion-item class=\"name-item inner\" lines=\"none\">\n              <img src=\"../../assets/mark.svg\" slot=\"start\" style=\"position: relative; top: -20px\">\n              <ion-label>\n                <div class=\"title-color\" style=\"padding: 0 0 4px 0\">\n                  Branch Name\n                </div>\n                <div class=\"subtitle-color\" style=\"padding: 4px 0\">\n                  Branch Addresss\n                </div>\n                <div style=\"white-space: normal; padding: 4px 0\">\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"ios-call\"></ion-icon>\n                    <ion-label>Call</ion-label>\n                  </ion-chip>\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"md-navigate\"></ion-icon>\n                    <ion-label>Get Directions</ion-label>\n                  </ion-chip>\n                </div>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item class=\"beneficiary-card\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <ion-item class=\"name-item inner\" lines=\"none\">\n              <img src=\"../../assets/mark.svg\" slot=\"start\" style=\"position: relative; top: -20px\">\n              <ion-label>\n                <div class=\"title-color\" style=\"padding: 0 0 4px 0\">\n                  Branch Name\n                </div>\n                <div class=\"subtitle-color\" style=\"padding: 4px 0\">\n                  Branch Addresss\n                </div>\n                <div style=\"white-space: normal; padding: 4px 0\">\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"ios-call\"></ion-icon>\n                    <ion-label>Call</ion-label>\n                  </ion-chip>\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"md-navigate\"></ion-icon>\n                    <ion-label>Get Directions</ion-label>\n                  </ion-chip>\n                </div>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-item class=\"beneficiary-card\">\n      <ion-grid no-padding>\n        <ion-row no-padding>\n          <ion-col size=\"12\" no-padding>\n            <ion-item class=\"name-item inner\" lines=\"none\">\n              <img src=\"../../assets/mark.svg\" slot=\"start\" style=\"position: relative; top: -20px\">\n              <ion-label>\n                <div class=\"title-color\" style=\"padding: 0 0 4px 0\">\n                  Branch Name\n                </div>\n                <div class=\"subtitle-color\" style=\"padding: 4px 0\">\n                  Branch Addresss\n                </div>\n                <div style=\"white-space: normal; padding: 4px 0\">\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"ios-call\"></ion-icon>\n                    <ion-label>Call</ion-label>\n                  </ion-chip>\n                  <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n                    <ion-icon name=\"md-navigate\"></ion-icon>\n                    <ion-label>Get Directions</ion-label>\n                  </ion-chip>\n                </div>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item> -->\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/branch-list/branch-list.page.scss":
/*!***************************************************!*\
  !*** ./src/app/branch-list/branch-list.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".beneficiary-card {\n  width: 100%;\n  padding: 0 8px 8px 8px;\n  --border-top-width: 2px;\n  --border-end-width: 2px;\n  --border-bottom-width: 2px;\n  --border-start-width: 2px;\n  --border-radius: 5px;\n  --inner-border-width: 0;\n  --inner-padding-end: 0px;\n  --border-width: var(--border-top-width) var(--border-end-width) var(--border-bottom-width) var(--border-start-width);\n  --border-color: var(--ion-beneficiary-border-color);\n  --background: var(--ion-beneficiary-background-color); }\n  .beneficiary-card .inner {\n    --background: var(--ion-beneficiary-background-color); }\n  .avatar-text {\n  display: flex;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9icmFuY2gtbGlzdC9icmFuY2gtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHVCQUFtQjtFQUNuQix1QkFBbUI7RUFDbkIsMEJBQXNCO0VBQ3RCLHlCQUFxQjtFQUNyQixvQkFBZ0I7RUFFaEIsdUJBQXFCO0VBQ3JCLHdCQUFvQjtFQUNwQixvSEFBZTtFQUNmLG1EQUFlO0VBQ2YscURBQWEsRUFBQTtFQWJqQjtJQWVNLHFEQUFhLEVBQUE7RUFJakI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9icmFuY2gtbGlzdC9icmFuY2gtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVuZWZpY2lhcnktY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCA4cHggOHB4IDhweDtcbiAgICAtLWJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgICAtLWJvcmRlci1lbmQtd2lkdGg6IDJweDtcbiAgICAtLWJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAtLWJvcmRlci1zdGFydC13aWR0aDogMnB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIFxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLXRvcC13aWR0aCkgdmFyKC0tYm9yZGVyLWVuZC13aWR0aCkgdmFyKC0tYm9yZGVyLWJvdHRvbS13aWR0aCkgdmFyKC0tYm9yZGVyLXN0YXJ0LXdpZHRoKTtcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWJlbmVmaWNpYXJ5LWJvcmRlci1jb2xvcik7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmVuZWZpY2lhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgLmlubmVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJlbmVmaWNpYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5hdmF0YXItdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/branch-list/branch-list.page.ts":
/*!*************************************************!*\
  !*** ./src/app/branch-list/branch-list.page.ts ***!
  \*************************************************/
/*! exports provided: BranchListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchListPage", function() { return BranchListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");





var BranchListPage = /** @class */ (function () {
    function BranchListPage(router, launchNavigator, callNumber) {
        this.router = router;
        this.launchNavigator = launchNavigator;
        this.callNumber = callNumber;
        var list = router.getCurrentNavigation().extras.state.list;
        this.locations = list;
    }
    BranchListPage.prototype.ngOnInit = function () { };
    BranchListPage.prototype.onCallClick = function (location) {
        this.callNumber.callNumber(location.TEL1, true).then(function () {
            console.log("Called ", location.TEL1);
        });
    };
    BranchListPage.prototype.onLocationClick = function (location) {
        this.launchNavigator.navigate([Number(location.LATITUDE), Number(location.LONGITUDE)]);
    };
    BranchListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-branch-list",
            template: __webpack_require__(/*! ./branch-list.page.html */ "./src/app/branch-list/branch-list.page.html"),
            styles: [__webpack_require__(/*! ./branch-list.page.scss */ "./src/app/branch-list/branch-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_3__["LaunchNavigator"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"]])
    ], BranchListPage);
    return BranchListPage;
}());



/***/ })

}]);
//# sourceMappingURL=branch-list-branch-list-module.js.map