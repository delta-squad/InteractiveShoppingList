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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _authorization_page_authorization_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorization-page/authorization-page.component */ "./src/app/authorization-page/authorization-page.component.ts");





var routes = [
    { path: '', component: _authorization_page_authorization_page_component__WEBPACK_IMPORTED_MODULE_4__["AuthorizationPageComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _authorization_page_authorization_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authorization-page/authorization-page.component */ "./src/app/authorization-page/authorization-page.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _authorization_page_authorization_page_component__WEBPACK_IMPORTED_MODULE_7__["AuthorizationPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authorization-page/authorization-page.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/authorization-page/authorization-page.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\r\n  background: url('bg.jpg') no-repeat;\r\n  width: 100%;\r\n  height: 100vh;\r\n  max-width: 1920px;\r\n  min-width: 900px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.form-container-sign-in {\r\n  padding: 40px 30px;\r\n  margin-top: 20vh;\r\n  margin-left: 10vh;\r\n  box-shadow: 0px 0px 58px 21px rgba(0, 0, 0, 0.69);\r\n}\r\n\r\n.form-container-sign-up {\r\n  padding: 40px 30px;\r\n  margin-top: 20vh;\r\n  margin-left: 10vh;\r\n  box-shadow: 0px 0px 58px 21px rgba(0, 0, 0, 0.69);\r\n}\r\n\r\n.lb {\r\n  font-size: 19px;\r\n  font-weight: 500;\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi1wYWdlL2F1dGhvcml6YXRpb24tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQTJDO0VBQzNDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFJakIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFHakIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JpemF0aW9uLXBhZ2UvYXV0aG9yaXphdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9pbWcvYmcuanBnKSBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXgtd2lkdGg6IDE5MjBweDtcclxuICBtaW4td2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyLXNpZ24taW4ge1xyXG4gIHBhZGRpbmc6IDQwcHggMzBweDtcclxuICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHZoO1xyXG5cclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNThweCAyMXB4IHJnYmEoMCwgMCwgMCwgMC42OSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDU4cHggMjFweCByZ2JhKDAsIDAsIDAsIDAuNjkpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNThweCAyMXB4IHJnYmEoMCwgMCwgMCwgMC42OSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lci1zaWduLXVwIHtcclxuICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjB2aDtcclxuICBtYXJnaW4tbGVmdDogMTB2aDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNThweCAyMXB4IHJnYmEoMCwgMCwgMCwgMC42OSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDU4cHggMjFweCByZ2JhKDAsIDAsIDAsIDAuNjkpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNThweCAyMXB4IHJnYmEoMCwgMCwgMCwgMC42OSk7XHJcbn1cclxuXHJcbi5sYiB7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/authorization-page/authorization-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/authorization-page/authorization-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg\">\r\n  {{loginForm.value | json}}\r\n  {{registrationForm.value | json}}\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 col-sm-4 col-xs-12\"></div>\r\n    <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n\r\n      <form [formGroup]=\"loginForm\" class=\"form-container-sign-in\">\r\n        <h2>Log in</h2><br>\r\n        <div class=\"form-group\">\r\n          <label class=\"lb\">Username</label>\r\n          <input [class.is-invalid]=\"userName.invalid && userName.touched\"\r\n                 formControlName=\"userName\" type=\"text\" class=\"form-control\" placeholder=\"Username\">\r\n          <small [class.d-none]=\"userName.valid || userName.untouched\" class=\"text-danger\">Username is required\r\n          </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"lb\">Password</label>\r\n          <input [class.is-invalid]=\"password.invalid && password.touched\"\r\n                 formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n          <small [class.d-none]=\"password.valid || password.untouched\" class=\"text-danger\">Password is required</small>\r\n        </div>\r\n        <button (click)=\"onSubmit()\" [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-success btn-block\">\r\n          Log in\r\n        </button>\r\n      </form>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n      <form [formGroup]=\"registrationForm\" class=\"form-container-sign-up\">\r\n        <h2>Create new account</h2><br>\r\n        <div class=\"form-group\">\r\n          <label class=\"lb\">E-mail</label>\r\n          <input [class.is-invalid]=\"newEmail.invalid && newEmail.touched\" formControlName=\"newEmail\" type=\"email\"\r\n                 class=\"form-control\" placeholder=\"Email\">\r\n          <small [class.d-none]=\"newEmail.valid || newEmail.untouched\" class=\"text-danger\">E-mail is required</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"lb\">Username</label>\r\n          <input [class.is-invalid]=\"newUserName.invalid && newUserName.touched\" formControlName=\"newUserName\"\r\n                 type=\"email\" class=\"form-control\" placeholder=\"Username\">\r\n          <div *ngIf=\"newUserName.invalid && newUserName.touched\">\r\n            <small *ngIf=\"newUserName.errors?.required\" [class.d-none]=\"newUserName.valid || newUserName.untouched\"\r\n                   class=\"text-danger\">Username is required\r\n            </small>\r\n            <small *ngIf=\"newUserName.errors?.minlength\" [class.d-none]=\"newUserName.valid || newUserName.untouched\"\r\n                   class=\"text-danger\">Username need to be at least 4 characters long\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"lb\">Password</label>\r\n          <input [class.is-invalid]=\"newPassword.invalid && newPassword.touched\" formControlName=\"newPassword\"\r\n                 type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n          <div *ngIf=\"newPassword.invalid && newPassword.touched\">\r\n            <small *ngIf=\"newPassword.errors?.required\" [class.d-none]=\"newPassword.valid || newPassword.untouched\"\r\n                   class=\"text-danger\">Password is required\r\n            </small>\r\n            <small *ngIf=\"newPassword.errors?.minlength\" [class.d-none]=\"newPassword.valid || newPassword.untouched\"\r\n                   class=\"text-danger\">Password need to be at least 8 characters long\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"lb\">Confirm password</label>\r\n          <input\r\n            [class.is-invalid]=\"registrationForm.errors?.misMatch || newConfirmPassword.invalid && newConfirmPassword.touched\"\r\n            formControlName=\"newConfirmPassword\" type=\"password\" class=\"form-control\" placeholder=\"Confirm password\">\r\n          <div *ngIf=\"registrationForm.errors?.misMatch || newConfirmPassword.invalid && newConfirmPassword.touched\">\r\n            <small class=\"text-danger\" *ngIf=\"newConfirmPassword.errors?.required\">You need to confirm password</small>\r\n            <small class=\"text-danger\" *ngIf=\"registrationForm.errors?.misMatch\">Passwords must match</small>\r\n          </div>\r\n\r\n        </div>\r\n        <button [disabled]=\"!registrationForm.valid\" type=\"submit\" class=\"btn btn-success btn-block\">Register\r\n        </button>\r\n      </form>\r\n\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-4 col-xs-12\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authorization-page/authorization-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/authorization-page/authorization-page.component.ts ***!
  \********************************************************************/
/*! exports provided: AuthorizationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationPageComponent", function() { return AuthorizationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_password_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/password.validator */ "./src/app/authorization-page/shared/password.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthorizationPageComponent = /** @class */ (function () {
    function AuthorizationPageComponent(fb, _router) {
        this.fb = fb;
        this._router = _router;
        this.loginForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.registrationForm = this.fb.group({
            newEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            newUserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            newConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: _shared_password_validator__WEBPACK_IMPORTED_MODULE_3__["PasswordValidator"] });
    }
    Object.defineProperty(AuthorizationPageComponent.prototype, "userName", {
        get: function () {
            return this.loginForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthorizationPageComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthorizationPageComponent.prototype, "newUserName", {
        get: function () {
            return this.registrationForm.get('newUserName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthorizationPageComponent.prototype, "newEmail", {
        get: function () {
            return this.registrationForm.get('newEmail');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthorizationPageComponent.prototype, "newPassword", {
        get: function () {
            return this.registrationForm.get('newPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthorizationPageComponent.prototype, "newConfirmPassword", {
        get: function () {
            return this.registrationForm.get('newConfirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    AuthorizationPageComponent.prototype.onSubmit = function () {
        if (this.loginForm.get('userName').value === "admin" && this.loginForm.get('password').value === "admin") {
            alert("Logged in to admin panel");
            console.log(this.loginForm);
            this._router.navigateByUrl('dashboard');
        }
        else {
            alert("Not implemented yet");
        }
    };
    AuthorizationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authorization-page',
            template: __webpack_require__(/*! ./authorization-page.component.html */ "./src/app/authorization-page/authorization-page.component.html"),
            styles: [__webpack_require__(/*! ./authorization-page.component.css */ "./src/app/authorization-page/authorization-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthorizationPageComponent);
    return AuthorizationPageComponent;
}());



/***/ }),

/***/ "./src/app/authorization-page/shared/password.validator.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authorization-page/shared/password.validator.ts ***!
  \*****************************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
function PasswordValidator(control) {
    var newPassword = control.get('newPassword');
    var newConfirmPassword = control.get('newConfirmPassword');
    if (newPassword.pristine || newConfirmPassword.pristine) {
        return null;
    }
    if (newConfirmPassword.value === '') {
        return null;
    }
    return newPassword && newConfirmPassword && newPassword.value != newConfirmPassword.value ?
        { 'misMatch': true } : null;
}


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: "\n    <p>\n      dashboard works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kamil\Desktop\InteractiveShoppingList\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map