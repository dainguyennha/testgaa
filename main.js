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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");







var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] }
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

module.exports = "mat-toolbar{\n    margin:0;\n    padding: 0 5%;\n    background: #627D98;\n    color: white;\n    font-family: \"Proxima Nova\";\n    position: fixed;\n    top:0;\n    \n}\n\nrouter-outlet{\n    background: #BCCCDC\n}\n\n.navl{\n    /* width: 10%; */\n\n}\n\n.navl button{\n        /* background: #0A6C74; */\n    font-size: xx-large;\n    padding: 10px;\n    border-radius: 12px;\n\n}\n\n.navc{\n    /* width: 40%; */\n    text-align: right;\n    transition: all 1s linear;\n    /* margin-left: 10%; */\n}\n\n.navc button{\n    font-size: 18px;\n    font-weight: 400;\n\n}\n\n.search{\n    /* width: 30%; */\n    text-align: right;\n}\n\n#ddc{\n    opacity: 1;\n    right: 0;\n\n}\n\n.navr{\n    /* width: 20%; */\n}\n\n.navr button{\n    float: right;\n}\n\n.clear{\n    clear: both;\n}\n\n.dr-user:hover{\n    background: none\n}\n\n.nav-remaining-space{\n    flex: 1 1 auto;\n}\n\n/* ::-webkit-input-placeholder */\n\n.nav-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n.joy{\n      font-size: 26px;\n  }\n\n.tu{\n      font-size: 26px;\n  }\n\n.dot{\n      color: #0A6C74;\n\n  }\n\n.be{\n      background: #0A6C74;\n      border-radius: 10px;\n      padding: 0 6px;\n  }\n\nmat-sidenav ul li{\n      list-style-type: none;\n      display: block;\n  }\n\nmat-sidenav ul li button{\n      display: block;\n      width: 100%;\n      text-align: left;\n      color:rgba(0,0,0,.5)\n  }\n\nmat-sidenav ul{\n    padding-left: 0;\n  }\n\n.dropdown-content {\n    display: none;\n    opacity: 0;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 135px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 3;\n    top:50px;\n    border-radius: 10px;\n    transition: all 2s ease-in-out;\n  }\n\n.dropdown-content button {\n    float: none;\n    color: black;\n    padding: 5px 16px;\n    text-decoration: none;\n    display: block;\n    text-align: left;\n    width: 100%;\n  }\n\ndiv.view-container {\n    padding: 30px 15px;\n    margin: 0 auto;\n    max-width: 90%;\n    min-height: calc(100vh - 399px)\n  }\n\n/* .search{\n     position: relative;\n     padding: 7px 10px 7px 7px;\n     border: none;\n     border-radius: 20px;\n     width: 127px;\n } */\n\n#btn-search{\n     /* position: absolute; */\n     background: #0A6C74;\n     border-radius: 0 16px 16px 0;\n }\n\n#mtg{\n      padding: 0 3% !important ; \n      z-index: 3;\n  }\n\n.show {\n    display: block;\n  }\n\ninput[type=text] {\n    width: 53px;\n    padding: 11px 9px 9px 9px;;\n    border-radius: 16px 0 0 16px;\n    transition: width 0.4s ease-in-out;\n    border: none;\n  }\n\n/* When the input field gets focus, change its width to 50% */\n\ninput[type=text]:focus {\n    width: 50%;\n    outline: none;\n\n  }\n\n#input-search-toggle{\n    width: 39px;\n    padding: 11px 9px 9px 9px;\n    border-radius: 16px 0 0 16px;\n    transition: width 0.4s ease-in-out;\n    border: 1px #829AB1 solid;\n  }\n\n#input-search-toggle:focus{\n      width: 60%;\n    outline: none;\n\n  }\n\n#btn-search-toggle{\n    background: #0A6C74;\n    border-radius: 0 16px 16px 0;\n    width: 0px;\n    margin: 0;\n    padding: 6px 18px;\n  }\n\n/* footer */\n\nfooter {\n    /* width: 100%; */\n    background-color: #3B3B3B;\n    color: #D9E2EC;\n    letter-spacing: 1px;\n    font-weight: 300;\n    line-height: 130%;\n    font-family: \"500 20px/32px Roboto\",\"Helvetica Neue\",sans-serif;\n    padding: 0;\n    font-size: 15px;\n  }\n\nfooter>div:first-child {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 15px;\n  }\n\n.wrap-ft{\n    padding: 3% 4% 20px;\n\n  }\n\n.bottom-ft{\n    text-align: center;\n    padding: 15px 0;\n    background: #515151;\n  }\n\n.title{\n    color: white;\n    font-weight: 900;\n    font-size: large;\n  }\n\n.grid1-of-3{\n    margin-left: 25px;\n}\n\n.grid1-of-3:first-child{\n    margin-left: 0;\n}\n\nli{\n    list-style-type: none;\n    margin-bottom: 7px;\n\n}\n\n.content{\n    line-height: 140%;\n}\n\n.content i{\n    float: left;\n    font-size: 18px;\n    margin: 3px 0 0 -20px;\n}\n\n@media only screen and (max-width: 800px){\n    footer>div:first-child {\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-gap: 15px;\n      }\n\n      .grid1-of-3{\n        margin-top: 25px;\n        margin-left: 0;\n    }\n    \n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixLQUFLOztBQUVUOztBQUVBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBQ0E7UUFDUSx5QkFBeUI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7O0FBRXZCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFFBQVE7O0FBRVo7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0EsZ0NBQWdDOztBQUNoQztJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBQ0E7TUFDSSxlQUFlO0VBQ25COztBQUNBO01BQ0ksZUFBZTtFQUNuQjs7QUFDQTtNQUNJLGNBQWM7O0VBRWxCOztBQUNBO01BQ0ksbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixjQUFjO0VBQ2xCOztBQUNBO01BQ0kscUJBQXFCO01BQ3JCLGNBQWM7RUFDbEI7O0FBQ0E7TUFDSSxjQUFjO01BQ2QsV0FBVztNQUNYLGdCQUFnQjtNQUNoQjtFQUNKOztBQUNBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkO0VBQ0Y7O0FBQ0Q7Ozs7OztJQU1HOztBQUNIO0tBQ0ksd0JBQXdCO0tBQ3hCLG1CQUFtQjtLQUNuQiw0QkFBNEI7Q0FDaEM7O0FBQ0M7TUFDSSx5QkFBeUI7TUFDekIsVUFBVTtFQUNkOztBQUNBO0lBQ0UsY0FBYztFQUNoQjs7QUFDQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyxZQUFZO0VBQ2Q7O0FBRUEsNkRBQTZEOztBQUM3RDtJQUNFLFVBQVU7SUFDVixhQUFhOztFQUVmOztBQUNBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtFQUMzQjs7QUFDQTtNQUNJLFVBQVU7SUFDWixhQUFhOztFQUVmOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsU0FBUztJQUNULGlCQUFpQjtFQUNuQjs7QUFFRixXQUFXOztBQUNUO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsK0RBQStEO0lBQy9ELFVBQVU7SUFDVixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsbUJBQW1COztFQUVyQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFDRTtJQUNFO1FBQ0ksYUFBYTtRQUNiLDBCQUEwQjtRQUMxQixjQUFjO01BQ2hCOztNQUVBO1FBQ0UsZ0JBQWdCO1FBQ2hCLGNBQWM7SUFDbEI7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFye1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgYmFja2dyb3VuZDogIzYyN0Q5ODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiUHJveGltYSBOb3ZhXCI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIFxufVxuXG5yb3V0ZXItb3V0bGV0e1xuICAgIGJhY2tncm91bmQ6ICNCQ0NDRENcbn1cbi5uYXZse1xuICAgIC8qIHdpZHRoOiAxMCU7ICovXG5cbn1cbi5uYXZsIGJ1dHRvbntcbiAgICAgICAgLyogYmFja2dyb3VuZDogIzBBNkM3NDsgKi9cbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxufVxuLm5hdmN7XG4gICAgLyogd2lkdGg6IDQwJTsgKi9cbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgbGluZWFyO1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMCU7ICovXG59XG4ubmF2YyBidXR0b257XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cbi5zZWFyY2h7XG4gICAgLyogd2lkdGg6IDMwJTsgKi9cbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiNkZGN7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcblxufVxuLm5hdnJ7XG4gICAgLyogd2lkdGg6IDIwJTsgKi9cbn1cbi5uYXZyIGJ1dHRvbntcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uY2xlYXJ7XG4gICAgY2xlYXI6IGJvdGg7XG59XG4uZHItdXNlcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiBub25lXG59XG4ubmF2LXJlbWFpbmluZy1zcGFjZXtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbi8qIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciAqL1xuLm5hdi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmpveXtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxuICAudHV7XG4gICAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbiAgLmRvdHtcbiAgICAgIGNvbG9yOiAjMEE2Qzc0O1xuXG4gIH1cbiAgLmJle1xuICAgICAgYmFja2dyb3VuZDogIzBBNkM3NDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwIDZweDtcbiAgfVxuICBtYXQtc2lkZW5hdiB1bCBsaXtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIG1hdC1zaWRlbmF2IHVsIGxpIGJ1dHRvbntcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6cmdiYSgwLDAsMCwuNSlcbiAgfVxuICBtYXQtc2lkZW5hdiB1bHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIG1pbi13aWR0aDogMTM1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgei1pbmRleDogMztcbiAgICB0b3A6NTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYnV0dG9uIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgZGl2LnZpZXctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDM5OXB4KVxuICB9XG4gLyogLnNlYXJjaHtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICBwYWRkaW5nOiA3cHggMTBweCA3cHggN3B4O1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgIHdpZHRoOiAxMjdweDtcbiB9ICovXG4gI2J0bi1zZWFyY2h7XG4gICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICAgYmFja2dyb3VuZDogIzBBNkM3NDtcbiAgICAgYm9yZGVyLXJhZGl1czogMCAxNnB4IDE2cHggMDtcbiB9XG4gICNtdGd7XG4gICAgICBwYWRkaW5nOiAwIDMlICFpbXBvcnRhbnQgOyBcbiAgICAgIHotaW5kZXg6IDM7XG4gIH1cbiAgLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiA1M3B4O1xuICAgIHBhZGRpbmc6IDExcHggOXB4IDlweCA5cHg7O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMCAwIDE2cHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIFdoZW4gdGhlIGlucHV0IGZpZWxkIGdldHMgZm9jdXMsIGNoYW5nZSBpdHMgd2lkdGggdG8gNTAlICovXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICB9XG4gICNpbnB1dC1zZWFyY2gtdG9nZ2xle1xuICAgIHdpZHRoOiAzOXB4O1xuICAgIHBhZGRpbmc6IDExcHggOXB4IDlweCA5cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAwIDAgMTZweDtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlcjogMXB4ICM4MjlBQjEgc29saWQ7XG4gIH1cbiAgI2lucHV0LXNlYXJjaC10b2dnbGU6Zm9jdXN7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgfVxuXG4gICNidG4tc2VhcmNoLXRvZ2dsZXtcbiAgICBiYWNrZ3JvdW5kOiAjMEE2Qzc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMTZweCAxNnB4IDA7XG4gICAgd2lkdGg6IDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNnB4IDE4cHg7XG4gIH1cblxuLyogZm9vdGVyICovXG4gIGZvb3RlciB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNCM0IzQjtcbiAgICBjb2xvcjogI0Q5RTJFQztcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgZm9udC1mYW1pbHk6IFwiNTAwIDIwcHgvMzJweCBSb2JvdG9cIixcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBcbiAgZm9vdGVyPmRpdjpmaXJzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiAxNXB4O1xuICB9XG4gIC53cmFwLWZ0e1xuICAgIHBhZGRpbmc6IDMlIDQlIDIwcHg7XG5cbiAgfVxuICAuYm90dG9tLWZ0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgYmFja2dyb3VuZDogIzUxNTE1MTtcbiAgfVxuICAudGl0bGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuICAuZ3JpZDEtb2YtM3tcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbi5ncmlkMS1vZi0zOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufVxubGl7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcblxufVxuLmNvbnRlbnR7XG4gICAgbGluZS1oZWlnaHQ6IDE0MCU7XG59XG4uY29udGVudCBpe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDNweCAwIDAgLTIwcHg7XG59XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xuICAgIGZvb3Rlcj5kaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5ncmlkMS1vZi0ze1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgXG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"nav-container\" (backdropClick)=\"close()\">\n    <mat-toolbar class=\"toggle-tollbar\" id=\"mtg\">\n    <button mat-button (click)=\"sidenav.open()\" *ngIf=\"isMobile()>=1\"><i class=\"material-icons\">\n        view_headline\n      </i></button>\n    <span class=\"nav-remaining-space\"  *ngIf=\"isMobile()>=1\"></span>\n  <div class=\"navl\">\n    <button mat-button routerLinkActive=\"active\" id=\"btn_joytube\"><i class=\"joy\">joy</i><i class=\"tu\">Tu</i><i class=\"dot\">.</i><i\n        class=\"be\">be</i></button>\n  </div>\n  <span class=\"nav-remaining-space\"></span>\n  <div class=\"navc\" *ngIf=\"isMobile()==0\">\n    <button mat-button routerLinkActive=\"active\" [routerLink]=\"['/']\">Home</button>\n    <button mat-button routerLinkActive=\"active\">Bookmarks</button>\n    <button mat-button routerLinkActive=\"active\">Videos</button>\n    <button mat-button routerLinkActive=\"active\">Items</button>\n  </div>\n  <span class=\"nav-remaining-space\" *ngIf=\"isMobile()==0\"></span>\n\n  <div class=\"search\" *ngIf=\"isMobile()!=2\">\n      <input type=\"text\" name=\"search\" placeholder=\"Search..\">\n\n    <button mat-button id=\"btn-search\"><i class=\"material-icons\">\n        search\n      </i></button>\n  </div>\n\n  <div class=\"navr\">\n    <button mat-button class=\"dr-user\" (click)=\"dropdown()\" >\n      <i class=\"material-icons\">\n        perm_identity\n      </i><i class=\"material-icons\">\n        arrow_drop_down</i>\n    </button>\n    <div class=\"dropdown-content\" id=\"ddc\"  >\n      <button mat-button (click)=\"dropdown()\" [routerLink]=\"['/profile/1']\">Profile</button>\n      <button mat-button (click)=\"dropdown()\" [routerLink]=\"['/login']\">LogOut</button>\n    </div>\n\n    <!-- <div class=\"clear\"></div> -->\n    <button mat-button [routerLink]=\"[ '/login' ]\">Login or Register</button>\n    <!-- <button mat-button>Register</button> -->\n  </div>\n\n</mat-toolbar>\n<mat-sidenav #sidenav (keydown.escape)=\"close()\" disableClose>\n  <ul>\n    <li><button mat-button routerLinkActive=\"active\">Home</button></li>\n    <li><button mat-button routerLinkActive=\"active\">Bookmarks</button></li>\n    <li><button mat-button routerLinkActive=\"active\">Videos</button></li>\n    <li><button mat-button routerLinkActive=\"active\">Items</button></li>\n    <li><div class=\"search-toggle\" *ngIf=\"isMobile()==2\" style=\"display: block\">\n        <input type=\"text\" name=\"search\" placeholder=\"Search..\" style=\"float: left;\" id=\"input-search-toggle\">\n  \n      <button mat-button id=\"btn-search-toggle\"><i class=\"material-icons\" style=\"float: left;\">\n          search\n        </i></button>\n        <div class=\"clear\"></div>\n    </div></li>\n  </ul>\n</mat-sidenav>\n\n<div class=\"view-container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n\n\n\n\n<footer *ngIf=\"router.url != '/login' && router.url != '/register'\">\n  <div class=\"wrap-ft\">\n    <div class=\"grid1-of-3\">\n      <div class=\"title\">ABOUT JOYTU.BE</div>\n      <hr/>\n      <div class=\"content\">Our deep techs transform any normal video into interactive video. With joyTu.be, viewers can bookmark, share, comment,\n        ask questions about anything they like in your videos. We provide brands and agencies a refreshing and effective\n        way to engage your customers, promote and sell your products/services via interactive videos.</div>\n      </div>\n      <div class=\"grid1-of-3\">\n        <div class=\"title\">BRANDS AND AGENCIES</div>\n        <hr/>\n        <div class=\"content\">\n          <ul>\n            <li><i class=\"material-icons\">\n              check_box\n              </i>For customized solutions, please email us</li>\n            \n            <li><i class=\"material-icons\">\n              check_box\n              </i>Send your videos and product info via Dropbox, Google Drive, Box, or upload directly to joyTu.be</li>\n            \n            <li><i class=\"material-icons\">\n              check_box\n              </i>After processing, your interactive videos will be available at your joyTu.be page, and can be embeded (iframe)\n              to any website supporting our HTML5 interactive player</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"grid1-of-3\">\n          <div class=\"title\">CONTACT US</div>\n          <hr/>\n          <div class=\"content\">\n            <ul>\n              <li>\n                  <i class=\"material-icons\">\n                      mail_outline\n                      </i>we@joyTu.be\n              </li>\n              <li>\n                  <i class=\"material-icons\">\n                      place\n                      </i>The Hangar @ iCube, National University of Singapore, 21 Heng Mui Keng Terrace, Singapore 119613\n              </li>\n            </ul>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom-ft\">© 2018 joyTu.be - All rights reserved</div>\n  </footer>\n  \n</mat-sidenav-container>"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_eref, router) {
        this._eref = _eref;
        this.router = router;
        this.toggle = null;
        this.title = 'joyTube';
        this.onresize();
    }
    AppComponent.prototype.close = function () {
        this.sidenav.close();
    };
    // searchFormControl = new FormControl('', [
    //   Validators.email,
    // ]);
    AppComponent.prototype.isMobile = function () {
        if (this.screenWidth > 800) {
            return 0;
        }
        if (this.screenWidth < 450) {
            return 2;
        }
        return 1;
    };
    AppComponent.prototype.onClick = function (targetElement) {
        var clickedInside = this._eref.nativeElement.contains(targetElement);
        if (!clickedInside) {
            document.querySelector('#ddc').style.display = 'none';
            this.toggle = true;
        }
    };
    AppComponent.prototype.onresize = function (event) {
        this.screenWidth = window.innerWidth;
    };
    AppComponent.prototype.dropdown = function () {
        if (this.toggle == true) {
            document.querySelector('#ddc').style.display = 'block';
            this.toggle = false;
        }
        else if (this.toggle == false) {
            document.querySelector('#ddc').style.display = 'none';
            this.toggle = true;
        }
        else {
            document.querySelector('#ddc').style.display = 'block';
            this.toggle = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppComponent.prototype, "sidenav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onresize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div class=\"video-item\">\n    <div class=\"video-wrap\">\n        <video  controls>\n          <source  src=\"{{source}}\"  type='video/mp4'>\n        </video>\n      </div>\n    </div>\n\n  <div class=\"video-description-item\">\n    <h2>joyTu.be interactive video platform </h2>\n    <h4>Give your customers relevant info at a touch. Allow them to bookmark, share anything. Drive your brand-customer conversation\n      by allowing them ask/discuss about anything they like. Superior result: up to 40% CTR. Embeded HTML5 interactive video\n      player. Scalable video processing and streaming services. Detailed analytics (impressions, user interactions, CTR).\n      Information management tool for brands and agencies.</h4>\n  </div>\n\n  <div class=\"img-description-item1\">\n    <h2>Relevant info at a touch</h2>\n    <h4>Imagine. A customer is watching your video and wondering where's that scene. Just a touch, and she can get the information\n      right there, right within the video. How will she feel?</h4>\n  </div>\n\n  <div class=\"img-item1\">\n    <img src=\"../assets/img/home-dress.jpg\" />\n  </div>\n\n\n  <div class=\"img-item2\">\n    <img src=\"../assets/img/home-bag.jpg\" />\n  </div>\n\n  <div class=\"img-desciption-item2\">\n    <h2>Drive brand-consumer conversation</h2>\n    <h4>What if you miss something? It could be a low-ranking product/feature in your mind, but it's essential for your customers.\n      With joyTu.be interactive videos, they can simply touch it to comment, ask for more information right within the video.</h4>\n  </div>\n  \n  <div class=\"img-description-item3\">\n    <h2>Bookmark, share anything in video</h2>\n    <h4>Imagine. A customer is watching your video and sees a beautiful dress. Just a touch, she can see the price, click to find out more, or even buy it. She can also bookmark the dress, share and discuss with friends. Her bookmark is always updated with the latest information, so she won't miss any sale. \n        We're helping our clients to do that.</h4>\n  </div>\n  <div class=\"img-item3\">\n    <img src=\"../assets/img/joyTu.be--MBS.jpg\">\n  </div>\n\n\n  <div class=\"img-item4\">\n    <img src=\"../assets/img/home-brands.png\" />\n  </div>\n\n  <div class=\"img-description-item4\">\n    <h2>Trusted by brands and agencies</h2>\n    <h4>We work closely with brands and creative/media/PR agencies to craft unique solutions for their needs. We constantly monitor\n      and inform our clients during their campaign to identify hotspots (e.g., their best traffic sources, their most engaged\n      customer segments) and possible improvements. We do not aim for short-term gains, but focus on long-term partnerships.</h4>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.source = "https://cdn.joytu.be/video/HPviet/HPviet-InkTnk/HPviet-InkTnk.mp4";
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-bg{\n    background: #E8E6E1;\n    height:100%;\n    width: 100%;\n    background-size: cover;\n    position: absolute;\n    background-position: top center;\n     z-index: -1;\n     overflow: auto;\n    /* top:0; */\n    /* bottom:0; */\n    /* left:0; */\n    /* right:0;  */\n}\nmat-card{\n    width: 25%;\n    margin: 10px auto;\n    top:30%;\n    border-radius: 20px;\n    padding: 50px 20px 20px;\n    transition: all 0.5s linear;\n    -webkit-animation-name: ttb; /* Safari 4.0 - 8.0 */\n  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */\n  animation-name: ttb;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n\n}\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes ttb {\n    from {top:0;opacity: 0;}\n    to {top: 30%; opacity: 1;}\n  }\n/* Standard syntax */\n@keyframes ttb {\n    from {top:0;opacity: 0;}\n    to {top: 30%; opacity: 1;}\n  }\nmat-form-field{\n    display: block;\n}\n.title{\n    text-align: center;\n}\n.title  h2{\n    margin: auto;\n    background: linear-gradient(60deg,#ec407a,#d81b60);\n    width: 30%;\n    padding: 18px 3px;\n    border-radius: 10px;\n    position: absolute;\n    color: #fff;\n    font-weight: 500;\n    top: -26px;\n    left: 34%;\n    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\n    font-size: 22px;\n}\n.div-hr{\n    width: 50%;\n    margin: auto;\n\n}\n.list-login-other{\n    text-align: center;\n    font-size: 25px;\n}\n.list-login-other a{\n    margin: 0 5px;\n}\n.h4-or{\n    margin: 1% auto;\n    text-align: center;\n    font-weight: 400;\n    color: gray;\n}\n.btn-signin{\n    background: #9446ED;\n    color: #fff;\n    width: 38%;\n    float: right;\n}\n.btn-register{\n    background: #38BEC9;\n    color: #fff;\n    width: 38%;\n}\nmat-checkbox{\n    color: #616E7C;\n}\nmat-card-content a{\n    float: right;\n    text-decoration: none;\n    color: #616E7C;\n}\nmat-card-actions{\n    width: 90%;\n    margin: 0 auto;\n}\n@media only screen and (max-width: 800px){\n    mat-card{\n        width: 45%;\n    }\n}\n@media only screen and (max-width: 450px){\n    mat-card{ \n        width: 80%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsK0JBQStCO0tBQzlCLFdBQVc7S0FDWCxjQUFjO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsMkJBQTJCLEVBQUUscUJBQXFCO0VBQ3BELDhCQUE4QixFQUFFLHFCQUFxQjtFQUNyRCxtQkFBbUI7RUFDbkIsOEJBQXNCO1VBQXRCLHNCQUFzQjs7QUFFeEI7QUFDQSxxQkFBcUI7QUFDckI7SUFDSSxNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDdkIsSUFBSSxRQUFRLEVBQUUsVUFBVSxDQUFDO0VBQzNCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0UsTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLElBQUksUUFBUSxFQUFFLFVBQVUsQ0FBQztFQUMzQjtBQUNGO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0RBQWtEO0lBQ2xELFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsNEVBQTRFO0lBQzVFLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJne1xuICAgIGJhY2tncm91bmQ6ICNFOEU2RTE7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgICAgei1pbmRleDogLTE7XG4gICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIHRvcDowOyAqL1xuICAgIC8qIGJvdHRvbTowOyAqL1xuICAgIC8qIGxlZnQ6MDsgKi9cbiAgICAvKiByaWdodDowOyAgKi9cbn1cbm1hdC1jYXJke1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgdG9wOjMwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB0dGI7IC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDRzOyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gIGFuaW1hdGlvbi1uYW1lOiB0dGI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG5cbn1cbi8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyB0dGIge1xuICAgIGZyb20ge3RvcDowO29wYWNpdHk6IDA7fVxuICAgIHRvIHt0b3A6IDMwJTsgb3BhY2l0eTogMTt9XG4gIH1cbiAgXG4gIC8qIFN0YW5kYXJkIHN5bnRheCAqL1xuICBAa2V5ZnJhbWVzIHR0YiB7XG4gICAgZnJvbSB7dG9wOjA7b3BhY2l0eTogMDt9XG4gICAgdG8ge3RvcDogMzAlOyBvcGFjaXR5OiAxO31cbiAgfVxubWF0LWZvcm0tZmllbGR7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlICBoMntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCNlYzQwN2EsI2Q4MWI2MCk7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAxOHB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRvcDogLTI2cHg7XG4gICAgbGVmdDogMzQlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDIzMywzMCw5OSwuNCk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uZGl2LWhye1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG59XG4ubGlzdC1sb2dpbi1vdGhlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmxpc3QtbG9naW4tb3RoZXIgYXtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuLmg0LW9ye1xuICAgIG1hcmdpbjogMSUgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogZ3JheTtcbn1cbi5idG4tc2lnbmlue1xuICAgIGJhY2tncm91bmQ6ICM5NDQ2RUQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDM4JTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uYnRuLXJlZ2lzdGVye1xuICAgIGJhY2tncm91bmQ6ICMzOEJFQzk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDM4JTtcbn1cbm1hdC1jaGVja2JveHtcbiAgICBjb2xvcjogIzYxNkU3Qztcbn1cblxubWF0LWNhcmQtY29udGVudCBhe1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM2MTZFN0M7XG59XG5tYXQtY2FyZC1hY3Rpb25ze1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xuICAgIG1hdC1jYXJke1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xuICAgIG1hdC1jYXJkeyBcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-bg\">\n  <mat-card>\n    <div class=\"title\">\n      <h2>LOGIN</h2>\n    </div>\n    <mat-card-content>\n      <mat-form-field>\n        <input matInput placeholder=\"Username\" >\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" >\n      </mat-form-field>\n      <mat-checkbox><i>Remember</i></mat-checkbox>\n      <a href=\"#\">\n        <i>Forgot password?</i></a>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button class=\"btn-register\" [routerLink]=\"[ '/register' ]\">Register</button>\n      <button mat-button class=\"btn-signin\">Sign In</button>\n      <div class=\"div-hr\"><hr></div>\n      <h4 class=\"h4-or\">Or</h4>\n      <div class=\"list-login-other\">\n        <a href=\"#\"><i class=\"fab fa-facebook-square\"></i></a>\n        <a href=\"#\"><i class=\"far fa-envelope\"></i></a>\n        <a href=\"#\"><i class=\"fab fa-twitter-square\"></i></a>\n      </div>\n\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-bg{\n    background: #E8E6E1;\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n    overflow: auto;\n    position: absolute;\n}\nmat-card{\n    transition: box-shadow 280ms cubic-bezier(.4,0,.2,1);\n    display: block;\n    position: relative;\n    padding: 16px;\n    /* z-index: 0; */\n    border-radius: 4px;\n    top: 25%;\n    width: 30%;\n    margin: 0 auto\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0RBQW9EO0lBQ3BELGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1iZ3tcbiAgICBiYWNrZ3JvdW5kOiAjRThFNkUxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbm1hdC1jYXJke1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLyogei1pbmRleDogMDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdG9wOiAyNSU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDAgYXV0b1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-bg\">\n  <mat-card>\n    <mat-tab-group>\n      \n      <mat-tab label=\"Basic\">\n        <div class=\"avatar\"><button mat-button (click)=\"onclick()\">text</button></div>\n\n      </mat-tab>\n      <mat-tab label=\"Change password\">changle</mat-tab>\n    </mat-tab-group>\n  </mat-card>\n</div> "

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activeRouter) {
        this.activeRouter = activeRouter;
    }
    ProfileComponent.prototype.onclick = function () {
        this.activeRouter.params.subscribe(function (param) { return console.log(param); });
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-bg{\n    background: #E8E6E1;\n    height:100%;\n    width: 100%;\n    background-size: cover;\n    position: absolute;\n    background-position: top center;\n     z-index: -1;\n     overflow: auto;\n    /* top:0; */\n    /* bottom:0; */\n    /* left:0; */\n    /* right:0;  */\n}\nmat-card{\n    width: 25%;\n    margin: 10px auto;\n    top:30%;\n    border-radius: 20px;\n    padding: 50px 20px 20px;\n    transition: all 0.5s linear;\n    -webkit-animation-name: ttb; /* Safari 4.0 - 8.0 */\n  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */\n  animation-name: ttb;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n\n}\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes ttb {\n    from {top:0;opacity: 0;}\n    to {top: 30%; opacity: 1;}\n  }\n/* Standard syntax */\n@keyframes ttb {\n    from {top:0;opacity: 0;}\n    to {top: 30%; opacity: 1;}\n  }\nmat-form-field{\n    display: block;\n}\n.title{\n    text-align: center;\n}\n.title  h2{\n    margin: auto;\n    background: linear-gradient(60deg,#ec407a,#d81b60);\n    width: 30%;\n    padding: 18px 3px;\n    border-radius: 10px;\n    position: absolute;\n    color: #fff;\n    font-weight: 500;\n    top: -26px;\n    left: 34%;\n    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);\n    font-size: 22px;\n}\n.div-hr{\n    width: 50%;\n    margin: auto;\n\n}\n.list-login-other{\n    text-align: center;\n    font-size: 25px;\n}\n.list-login-other a{\n    margin: 0 5px;\n}\n.h4-or{\n    margin: 1% auto;\n    text-align: center;\n    font-weight: 400;\n    color: gray;\n}\n/* .btn-signin{\n    background: #9446ED;\n    color: #fff;\n    width: 38%;\n    float: right;\n} */\n.btn-register{\n    background: #38BEC9;\n    color: #fff;\n    display: block !important;\n    width: 100%;\n}\nmat-checkbox{\n    color: #616E7C;\n}\nmat-card-content a{\n    float: right;\n    text-decoration: none;\n    color: #616E7C;\n}\nmat-card-actions{\n    width: 90%;\n    margin: 0 auto;\n}\n@media only screen and (max-width: 800px){\n    mat-card{\n        width: 45%;\n    }\n}\n@media only screen and (max-width: 450px){\n    mat-card{ \n        width: 80%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsK0JBQStCO0tBQzlCLFdBQVc7S0FDWCxjQUFjO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsMkJBQTJCLEVBQUUscUJBQXFCO0VBQ3BELDhCQUE4QixFQUFFLHFCQUFxQjtFQUNyRCxtQkFBbUI7RUFDbkIsOEJBQXNCO1VBQXRCLHNCQUFzQjs7QUFFeEI7QUFDQSxxQkFBcUI7QUFDckI7SUFDSSxNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDdkIsSUFBSSxRQUFRLEVBQUUsVUFBVSxDQUFDO0VBQzNCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0UsTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLElBQUksUUFBUSxFQUFFLFVBQVUsQ0FBQztFQUMzQjtBQUNGO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0RBQWtEO0lBQ2xELFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsNEVBQTRFO0lBQzVFLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBOzs7OztHQUtHO0FBQ0g7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJne1xuICAgIGJhY2tncm91bmQ6ICNFOEU2RTE7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgICAgei1pbmRleDogLTE7XG4gICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIHRvcDowOyAqL1xuICAgIC8qIGJvdHRvbTowOyAqL1xuICAgIC8qIGxlZnQ6MDsgKi9cbiAgICAvKiByaWdodDowOyAgKi9cbn1cbm1hdC1jYXJke1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgdG9wOjMwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDUwcHggMjBweCAyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB0dGI7IC8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDRzOyAvKiBTYWZhcmkgNC4wIC0gOC4wICovXG4gIGFuaW1hdGlvbi1uYW1lOiB0dGI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG5cbn1cbi8qIFNhZmFyaSA0LjAgLSA4LjAgKi9cbkAtd2Via2l0LWtleWZyYW1lcyB0dGIge1xuICAgIGZyb20ge3RvcDowO29wYWNpdHk6IDA7fVxuICAgIHRvIHt0b3A6IDMwJTsgb3BhY2l0eTogMTt9XG4gIH1cbiAgXG4gIC8qIFN0YW5kYXJkIHN5bnRheCAqL1xuICBAa2V5ZnJhbWVzIHR0YiB7XG4gICAgZnJvbSB7dG9wOjA7b3BhY2l0eTogMDt9XG4gICAgdG8ge3RvcDogMzAlOyBvcGFjaXR5OiAxO31cbiAgfVxubWF0LWZvcm0tZmllbGR7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlICBoMntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCNlYzQwN2EsI2Q4MWI2MCk7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAxOHB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRvcDogLTI2cHg7XG4gICAgbGVmdDogMzQlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDIzMywzMCw5OSwuNCk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uZGl2LWhye1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuXG59XG4ubGlzdC1sb2dpbi1vdGhlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmxpc3QtbG9naW4tb3RoZXIgYXtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuLmg0LW9ye1xuICAgIG1hcmdpbjogMSUgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogZ3JheTtcbn1cbi8qIC5idG4tc2lnbmlue1xuICAgIGJhY2tncm91bmQ6ICM5NDQ2RUQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDM4JTtcbiAgICBmbG9hdDogcmlnaHQ7XG59ICovXG4uYnRuLXJlZ2lzdGVye1xuICAgIGJhY2tncm91bmQ6ICMzOEJFQzk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbm1hdC1jaGVja2JveHtcbiAgICBjb2xvcjogIzYxNkU3Qztcbn1cblxubWF0LWNhcmQtY29udGVudCBhe1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM2MTZFN0M7XG59XG5tYXQtY2FyZC1hY3Rpb25ze1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xuICAgIG1hdC1jYXJke1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xuICAgIG1hdC1jYXJkeyBcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-bg\">\n  <mat-card>\n    <div class=\"title\">\n      <h2>REGISTER</h2>\n    </div>\n    <mat-card-content>\n      <mat-form-field>\n        <input matInput placeholder=\"Username\" >\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"New password\" >\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput placeholder=\"Confirm password\">\n      </mat-form-field>\n      <!-- <mat-checkbox><i>Remember</i></mat-checkbox> -->\n      <!-- <a href=\"#\"> -->\n        <!-- <i>Forgot password?</i></a> -->\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button class=\"btn-register\">Register</button>\n      <!-- <button mat-button class=\"btn-signin\">Sign In</button> -->\n      <div class=\"div-hr\"><hr></div>\n      <h4 class=\"h4-or\">Or</h4>\n      <div class=\"list-login-other\">\n        <a href=\"#\"><i class=\"fab fa-facebook-square\"></i></a>\n        <a href=\"#\"><i class=\"far fa-envelope\"></i></a>\n        <a href=\"#\"><i class=\"fab fa-twitter-square\"></i></a>\n      </div>\n\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /home/nguyenducdai/Documents/joytu.be/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map