webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav>\n    <h1>Coding Test</h1>\n</nav>\n\n<main>\n    <app-index></app-index>\n</main>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-root {\n  display: block;\n  max-width: 480px;\n  margin: 0 auto; }\n  app-root nav {\n    font-size: 1.8em; }\n\napp-index form .input-group label {\n  font-size: 1.6em; }\n\napp-index form .input-group input {\n  border-radius: 10px;\n  border: 1px solid #CCC;\n  font-size: 1.6em;\n  padding: 5px; }\n\napp-index form .input-group input[type=\"text\"]:focus {\n  border-color: #0095FF;\n  outline: none; }\n\napp-index form button[type=\"submit\"] {\n  margin: 10px 0px; }\n\napp-index .error-message {\n  color: #FF0000;\n  font-size: 1.5em; }\n\napp-index .restaurant-list {\n  list-style: none;\n  margin: 20px 0px 0px 0px;\n  padding: 0px;\n  width: 100%; }\n  app-index .restaurant-list .restaurant-item {\n    border-bottom: 1px solid #cccccc;\n    color: #555555;\n    font-size: 1.4em;\n    margin-bottom: 20px;\n    padding-bottom: 5px; }\n    app-index .restaurant-list .restaurant-item .field .field-name {\n      font-weight: 700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index_index_module__ = __webpack_require__("../../../../../src/app/components/index/index.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* App Root */

/* Page Modules */

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__components_index_index_module__["a" /* IndexModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"getRestaurantsByOutcode()\">\r\n    <div class=\"input-group\">\r\n        <label for=\"outcode\">outcode</label>: \r\n        <input id=\"outcode\" placeholder=\"enter an outcode\" type=\"text\" name=\"outcode\" [(ngModel)]=\"outcode\" required />\r\n    </div>\r\n\r\n    <button type=\"submit\" [disabled]=\"!form.valid || isLoading\">\r\n        {{isLoading ? \"Finding...\":\"Find Restaurants\"}}\r\n    </button>\r\n</form>\r\n\r\n<div *ngIf=\"errorMessage\" class=\"error-message\">\r\n    <p>{{errorMessage}}</p>\r\n</div>\r\n\r\n<ul class=\"restaurant-list\">\r\n    <li class=\"restaurant-item\" *ngFor=\"let restaurant of restaurants\">\r\n        <div class=\"field\">          \r\n            <span class=\"field-name\">name:</span>\r\n            <span class=\"field-value\">\r\n                {{restaurant.name}}\r\n            </span>\r\n        </div>\r\n        \r\n        <div class=\"field\">\r\n            <span class=\"field-name\">rating:</span>\r\n            <span class=\"field-value\">             \r\n                {{restaurant.rating}} / 6\r\n            </span> \r\n        </div>\r\n\r\n        <div class=\"field\">\r\n            <span class=\"field-name\">cuisine types:</span> \r\n            <span class=\"field-value\">              \r\n                {{restaurant.cuisineTypes}}\r\n            </span>\r\n        </div>    \r\n    </li>\r\n</ul>  "

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-index form .input-group label {\n  font-size: 1.6em; }\n\napp-index form .input-group input {\n  border-radius: 10px;\n  border: 1px solid #CCC;\n  font-size: 1.6em;\n  padding: 5px; }\n\napp-index form .input-group input[type=\"text\"]:focus {\n  border-color: #0095FF;\n  outline: none; }\n\napp-index form button[type=\"submit\"] {\n  margin: 10px 0px; }\n\napp-index .error-message {\n  color: #FF0000;\n  font-size: 1.5em; }\n\napp-index .restaurant-list {\n  list-style: none;\n  margin: 20px 0px 0px 0px;\n  padding: 0px;\n  width: 100%; }\n  app-index .restaurant-list .restaurant-item {\n    border-bottom: 1px solid #cccccc;\n    color: #555555;\n    font-size: 1.4em;\n    margin-bottom: 20px;\n    padding-bottom: 5px; }\n    app-index .restaurant-list .restaurant-item .field .field-name {\n      font-weight: 700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apis_just_eat_service__ = __webpack_require__("../../../../../src/app/services/apis/just-eat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* Services */

var IndexComponent = (function () {
    function IndexComponent(justEatService) {
        this.justEatService = justEatService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.restaurants = [];
        this.noRestaurantsFound = false;
    };
    IndexComponent.prototype.getRestaurantsByOutcode = function () {
        var self = this;
        self.isLoading = true;
        self.errorMessage = '';
        self.justEatService.getRestaurantsByOutcode(self.outcode)
            .then(function (response) { return response.json(); })
            .then(function (jsonResponse) {
            // transfrom the restaurant response object to the structure we want
            // {id, name, rating, cuisineTypes}
            self.restaurants = jsonResponse.Restaurants.map(function (restaurant) {
                return {
                    id: restaurant.Id,
                    name: restaurant.Name,
                    rating: restaurant.RatingStars,
                    cuisineTypes: restaurant.CuisineTypes.map(function (cuisinetype) { return cuisinetype.Name; }).join(', ')
                };
            });
            self.isLoading = false;
            if (self.restaurants.length === 0) {
                return Promise.reject(new Error("No restaurants found"));
            }
        })
            .catch(function (err) {
            self.restaurants = [];
            self.isLoading = false;
            self.errorMessage = err.toString();
        });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/components/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/index/index.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_apis_just_eat_service__["a" /* JustEatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_apis_just_eat_service__["a" /* JustEatService */]) === "function" && _a || Object])
], IndexComponent);

var _a;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/index/index.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_component__ = __webpack_require__("../../../../../src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurant_item_restaurant_item_component__ = __webpack_require__("../../../../../src/app/components/index/restaurant-item/restaurant-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apis_just_eat_service__ = __webpack_require__("../../../../../src/app/services/apis/just-eat.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* Components */


/* Services */

var IndexModule = (function () {
    function IndexModule() {
    }
    return IndexModule;
}());
IndexModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_4__restaurant_item_restaurant_item_component__["a" /* RestaurantItemComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_apis_just_eat_service__["a" /* JustEatService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_4__restaurant_item_restaurant_item_component__["a" /* RestaurantItemComponent */]
        ]
    })
], IndexModule);

//# sourceMappingURL=index.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/index/restaurant-item/restaurant-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  restaurant-item works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/index/restaurant-item/restaurant-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/index/restaurant-item/restaurant-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RestaurantItemComponent = (function () {
    function RestaurantItemComponent() {
    }
    RestaurantItemComponent.prototype.ngOnInit = function () {
    };
    return RestaurantItemComponent;
}());
RestaurantItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-restaurant-item',
        template: __webpack_require__("../../../../../src/app/components/index/restaurant-item/restaurant-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/index/restaurant-item/restaurant-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RestaurantItemComponent);

//# sourceMappingURL=restaurant-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/apis/just-eat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JustEatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JustEatService = (function () {
    function JustEatService(http) {
        this.http = http;
        this.host = 'https://public.je-apis.com';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Accept-Tenant': 'uk',
            'Accept-Language': 'en-GB',
            'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI='
        });
    }
    JustEatService.prototype.buildURL = function (namespace, queryParams) {
        if (queryParams === void 0) { queryParams = {}; }
        var url = this.host + "/" + namespace;
        if (Object.keys(queryParams).length > 0) {
            url += '?';
            for (var key in queryParams) {
                url += key + "=" + queryParams[key] + "&";
            }
            url = url.replace(/&$/, '');
        }
        return url;
    };
    JustEatService.prototype.getRestaurantsByOutcode = function (outcode) {
        var url = this.buildURL('restaurants', { q: outcode });
        return this.http.get(url, { headers: this.headers }).toPromise();
    };
    return JustEatService;
}());
JustEatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], JustEatService);

var _a;
//# sourceMappingURL=just-eat.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map