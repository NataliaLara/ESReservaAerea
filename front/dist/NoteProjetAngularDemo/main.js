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

/***/ "./src/app/ajout-matiere/ajout-matiere.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ajout-matiere/ajout-matiere.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ajout-matiere/ajout-matiere.component.html":
/*!************************************************************!*\
  !*** ./src/app/ajout-matiere/ajout-matiere.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal pad-10\">\n  <br>\n  <form [formGroup]=\"matiereForm\">\n    <div class=\"col-md-6 form-group\">\n      <label class=\" control-label\">Libéllé Matière</label>\n      <div class=\"col-md-12 no-padding\">\n        <input name=\"libelle\" id=\"libelle\" formControlName=\"libelle\" class=\"form-control\" placeholder=\"\" type=\"text\" />\n      </div>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <label class=\" control-label\">Coefficient Matière</label>\n      <div class=\"col-md-12 no-padding\">\n        <input name=\"coefficient\" id=\"coefficient\" formControlName=\"coefficient\" class=\"form-control\" placeholder=\"\" type=\"number\" />\n      </div>\n    </div>\n    <div class=\"pad-10\">\n      <button mwlConfirmationPopover\n              [popoverTitle]=\"'Confirmation'\"\n              [popoverMessage]=\"'êtes-vous sûr?'\"\n              placement=\"top\"\n              (confirm)=\"createMatiere(matiereForm.value)\"\n              type=\"submit\" class=\"btn btn-save btn-primary\" [disabled]=\"!matiereForm.valid\">\n        <span class=\"glyphicon glyphicon-floppy-disk\"></span> Sauvegarder\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/ajout-matiere/ajout-matiere.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ajout-matiere/ajout-matiere.component.ts ***!
  \**********************************************************/
/*! exports provided: AjoutMatiereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjoutMatiereComponent", function() { return AjoutMatiereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_matiere_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/matiere.action */ "./src/app/store/actions/matiere.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AjoutMatiereComponent = /** @class */ (function () {
    function AjoutMatiereComponent(router, fb, store) {
        this.router = router;
        this.store = store;
        this.matiereForm = fb.group({
            libelle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            coefficient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AjoutMatiereComponent.prototype.ngOnInit = function () {
    };
    AjoutMatiereComponent.prototype.createMatiere = function (data) {
        var payload = __assign({}, data);
        this.store.dispatch(new _store_actions_matiere_action__WEBPACK_IMPORTED_MODULE_3__["MatiereListModule"].LoadCreateMatiere(payload));
        // this.matiereForm.reset();
        this.router.navigateByUrl('/matiere');
    };
    AjoutMatiereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ajout-matiere',
            template: __webpack_require__(/*! ./ajout-matiere.component.html */ "./src/app/ajout-matiere/ajout-matiere.component.html"),
            styles: [__webpack_require__(/*! ./ajout-matiere.component.css */ "./src/app/ajout-matiere/ajout-matiere.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AjoutMatiereComponent);
    return AjoutMatiereComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-dashboard></app-dashboard>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _matieres_matieres_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./matieres/matieres.component */ "./src/app/matieres/matieres.component.ts");
/* harmony import */ var _matieres_matiere_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./matieres/matiere.service */ "./src/app/matieres/matiere.service.ts");
/* harmony import */ var _ajout_matiere_ajout_matiere_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ajout-matiere/ajout-matiere.component */ "./src/app/ajout-matiere/ajout-matiere.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-confirmation-popover */ "./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/index */ "./src/app/store/index.ts");
/* harmony import */ var _matieres_clone_matieres_clone_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./matieres-clone/matieres-clone.component */ "./src/app/matieres-clone/matieres-clone.component.ts");
/* harmony import */ var _matieres_parent_matieres_parent_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./matieres-parent/matieres-parent.component */ "./src/app/matieres-parent/matieres-parent.component.ts");
/* harmony import */ var _pessoas_parent_pessoas_parent_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pessoas-parent/pessoas-parent.component */ "./src/app/pessoas-parent/pessoas-parent.component.ts");
/* harmony import */ var _criar_pessoa_criar_pessoa_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./criar-pessoa/criar-pessoa.component */ "./src/app/criar-pessoa/criar-pessoa.component.ts");
/* harmony import */ var _pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pessoas/pessoas.component */ "./src/app/pessoas/pessoas.component.ts");
/* harmony import */ var _pessoas_pessoa_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pessoas/pessoa.service */ "./src/app/pessoas/pessoa.service.ts");
/* harmony import */ var _reserva_reserva_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./reserva/reserva.component */ "./src/app/reserva/reserva.component.ts");
/* harmony import */ var _cidades_parent_cidades_parent_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cidades-parent/cidades-parent.component */ "./src/app/cidades-parent/cidades-parent.component.ts");
/* harmony import */ var _cidades_cidades_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cidades/cidades.component */ "./src/app/cidades/cidades.component.ts");
/* harmony import */ var _cidades_cidade_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cidades/cidade.service */ "./src/app/cidades/cidade.service.ts");
/* harmony import */ var _criar_cidade_criar_cidade_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./criar-cidade/criar-cidade.component */ "./src/app/criar-cidade/criar-cidade.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//import { PessoasCloneComponent } from './pessoas-clone/pessoas-clone.component';





var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'matiere', component: _matieres_parent_matieres_parent_component__WEBPACK_IMPORTED_MODULE_21__["MatieresParentComponent"] },
    { path: 'ajout-matiere', component: _ajout_matiere_ajout_matiere_component__WEBPACK_IMPORTED_MODULE_12__["AjoutMatiereComponent"] },
    //{ path: '', redirectTo: '/pessoa', pathMatch: 'full' },
    { path: 'pessoa', component: _pessoas_parent_pessoas_parent_component__WEBPACK_IMPORTED_MODULE_22__["PessoasParentComponent"] },
    { path: 'criar-pessoa', component: _criar_pessoa_criar_pessoa_component__WEBPACK_IMPORTED_MODULE_23__["CriarPessoaComponent"] },
    { path: 'reserva', component: _reserva_reserva_component__WEBPACK_IMPORTED_MODULE_26__["ReservaComponent"] },
    { path: 'cidade', component: _cidades_parent_cidades_parent_component__WEBPACK_IMPORTED_MODULE_27__["CidadesParentComponent"] },
    { path: 'criar-cidade', component: _criar_cidade_criar_cidade_component__WEBPACK_IMPORTED_MODULE_30__["CriarCidadeComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _matieres_matieres_component__WEBPACK_IMPORTED_MODULE_10__["MatieresComponent"],
                _ajout_matiere_ajout_matiere_component__WEBPACK_IMPORTED_MODULE_12__["AjoutMatiereComponent"],
                _matieres_clone_matieres_clone_component__WEBPACK_IMPORTED_MODULE_20__["MatieresCloneComponent"],
                _matieres_parent_matieres_parent_component__WEBPACK_IMPORTED_MODULE_21__["MatieresParentComponent"],
                _pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_24__["PessoasComponent"],
                _criar_pessoa_criar_pessoa_component__WEBPACK_IMPORTED_MODULE_23__["CriarPessoaComponent"],
                _pessoas_parent_pessoas_parent_component__WEBPACK_IMPORTED_MODULE_22__["PessoasParentComponent"],
                //PessoasCloneComponent,
                _reserva_reserva_component__WEBPACK_IMPORTED_MODULE_26__["ReservaComponent"],
                _cidades_cidades_component__WEBPACK_IMPORTED_MODULE_28__["CidadesComponent"],
                _criar_cidade_criar_cidade_component__WEBPACK_IMPORTED_MODULE_30__["CriarCidadeComponent"],
                _cidades_parent_cidades_parent_component__WEBPACK_IMPORTED_MODULE_27__["CidadesParentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(_store_index__WEBPACK_IMPORTED_MODULE_19__["REDUCER_TOKEN"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__["EffectsModule"].forRoot(_store_index__WEBPACK_IMPORTED_MODULE_19__["appEffects"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__["StoreDevtoolsModule"].instrument({
                    name: '[TODOLIST]',
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production // Restrict extension to log-only mode
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_15__["ConfirmationPopoverModule"].forRoot({
                    confirmButtonType: 'danger' // set defaults here
                })
            ],
            providers: [{
                    provide: _store_index__WEBPACK_IMPORTED_MODULE_19__["REDUCER_TOKEN"],
                    useFactory: _store_index__WEBPACK_IMPORTED_MODULE_19__["getReducers"]
                },
                _matieres_matiere_service__WEBPACK_IMPORTED_MODULE_11__["MatiereService"],
                _pessoas_pessoa_service__WEBPACK_IMPORTED_MODULE_25__["PessoaService"],
                _cidades_cidade_service__WEBPACK_IMPORTED_MODULE_29__["CidadeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cidades-parent/cidades-parent.component.css":
/*!*************************************************************!*\
  !*** ./src/app/cidades-parent/cidades-parent.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cidades-parent/cidades-parent.component.html":
/*!**************************************************************!*\
  !*** ./src/app/cidades-parent/cidades-parent.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <app-cidades></app-cidades>\n  </div>\n  <div class=\"col-md-6\" style=\"margin-top: 10px;\">\n    <!--<app-pessoas-clone></app-pessoas-clone>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cidades-parent/cidades-parent.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cidades-parent/cidades-parent.component.ts ***!
  \************************************************************/
/*! exports provided: CidadesParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadesParentComponent", function() { return CidadesParentComponent; });
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

var CidadesParentComponent = /** @class */ (function () {
    function CidadesParentComponent() {
    }
    CidadesParentComponent.prototype.ngOnInit = function () {
    };
    CidadesParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cidades-parent',
            template: __webpack_require__(/*! ./cidades-parent.component.html */ "./src/app/cidades-parent/cidades-parent.component.html"),
            styles: [__webpack_require__(/*! ./cidades-parent.component.css */ "./src/app/cidades-parent/cidades-parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CidadesParentComponent);
    return CidadesParentComponent;
}());



/***/ }),

/***/ "./src/app/cidades/cidade.service.ts":
/*!*******************************************!*\
  !*** ./src/app/cidades/cidade.service.ts ***!
  \*******************************************/
/*! exports provided: CidadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeService", function() { return CidadeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CidadeService = /** @class */ (function () {
    function CidadeService(http) {
        this.http = http;
    }
    CidadeService.prototype.getCidade = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/cidades");
    };
    CidadeService.prototype.createCidade = function (body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/cidades", body);
    };
    CidadeService.prototype.deleteCidade = function (nome) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/cidades/delete", { 'nome': nome })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return nome; }));
    };
    CidadeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CidadeService);
    return CidadeService;
}());



/***/ }),

/***/ "./src/app/cidades/cidades.component.css":
/*!***********************************************!*\
  !*** ./src/app/cidades/cidades.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cidades/cidades.component.html":
/*!************************************************!*\
  !*** ./src/app/cidades/cidades.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 pad-10\">\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"goToAddCidade()\">\n      <span class=\"glyphicon glyphicon-floppy-disk\"></span> Adicionar Cidade\n    </button>\n  </div>\n</div>\n\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>ID</th>\n    <th>Nome</th>\n    <th>Ação</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let cidade of cidades$| async;\">\n    <td>{{ cidade.id }}</td>\n    <td>{{ cidade.nome }}</td>\n    <td>\n      <div>\n        <button class=\"btn\" (click)=\"deleteCidade(cidade.nome)\">Remover</button>\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/cidades/cidades.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cidades/cidades.component.ts ***!
  \**********************************************/
/*! exports provided: CidadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadesComponent", function() { return CidadesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_cidade_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/cidade.action */ "./src/app/store/actions/cidade.action.ts");
/* harmony import */ var _store_selectors_cidade_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selectors/cidade.selector */ "./src/app/store/selectors/cidade.selector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CidadesComponent = /** @class */ (function () {
    function CidadesComponent(router, store) {
        this.router = router;
        this.store = store;
        this.cidades$ = store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_cidade_selector__WEBPACK_IMPORTED_MODULE_4__["selectCidadeListEntitiesConverted$"]));
        this.cidadesLoading = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_cidade_selector__WEBPACK_IMPORTED_MODULE_4__["selectCidadesLoading$"]));
    }
    CidadesComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_actions_cidade_action__WEBPACK_IMPORTED_MODULE_3__["CidadeListModule"].LoadInitCidades());
    };
    CidadesComponent.prototype.goToAddCidade = function () {
        this.router.navigateByUrl('/criar-cidade');
    };
    CidadesComponent.prototype.deleteCidade = function (cpf) {
        this.store.dispatch(new _store_actions_cidade_action__WEBPACK_IMPORTED_MODULE_3__["CidadeListModule"].LoadDeleteCidade(cpf));
    };
    CidadesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cidades',
            template: __webpack_require__(/*! ./cidades.component.html */ "./src/app/cidades/cidades.component.html"),
            styles: [__webpack_require__(/*! ./cidades.component.css */ "./src/app/cidades/cidades.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CidadesComponent);
    return CidadesComponent;
}());



/***/ }),

/***/ "./src/app/criar-cidade/criar-cidade.component.css":
/*!*********************************************************!*\
  !*** ./src/app/criar-cidade/criar-cidade.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/criar-cidade/criar-cidade.component.html":
/*!**********************************************************!*\
  !*** ./src/app/criar-cidade/criar-cidade.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal pad-10\">\n  <br>\n  <form [formGroup]=\"cidadeForm\">\n    <div class=\"col-md-6 form-group\">\n      <label class=\" control-label\">ID</label>\n      <div class=\"col-md-12 no-padding\">\n        <input name=\"id\" id=\"id\" formControlName=\"id\" class=\"form-control\" placeholder=\"\" type=\"number\" />\n      </div>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <label class=\" control-label\">Nome</label>\n      <div class=\"col-md-12 no-padding\">\n        <input name=\"nome\" id=\"nome\" formControlName=\"nome\" class=\"form-control\" placeholder=\"\" type=\"text\" />\n      </div>\n    </div>\n    <div class=\"pad-10\">\n      <button mwlConfirmationPopover\n              [popoverTitle]=\"'Confirmação'\"\n              [popoverMessage]=\"'Tem certeza?'\"\n              placement=\"top\"\n              (confirm)=\"createCidade(cidadeForm.value)\"\n              type=\"submit\" class=\"btn btn-save btn-primary\" [disabled]=\"!cidadeForm.valid\">\n        <span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/criar-cidade/criar-cidade.component.ts":
/*!********************************************************!*\
  !*** ./src/app/criar-cidade/criar-cidade.component.ts ***!
  \********************************************************/
/*! exports provided: CriarCidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarCidadeComponent", function() { return CriarCidadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_cidade_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/cidade.action */ "./src/app/store/actions/cidade.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CriarCidadeComponent = /** @class */ (function () {
    function CriarCidadeComponent(router, fb, store) {
        this.router = router;
        this.store = store;
        this.cidadeForm = fb.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    CriarCidadeComponent.prototype.ngOnInit = function () {
    };
    CriarCidadeComponent.prototype.createCidade = function (data) {
        var payload = __assign({}, data);
        this.store.dispatch(new _store_actions_cidade_action__WEBPACK_IMPORTED_MODULE_3__["CidadeListModule"].LoadCreateCidade(payload));
        // this.cidadeForm.reset();
        this.router.navigateByUrl('/cidade');
    };
    CriarCidadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-criar-cidade',
            template: __webpack_require__(/*! ./criar-cidade.component.html */ "./src/app/criar-cidade/criar-cidade.component.html"),
            styles: [__webpack_require__(/*! ./criar-cidade.component.css */ "./src/app/criar-cidade/criar-cidade.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CriarCidadeComponent);
    return CriarCidadeComponent;
}());



/***/ }),

/***/ "./src/app/criar-pessoa/criar-pessoa.component.css":
/*!*********************************************************!*\
  !*** ./src/app/criar-pessoa/criar-pessoa.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/criar-pessoa/criar-pessoa.component.html":
/*!**********************************************************!*\
  !*** ./src/app/criar-pessoa/criar-pessoa.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-horizontal pad-10\">\n  <br>\n  <form [formGroup]=\"pessoaForm\">\n    <div class=\"col-md-6 form-group\">\n      <label class=\" control-label\">CPF</label>\n      <div class=\"col-md-12 no-padding\">\n        <input name=\"cpf\" id=\"cpf\" formControlName=\"cpf\" class=\"form-control\" placeholder=\"\" type=\"text\" />\n      </div>\n    </div>\n    <div class=\"col-md-6 form-group\">\n      <label class=\" control-label\">Nome</label>\n      <div class=\"col-md-12 no-padding\">\n        <input name=\"nome\" id=\"nome\" formControlName=\"nome\" class=\"form-control\" placeholder=\"\" type=\"text\" />\n      </div>\n    </div>\n    <div class=\"pad-10\">\n      <button mwlConfirmationPopover\n              [popoverTitle]=\"'Confirmação'\"\n              [popoverMessage]=\"'Tem certeza?'\"\n              placement=\"top\"\n              (confirm)=\"createPessoa(pessoaForm.value)\"\n              type=\"submit\" class=\"btn btn-save btn-primary\" [disabled]=\"!pessoaForm.valid\">\n        <span class=\"glyphicon glyphicon-floppy-disk\"></span> Salvar\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/criar-pessoa/criar-pessoa.component.ts":
/*!********************************************************!*\
  !*** ./src/app/criar-pessoa/criar-pessoa.component.ts ***!
  \********************************************************/
/*! exports provided: CriarPessoaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarPessoaComponent", function() { return CriarPessoaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_pessoa_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/pessoa.action */ "./src/app/store/actions/pessoa.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CriarPessoaComponent = /** @class */ (function () {
    function CriarPessoaComponent(router, fb, store) {
        this.router = router;
        this.store = store;
        this.pessoaForm = fb.group({
            cpf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    CriarPessoaComponent.prototype.ngOnInit = function () {
    };
    CriarPessoaComponent.prototype.createPessoa = function (data) {
        var payload = __assign({}, data);
        this.store.dispatch(new _store_actions_pessoa_action__WEBPACK_IMPORTED_MODULE_3__["PessoaListModule"].LoadCreatePessoa(payload));
        // this.pessoaForm.reset();
        this.router.navigateByUrl('/pessoa');
    };
    CriarPessoaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-criar-pessoa',
            template: __webpack_require__(/*! ./criar-pessoa.component.html */ "./src/app/criar-pessoa/criar-pessoa.component.html"),
            styles: [__webpack_require__(/*! ./criar-pessoa.component.css */ "./src/app/criar-pessoa/criar-pessoa.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CriarPessoaComponent);
    return CriarPessoaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n   \n    <mat-nav-list>\n      <!--\n      <a mat-list-item routerLink=\"/matiere\">Matiere</a>\n      <a mat-list-item href=\"/second-page\">Link 2</a>\n      <a mat-list-item href=\"#\">Link 3</a>\n      <a mat-list-item href=\"/pessoa\">Pessoa</a>\n      -->\n      <a mat-list-item routerLink=\"/pessoa\">Pessoa</a>\n      <a mat-list-item routerLink=\"/reserva\">Reserva</a>\n      <a mat-list-item routerLink=\"/cidade\">Cidade</a>\n    </mat-nav-list>    \n    <!--\n    <mat-nav-list>\n        <a mat-list-item routerLink=\"/reserva\">Reserva</a>\n    </mat-nav-list>\n    -->\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Reserva Aérea</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_selectors_matiere_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/selectors/matiere.selector */ "./src/app/store/selectors/matiere.selector.ts");
/* harmony import */ var _store_selectors_pessoa_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/selectors/pessoa.selector */ "./src/app/store/selectors/pessoa.selector.ts");
/* harmony import */ var _store_selectors_cidade_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/selectors/cidade.selector */ "./src/app/store/selectors/cidade.selector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver, toastr, store) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.toastr = toastr;
        this.store = store;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.matiereListErrors$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_selectors_matiere_selector__WEBPACK_IMPORTED_MODULE_6__["selectMatieresErrors$"]), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (dialog) {
            if (!dialog) {
                return;
            }
            if (dialog.type === 'ERROR') {
                _this.toastr.error(dialog.message);
            }
            else {
                _this.toastr.success(dialog.message);
            }
            console.log(dialog);
        }));
        this.matiereListErrors$.subscribe();
        this.pessoaListErrors$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_selectors_pessoa_selector__WEBPACK_IMPORTED_MODULE_7__["selectPessoasErrors$"]), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (dialog) {
            if (!dialog) {
                return;
            }
            if (dialog.type === 'ERROR') {
                _this.toastr.error(dialog.message);
            }
            else {
                _this.toastr.success(dialog.message);
            }
            console.log(dialog);
        }));
        this.pessoaListErrors$.subscribe();
        this.cidadeListErrors$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_selectors_cidade_selector__WEBPACK_IMPORTED_MODULE_8__["selectCidadesErrors$"]), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (dialog) {
            if (!dialog) {
                return;
            }
            if (dialog.type === 'ERROR') {
                _this.toastr.error(dialog.message);
            }
            else {
                _this.toastr.success(dialog.message);
            }
            console.log(dialog);
        }));
        this.cidadeListErrors$.subscribe();
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/matieres-clone/matieres-clone.component.css":
/*!*************************************************************!*\
  !*** ./src/app/matieres-clone/matieres-clone.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/matieres-clone/matieres-clone.component.html":
/*!**************************************************************!*\
  !*** ./src/app/matieres-clone/matieres-clone.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>ID</th>\n    <th>Libélle</th>\n    <th>Coefficient</th>\n    <th>Actions</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let matiere of matieres$| async;\">\n    <td>{{ matiere.id }}</td>\n    <td>{{ matiere.libelle }}</td>\n    <td>{{ matiere.coefficient }}</td>\n    <td>\n      <div>\n        <button class=\"btn\" (click)=\"deleteMatiere(matiere.id)\">Supprimer</button>\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/matieres-clone/matieres-clone.component.ts":
/*!************************************************************!*\
  !*** ./src/app/matieres-clone/matieres-clone.component.ts ***!
  \************************************************************/
/*! exports provided: MatieresCloneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatieresCloneComponent", function() { return MatieresCloneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions/matiere.action */ "./src/app/store/actions/matiere.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_matiere_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/selectors/matiere.selector */ "./src/app/store/selectors/matiere.selector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatieresCloneComponent = /** @class */ (function () {
    function MatieresCloneComponent(store) {
        this.store = store;
        this.matieres$ = store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_matiere_selector__WEBPACK_IMPORTED_MODULE_3__["selectMatiereListEntitiesConverted$"]));
        this.matieresLoading = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_matiere_selector__WEBPACK_IMPORTED_MODULE_3__["selectMatieresLoading$"]));
    }
    MatieresCloneComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__["MatiereListModule"].LoadInitMatieres());
    };
    MatieresCloneComponent.prototype.deleteMatiere = function (id) {
        this.store.dispatch(new _store_actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__["MatiereListModule"].LoadDeleteMatiere(id));
    };
    MatieresCloneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matieres-clone',
            template: __webpack_require__(/*! ./matieres-clone.component.html */ "./src/app/matieres-clone/matieres-clone.component.html"),
            styles: [__webpack_require__(/*! ./matieres-clone.component.css */ "./src/app/matieres-clone/matieres-clone.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MatieresCloneComponent);
    return MatieresCloneComponent;
}());



/***/ }),

/***/ "./src/app/matieres-parent/matieres-parent.component.css":
/*!***************************************************************!*\
  !*** ./src/app/matieres-parent/matieres-parent.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/matieres-parent/matieres-parent.component.html":
/*!****************************************************************!*\
  !*** ./src/app/matieres-parent/matieres-parent.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <app-matieres></app-matieres>\n  </div>\n  <div class=\"col-md-6\" style=\"margin-top: 10px;\">\n    <app-matieres-clone></app-matieres-clone>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/matieres-parent/matieres-parent.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/matieres-parent/matieres-parent.component.ts ***!
  \**************************************************************/
/*! exports provided: MatieresParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatieresParentComponent", function() { return MatieresParentComponent; });
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

var MatieresParentComponent = /** @class */ (function () {
    function MatieresParentComponent() {
    }
    MatieresParentComponent.prototype.ngOnInit = function () {
    };
    MatieresParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matieres-parent',
            template: __webpack_require__(/*! ./matieres-parent.component.html */ "./src/app/matieres-parent/matieres-parent.component.html"),
            styles: [__webpack_require__(/*! ./matieres-parent.component.css */ "./src/app/matieres-parent/matieres-parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MatieresParentComponent);
    return MatieresParentComponent;
}());



/***/ }),

/***/ "./src/app/matieres/matiere.service.ts":
/*!*********************************************!*\
  !*** ./src/app/matieres/matiere.service.ts ***!
  \*********************************************/
/*! exports provided: MatiereService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatiereService", function() { return MatiereService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatiereService = /** @class */ (function () {
    function MatiereService(http) {
        this.http = http;
    }
    /*getMatiere() {
      return this
        .http
        .get(`${this.url}/matieres`);
    }
  
    createMatiere(data) {
      this.http.post(`${this.url}/matieres`, data)
        .subscribe(
          res => {
            console.log(res);
            this.toastr.success('Votre matière a été créer avec succès.', 'Success');
            this.router.navigateByUrl('/matiere');
          },
          err => {
            console.log('Error occured:' , err);
            this.toastr.error(err.message, 'Error occured');
          }
        );
    }*/
    MatiereService.prototype.getMatiere = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/matieres");
    };
    MatiereService.prototype.createMatiere = function (body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/matieres", body);
    };
    MatiereService.prototype.deleteMatiere = function (id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/matieres/delete", { 'id': id })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return id; }));
    };
    MatiereService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MatiereService);
    return MatiereService;
}());



/***/ }),

/***/ "./src/app/matieres/matieres.component.css":
/*!*************************************************!*\
  !*** ./src/app/matieres/matieres.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/matieres/matieres.component.html":
/*!**************************************************!*\
  !*** ./src/app/matieres/matieres.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 pad-10\">\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"goToAddMatiere()\">\n      <span class=\"glyphicon glyphicon-floppy-disk\"></span> Ajout Matiere\n    </button>\n  </div>\n</div>\n\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>ID</th>\n    <th>Libélle</th>\n    <th>Coefficient</th>\n    <th>Actions</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let matiere of matieres$| async;\">\n    <td>{{ matiere.id }}</td>\n    <td>{{ matiere.libelle }}</td>\n    <td>{{ matiere.coefficient }}</td>\n    <td>\n      <div>\n        <button class=\"btn\" (click)=\"deleteMatiere(matiere.id)\">Supprimer</button>\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/matieres/matieres.component.ts":
/*!************************************************!*\
  !*** ./src/app/matieres/matieres.component.ts ***!
  \************************************************/
/*! exports provided: MatieresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatieresComponent", function() { return MatieresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_matiere_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/matiere.action */ "./src/app/store/actions/matiere.action.ts");
/* harmony import */ var _store_selectors_matiere_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selectors/matiere.selector */ "./src/app/store/selectors/matiere.selector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatieresComponent = /** @class */ (function () {
    function MatieresComponent(router, store) {
        this.router = router;
        this.store = store;
        this.matieres$ = store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_matiere_selector__WEBPACK_IMPORTED_MODULE_4__["selectMatiereListEntitiesConverted$"]));
        this.matieresLoading = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_matiere_selector__WEBPACK_IMPORTED_MODULE_4__["selectMatieresLoading$"]));
    }
    MatieresComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_actions_matiere_action__WEBPACK_IMPORTED_MODULE_3__["MatiereListModule"].LoadInitMatieres());
    };
    MatieresComponent.prototype.goToAddMatiere = function () {
        this.router.navigateByUrl('/ajout-matiere');
    };
    MatieresComponent.prototype.deleteMatiere = function (id) {
        this.store.dispatch(new _store_actions_matiere_action__WEBPACK_IMPORTED_MODULE_3__["MatiereListModule"].LoadDeleteMatiere(id));
    };
    MatieresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-matieres',
            template: __webpack_require__(/*! ./matieres.component.html */ "./src/app/matieres/matieres.component.html"),
            styles: [__webpack_require__(/*! ./matieres.component.css */ "./src/app/matieres/matieres.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MatieresComponent);
    return MatieresComponent;
}());



/***/ }),

/***/ "./src/app/pessoas-parent/pessoas-parent.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pessoas-parent/pessoas-parent.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pessoas-parent/pessoas-parent.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pessoas-parent/pessoas-parent.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <app-pessoas></app-pessoas>\n  </div>\n  <div class=\"col-md-6\" style=\"margin-top: 10px;\">\n    <!--<app-pessoas-clone></app-pessoas-clone>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pessoas-parent/pessoas-parent.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pessoas-parent/pessoas-parent.component.ts ***!
  \************************************************************/
/*! exports provided: PessoasParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoasParentComponent", function() { return PessoasParentComponent; });
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

var PessoasParentComponent = /** @class */ (function () {
    function PessoasParentComponent() {
    }
    PessoasParentComponent.prototype.ngOnInit = function () {
    };
    PessoasParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pessoas-parent',
            template: __webpack_require__(/*! ./pessoas-parent.component.html */ "./src/app/pessoas-parent/pessoas-parent.component.html"),
            styles: [__webpack_require__(/*! ./pessoas-parent.component.css */ "./src/app/pessoas-parent/pessoas-parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PessoasParentComponent);
    return PessoasParentComponent;
}());



/***/ }),

/***/ "./src/app/pessoas/pessoa.service.ts":
/*!*******************************************!*\
  !*** ./src/app/pessoas/pessoa.service.ts ***!
  \*******************************************/
/*! exports provided: PessoaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaService", function() { return PessoaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PessoaService = /** @class */ (function () {
    function PessoaService(http) {
        this.http = http;
    }
    PessoaService.prototype.getPessoa = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/pessoas");
    };
    PessoaService.prototype.createPessoa = function (body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/pessoas", body);
    };
    PessoaService.prototype.deletePessoa = function (cpf) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/pessoas/delete", { 'cpf': cpf })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return cpf; }));
    };
    PessoaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PessoaService);
    return PessoaService;
}());



/***/ }),

/***/ "./src/app/pessoas/pessoas.component.css":
/*!***********************************************!*\
  !*** ./src/app/pessoas/pessoas.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pessoas/pessoas.component.html":
/*!************************************************!*\
  !*** ./src/app/pessoas/pessoas.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 pad-10\">\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"goToAddPessoa()\">\n      <span class=\"glyphicon glyphicon-floppy-disk\"></span> Adicionar Pessoa\n    </button>\n  </div>\n</div>\n\n<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>CPF</th>\n    <th>Nome</th>\n    <th>Ação</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let pessoa of pessoas$| async;\">\n    <td>{{ pessoa.cpf }}</td>\n    <td>{{ pessoa.nome }}</td>\n    <td>\n      <div>\n        <button class=\"btn\" (click)=\"deletePessoa(pessoa.cpf)\">Remover</button>\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/pessoas/pessoas.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pessoas/pessoas.component.ts ***!
  \**********************************************/
/*! exports provided: PessoasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoasComponent", function() { return PessoasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_pessoa_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/pessoa.action */ "./src/app/store/actions/pessoa.action.ts");
/* harmony import */ var _store_selectors_pessoa_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selectors/pessoa.selector */ "./src/app/store/selectors/pessoa.selector.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PessoasComponent = /** @class */ (function () {
    function PessoasComponent(router, store) {
        this.router = router;
        this.store = store;
        this.pessoas$ = store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_pessoa_selector__WEBPACK_IMPORTED_MODULE_4__["selectPessoaListEntitiesConverted$"]));
        this.pessoasLoading = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_pessoa_selector__WEBPACK_IMPORTED_MODULE_4__["selectPessoasLoading$"]));
    }
    PessoasComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_actions_pessoa_action__WEBPACK_IMPORTED_MODULE_3__["PessoaListModule"].LoadInitPessoas());
    };
    PessoasComponent.prototype.goToAddPessoa = function () {
        this.router.navigateByUrl('/criar-pessoa');
    };
    PessoasComponent.prototype.deletePessoa = function (cpf) {
        this.store.dispatch(new _store_actions_pessoa_action__WEBPACK_IMPORTED_MODULE_3__["PessoaListModule"].LoadDeletePessoa(cpf));
    };
    PessoasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pessoas',
            template: __webpack_require__(/*! ./pessoas.component.html */ "./src/app/pessoas/pessoas.component.html"),
            styles: [__webpack_require__(/*! ./pessoas.component.css */ "./src/app/pessoas/pessoas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PessoasComponent);
    return PessoasComponent;
}());



/***/ }),

/***/ "./src/app/reserva/reserva.component.css":
/*!***********************************************!*\
  !*** ./src/app/reserva/reserva.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reserva/reserva.component.html":
/*!************************************************!*\
  !*** ./src/app/reserva/reserva.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Voe conosco. Faça já a sua Reserva!</h2>\n\n<form [formGroup]=\"checkoutForm\"\n\n(ngSubmit)=\"onSubmit(checkoutForm.value)\">\n\n<div>\n  <label for=\"QtdPessoas\">\n    Quantidade de Pessoas\n  </label>\n  <input id=\"QtdPessoas\" type=\"text\" formControlQtdPessoas=\"QtdPessoas\">\n</div>\n\n<div>\n  <label for=\"CidadeO\">\n    Cidade Origem\n  </label>\n  <input id=\"CidadeO\" type=\"text\" formControlCidadeO=\"CidadeO\">\n</div>\n\n<div>\n  <label for=\"CidadeD\">\n    Cidade Destino\n  </label>\n  <input id=\"CidadeD\" type=\"text\" formControlCidadeD=\"CidadeD\">\n</div>\n\n<div>\n  <label for=\"DataIda\">\n    Data Ida\n  </label>\n  <input id=\"DataIda\" type=\"text\" formControlDataIda=\"DataIda\">\n</div>\n\n<div>\n  <label for=\"DataVolta\">\n    Data Volta\n  </label>\n  <input id=\"DataVolta\" type=\"text\" formControlDataVolta=\"DataVolta\">\n</div>\n\n<button class=\"button\" type=\"submit\">Purchase</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/reserva/reserva.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reserva/reserva.component.ts ***!
  \**********************************************/
/*! exports provided: ReservaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaComponent", function() { return ReservaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SelectItem } from 'primeng/api';
//import { products } from '../products';
var ReservaComponent = /** @class */ (function () {
    function ReservaComponent(formBuilder) {
        this.formBuilder = formBuilder;
        //cidades: SelectItem[];
        this.products = [
            {
                name: 'Quantidade de Pessoas:',
                description: ''
            },
            {
                name: 'Cidade Origem:',
                description: 'A great phone with one of the best cameras'
            },
            {
                name: 'Cidade Destino:',
                description: 'A great phone with one of the best cameras'
            },
            {
                name: 'Data de Ida:',
                description: 'A great phone with one of the best cameras'
            },
            {
                name: 'Data de Volta:',
                description: 'A great phone with one of the best cameras'
            },
        ];
        this.checkoutForm = this.formBuilder.group({
            QtdPessoas: '',
            CidadeO: '',
            CidadeD: '',
            DataIda: '',
            DataVolta: '',
        });
    }
    ReservaComponent.prototype.ngOnInit = function () {
        /*this.cidades = [
          {label: 'Belo Horizonte', value: 'Belo Horizonte' },
          {label: 'São Paulo', value: 'São Paulo'},
          {label: 'Rio de Janeiro', value: 'Rio de Janeiro'}
        ];*/
    };
    ReservaComponent.prototype.onSubmit = function (customerData) {
        // Process checkout data here
        console.warn('Your order has been submitted', customerData);
        this.checkoutForm.reset();
    };
    ReservaComponent.prototype.share = function () {
        window.alert('The product has been shared!');
    };
    ReservaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reserva',
            template: __webpack_require__(/*! ./reserva.component.html */ "./src/app/reserva/reserva.component.html"),
            styles: [__webpack_require__(/*! ./reserva.component.css */ "./src/app/reserva/reserva.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ReservaComponent);
    return ReservaComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/cidade.action.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/cidade.action.ts ***!
  \************************************************/
/*! exports provided: CidadeListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeListModule", function() { return CidadeListModule; });
var CidadeListModule;
(function (CidadeListModule) {
    var ActionTypes;
    (function (ActionTypes) {
        ActionTypes["LOAD_INIT_CIDADES"] = "[cidadeList] Load Init Cidade";
        ActionTypes["SUCCESS_INIT_CIDADES"] = "[cidadeList] Success Init Cidade";
        ActionTypes["LOAD_DELETE_CIDADE"] = "[todoList] Load Delete Cidade";
        ActionTypes["SUCCESS_DELETE_CIDADE"] = "[todoList] Success Delete Cidade";
        ActionTypes["LOAD_CREATE_CIDADE"] = "[cidadeList] Load Create Cidade";
        ActionTypes["SUCCESS_CREATE_CIDADE"] = "[cidadeList] Success CreateCidade";
        ActionTypes["ERROR_LOAD_ACTION"] = "[cidadeList] Error Load Action";
    })(ActionTypes = CidadeListModule.ActionTypes || (CidadeListModule.ActionTypes = {}));
    var LoadInitCidades = /** @class */ (function () {
        function LoadInitCidades() {
            this.type = ActionTypes.LOAD_INIT_CIDADES;
        }
        return LoadInitCidades;
    }());
    CidadeListModule.LoadInitCidades = LoadInitCidades;
    var SuccessInitCidades = /** @class */ (function () {
        function SuccessInitCidades(payload) {
            this.payload = payload;
            this.type = ActionTypes.SUCCESS_INIT_CIDADES;
        }
        return SuccessInitCidades;
    }());
    CidadeListModule.SuccessInitCidades = SuccessInitCidades;
    var LoadDeleteCidade = /** @class */ (function () {
        function LoadDeleteCidade(payload) {
            this.payload = payload;
            this.type = ActionTypes.LOAD_DELETE_CIDADE;
        }
        return LoadDeleteCidade;
    }());
    CidadeListModule.LoadDeleteCidade = LoadDeleteCidade;
    var SuccessDeleteCidade = /** @class */ (function () {
        function SuccessDeleteCidade(payload) {
            this.payload = payload;
            this.type = ActionTypes.SUCCESS_DELETE_CIDADE;
        }
        return SuccessDeleteCidade;
    }());
    CidadeListModule.SuccessDeleteCidade = SuccessDeleteCidade;
    var LoadCreateCidade = /** @class */ (function () {
        function LoadCreateCidade(payload) {
            this.payload = payload;
            this.type = ActionTypes.LOAD_CREATE_CIDADE;
        }
        return LoadCreateCidade;
    }());
    CidadeListModule.LoadCreateCidade = LoadCreateCidade;
    var SuccessCreateCidade = /** @class */ (function () {
        function SuccessCreateCidade(payload) {
            this.payload = payload;
            this.type = ActionTypes.SUCCESS_CREATE_CIDADE;
        }
        return SuccessCreateCidade;
    }());
    CidadeListModule.SuccessCreateCidade = SuccessCreateCidade;
    var ErrorLoadAction = /** @class */ (function () {
        function ErrorLoadAction(payload) {
            this.payload = payload;
            this.type = ActionTypes.ERROR_LOAD_ACTION;
        }
        return ErrorLoadAction;
    }());
    CidadeListModule.ErrorLoadAction = ErrorLoadAction;
})(CidadeListModule || (CidadeListModule = {}));


/***/ }),

/***/ "./src/app/store/actions/matiere.action.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/matiere.action.ts ***!
  \*************************************************/
/*! exports provided: MatiereListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatiereListModule", function() { return MatiereListModule; });
var MatiereListModule;
(function (MatiereListModule) {
    var ActionTypes;
    (function (ActionTypes) {
        ActionTypes["LOAD_INIT_MATIERES"] = "[matiereList] Load Init Matieres";
        ActionTypes["SUCCESS_INIT_MATIERES"] = "[matiereList] Success Init Matieres";
        ActionTypes["LOAD_DELETE_MATIERE"] = "[todoList] Load Delete Matiere";
        ActionTypes["SUCCESS_DELETE_MATIERE"] = "[todoList] Success Delete Matiere";
        ActionTypes["LOAD_CREATE_MATIERE"] = "[matiereList] Load Create Matiere";
        ActionTypes["SUCCESS_CREATE_MATIERE"] = "[matiereList] Success Create Matiere";
        ActionTypes["ERROR_LOAD_ACTION"] = "[matiereList] Error Load Action";
    })(ActionTypes = MatiereListModule.ActionTypes || (MatiereListModule.ActionTypes = {}));
    var LoadInitMatieres = /** @class */ (function () {
        function LoadInitMatieres() {
            this.type = ActionTypes.LOAD_INIT_MATIERES;
        }
        return LoadInitMatieres;
    }());
    MatiereListModule.LoadInitMatieres = LoadInitMatieres;
    var SuccessInitMatieres = /** @class */ (function () {
        function SuccessInitMatieres(payload) {
            this.payload = payload;
            this.type = ActionTypes.SUCCESS_INIT_MATIERES;
        }
        return SuccessInitMatieres;
    }());
    MatiereListModule.SuccessInitMatieres = SuccessInitMatieres;
    var LoadDeleteMatiere = /** @class */ (function () {
        function LoadDeleteMatiere(payload) {
            this.payload = payload;
            this.type = ActionTypes.LOAD_DELETE_MATIERE;
        }
        return LoadDeleteMatiere;
    }());
    MatiereListModule.LoadDeleteMatiere = LoadDeleteMatiere;
    var SuccessDeleteMatiere = /** @class */ (function () {
        function SuccessDeleteMatiere(payload) {
            this.payload = payload;
            this.type = ActionTypes.SUCCESS_DELETE_MATIERE;
        }
        return SuccessDeleteMatiere;
    }());
    MatiereListModule.SuccessDeleteMatiere = SuccessDeleteMatiere;
    var LoadCreateMatiere = /** @class */ (function () {
        function LoadCreateMatiere(payload) {
            this.payload = payload;
            this.type = ActionTypes.LOAD_CREATE_MATIERE;
        }
        return LoadCreateMatiere;
    }());
    MatiereListModule.LoadCreateMatiere = LoadCreateMatiere;
    var SuccessCreateMatiere = /** @class */ (function () {
        function SuccessCreateMatiere(payload) {
            this.payload = payload;
            this.type = ActionTypes.SUCCESS_CREATE_MATIERE;
        }
        return SuccessCreateMatiere;
    }());
    MatiereListModule.SuccessCreateMatiere = SuccessCreateMatiere;
    var ErrorLoadAction = /** @class */ (function () {
        function ErrorLoadAction(payload) {
            this.payload = payload;
            this.type = ActionTypes.ERROR_LOAD_ACTION;
        }
        return ErrorLoadAction;
    }());
    MatiereListModule.ErrorLoadAction = ErrorLoadAction;
})(MatiereListModule || (MatiereListModule = {}));


/***/ }),

/***/ "./src/app/store/actions/pessoa.action.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/pessoa.action.ts ***!
  \************************************************/
/*! exports provided: PessoaListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaListModule", function() { return PessoaListModule; });
var PessoaListModule;
(function (PessoaListModule) {
    var ActionTypes;
    (function (ActionTypes) {
        ActionTypes["LOAD_INIT_PESSOAS"] = "[pessoaList] Load Init Pessoa";
        ActionTypes["SUCCESS_INIT_PESSOAS"] = "[pessoaList] Success Init Pessoa";
        ActionTypes["LOAD_DELETE_PESSOA"] = "[todoList] Load Delete Pessoa";
        ActionTypes["SUCCESS_DELETE_PESSOA"] = "[todoList] Success Delete Pessoa";
        ActionTypes["LOAD_CREATE_PESSOA"] = "[pessoaList] Load Create Pessoa";
        ActionTypes["SUCCESS_CREATE_PESSOA"] = "[pessoaList] Success Create Pessoa";
        ActionTypes["ERROR_LOAD_ACTION"] = "[pessoaList] Error Load Action";
    })(ActionTypes = PessoaListModule.ActionTypes || (PessoaListModule.ActionTypes = {}));
    var LoadInitPessoas = /** @class */ (function () {
        function LoadInitPessoas() {
            this.type = ActionTypes.LOAD_INIT_PESSOAS;
        }
        return LoadInitPessoas;
    }());
    PessoaListModule.LoadInitPessoas = LoadInitPessoas;
    var SuccessInitPessoas = /** @class */ (function () {
        function SuccessInitPessoas(payload) {
            this.payload = payload;
            this.type = ActionTypes.SUCCESS_INIT_PESSOAS;
        }
        return SuccessInitPessoas;
    }());
    PessoaListModule.SuccessInitPessoas = SuccessInitPessoas;
    var LoadDeletePessoa = /** @class */ (function () {
        function LoadDeletePessoa(payload) {
            this.payload = payload;
            this.type = ActionTypes.LOAD_DELETE_PESSOA;
        }
        return LoadDeletePessoa;
    }());
    PessoaListModule.LoadDeletePessoa = LoadDeletePessoa;
    var SuccessDeletePessoa = /** @class */ (function () {
        function SuccessDeletePessoa(payload) {
            this.payload = payload;
            this.type = ActionTypes.SUCCESS_DELETE_PESSOA;
        }
        return SuccessDeletePessoa;
    }());
    PessoaListModule.SuccessDeletePessoa = SuccessDeletePessoa;
    var LoadCreatePessoa = /** @class */ (function () {
        function LoadCreatePessoa(payload) {
            this.payload = payload;
            this.type = ActionTypes.LOAD_CREATE_PESSOA;
        }
        return LoadCreatePessoa;
    }());
    PessoaListModule.LoadCreatePessoa = LoadCreatePessoa;
    var SuccessCreatePessoa = /** @class */ (function () {
        function SuccessCreatePessoa(payload) {
            this.payload = payload;
            this.type = ActionTypes.SUCCESS_CREATE_PESSOA;
        }
        return SuccessCreatePessoa;
    }());
    PessoaListModule.SuccessCreatePessoa = SuccessCreatePessoa;
    var ErrorLoadAction = /** @class */ (function () {
        function ErrorLoadAction(payload) {
            this.payload = payload;
            this.type = ActionTypes.ERROR_LOAD_ACTION;
        }
        return ErrorLoadAction;
    }());
    PessoaListModule.ErrorLoadAction = ErrorLoadAction;
})(PessoaListModule || (PessoaListModule = {}));


/***/ }),

/***/ "./src/app/store/effects/cidade.effect.ts":
/*!************************************************!*\
  !*** ./src/app/store/effects/cidade.effect.ts ***!
  \************************************************/
/*! exports provided: CidadeListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeListEffects", function() { return CidadeListEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cidades_cidade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cidades/cidade.service */ "./src/app/cidades/cidade.service.ts");
/* harmony import */ var _actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/cidade.action */ "./src/app/store/actions/cidade.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CidadeListEffects = /** @class */ (function () {
    function CidadeListEffects(cidadeListService, actions$) {
        var _this = this;
        this.cidadeListService = cidadeListService;
        this.actions$ = actions$;
        // Ecoute les actions passées dans le store
        this.LoadCidades$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__["CidadeListModule"].ActionTypes.LOAD_INIT_CIDADES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.cidadeListService.getCidade(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cidades) { return new _actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__["CidadeListModule"].SuccessInitCidades(cidades); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__["CidadeListModule"].ErrorLoadAction(err)); }));
        this.LoadCreateCidade$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__["CidadeListModule"].ActionTypes.LOAD_CREATE_CIDADE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.cidadeListService.createCidade(action.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cidade) { return new _actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__["CidadeListModule"].SuccessCreateCidade(cidade); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__["CidadeListModule"].ErrorLoadAction(err)); }));
        this.LoadDeleteCidade$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__["CidadeListModule"].ActionTypes.LOAD_DELETE_CIDADE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.cidadeListService.deleteCidade(action.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (nome) { return new _actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__["CidadeListModule"].SuccessDeleteCidade(nome); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_cidade_action__WEBPACK_IMPORTED_MODULE_6__["CidadeListModule"].ErrorLoadAction(err)); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], CidadeListEffects.prototype, "LoadCidades$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], CidadeListEffects.prototype, "LoadCreateCidade$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], CidadeListEffects.prototype, "LoadDeleteCidade$", void 0);
    CidadeListEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_cidades_cidade_service__WEBPACK_IMPORTED_MODULE_5__["CidadeService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], CidadeListEffects);
    return CidadeListEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/matiere.effect.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/matiere.effect.ts ***!
  \*************************************************/
/*! exports provided: MatiereListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatiereListEffects", function() { return MatiereListEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _matieres_matiere_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../matieres/matiere.service */ "./src/app/matieres/matiere.service.ts");
/* harmony import */ var _actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/matiere.action */ "./src/app/store/actions/matiere.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MatiereListEffects = /** @class */ (function () {
    function MatiereListEffects(matiereListService, actions$) {
        var _this = this;
        this.matiereListService = matiereListService;
        this.actions$ = actions$;
        // Ecoute les actions passées dans le store
        this.LoadMatieres$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__["MatiereListModule"].ActionTypes.LOAD_INIT_MATIERES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.matiereListService.getMatiere(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (matieres) { return new _actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__["MatiereListModule"].SuccessInitMatieres(matieres); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__["MatiereListModule"].ErrorLoadAction(err)); }));
        this.LoadCreateMatiere$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__["MatiereListModule"].ActionTypes.LOAD_CREATE_MATIERE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.matiereListService.createMatiere(action.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (matiere) { return new _actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__["MatiereListModule"].SuccessCreateMatiere(matiere); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__["MatiereListModule"].ErrorLoadAction(err)); }));
        this.LoadDeleteMatiere$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__["MatiereListModule"].ActionTypes.LOAD_DELETE_MATIERE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.matiereListService.deleteMatiere(action.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (id) { return new _actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__["MatiereListModule"].SuccessDeleteMatiere(id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_matiere_action__WEBPACK_IMPORTED_MODULE_6__["MatiereListModule"].ErrorLoadAction(err)); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], MatiereListEffects.prototype, "LoadMatieres$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], MatiereListEffects.prototype, "LoadCreateMatiere$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], MatiereListEffects.prototype, "LoadDeleteMatiere$", void 0);
    MatiereListEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_matieres_matiere_service__WEBPACK_IMPORTED_MODULE_5__["MatiereService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], MatiereListEffects);
    return MatiereListEffects;
}());



/***/ }),

/***/ "./src/app/store/effects/pessoa.effect.ts":
/*!************************************************!*\
  !*** ./src/app/store/effects/pessoa.effect.ts ***!
  \************************************************/
/*! exports provided: PessoaListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaListEffects", function() { return PessoaListEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pessoas_pessoa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pessoas/pessoa.service */ "./src/app/pessoas/pessoa.service.ts");
/* harmony import */ var _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/pessoa.action */ "./src/app/store/actions/pessoa.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PessoaListEffects = /** @class */ (function () {
    function PessoaListEffects(pessoaListService, actions$) {
        var _this = this;
        this.pessoaListService = pessoaListService;
        this.actions$ = actions$;
        // Ecoute les actions passées dans le store
        this.LoadPessoas$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__["PessoaListModule"].ActionTypes.LOAD_INIT_PESSOAS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.pessoaListService.getPessoa(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pessoas) { return new _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__["PessoaListModule"].SuccessInitPessoas(pessoas); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__["PessoaListModule"].ErrorLoadAction(err)); }));
        this.LoadCreatePessoa$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__["PessoaListModule"].ActionTypes.LOAD_CREATE_PESSOA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.pessoaListService.createPessoa(action.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pessoa) { return new _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__["PessoaListModule"].SuccessCreatePessoa(pessoa); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__["PessoaListModule"].ErrorLoadAction(err)); }));
        this.LoadDeletePessoa$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__["PessoaListModule"].ActionTypes.LOAD_DELETE_PESSOA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) { return _this.pessoaListService.deletePessoa(action.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (cpf) { return new _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__["PessoaListModule"].SuccessDeletePessoa(cpf); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_6__["PessoaListModule"].ErrorLoadAction(err)); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PessoaListEffects.prototype, "LoadPessoas$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PessoaListEffects.prototype, "LoadCreatePessoa$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], PessoaListEffects.prototype, "LoadDeletePessoa$", void 0);
    PessoaListEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_pessoas_pessoa_service__WEBPACK_IMPORTED_MODULE_5__["PessoaService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], PessoaListEffects);
    return PessoaListEffects;
}());



/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: getReducers, REDUCER_TOKEN, appEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReducers", function() { return getReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDUCER_TOKEN", function() { return REDUCER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEffects", function() { return appEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _effects_matiere_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/matiere.effect */ "./src/app/store/effects/matiere.effect.ts");
/* harmony import */ var _reducers_matiere_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/matiere.reducer */ "./src/app/store/reducers/matiere.reducer.ts");
/* harmony import */ var _effects_pessoa_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects/pessoa.effect */ "./src/app/store/effects/pessoa.effect.ts");
/* harmony import */ var _reducers_pessoa_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/pessoa.reducer */ "./src/app/store/reducers/pessoa.reducer.ts");
/* harmony import */ var _effects_cidade_effect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./effects/cidade.effect */ "./src/app/store/effects/cidade.effect.ts");
/* harmony import */ var _reducers_cidade_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/cidade.reducer */ "./src/app/store/reducers/cidade.reducer.ts");







// Le root reducer
var reducers = {
    matieres: _reducers_matiere_reducer__WEBPACK_IMPORTED_MODULE_2__["matieresReducer"],
    pessoas: _reducers_pessoa_reducer__WEBPACK_IMPORTED_MODULE_4__["pessoasReducer"],
    cidade: _reducers_cidade_reducer__WEBPACK_IMPORTED_MODULE_6__["cidadesReducer"],
};
// Nécéssaire pour l'AOT
function getReducers() {
    return reducers;
}
// Nécéssaire pour l'AOT
var REDUCER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Registered Reducers');
var appEffects = [_effects_matiere_effect__WEBPACK_IMPORTED_MODULE_1__["MatiereListEffects"], _effects_pessoa_effect__WEBPACK_IMPORTED_MODULE_3__["PessoaListEffects"], _effects_cidade_effect__WEBPACK_IMPORTED_MODULE_5__["CidadeListEffects"]];


/***/ }),

/***/ "./src/app/store/reducers/cidade.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/reducers/cidade.reducer.ts ***!
  \**************************************************/
/*! exports provided: CidadeListAdapter, initialState, selectCidadesIds, selectCidadesEntities, selectCidades, selectTotalCidades, cidadesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeListAdapter", function() { return CidadeListAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCidadesIds", function() { return selectCidadesIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCidadesEntities", function() { return selectCidadesEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCidades", function() { return selectCidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalCidades", function() { return selectTotalCidades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cidadesReducer", function() { return cidadesReducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions_cidade_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/cidade.action */ "./src/app/store/actions/cidade.action.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var CidadeListAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: false
});
var initialState = CidadeListAdapter.getInitialState({
    loading: false,
    loaded: false,
    selectCidade: undefined,
    logs: undefined
});
var selectCidadesIds = (_a = CidadeListAdapter.getSelectors(), _a.selectIds), selectCidadesEntities = _a.selectEntities, selectCidades = _a.selectAll, selectTotalCidades = _a.selectTotal;
function cidadesReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_cidade_action__WEBPACK_IMPORTED_MODULE_1__["CidadeListModule"].ActionTypes.LOAD_INIT_CIDADES:
            // Passe le loading a true
            return __assign({}, state, { loading: true });
        case _actions_cidade_action__WEBPACK_IMPORTED_MODULE_1__["CidadeListModule"].ActionTypes.SUCCESS_INIT_CIDADES:
            return __assign({}, CidadeListAdapter.addMany(action.payload, state), { loading: false, loaded: true });
        case _actions_cidade_action__WEBPACK_IMPORTED_MODULE_1__["CidadeListModule"].ActionTypes.LOAD_DELETE_CIDADE:
            return __assign({}, state, { loading: true });
        case _actions_cidade_action__WEBPACK_IMPORTED_MODULE_1__["CidadeListModule"].ActionTypes.SUCCESS_DELETE_CIDADE:
            return __assign({}, CidadeListAdapter.removeOne(action.payload, state), { logs: { type: 'SUCCESS', message: 'Cidade excluída com sucesso' } });
        case _actions_cidade_action__WEBPACK_IMPORTED_MODULE_1__["CidadeListModule"].ActionTypes.LOAD_CREATE_CIDADE:
            // Passe le loading a true
            return __assign({}, state, { loading: true });
        case _actions_cidade_action__WEBPACK_IMPORTED_MODULE_1__["CidadeListModule"].ActionTypes.SUCCESS_CREATE_CIDADE:
            // Passe le loading a false et ajoute une cidade
            return __assign({}, CidadeListAdapter.addOne(action.payload, state), { loading: false, logs: { type: 'SUCCESS', message: 'Cidade criada com sucesso' } });
        case _actions_cidade_action__WEBPACK_IMPORTED_MODULE_1__["CidadeListModule"].ActionTypes.ERROR_LOAD_ACTION:
            return __assign({}, state, { logs: { type: 'ERROR', message: action.payload.message }, loading: false });
        default:
            return state;
    }
}
var _a;


/***/ }),

/***/ "./src/app/store/reducers/matiere.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/matiere.reducer.ts ***!
  \***************************************************/
/*! exports provided: MatiereListAdapter, initialState, selectMatieresIds, selectMatieresEntities, selectMatieres, selectTotalMatieres, matieresReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatiereListAdapter", function() { return MatiereListAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMatieresIds", function() { return selectMatieresIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMatieresEntities", function() { return selectMatieresEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMatieres", function() { return selectMatieres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalMatieres", function() { return selectTotalMatieres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matieresReducer", function() { return matieresReducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/matiere.action */ "./src/app/store/actions/matiere.action.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var MatiereListAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: false
});
var initialState = MatiereListAdapter.getInitialState({
    loading: false,
    loaded: false,
    selectMatiere: undefined,
    logs: undefined
});
var selectMatieresIds = (_a = MatiereListAdapter.getSelectors(), _a.selectIds), selectMatieresEntities = _a.selectEntities, selectMatieres = _a.selectAll, selectTotalMatieres = _a.selectTotal;
function matieresReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__["MatiereListModule"].ActionTypes.LOAD_INIT_MATIERES:
            // Passe le loading a true
            return __assign({}, state, { loading: true });
        case _actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__["MatiereListModule"].ActionTypes.SUCCESS_INIT_MATIERES:
            return __assign({}, MatiereListAdapter.addMany(action.payload, state), { loading: false, loaded: true });
        case _actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__["MatiereListModule"].ActionTypes.LOAD_DELETE_MATIERE:
            return __assign({}, state, { loading: true });
        case _actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__["MatiereListModule"].ActionTypes.SUCCESS_DELETE_MATIERE:
            return __assign({}, MatiereListAdapter.removeOne(action.payload, state), { logs: { type: 'SUCCESS', message: 'La matiere a été supprimée avec succès' } });
        case _actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__["MatiereListModule"].ActionTypes.LOAD_CREATE_MATIERE:
            // Passe le loading a true
            return __assign({}, state, { loading: true });
        case _actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__["MatiereListModule"].ActionTypes.SUCCESS_CREATE_MATIERE:
            // Passe le loading a false et ajoute une matiere
            return __assign({}, MatiereListAdapter.addOne(action.payload, state), { loading: false, logs: { type: 'SUCCESS', message: 'La matiere a été créée avec succès' } });
        case _actions_matiere_action__WEBPACK_IMPORTED_MODULE_1__["MatiereListModule"].ActionTypes.ERROR_LOAD_ACTION:
            return __assign({}, state, { logs: { type: 'ERROR', message: action.payload.message }, loading: false });
        default:
            return state;
    }
}
var _a;


/***/ }),

/***/ "./src/app/store/reducers/pessoa.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/reducers/pessoa.reducer.ts ***!
  \**************************************************/
/*! exports provided: PessoaListAdapter, initialState, selectPessoasIds, selectPessoasEntities, selectPessoas, selectTotalPessoas, pessoasReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaListAdapter", function() { return PessoaListAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPessoasIds", function() { return selectPessoasIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPessoasEntities", function() { return selectPessoasEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPessoas", function() { return selectPessoas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalPessoas", function() { return selectTotalPessoas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pessoasReducer", function() { return pessoasReducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/pessoa.action */ "./src/app/store/actions/pessoa.action.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var PessoaListAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: false
});
var initialState = PessoaListAdapter.getInitialState({
    loading: false,
    loaded: false,
    selectPessoa: undefined,
    logs: undefined
});
var selectPessoasIds = (_a = PessoaListAdapter.getSelectors(), _a.selectIds), selectPessoasEntities = _a.selectEntities, selectPessoas = _a.selectAll, selectTotalPessoas = _a.selectTotal;
function pessoasReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_1__["PessoaListModule"].ActionTypes.LOAD_INIT_PESSOAS:
            // Passe le loading a true
            return __assign({}, state, { loading: true });
        case _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_1__["PessoaListModule"].ActionTypes.SUCCESS_INIT_PESSOAS:
            return __assign({}, PessoaListAdapter.addMany(action.payload, state), { loading: false, loaded: true });
        case _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_1__["PessoaListModule"].ActionTypes.LOAD_DELETE_PESSOA:
            return __assign({}, state, { loading: true });
        case _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_1__["PessoaListModule"].ActionTypes.SUCCESS_DELETE_PESSOA:
            return __assign({}, PessoaListAdapter.removeOne(action.payload, state), { logs: { type: 'SUCCESS', message: 'Pessoa excluída com sucesso' } });
        case _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_1__["PessoaListModule"].ActionTypes.LOAD_CREATE_PESSOA:
            // Passe le loading a true
            return __assign({}, state, { loading: true });
        case _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_1__["PessoaListModule"].ActionTypes.SUCCESS_CREATE_PESSOA:
            // Passe le loading a false et ajoute une pessoa
            return __assign({}, PessoaListAdapter.addOne(action.payload, state), { loading: false, logs: { type: 'SUCCESS', message: 'Pessoa criada com sucesso' } });
        case _actions_pessoa_action__WEBPACK_IMPORTED_MODULE_1__["PessoaListModule"].ActionTypes.ERROR_LOAD_ACTION:
            return __assign({}, state, { logs: { type: 'ERROR', message: action.payload.message }, loading: false });
        default:
            return state;
    }
}
var _a;


/***/ }),

/***/ "./src/app/store/selectors/cidade.selector.ts":
/*!****************************************************!*\
  !*** ./src/app/store/selectors/cidade.selector.ts ***!
  \****************************************************/
/*! exports provided: selectCidadesIds, selectCidadesEntities, selectCidades, selectTotalCidades, selectCidadeListState$, selectCidadeListEntitiesConverted$, selectCidadesLoading$, selectCidadesLoaded$, selectCidadesErrors$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCidadeListState$", function() { return selectCidadeListState$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCidadeListEntitiesConverted$", function() { return selectCidadeListEntitiesConverted$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCidadesLoading$", function() { return selectCidadesLoading$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCidadesLoaded$", function() { return selectCidadesLoaded$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCidadesErrors$", function() { return selectCidadesErrors$; });
/* harmony import */ var _reducers_cidade_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/cidade.reducer */ "./src/app/store/reducers/cidade.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCidadesIds", function() { return _reducers_cidade_reducer__WEBPACK_IMPORTED_MODULE_0__["selectCidadesIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCidadesEntities", function() { return _reducers_cidade_reducer__WEBPACK_IMPORTED_MODULE_0__["selectCidadesEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectCidades", function() { return _reducers_cidade_reducer__WEBPACK_IMPORTED_MODULE_0__["selectCidades"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotalCidades", function() { return _reducers_cidade_reducer__WEBPACK_IMPORTED_MODULE_0__["selectTotalCidades"]; });




var selectCidadeListState$ = function (state) { return state.cidades; };
var selectCidadeListEntitiesConverted$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCidadeListState$, _reducers_cidade_reducer__WEBPACK_IMPORTED_MODULE_0__["selectCidades"]);
var selectCidadesLoading$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCidadeListState$, function (cidades) { return cidades.loading; });
var selectCidadesLoaded$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCidadeListState$, function (cidades) { return cidades.loaded; });
var selectCidadesErrors$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCidadeListState$, function (cidades) { return cidades.logs; });


/***/ }),

/***/ "./src/app/store/selectors/matiere.selector.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/selectors/matiere.selector.ts ***!
  \*****************************************************/
/*! exports provided: selectMatieresIds, selectMatieresEntities, selectMatieres, selectTotalMatieres, selectMatiereListState$, selectMatiereListEntitiesConverted$, selectMatieresLoading$, selectMatieresLoaded$, selectMatieresErrors$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMatiereListState$", function() { return selectMatiereListState$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMatiereListEntitiesConverted$", function() { return selectMatiereListEntitiesConverted$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMatieresLoading$", function() { return selectMatieresLoading$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMatieresLoaded$", function() { return selectMatieresLoaded$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMatieresErrors$", function() { return selectMatieresErrors$; });
/* harmony import */ var _reducers_matiere_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/matiere.reducer */ "./src/app/store/reducers/matiere.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectMatieresIds", function() { return _reducers_matiere_reducer__WEBPACK_IMPORTED_MODULE_0__["selectMatieresIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectMatieresEntities", function() { return _reducers_matiere_reducer__WEBPACK_IMPORTED_MODULE_0__["selectMatieresEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectMatieres", function() { return _reducers_matiere_reducer__WEBPACK_IMPORTED_MODULE_0__["selectMatieres"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotalMatieres", function() { return _reducers_matiere_reducer__WEBPACK_IMPORTED_MODULE_0__["selectTotalMatieres"]; });




// La première fonction amène vers le state matieres
var selectMatiereListState$ = function (state) { return state.matieres; };
// Et à partir de celle-ci, on créer une autre fonction qui renverra data
/*export const selectMatieres$ = createSelector(selectMatiereListState$,(matieres) =>  matieres.data);*/
var selectMatiereListEntitiesConverted$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMatiereListState$, _reducers_matiere_reducer__WEBPACK_IMPORTED_MODULE_0__["selectMatieres"]);
var selectMatieresLoading$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMatiereListState$, function (matieres) { return matieres.loading; });
var selectMatieresLoaded$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMatiereListState$, function (matieres) { return matieres.loaded; });
var selectMatieresErrors$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMatiereListState$, function (matieres) { return matieres.logs; });


/***/ }),

/***/ "./src/app/store/selectors/pessoa.selector.ts":
/*!****************************************************!*\
  !*** ./src/app/store/selectors/pessoa.selector.ts ***!
  \****************************************************/
/*! exports provided: selectPessoasIds, selectPessoasEntities, selectPessoas, selectTotalPessoas, selectPessoaListState$, selectPessoaListEntitiesConverted$, selectPessoasLoading$, selectPessoasLoaded$, selectPessoasErrors$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPessoaListState$", function() { return selectPessoaListState$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPessoaListEntitiesConverted$", function() { return selectPessoaListEntitiesConverted$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPessoasLoading$", function() { return selectPessoasLoading$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPessoasLoaded$", function() { return selectPessoasLoaded$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPessoasErrors$", function() { return selectPessoasErrors$; });
/* harmony import */ var _reducers_pessoa_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/pessoa.reducer */ "./src/app/store/reducers/pessoa.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPessoasIds", function() { return _reducers_pessoa_reducer__WEBPACK_IMPORTED_MODULE_0__["selectPessoasIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPessoasEntities", function() { return _reducers_pessoa_reducer__WEBPACK_IMPORTED_MODULE_0__["selectPessoasEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPessoas", function() { return _reducers_pessoa_reducer__WEBPACK_IMPORTED_MODULE_0__["selectPessoas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotalPessoas", function() { return _reducers_pessoa_reducer__WEBPACK_IMPORTED_MODULE_0__["selectTotalPessoas"]; });




var selectPessoaListState$ = function (state) { return state.pessoas; };
var selectPessoaListEntitiesConverted$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectPessoaListState$, _reducers_pessoa_reducer__WEBPACK_IMPORTED_MODULE_0__["selectPessoas"]);
var selectPessoasLoading$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectPessoaListState$, function (pessoas) { return pessoas.loading; });
var selectPessoasLoaded$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectPessoaListState$, function (pessoas) { return pessoas.loaded; });
var selectPessoasErrors$ = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectPessoaListState$, function (pessoas) { return pessoas.logs; });


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
    production: false,
    apiUrl: 'http://localhost:3000'
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

module.exports = __webpack_require__(/*! /home/natalia/Downloads/ReservaAerea (cópia)/reservaaerea/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map