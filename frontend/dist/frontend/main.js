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

/***/ "./src/app/admin-console/admin-console.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin-console/admin-console.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav, mat-sidenav-content {\r\n  height: 90vh;\r\n}\r\n\r\nmat-sidenav, mat-sidenav-content {\r\n  padding: 16px;\r\n}\r\n\r\nmat-sidenav {\r\n  background-color: #3F51B5;\r\n  color: white;\r\n}\r\n\r\n.spacer {\r\n  padding: 10px;\r\n}\r\n\r\n.navBar {\r\n  justify-content: space-between;\r\n}\r\n\r\nmat-toolbar {\r\n  height: 10vh;\r\n}\r\n\r\n.navigationWords {\r\n  padding-left: 100px;\r\n  padding-right: 30px;\r\n  font-size: 40px;\r\n}\r\n\r\n.sendFile {\r\n  border-style: solid;\r\n}\r\n\r\n.buttonSendFile {\r\n  margin: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY29uc29sZS9hZG1pbi1jb25zb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tY29uc29sZS9hZG1pbi1jb25zb2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LCBtYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LCBtYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZCYXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxubWF0LXRvb2xiYXIge1xyXG4gIGhlaWdodDogMTB2aDtcclxufVxyXG5cclxuLm5hdmlnYXRpb25Xb3JkcyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLnNlbmRGaWxlIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4uYnV0dG9uU2VuZEZpbGUge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin-console/admin-console.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin-console/admin-console.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navBar\">\n  <div class=\"navigationWords\">\n    Admin Console\n  </div>\n  <div>\n    <span class=\"navigationWords\">Home</span>\n  </div>\n</mat-toolbar>\n<mat-sidenav-container>\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" role=\"navigation\">\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <div class=\"sendFile\"><h1>Click and send new json file to database</h1>\n      <button class=\"buttonSendFile\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Load</button>\n      <button class=\"buttonSendFile\" mat-raised-button color=\"primary\" (click)=\"printLog()\">Show Log</button>\n      <button class=\"buttonSendFile\" mat-raised-button color=\"primary\" (click)=\"sendProducts()\">Send to DB</button>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/admin-console/admin-console.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin-console/admin-console.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminConsoleComponent", function() { return AdminConsoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enrollment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enrollment.service */ "./src/app/enrollment.service.ts");
/* harmony import */ var _admin_console_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-console.service */ "./src/app/admin-console/admin-console.service.ts");




var AdminConsoleComponent = /** @class */ (function () {
    function AdminConsoleComponent(_service, _enrollService) {
        this._service = _service;
        this._enrollService = _enrollService;
        this.opened = true;
        this.products = [];
    }
    AdminConsoleComponent.prototype.onSubmit = function () {
        var _this = this;
        this._service.getProducts()
            .subscribe(function (data) { return _this.products = data; }, function (error) { return console.error(alert("Something went wrong! Maybe JSON file is incorrect?"), error); });
    };
    AdminConsoleComponent.prototype.printLog = function () {
        console.log(this.products);
    };
    AdminConsoleComponent.prototype.sendProducts = function () {
        this._enrollService.sendData(this.products)
            .subscribe(function (response) { return console.log(alert("The products has been send "), response); }, function (error) { return console.error('Error', error); });
    };
    AdminConsoleComponent.prototype.ngOnInit = function () {
    };
    AdminConsoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-console',
            template: __webpack_require__(/*! ./admin-console.component.html */ "./src/app/admin-console/admin-console.component.html"),
            styles: [__webpack_require__(/*! ./admin-console.component.css */ "./src/app/admin-console/admin-console.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_console_service__WEBPACK_IMPORTED_MODULE_3__["AdminConsoleService"], _enrollment_service__WEBPACK_IMPORTED_MODULE_2__["EnrollmentService"]])
    ], AdminConsoleComponent);
    return AdminConsoleComponent;
}());



/***/ }),

/***/ "./src/app/admin-console/admin-console.service.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-console/admin-console.service.ts ***!
  \********************************************************/
/*! exports provided: AdminConsoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminConsoleService", function() { return AdminConsoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AdminConsoleService = /** @class */ (function () {
    function AdminConsoleService(http) {
        this.http = http;
        this._url = "./assets/data/products.json";
    }
    AdminConsoleService.prototype.getProducts = function () {
        return this.http.get(this._url);
    };
    AdminConsoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminConsoleService);
    return AdminConsoleService;
}());



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
/* harmony import */ var _admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-console/admin-console.component */ "./src/app/admin-console/admin-console.component.ts");






var routes = [
    { path: '', component: _authorization_page_authorization_page_component__WEBPACK_IMPORTED_MODULE_4__["AuthorizationPageComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'admin', component: _admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_5__["AdminConsoleComponent"] }
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

module.exports = ".spacer{\r\n  padding: 10px;\r\n}\r\n.navBar {\r\n  justify-content: space-between;\r\n}\r\nmat-toolbar{\r\n  height: 10vh;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2Vye1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm5hdkJhciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhcntcclxuICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-console/admin-console.component */ "./src/app/admin-console/admin-console.component.ts");
/* harmony import */ var _enrollment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enrollment.service */ "./src/app/enrollment.service.ts");
/* harmony import */ var _admin_console_admin_console_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-console/admin-console.service */ "./src/app/admin-console/admin-console.service.ts");
/* harmony import */ var _dialog_window_dialog_window_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog-window/dialog-window.component */ "./src/app/dialog-window/dialog-window.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _authorization_page_authorization_page_component__WEBPACK_IMPORTED_MODULE_7__["AuthorizationPageComponent"],
                _admin_console_admin_console_component__WEBPACK_IMPORTED_MODULE_11__["AdminConsoleComponent"],
                _dialog_window_dialog_window_component__WEBPACK_IMPORTED_MODULE_14__["DialogWindowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"]
            ],
            providers: [_enrollment_service__WEBPACK_IMPORTED_MODULE_12__["EnrollmentService"], _admin_console_admin_console_service__WEBPACK_IMPORTED_MODULE_13__["AdminConsoleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            exports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]
            ]
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

module.exports = ".bg {\r\n  background-color: #DDDDDD;\r\n  width: 100%;\r\n  height: 100vh;\r\n  max-width: 1920px;\r\n  min-width: 900px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.form-container {\r\n  padding: 40px 30px;\r\n  margin-top: 5vh;\r\n  margin-left: 10vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yaXphdGlvbi1wYWdlL2F1dGhvcml6YXRpb24tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hdXRob3JpemF0aW9uLXBhZ2UvYXV0aG9yaXphdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXgtd2lkdGg6IDE5MjBweDtcclxuICBtaW4td2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHZoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/authorization-page/authorization-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/authorization-page/authorization-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg\">\r\n  {{loginForm.value | json}}\r\n  {{registrationForm.value | json}}\r\n  <mat-toolbar color=\"primary\" class=\"navBar\">\r\n    <div>\r\n      Interactive Shopping List\r\n    </div>\r\n    <div>\r\n      <span>Home</span>\r\n      <span class=\"spacer\"></span>\r\n      <span>About</span>\r\n    </div>\r\n  </mat-toolbar>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2 col-sm-4 col-xs-12\"></div>\r\n    <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n      <form [formGroup]=\"loginForm\" class=\"form-container\">\r\n        <span class=\"mat-display-1\">Log in</span>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"form-group\">\r\n          <label class=\"mat-title\">Username</label>\r\n          <input matInput [class.is-invalid]=\"userName.invalid && userName.touched\"\r\n                 formControlName=\"userName\" type=\"text\" class=\"form-control\" placeholder=\"Username\"/>\r\n          <small [class.d-none]=\"userName.valid || userName.untouched\" class=\"text-danger\">Username is required\r\n          </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"mat-title\">Password</label>\r\n          <input matInput [class.is-invalid]=\"password.invalid && password.touched\"\r\n                 formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\"/>\r\n          <small [class.d-none]=\"password.valid || password.untouched\" class=\"text-danger\">Password is required</small>\r\n        </div>\r\n        <button mat-raised-button color=\"primary\" (click)=\"signIn()\" [disabled]=\"!loginForm.valid\" type=\"submit\">\r\n          Log in\r\n        </button>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n      <form [formGroup]=\"registrationForm\" class=\"form-container\">\r\n        <span class=\"mat-display-1\">Create new account</span>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"form-group\">\r\n          <label class=\"mat-title\">E-mail</label>\r\n          <input matInput [class.is-invalid]=\"newEmail.invalid && newEmail.touched\" formControlName=\"newEmail\" type=\"email\"\r\n                 class=\"form-control\" placeholder=\"Email\"/>\r\n          <small [class.d-none]=\"newEmail.valid || newEmail.untouched\" class=\"text-danger\">E-mail is required</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"mat-title\">Username</label>\r\n          <input matInput [class.is-invalid]=\"newUserName.invalid && newUserName.touched\" formControlName=\"newUserName\"\r\n                 type=\"email\" class=\"form-control\" placeholder=\"Username\"/>\r\n          <div *ngIf=\"newUserName.invalid && newUserName.touched\">\r\n            <small *ngIf=\"newUserName.errors?.required\" [class.d-none]=\"newUserName.valid || newUserName.untouched\"\r\n                   class=\"text-danger\">Username is required\r\n            </small>\r\n            <small *ngIf=\"newUserName.errors?.minlength\" [class.d-none]=\"newUserName.valid || newUserName.untouched\"\r\n                   class=\"text-danger\">Username need to be at least 4 characters long\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"mat-title\">Password</label>\r\n          <input matInput [class.is-invalid]=\"newPassword.invalid && newPassword.touched\" formControlName=\"newPassword\"\r\n                 type=\"password\" class=\"form-control\" placeholder=\"Password\"/>\r\n          <div *ngIf=\"newPassword.invalid && newPassword.touched\">\r\n            <small *ngIf=\"newPassword.errors?.required\" [class.d-none]=\"newPassword.valid || newPassword.untouched\"\r\n                   class=\"text-danger\">Password is required\r\n            </small>\r\n            <small *ngIf=\"newPassword.errors?.minlength\" [class.d-none]=\"newPassword.valid || newPassword.untouched\"\r\n                   class=\"text-danger\">Password need to be at least 8 characters long\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"mat-title\">Confirm password</label>\r\n          <input matInput\r\n            [class.is-invalid]=\"registrationForm.errors?.misMatch || newConfirmPassword.invalid && newConfirmPassword.touched\"\r\n            formControlName=\"newConfirmPassword\" type=\"password\" class=\"form-control\" placeholder=\"Confirm password\"/>\r\n          <div *ngIf=\"registrationForm.errors?.misMatch || newConfirmPassword.invalid && newConfirmPassword.touched\">\r\n            <small class=\"text-danger\" *ngIf=\"newConfirmPassword.errors?.required\">You need to confirm password</small>\r\n            <small class=\"text-danger\" *ngIf=\"registrationForm.errors?.misMatch\">Passwords must match</small>\r\n          </div>\r\n        </div>\r\n        <button mat-raised-button color=\"primary\" (click)=\"signUp()\" [disabled]=\"!registrationForm.valid\" type=\"submit\">\r\n          Register\r\n        </button>\r\n      </form>\r\n\r\n    </div>\r\n    <div class=\"col-md-2 col-sm-4 col-xs-12\"></div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _enrollment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enrollment.service */ "./src/app/enrollment.service.ts");






var AuthorizationPageComponent = /** @class */ (function () {
    function AuthorizationPageComponent(fb, _router, _service) {
        this.fb = fb;
        this._router = _router;
        this._service = _service;
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
    AuthorizationPageComponent.prototype.ngOnInit = function () {
    };
    ;
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
    AuthorizationPageComponent.prototype.signIn = function () {
        this._service.sendData(this.loginForm.value)
            .subscribe(function (response) { return console.log(alert("You have been successfully signed up! "), response); }, function (error) { return console.error('Error', error); });
        if (this.loginForm.get('userName').value == 'admin' && this.loginForm.get('password').value == 'admin') {
            this._router.navigateByUrl('admin');
        }
        else {
            this._router.navigateByUrl('dashboard');
        }
        // this._service.getAnswer()
        //   .subscribe(
        //     response => console.log("dane", response)
        //   );
        // .subscribe(
        //   response => console.log(this._router.navigateByUrl('dashboard'), response),
        //   error => console.error('Error', error)
        // );
    };
    AuthorizationPageComponent.prototype.signUp = function () {
        this._service.sendData(this.registrationForm.value)
            .subscribe(function (response) { return console.log(alert("You have been successfully signed up! "), response); }, function (error) { return console.error('Error', error); });
    };
    AuthorizationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authorization-page',
            template: __webpack_require__(/*! ./authorization-page.component.html */ "./src/app/authorization-page/authorization-page.component.html"),
            styles: [__webpack_require__(/*! ./authorization-page.component.css */ "./src/app/authorization-page/authorization-page.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _enrollment_service__WEBPACK_IMPORTED_MODULE_5__["EnrollmentService"]])
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

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-sidenav-container, mat-sidenav, mat-sidenav-content{\r\n  height: 90vh;\r\n}\r\n\r\nmat-sidenav, mat-sidenav-content {\r\n  padding: 16px;\r\n}\r\n\r\nmat-sidenav {\r\n  background-color: #3F51B5;\r\n  color: white;\r\n}\r\n\r\n*:focus {\r\n  outline: none !important;\r\n  border: 0 !important;\r\n}\r\n\r\n.list-item {\r\n  margin:20px;\r\n  width: 100%;\r\n  border-bottom: 1px solid #CCC;\r\n  font-size:20px;\r\n}\r\n\r\n.list-item button .material-icons {\r\n  font-size: 30px;\r\n  color:#9d9d9d;\r\n  padding: 0;\r\n\r\n}\r\n\r\n.list-item:hover button {\r\n  display: block;\r\n}\r\n\r\n.list-item button {\r\n  display: none;\r\n  float: right;\r\n  margin: -4px 5px;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.list-item /deep/ .md-checkbox-label {\r\n  margin: 10px 0;\r\n}\r\n\r\n.completed {\r\n  color: #9d9d9d;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.fab-add {\r\n  position: absolute;\r\n  right: 30px;\r\n  top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LCBtYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gIGhlaWdodDogOTB2aDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYsIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4qOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxpc3QtaXRlbSB7XHJcbiAgbWFyZ2luOjIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDQ0M7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW0gYnV0dG9uIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiM5ZDlkOWQ7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbi5saXN0LWl0ZW06aG92ZXIgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxpc3QtaXRlbSBidXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogLTRweCA1cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubGlzdC1pdGVtIC9kZWVwLyAubWQtY2hlY2tib3gtbGFiZWwge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uY29tcGxldGVkIHtcclxuICBjb2xvcjogIzlkOWQ5ZDtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmZhYi1hZGQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzBweDtcclxuICB0b3A6IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"navBar\">\r\n  <div>\r\n    <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    Interactive Shopping List\r\n  </div>\r\n  <div>\r\n    <span>Home</span>\r\n    <span class=\"spacer\"></span>\r\n    <span>About</span>\r\n    <span class=\"spacer\"></span>\r\n    <span>Log out</span>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-sidenav-container>\r\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" role=\"navigation\">\r\n    <mat-nav-list class=\"mat-title\">\r\n      <a mat-list-item>\r\n        <mat-icon>list_alt</mat-icon>\r\n        Andy's list</a>\r\n      <a mat-list-item>\r\n        <mat-icon>list_alt</mat-icon>\r\n        Saturday shopping list</a>\r\n      <a mat-list-item>\r\n        <mat-icon>list_alt</mat-icon>\r\n        Family list</a>\r\n      <button mat-mini-fab color=\"primary\">\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <!--<mat-selection-list >-->\r\n      <!--<mat-list-option matBadge=\"3\" >Bananas</mat-list-option>-->\r\n      <!--<mat-list-option matBadge=\"12\">Milk</mat-list-option>-->\r\n      <!--<mat-list-option matBadge=\"9\">Bread</mat-list-option>-->\r\n      <!--<button  mat-fab color=\"primary\" style=\"float:left\">-->\r\n        <!--<mat-icon>add</mat-icon>-->\r\n      <!--</button>-->\r\n      <!--<button mat-fab color=\"primary\" style=\"float:right\">-->\r\n        <!--<mat-icon>check</mat-icon>-->\r\n      <!--</button>-->\r\n    <!--</mat-selection-list>-->\r\n    <mat-card class=\"todoapp\">\r\n      <mat-card-content *ngIf=\"todoList.length\">\r\n        <mat-selection-list >\r\n\r\n            <mat-list-item  *ngFor=\"let todo of todoList; let index=index\" class=\"list-item\">\r\n\r\n              <button mat-fab (click)=\"remove(index)\" color=\"primary\" style=\"float:right\">\r\n                <mat-icon >delete_forever</mat-icon>\r\n              </button>\r\n\r\n              <button mat-fab (click)=\"todoDialog(todo)\" color=\"primary\"\r\n                      [disabled]=\"todo.completed\" style=\"float:right\">\r\n                <mat-icon>mode_edit</mat-icon>\r\n              </button>\r\n\r\n              <mat-checkbox style=\"padding-left:15px\" color=\"primary\" type=\"checkbox\" [name]=\"'item'+index\" [(ngModel)]=\"todo.completed\" >\r\n                <span [class.completed]=\"todo.completed\">{{todo.title}}</span>\r\n              </mat-checkbox>\r\n            </mat-list-item>\r\n\r\n        </mat-selection-list >\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <br>\r\n    <button mat-fab color=\"primary\" style=\"float:left\" (click)=\"todoDialog()\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n\r\n    <app-dialog-window  [title]=\"'Nowy Zakup'\"\r\n                        [template]=\"'Wpisz co chcesz kupić:'\"\r\n                        [placeholder]=\"'Co chcesz kupić?'\"\r\n                        [okText]=\"okButtonText\"\r\n                        [value]=\"fieldValue\"\r\n                        (valueEmitted)=\"updateTodo($event)\"\r\n                        [showPrompt]=\"showDialog\">\r\n    </app-dialog-window>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

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
        this.opened = true;
        this.showDialog = false;
        this.editingTodo = null;
        this.fieldValue = '';
        this.todoList = [];
        this.okButtonText = 'Dodaj';
    }
    DashboardComponent.prototype.todoDialog = function (todo) {
        if (todo === void 0) { todo = null; }
        this.okButtonText = 'Dodaj';
        this.fieldValue = '';
        this.editingTodo = todo;
        if (todo) {
            this.fieldValue = todo.title;
            this.okButtonText = 'Edytuj';
        }
        this.showDialog = true;
    };
    DashboardComponent.prototype.remove = function (index) {
        this.todoList.splice(index, 1);
    };
    DashboardComponent.prototype.editTodo = function (title) {
        this.editingTodo.title = title;
    };
    DashboardComponent.prototype.updateTodo = function (title) {
        if (title) {
            title = title.trim();
            if (this.editingTodo) {
                this.editTodo(title);
            }
            else {
                this.addTodo(title);
            }
        }
        this.hideDialog();
    };
    DashboardComponent.prototype.addTodo = function (title) {
        var todo = { title: title, completed: false };
        this.todoList.push(todo);
    };
    DashboardComponent.prototype.hideDialog = function () {
        this.showDialog = false;
        this.editingTodo = null;
        this.fieldValue = null; // make sure Input is new
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dialog-window/dialog-window.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dialog-window/dialog-window.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto);\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  z-index: 2;\r\n}\r\n.modalDialog {\r\n  max-width: 400px;\r\n  position: relative;\r\n  margin: 10% auto;\r\n  padding: 5px 20px 25px;\r\n  background: #fff;\r\n}\r\n.full-width { width: 100%; }\r\n.center { text-align: center; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nLXdpbmRvdy9kaWFsb2ctd2luZG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQTJEO0FBQzNEO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBRUEsY0FBYyxXQUFXLEVBQUU7QUFFM0IsVUFBVSxrQkFBa0IsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy13aW5kb3cvZGlhbG9nLXdpbmRvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7XHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubW9kYWxEaWFsb2cge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMTAlIGF1dG87XHJcbiAgcGFkZGluZzogNXB4IDIwcHggMjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7IHdpZHRoOiAxMDAlOyB9XHJcblxyXG4uY2VudGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dialog-window/dialog-window.component.html":
/*!************************************************************!*\
  !*** ./src/app/dialog-window/dialog-window.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" *ngIf=\"showPrompt\">\n  <mat-card class=\"modalDialog\">\n    <mat-toolbar color=\"primary\">\n      {{title}}\n    </mat-toolbar>\n    <mat-card-content>\n      <br>{{template}}<br><br>\n      <mat-form-field class=\"full-width\">\n        <input matInput [placeholder]=\"placeholder\"\n               [(ngModel)]=\"value\"\n               (keyup.enter)=\"emitValue(value)\"\n               (keyup.escape)=\"emitValue()\"/>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions class=\"center\">\n      <button mat-button (click)=\"emitValue(null)\" color=\"primary\">{{cancelText}}</button>\n      <button mat-raised-button (click)=\"emitValue(value)\" color=\"primary\">{{okText}}</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/dialog-window/dialog-window.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dialog-window/dialog-window.component.ts ***!
  \**********************************************************/
/*! exports provided: DialogWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogWindowComponent", function() { return DialogWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogWindowComponent = /** @class */ (function () {
    function DialogWindowComponent() {
        this.valueEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.okText = 'OK';
        this.cancelText = 'Wyjdź';
    }
    DialogWindowComponent.prototype.emitValue = function (value) {
        this.valueEmitted.emit(value);
    };
    DialogWindowComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogWindowComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DialogWindowComponent.prototype, "showPrompt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogWindowComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogWindowComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogWindowComponent.prototype, "template", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogWindowComponent.prototype, "okText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DialogWindowComponent.prototype, "cancelText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DialogWindowComponent.prototype, "valueEmitted", void 0);
    DialogWindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-window',
            template: __webpack_require__(/*! ./dialog-window.component.html */ "./src/app/dialog-window/dialog-window.component.html"),
            styles: [__webpack_require__(/*! ./dialog-window.component.css */ "./src/app/dialog-window/dialog-window.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogWindowComponent);
    return DialogWindowComponent;
}());



/***/ }),

/***/ "./src/app/enrollment.service.ts":
/*!***************************************!*\
  !*** ./src/app/enrollment.service.ts ***!
  \***************************************/
/*! exports provided: EnrollmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrollmentService", function() { return EnrollmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EnrollmentService = /** @class */ (function () {
    function EnrollmentService(_http) {
        this._http = _http;
        this._url = 'http://localhost:3000/enroll';
    }
    EnrollmentService.prototype.sendData = function (userData) {
        return this._http.post(this._url, userData);
    };
    EnrollmentService.prototype.getAnswer = function () {
        return this._http.get(this._url);
    };
    EnrollmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EnrollmentService);
    return EnrollmentService;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [MaterialComponents],
            exports: [MaterialComponents]
        })
    ], MaterialModule);
    return MaterialModule;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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