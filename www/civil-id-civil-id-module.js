(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["civil-id-civil-id-module"],{

/***/ "./src/app/civil-id/civil-id.module.ts":
/*!*********************************************!*\
  !*** ./src/app/civil-id/civil-id.module.ts ***!
  \*********************************************/
/*! exports provided: CivilIdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilIdPageModule", function() { return CivilIdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _civil_id_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./civil-id.page */ "./src/app/civil-id/civil-id.page.ts");







var routes = [
    {
        path: '',
        component: _civil_id_page__WEBPACK_IMPORTED_MODULE_6__["CivilIdPage"]
    }
];
var CivilIdPageModule = /** @class */ (function () {
    function CivilIdPageModule() {
    }
    CivilIdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_civil_id_page__WEBPACK_IMPORTED_MODULE_6__["CivilIdPage"]]
        })
    ], CivilIdPageModule);
    return CivilIdPageModule;
}());



/***/ }),

/***/ "./src/app/civil-id/civil-id.page.html":
/*!*********************************************!*\
  !*** ./src/app/civil-id/civil-id.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar [class.show-background]=\"showToolbar\" style=\"padding: 8px 0 8px 0\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" [color]=\"currentColor\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\">\n\n  <div class=\"container\">\n    <div class=\"header\" style=\"height: 20vh; min-height: 20vh; max-height: 20vh\">\n      <h1 class=\"big-title\" style=\"color: white\">Upload Civil-ID</h1>\n      <!-- <h5 style=\"color: white\">Fill the applicable details</h5> -->\n    </div>\n    <div class=\"content\">\n      <ion-row>\n        <div class=\"d-block center\">\n          <img [src]=\"imageDataFrontUrl\" class=\"img-responsive\"  (click)=\"selectImage('front', $event)\"/>\n          <ion-button fill=\"clear\" expand=\"full\" color=\"primary\" (click)=\"selectImage('front', $event)\">\n            <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n            Select front Image\n          </ion-button>\n        </div>\n      </ion-row>\n      <br/>\n      <ion-row>\n        <div class=\"d-block center\">\n          <img [src]=\"imageDataBackUrl\" class=\"img-responsive\"  (click)=\"selectImage('back')\"/>\n          <ion-button fill=\"clear\" expand=\"full\" color=\"primary\" (click)=\"selectImage('back')\">\n            <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n            Select back Image\n          </ion-button>\n          </div>\n      </ion-row>\n      <ion-button (click)=\"onSubmit()\" expand=\"block mt-3\">\n        SUBMIT\n      </ion-button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/civil-id/civil-id.page.scss":
/*!*********************************************!*\
  !*** ./src/app/civil-id/civil-id.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(#0073d6, #84dffd, #00c0ff); }\n\n/* Show background if class is active */\n\n.show-background {\n  border-style: none;\n  background: var(--ion-color-white); }\n\nmat-form-field {\n  width: 100%; }\n\n::ng-deep mat-option.mat-option-text {\n  white-space: normal; }\n\n::ng-deep .mat-select-value-text {\n  white-space: normal !important; }\n\n.d-block {\n  display: block; }\n\n.img-responsive {\n  max-width: 120px; }\n\n.center {\n  margin: auto;\n  text-align: center; }\n\n.mt-3 {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pdGhpbi9mb2xrc2xvZ2ljL3Rlc3QvS3V3YWl0IEluZGlhIEFuZHJvaWQvc3JjL2FwcC9jaXZpbC1pZC9jaXZpbC1pZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3REFBYSxFQUFBOztBQUdmLHVDQUFBOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaXZpbC1pZC9jaXZpbC1pZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDczZDYsICM4NGRmZmQsICMwMGMwZmYpO1xuICB9XG5cbiAgLyogU2hvdyBiYWNrZ3JvdW5kIGlmIGNsYXNzIGlzIGFjdGl2ZSAqL1xuICAuc2hvdy1iYWNrZ3JvdW5kIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIG1hdC1vcHRpb24ubWF0LW9wdGlvbi10ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmQtYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5pbWctcmVzcG9uc2l2ZSB7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgfVxuICAuY2VudGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tdC0zIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/civil-id/civil-id.page.ts":
/*!*******************************************!*\
  !*** ./src/app/civil-id/civil-id.page.ts ***!
  \*******************************************/
/*! exports provided: CivilIdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilIdPage", function() { return CivilIdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-provider.service */ "./src/app/utils/utils-provider.service.ts");
/* harmony import */ var _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/storage/storage.service */ "./src/app/api/storage/storage.service.ts");
/* harmony import */ var _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/auth/auth.service */ "./src/app/api/auth/auth.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");










var CivilIdPage = /** @class */ (function () {
    function CivilIdPage(formBuilder, utils, storage, navController, authService, alertController, actionSheetController, domSanitizer, file, camera) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.utils = utils;
        this.storage = storage;
        this.navController = navController;
        this.authService = authService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.domSanitizer = domSanitizer;
        this.file = file;
        this.camera = camera;
        this.showToolbar = false;
        this.currentColor = 'light';
        this.options = {
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 320,
            targetHeight: 320,
            correctOrientation: true,
            popoverOptions: { x: 300, y: 300, width: 200, height: 200, arrowDir: 15 }
        };
        this.imageDataFront = null;
        this.imageDataBack = null;
        this.imageDataFrontUrl = '../../assets/camara.png';
        this.imageDataBackUrl = '../../assets/camara.png';
        this.imageType = null;
        storage.getUser().then(function (user) { return (_this.currentUser = user); });
    }
    CivilIdPage.prototype.ngOnInit = function () { };
    CivilIdPage.prototype.onScroll = function ($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            var scrollTop = $event.detail.scrollTop;
            this.showToolbar = scrollTop >= 130;
            this.currentColor = this.showToolbar ? 'dark' : 'light';
        }
    };
    CivilIdPage.prototype.takePicture = function (event) {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            if (_this.imageType === 'front') {
                _this.imageDataFrontUrl = window.Ionic.WebView.convertFileSrc(imageData);
            }
            else if (_this.imageType === 'back') {
                _this.imageDataBackUrl = window.Ionic.WebView.convertFileSrc(imageData);
            }
            _this.file.resolveLocalFilesystemUrl(imageData).then(function (entry) {
                entry.file(function (file) {
                    if (file.size >= 100000) {
                        _this.utils.showAlert('Error', 'File size exceeds 100kb');
                    }
                    else {
                        var formData = new FormData();
                        formData.append('file1', file.localURL);
                        _this.uploadFile(formData);
                    }
                });
            });
        }, function (err) {
            // Handle error
            _this.utils.showAlert('Error', 'Something went wrong');
        });
    };
    CivilIdPage.prototype.uploadFile = function (file) {
        var _this = this;
        this.authService.fileUpload(file).subscribe(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (response.Status === '00' && response.ImageNo) {
                    this.utils.hideLoader();
                    if (this.imageType === 'front') {
                        this.imageDataFront = response.ImageNo;
                    }
                    else if (this.imageType === 'back') {
                        this.imageDataBack = response.ImageNo;
                    }
                }
                else if (response.Status === '01') {
                    this.utils.hideLoader();
                    this.utils.showAlert('Error', response.ErrorDesc);
                }
                else {
                    this.utils.hideLoader();
                    this.utils.showAlert('Error', 'Something went wrong');
                }
                return [2 /*return*/];
            });
        }); }, function (err) {
            _this.utils
                .showAlert('Error', 'Some error occured. Please try again.')
                .then(function () { return _this.utils.hideLoader(); });
        });
    };
    CivilIdPage.prototype.selectImage = function (imageType, event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.imageType = imageType;
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Select Image source',
                                buttons: [
                                    // {
                                    //   text: 'Load from Library',
                                    //   handler: () => {
                                    //     // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                                    //   },
                                    // },
                                    {
                                        text: 'Use Camera',
                                        handler: function () {
                                            _this.takePicture(event);
                                        },
                                    },
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                    },
                                ],
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CivilIdPage.prototype.uploadCivilId = function () {
        var _this = this;
        var postData = {
            UserID: this.currentUser.UserID,
            ID_FRONT: this.imageDataFront,
            ID_BACK: this.imageDataBack
        };
        this.authService.civilIdUpload(postData).subscribe(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (response.Status === '00') {
                    this.utils.hideLoader();
                    // success                  
                    this.utils.showToast('Uploaded Civil ID successfully.', 5000);
                    this.navController.pop();
                }
                else if (response.Status === '01') {
                    this.utils.hideLoader();
                    this.utils.showAlert('Error', response.ErrorDesc);
                }
                else {
                    this.utils.hideLoader();
                    this.utils.showAlert('Error', 'Something went wrong');
                }
                return [2 /*return*/];
            });
        }); }, function (err) {
            _this.utils
                .showAlert('Error', 'Some error occured. Please try again.')
                .then(function () { return _this.utils.hideLoader(); });
        });
    };
    CivilIdPage.prototype.onSubmit = function () {
        console.log(this.imageDataBack);
        console.log(this.imageDataFront);
        if (this.imageDataFront && this.imageDataBack) {
            // Submit API
            this.uploadCivilId();
        }
        else {
            this.utils.showAlert('Error', 'Upload Front and back images');
        }
    };
    CivilIdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-civil-id',
            template: __webpack_require__(/*! ./civil-id.page.html */ "./src/app/civil-id/civil-id.page.html"),
            styles: [__webpack_require__(/*! ./civil-id.page.scss */ "./src/app/civil-id/civil-id.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _utils_utils_provider_service__WEBPACK_IMPORTED_MODULE_4__["UtilsProviderService"],
            _api_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _api_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]])
    ], CivilIdPage);
    return CivilIdPage;
}());



/***/ })

}]);
//# sourceMappingURL=civil-id-civil-id-module.js.map