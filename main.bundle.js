webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>CRUD Operations</h1>\n<ul>\n  <li><a routerLink=\"\">Home</a></li>\n</ul>\n<app-home></app-home>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-input\">\n  <div class=\"col\">\n    <p class=\"sm\">Enter the following fields</p>\n    <form>\n    <label>First name:</label><input type=\"text\" name=\"fname\" class=\"txt\" [(ngModel)]=\"fname\" required=\"required\" placeholder=\"Enter first name\">\n    <br>\n    <label>Last name:</label><input type=\"text\" name=\"lname\" class=\"txt\"[(ngModel)]=\"lname\" required placeholder=\"Enter last name\">\n    <br>\n    <label>DOB:</label><input type=\"date\" name=\"dob\" class=\"txt\" [(ngModel)]=\"dob\" required>\n    <br>\n    <label>Email:</label><input type=\"email\" name=\"email\" class=\"txt\" [(ngModel)]=\"email\" required placeholder=\"aaa@aa.com\">\n    <br>\n    <label>Phone no.:</label><input type=\"number\" name=\"pno\" class=\"txt\" [(ngModel)]=\"pno\" required>\n    <br>\n    <label>Faculty:</label> \n    <select name=\"faculty\" class=\"data\" [(ngModel)]=\"fac\">\n        <option *ngFor=\"let pow of f\" >{{pow}}</option>\n        </select>\n    <br>\n  \n   <button (click)=\"add()\">submit</button>\n    </form> \n   </div>\n</div>\n<div>\n  <table>\n    <tr>\n    <th>First name</th>\n    <th>Last name</th>\n    <th>DOB</th>\n    <th>Email</th>\n    <th>Phone no.</th>\n    <th>Faculty</th>\n    </tr>\n    <tr *ngFor=\"let i of data,let a = index\">\n      <td>{{i.fname}}</td>\n      <td>{{i.lname}}</td>\n      <td>{{i.dob}}</td>\n      <td>{{i.email}}</td>\n      <td>{{i.pno}}</td>\n      <td>{{i.fac}}</td>\n      <td><button (click)=\"removeItem(a)\">Delete</button></td>\n      <td><button (click)=\"edit(a)\">Edit</button></td>\n    </tr>\n  </table>\n</div>\n\n<div>\n<form>\n    <label>First name:</label><input type=\"text\" name=\"fname1\" class=\"txt\" [(ngModel)]=\"fname1\" required=\"required\" placeholder=\"Enter first name\">\n    <br>\n    <label>Last name:</label><input type=\"text\" name=\"lname1\" class=\"txt\"[(ngModel)]=\"lname1\" required placeholder=\"Enter last name\">\n    <br>\n    <label>DOB:</label><input type=\"date\" name=\"dob1\" class=\"txt\" [(ngModel)]=\"dob1\" required>\n    <br>\n    <label>Email:</label><input type=\"email\" name=\"email1\" class=\"txt\" [(ngModel)]=\"email1\" required placeholder=\"aaa@aa.com\">\n    <br>\n    <label>Phone no.:</label><input type=\"number\" name=\"pno1\" class=\"txt\" [(ngModel)]=\"pno1\" required>\n    <br>\n    <label>Faculty:</label> \n    <select name=\"faculty\" class=\"data\" [(ngModel)]=\"fac1\">\n        <option *ngFor=\"let pow of f\" >{{pow}}</option>\n        </select>\n    <br>\n  \n   <button (click)=\"update()\">Update</button>\n</form> \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% auto;\n      grid-template-columns: 50% auto; }\n\n.head {\n  background: #003a61; }\n\n.col {\n  padding: .2em; }\n\nlabel {\n  padding: 1em;\n  width: 25%;\n  margin-bottom: 2em;\n  cursor: pointer; }\n\ninput.txt, .data {\n  border: 2px solid #2e94d8;\n  padding: 1em;\n  width: 25%;\n  margin-bottom: 2em; }\n\ninput.btn {\n  display: block;\n  border: 0;\n  padding: 1em 3em;\n  background: #a5f883;\n  color: #2e94d8;\n  margin-bottom: 1em;\n  cursor: pointer; }\n\n.life-container {\n  padding: .5em;\n  font-weight: bold;\n  cursor: pointer; }\n\nth, td {\n  padding: 2%;\n  text-align: center;\n  border: 2px solid;\n  color: #16212b; }\n\ntable {\n  width: 85%;\n  border: 2px;\n  padding: 2%; }\n\nbutton {\n  background: #a5f883;\n  color: #2e94d8;\n  border: none;\n  padding: 16px 32px;\n  text-align: center;\n  font-size: 16px;\n  margin: 4px 2px;\n  opacity: 0.6;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  display: inline-block;\n  text-decoration: none;\n  cursor: pointer; }\n\nbutton:hover {\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.data = [];
        this.f = ['karishma', 'krishna', 'vidushi', 'dhruv', 'raj'];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.add = function () {
        this.data.push({
            'fname': this.fname,
            'lname': this.lname,
            'dob': this.dob,
            'email': this.email,
            'pno': this.pno,
            'fac': this.fac,
        });
        this.fname = '';
        this.lname = '';
        this.dob = '';
        this.email = '';
        this.pno = NaN;
        this.fac = '';
    };
    HomeComponent.prototype.edit = function (i) {
        this.fname1 = this.data[i]['fname'];
        this.lname1 = this.data[i]['lname'];
        this.dob1 = this.data[i]['dob'];
        this.email1 = this.data[i]['email'];
        this.pno1 = this.data[i]['pno'];
        this.fac1 = this.data[i]['fac'];
        this.id = i;
    };
    HomeComponent.prototype.update = function () {
        this.data[this.id]['fname'] = this.fname1;
        this.data[this.id]['lname'] = this.lname1;
        this.data[this.id]['dob'] = this.dob1;
        this.data[this.id]['email'] = this.email1;
        this.data[this.id]['pno'] = this.pno1;
        this.data[this.id]['fac'] = this.fac1;
    };
    HomeComponent.prototype.removeItem = function (i) {
        this.data.splice(i, 1);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map