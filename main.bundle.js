webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_school_school_component__ = __webpack_require__("../../../../../src/app/component/school/school.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_school_detail_school_detail_component__ = __webpack_require__("../../../../../src/app/component/school-detail/school-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'school', pathMatch: 'full' },
    { path: 'school', component: __WEBPACK_IMPORTED_MODULE_2__component_school_school_component__["a" /* SchoolComponent */] },
    { path: 'schooldetail/:id', component: __WEBPACK_IMPORTED_MODULE_3__component_school_detail_school_detail_component__["a" /* SchoolDetailComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cursor-pointer {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n    "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_city_city_service__ = __webpack_require__("../../../../../src/app/shared/city/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_school_school_service__ = __webpack_require__("../../../../../src/app/shared/school/school.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_type_type_service__ = __webpack_require__("../../../../../src/app/shared/type/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_program_offered_program_offered_service__ = __webpack_require__("../../../../../src/app/shared/program_offered/program_offered.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_city_city_service__["a" /* CityService */], __WEBPACK_IMPORTED_MODULE_2__shared_school_school_service__["a" /* SchoolService */], __WEBPACK_IMPORTED_MODULE_3__shared_type_type_service__["a" /* SchoolTypeService */], __WEBPACK_IMPORTED_MODULE_4__shared_program_offered_program_offered_service__["a" /* ProgramOfferedService */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_school_detail_school_detail_component__ = __webpack_require__("../../../../../src/app/component/school-detail/school-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_school_school_component__ = __webpack_require__("../../../../../src/app/component/school/school.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';











console.log(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_school_detail_school_detail_component__["a" /* SchoolDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_school_school_component__["a" /* SchoolComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NO_ERRORS_SCHEMA */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/school-detail/school-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" style=\"margin-top:50px;\">\n        <h5>Details page:</h5>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"btn-group btnflot\">\n                <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-outline-primary btn-rounded waves-effect\">back</button>\n            </div>\n        </div>\n    </div>\n    <br>\n    <div class=\"row row align-items-end\">\n        <div class=\"col-sm-2\">\n            <img [src]='schoolDetail.image' height=\"100px\" width=\"100px\">\n        </div>\n\n        <div class=\"col-sm-4\">\n            <h4>\n                <b>{{schoolDetail.name}},{{schoolDetail.city}}</b>\n            </h4>\n        </div>\n\n        <div class=\"col-sm-3 text-center bold\">\n            <h4>\n                <b>{{schoolDetail.standard}}</b>\n            </h4>\n        </div>\n\n        <div class=\"col-sm-3\">\n            <h4>\n                <b>{{schoolDetail.type}}</b>\n            </h4>\n        </div>\n    </div>\n    <br>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h5>\n                <b>School Description:</b>\n            </h5>\n            <p>{{schoolDetail.school_description}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h5>\n                <b>Special academic programs:</b>\n            </h5>\n            <p>{{schoolDetail.special_academic_programs}}\n            </p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h5>\n                <b>Contact:</b>\n            </h5>\n            <p>\n                {{schoolDetail.conatct}}\n                <br> {{schoolDetail.contact1}}\n                <br>\n                <br> {{schoolDetail.contact_address}}\n                <br> {{schoolDetail.contact_address2}}\n                <br>\n                <br> Phone:{{schoolDetail.contact_phone}}\n            </p>\n        </div>\n    </div>\n    <br>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h5>\n                <b>2017-2018 School Hours:</b>\n            </h5>\n            <p>{{schoolDetail.start_hour}}- {{schoolDetail.end_hour}}\n            </p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"btn-group btnflot\">\n                <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-outline-primary btn-rounded waves-effect\">back</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <br>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/school-detail/school-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/school-detail/school-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_school_school_service__ = __webpack_require__("../../../../../src/app/shared/school/school.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchoolDetailComponent = (function () {
    function SchoolDetailComponent(activatedRoute, schoolService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.schoolService = schoolService;
        this.router = router;
        this.schoolDetail = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.school_id = params['id'];
        });
    }
    SchoolDetailComponent.prototype.ngOnInit = function () {
        this.getSchool();
    };
    SchoolDetailComponent.prototype.getSchool = function () {
        var _this = this;
        var school = this.schoolService.getData();
        school.snapshotChanges().subscribe(function (item) {
            item.forEach(function (element) {
                var school = element.payload.doc.data();
                console.log(element, _this.school_id);
                if (school.school_id == _this.school_id) {
                    _this.schoolDetail = school;
                    console.log(_this.schoolDetail);
                }
            });
        });
    };
    SchoolDetailComponent.prototype.onBack = function () {
        this.router.navigate(['school'], { queryParams: { source: 'detail' } });
    };
    SchoolDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-school-detail',
            template: __webpack_require__("../../../../../src/app/component/school-detail/school-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/school-detail/school-detail.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_school_school_service__["a" /* SchoolService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__shared_school_school_service__["a" /* SchoolService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SchoolDetailComponent);
    return SchoolDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/school/school.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"text-center\">\r\n        <h2 class=\"jumbotron\">School Management</h2>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\" [(ngModel)]=\"model.selectedCity\">\r\n                    <option value=\"\">Select City</option>\r\n                    <option *ngFor=\"let city of allCityList\" [ngValue]=\"city.city_name\">{{city.city_name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.searchText\" placeholder=\"search\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n            <div class=\"form-group\">\r\n                <button (click)=\"onSearch()\" [disabled]=\"!displaySchool\" class=\"btn btn-outline-primary btn-rounded waves-effect\"> Search</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row content\">\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\" [(ngModel)]=\"model.selectedSchoolType\" >\r\n                    <option value=\"\">Select School Type</option>\r\n                    <option *ngFor=\"let s of allSchoolTypeList\" [ngValue]=\"s.type\">{{s.type}}</option>\r\n                </select>\r\n            </div>\r\n            <div>\r\n                <br>\r\n                <br>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\" [(ngModel)]=\"model.selectedProgram\" >\r\n                    <option value=\"\">Select Programs Offered</option>\r\n                    <option *ngFor=\"let p of allProgramList\" [ngValue]=\"p.program\">{{p.program}}</option>\r\n                </select>\r\n            </div>\r\n            <div>\r\n                <br>\r\n                <br>\r\n            </div>\r\n            <div class=\"btn-group\">\r\n                <button type=\"button\" (click)=\"onLeftSearch()\" [disabled]=\"!displaySchool\" class=\"btn btn-outline-primary btn-rounded waves-effect\">Filter/Refresh</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-8\" *ngIf=\"isSearch\">\r\n            <table class=\"table\">\r\n                <thead class=\"thead-light\">\r\n                    <tr>\r\n                        <th scope=\"col\">Image</th>\r\n                        <th scope=\"col\">School Name</th>\r\n                        <th scope=\"col\">Standard</th>\r\n                        <th scope=\"col\">Type</th>\r\n                        <th scope=\"col\">Program Offered</th>\r\n                        <th scope=\"col\">City</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let school of schoolList | paginate: { itemsPerPage: pageParItem, currentPage: pageNumbers, totalItems:totalItem ,id:'data'}\">\r\n                        <th>\r\n                            <img [src]='school.image' height=\"35px\" width=\"35px\">\r\n                        </th>\r\n                        <th>{{school.name}}</th>\r\n                        <td>{{school.standard}}</td>\r\n                        <td>{{school.type}}</td>\r\n                        <td>{{school.program_offered}}</td>\r\n                        <td>{{school.city}}</td>\r\n                        <td>\r\n                            <button class=\"btn btn-outline-primary btn-rounded waves-effect btn-sm\" (click)=\"onClick(school)\">Details</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <!--Pagination-->\r\n            <div class=\"col-sm-12 \">\r\n                <div class=\"dataTables_paginate paging_simple_numbers \" id=\"DataTables_Table_0_paginate\">\r\n                    <pagination-controls class=\"dataTables_paginate paging_simple_numbers paginated\r\n                                                    \" (pageChange)=\"userPageChangeEvent($event)\" previousLabel=\"\" nextLabel=\"\"\r\n                        id=\"data\"></pagination-controls>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/school/school.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cursor-pointer {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/school/school.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_city_city_service__ = __webpack_require__("../../../../../src/app/shared/city/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_school_school_service__ = __webpack_require__("../../../../../src/app/shared/school/school.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_type_type_service__ = __webpack_require__("../../../../../src/app/shared/type/type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_program_offered_program_offered_service__ = __webpack_require__("../../../../../src/app/shared/program_offered/program_offered.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SchoolComponent = (function () {
    function SchoolComponent(cityService, schoolService, schooltypeService, programOfferedService, router, route) {
        var _this = this;
        this.cityService = cityService;
        this.schoolService = schoolService;
        this.schooltypeService = schooltypeService;
        this.programOfferedService = programOfferedService;
        this.router = router;
        this.route = route;
        this.isSearch = false;
        this.displaySchool = false;
        this.model = {
            searchText: '',
            selectedCity: '',
            selectedSchoolType: '',
            selectedProgram: ''
        };
        this.pageParItem = "5";
        this.pageNumbers = 1;
        this.source = "";
        this.route.queryParams.subscribe(function (params) {
            _this.source = params['source'];
        });
    }
    SchoolComponent.prototype.ngOnInit = function () {
        this.getCity();
        this.getSchool();
        this.getType();
        this.getProgramOffered();
    };
    SchoolComponent.prototype.onClick = function (school) {
        this.router.navigate(['schooldetail', school.school_id]);
    };
    SchoolComponent.prototype.getCity = function () {
        var _this = this;
        var city = this.cityService.getData();
        city.snapshotChanges().subscribe(function (item) {
            _this.allCityList = [];
            item.forEach(function (element) {
                var city = element.payload.doc.data();
                city["$key"] = element.key;
                _this.allCityList.push(city);
                _this.getPageCountsDisplay(_this.pageParItem, _this.pageNumbers, _this.totalItem);
            });
        });
    };
    SchoolComponent.prototype.getSchool = function () {
        var _this = this;
        var school = this.schoolService.getData();
        school.snapshotChanges().subscribe(function (item) {
            _this.allSchoolList = [];
            item.forEach(function (element) {
                var school = element.payload.doc.data();
                _this.allSchoolList.push(school);
                _this.getPageCountsDisplay(parseInt(_this.pageParItem), _this.pageNumbers, _this.totalItem);
            });
            _this.displaySchool = true;
            console.log(_this.allSchoolList);
            if (_this.source == 'detail') {
                _this.onSearch();
            }
        });
    };
    SchoolComponent.prototype.getType = function () {
        var _this = this;
        var schoolType = this.schooltypeService.getData();
        schoolType.snapshotChanges().subscribe(function (item) {
            _this.allSchoolTypeList = [];
            item.forEach(function (element) {
                var schoolType = element.payload.doc.data();
                schoolType["$key"] = element.key;
                _this.allSchoolTypeList.push(schoolType);
            });
        });
    };
    SchoolComponent.prototype.getProgramOffered = function () {
        var _this = this;
        var programOffered = this.programOfferedService.getData();
        programOffered.snapshotChanges().subscribe(function (item) {
            _this.allProgramList = [];
            item.forEach(function (element) {
                var programOffered = element.payload.doc.data();
                programOffered["$key"] = element.key;
                _this.allProgramList.push(programOffered);
            });
        });
    };
    SchoolComponent.prototype.onSearch = function () {
        var _this = this;
        this.model.selectedProgram = '';
        this.model.selectedSchoolType = '';
        if ((this.model.searchText && this.model.searchText.trim() != '') || (this.model.selectedCity && this.model.selectedCity.trim() != '')) {
            this.schoolList = this.allSchoolList.filter(function (item) {
                var keys = Object.keys(item);
                var valid_city = false;
                var valid_search = false;
                if (_this.model.selectedCity && _this.model.selectedCity.trim() != '') {
                    valid_city = item.city == _this.model.selectedCity.trim();
                }
                else {
                    valid_city = true;
                }
                if (_this.model.searchText && _this.model.searchText.trim() != '') {
                    if (!valid_search) {
                        keys.forEach(function (key) {
                            if (!valid_search && item[key] && (item[key].toLowerCase().indexOf(_this.model.searchText.toLowerCase().trim()) > -1)) {
                                valid_search = true;
                            }
                        });
                    }
                }
                else {
                    valid_search = true;
                }
                if (valid_city && valid_search) {
                    return item;
                }
            });
        }
        else {
            this.schoolList = this.allSchoolList;
            this.getPageCountsDisplay(this.pageParItem, this.pageNumbers, this.totalItem);
        }
        this.isSearch = true;
    };
    SchoolComponent.prototype.onLeftSearch = function () {
        var _this = this;
        this.model.selectedCity = '';
        this.model.searchText = '';
        if ((this.model.selectedSchoolType && this.model.selectedSchoolType.trim() != '') || (this.model.selectedProgram && this.model.selectedProgram.trim() != '')) {
            this.schoolList = this.allSchoolList.filter(function (item) {
                var keys = Object.keys(item);
                var valid_school_type = false;
                var valid_program_offered = false;
                if (_this.model.selectedSchoolType && _this.model.selectedSchoolType.trim() != '') {
                    valid_school_type = item.type == _this.model.selectedSchoolType.trim();
                }
                else {
                    valid_school_type = true;
                }
                if (valid_school_type && _this.model.selectedProgram && _this.model.selectedProgram.trim() != '') {
                    valid_program_offered = item.program_offered == _this.model.selectedProgram.trim();
                }
                else {
                    valid_program_offered = true;
                }
                if (valid_school_type && valid_program_offered) {
                    return item;
                }
            });
        }
        else {
            this.schoolList = this.allSchoolList;
            this.getPageCountsDisplay(this.pageParItem, this.pageNumbers, this.totalItem);
        }
        this.isSearch = true;
    };
    SchoolComponent.prototype.userPageChangeEvent = function (pageNo) {
        this.pageNumbers = pageNo;
    };
    SchoolComponent.prototype.getPageCountsDisplay = function (currentPage, pageSize, totalRecords) {
        var startIndex = ((currentPage - 1) * pageSize) + 1;
        var endIndex = ((startIndex + pageSize) - 1);
        if (endIndex > totalRecords) {
            endIndex = totalRecords;
        }
        if (totalRecords == 0) {
            startIndex = endIndex = 0;
        }
    };
    SchoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-school',
            template: __webpack_require__("../../../../../src/app/component/school/school.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/school/school.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_city_city_service__["a" /* CityService */], __WEBPACK_IMPORTED_MODULE_2__shared_school_school_service__["a" /* SchoolService */], __WEBPACK_IMPORTED_MODULE_3__shared_type_type_service__["a" /* SchoolTypeService */], __WEBPACK_IMPORTED_MODULE_4__shared_program_offered_program_offered_service__["a" /* ProgramOfferedService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_city_city_service__["a" /* CityService */], __WEBPACK_IMPORTED_MODULE_2__shared_school_school_service__["a" /* SchoolService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_type_type_service__["a" /* SchoolTypeService */], __WEBPACK_IMPORTED_MODULE_4__shared_program_offered_program_offered_service__["a" /* ProgramOfferedService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], SchoolComponent);
    return SchoolComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/city/city.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityService = (function () {
    function CityService(firebase) {
        this.firebase = firebase;
    }
    CityService.prototype.getData = function () {
        this.cityList = this.firebase.collection('City');
        // firebase service 
        return this.cityList;
    };
    CityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/program_offered/program_offered.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramOfferedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramOfferedService = (function () {
    function ProgramOfferedService(firebase) {
        this.firebase = firebase;
    }
    ProgramOfferedService.prototype.getData = function () {
        this.programOfferedList = this.firebase.collection('Programs_offered');
        // firebase service 
        return this.programOfferedList;
    };
    ProgramOfferedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ProgramOfferedService);
    return ProgramOfferedService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/school/school.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchoolService = (function () {
    function SchoolService(firebase) {
        this.firebase = firebase;
    }
    SchoolService.prototype.getData = function () {
        this.schoolList = this.firebase.collection('School');
        return this.schoolList;
    };
    SchoolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], SchoolService);
    return SchoolService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/type/type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchoolTypeService = (function () {
    function SchoolTypeService(firebase) {
        this.firebase = firebase;
    }
    SchoolTypeService.prototype.getData = function () {
        this.schoolTypeList = this.firebase.collection('Type');
        return this.schoolTypeList;
    };
    SchoolTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], SchoolTypeService);
    return SchoolTypeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBeuNP0jExeUzfJAvNW27ipva7QlpCmWDg",
        authDomain: "school-demo-7f2fc.firebaseapp.com",
        databaseURL: "https://school-demo-7f2fc.firebaseio.com",
        projectId: "school-demo-7f2fc",
        storageBucket: "school-demo-7f2fc.appspot.com",
        messagingSenderId: "1041811663253"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map