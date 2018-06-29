(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h2 class=\"message\">\n  {{currentQuestion?.name}}\n</h2>\n\n<div class=\"action\">\n  <button mat-raised-button (click)=\"beginTest()\" [disabled]=\"isBegin\">开始考试</button>\n  \n</div>\n\n<div class=\"light\">\n  <mat-button-toggle-group [(ngModel)]=\"lightVal\" (change)=\"onChangeLight()\">\n    <mat-button-toggle [value]=\"0\">关</mat-button-toggle>\n    <mat-button-toggle [value]=\"1\">示廓灯</mat-button-toggle>\n    <mat-button-toggle [value]=\"2\">开</mat-button-toggle>\n  </mat-button-toggle-group>\n  <mat-slide-toggle [(ngModel)]=\"dangerLightValue\" (change)=\"onChangeDanger()\">危险报警灯</mat-slide-toggle>\n</div>\n\n<div class=\"light-type\">\n  <mat-button-toggle-group [vertical]=\"true\" [(ngModel)]=\"lightType\" (change)=\"onChangeType()\">\n    <mat-button-toggle [value]=\"0\">远光灯</mat-button-toggle>\n    <mat-button-toggle [value]=\"1\">近光灯</mat-button-toggle>\n  </mat-button-toggle-group>\n  <button mat-raised-button (click)=\"onBlink()\" [disabled]=\"blinkDisable\">交替远近光灯</button>\n</div>\n\n<div class=\"next\">\n  <button mat-raised-button (click)=\"nextQuestion()\" [disabled]=\"isDisabled\" color=\"primary\">下一题</button>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\n.action {\n  margin-top: auto;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column; }\n\n.message {\n  text-align: center;\n  padding: 50px 0;\n  color: red; }\n\n.light {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column; }\n\n.light mat-button-toggle-group {\n    width: 100%;\n    display: flex;\n    margin-bottom: 10px; }\n\n.light mat-button-toggle-group mat-button-toggle {\n      flex: 1;\n      text-align: center; }\n\n.light-type {\n  display: flex;\n  flex-direction: column; }\n\n.light-type mat-button-toggle {\n    display: flex;\n    flex-direction: column; }\n\n.light-type button {\n    margin-top: 10px; }\n\n.next {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/question.service */ "./src/app/providers/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(questionService) {
        this.questionService = questionService;
        this.lightVal = 0;
        this.lightType = 1;
        this.dangerLightValue = false;
        this.currentQuestionIndex = 0;
        // answer
        this.isBegin = false;
        this.blinkClicked = false;
        this.isDisabled = true;
        this.blinkDisable = true;
        this.blinkTimes = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit');
        this.question = this.questionService.getQuestionArr();
    };
    AppComponent.prototype.onChangeLight = function () {
    };
    AppComponent.prototype.onChangeDanger = function () {
    };
    AppComponent.prototype.onChangeType = function () {
    };
    AppComponent.prototype.onBlink = function () {
        var _this = this;
        this.blinkTimes++;
        if (this.blinkTimes >= 2) {
            this.blinkClicked = true;
            setTimeout(function () {
                _this.blinkDisable = false;
            }, 500);
            if (this.currentQuestion.type === 'blink' && this.lightType === 1) {
                // success
                this.currentQuestionIndex++;
                this.currentQuestion = this.question[this.currentQuestionIndex];
                this.blinkClicked = false;
                this.blinkTimes = 0;
            }
            else {
                // failed
                alert('回答错误');
                location.reload();
            }
        }
    };
    AppComponent.prototype.beginTest = function () {
        this.isBegin = true;
        this.isDisabled = false;
        this.blinkDisable = false;
        this.currentQuestion = this.question[0];
    };
    AppComponent.prototype.nextQuestion = function () {
        var _this = this;
        this.isDisabled = true;
        setTimeout(function () {
            _this.isDisabled = false;
        }, 500);
        if (this.currentQuestion.type === 'open') {
            if (this.lightVal === 2 && this.lightType === 1) {
                // success
                this.currentQuestionIndex++;
                this.currentQuestion = this.question[this.currentQuestionIndex];
                return;
            }
            else {
                // failed
                alert('回答错误');
                location.reload();
            }
        }
        if (this.currentQuestion.type === 'blink') {
            if (this.blinkClicked && this.lightType === 1) {
                // success
                this.currentQuestionIndex++;
                this.currentQuestion = this.question[this.currentQuestionIndex];
                return;
            }
            else {
                // failed
                alert('回答错误');
                location.reload();
            }
        }
        if (this.currentQuestion.type === 'far') {
            if (this.lightType === 0 && this.lightVal === 2) {
                // success
                this.currentQuestionIndex++;
                this.currentQuestion = this.question[this.currentQuestionIndex];
                return;
            }
            else {
                // failed
                alert('回答错误');
                location.reload();
            }
        }
        if (this.currentQuestion.type === 'near') {
            if (this.lightType === 1 && this.lightVal === 2) {
                // success
                this.currentQuestionIndex++;
                this.currentQuestion = this.question[this.currentQuestionIndex];
                return;
            }
            else {
                // failed
                alert('回答错误');
                location.reload();
            }
        }
        if (this.currentQuestion.type === 'stop') {
            if (this.lightVal === 1 && this.dangerLightValue && this.lightType === 1) {
                // success
                this.currentQuestionIndex++;
                this.currentQuestion = this.question[this.currentQuestionIndex];
                return;
            }
            else {
                // failed
                alert('回答错误');
                location.reload();
            }
        }
        if (this.currentQuestion.type === 'close') {
            if (this.lightVal === 0 && !this.dangerLightValue && this.lightType === 1) {
                // success
                this.currentQuestionIndex++;
                this.currentQuestion = this.question[this.currentQuestionIndex];
                alert('考试合格');
                location.reload();
                return;
            }
            else {
                // failed
                alert('回答错误');
                location.reload();
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_providers_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/providers/question.service.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/question.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionService = /** @class */ (function () {
    function QuestionService() {
        this.question = [
            {
                type: 'open',
                name: '请开启前照灯'
            },
            {
                type: 'blink',
                name: '夜间通过急弯、破路'
            },
            {
                type: 'blink',
                name: '夜间通过破路、拱桥'
            },
            {
                type: 'blink',
                name: '夜间通过急弯、拱桥'
            },
            {
                type: 'blink',
                name: '夜间通过拱桥、人行横道'
            },
            {
                type: 'blink',
                name: '前方通过没有交通信号灯控制的路口'
            },
            {
                type: 'blink',
                name: '夜间超越前方车辆'
            },
            {
                type: 'near',
                name: '夜间同方向近距离跟车行驶'
            },
            {
                type: 'near',
                name: '夜间与机动车会车'
            },
            {
                type: 'near',
                name: '夜间直行通过路口'
            },
            {
                type: 'near',
                name: '夜间在有路灯的道路上行驶'
            },
            {
                type: 'near',
                name: '夜间在照明良好的道路上行驶'
            },
            {
                type: 'near',
                name: '请打开近光灯'
            },
            {
                type: 'far',
                name: '夜间在没有路灯照明不良条件下行驶'
            },
            {
                type: 'far',
                name: '请打开远光灯'
            },
            {
                type: 'stop',
                name: '路边临时停车'
            },
            {
                type: 'close',
                name: '模拟夜间考试完成，请关闭所有灯光'
            }
        ];
    }
    QuestionService.prototype.getRandomItems = function (arr) {
        return arr.filter(function (item) { return item.type === 'blink' || item.type === 'near' || item.type === 'far'; });
    };
    QuestionService.prototype.shuffle = function (arr2) {
        var arr = arr2.slice();
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
        var _a;
    };
    QuestionService.prototype.getQuestionArr = function () {
        var arr = this.shuffle(this.getRandomItems(this.question));
        arr.unshift(this.question[0]);
        arr.push(this.question[this.question.length - 2]);
        arr.push(this.question[this.question.length - 1]);
        return arr;
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\project\angular\light\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map