(self["webpackChunkcongestiometro_ui"] = self["webpackChunkcongestiometro_ui"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/keycodes */ 90084);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 94236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 92597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/chartTypes */ 30798);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/utils */ 7391);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng2-charts */ 41803);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ 73071);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data.service */ 52468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ 64106);
/* harmony import */ var _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/filters/filters.component */ 61443);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/users.component */ 25355);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/chips */ 79243);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/map/map.component */ 51006);
/* harmony import */ var _components_vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/vector-map/vector-map.component */ 10283);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ 47143);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);




































function AppComponent_div_0_ng_container_1_ng_container_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " izquierdo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_0_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-filters", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Cambiar gr\u00E1fico");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_1_ng_container_6_span_4_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("exportableData", ctx_r13.leftExportableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 2, ctx_r13.compare));
  }
}

function AppComponent_div_0_ng_container_1_mat_slide_toggle_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-slide-toggle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_div_0_ng_container_1_mat_slide_toggle_8_Template_mat_slide_toggle_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return ctx_r22.toggleCompare($event.checked);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Usar comparativa");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx_r14.compare));
  }
}

function AppComponent_div_0_ng_container_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_1_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return ctx_r24.resetFilters();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Borrar Filtros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_0_ng_container_1_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_1_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return ctx_r26.toggleUsers(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " Administrar Usuarios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_0_ng_container_1_app_users_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-users", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cancel", function AppComponent_div_0_ng_container_1_app_users_26_Template_app_users_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return ctx_r28.toggleUsers(false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Las 24 horas");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const filters_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).ngIf;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Horas: ", ctx_r43.getHoursString(filters_r38.hours), "");
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_3_span_4_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_3_span_5_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const filters_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" del ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 4, filters_r38.dateStart, "shortDate"), " al ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 7, filters_r38.dateEnd, "shortDate"), " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (filters_r38.hours == null ? null : filters_r38.hours.length) === 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((filters_r38.hours == null ? null : filters_r38.hours.length) || 0) < 24);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-slide-toggle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_div_5_Template_mat_slide_toggle_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
      return ctx_r46.barSameMaximum.next($event.checked);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Igualar m\u00E1ximos");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r40.barSameMaximum));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_mat_form_field_1_mat_chip_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-chip", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("removed", function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_mat_form_field_1_mat_chip_3_Template_mat_chip_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r60);
      const chart_r58 = restoredCtx.$implicit;
      const selected_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](8);
      return ctx_r59.toggleComparativeChart("delete", chart_r58, selected_r52);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const chart_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](chart_r58);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_mat_form_field_1_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const streetName_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", streetName_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", streetName_r62, " ");
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-chip-list", null, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_mat_form_field_1_mat_chip_3_Template, 6, 1, "mat-chip", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "mat-autocomplete", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("optionSelected", function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_mat_form_field_1_Template_mat_autocomplete_optionSelected_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r64);
      const selected_r52 = restoredCtx.ngIf;

      const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);

      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](8);
      return ctx_r63.toggleComparativeChart("add", $event.option.value, selected_r52, _r55);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_mat_form_field_1_mat_option_8_Template, 2, 2, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const selected_r52 = ctx.ngIf;

    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);

    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);

    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", selected_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formControl", ctx_r51.comparativeStreetSearch)("matAutocomplete", _r56)("matChipInputFor", _r53)("matChipInputSeparatorKeyCodes", ctx_r51.separatorKeysCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 6, ctx_r51.selectableComparativeCharts));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_mat_form_field_1_Template, 10, 8, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r48.selectedComparativeCharts$));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_mat_select_6_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const year_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", year_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](year_r67);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_mat_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_mat_select_6_Template_mat_select_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);
      return ctx_r68.selectLineYear($event.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_mat_select_6_mat_option_1_Template, 2, 2, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const date_r65 = ctx.ngIf;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", date_r65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r49.years);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_ng_container_1_Template, 3, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "A\u00F1o Mayor");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_mat_select_6_Template, 2, 2, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-slide-toggle", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_Template_mat_slide_toggle_change_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r71);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
      return ctx_r70.comparativeSameMaximum.next($event.checked);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Igualar m\u00E1ximos");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 3, ctx_r41.dataService.leftData));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 5, ctx_r41.initialGreaterDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 7, ctx_r41.comparativeSameMaximum));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_3_Template, 6, 10, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_div_5_Template, 5, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_ng_container_8_Template, 12, 9, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const filters_r38 = ctx.ngIf;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" Mostrando ", filters_r38.metric == null ? null : filters_r38.metric.name, " ", filters_r38.aggFunc == null ? null : filters_r38.aggFunc.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, ctx_r33.leftChart)) == null ? null : tmp_1_0.id) !== "line");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 7, ctx_r33.leftChart)) == null ? null : tmp_2_0.id) == "bar" && ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 9, ctx_r33.rightChart)) == null ? null : tmp_2_0.id) == "bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 11, ctx_r33.leftChart)) == null ? null : tmp_3_0.id) == "line");
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_4_ng_container_1_ng_container_1_app_map_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-map", 49);
  }

  if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r76.leftMap)("redraw", ctx_r76.compare);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_4_ng_container_1_ng_container_1_app_map_1_Template, 1, 2, "app-map", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const lines_r75 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", lines_r75.length > 0)("ngIfElse", _r7);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_4_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const mapData_r73 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, mapData_r73.lines))("ngIfElse", _r9);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_4_ng_container_1_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r34.leftMap));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_6_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "canvas", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const barData_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("datasets", barData_r78.dataset)("labels", barData_r78.labels)("options", config_r80.options)("colors", config_r80.colors)("legend", ctx_r81.showLabels(barData_r78.dataset));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_6_ng_container_1_ng_container_1_div_1_Template, 2, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, data_r32.bar.noEvents))("ngIfElse", _r7);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_6_ng_container_1_ng_container_1_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r77.leftBarConfig));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_6_ng_container_1_Template, 3, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, data_r32.bar.data))("ngIfElse", _r9);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_8_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h3", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "canvas", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const dataInfo_r91 = ctx.ngIf;
    const dataset_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const config_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 6, dataset_r89.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("datasets", dataInfo_r91.dataset)("labels", dataInfo_r91.labels)("options", config_r87.options)("colors", config_r87.colors)("legend", ctx_r90.showLabels(dataInfo_r91.dataset));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_8_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_div_8_ng_container_1_ng_container_1_div_1_Template, 6, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const dataset_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, dataset_r89.data))("ngIfElse", _r9);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_div_8_ng_container_1_ng_container_1_Template, 3, 4, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r86.comparativeCharts));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_div_8_ng_container_1_Template, 3, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r36.comparativeConfig));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_10_ng_container_1_div_1_canvas_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "canvas", 56);
  }

  if (rf & 2) {
    const config_r99 = ctx.ngIf;
    const lineWithMapData_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).ngIf;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("datasets", lineWithMapData_r96.dataset)("labels", lineWithMapData_r96.labels)("options", config_r99.options)("colors", config_r99.colors)("legend", ctx_r98.showLabels(lineWithMapData_r96.dataset));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_10_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_10_ng_container_1_div_1_canvas_2_Template, 1, 5, "canvas", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "app-vector-map");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, ctx_r97.lineWithMapDataConfig));
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_10_ng_container_1_div_1_Template, 6, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, data_r32["line-with-map"].noEvents))("ngIfElse", _r7);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_10_ng_container_1_Template, 3, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, data_r32["line-with-map"].data))("ngIfElse", _r9);
  }
}

function AppComponent_div_0_ng_container_1_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AppComponent_div_0_ng_container_1_div_28_div_1_div_2_Template, 10, 13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_4_Template, 3, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_6_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AppComponent_div_0_ng_container_1_div_28_div_1_div_8_Template, 3, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, AppComponent_div_0_ng_container_1_div_28_div_1_ng_container_10_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fxFlex", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 6, ctx_r30.compare) ? "1 1 50" : "1 0 auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 8, ctx_r30.leftFilter));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 10, ctx_r30.leftChart)) == null ? null : tmp_2_0.id) == "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 12, ctx_r30.leftChart)) == null ? null : tmp_3_0.id) == "bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 14, ctx_r30.leftChart)) == null ? null : tmp_4_0.id) == "line");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 16, ctx_r30.leftChart)) == null ? null : tmp_5_0.id) == "line-with-map");
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_1_ng_container_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const difference_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, (difference_r111.difference >= 0 ? difference_r111.difference : -1 * difference_r111.difference) || 0, "1.0-0"), ")");
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_1_ng_container_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const difference_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, difference_r111.difference || 0, "1.0-0"), ")");
  }
}

const _c0 = function (a0) {
  return [a0];
};

const _c1 = function (a0) {
  return {
    data: a0
  };
};

const _c2 = function () {
  return {
    backgroundColor: "rgb(154 208 245)"
  };
};

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_1_ng_container_5_span_5_Template, 3, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_1_ng_container_5_span_6_Template, 3, 4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "canvas", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const difference_r111 = ctx.$implicit;
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 8, difference_r111.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", difference_r111.type === "speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", difference_r111.type !== "speed");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("datasets", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](14, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](10, _c0, difference_r111.difference))))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](16, _c0, difference_r111.label))("options", ctx_r110.comparisonOptions)("colors", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](18, _c2)))("legend", false);
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Comparativa");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_1_ng_container_5_Template, 9, 21, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const differences_r109 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", differences_r109);
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Las 24 horas");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const filters_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Horas: ", ctx_r118.getHoursString(filters_r116.hours), " ");
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_4_span_4_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_4_span_5_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const filters_r116 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate4"](" Mostrando ", filters_r116.metric == null ? null : filters_r116.metric.name, " ", filters_r116.aggFunc == null ? null : filters_r116.aggFunc.name, " del ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 6, filters_r116.dateStart, "shortDate"), " al ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 9, filters_r116.dateEnd, "shortDate"), " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (filters_r116.hours == null ? null : filters_r116.hours.length) === 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((filters_r116.hours == null ? null : filters_r116.hours.length) || 0) < 24);
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_6_ng_container_1_ng_container_1_app_map_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-map", 71);
  }

  if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r124.rightMap)("redraw", ctx_r124.compare);
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_6_ng_container_1_ng_container_1_app_map_1_Template, 1, 2, "app-map", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const lines_r123 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](8);

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", lines_r123.length > 0)("ngIfElse", _r7);
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_6_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const mapData_r121 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, mapData_r121.lines))("ngIfElse", _r9);
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_6_ng_container_1_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r107.rightMap));
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_8_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "canvas", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const barData_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("datasets", barData_r126.dataset)("labels", barData_r126.labels)("options", config_r128.options)("colors", config_r128.colors)("legend", ctx_r129.showLabels(barData_r126.dataset));
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_8_ng_container_1_ng_container_1_div_1_Template, 2, 5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, data_r104.bar.noEvents))("ngIfElse", _r7);
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_8_ng_container_1_ng_container_1_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r125.rightBarConfig));
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_8_ng_container_1_Template, 3, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, data_r104.bar.data))("ngIfElse", _r9);
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_1_Template, 6, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_div_4_Template, 6, 12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_6_Template, 3, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_ng_container_8_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, ctx_r103.mapDifferences));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 6, ctx_r103.rightFilter));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 8, ctx_r103.rightChart)) == null ? null : tmp_2_0.id) == "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 10, ctx_r103.rightChart)) == null ? null : tmp_3_0.id) == "bar");
  }
}

function AppComponent_div_0_ng_container_1_div_28_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_ng_container_3_ng_container_1_Template, 10, 12, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, ctx_r31.dataService.rightData))("ngIfElse", _r5);
  }
}

function AppComponent_div_0_ng_container_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_div_28_div_1_Template, 12, 18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, AppComponent_div_0_ng_container_1_div_28_ng_container_3_Template, 3, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 3, ctx_r19.dataService.leftData))("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 5, ctx_r19.compare));
  }
}

function AppComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-toolbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Congesti\u00F3metro");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AppComponent_div_0_ng_container_1_ng_container_6_Template, 6, 4, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AppComponent_div_0_ng_container_1_mat_slide_toggle_8_Template, 4, 3, "mat-slide-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "app-filters", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Cambiar gr\u00E1fico derecho ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "mat-menu", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, AppComponent_div_0_ng_container_1_button_18_Template, 4, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, AppComponent_div_0_ng_container_1_button_20_Template, 4, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AppComponent_div_0_ng_container_1_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r135);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return ctx_r134.userService.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, " Cerrar sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, AppComponent_div_0_ng_container_1_app_users_26_Template, 1, 0, "app-users", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, AppComponent_div_0_ng_container_1_div_28_Template, 5, 7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](17);

    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    let tmp_6_0;
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 10, ctx_r12.leftChart));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 12, ctx_r12.comparableChart));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("exportableData", ctx_r12.rightExportableData)("secondary", true)("fxShow", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 14, ctx_r12.compare));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 16, ctx_r12.userService.currentUser)) == null ? null : tmp_6_0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](21, 18, ctx_r12.userService.currentUser)) == null ? null : tmp_7_0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 20, ctx_r12.showUsers));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 22, ctx_r12.showUsers));
  }
}

function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, AppComponent_div_0_ng_container_1_Template, 30, 24, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, ctx_r0.dataService.ready))("ngIfElse", _r1);
  }
}

function AppComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-toolbar", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Bienvenido al congesti\u00F3metro de la Ciudad de Buenos aires");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Estamos cargando los datos necesarios, esta operaci\u00F3n puede demorar unos segundos");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 1, ctx_r2.dataService.dataState));
  }
}

function AppComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-toolbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Congesti\u00F3metro");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-login");
  }
}

function AppComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Por favor, seleccione al menos una calle, un barrio o un pol\u00EDgono en el filtro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AppComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " No hay eventos para los filtros seleccionados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

function AppComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-spinner", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}

class AppComponent {
  constructor(userService, dataService, activatedRoute, router) {
    this.userService = userService;
    this.dataService = dataService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.showUsers = this.activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(q => q['showUsers'] === 'true'));
    this.leftChart = this.activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(q => _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.charts.find(c => c.id === q['l-chart']) || _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.charts[0]));
    this.rightChart = this.activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(q => _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.charts.find(c => c.id === q['r-chart']) || _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.charts[0]));
    this.comparableChart = this.leftChart.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.pluck)('comparable'));
    this.compare = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(q => q['compare'] === 'true')), this.comparableChart]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([url, chart]) => url && chart));
    this.leftFilter = this.dataService.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.pluck)('left'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(({
      params
    }) => ({
      metric: _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.metrics.find(({
        id
      }) => id === params.metric),
      aggFunc: _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.aggFuncs.find(({
        id
      }) => id === params.aggFunc),
      dateStart: new Date(params.date_from),
      dateEnd: new Date(params.date_to),
      hours: JSON.parse(`[${params.hours.slice(1, -1)}]`)
    })));
    this.rightFilter = this.dataService.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.pluck)('right'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(({
      params
    }) => ({
      metric: _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.metrics.find(({
        id
      }) => id === params.metric),
      aggFunc: _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.aggFuncs.find(({
        id
      }) => id === params.aggFunc),
      dateStart: new Date(params.date_from),
      dateEnd: new Date(params.date_to),
      hours: JSON.parse(`[${params.hours.slice(1, -1)}]`)
    })));
    this.leftMap = this.dataService.leftData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.pluck)('map'));
    this.rightMap = this.dataService.rightData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.pluck)('map'));
    this.mapDifferences = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.leftChart, this.rightChart, this.dataService.leftData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(data => data.map.summary)), this.dataService.rightData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(data => data.map.summary))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([leftChart, rightChart, leftData, rightData]) => leftChart.id === 'map' && rightChart.id === 'map' ? [{
      type: 'delay',
      label: 'Demora',
      difference: (rightData.delay > leftData.delay ? -1 : 1) * (1 - Math.min(rightData.delay, leftData.delay) / Math.max(rightData.delay, leftData.delay))
    }, {
      type: 'length',
      label: 'Largo de Cola',
      difference: (rightData.length > leftData.length ? -1 : 1) * (1 - Math.min(rightData.length, leftData.length) / Math.max(rightData.length, leftData.length))
    }, {
      type: 'speed',
      label: 'Velocidad',
      difference: (rightData.speed > leftData.speed ? 1 : -1) * (Math.max(rightData.speed, leftData.speed) / Math.min(rightData.speed, leftData.speed) - 1)
    }] : null));
    this.comparisonOptions = {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            display: false
          }
        }],
        xAxes: [{
          ticks: {
            min: -1,
            max: 1,
            callback: v => (Number(v) * 100).toLocaleString('es-ar', {
              maximumFractionDigits: 0
            }) + '%'
          }
        }]
      }
    };
    this.leftBarData = this.dataService.leftData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(({
      bar
    }) => bar.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.shareReplay)(1));
    this.rightBarData = this.dataService.rightData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(({
      bar
    }) => bar.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.shareReplay)(1));
    this.barSameMaximum = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(false);
    this.barMaximum = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.leftBarData, this.rightBarData, this.barSameMaximum]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([leftBarData, rightBarData, sameMaximum]) => sameMaximum ? Math.max(...[leftBarData, rightBarData].map(({
      dataset
    }) => dataset.map(v => v.data).flat()).flat()) : undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)(undefined));
    this.leftBarConfig = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.leftBarData, this.barMaximum]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([{
      dataset,
      labels,
      unit
    }, barMaximum]) => ({
      options: this.getOptions('bar', dataset.length, !isNaN(Number(labels[0])), unit, barMaximum),
      colors: this.getColors('bar', dataset.length)
    })));
    this.rightBarConfig = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.rightBarData, this.barMaximum]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)(() => console.log(2)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([{
      dataset,
      labels,
      unit
    }, barMaximum]) => ({
      options: this.getOptions('bar', dataset.length, !isNaN(Number(labels[0])), unit, barMaximum),
      colors: this.getColors('bar', dataset.length)
    })));
    this.lineWithMapDataConfig = this.dataService.leftData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(x => x['line-with-map'].data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(({
      dataset,
      labels,
      unit
    }) => ({
      options: this.getOptions('line-with-map', dataset.length, !isNaN(Number(labels[0])), unit),
      colors: this.getColors('line-with-map', dataset.length)
    })));
    this.initialGreaterDate = this.activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(p => p['greaterDate'] ? Number(p['greaterDate']) : new Date().getFullYear()));
    this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_21__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_21__.COMMA];
    this.comparativeStreetSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControl([]);
    this.selectedComparativeCharts = new rxjs__WEBPACK_IMPORTED_MODULE_23__.Subject();
    this.selectedComparativeCharts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.dataService.streets.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1)), this.activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.take)(1))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([streets, p]) => JSON.parse(p['comparativeStreetsIds'] || '[]').map(id => streets[id].name))), this.selectedComparativeCharts).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.shareReplay)(1));
    this.selectableComparativeCharts = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.dataService.leftData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.pluck)('line')), this.selectedComparativeCharts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.distinctUntilChanged)((a, b) => JSON.stringify(a) === JSON.stringify(b))), this.comparativeStreetSearch.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)(''))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([data, selected, search]) => data.map(({
      name
    }) => name).filter(name => !selected.includes(name) && (0,_services_utils__WEBPACK_IMPORTED_MODULE_2__.normalizeString)(name).includes(search))));
    this.comparativeCharts = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.dataService.leftData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.pluck)('line')), this.selectedComparativeCharts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.distinctUntilChanged)((a, b) => JSON.stringify(a) === JSON.stringify(b))), this.dataService.streets]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([data, selected, streets]) => {
      const streetIds = Object.values(streets).filter(({
        name
      }) => selected.includes(name)).map(({
        id
      }) => id);
      this.changeUrl({
        comparativeStreetsIds: JSON.stringify(streetIds)
      });
      return data.filter(({
        name
      }) => selected.includes(name));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.shareReplay)(1)); // FIXME: Dynamic minimum year

    this.years = (0,_services_utils__WEBPACK_IMPORTED_MODULE_2__.range)(new Date().getFullYear() + 1 - 2021).map(v => new Date().getFullYear() - v);
    this.comparativeSameMaximum = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(false);
    this.comparativeConfig = this.comparativeCharts.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(charts => charts.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(charts => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(charts.map(a => a.data)), this.comparativeSameMaximum]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([datasets, sameMaximum]) => {
      const {
        labels,
        unit
      } = datasets[0];
      const max = sameMaximum ? Math.max(...datasets.map(({
        dataset
      }) => dataset.map(v => v.data).flat()).flat()) : undefined;
      return {
        options: this.getOptions('line', charts.length, !isNaN(Number(labels[0])), unit, max),
        colors: this.getColors('line', charts.length)
      };
    }))));
    this.leftExportableData = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.leftChart, this.dataService.leftData]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([chart, leftData]) => {
      let obs;

      if (chart.id === 'line') {
        obs = this.comparativeCharts.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(charts => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)(charts.map(({
          exportableData
        }) => exportableData))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(data => data.flat()));
      } else {
        obs = leftData[chart.id].exportableData;
      }

      return obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)([]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(csvData => ({
        csvData,
        chart
      })));
    }));
    this.rightExportableData = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.rightChart, this.dataService.rightData]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([chart, data]) => data[chart.id].exportableData.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.startWith)([]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(csvData => ({
      csvData,
      chart
    })))));

    this.getUnit = key => {
      var _a;

      return (_a = _services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.metrics.find(({
        id
      }) => id === key)) === null || _a === void 0 ? void 0 : _a.unit;
    };

    this.getHoursString = times => times.map(value => `${value}hs`).join(', ');

    this.showLabels = data => data.some(v => !!v.label);
  }

  ngAfterViewInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.charts.changes, this.leftChart, this.rightChart]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.debounceTime)(100)).subscribe(() => {
      this.charts.map(({
        chart
      }) => chart === null || chart === void 0 ? void 0 : chart.resize());
    });
  }

  getColors(type, datasetLength) {
    const dense = datasetLength === 0 ? 0 : {
      map: 0,
      bar: 1,
      line: 0.2,
      'line-with-map': 0
    }[type];
    return [{
      backgroundColor: `rgba(77,83,96,${dense})`,
      borderColor: 'rgba(77,83,96,1)'
    }, {
      backgroundColor: `rgba(255,0,0,${dense})`,
      borderColor: 'red'
    }];
  }

  getOptions(type, datasetLength, isNumber, unit, max) {
    const xLabel = type === 'line' ? 'Mes' : isNumber ? 'Hora' : 'Día';
    return {
      responsive: true,
      maintainAspectRatio: type === 'line' ? true : datasetLength > 4,
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: `[ ${unit} ]`,
            padding: 0,
            fontSize: 16
          },
          ticks: {
            suggestedMax: max,
            beginAtZero: true,
            maxTicksLimit: datasetLength > 4 ? 5 : undefined,
            callback: v => v.toLocaleString('es-ar', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2
            })
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: `[ ${xLabel} ]`,
            padding: 0,
            fontSize: 16
          }
        }]
      }
    };
  }

  toggleUsers(showUsers) {
    this.changeUrl({
      showUsers
    });
  }

  toggleCompare(compare) {
    this.changeUrl({
      compare
    });
  }

  resetFilters() {
    return this.router.navigate(['/'], {
      queryParams: {}
    });
  }

  changeUrl(value) {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: Object.assign({}, value),
      queryParamsHandling: 'merge'
    });
  }

  selectLineYear(greaterDate) {
    var _this = this;

    return (0,_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return _this.router.navigate([], {
        relativeTo: _this.activatedRoute,
        queryParams: {
          greaterDate
        },
        queryParamsHandling: 'merge'
      });
    })();
  }

  toggleComparativeChart(action, chart, selected, input) {
    const selectedComparativeCharts = selected.slice(0);
    const index = selectedComparativeCharts.indexOf(chart);
    if (action === 'add' && index === -1) selectedComparativeCharts.push(chart);
    if (action === 'delete' && index >= 0) selectedComparativeCharts.splice(index, 1);
    this.selectedComparativeCharts.next(selectedComparativeCharts);

    if (input) {
      input.value = '';
      this.comparativeStreetSearch.setValue('');
      input.blur(); // setTimeout(() => input.focus(), 10);
    }
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_28__.BaseChartDirective, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.charts = _t);
    }
  },
  decls: 12,
  vars: 4,
  consts: [["fxLayout", "column", "style", "height: 100vh; width: 100vw", 4, "ngIf", "ngIfElse"], ["loading", ""], ["login", ""], ["noFilter", ""], ["noEvents", ""], ["loadingData", ""], ["fxLayout", "column", 2, "height", "100vh", "width", "100vw"], [4, "ngIf", "ngIfElse"], ["role", "toolbar", "color", "primary", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1em"], ["src", "/assets/logo-w.png", "alt", "escudo ciudad de buenos aires", 2, "height", "75%"], [2, "color", "white"], ["fxLayout", "row", "fxLayoutAlign", "space-between center center", "fxLayoutGap", "1em", "fxFlex", "1 0 auto"], [4, "ngIf"], [3, "checked", "change", 4, "ngIf"], ["fxHide", "", 3, "exportableData", "secondary", "fxShow"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menuLink", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [3, "cancel", 4, "ngIf"], ["fxLayout", "row", "fxFlex", "1 0 auto", "style", "margin: 1em", 4, "ngIf"], [3, "exportableData"], [3, "checked", "change"], [1, "mat-subheading-1"], [3, "cancel"], ["fxLayout", "row", "fxFlex", "1 0 auto", 2, "margin", "1em"], ["fxLayout", "column", 3, "fxFlex", 4, "ngIf", "ngIfElse"], ["fxLayout", "column", 3, "fxFlex"], ["fxLayout", "row", "fxLayoutAlign", " center", "fxLayoutGap", "1em", "class", "mat-subheading-2", 4, "ngIf"], ["class", "grid", "fxFlex", "1 1 auto", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", " center", "fxLayoutGap", "1em", 1, "mat-subheading-2"], ["style", "margin: 1em 1em 0 1em; text-align: right", "fxFlex", "1 0 auto", 4, "ngIf"], ["fxFlex", "1 0 auto", 2, "margin", "1em 1em 0 1em", "text-align", "right"], ["appearance", "fill"], ["disableOptionCentering", "", 3, "value", "selectionChange", 4, "ngIf"], ["appearance", "fill", "class", "no-border-top", "fxFlex", "auto", 4, "ngIf"], ["appearance", "fill", "fxFlex", "auto", 1, "no-border-top"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Calles", 3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["streetInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "removed"], ["matChipRemove", ""], [3, "value"], ["disableOptionCentering", "", 3, "value", "selectionChange"], ["fxFlex", "1 0 auto", 3, "data", "redraw", 4, "ngIf", "ngIfElse"], ["fxFlex", "1 0 auto", 3, "data", "redraw"], ["fxFlex", "1 0 auto", 4, "ngIf", "ngIfElse"], ["fxFlex", "1 0 auto"], ["baseChart", "", "chartType", "bar", 3, "datasets", "labels", "options", "colors", "legend"], ["fxFlex", "1 1 auto", 1, "grid"], [4, "ngFor", "ngForOf"], [2, "text-align", "center"], ["baseChart", "", "chartType", "line", 3, "datasets", "labels", "options", "colors", "legend"], ["chart", ""], ["fxLayout", "row", "fxFlex", "1 0 auto", 4, "ngIf", "ngIfElse"], ["fxLayout", "row", "fxFlex", "1 0 auto"], ["fxFlex", "50"], ["baseChart", "", "chartType", "line", 3, "datasets", "labels", "options", "colors", "legend", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", " center", "fxLayoutGap", "1em", "fxFlex", "1 0 20", 4, "ngIf"], ["fxLayout", "column", "fxFlex", "1 1 50"], ["class", "mat-subheading-2", "style", "text-align: right", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", " center", "fxLayoutGap", "1em", "fxFlex", "1 0 20"], [1, "mat-title"], [1, "mat-subheading-2"], ["baseChart", "", "chartType", "horizontalBar", 3, "datasets", "labels", "options", "colors", "legend"], [1, "mat-subheading-2", 2, "text-align", "right"], ["boxSide", "left", "fxFlex", "1 0 auto", 3, "data", "redraw", 4, "ngIf", "ngIfElse"], ["boxSide", "left", "fxFlex", "1 0 auto", 3, "data", "redraw"], ["fxLayout", "column", "color", "primary", "fxLayoutAlign", "center center", 2, "height", "100vh", "width", "100vw"], ["src", "/assets/logo-w.png", "alt", "escudo ciudad de buenos aire", 2, "height", "15%", "margin-bottom", "2em"], [2, "margin-top", "5em"], ["fxFlex", "1 0 50", 1, "mat-title", 2, "padding-top", "10vh", "text-align", "center"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["color", "primary"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 9, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 5, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, AppComponent_ng_template_6_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AppComponent_ng_template_8_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, AppComponent_ng_template_10_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx.userService.currentUser))("ngIfElse", _r3);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultLayoutDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultFlexDirective, _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_5__.FiltersComponent, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuItem, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__.MatSlideToggle, _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__.UsersComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__.MatLabel, _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_39__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_40__.MatAutocompleteTrigger, _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__.MatChipInput, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_40__.MatAutocomplete, _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__.MatChipRemove, _angular_material_core__WEBPACK_IMPORTED_MODULE_41__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_42__.MatSelect, _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__.MapComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_28__.BaseChartDirective, _components_vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_8__.VectorMapComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_43__.MatDivider, _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__.LoginComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__.MatSpinner],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.PercentPipe],
  styles: [".grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 1em;\n  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));\n  grid-template-columns: repeat(auto-fit, 32%);\n  justify-content: center;\n}\n\n  .no-border-top .mat-form-field-infix {\n  border-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esd0RBQUE7RUFDQSw0Q0FBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxZW07XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMyJSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubm8tYm9yZGVyLXRvcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomDateAdapter": () => (/* binding */ CustomDateAdapter),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/es-AR */ 54537);
/* harmony import */ var _angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ 78662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 64106);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/chips */ 79243);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng2-charts */ 41803);
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql.module */ 93756);
/* harmony import */ var _services_display_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/display-log.service */ 28773);
/* harmony import */ var _components_login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.module */ 43872);
/* harmony import */ var src_app_components_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/filters/filters.module */ 14682);
/* harmony import */ var _components_users_users_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/users.module */ 90329);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_vector_map_vector_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/vector-map/vector-map.module */ 58181);
/* harmony import */ var _components_map_map_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/map/map.module */ 93375);



































(0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)((_angular_common_locales_es_AR__WEBPACK_IMPORTED_MODULE_0___default()), 'es-AR');
class CustomDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.NativeDateAdapter {
    parse(value) {
        const candidate = value.split('/');
        if (candidate.length === 3) {
            return new Date(+candidate[2], +candidate[1] - 1, +candidate[0], 12);
        }
        else
            return null;
    }
    format(date, displayFormat) {
        if (displayFormat === 'input') {
            const day = `${date.getUTCDate()}`.padStart(2, '0');
            const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
        else {
            return date.toDateString();
        }
    }
}
CustomDateAdapter.ɵfac = /*@__PURE__*/ function () { let ɵCustomDateAdapter_BaseFactory; return function CustomDateAdapter_Factory(t) { return (ɵCustomDateAdapter_BaseFactory || (ɵCustomDateAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetInheritedFactory"](CustomDateAdapter)))(t || CustomDateAdapter); }; }();
CustomDateAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: CustomDateAdapter, factory: CustomDateAdapter.ɵfac });
const MY_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    },
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.DateAdapter, useClass: CustomDateAdapter },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.LOCALE_ID, useValue: 'es-AR' },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot([]),
            _graphql_module__WEBPACK_IMPORTED_MODULE_1__.GraphQLModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule.withConfig({ addFlexToParent: false }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__.MatChipsModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInputModule,
            _components_login_login_module__WEBPACK_IMPORTED_MODULE_3__.LoginModule,
            src_app_components_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__.FiltersModule,
            _components_users_users_module__WEBPACK_IMPORTED_MODULE_5__.UsersModule,
            _components_vector_map_vector_map_module__WEBPACK_IMPORTED_MODULE_7__.VectorMapModule,
            _components_map_map_module__WEBPACK_IMPORTED_MODULE_8__.MapModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_31__.ChartsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent, _services_display_log_service__WEBPACK_IMPORTED_MODULE_2__.DisplayLogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _graphql_module__WEBPACK_IMPORTED_MODULE_1__.GraphQLModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__.MatChipsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInputModule,
        _components_login_login_module__WEBPACK_IMPORTED_MODULE_3__.LoginModule,
        src_app_components_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__.FiltersModule,
        _components_users_users_module__WEBPACK_IMPORTED_MODULE_5__.UsersModule,
        _components_vector_map_vector_map_module__WEBPACK_IMPORTED_MODULE_7__.VectorMapModule,
        _components_map_map_module__WEBPACK_IMPORTED_MODULE_8__.MapModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_31__.ChartsModule] }); })();


/***/ }),

/***/ 57502:
/*!*****************************************************************!*\
  !*** ./src/app/components/button-icon/button-icon.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonIconComponent": () => (/* binding */ ButtonIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 52529);








const _c0 = function (a0) {
  return {
    "font-size": a0
  };
};

function ButtonIconComponent_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.sizeIcon))("color", ctx_r0.hover === true ? ctx_r0.color : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.icon, " ");
  }
}

const _c1 = function (a0) {
  return {
    height: a0,
    position: "relative"
  };
};

function ButtonIconComponent_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r1.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r1.sizeImg));
  }
}

const _c2 = function () {
  return {
    color: "grey",
    "-webkit-transition": "color 0.5s",
    transition: "color 0.5s"
  };
};

class ButtonIconComponent {
  constructor() {
    this.color = 'primary'; // primary, accent or warn

    this.tooltipPosition = 'below';
    this.sizeImg = '1.5em';
    this.sizeIcon = '1.7em';
    this.disabled = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
    this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isImg = false;
    this.hover = false;
  }

  ngOnChanges() {
    this.isImg = ['.png', '.svg'].map(ext => (this.icon || '').endsWith(ext)).some(v => v);
  }

}

ButtonIconComponent.ɵfac = function ButtonIconComponent_Factory(t) {
  return new (t || ButtonIconComponent)();
};

ButtonIconComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ButtonIconComponent,
  selectors: [["app-button-icon"]],
  inputs: {
    icon: "icon",
    color: "color",
    tooltip: "tooltip",
    tooltipPosition: "tooltipPosition",
    sizeImg: "sizeImg",
    sizeIcon: "sizeIcon",
    disabled: "disabled"
  },
  outputs: {
    clickEvent: "clickEvent"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 9,
  consts: [["mat-icon-button", "", "type", "button", 3, "matTooltip", "matTooltipPosition", "disabled", "ngStyle", "mouseenter", "mouseleave", "click"], [3, "ngStyle", "color", 4, "ngIf"], [3, "src", "alt", "ngStyle", 4, "ngIf"], [3, "ngStyle", "color"], [3, "src", "alt", "ngStyle"]],
  template: function ButtonIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ButtonIconComponent_Template_button_mouseenter_0_listener() {
        return ctx.hover = true;
      })("mouseleave", function ButtonIconComponent_Template_button_mouseleave_0_listener() {
        return ctx.hover = false;
      })("click", function ButtonIconComponent_Template_button_click_0_listener($event) {
        return ctx.clickEvent.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonIconComponent_mat_icon_2_Template, 2, 6, "mat-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonIconComponent_img_3_Template, 1, 5, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.tooltip)("matTooltipPosition", ctx.tooltipPosition)("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx.disabled))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isImg);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isImg);
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24taWNvbi5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 99412:
/*!**************************************************************!*\
  !*** ./src/app/components/button-icon/button-icon.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonIconModule": () => (/* binding */ ButtonIconModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _button_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-icon.component */ 57502);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);






/**
 * Muestra el boton como icono siendo icono de material o png/jpg/svg
 * - Parámetros de entrada:
 * 	icon: string, el icono de material o la ruta si es una imagen
 * 	color: string el color que va a tener puede ser: primary, accent o warn
 * 	tooltip: Label o texto, que va a ser el MatTooltip y ademas el aria-label como tambien alt
 */
class ButtonIconModule {
}
ButtonIconModule.ɵfac = function ButtonIconModule_Factory(t) { return new (t || ButtonIconModule)(); };
ButtonIconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ButtonIconModule });
ButtonIconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ButtonIconModule, { declarations: [_button_icon_component__WEBPACK_IMPORTED_MODULE_0__.ButtonIconComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltipModule], exports: [_button_icon_component__WEBPACK_IMPORTED_MODULE_0__.ButtonIconComponent] }); })();


/***/ }),

/***/ 86469:
/*!*********************************************************************!*\
  !*** ./src/app/components/display-users/display-users.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayUsersComponent": () => (/* binding */ DisplayUsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 73071);
/* harmony import */ var src_app_services_display_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/display-log.service */ 28773);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-icon/button-icon.component */ 57502);





















const _c0 = ["search"];

function DisplayUsersComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DisplayUsersComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r3.clearSearch();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function DisplayUsersComponent_div_7_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](col_r12.title);
  }
}

function DisplayUsersComponent_div_7_ng_container_2_td_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", element_r16.isAdmin ? "Admin" : "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r16.isAdmin ? "admin_panel_settings" : "person");
  }
}

function DisplayUsersComponent_div_7_ng_container_2_td_2_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-button-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DisplayUsersComponent_div_7_ng_container_2_td_2_span_2_ng_container_1_Template_app_button_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r22.selectedUser.next(element_r16);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}

function DisplayUsersComponent_div_7_ng_container_2_td_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DisplayUsersComponent_div_7_ng_container_2_td_2_span_2_ng_container_1_Template, 2, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !element_r16.isAdmin);
  }
}

function DisplayUsersComponent_div_7_ng_container_2_td_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r16[col_r12.field], " ");
  }
}

function DisplayUsersComponent_div_7_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DisplayUsersComponent_div_7_ng_container_2_td_2_span_1_Template, 3, 2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DisplayUsersComponent_div_7_ng_container_2_td_2_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DisplayUsersComponent_div_7_ng_container_2_td_2_span_3_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", col_r12.pipe);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "role");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "options");
  }
}

function DisplayUsersComponent_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DisplayUsersComponent_div_7_ng_container_2_th_1_Template, 2, 1, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DisplayUsersComponent_div_7_ng_container_2_td_2_Template, 4, 3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matColumnDef", col_r12.field);
  }
}

const _c1 = function (a0, a1) {
  return {
    "border-width": a0,
    display: a1
  };
};

function DisplayUsersComponent_div_7_ng_container_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DisplayUsersComponent_div_7_ng_container_3_td_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r32.selectedUser.next();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DisplayUsersComponent_div_7_ng_container_3_td_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const username_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r34.editUser(username_r29, ctx_r34.editUserForm.value.password);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    const username_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](10, _c1, username_r29 === element_r31.username ? "" : "0", username_r29 === element_r31.username ? "" : "none"))("@detailExpand", username_r29 === element_r31.username ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", ctx_r30.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r30.editUserForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r30.editUserForm.valid && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 6, ctx_r30.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 8, ctx_r30.loading) ? "Editando usuario..." : "Guardar", " ");
  }
}

function DisplayUsersComponent_div_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DisplayUsersComponent_div_7_ng_container_3_td_1_Template, 15, 13, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}

function DisplayUsersComponent_div_7_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 37);
  }
}

function DisplayUsersComponent_div_7_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 38);
  }
}

function DisplayUsersComponent_div_7_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 39);
  }
}

function DisplayUsersComponent_div_7_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "assignment_ind");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "No hay Usuarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

const _c2 = function () {
  return ["expandedDetail"];
};

function DisplayUsersComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DisplayUsersComponent_div_7_ng_container_2_Template, 3, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DisplayUsersComponent_div_7_ng_container_3_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DisplayUsersComponent_div_7_tr_5_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DisplayUsersComponent_div_7_tr_6_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DisplayUsersComponent_div_7_tr_7_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DisplayUsersComponent_div_7_tr_8_Template, 7, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const dataSource_r5 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", dataSource_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 6, ctx_r2.selectedUsername));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));
  }
}

class DisplayUsersComponent {
  constructor(userService, displayLogService) {
    this.userService = userService;
    this.displayLogService = displayLogService;
    this.pageSizeOptions = [10, 25, 50, 100];
    this.columns = [{
      title: 'Usuario',
      field: 'username'
    }, {
      title: 'Rol',
      field: 'role',
      pipe: 'role'
    }, {
      title: '',
      field: 'options',
      pipe: 'options'
    }];
    this.displayedColumns = this.columns.map(c => c.field);
    this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.selectedUsername = this.selectedUser.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(user => user ? user.username : 'null'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)('null'));
    this.editUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
    });
    this.nameSearch = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('');
    this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
  }

  ngOnInit() {
    this.dataSource$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.users, this.nameSearch.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(search => search.toLocaleLowerCase()))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([users, nameSearch]) => {
      const data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource(users.filter(user => user.username.toLocaleLowerCase().includes(nameSearch)).sort((a, b) => a.username.toLocaleLowerCase() > b.username.toLocaleLowerCase() ? 1 : -1));
      data.paginator = this.paginator;
      return data;
    }));
  }

  onKeyUp(event) {
    this.nameSearch.next(event.target.value);
  }

  clearSearch() {
    this.searchInput.nativeElement.value = '';
    this.nameSearch.next('');
  }

  editUser(username, password) {
    if (!confirm('¿Está seguro que desea editar este usuario?')) return;
    this.loading.next(true);
    return this.userService.editUser(username, password).then(() => {
      this.selectedUser.next();
      this.editUserForm.reset();
      this.displayLogService.openLogSuccess('Usuario editado');
    }).catch(err => {
      var _a;

      return this.displayLogService.openLogError(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) ? err.error.message : err);
    }).finally(() => this.loading.next(false));
  }

  deleteUser(username) {
    if (!confirm('¿Está seguro que desea borrar este usuario?')) return;
    this.loading.next(true);
    return this.userService.deleteUser(username).then(() => this.displayLogService.openLogSuccess('Usuario eliminado')).catch(err => {
      var _a;

      return this.displayLogService.openLogError(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) ? err.error.message : err);
    }).finally(() => this.loading.next(false));
  }

}

DisplayUsersComponent.ɵfac = function DisplayUsersComponent_Factory(t) {
  return new (t || DisplayUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_display_log_service__WEBPACK_IMPORTED_MODULE_1__.DisplayLogService));
};

DisplayUsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DisplayUsersComponent,
  selectors: [["app-display-users"]],
  viewQuery: function DisplayUsersComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    }
  },
  inputs: {
    users: "users"
  },
  decls: 11,
  vars: 8,
  consts: [["fxLayout", "column", "fxLayoutGap", "1em", 2, "padding", "1em"], ["matInput", "", 3, "keyup"], ["search", ""], ["matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["style", "overflow: auto", 4, "ngIf"], [3, "fxHide", "pageSizeOptions"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], [2, "overflow", "auto"], ["mat-table", "", "multiTemplateDataRows", "", 2, "width", "100%", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail", 4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "style", "height: 0", 4, "matRowDef", "matRowDefColumns"], [4, "matNoDataRow"], [3, "matColumnDef"], ["mat-header-cell", "", "style", "padding-top: 1.5em", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "vertical-align: middle", 3, "ngSwitch", 4, "matCellDef"], ["mat-header-cell", "", 2, "padding-top", "1.5em"], ["mat-cell", "", 2, "vertical-align", "middle", 3, "ngSwitch"], [3, "matTooltip", 4, "ngSwitchCase"], ["fxLayout", "row wrap", "fxLayoutAlign", "end center", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "matTooltip"], [2, "color", "grey"], ["fxLayout", "row wrap", "fxLayoutAlign", "end center"], [4, "ngIf"], ["icon", "edit", "tooltip", "Editar", "color", "primary", 3, "click"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["mat-cell", "", 3, "ngStyle"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "1em", 2, "overflow", "hidden", "padding-top", "1em", 3, "formGroup"], ["appearance", "fill", "fxFlex.gt-sm", "auto"], ["matInput", "", "formControlName", "password", "placeholder", "Contrase\u00F1a"], ["fxLayout", "row", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "1em", 2, "padding-bottom", "1em"], ["mat-flat-button", "", "color", "warn", "fxFlex.lt-md", "auto", 3, "click"], ["mat-raised-button", "", "color", "primary", "fxFlex.lt-md", "auto", 3, "disabled", "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-row", "", 2, "height", "0"], ["colspan", "4", 1, "mat-body-2"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "color", "grey", "padding", "2em"]],
  template: function DisplayUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Buscar Operadores por usuario, nombre o apellido");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function DisplayUsersComponent_Template_input_keyup_4_listener($event) {
        return ctx.onKeyUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DisplayUsersComponent_button_6_Template, 3, 0, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DisplayUsersComponent_div_7_Template, 9, 9, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "mat-paginator", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);

      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r0.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, ctx.dataSource$));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fxHide", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 6, ctx.dataSource$)) == null ? null : tmp_2_0.data == null ? null : tmp_2_0.data.length) === 0)("pageSizeOptions", ctx.pageSizeOptions);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutGapDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatNoDataRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchDefault, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_2__.ButtonIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultStyleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
  styles: ["mat-chip {\n  padding: 0 0.4em !important;\n  min-height: 1.5em !important;\n  border-radius: 0.5em !important;\n}\n\n  .mat-chip-list-wrapper {\n  flex-wrap: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXktdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0YiLCJmaWxlIjoiZGlzcGxheS11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBtYXQtY2hpcCB7XHJcbiAgcGFkZGluZzogMCAwLjRlbSAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xyXG4gIGZsZXgtd3JhcDogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
      height: '0px'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('1000ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
  },
  changeDetection: 0
});

/***/ }),

/***/ 56405:
/*!******************************************************************!*\
  !*** ./src/app/components/display-users/display-users.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayUsersModule": () => (/* binding */ DisplayUsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 78662);
/* harmony import */ var _display_users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-users.component */ 86469);
/* harmony import */ var _button_icon_button_icon_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button-icon/button-icon.module */ 99412);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);













class DisplayUsersModule {
}
DisplayUsersModule.ɵfac = function DisplayUsersModule_Factory(t) { return new (t || DisplayUsersModule)(); };
DisplayUsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DisplayUsersModule });
DisplayUsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltipModule,
            _button_icon_button_icon_module__WEBPACK_IMPORTED_MODULE_1__.ButtonIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DisplayUsersModule, { declarations: [_display_users_component__WEBPACK_IMPORTED_MODULE_0__.DisplayUsersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltipModule,
        _button_icon_button_icon_module__WEBPACK_IMPORTED_MODULE_1__.ButtonIconModule], exports: [_display_users_component__WEBPACK_IMPORTED_MODULE_0__.DisplayUsersComponent] }); })();


/***/ }),

/***/ 61443:
/*!*********************************************************!*\
  !*** ./src/app/components/filters/filters.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTurfFeature": () => (/* binding */ getTurfFeature),
/* harmony export */   "FiltersComponent": () => (/* binding */ FiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 12702);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 17163);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 92597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 94236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ol */ 33697);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ol */ 65835);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ol */ 83223);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ol/source */ 72966);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/interaction */ 45552);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ol/interaction */ 33360);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ 68565);
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/source/Vector */ 49010);
/* harmony import */ var ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/geom/GeometryType */ 83103);
/* harmony import */ var ol_layer_Tile__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ol/layer/Tile */ 25504);
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ol/layer/Vector */ 81204);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/geom */ 22798);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ol/geom */ 18570);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ol/style */ 16274);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ol/style */ 21049);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ol/style */ 49040);
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/turf */ 13051);
/* harmony import */ var _turf_boolean_intersects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/boolean-intersects */ 99480);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 97797);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chartTypes */ 30798);
/* harmony import */ var src_app_services_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/utils */ 7391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_display_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/display-log.service */ 28773);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/flex-layout */ 96475);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/radio */ 15644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/core */ 32220);











































function FiltersComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_button_8_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const state_r6 = restoredCtx.ngIf;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r7.clone(state_r6.otherState);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Clonar filtro ", ctx_r1.secondary ? "izquierdo" : "derecho", " ");
  }
}

function FiltersComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_button_10_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const data_r9 = restoredCtx.ngIf;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r10.download(data_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Descargar datos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", data_r9.csvData.length === 0);
  }
}

function FiltersComponent_ng_container_14_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_ng_container_14_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const chart_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r14.changeChartType(chart_r12.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const chart_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", chart_r12.name, " ");
  }
}

function FiltersComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FiltersComponent_ng_container_14_button_1_Template, 2, 1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const chart_r12 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", chart_r12.comparable || !ctx_r4.secondary);
  }
}

function FiltersComponent_mat_card_19_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_mat_card_19_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40);
      const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      return state_r18.syncParams.dateStart = !state_r18.syncParams.dateStart;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", state_r18.syncParams.dateStart ? "Sincronizado" : "No sincronizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", state_r18.syncParams.dateStart ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", state_r18.syncParams.dateStart ? "sync" : "sync_disabled", " ");
  }
}

function FiltersComponent_mat_card_19_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_mat_card_19_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44);
      const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      return state_r18.syncParams.hours = !state_r18.syncParams.hours;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", state_r18.syncParams.hours ? "Sincronizado" : "No sincronizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", state_r18.syncParams.hours ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", state_r18.syncParams.hours ? "sync" : "sync_disabled", " ");
  }
}

function FiltersComponent_mat_card_19_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const hour_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", hour_r46.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](hour_r46.view);
  }
}

function FiltersComponent_mat_card_19_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_mat_card_19_button_38_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      return state_r18.syncParams.neighborhoods = !state_r18.syncParams.neighborhoods;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", state_r18.syncParams.neighborhoods ? "Sincronizado" : "No sincronizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", state_r18.syncParams.neighborhoods ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](state_r18.syncParams.neighborhoods ? "sync" : "sync_disabled");
  }
}

function FiltersComponent_mat_card_19_mat_select_trigger_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", state_r18.form.value.neighborhoods.length, " barrios seleccionados ");
  }
}

function FiltersComponent_mat_card_19_div_46_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const neighborhood_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", neighborhood_r54.lowerAdminLevelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, neighborhood_r54.lowerAdminLevelName), " ");
  }
}

function FiltersComponent_mat_card_19_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-checkbox", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function FiltersComponent_mat_card_19_div_46_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      const adminLevel2_r52 = restoredCtx.$implicit;
      const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r55.setSelectedNeighborhoods(state_r18.form.controls.neighborhoods, $event.checked, state_r18.form.value.neighborhoods, adminLevel2_r52.neighborhoodIds);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-optgroup", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, FiltersComponent_mat_card_19_div_46_mat_option_4_Template, 3, 4, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const adminLevel2_r52 = ctx.$implicit;
    const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r25.allSelected(state_r18.form.value.neighborhoods, adminLevel2_r52.neighborhoods))("indeterminate", ctx_r25.someSelected(state_r18.form.value.neighborhoods, adminLevel2_r52.neighborhoods));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, adminLevel2_r52.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", adminLevel2_r52.neighborhoods);
  }
}

function FiltersComponent_mat_card_19_mat_option_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_mat_card_19_mat_option_64_Template_div_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r62);
      const street_r59 = restoredCtx.$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r61.selectedStreets.has(street_r59.id) ? ctx_r61.selectedStreets.delete(street_r59.id) : ctx_r61.selectedStreets.set(street_r59.id, street_r59.name);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-checkbox", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function FiltersComponent_mat_card_19_mat_option_64_Template_mat_checkbox_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r62);
      const street_r59 = restoredCtx.$implicit;

      const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _r60.writeValue(ctx_r63.selectedStreets.has(street_r59.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const street_r59 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", street_r59.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r28.selectedStreets.has(street_r59.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 3, street_r59.name), " ");
  }
}

function FiltersComponent_mat_card_19_div_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Escriba 4 caracteres o m\u00E1s para buscar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function FiltersComponent_mat_card_19_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " No hay seleccionadas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function FiltersComponent_mat_card_19_ng_template_72_mat_option_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_mat_card_19_ng_template_72_mat_option_0_Template_div_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r67);
      const street_r65 = restoredCtx.$implicit;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      ctx_r66.selectedStreets.has(street_r65.key) ? ctx_r66.selectedStreets.delete(street_r65.key) : ctx_r66.selectedStreets.set(street_r65.key, street_r65.value);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-checkbox", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const street_r65 = ctx.$implicit;
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", street_r65.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r64.selectedStreets.has(street_r65.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, street_r65.value), " ");
  }
}

function FiltersComponent_mat_card_19_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FiltersComponent_mat_card_19_ng_template_72_mat_option_0_Template, 5, 5, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "keyvalue");
  }

  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx_r32.selectedStreets));
  }
}

function FiltersComponent_mat_card_19_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Calles seleccionadas:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r33.selectedStreets.size, " ");
  }
}

function FiltersComponent_mat_card_19_button_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_mat_card_19_button_78_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r70);
      const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      return state_r18.syncParams.metric = !state_r18.syncParams.metric;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matTooltip", state_r18.syncParams.metric ? "Sincronizado" : "No sincronizado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("color", state_r18.syncParams.metric ? "primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](state_r18.syncParams.metric ? "sync" : "sync_disabled");
  }
}

function FiltersComponent_mat_card_19_mat_option_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const metric_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", metric_r72.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](metric_r72.name);
  }
}

function FiltersComponent_mat_card_19_mat_option_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const func_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", func_r73.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](func_r73.name);
  }
}

function FiltersComponent_mat_card_19_button_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_mat_card_19_button_99_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r77);
      const polygon_r74 = restoredCtx.ngIf;
      const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r75.apply(state_r18.form.value, state_r18.syncParams, state_r18.otherState, polygon_r74);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Aplicar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", state_r18.form.invalid);
  }
}

function FiltersComponent_mat_card_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Filtros temporales");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, FiltersComponent_mat_card_19_button_8_Template, 3, 3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Fechas");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-date-range-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "mat-datepicker-toggle", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "mat-date-range-picker", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-radio-group", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-radio-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Todos los d\u00EDas");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-radio-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "D\u00EDas h\u00E1biles");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-radio-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Feriados y fines de semana");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, FiltersComponent_mat_card_19_button_27_Template, 3, 3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Horas");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, FiltersComponent_mat_card_19_mat_option_32_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function FiltersComponent_mat_card_19_Template_mat_checkbox_change_33_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r80);
      const state_r18 = restoredCtx.ngIf;
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return state_r18.form.controls.hours.setValue($event.checked ? ctx_r79.hoursIds : []);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, " Todas las horas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Filtros geogr\u00E1ficos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, FiltersComponent_mat_card_19_button_38_Template, 3, 3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Barrio");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "mat-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, FiltersComponent_mat_card_19_mat_select_trigger_45_Template, 2, 1, "mat-select-trigger", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, FiltersComponent_mat_card_19_div_46_Template, 5, 6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function FiltersComponent_mat_card_19_Template_mat_checkbox_change_48_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r80);
      const state_r18 = restoredCtx.ngIf;
      return state_r18.form.controls.neighborhoods.setValue($event.checked ? state_r18.neighborhoodsIds : []);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, " Todos los barrios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "mat-slide-toggle", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, " Autoseleccionar calles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "mat-slide-toggle", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, " Autoseleccionar avenidas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "mat-form-field", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Calle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "mat-autocomplete", null, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, FiltersComponent_mat_card_19_mat_option_64_Template, 6, 5, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](66, FiltersComponent_mat_card_19_div_66_Template, 2, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "mat-expansion-panel", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](71, FiltersComponent_mat_card_19_div_71_Template, 2, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, FiltersComponent_mat_card_19_ng_template_72_Template, 2, 3, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, FiltersComponent_mat_card_19_div_74_Template, 4, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "M\u00E9tricas y agregaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, FiltersComponent_mat_card_19_button_78_Template, 3, 3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "mat-form-field", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82, "M\u00E9trica");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "mat-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](84, FiltersComponent_mat_card_19_mat_option_84_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "mat-form-field", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "Agregado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "mat-select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](89, FiltersComponent_mat_card_19_mat_option_89_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_mat_card_19_Template_button_click_94_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r80);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r82.mapPolygon.next([]);
      return ctx_r82.draw.abortDrawing();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, " Borrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "mat-card-actions", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_mat_card_19_Template_button_click_97_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r80);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r83.show.next(false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](99, FiltersComponent_mat_card_19_button_99_Template, 2, 1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](100, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r18 = ctx.ngIf;

    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](18);

    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](61);

    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](63);

    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](73);

    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", state_r18.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Editar filtros del gr\u00E1fico ", ctx_r5.secondary ? "derecho" : "izquierdo", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.secondary);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rangePicker", _r20)("max", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 40, ctx_r5.maxDate))("disabled", state_r18.syncParams.dateStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "{1,0}");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "{1}");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "{0}");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.secondary);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", state_r18.syncParams.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", state_r18.form.value.hours.length === ctx_r5.hours.length)("indeterminate", state_r18.form.value.hours.length > 0 && state_r18.form.value.hours.length < ctx_r5.hours.length)("disabled", state_r18.syncParams.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.secondary);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", state_r18.syncParams.neighborhoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", state_r18.form.value.neighborhoods.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](47, 42, ctx_r5.groupedNeighborhoods));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", state_r18.form.value.neighborhoods.length === state_r18.neighborhoodsIds.length)("indeterminate", state_r18.form.value.neighborhoods.length > 0 && state_r18.form.value.neighborhoods.length < state_r18.neighborhoodsIds.length)("disabled", state_r18.syncParams.neighborhoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", state_r18.syncParams.neighborhoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", state_r18.syncParams.neighborhoods);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", ctx_r5.streetSearch)("matAutocomplete", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 44, ctx_r5.filteredStreets));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (_r26.value || "").length < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Seleccionadas (", ctx_r5.selectedStreets.size, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.selectedStreets.size === 0)("ngIfElse", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.selectedStreets.size > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.secondary);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", state_r18.syncParams.metric);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.metrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", state_r18.syncParams.metric);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.aggFuncs);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", (ctx_r5.secondary ? "r" : "l") + "-filter-map");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](100, 46, ctx_r5.mapPolygon));
  }
}

const _c0 = ["*"];
const getTurfFeature = polygon => {
  return polygon instanceof ol_geom__WEBPACK_IMPORTED_MODULE_9__.default ? (0,_turf_turf__WEBPACK_IMPORTED_MODULE_1__.polygon)(polygon.getCoordinates()) : (0,_turf_turf__WEBPACK_IMPORTED_MODULE_1__.multiPolygon)(polygon.getCoordinates());
};
class FiltersComponent {
  constructor(router, dataService, activatedRoute, displayLogService, media) {
    this.router = router;
    this.dataService = dataService;
    this.activatedRoute = activatedRoute;
    this.displayLogService = displayLogService;
    this.secondary = false;
    this.maxDate = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(0, 1000 * 60 * 60).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => new Date()));
    this.charts = src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_4__.charts;
    this.metrics = src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_4__.metrics;
    this.aggFuncs = src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_4__.aggFuncs;
    this.hours = src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_4__.hours;
    this.hoursIds = src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_4__.hours.map(h => h.value);
    this.groupedNeighborhoods = this.dataService.neighborhoods.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(neighborhoods => (neighborhoods || []).sort((a, b) => a.greaterAdminLevelId > b.greaterAdminLevelId ? 1 : -1).reduce((prev, nei) => {
      const index = prev.findIndex(p => p.label === nei.greaterAdminLevelName);

      if (index >= 0) {
        prev[index].neighborhoods.push(nei);
        prev[index].neighborhoodIds.push(nei.lowerAdminLevelId);
      } else {
        prev.push({
          label: nei.greaterAdminLevelName,
          neighborhoods: [nei],
          neighborhoodIds: [nei.lowerAdminLevelId]
        });
      }

      return prev;
    }, [])));
    this.show = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(false);
    this.forceShow = this.dataService.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(queryParams => !this.secondary && !queryParams));
    this.show$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(this.show, this.forceShow);
    this.drawnPolygon = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_15__.default({
      features: []
    });
    this.draw = new ol_interaction__WEBPACK_IMPORTED_MODULE_16__.default({
      source: this.drawnPolygon,
      type: ol_geom_GeometryType__WEBPACK_IMPORTED_MODULE_17__.default.POLYGON
    });
    this.mapPolygon = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    this.subscriptions = [];
    this.data = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.dataService.urlParams, this.dataService.streets]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([v, streets]) => ({
      v: this.secondary ? v.right : v.left,
      streets
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(({
      v,
      streets
    }) => {
      if (v.state.mapPolygon) this.mapPolygon.next(v.state.mapPolygon);

      if (v.state.streets) {
        this.selectedStreets.clear();

        for (const {
          id,
          name
        } of v.state.streets.map(id => streets[id])) {
          this.selectedStreets.set(id, name);
        }
      }

      return v;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.withLatestFrom)(this.dataService.neighborhoods), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([{
      syncParams,
      state,
      otherState
    }, neighborhoods]) => ({
      syncParams,
      otherState,
      neighborhoodsIds: (neighborhoods || []).map(n => n.lowerAdminLevelId),
      form: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroup({
        // TODO: default date now
        dateStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl(state.dateStart ? new Date(state.dateStart) : new Date(2022, 0, 1)),
        dateEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl(state.dateEnd ? new Date(state.dateEnd) : new Date(2022, 1, 25)),
        hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl(state.hours ? state.hours : [17, 18]),
        neighborhoods: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl(state.neighborhoods ? state.neighborhoods : []),
        metric: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl(state.metric || src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_4__.metrics[0].id),
        aggFunc: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl(state.aggFunc || src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_4__.aggFuncs[0].id),
        workingDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl(state.workingDays || '{1,0}'),
        autoSelectStreets: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl(state.autoSelectStreets),
        autoSelectAvenues: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl(state.autoSelectAvenues)
      })
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.shareReplay)(1));
    this.geoFilteredStreets = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.mapPolygon.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)((a, b) => JSON.stringify(a) === JSON.stringify(b)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(coords => {
      this.drawnPolygon.clear();
      const feature = new ol__WEBPACK_IMPORTED_MODULE_24__.default({
        geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_25__.default(coords.map(c => (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.fromLonLat)(c)))
      });
      feature.setStyle(new ol_style__WEBPACK_IMPORTED_MODULE_26__.default({
        stroke: new ol_style__WEBPACK_IMPORTED_MODULE_27__.default({
          color: '#0099ff',
          width: 4
        }),
        fill: new ol_style__WEBPACK_IMPORTED_MODULE_28__.default({
          color: '#60bfff'
        })
      }));
      this.drawnPolygon.addFeature(feature);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.startWith)([])), this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(({
      form
    }) => form.controls.neighborhoods.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.startWith)(form.controls.neighborhoods.value))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)((a, b) => JSON.stringify(a) === JSON.stringify(b))), this.dataService.neighborhoods, this.dataService.streets, this.dataService.lines]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(([coordinates, selectedNeighborhoodIds, neighborhoods, streets, lines]) => {
      if (coordinates.length === 0 && selectedNeighborhoodIds.length === 0) return (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.of)(Object.values(streets));
      const selectedNeighborhoods = neighborhoods.filter(n => selectedNeighborhoodIds.some(id => id === n.lowerAdminLevelId));

      if (selectedNeighborhoods.length > 0 && coordinates.length > 0) {
        const turfMapPolygon = getTurfFeature(new ol_geom__WEBPACK_IMPORTED_MODULE_9__.default([coordinates]));
        const intersected = selectedNeighborhoods.some(n => (0,_turf_boolean_intersects__WEBPACK_IMPORTED_MODULE_2__.default)(n.turfPolygon, turfMapPolygon));

        if (!intersected) {
          this.displayLogService.openLogError('La selección del mapa y los barrios no se superponen, debes filtrar correctamente');
          this.selectedStreets.clear();
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.of)([]);
        }
      }

      let linesIds;

      if (selectedNeighborhoods.length > 0) {
        const allSelectedIds = selectedNeighborhoods.map(({
          linesIds
        }) => linesIds).flat();
        linesIds = Array.from(new Set(allSelectedIds).values());
      } else {
        linesIds = Object.keys(lines).map(Number);
      }

      if (coordinates.length > 0) {
        const polygon = getTurfFeature(new ol_geom__WEBPACK_IMPORTED_MODULE_9__.default([coordinates]));
        linesIds = linesIds.map(lineId => lines[lineId]) // .filter((s) => booleanContains(polygon, s.turfLine))
        .filter(s => s.coordinates.some(point => (0,_turf_turf__WEBPACK_IMPORTED_MODULE_1__.booleanContains)(polygon, (0,_turf_turf__WEBPACK_IMPORTED_MODULE_1__.point)(point)))).map(l => l.id);
      }

      const streetIds = linesIds.map(lineId => lines[lineId]).map(({
        streetId
      }) => streetId);
      const filteredStreetIds = Array.from(new Set(streetIds).values());
      const filteredStreets = filteredStreetIds.map(streetId => streets[streetId]);
      return this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.pluck)('form')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(form => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([form.controls.autoSelectStreets.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.startWith)(form.value.autoSelectStreets)), form.controls.autoSelectAvenues.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.startWith)(form.value.autoSelectAvenues))])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([autoSelectStreets, autoSelectAvenues]) => {
        if (autoSelectStreets || autoSelectAvenues) {
          this.selectedStreets.clear();
          const selectedStreets = filteredStreets.filter(street => autoSelectAvenues && street.type > 1 || autoSelectStreets && street.type === 1);

          for (const street of selectedStreets) {
            this.selectedStreets.set(street.id, street.name);
          }
        }

        return filteredStreets;
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.shareReplay)(1));
    this.streetSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl('');
    this.filteredStreets = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)([this.streetSearch.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.filter)(v => typeof v === 'string'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(search => (0,src_app_services_utils__WEBPACK_IMPORTED_MODULE_5__.normalizeString)(search)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.startWith)('')), this.geoFilteredStreets]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([search, streets]) => {
      if (search.length <= 3) return [];
      const filteredStreets = streets.filter(({
        name
      }) => (0,src_app_services_utils__WEBPACK_IMPORTED_MODULE_5__.normalizeString)(name).includes(search));
      const sorted = filteredStreets.sort((a, b) => a.name > b.name ? 1 : -1);
      return sorted;
    }));
    this.selectedStreets = new Map();
    this.draw.on('drawend', drawEvent => {
      var _a;

      return this.mapPolygon.next(((_a = drawEvent.feature.getGeometry().getCoordinates()[0]) === null || _a === void 0 ? void 0 : _a.map(c => (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.toLonLat)(c))) || []);
    });
    this.subscriptions.push(...[dataService.ready.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)(() => this.show$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.filter)(s => s), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(() => {
      this.map = new ol__WEBPACK_IMPORTED_MODULE_35__.default({
        interactions: (0,ol_interaction__WEBPACK_IMPORTED_MODULE_36__.defaults)(),
        target: `${this.secondary ? 'r' : 'l'}-filter-map`,
        layers: [new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_37__.default({
          source: new ol_source__WEBPACK_IMPORTED_MODULE_38__.default(),
          preload: 4
        }), new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_39__.default({
          source: this.drawnPolygon
        })],
        view: new ol__WEBPACK_IMPORTED_MODULE_40__.default({
          center: (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.fromLonLat)([-58.453, -34.62]),
          zoom: 12.1
        }),
        controls: []
      });
      this.map.addInteraction(this.draw);
    }), media.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => media.isActive('lt-lg')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_34__.debounceTime)(100)).subscribe(() => this.map ? this.map.updateSize() : null)]);
  }

  changeChartType(newType) {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        [`${this.secondary ? 'r' : 'l'}-chart`]: newType
      },
      queryParamsHandling: 'merge'
    });
  }

  clone(otherState) {
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        [this.secondary ? 'right' : 'left']: JSON.stringify(otherState)
      },
      queryParamsHandling: 'merge'
    });
  }

  apply(state, sync, otherState, mapPolygon) {
    this.show.next(false);
    const completeState = Object.assign(Object.assign({}, state), Object.fromEntries(Object.entries(otherState).filter(([key]) => sync[key])));
    const queryParams = {
      [this.secondary ? 'right' : 'left']: JSON.stringify(Object.assign(Object.assign({}, completeState), {
        dateStart: new Date(completeState.dateStart).getTime(),
        dateEnd: completeState.dateEnd ? new Date(completeState.dateEnd).getTime() : undefined,
        streets: sync.streets ? otherState.streets : [...this.selectedStreets.keys()],
        mapPolygon
      })),
      [this.secondary ? 'right-sync' : 'left-sync']: JSON.stringify(sync)
    };
    return this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams,
      queryParamsHandling: 'merge'
    });
  }

  allSelected(selectedNeighborhoods, allNeighborhoods) {
    return allNeighborhoods.every(neighborhood => selectedNeighborhoods.includes(neighborhood.lowerAdminLevelId));
  }

  someSelected(selectedNeighborhoods, allNeighborhoods) {
    return !this.allSelected(selectedNeighborhoods, allNeighborhoods) && allNeighborhoods.some(neighborhood => selectedNeighborhoods.includes(neighborhood.lowerAdminLevelId));
  }

  setSelectedNeighborhoods(control, select, selectedNeighborhoods, neighborhoodIds) {
    let newNeighborhoods = [];

    if (select) {
      newNeighborhoods = [...selectedNeighborhoods, ...neighborhoodIds].filter((id, index, arr) => arr.findIndex(id2 => id2 === id) === index);
    } else {
      newNeighborhoods = selectedNeighborhoods.filter(id => !neighborhoodIds.some(id2 => id2 === id));
    }

    control.setValue(newNeighborhoods);
  }

  download({
    csvData,
    chart
  }) {
    const headers = Object.keys(csvData[0]).filter(h => h !== '__typename');
    const csv = [headers.join(','), ...csvData.map(row => headers.map(fieldName => row[fieldName]).join(','))].join('\r\n');
    (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(new Blob([csv], {
      type: 'text/csv'
    }), `${chart.name.toLocaleLowerCase()}.csv`);
  }

  ngOnDestroy() {
    this.subscriptions.map(s => s.unsubscribe());
  }

}

FiltersComponent.ɵfac = function FiltersComponent_Factory(t) {
  return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_41__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_41__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_display_log_service__WEBPACK_IMPORTED_MODULE_7__.DisplayLogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__.MediaObserver));
};

FiltersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FiltersComponent,
  selectors: [["app-filters"]],
  inputs: {
    exportableData: "exportableData",
    secondary: "secondary"
  },
  ngContentSelectors: _c0,
  decls: 21,
  vars: 15,
  consts: [["mat-raised-button", "", "color", "accent", 3, "matMenuTriggerFor"], ["filterMenu", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "disabled", "click", 4, "ngIf"], ["chartsMenu", "matMenu"], [4, "ngFor", "ngForOf"], [3, "fxShow"], ["id", "backdrop"], ["fxLayout", "column", "fxLayoutAlign", "center center", "id", "dialog-wrapper"], ["fxLayout", "column", 4, "ngIf"], ["mat-menu-item", "", 3, "disabled", "click"], ["fxLayout", "column"], ["fxLayout", "row", "fxLayout.lt-lg", "column", 2, "padding", "1em", "overflow-y", "auto"], ["fxLayout", "column", "fxLayoutGap", "1em", "fxFlex", "1 0 50", "ngStyle.gt-md", "overflow-y: auto; padding-right: 1em;", 3, "formGroup"], [1, "mat-title"], [1, "mat-subheading-2"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "0.5em"], ["mat-icon-button", "", "class", "little-fab", 3, "matTooltip", "click", 4, "ngIf"], ["appearance", "fill", "fxFlex", "auto"], [3, "rangePicker", "max", "disabled"], ["matStartDate", "", "placeholder", "Desde", "formControlName", "dateStart"], ["matEndDate", "", "placeholder", "hasta", "formControlName", "dateEnd"], ["matSuffix", "", 3, "for"], ["dateOne", ""], ["formControlName", "workingDays", "fxLayout", "row wrap", "fxLayoutGap", "1em"], [3, "value"], ["fxLayout", "row", "fxLayoutAlign", " center", "fxLayoutGap", "0.5em"], ["formControlName", "hours", "multiple", "", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "checked", "indeterminate", "disabled", "change"], ["fxLayout", "row", "fxLayoutAlign", " center", "fxLayoutGap", "1em"], [1, "mat-subheading-2", "no-margin-bottom"], ["fxLayout", "column", "fxLayoutGap", "2em"], ["fxLayout", "row", "fxLayoutAlign", " center", "fxLayoutGap", "1em", "fxFlex.gt-sm", "auto"], ["formControlName", "neighborhoods", "multiple", "", 3, "disabled"], [4, "ngIf"], ["fxLayout", "row", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "1em"], ["formControlName", "autoSelectStreets", "color", "primary", 3, "disabled"], ["formControlName", "autoSelectAvenues", "color", "primary", 3, "disabled"], ["placeholder", "Calle", "matInput", "", 3, "formControl", "matAutocomplete"], ["streetInput", ""], ["auto", "matAutocomplete"], ["style", "text-align: center; margin: 0.5em", 4, "ngIf"], [2, "position", "sticky", "top", "0", "bottom", "0.5em", "margin", "0.5em"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf", "ngIfElse"], ["selected", ""], ["fxLayout", "row", "fxLayoutAlign.gt-sm", "center center", "fxLayout.lt-md", "column", "fxLayoutGap", "1em"], ["appearance", "fill", "fxFlex.gt-sm", "auto"], ["formControlName", "metric", 3, "disabled"], ["formControlName", "aggFunc", 3, "disabled"], ["fxLayout", "column", "fxFlex", "1 0 50"], ["fxFlex", "auto", "ngStyle.gt-md", "padding-left: 1em", "ngStyle.lt-lg", "padding-top: 2em", 3, "id"], [2, "position", "relative", "z-index", "1"], [2, "position", "absolute", "top", "1em", "right", "1em"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "fxFlex", "1 0 auto", 3, "disabled", "click", 4, "ngIf"], ["mat-icon-button", "", 1, "little-fab", 3, "matTooltip", "click"], [3, "color"], ["fxLayout", "row"], [1, "mat-optgroup-label", 3, "checked", "indeterminate", "change"], ["fxFlex", "auto", 3, "label"], [3, "click"], ["color", "primary", 2, "width", "100%", 3, "checked", "change"], ["streetCheckbox", ""], [2, "text-align", "center", "margin", "0.5em"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["color", "primary", 2, "width", "100%", 3, "checked"], ["mat-raised-button", "", "color", "primary", "fxFlex", "1 0 auto", 3, "disabled", "click"]],
  template: function FiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-menu", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Tipo");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_6_listener() {
        return ctx.show.next(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Mostrar Filtro");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, FiltersComponent_button_8_Template, 2, 1, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, FiltersComponent_button_10_Template, 2, 1, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-menu", null, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, FiltersComponent_ng_container_14_Template, 2, 1, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, FiltersComponent_mat_card_19_Template, 101, 48, "mat-card", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](13);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 7, ctx.data));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 9, ctx.exportableData));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.charts);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fxShow", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 11, ctx.show$));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 13, ctx.data));
    }
  },
  directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_43__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_45__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_45__.NgForOf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_46__.DefaultShowHideDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_47__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_47__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_48__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_48__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_47__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_47__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_46__.DefaultStyleDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_49__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_49__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_50__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_50__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_50__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_50__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_49__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_50__.MatDateRangePicker, _angular_material_radio__WEBPACK_IMPORTED_MODULE_51__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_51__.MatRadioButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_52__.MatSelect, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_53__.MatCheckbox, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_54__.MatSlideToggle, _angular_material_input__WEBPACK_IMPORTED_MODULE_55__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_56__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_56__.MatAutocomplete, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_57__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_57__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_57__.MatExpansionPanelTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_48__.MatCardActions, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_58__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_59__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_60__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_52__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_60__.MatOptgroup],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_45__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_45__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_45__.KeyValuePipe],
  styles: [".mat-form-field-appearance-fill .mat-form-field-underline {\n  bottom: 0;\n}\n\n  .mat-form-field-appearance-fill .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n#backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: black;\n  opacity: 0.5;\n  z-index: 2;\n}\n\n#dialog-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 3;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n  overflow-x: hidden;\n  width: 90%;\n  max-height: 99vh;\n}\n\n  ul {\n  list-style: initial;\n  padding-left: 2em;\n}\n\n.mat-card-title-group[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6ImZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuI2JhY2tkcm9wIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbiNkaWFsb2ctd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjdmOTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtaGVpZ2h0OiA5OXZoO1xyXG59XHJcblxyXG46Om5nLWRlZXAgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IGluaXRpYWw7XHJcbiAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZS1ncm91cCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 14682:
/*!******************************************************!*\
  !*** ./src/app/components/filters/filters.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiltersModule": () => (/* binding */ FiltersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 78662);
/* harmony import */ var _filters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.component */ 61443);
/* harmony import */ var _vector_map_vector_map_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vector-map/vector-map.module */ 58181);
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/map.module */ 93375);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ 79243);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 15644);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);























class FiltersModule {
}
FiltersModule.ɵfac = function FiltersModule_Factory(t) { return new (t || FiltersModule)(); };
FiltersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FiltersModule });
FiltersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
            _vector_map_vector_map_module__WEBPACK_IMPORTED_MODULE_1__.VectorMapModule,
            _map_map_module__WEBPACK_IMPORTED_MODULE_2__.MapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FiltersModule, { declarations: [_filters_component__WEBPACK_IMPORTED_MODULE_0__.FiltersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioModule,
        _vector_map_vector_map_module__WEBPACK_IMPORTED_MODULE_1__.VectorMapModule,
        _map_map_module__WEBPACK_IMPORTED_MODULE_2__.MapModule], exports: [_filters_component__WEBPACK_IMPORTED_MODULE_0__.FiltersComponent] }); })();


/***/ }),

/***/ 47143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 73071);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);














function LoginComponent_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function LoginComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Este campo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function LoginComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
  }
}

function LoginComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Entrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.loginForm.invalid);
  }
}

function LoginComponent_mat_card_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_mat_card_15_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r7.errorMessage.next("");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const msg_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r6);
  }
}

class LoginComponent {
  constructor(fb, userService) {
    this.userService = userService;
    this.showPassword = false;
    this.errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.loginForm = fb.group({
      username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
  }

  login(username, password) {
    this.errorMessage.next('');
    this.loading.next(true);
    return this.userService.login(username, password).catch(() => {
      this.loading.next(false);
      this.errorMessage.next('Usuario o contraseña erróneos');
    });
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 17,
  vars: 12,
  consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 2, "padding-top", "10vh"], [2, "width", "20em"], ["fxLayout", "column", "fxLayoutGap", "10px", "id", "login-form", 3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "username", "placeholder", "Usuario", "type", "text", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", "placeholder", "Contrase\u00F1a", "required", "", 3, "type"], ["matSuffix", "", 2, "cursor", "pointer", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "disabled", 4, "ngIf", "ngIfElse"], ["entrar", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "error", "style", "margin-top: 2em", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "disabled"], ["diameter", "30"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "error", 2, "margin-top", "2em"], ["fxFlex", ""], ["mat-icon-button", "", 3, "click"], ["aria-label", "close"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
        return ctx.login(ctx.loginForm.value.username, ctx.loginForm.value.password);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginComponent_mat_error_5_Template, 2, 0, "mat-error", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_8_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 2, 0, "mat-error", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_button_11_Template, 3, 1, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LoginComponent_ng_template_13_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginComponent_mat_card_15_Template, 7, 1, "mat-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loginForm.controls["username"].valid && ctx.loginForm.controls["username"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.showPassword ? "visibility" : "visibility_off", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loginForm.controls["password"].valid && ctx.loginForm.controls["password"].touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, ctx.loading))("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 10, ctx.errorMessage));
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 43872:
/*!**************************************************!*\
  !*** ./src/app/components/login/login.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 78662);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 47143);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);











class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule], exports: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent] }); })();


/***/ }),

/***/ 51006:
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol */ 83223);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol */ 65835);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol */ 33697);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/proj */ 68565);
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/layer */ 25504);
/* harmony import */ var ol_layer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/layer */ 81204);
/* harmony import */ var ol_interaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/interaction */ 33360);
/* harmony import */ var ol_source__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/source */ 72966);
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/Vector */ 49010);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style */ 16274);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/style */ 21049);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/geom */ 37202);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chartTypes */ 30798);
/* harmony import */ var src_app_services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils */ 7391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 89460);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);

















function MapComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 3, item_r4.key), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 5, item_r4.value, "1.0-0"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 8, ctx_r2.getUnit(item_r4.key)), "");
  }
}

const _c0 = function (a0) {
  return {
    "background-color": a0,
    height: "1.5em"
  };
};

function MapComponent_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const color_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, color_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](index_r6 + 1);
  }
}

const _c1 = function (a0, a1) {
  return {
    right: a0,
    left: a1
  };
};

function MapComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MapComponent_div_1_div_1_Template, 9, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "mat-divider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MapComponent_div_1_div_5_Template, 4, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Intensidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const extra_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c1, ctx_r0.boxSide === "right" ? "1em" : "", ctx_r0.boxSide === "left" ? "1em" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, extra_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.colors);
  }
}

class MapComponent {
  constructor() {
    this.boxSide = 'right';
    this.colors = ['rgba(255,255,204,0.75)', 'rgba(255,165,0,0.75)', 'rgba(255,0,0,0.75)', 'rgba(140,0,0,0.75)'];
    this.id = 'display-map-' + MapComponent.nextId++;
    this.differenceGreaterPositive = {
      delay: false,
      length: false,
      speed: true
    };
    this.lineVectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_4__.default({
      features: []
    });
    this.view = new ol__WEBPACK_IMPORTED_MODULE_5__.default({
      center: (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.fromLonLat)([-58.453, -34.62]),
      zoom: 12.1
    });
    this.subscriptions = [];

    this.getUnit = key => {
      var _a;

      return (_a = src_app_services_chartTypes__WEBPACK_IMPORTED_MODULE_1__.metrics.find(({
        id
      }) => id === key)) === null || _a === void 0 ? void 0 : _a.unit;
    };
  }

  ngOnInit() {
    this.summary = this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({
      summary
    }) => summary));
    this.subscriptions.push(this.redraw.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(100)).subscribe(() => {
      if (this.map) this.map.updateSize();
    }));
    this.subscriptions.push(this.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({
      lines
    }) => lines), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(src_app_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid)).subscribe(lines => {
      if (!this.map) {
        this.map = new ol__WEBPACK_IMPORTED_MODULE_9__.default({
          interactions: (0,ol_interaction__WEBPACK_IMPORTED_MODULE_10__.defaults)(),
          target: this.id,
          layers: [new ol_layer__WEBPACK_IMPORTED_MODULE_11__.default({
            source: new ol_source__WEBPACK_IMPORTED_MODULE_12__.default(),
            preload: 4
          }), new ol_layer__WEBPACK_IMPORTED_MODULE_13__.default({
            source: this.lineVectorSource
          })],
          view: this.view
        });
      }

      this.lineVectorSource.clear();

      if (lines.length > 0) {
        this.lineVectorSource.addFeatures(lines.sort((a, b) => a.color - b.color).map(({
          line,
          color
        }) => {
          const feature = new ol__WEBPACK_IMPORTED_MODULE_14__.default({
            geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_15__.default([line.map(c => (0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.fromLonLat)(c))])
          });
          feature.setStyle([new ol_style__WEBPACK_IMPORTED_MODULE_16__.default({
            stroke: new ol_style__WEBPACK_IMPORTED_MODULE_17__.default({
              color: this.colors[color - 1] || 'black',
              width: 4
            })
          })]);
          return feature;
        }));
        this.view.fit(this.lineVectorSource.getExtent(), {
          size: this.map.getSize(),
          maxZoom: 13
        });
      }

      this.lineVectorSource.changed();
    }));
  }

  ngOnDestroy() {
    this.subscriptions.map(s => s.unsubscribe());
  }

}
MapComponent.nextId = 0;

MapComponent.ɵfac = function MapComponent_Factory(t) {
  return new (t || MapComponent)();
};

MapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MapComponent,
  selectors: [["app-map"]],
  inputs: {
    data: "data",
    redraw: "redraw",
    boxSide: "boxSide"
  },
  decls: 3,
  vars: 4,
  consts: [[2, "width", "100%", "height", "100%", "position", "relative", 3, "id"], ["class", "floating-box", 3, "ngStyle", 4, "ngIf"], [1, "floating-box", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [2, "margin", "0.5em 0em"], ["fxLayout", "row", 2, "padding", "0.25em"], ["fxFlex", "auto", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [2, "font-size", "large", "padding", "0.25em"], [2, "font-weight", "bold", "margin-right", "0.25em"], ["fxFlex", "auto"], [3, "ngStyle"]],
  template: function MapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MapComponent_div_1_Template, 8, 8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.summary));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultStyleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDivider, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultFlexDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.KeyValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.LowerCasePipe],
  styles: [".ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid #00f;\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0, 60, 136, 0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: #000;\n  float: right;\n  z-index: 10;\n}\n\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-index: 11;\n  color: #000;\n  text-shadow: -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff;\n}\n\n.ol-scale-text {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000;\n  text-shadow: -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff;\n}\n\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-index: 9;\n  border: 1px solid #000;\n}\n\n.ol-unsupported {\n  display: none;\n}\n\n.ol-unselectable,\n.ol-viewport {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.ol-overlaycontainer,\n.ol-overlaycontainer-stopevent {\n  pointer-events: none;\n}\n\n.ol-overlaycontainer-stopevent > *,\n.ol-overlaycontainer > * {\n  pointer-events: auto;\n}\n\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  user-select: text;\n}\n\n.ol-grabbing {\n  cursor: grabbing;\n}\n\n.ol-grab {\n  cursor: move;\n  cursor: grab;\n}\n\n.ol-control {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n\n.ol-control:hover {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.ol-zoom-left {\n  top: 0.5em;\n  left: 0.5em;\n}\n\n.ol-zoom-right {\n  top: 0.5em;\n  right: 0.5em;\n}\n\n.ol-rotate {\n  top: 0.5em;\n  right: 0.5em;\n  transition: opacity 0.25s linear, visibility 0s linear;\n}\n\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s linear, visibility 0s linear 0.25s;\n}\n\n.ol-zoom-extent {\n  top: 4.643em;\n  left: 0.5em;\n}\n\n.ol-full-screen {\n  right: 0.5em;\n  top: 0.5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: #fff;\n  font-size: 1.14em;\n  font-weight: 700;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: 0.4em;\n  background-color: rgba(173, 105, 2, 0.7);\n  border: none;\n  border-radius: 2px;\n}\n\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n\n.ol-control button span {\n  pointer-events: none;\n}\n\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n\n.ol-compass {\n  display: block;\n  font-weight: 400;\n  font-size: 1.2em;\n  will-change: transform;\n}\n\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n\n.ol-control button:focus,\n.ol-control button:hover {\n  text-decoration: none;\n  background-color: #ad6902;\n}\n\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n.ol-attribution {\n  text-align: right;\n  bottom: 0.5em;\n  right: 0.5em;\n  max-width: calc(100% - 1.3em);\n}\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 0 0.5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n\n.ol-attribution li:not(:last-child):after {\n  content: \" \";\n}\n\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n\n.ol-attribution button,\n.ol-attribution ul {\n  display: inline-block;\n}\n\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -0.2em;\n  max-height: 1.6em;\n}\n\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: 0.5em;\n  height: 200px;\n}\n\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: inline-block;\n}\n\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0, 60, 136, 0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n\n/*# sourceMappingURL=ol.css.map */\n\n.floating-box {\n  position: absolute;\n  z-index: 1;\n  top: 1em;\n  background-color: white;\n  padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFNRjs7QUFKQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7QUFRRjs7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtBQVVGOztBQVJBOztFQUVFLDJCQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtFQUNBLHdDQUFBO0FBV0Y7O0FBVEE7O0VBRUUsb0JBQUE7QUFZRjs7QUFWQTs7RUFFRSxvQkFBQTtBQWFGOztBQVhBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0FBY0Y7O0FBWkE7RUFHRSxnQkFBQTtBQWVGOztBQWJBO0VBQ0UsWUFBQTtFQUdBLFlBQUE7QUFnQkY7O0FBZEE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaUJGOztBQWZBO0VBQ0UsMENBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFtQkY7O0FBakJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtBQXFCRjs7QUFuQkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtBQXNCRjs7QUFwQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQXVCRjs7QUFyQkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQXdCRjs7QUF0QkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF5QkY7O0FBdkJBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUEwQkY7O0FBeEJBO0VBQ0Usb0JBQUE7QUEyQkY7O0FBekJBO0VBQ0Usa0JBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQTZCRjs7QUEzQkE7RUFDRSxnQkFBQTtBQThCRjs7QUE1QkE7RUFDRSxVQUFBO0FBK0JGOztBQTdCQTs7RUFFRSxxQkFBQTtFQUNBLHlCQUFBO0FBZ0NGOztBQTlCQTtFQUNFLDBCQUFBO0FBaUNGOztBQS9CQTtFQUNFLDBCQUFBO0FBa0NGOztBQWhDQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQW1DRjs7QUFqQ0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFvQ0Y7O0FBbENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBcUNGOztBQW5DQTtFQUNFLFlBQUE7QUFzQ0Y7O0FBcENBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUF1Q0Y7O0FBckNBOztFQUVFLHFCQUFBO0FBd0NGOztBQXRDQTtFQUNFLGFBQUE7QUF5Q0Y7O0FBdkNBO0VBQ0Usb0NBQUE7QUEwQ0Y7O0FBeENBO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQTJDRjs7QUF6Q0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBNENGOztBQTFDQTtFQUNFLGFBQUE7QUE2Q0Y7O0FBM0NBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBOENGOztBQTVDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQStDRjs7QUE3Q0E7RUFDRSxVQUFBO0FBZ0RGOztBQTlDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBaURGOztBQS9DQTtFQUNFLFNBQUE7RUFDQSxPQUFBO0VBQ0Esd0JBQUE7QUFrREY7O0FBaERBOztFQUVFLHFCQUFBO0FBbURGOztBQWpEQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBb0RGOztBQWxEQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFxREY7O0FBbkRBOztFQUVFLGFBQUE7QUFzREY7O0FBcERBO0VBQ0Usb0NBQUE7QUF1REY7O0FBckRBO0VBQ0Usd0NBQUE7QUF3REY7O0FBdERBO0VBQ0UsWUFBQTtBQXlERjs7QUF2REEsaUNBQUE7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBeURGIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbC1ib3gge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGY7XHJcbn1cclxuLm9sLW1vdXNlLXBvc2l0aW9uIHtcclxuICB0b3A6IDhweDtcclxuICByaWdodDogOHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ub2wtc2NhbGUtbGluZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCA2MCwgMTM2LCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3R0b206IDhweDtcclxuICBsZWZ0OiA4cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ub2wtc2NhbGUtbGluZS1pbm5lciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbiAgd2lsbC1jaGFuZ2U6IGNvbnRlbnRzLCB3aWR0aDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbn1cclxuLm9sLXNjYWxlLWJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogOHB4O1xyXG4gIGxlZnQ6IDhweDtcclxufVxyXG4ub2wtc2NhbGUtc3RlcC1tYXJrZXIge1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbi5vbC1zY2FsZS1zdGVwLXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC01cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHotaW5kZXg6IDExO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtc2hhZG93OiAtMnB4IDAgI2ZmZiwgMCAycHggI2ZmZiwgMnB4IDAgI2ZmZiwgMCAtMnB4ICNmZmY7XHJcbn1cclxuLm9sLXNjYWxlLXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvdHRvbTogMjVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogLTJweCAwICNmZmYsIDAgMnB4ICNmZmYsIDJweCAwICNmZmYsIDAgLTJweCAjZmZmO1xyXG59XHJcbi5vbC1zY2FsZS1zaW5nbGViYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgei1pbmRleDogOTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5vbC11bnN1cHBvcnRlZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ub2wtdW5zZWxlY3RhYmxlLFxyXG4ub2wtdmlld3BvcnQge1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm9sLW92ZXJsYXljb250YWluZXIsXHJcbi5vbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLm9sLW92ZXJsYXljb250YWluZXItc3RvcGV2ZW50ID4gKixcclxuLm9sLW92ZXJsYXljb250YWluZXIgPiAqIHtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG4ub2wtc2VsZWN0YWJsZSB7XHJcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBkZWZhdWx0O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcclxuICAtbXMtdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XHJcbn1cclxuLm9sLWdyYWJiaW5nIHtcclxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XHJcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xyXG4gIGN1cnNvcjogZ3JhYmJpbmc7XHJcbn1cclxuLm9sLWdyYWIge1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuICBjdXJzb3I6IC1tb3otZ3JhYjtcclxuICBjdXJzb3I6IGdyYWI7XHJcbn1cclxuLm9sLWNvbnRyb2wge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4ub2wtY29udHJvbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG59XHJcbi5vbC16b29tLWxlZnQge1xyXG4gIHRvcDogMC41ZW07XHJcbiAgbGVmdDogMC41ZW07XHJcbn1cclxuLm9sLXpvb20tcmlnaHQge1xyXG4gIHRvcDogMC41ZW07XHJcbiAgcmlnaHQ6IDAuNWVtO1xyXG59XHJcbi5vbC1yb3RhdGUge1xyXG4gIHRvcDogMC41ZW07XHJcbiAgcmlnaHQ6IDAuNWVtO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhcjtcclxufVxyXG4ub2wtcm90YXRlLm9sLWhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzO1xyXG59XHJcbi5vbC16b29tLWV4dGVudCB7XHJcbiAgdG9wOiA0LjY0M2VtO1xyXG4gIGxlZnQ6IDAuNWVtO1xyXG59XHJcbi5vbC1mdWxsLXNjcmVlbiB7XHJcbiAgcmlnaHQ6IDAuNWVtO1xyXG4gIHRvcDogMC41ZW07XHJcbn1cclxuLm9sLWNvbnRyb2wgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDFweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4xNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEuMzc1ZW07XHJcbiAgd2lkdGg6IDEuMzc1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDAuNGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAxMDUsIDIsIDAuNyk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4ub2wtY29udHJvbCBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5vbC1jb250cm9sIGJ1dHRvbiBzcGFuIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4ub2wtem9vbS1leHRlbnQgYnV0dG9uIHtcclxuICBsaW5lLWhlaWdodDogMS40ZW07XHJcbn1cclxuLm9sLWNvbXBhc3Mge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG59XHJcbi5vbC10b3VjaCAub2wtY29udHJvbCBidXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuLm9sLXRvdWNoIC5vbC16b29tLWV4dGVudCB7XHJcbiAgdG9wOiA1LjVlbTtcclxufVxyXG4ub2wtY29udHJvbCBidXR0b246Zm9jdXMsXHJcbi5vbC1jb250cm9sIGJ1dHRvbjpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAxMDUsIDIsIDEpO1xyXG59XHJcbi5vbC16b29tIC5vbC16b29tLWluIHtcclxuICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcclxufVxyXG4ub2wtem9vbSAub2wtem9vbS1vdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAycHggMnB4O1xyXG59XHJcbi5vbC1hdHRyaWJ1dGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgYm90dG9tOiAwLjVlbTtcclxuICByaWdodDogMC41ZW07XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxLjNlbSk7XHJcbn1cclxuLm9sLWF0dHJpYnV0aW9uIHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAwLjVlbTtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjZmZmO1xyXG59XHJcbi5vbC1hdHRyaWJ1dGlvbiBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm9sLWF0dHJpYnV0aW9uIGxpOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG59XHJcbi5vbC1hdHRyaWJ1dGlvbiBpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDJlbTtcclxuICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4ub2wtYXR0cmlidXRpb24gYnV0dG9uLFxyXG4ub2wtYXR0cmlidXRpb24gdWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ub2wtYXR0cmlidXRpb24ub2wtY29sbGFwc2VkIHVsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5vbC1hdHRyaWJ1dGlvbjpub3QoLm9sLWNvbGxhcHNlZCkge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG4ub2wtYXR0cmlidXRpb24ub2wtdW5jb2xsYXBzaWJsZSB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDA7XHJcbn1cclxuLm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUgaW1nIHtcclxuICBtYXJnaW4tdG9wOiAtMC4yZW07XHJcbiAgbWF4LWhlaWdodDogMS42ZW07XHJcbn1cclxuLm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5vbC16b29tc2xpZGVyIHtcclxuICB0b3A6IDQuNWVtO1xyXG4gIGxlZnQ6IDAuNWVtO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLm9sLXpvb21zbGlkZXIgYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcbi5vbC10b3VjaCAub2wtem9vbXNsaWRlciB7XHJcbiAgdG9wOiA1LjVlbTtcclxufVxyXG4ub2wtb3ZlcnZpZXdtYXAge1xyXG4gIGxlZnQ6IDAuNWVtO1xyXG4gIGJvdHRvbTogMC41ZW07XHJcbn1cclxuLm9sLW92ZXJ2aWV3bWFwLm9sLXVuY29sbGFwc2libGUge1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDAgMDtcclxufVxyXG4ub2wtb3ZlcnZpZXdtYXAgLm9sLW92ZXJ2aWV3bWFwLW1hcCxcclxuLm9sLW92ZXJ2aWV3bWFwIGJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5vbC1vdmVydmlld21hcCAub2wtb3ZlcnZpZXdtYXAtbWFwIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjN2I5OGJjO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5vbC1vdmVydmlld21hcDpub3QoLm9sLWNvbGxhcHNlZCkgYnV0dG9uIHtcclxuICBib3R0b206IDFweDtcclxuICBsZWZ0OiAycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5vbC1vdmVydmlld21hcC5vbC1jb2xsYXBzZWQgLm9sLW92ZXJ2aWV3bWFwLW1hcCxcclxuLm9sLW92ZXJ2aWV3bWFwLm9sLXVuY29sbGFwc2libGUgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5vbC1vdmVydmlld21hcDpub3QoLm9sLWNvbGxhcHNlZCkge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG4ub2wtb3ZlcnZpZXdtYXAtYm94IHtcclxuICBib3JkZXI6IDJweCBkb3R0ZWQgcmdiYSgwLCA2MCwgMTM2LCAwLjcpO1xyXG59XHJcbi5vbC1vdmVydmlld21hcCAub2wtb3ZlcnZpZXdtYXAtYm94OmhvdmVyIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9b2wuY3NzLm1hcCAqL1xyXG5cclxuLmZsb2F0aW5nLWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuIl19 */"],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 93375:
/*!**********************************************!*\
  !*** ./src/app/components/map/map.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModule": () => (/* binding */ MapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.component */ 51006);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 78662);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);









class MapModule {
}
MapModule.ɵfac = function MapModule_Factory(t) { return new (t || MapModule)(); };
MapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MapModule });
MapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule.withConfig({ addFlexToParent: false }),
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MapModule, { declarations: [_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule], exports: [_map_component__WEBPACK_IMPORTED_MODULE_0__.MapComponent] }); })();


/***/ }),

/***/ 25355:
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 92597);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 73071);
/* harmony import */ var src_app_services_display_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/display-log.service */ 28773);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button-icon/button-icon.component */ 57502);
/* harmony import */ var _display_users_display_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display-users/display-users.component */ 86469);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 1124);



















function UsersComponent_ng_container_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersComponent_ng_container_1_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r5.creatingNewUser.next(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function UsersComponent_ng_container_1_form_7_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersComponent_ng_container_1_form_7_ng_container_13_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return ctx_r9.createUser(ctx_r9.form.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const validF_r8 = ctx.ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !validF_r8.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx_r7.loading) ? "Creando usuario..." : "Crear usuario y continuar", " ");
  }
}

function UsersComponent_ng_container_1_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Campo requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersComponent_ng_container_1_form_7_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r11.creatingNewUser.next(false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, UsersComponent_ng_container_1_form_7_ng_container_13_Template, 4, 4, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 2, ctx_r4.validForm));
  }
}

function UsersComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "app-button-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clickEvent", function UsersComponent_ng_container_1_Template_app_button_icon_clickEvent_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r13.cancel.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Administraci\u00F3n de Usuarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, UsersComponent_ng_container_1_button_5_Template, 3, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, UsersComponent_ng_container_1_form_7_Template, 16, 4, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-display-users", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, ctx_r0.creatingNewUser));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 5, ctx_r0.creatingNewUser));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("users", ctx_r0.users);
  }
}

function UsersComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No tienes los permisos necesarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clickEvent", function UsersComponent_ng_template_3_Template_a_clickEvent_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r15.cancel.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Volver a la p\u00E1gina principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class UsersComponent {
  constructor(userService, displayLog) {
    this.userService = userService;
    this.displayLog = displayLog;
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.updateUsers = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.users = this.updateUsers.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => this.userService.getUsers()));
    this.creatingNewUser = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])
    });
    this.alreadyExistingUsername = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.form.controls.username.valueChanges, this.users]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(() => this.form.controls.username.valid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([username, users]) => users.some(user => user.username === username)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(exists => {
      if (exists) this.form.controls.username.setErrors(Object.assign(Object.assign({}, this.form.controls.username.errors), {
        exists
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.shareReplay)(1));
    this.validForm = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.loading, this.alreadyExistingUsername, this.form.statusChanges]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([loading, existingUsername, status]) => ({
      valid: !loading && !existingUsername && status === 'VALID'
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)({
      valid: false
    }));
  }

  createUser({
    username,
    password
  }) {
    this.loading.next(true);
    return this.userService.createUser(username, password).then(() => {
      this.form.reset();
      this.creatingNewUser.next(false);
      this.displayLog.openLogSuccess('Usuario creado');
      this.updateUsers.next();
    }).catch(err => {
      var _a;

      return this.displayLog.openLogError(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) ? err.error.message : err);
    }).finally(() => this.loading.next(false));
  }

}

UsersComponent.ɵfac = function UsersComponent_Factory(t) {
  return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_display_log_service__WEBPACK_IMPORTED_MODULE_1__.DisplayLogService));
};

UsersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UsersComponent,
  selectors: [["app-users"]],
  outputs: {
    cancel: "cancel"
  },
  decls: 5,
  vars: 4,
  consts: [["fxLayout", "column", "fxLayoutGap", "1em", 2, "padding", "1em"], [4, "ngIf", "ngIfElse"], ["notAllowed", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "1em"], ["tooltip", "Volver", "icon", "arrow_back", 3, "clickEvent"], [1, "mat-headline", "no-margin-bottom"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Crear nuevo", "matTooltipClass", "tooltip", 3, "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "1em", 3, "formGroup", 4, "ngIf"], ["fxLayout", "column", "fxFlex", "auto", 3, "users"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Crear nuevo", "matTooltipClass", "tooltip", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "1em", 3, "formGroup"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "1em"], ["fxFlex.gt-sm", "auto"], ["matInput", "", "formControlName", "username", "placeholder", "Nombre de Usuario"], ["matInput", "", "formControlName", "password", "placeholder", "Contrase\u00F1a"], ["fxLayout", "row", "fxLayoutAlign", "space-evenly center", "fxLayoutGap", "1em", 2, "padding-top", "1em"], ["mat-flat-button", "", "color", "warn", 3, "click"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["fxLayoutAlign", "center center", "fxLayout", "column"], [1, "mat-title"], ["mat-flat-button", "", "color", "primary", 3, "clickEvent"]],
  template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, UsersComponent_ng_container_1_Template, 10, 7, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, UsersComponent_ng_template_3_Template, 5, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.userService.currentUser)) == null ? null : tmp_0_0.isAdmin)("ngIfElse", _r1);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _button_icon_button_icon_component__WEBPACK_IMPORTED_MODULE_2__.ButtonIconComponent, _display_users_display_users_component__WEBPACK_IMPORTED_MODULE_3__.DisplayUsersComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatError, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 90329:
/*!**************************************************!*\
  !*** ./src/app/components/users/users.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 78662);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ 25355);
/* harmony import */ var src_app_components_display_users_display_users_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/display-users/display-users.module */ 56405);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var src_app_components_button_icon_button_icon_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/button-icon/button-icon.module */ 99412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);













class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule,
            src_app_components_display_users_display_users_module__WEBPACK_IMPORTED_MODULE_1__.DisplayUsersModule,
            src_app_components_button_icon_button_icon_module__WEBPACK_IMPORTED_MODULE_2__.ButtonIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule,
        src_app_components_display_users_display_users_module__WEBPACK_IMPORTED_MODULE_1__.DisplayUsersModule,
        src_app_components_button_icon_button_icon_module__WEBPACK_IMPORTED_MODULE_2__.ButtonIconModule], exports: [_users_component__WEBPACK_IMPORTED_MODULE_0__.UsersComponent] }); })();


/***/ }),

/***/ 10283:
/*!***************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapComponent": () => (/* binding */ VectorMapComponent)
/* harmony export */ });
/* harmony import */ var _src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 12702);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol */ 65835);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol */ 83223);
/* harmony import */ var ol__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol */ 33697);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/geom */ 3096);
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/proj */ 68565);
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/Vector */ 49010);
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/layer/Vector */ 81204);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/style */ 6888);
/* harmony import */ var ol_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/style */ 16274);
/* harmony import */ var ol_style_Fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/style/Fill */ 49040);
/* harmony import */ var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style/Stroke */ 21049);
/* harmony import */ var src_app_services_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/utils */ 7391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 70781);




















function VectorMapComponent_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VectorMapComponent_ng_container_1_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const selected_r3 = restoredCtx.ngIf;
      const urlParams_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r4.filter(urlParams_r1.left.state, selected_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aplicar Filtro a Barrios y Calles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const selected_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", selected_r3.length === 0);
  }
}

function VectorMapComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VectorMapComponent_ng_container_1_button_1_Template, 2, 1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.newSelectedNeighborhoods));
  }
}

class VectorMapComponent {
  constructor(dataService, activatedRoute, router) {
    this.dataService = dataService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.id = 'vector-map';
    this.vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_5__.default({
      features: []
    });
    this.newSelectedNeighborhoods = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject([]);
    this.colors = ['#d7d7d7bf', '#dadcedbf', '#b4b6c1bf', '#dae0dcbf', '#c4bababf', '#afafafbf', '#b4c1b9bf', '#9c9eabbf', '#ab9c9cbf', '#969696bf', '#8c9e93bf', '#806e6ebf', '#a79cabbf', '#c1bac4bf', '#7c6e80bf', '#9ca9abbf', '#bac3c4bf', '#6e7e80bf' // '#rgba(110,126,128,0.8)',
    ];

    this.getText = text => new ol_style__WEBPACK_IMPORTED_MODULE_7__.default({
      fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_8__.default({
        color: '#000'
      }),
      stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_9__.default({
        color: '#fff',
        width: 3
      }),
      font: '12px Calibri,sans-serif',
      text
    });
  }

  ngOnInit() {
    var _this = this;

    return (0,_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(100).toPromise();
      _this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([_this.dataService.neighborhoods, _this.dataService.urlParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(({
        left
      }) => left.state.neighborhoods || []))]).subscribe(([allNeighborhoods, neighborhoodIds]) => {
        const shapes = allNeighborhoods.map(n => ({
          label: new _angular_common__WEBPACK_IMPORTED_MODULE_13__.TitleCasePipe().transform(n.lowerAdminLevelName),
          color: _this.colors[n.greaterAdminLevelId % _this.colors.length],
          disabled: false,
          highlight: neighborhoodIds.some(id => id === n.lowerAdminLevelId),
          coordinates: n.coordinates
        }));
        const points = allNeighborhoods.map(a => a.coordinates).flat().flat().flat();
        const minX = Math.min(...points.map(point => point[1]));
        const minY = Math.min(...points.map(point => point[0]));
        const maxX = Math.max(...points.map(point => point[1]));
        const maxY = Math.max(...points.map(point => point[0]));
        const min = (0,ol_proj__WEBPACK_IMPORTED_MODULE_1__.fromLonLat)([minY * 1.0005, minX * 1.0005]);
        const max = (0,ol_proj__WEBPACK_IMPORTED_MODULE_1__.fromLonLat)([maxY * 0.9995, maxX * 0.9995]);
        const center = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2];
        _this.map = new ol__WEBPACK_IMPORTED_MODULE_14__.default({
          target: _this.id,
          layers: [new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_15__.default({
            source: _this.vectorSource
          })],
          view: new ol__WEBPACK_IMPORTED_MODULE_16__.default({
            center,
            zoom: 11,
            extent: [...min, ...max]
          })
        });
        const selectedNeighborhoods = allNeighborhoods.filter(n => neighborhoodIds.includes(n.lowerAdminLevelId));

        _this.newSelectedNeighborhoods.next(selectedNeighborhoods);

        _this.vectorSource.clear();

        _this.vectorSource.addFeatures(shapes.map(({
          label,
          color,
          disabled,
          coordinates,
          highlight
        }) => {
          const points = coordinates.map(a => a.map(b => b.map(point => (0,ol_proj__WEBPACK_IMPORTED_MODULE_1__.fromLonLat)(point))));
          const feature = new ol__WEBPACK_IMPORTED_MODULE_17__.default({
            geometry: new ol_geom__WEBPACK_IMPORTED_MODULE_18__.default(points)
          });
          const style = new ol_style__WEBPACK_IMPORTED_MODULE_19__.default(_this.getStyleOptions(highlight, true, color, disabled, label));
          feature.setStyle(style);
          return feature;
        }));

        _this.map.on('pointermove', event => {
          if (event.dragging) return;

          _this.displayFeatureInfo(shapes, _this.map.getEventPixel(event.originalEvent));
        });

        _this.map.on('click', event => {
          const feature = _this.map.forEachFeatureAtPixel(_this.map.getEventPixel(event.originalEvent), f => f);

          if (feature instanceof ol__WEBPACK_IMPORTED_MODULE_17__.default) {
            const text = feature.getStyle().getText().getText();
            const selected = _this.newSelectedNeighborhoods.value;
            const newNeighborhood = selected.find(n => n.lowerAdminLevelName === (text === null || text === void 0 ? void 0 : text.toLocaleLowerCase()));
            const newSelected = !!newNeighborhood ? selected.filter(nei => nei.lowerAdminLevelId !== newNeighborhood.lowerAdminLevelId) : [...selected, allNeighborhoods.find(neighborhood => neighborhood.lowerAdminLevelName === (text === null || text === void 0 ? void 0 : text.toLocaleLowerCase()))].filter(src_app_services_utils__WEBPACK_IMPORTED_MODULE_2__.isValid);

            _this.newSelectedNeighborhoods.next(newSelected);

            _this.toggleHighlight(feature, shapes, 'add', !newNeighborhood);
          }
        });
      });
    })();
  }

  filter(state, selected) {
    var _this2 = this;

    return (0,_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const neighborhoods = selected.map(({
        lowerAdminLevelId
      }) => lowerAdminLevelId);
      return _this2.router.navigate([], {
        relativeTo: _this2.activatedRoute,
        queryParams: {
          left: JSON.stringify(Object.assign(Object.assign({}, state), {
            neighborhoods
          }))
        },
        queryParamsHandling: 'merge'
      });
    })();
  }

  getStyleOptions(highlight, selected, fillColor, disabled, text) {
    const alpha = disabled ? '40' : 'ff';
    const color = `#${fillColor.slice(1, 7)}${alpha}`;
    const stroke = highlight ? new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_9__.default({
      color: selected ? '#4a5b4a' : '#444444',
      width: selected ? 4 : 3
    }) : new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_9__.default({
      color: disabled ? 'white' : '#808080',
      width: disabled ? 0 : 1
    });
    return {
      fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_8__.default({
        color
      }),
      stroke,
      text: this.getText(text),
      zIndex: highlight ? 999 : 111
    };
  }

  toggleHighlight(feature, shapes, action, selected) {
    var _a, _b;

    const text = (_b = (_a = feature.getStyle()) === null || _a === void 0 ? void 0 : _a.getText()) === null || _b === void 0 ? void 0 : _b.getText();
    const {
      color,
      disabled
    } = shapes.filter(shape => shape.label === text)[0];
    this.map.getTargetElement().style.cursor = feature && !disabled ? 'pointer' : '';
    const alreadySelected = this.newSelectedNeighborhoods.value.some(n => n.lowerAdminLevelName === (text === null || text === void 0 ? void 0 : text.toLocaleLowerCase()));

    if (!disabled && (!alreadySelected || selected)) {
      feature.setStyle(new ol_style__WEBPACK_IMPORTED_MODULE_19__.default(this.getStyleOptions(action === 'add', selected, color, disabled, text || '')));
    }
  }

  displayFeatureInfo(shapes, pixel) {
    var _a, _b, _c, _d, _e, _f;

    const feature = this.map.forEachFeatureAtPixel(pixel, feature => feature);
    const highlightText = (_c = (_b = (_a = this.prevHighlight) === null || _a === void 0 ? void 0 : _a.getStyle()) === null || _b === void 0 ? void 0 : _b.getText()) === null || _c === void 0 ? void 0 : _c.getText();
    const featureText = (_f = (_e = (_d = feature) === null || _d === void 0 ? void 0 : _d.getStyle()) === null || _e === void 0 ? void 0 : _e.getText()) === null || _f === void 0 ? void 0 : _f.getText();

    if (highlightText !== featureText) {
      if (this.prevHighlight instanceof ol__WEBPACK_IMPORTED_MODULE_17__.default) {
        this.toggleHighlight(this.prevHighlight, shapes, 'remove', false);
      }

      if (feature instanceof ol__WEBPACK_IMPORTED_MODULE_17__.default) {
        this.toggleHighlight(feature, shapes, 'add', false);
      }

      this.prevHighlight = feature;
    }
  }

  ngOnDestroy() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

}

VectorMapComponent.ɵfac = function VectorMapComponent_Factory(t) {
  return new (t || VectorMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router));
};

VectorMapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: VectorMapComponent,
  selectors: [["app-vector-map"]],
  decls: 4,
  vars: 4,
  consts: [["fxLayout", "column", "fxLayoutGap", "0.5em", 2, "width", "100%", "height", "100%"], [4, "ngIf"], [2, "width", "100%", "height", "100%", 3, "id"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]],
  template: function VectorMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VectorMapComponent_ng_container_1_Template, 3, 3, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.dataService.urlParams));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.id);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: [".ol-box[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid #00f;\n}\n\n.ol-mouse-position[_ngcontent-%COMP%] {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line[_ngcontent-%COMP%] {\n  background: rgba(0, 60, 136, 0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n\n.ol-scale-line-inner[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n\n.ol-scale-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n\n.ol-scale-step-marker[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 15px;\n  background-color: #000;\n  float: right;\n  z-index: 10;\n}\n\n.ol-scale-step-text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-index: 11;\n  color: #000;\n  text-shadow: -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff;\n}\n\n.ol-scale-text[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000;\n  text-shadow: -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff;\n}\n\n.ol-scale-singlebar[_ngcontent-%COMP%] {\n  position: relative;\n  height: 10px;\n  z-index: 9;\n  border: 1px solid #000;\n}\n\n.ol-unsupported[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.ol-unselectable[_ngcontent-%COMP%], .ol-viewport[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.ol-overlaycontainer[_ngcontent-%COMP%], .ol-overlaycontainer-stopevent[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.ol-overlaycontainer-stopevent[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], .ol-overlaycontainer[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ol-selectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  user-select: text;\n}\n\n.ol-grabbing[_ngcontent-%COMP%] {\n  cursor: grabbing;\n}\n\n.ol-grab[_ngcontent-%COMP%] {\n  cursor: move;\n  cursor: grab;\n}\n\n.ol-control[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n\n.ol-control[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.ol-zoom[_ngcontent-%COMP%] {\n  top: 0.5em;\n  left: 0.5em;\n}\n\n.ol-rotate[_ngcontent-%COMP%] {\n  top: 0.5em;\n  right: 0.5em;\n  transition: opacity 0.25s linear, visibility 0s linear;\n}\n\n.ol-rotate.ol-hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.25s linear, visibility 0s linear 0.25s;\n}\n\n.ol-zoom-extent[_ngcontent-%COMP%] {\n  top: 4.643em;\n  left: 0.5em;\n}\n\n.ol-full-screen[_ngcontent-%COMP%] {\n  right: 0.5em;\n  top: 0.5em;\n}\n\n.ol-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: #fff;\n  font-size: 1.14em;\n  font-weight: 700;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: 0.4em;\n  background-color: rgba(173, 105, 2, 0.7);\n  border: none;\n  border-radius: 2px;\n}\n\n.ol-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n\n.ol-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.ol-zoom-extent[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  line-height: 1.4em;\n}\n\n.ol-compass[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 400;\n  font-size: 1.2em;\n  will-change: transform;\n}\n\n.ol-touch[_ngcontent-%COMP%]   .ol-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.ol-touch[_ngcontent-%COMP%]   .ol-zoom-extent[_ngcontent-%COMP%] {\n  top: 5.5em;\n}\n\n.ol-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .ol-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: #ad6902;\n}\n\n.ol-zoom[_ngcontent-%COMP%]   .ol-zoom-in[_ngcontent-%COMP%] {\n  border-radius: 2px 2px 0 0;\n}\n\n.ol-zoom[_ngcontent-%COMP%]   .ol-zoom-out[_ngcontent-%COMP%] {\n  border-radius: 0 0 2px 2px;\n}\n\n.ol-attribution[_ngcontent-%COMP%] {\n  text-align: right;\n  bottom: 0.5em;\n  right: 0.5em;\n  max-width: calc(100% - 1.3em);\n}\n\n.ol-attribution[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n\n.ol-attribution[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  list-style: none;\n}\n\n.ol-attribution[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):after {\n  content: \" \";\n}\n\n.ol-attribution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n\n.ol-attribution[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .ol-attribution[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.ol-attribution.ol-collapsed[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.ol-attribution[_ngcontent-%COMP%]:not(.ol-collapsed) {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.ol-attribution.ol-uncollapsible[_ngcontent-%COMP%] {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n\n.ol-attribution.ol-uncollapsible[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: -0.2em;\n  max-height: 1.6em;\n}\n\n.ol-attribution.ol-uncollapsible[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.ol-zoomslider[_ngcontent-%COMP%] {\n  top: 4.5em;\n  left: 0.5em;\n  height: 200px;\n}\n\n.ol-zoomslider[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch[_ngcontent-%COMP%]   .ol-zoomslider[_ngcontent-%COMP%] {\n  top: 5.5em;\n}\n\n.ol-overviewmap[_ngcontent-%COMP%] {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n\n.ol-overviewmap.ol-uncollapsible[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n\n.ol-overviewmap[_ngcontent-%COMP%]   .ol-overviewmap-map[_ngcontent-%COMP%], .ol-overviewmap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.ol-overviewmap[_ngcontent-%COMP%]   .ol-overviewmap-map[_ngcontent-%COMP%] {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n\n.ol-overviewmap[_ngcontent-%COMP%]:not(.ol-collapsed)   button[_ngcontent-%COMP%] {\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n\n.ol-overviewmap.ol-collapsed[_ngcontent-%COMP%]   .ol-overviewmap-map[_ngcontent-%COMP%], .ol-overviewmap.ol-uncollapsible[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.ol-overviewmap[_ngcontent-%COMP%]:not(.ol-collapsed) {\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.ol-overviewmap-box[_ngcontent-%COMP%] {\n  border: 2px dotted rgba(0, 60, 136, 0.7);\n}\n\n.ol-overviewmap[_ngcontent-%COMP%]   .ol-overviewmap-box[_ngcontent-%COMP%]:hover {\n  cursor: move;\n}\n/*# sourceMappingURL=ol.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlY3Rvci1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUtGOztBQUhBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2REFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZEQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFTRjs7QUFQQTtFQUNFLGFBQUE7QUFVRjs7QUFSQTs7RUFFRSwyQkFBQTtFQUNBLHlCQUFBO0VBR0EsaUJBQUE7RUFDQSx3Q0FBQTtBQVdGOztBQVRBOztFQUVFLG9CQUFBO0FBWUY7O0FBVkE7O0VBRUUsb0JBQUE7QUFhRjs7QUFYQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtBQWNGOztBQVpBO0VBR0UsZ0JBQUE7QUFlRjs7QUFiQTtFQUNFLFlBQUE7RUFHQSxZQUFBO0FBZ0JGOztBQWRBO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWlCRjs7QUFmQTtFQUNFLDBDQUFBO0FBa0JGOztBQWhCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBbUJGOztBQWpCQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7QUFvQkY7O0FBbEJBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7QUFxQkY7O0FBbkJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUF1QkY7O0FBckJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBd0JGOztBQXRCQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBeUJGOztBQXZCQTtFQUNFLG9CQUFBO0FBMEJGOztBQXhCQTtFQUNFLGtCQUFBO0FBMkJGOztBQXpCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUE0QkY7O0FBMUJBO0VBQ0UsZ0JBQUE7QUE2QkY7O0FBM0JBO0VBQ0UsVUFBQTtBQThCRjs7QUE1QkE7O0VBRUUscUJBQUE7RUFDQSx5QkFBQTtBQStCRjs7QUE3QkE7RUFDRSwwQkFBQTtBQWdDRjs7QUE5QkE7RUFDRSwwQkFBQTtBQWlDRjs7QUEvQkE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFrQ0Y7O0FBaENBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBbUNGOztBQWpDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQW9DRjs7QUFsQ0E7RUFDRSxZQUFBO0FBcUNGOztBQW5DQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBc0NGOztBQXBDQTs7RUFFRSxxQkFBQTtBQXVDRjs7QUFyQ0E7RUFDRSxhQUFBO0FBd0NGOztBQXRDQTtFQUNFLG9DQUFBO0FBeUNGOztBQXZDQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7QUEwQ0Y7O0FBeENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQTJDRjs7QUF6Q0E7RUFDRSxhQUFBO0FBNENGOztBQTFDQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQTZDRjs7QUEzQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUE4Q0Y7O0FBNUNBO0VBQ0UsVUFBQTtBQStDRjs7QUE3Q0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQWdERjs7QUE5Q0E7RUFDRSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHdCQUFBO0FBaURGOztBQS9DQTs7RUFFRSxxQkFBQTtBQWtERjs7QUFoREE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQW1ERjs7QUFqREE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBb0RGOztBQWxEQTs7RUFFRSxhQUFBO0FBcURGOztBQW5EQTtFQUNFLG9DQUFBO0FBc0RGOztBQXBEQTtFQUNFLHdDQUFBO0FBdURGOztBQXJEQTtFQUNFLFlBQUE7QUF3REY7O0FBdERBLGlDQUFBIiwiZmlsZSI6InZlY3Rvci1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2wtYm94IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDBmO1xyXG59XHJcbi5vbC1tb3VzZS1wb3NpdGlvbiB7XHJcbiAgdG9wOiA4cHg7XHJcbiAgcmlnaHQ6IDhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLm9sLXNjYWxlLWxpbmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgNjAsIDEzNiwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm90dG9tOiA4cHg7XHJcbiAgbGVmdDogOHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLm9sLXNjYWxlLWxpbmUtaW5uZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBjb2xvcjogI2VlZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMXB4O1xyXG4gIHdpbGwtY2hhbmdlOiBjb250ZW50cywgd2lkdGg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xyXG59XHJcbi5vbC1zY2FsZS1iYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDhweDtcclxuICBsZWZ0OiA4cHg7XHJcbn1cclxuLm9sLXNjYWxlLXN0ZXAtbWFya2VyIHtcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4ub2wtc2NhbGUtc3RlcC10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB6LWluZGV4OiAxMTtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogLTJweCAwICNmZmYsIDAgMnB4ICNmZmYsIDJweCAwICNmZmYsIDAgLTJweCAjZmZmO1xyXG59XHJcbi5vbC1zY2FsZS10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3R0b206IDI1cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1zaGFkb3c6IC0ycHggMCAjZmZmLCAwIDJweCAjZmZmLCAycHggMCAjZmZmLCAwIC0ycHggI2ZmZjtcclxufVxyXG4ub2wtc2NhbGUtc2luZ2xlYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxufVxyXG4ub2wtdW5zdXBwb3J0ZWQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm9sLXVuc2VsZWN0YWJsZSxcclxuLm9sLXZpZXdwb3J0IHtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5vbC1vdmVybGF5Y29udGFpbmVyLFxyXG4ub2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5vbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCA+ICosXHJcbi5vbC1vdmVybGF5Y29udGFpbmVyID4gKiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuLm9sLXNlbGVjdGFibGUge1xyXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogZGVmYXVsdDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xyXG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xyXG59XHJcbi5vbC1ncmFiYmluZyB7XHJcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xyXG4gIGN1cnNvcjogLW1vei1ncmFiYmluZztcclxuICBjdXJzb3I6IGdyYWJiaW5nO1xyXG59XHJcbi5vbC1ncmFiIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcbiAgY3Vyc29yOiAtbW96LWdyYWI7XHJcbiAgY3Vyc29yOiBncmFiO1xyXG59XHJcbi5vbC1jb250cm9sIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLm9sLWNvbnRyb2w6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxufVxyXG4ub2wtem9vbSB7XHJcbiAgdG9wOiAwLjVlbTtcclxuICBsZWZ0OiAwLjVlbTtcclxufVxyXG4ub2wtcm90YXRlIHtcclxuICB0b3A6IDAuNWVtO1xyXG4gIHJpZ2h0OiAwLjVlbTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGxpbmVhciwgdmlzaWJpbGl0eSAwcyBsaW5lYXI7XHJcbn1cclxuLm9sLXJvdGF0ZS5vbC1oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgbGluZWFyLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cztcclxufVxyXG4ub2wtem9vbS1leHRlbnQge1xyXG4gIHRvcDogNC42NDNlbTtcclxuICBsZWZ0OiAwLjVlbTtcclxufVxyXG4ub2wtZnVsbC1zY3JlZW4ge1xyXG4gIHJpZ2h0OiAwLjVlbTtcclxuICB0b3A6IDAuNWVtO1xyXG59XHJcbi5vbC1jb250cm9sIGJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuMTRlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxLjM3NWVtO1xyXG4gIHdpZHRoOiAxLjM3NWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjRlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMTA1LCAyLCAwLjcpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLm9sLWNvbnRyb2wgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ub2wtY29udHJvbCBidXR0b24gc3BhbiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLm9sLXpvb20tZXh0ZW50IGJ1dHRvbiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG59XHJcbi5vbC1jb21wYXNzIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxufVxyXG4ub2wtdG91Y2ggLm9sLWNvbnRyb2wgYnV0dG9uIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbi5vbC10b3VjaCAub2wtem9vbS1leHRlbnQge1xyXG4gIHRvcDogNS41ZW07XHJcbn1cclxuLm9sLWNvbnRyb2wgYnV0dG9uOmZvY3VzLFxyXG4ub2wtY29udHJvbCBidXR0b246aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMTA1LCAyLCAxKTtcclxufVxyXG4ub2wtem9vbSAub2wtem9vbS1pbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XHJcbn1cclxuLm9sLXpvb20gLm9sLXpvb20tb3V0IHtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMnB4IDJweDtcclxufVxyXG4ub2wtYXR0cmlidXRpb24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGJvdHRvbTogMC41ZW07XHJcbiAgcmlnaHQ6IDAuNWVtO1xyXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMS4zZW0pO1xyXG59XHJcbi5vbC1hdHRyaWJ1dGlvbiB1bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMC41ZW07XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZjtcclxufVxyXG4ub2wtYXR0cmlidXRpb24gbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5vbC1hdHRyaWJ1dGlvbiBsaTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxufVxyXG4ub2wtYXR0cmlidXRpb24gaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAyZW07XHJcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLm9sLWF0dHJpYnV0aW9uIGJ1dHRvbixcclxuLm9sLWF0dHJpYnV0aW9uIHVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm9sLWF0dHJpYnV0aW9uLm9sLWNvbGxhcHNlZCB1bCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ub2wtYXR0cmlidXRpb246bm90KC5vbC1jb2xsYXBzZWQpIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn1cclxuLm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUge1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwO1xyXG59XHJcbi5vbC1hdHRyaWJ1dGlvbi5vbC11bmNvbGxhcHNpYmxlIGltZyB7XHJcbiAgbWFyZ2luLXRvcDogLTAuMmVtO1xyXG4gIG1heC1oZWlnaHQ6IDEuNmVtO1xyXG59XHJcbi5vbC1hdHRyaWJ1dGlvbi5vbC11bmNvbGxhcHNpYmxlIGJ1dHRvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ub2wtem9vbXNsaWRlciB7XHJcbiAgdG9wOiA0LjVlbTtcclxuICBsZWZ0OiAwLjVlbTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5vbC16b29tc2xpZGVyIGJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTBweDtcclxufVxyXG4ub2wtdG91Y2ggLm9sLXpvb21zbGlkZXIge1xyXG4gIHRvcDogNS41ZW07XHJcbn1cclxuLm9sLW92ZXJ2aWV3bWFwIHtcclxuICBsZWZ0OiAwLjVlbTtcclxuICBib3R0b206IDAuNWVtO1xyXG59XHJcbi5vbC1vdmVydmlld21hcC5vbC11bmNvbGxhcHNpYmxlIHtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiAwIDRweCAwIDA7XHJcbn1cclxuLm9sLW92ZXJ2aWV3bWFwIC5vbC1vdmVydmlld21hcC1tYXAsXHJcbi5vbC1vdmVydmlld21hcCBidXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ub2wtb3ZlcnZpZXdtYXAgLm9sLW92ZXJ2aWV3bWFwLW1hcCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiOThiYztcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4ub2wtb3ZlcnZpZXdtYXA6bm90KC5vbC1jb2xsYXBzZWQpIGJ1dHRvbiB7XHJcbiAgYm90dG9tOiAxcHg7XHJcbiAgbGVmdDogMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ub2wtb3ZlcnZpZXdtYXAub2wtY29sbGFwc2VkIC5vbC1vdmVydmlld21hcC1tYXAsXHJcbi5vbC1vdmVydmlld21hcC5vbC11bmNvbGxhcHNpYmxlIGJ1dHRvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ub2wtb3ZlcnZpZXdtYXA6bm90KC5vbC1jb2xsYXBzZWQpIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn1cclxuLm9sLW92ZXJ2aWV3bWFwLWJveCB7XHJcbiAgYm9yZGVyOiAycHggZG90dGVkIHJnYmEoMCwgNjAsIDEzNiwgMC43KTtcclxufVxyXG4ub2wtb3ZlcnZpZXdtYXAgLm9sLW92ZXJ2aWV3bWFwLWJveDpob3ZlciB7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG59XHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW9sLmNzcy5tYXAgKi9cclxuIl19 */"]
});

/***/ }),

/***/ 58181:
/*!************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapModule": () => (/* binding */ VectorMapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 78662);
/* harmony import */ var _vector_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector-map.component */ 10283);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);






class VectorMapModule {
}
VectorMapModule.ɵfac = function VectorMapModule_Factory(t) { return new (t || VectorMapModule)(); };
VectorMapModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VectorMapModule });
VectorMapModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule.withConfig({ addFlexToParent: false }), _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VectorMapModule, { declarations: [_vector_map_component__WEBPACK_IMPORTED_MODULE_0__.VectorMapComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule], exports: [_vector_map_component__WEBPACK_IMPORTED_MODULE_0__.VectorMapComponent] }); })();


/***/ }),

/***/ 93756:
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApollo": () => (/* binding */ createApollo),
/* harmony export */   "GraphQLModule": () => (/* binding */ GraphQLModule)
/* harmony export */ });
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/core */ 46954);
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/core */ 65088);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client/link/context */ 1797);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ 79424);
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular/http */ 70696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





function createApollo(httpLink) {
    const auth = (0,_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_0__.setContext)(() => {
        const token = localStorage.getItem('token');
        return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    });
    return {
        link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__.ApolloLink.from([
            auth,
            httpLink.create({ uri: `${location.protocol}//${location.hostname}/graphql/v1/graphql` }),
        ]),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache(),
    };
}
class GraphQLModule {
}
GraphQLModule.ɵfac = function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); };
GraphQLModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_4__.APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__.HttpLink],
        },
    ] });


/***/ }),

/***/ 30798:
/*!****************************************!*\
  !*** ./src/app/services/chartTypes.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "charts": () => (/* binding */ charts),
/* harmony export */   "chartTypes": () => (/* binding */ chartTypes),
/* harmony export */   "hours": () => (/* binding */ hours),
/* harmony export */   "metrics": () => (/* binding */ metrics),
/* harmony export */   "metricIds": () => (/* binding */ metricIds),
/* harmony export */   "aggFuncs": () => (/* binding */ aggFuncs),
/* harmony export */   "aggFuncIds": () => (/* binding */ aggFuncIds)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 7391);

const charts = [
    { id: 'map', name: 'Mapa', comparable: true },
    { id: 'bar', name: 'Evolutivo', comparable: true },
    { id: 'line', name: 'Comparativo', comparable: false },
    { id: 'line-with-map', name: 'Predictivo', comparable: false },
];
const chartTypes = charts.map((c) => c.id);
const hours = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.range)(24).map((value) => ({ value, view: `${value}:00 a ${value}:59` }));
const metrics = [
    {
        id: 'speed',
        name: 'Velocidad',
        colors: [
            { min: 0, max: 10, color: 'red' },
            { min: 10, max: 40, color: 'orange' },
            { min: 40, max: Infinity, color: 'yellow' },
        ],
        unit: 'Km/h',
    },
    {
        id: 'delay',
        name: 'Demora',
        colors: [
            { min: 0, max: 20, color: 'yellow' },
            { min: 20, max: 60, color: 'orange' },
            { min: 60, max: 110, color: 'red' },
            { min: 110, max: Infinity, color: 'darkred' },
        ],
        unit: 'Minutos',
    },
    {
        id: 'length',
        name: 'Largo de Cola',
        colors: [
            { min: 0, max: 100, color: 'yellow' },
            { min: 100, max: 400, color: 'orange' },
            { min: 400, max: 600, color: 'red' },
            { min: 600, max: Infinity, color: 'darkred' },
        ],
        unit: 'Metros',
    },
];
const metricIds = metrics.map(({ id }) => id);
const aggFuncs = [
    { id: 'mean', name: 'Media' },
    { id: 'max', name: 'Máximo' },
    { id: 'last', name: 'Último' },
];
const aggFuncIds = aggFuncs.map(({ id }) => id);


/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTurfFeature": () => (/* binding */ getTurfFeature),
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! class-validator */ 25310);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! class-validator */ 5003);
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/turf */ 13051);
/* harmony import */ var ol_format__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ol/format */ 74154);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/geom */ 22798);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/geom */ 3096);
/* harmony import */ var ol_geom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ol/geom */ 37202);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 13413);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 12702);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 34361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 92597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 94236);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var _chartTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartTypes */ 30798);
/* harmony import */ var _indexedDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexedDb */ 5541);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ 7391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ 73071);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql */ 34585);














const getTurfFeature = (polygon) => {
    return polygon instanceof ol_geom__WEBPACK_IMPORTED_MODULE_6__.default
        ? (0,_turf_turf__WEBPACK_IMPORTED_MODULE_0__.polygon)(polygon.getCoordinates())
        : (0,_turf_turf__WEBPACK_IMPORTED_MODULE_0__.multiPolygon)(polygon.getCoordinates());
};
class QueryParams {
}
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,class_validator__WEBPACK_IMPORTED_MODULE_8__.IsString)()
], QueryParams.prototype, "date_from", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,class_validator__WEBPACK_IMPORTED_MODULE_8__.IsString)()
], QueryParams.prototype, "date_to", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,class_validator__WEBPACK_IMPORTED_MODULE_8__.IsString)()
], QueryParams.prototype, "hours", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,class_validator__WEBPACK_IMPORTED_MODULE_8__.IsString)()
], QueryParams.prototype, "metric", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,class_validator__WEBPACK_IMPORTED_MODULE_8__.IsString)()
], QueryParams.prototype, "aggFunc", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,class_validator__WEBPACK_IMPORTED_MODULE_8__.IsString)()
], QueryParams.prototype, "lines", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,class_validator__WEBPACK_IMPORTED_MODULE_8__.IsString)()
], QueryParams.prototype, "working_days", void 0);
class DataService {
    constructor(userService, activatedRoute, jamsGQL, evolutivoGQL, comparativoGQL, summaryGQL, predictivoGQL, linesGQL, streetsGQL, adminLevelsGQL) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.jamsGQL = jamsGQL;
        this.evolutivoGQL = evolutivoGQL;
        this.comparativoGQL = comparativoGQL;
        this.summaryGQL = summaryGQL;
        this.predictivoGQL = predictivoGQL;
        this.linesGQL = linesGQL;
        this.streetsGQL = streetsGQL;
        this.adminLevelsGQL = adminLevelsGQL;
        this.dataState = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject('Verificando datos de calles');
        this.indexedDbLines = new rxjs__WEBPACK_IMPORTED_MODULE_10__.ReplaySubject(1);
        this.indexedDbStreets = new rxjs__WEBPACK_IMPORTED_MODULE_10__.ReplaySubject(1);
        // private indexedDbNeighborhoods = new Subject<BaseAdminLevel[]>();
        this.indexedDbVersionItem = 'congestiometro-version';
        this.indexedDbVersion = 10;
        this.newVersion$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.ReplaySubject(1);
        this.lines = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([
            this.userService.currentUser,
            this.newVersion$,
            this.indexedDbLines.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(([user]) => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([_, newVersion, localLines]) => {
            this.dataState.next('Verificando el estado de los datos internos de segmentos');
            if (!newVersion && localLines.length > 0) {
                this.dataState.next('Datos de segmentos Cargados exitosamente...');
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(localLines);
            }
            else {
                console.log('Bajando datos de segmentos del servidor...');
                this.dataState.next('Bajando datos de segmentos del servidor...');
                return this.linesGQL.fetch().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(({ data }) => data.jam_lines.map(({ line_id, street_id, line }) => {
                    return { id: line_id, streetId: street_id, coordinates: line.coordinates };
                })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)((lines) => {
                    console.log('Guardando datos de segmentos localmente...');
                    this.dataState.next('Guardando datos de segmentos localmente...');
                    return _indexedDb__WEBPACK_IMPORTED_MODULE_2__.indexedDb.bulkPutLines(lines).then(() => lines);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => {
                    console.log('Datos de segmentos guardados...');
                    this.dataState.next('Datos de segmentos guardados...');
                }));
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((data) => data.reduce((prev, line) => {
            prev[line.id] = Object.assign(Object.assign({}, line), { turfLine: (0,_turf_turf__WEBPACK_IMPORTED_MODULE_0__.lineString)(line.coordinates) });
            return prev;
        }, {})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
        this.streets = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([
            this.userService.currentUser,
            this.newVersion$,
            this.indexedDbStreets.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(([user]) => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([_, newVersion, localStreets]) => {
            this.dataState.next('Verificando el estado de los datos internos de calles');
            if (!newVersion && localStreets.length > 0) {
                this.dataState.next('Datos de calles Cargados exitosamente...');
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(localStreets);
            }
            else {
                console.log('Bajando datos de calles del servidor...');
                this.dataState.next('Bajando datos de calles del servidor...');
                return this.streetsGQL.fetch().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(({ data }) => data.streets
                    .map(({ street_id, street_name, street_sufix, street_type, line }) => ({
                    id: street_id,
                    name: `${street_name} ${street_sufix}`.trim(),
                    type: street_type,
                    shape: line,
                }))
                    .sort((a, b) => (a.name > b.name ? 1 : -1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)((streets) => {
                    console.log('Guardando datos de calles localmente...');
                    this.dataState.next('Guardando datos de calles localmente...');
                    return _indexedDb__WEBPACK_IMPORTED_MODULE_2__.indexedDb.bulkPutStreets(streets).then(() => streets);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => {
                    console.log('Datos de calles guardados...');
                    this.dataState.next('Datos de calles guardados. Procesando segmentos...');
                }));
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((data) => data.reduce((prev, street) => {
            prev[street.id] = Object.assign(Object.assign({}, street), { turfLine: (0,_turf_turf__WEBPACK_IMPORTED_MODULE_0__.multiLineString)(street.shape.type === 'MultiLineString' ? street.shape.coordinates : [street.shape.coordinates]) });
            return prev;
        }, {})), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
        this.neighborhoods = this.adminLevelsGQL.fetch().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(({ data }) => data.admin_levels.map((adminLevel) => ({
            greaterAdminLevelId: adminLevel.greater_admin_level_id,
            greaterAdminLevelName: adminLevel.greater_admin_level_name,
            lowerAdminLevelId: adminLevel.lower_admin_level_id,
            lowerAdminLevelName: adminLevel.lower_admin_level_name,
            linesIds: JSON.parse(adminLevel.lines_ids),
            streetsIds: JSON.parse(adminLevel.streets_ids),
            coordinates: adminLevel.shape === 'Polygon' ? [adminLevel.shape.coordinates] : adminLevel.shape.coordinates,
            lastUpdate: adminLevel.last_update,
            turfPolygon: (adminLevel.shape === 'Polygon'
                ? (0,_turf_turf__WEBPACK_IMPORTED_MODULE_0__.polygon)(adminLevel.shape.coordinates)
                : (0,_turf_turf__WEBPACK_IMPORTED_MODULE_0__.multiPolygon)(adminLevel.shape.coordinates)),
            olPolygon: adminLevel.shape === 'Polygon'
                ? new ol_geom__WEBPACK_IMPORTED_MODULE_6__.default(adminLevel.shape.coordinates)
                : new ol_geom__WEBPACK_IMPORTED_MODULE_19__.default(adminLevel.shape.coordinates),
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
        this.ready = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.timer)(0, 60 * 60 * 1000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.lines, this.streets, this.neighborhoods])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => window.localStorage.setItem(this.indexedDbVersionItem, JSON.stringify(this.indexedDbVersion))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(() => {
            this.dataState.next('Datos cargados, iniciando aplicación...');
            return true;
        }));
        this.urlParams = this.activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((queryParams) => {
            const leftSyncParams = JSON.parse(queryParams['left-sync'] || '{}');
            const leftState = JSON.parse(queryParams['left'] || '{}');
            const rightSyncParams = JSON.parse(queryParams['right-sync'] || '{}');
            const rightState = JSON.parse(queryParams['right'] || '{}');
            return {
                left: {
                    syncParams: leftSyncParams,
                    otherState: rightState,
                    state: Object.assign(Object.assign({}, leftState), Object.fromEntries(Object.entries(rightState).filter(([key]) => leftSyncParams[key]))),
                    greaterDate: queryParams.greaterDate || new Date().getFullYear(),
                },
                right: {
                    syncParams: rightSyncParams,
                    otherState: leftState,
                    state: Object.assign(Object.assign({}, rightState), Object.fromEntries(Object.entries(leftState).filter(([key]) => rightSyncParams[key]))),
                },
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)((a, b) => JSON.stringify(a) === JSON.stringify(b)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
        this.queryParams = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.urlParams, this.lines, this.streets, this.neighborhoods]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([x, lines, streets, neighborhoods]) => {
            var _a, _b;
            const left = Object.assign(Object.assign({}, this.getQueryParams(x.left.state, lines, neighborhoods)), { streets: ((_a = x.left.state.streets) === null || _a === void 0 ? void 0 : _a.map((streetId) => streets[streetId])) || [], greaterDate: x.left.greaterDate });
            if ((0,class_validator__WEBPACK_IMPORTED_MODULE_22__.validateSync)(left.params).length > 0)
                return null;
            const right = Object.assign(Object.assign({}, this.getQueryParams(x.right.state, lines, neighborhoods)), { streets: ((_b = x.left.state.streets) === null || _b === void 0 ? void 0 : _b.map((streetId) => streets[streetId])) || [] });
            return { left, right: (0,class_validator__WEBPACK_IMPORTED_MODULE_22__.validateSync)(right.params).length === 0 ? right : left };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
        this.leftData = this.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(_utils__WEBPACK_IMPORTED_MODULE_3__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('left'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((x) => (Object.assign({ map: this.getMapData(x.params), line: this.getComparativo(x.params, x.streets, x.lines, x.greaterDate) }, this.getEvolutivo(x.params)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
        this.rightData = this.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(_utils__WEBPACK_IMPORTED_MODULE_3__.isValid), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('right'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((x) => ({ map: this.getMapData(x.params), bar: this.getEvolutivo(x.params).bar })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
        const localVersion = window.localStorage.getItem(this.indexedDbVersionItem);
        const newVersion = !localVersion || Number(localVersion) !== this.indexedDbVersion;
        if (newVersion) {
            userService.logout();
            (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.from)(_indexedDb__WEBPACK_IMPORTED_MODULE_2__.indexedDb.clearLines()).subscribe(() => this.indexedDbLines.next([]));
            (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.from)(_indexedDb__WEBPACK_IMPORTED_MODULE_2__.indexedDb.clearStreets()).subscribe(() => this.indexedDbStreets.next([]));
        }
        else {
            _indexedDb__WEBPACK_IMPORTED_MODULE_2__.indexedDb.getLines().subscribe((lines) => this.indexedDbLines.next(lines));
            _indexedDb__WEBPACK_IMPORTED_MODULE_2__.indexedDb.getStreets().subscribe((streets) => this.indexedDbStreets.next(streets));
        }
        this.newVersion$.next(newVersion);
    }
    getQueryParams(filters, allLines, allNeighborhoods) {
        const { dateStart, dateEnd, hours, metric, aggFunc, workingDays, neighborhoods, mapPolygon, streets } = filters;
        let lines = [];
        if ((streets === null || streets === void 0 ? void 0 : streets.length) > 0) {
            if ((neighborhoods === null || neighborhoods === void 0 ? void 0 : neighborhoods.length) > 0 || (mapPolygon === null || mapPolygon === void 0 ? void 0 : mapPolygon.length) > 0) {
                if ((neighborhoods === null || neighborhoods === void 0 ? void 0 : neighborhoods.length) > 0) {
                    const allSelectedIds = allNeighborhoods
                        .filter(({ lowerAdminLevelId }) => neighborhoods.some((id) => id === lowerAdminLevelId))
                        .map(({ linesIds }) => linesIds)
                        .flat();
                    lines = Array.from(new Set(allSelectedIds).values());
                }
                if ((mapPolygon === null || mapPolygon === void 0 ? void 0 : mapPolygon.length) > 0) {
                    const polygon = getTurfFeature(new ol_geom__WEBPACK_IMPORTED_MODULE_6__.default([mapPolygon]));
                    lines = (lines.length > 0 ? lines.map((lineId) => allLines[lineId]) : Object.values(allLines))
                        .filter((l) => (0,_turf_turf__WEBPACK_IMPORTED_MODULE_0__.booleanContains)(polygon, (0,_turf_turf__WEBPACK_IMPORTED_MODULE_0__.lineString)(l.coordinates)))
                        .map((l) => l.id);
                }
                lines = lines.filter((lineId) => streets.includes(allLines[lineId].streetId));
            }
            else {
                lines = Object.values(allLines)
                    .filter((line) => streets.includes(line.streetId))
                    .map(({ id }) => id);
            }
        }
        return {
            params: Object.assign(new QueryParams(), {
                date_from: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPartialDate)(new Date(dateStart)) + ' 00:00:00',
                date_to: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPartialDate)(dateEnd ? new Date(dateEnd) : new Date()) + ' 23:59:59',
                hours: hours ? `{${hours}}` : '{}',
                lines: lines ? `{${lines}}` : '{}',
                metric: metric,
                aggFunc: aggFunc,
                working_days: workingDays,
            }),
            lines: lines.map((lineId) => allLines[lineId]),
        };
    }
    getMapData(queryParams) {
        const wkt = new ol_format__WEBPACK_IMPORTED_MODULE_25__.default();
        const { metric } = queryParams, params = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(queryParams, ["metric"]);
        const lines = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.lines, this.jamsGQL.fetch(params)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([lines, v]) => {
            const jams = v.data.get_jams_lines.map((line) => (Object.assign(Object.assign({}, line), { line: lines[line.line_id].coordinates })));
            return {
                lines: jams.map((jam) => ({ color: jam.level || 1, line: jam.line })),
                exportableData: jams.map((jam) => (Object.assign(Object.assign({}, jam), { line: `"${wkt.writeGeometry(new ol_geom__WEBPACK_IMPORTED_MODULE_26__.default([jam.line]))}"` }))),
            };
        }));
        return {
            lines: lines.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('lines'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.startWith)(null)),
            summary: this.summaryGQL.fetch(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((res) => res.data.get_summary), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((rows) => Object.fromEntries(rows.map(({ index, val }) => [index, val]))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((rows) => rows)),
            exportableData: lines.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('exportableData')),
        };
    }
    getComparativo(queryParams, streets, allLines, greaterDate) {
        const firstYear = greaterDate - 1;
        const { metric } = queryParams, params = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(queryParams, ["metric"]);
        params['date_from'] = `${firstYear}/1/1 00:00:00`;
        params['date_to'] = `${greaterDate}/12/31 23:59:59`;
        return streets
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map(({ id, name }) => {
            const lines = `{${allLines.filter(({ streetId }) => id === streetId).map(({ id }) => id)}}`;
            const res = this.comparativoGQL.fetch(Object.assign(Object.assign({}, params), { metric, lines })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((v) => v.data.get_comparativo), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((data) => {
                const extra = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.range)(24).map((m) => ({
                    year: firstYear + Math.floor(m / 12),
                    month: (m % 12) + 1,
                    val: 0,
                }));
                const filled = [...data.map((v) => (Object.assign(Object.assign({}, v), { val: Math.max(v.val, 0) }))), ...extra]
                    .filter((val, idx, arr) => arr.findIndex((v) => val.year === v.year && val.month === v.month) === idx)
                    .sort((a, b) => (a.year === b.year ? a.month - b.month : a.year - b.year));
                return {
                    data: {
                        dataset: [
                            {
                                label: String(firstYear),
                                data: filled.filter((r) => r.year === firstYear).map((v) => v.val),
                            },
                            {
                                label: String(firstYear + 1),
                                data: filled.filter((r) => r.year === firstYear + 1).map((v) => v.val),
                            },
                        ],
                        labels: filled.filter((r) => r.year === firstYear).map((v) => ('0' + v.month).slice(-2)),
                        unit: _chartTypes__WEBPACK_IMPORTED_MODULE_1__.metrics.filter(({ id }) => id === metric)[0].unit,
                    },
                    exportableData: filled.map((f) => (Object.assign({ street: name }, f))),
                };
            }));
            return {
                name,
                data: res.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('data')),
                exportableData: res.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('exportableData')),
            };
        });
    }
    getEvolutivo(queryParams) {
        const sameDay = queryParams.date_from.slice(0, 10) === queryParams.date_to.slice(0, 10);
        const realTime = sameDay && new Date(queryParams.date_from).toDateString() === new Date().toDateString();
        const filling = sameDay
            ? (0,_utils__WEBPACK_IMPORTED_MODULE_3__.range)(24).map((v) => ('0' + v).slice(-2))
            : (0,_utils__WEBPACK_IMPORTED_MODULE_3__.daysRange)(queryParams.date_from, queryParams.date_to).map((d) => (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getPartialDate)(d));
        const { metric } = queryParams, params = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__rest)(queryParams, ["metric"]);
        const obs = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([
            this.evolutivoGQL.fetch(Object.assign(Object.assign({}, params), { metric })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((v) => v.data.get_evolutivo)),
            this.predictivoGQL.fetch(Object.assign(Object.assign({}, params), { metric })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((v) => v.data.get_predictivo)),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((datas) => datas.map((data) => data.map((v) => ({ val: Math.max(v.val, 0), label: v.index })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)((datas) => datas.map((data) => {
            const fill = filling
                .filter((label) => !data.some((v) => (sameDay ? Number(v.label) === Number(label) : v.label === label)))
                .map((hour) => ({ label: hour, val: 0 }));
            return [...data, ...fill]
                .sort((a, b) => (sameDay ? Number(a.label) - Number(b.label) : a.label > b.label ? 1 : -1))
                .map((v) => (sameDay ? Object.assign(Object.assign({}, v), { label: ('0' + v.label).slice(-2) }) : v));
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.map)(([data, predictiveData]) => {
            const commonDataset = {
                labels: data.map((a) => a.label),
                unit: _chartTypes__WEBPACK_IMPORTED_MODULE_1__.metrics.filter(({ id }) => id === metric)[0].unit,
            };
            const exportableData = commonDataset.labels.map((label) => {
                var _a, _b;
                const real = (_a = data.find((d) => d.label === label)) === null || _a === void 0 ? void 0 : _a.val;
                const predicho = (_b = predictiveData.find((d) => d.label === label)) === null || _b === void 0 ? void 0 : _b.val;
                return { label, real, predicho };
            });
            return {
                evolutivo: {
                    exportableData: data,
                    data: Object.assign({ dataset: [{ data: data.map((v) => v.val) }] }, commonDataset),
                    noEvents: data.every((v) => v.val === 0),
                },
                predictivo: {
                    exportableData,
                    data: Object.assign({ dataset: [
                            {
                                data: data
                                    .filter(({ label }) => !realTime || (realTime && Number(label) <= new Date().getHours()))
                                    .map((v) => v.val),
                                label: 'Real',
                            },
                            {
                                data: predictiveData
                                    .filter(({ label }) => !realTime || (realTime && Number(label) <= new Date().getHours() + 1))
                                    .map(({ val }) => val),
                                label: 'Predicho',
                            },
                        ] }, commonDataset),
                    noEvents: data.every((v) => v.val === 0) && predictiveData.every((v) => v.val === 0),
                },
            };
        }));
        const bar = obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('evolutivo'));
        const line_with_map = obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('predictivo'));
        return {
            bar: {
                data: bar.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('data')),
                exportableData: bar.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('exportableData')),
                noEvents: bar.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('noEvents')),
            },
            'line-with-map': {
                data: line_with_map.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('data')),
                exportableData: line_with_map.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('exportableData')),
                noEvents: line_with_map.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.pluck)('noEvents')),
            },
        };
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_29__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_5__.JamsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_5__.EvolutivoGQL), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_5__.ComparativoGQL), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_5__.SummaryGQL), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_5__.PredictivoGQL), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_5__.LinesGQL), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_5__.StreetsGQL), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_5__.Admin_LevelsGQL)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 28773:
/*!*************************************************!*\
  !*** ./src/app/services/display-log.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayLogService": () => (/* binding */ DisplayLogService),
/* harmony export */   "DisplayLogComponent": () => (/* binding */ DisplayLogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 52529);








function DisplayLogComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayLogComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.dismissWithAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.data.action == null ? null : ctx_r0.data.action.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.action == null ? null : ctx_r0.data.action.text, " ");
} }
function DisplayLogComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayLogComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closeAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DisplayLogService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.seconds = 5;
    }
    openLog(color, data) {
        return this.snackBar.openFromComponent(DisplayLogComponent, {
            data,
            duration: this.seconds * 1000,
            panelClass: ['mat-toolbar', 'mat-' + color],
        });
    }
    openLogError(text, action) {
        return this.openLog('warn', { text, action });
    }
    openLogWarning(text) {
        return this.openLog('accent', { text });
    }
    openLogSuccess(text) {
        return this.openLog('primary', { text });
    }
}
DisplayLogService.ɵfac = function DisplayLogService_Factory(t) { return new (t || DisplayLogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
DisplayLogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DisplayLogService, factory: DisplayLogService.ɵfac, providedIn: 'root' });
class DisplayLogComponent {
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    closeAlert() {
        this.snackBarRef.dismiss();
    }
    dismissWithAction() {
        this.snackBarRef.dismissWithAction();
    }
}
DisplayLogComponent.ɵfac = function DisplayLogComponent_Factory(t) { return new (t || DisplayLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA)); };
DisplayLogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayLogComponent, selectors: [["mauna-display-log"]], decls: 5, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["fxFlex", "auto", 1, "mat-body-1"], ["mat-stroked-button", "", "style", "margin-left: 1em;", 3, "routerLink", "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 2, "margin-left", "1em", 3, "routerLink", "click"], ["mat-icon-button", "", 3, "click"]], template: function DisplayLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DisplayLogComponent_button_3_Template, 2, 2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DisplayLogComponent_button_4_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.action);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 34585:
/*!*************************************!*\
  !*** ./src/app/services/graphql.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Admin_Levels_Select_Column": () => (/* binding */ Admin_Levels_Select_Column),
/* harmony export */   "Comparativo_Type_Select_Column": () => (/* binding */ Comparativo_Type_Select_Column),
/* harmony export */   "Evolutivo_Type_Select_Column": () => (/* binding */ Evolutivo_Type_Select_Column),
/* harmony export */   "Histogram_Type_Select_Column": () => (/* binding */ Histogram_Type_Select_Column),
/* harmony export */   "Jam_Lines_Constraint": () => (/* binding */ Jam_Lines_Constraint),
/* harmony export */   "Jam_Lines_Select_Column": () => (/* binding */ Jam_Lines_Select_Column),
/* harmony export */   "Jam_Lines_Update_Column": () => (/* binding */ Jam_Lines_Update_Column),
/* harmony export */   "Jams_Agg_Line_Select_Column": () => (/* binding */ Jams_Agg_Line_Select_Column),
/* harmony export */   "Jams_Constraint": () => (/* binding */ Jams_Constraint),
/* harmony export */   "Jams_Select_Column": () => (/* binding */ Jams_Select_Column),
/* harmony export */   "Jams_Update_Column": () => (/* binding */ Jams_Update_Column),
/* harmony export */   "Order_By": () => (/* binding */ Order_By),
/* harmony export */   "Simple_Line_Type_Select_Column": () => (/* binding */ Simple_Line_Type_Select_Column),
/* harmony export */   "Streets_Constraint": () => (/* binding */ Streets_Constraint),
/* harmony export */   "Streets_Select_Column": () => (/* binding */ Streets_Select_Column),
/* harmony export */   "Streets_Update_Column": () => (/* binding */ Streets_Update_Column),
/* harmony export */   "LinesDocument": () => (/* binding */ LinesDocument),
/* harmony export */   "LinesGQL": () => (/* binding */ LinesGQL),
/* harmony export */   "StreetsDocument": () => (/* binding */ StreetsDocument),
/* harmony export */   "StreetsGQL": () => (/* binding */ StreetsGQL),
/* harmony export */   "Admin_LevelsDocument": () => (/* binding */ Admin_LevelsDocument),
/* harmony export */   "Admin_LevelsGQL": () => (/* binding */ Admin_LevelsGQL),
/* harmony export */   "JamsDocument": () => (/* binding */ JamsDocument),
/* harmony export */   "JamsGQL": () => (/* binding */ JamsGQL),
/* harmony export */   "EvolutivoDocument": () => (/* binding */ EvolutivoDocument),
/* harmony export */   "EvolutivoGQL": () => (/* binding */ EvolutivoGQL),
/* harmony export */   "ComparativoDocument": () => (/* binding */ ComparativoDocument),
/* harmony export */   "ComparativoGQL": () => (/* binding */ ComparativoGQL),
/* harmony export */   "SummaryDocument": () => (/* binding */ SummaryDocument),
/* harmony export */   "SummaryGQL": () => (/* binding */ SummaryGQL),
/* harmony export */   "PredictivoDocument": () => (/* binding */ PredictivoDocument),
/* harmony export */   "PredictivoGQL": () => (/* binding */ PredictivoGQL)
/* harmony export */ });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ 21187);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ 79424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




/** select columns of table "admin_levels" */
var Admin_Levels_Select_Column;
(function (Admin_Levels_Select_Column) {
    /** column name */
    Admin_Levels_Select_Column["GreaterAdminLevelId"] = "greater_admin_level_id";
    /** column name */
    Admin_Levels_Select_Column["GreaterAdminLevelName"] = "greater_admin_level_name";
    /** column name */
    Admin_Levels_Select_Column["LastUpdate"] = "last_update";
    /** column name */
    Admin_Levels_Select_Column["LinesIds"] = "lines_ids";
    /** column name */
    Admin_Levels_Select_Column["LowerAdminLevelId"] = "lower_admin_level_id";
    /** column name */
    Admin_Levels_Select_Column["LowerAdminLevelName"] = "lower_admin_level_name";
    /** column name */
    Admin_Levels_Select_Column["Shape"] = "shape";
    /** column name */
    Admin_Levels_Select_Column["StreetsIds"] = "streets_ids";
})(Admin_Levels_Select_Column || (Admin_Levels_Select_Column = {}));
/** select columns of table "comparativo_type" */
var Comparativo_Type_Select_Column;
(function (Comparativo_Type_Select_Column) {
    /** column name */
    Comparativo_Type_Select_Column["Month"] = "month";
    /** column name */
    Comparativo_Type_Select_Column["Val"] = "val";
    /** column name */
    Comparativo_Type_Select_Column["Year"] = "year";
})(Comparativo_Type_Select_Column || (Comparativo_Type_Select_Column = {}));
/** select columns of table "evolutivo_type" */
var Evolutivo_Type_Select_Column;
(function (Evolutivo_Type_Select_Column) {
    /** column name */
    Evolutivo_Type_Select_Column["Index"] = "index";
    /** column name */
    Evolutivo_Type_Select_Column["Val"] = "val";
})(Evolutivo_Type_Select_Column || (Evolutivo_Type_Select_Column = {}));
/** select columns of table "histogram_type" */
var Histogram_Type_Select_Column;
(function (Histogram_Type_Select_Column) {
    /** column name */
    Histogram_Type_Select_Column["Duration"] = "duration";
    /** column name */
    Histogram_Type_Select_Column["Index"] = "index";
    /** column name */
    Histogram_Type_Select_Column["Keep"] = "keep";
    /** column name */
    Histogram_Type_Select_Column["Val"] = "val";
})(Histogram_Type_Select_Column || (Histogram_Type_Select_Column = {}));
/** unique or primary key constraints on table "jam_lines" */
var Jam_Lines_Constraint;
(function (Jam_Lines_Constraint) {
    /** unique or primary key constraint */
    Jam_Lines_Constraint["JamLinesLineKey"] = "jam_lines_line_key";
    /** unique or primary key constraint */
    Jam_Lines_Constraint["JamLinesPkey"] = "jam_lines_pkey";
})(Jam_Lines_Constraint || (Jam_Lines_Constraint = {}));
/** select columns of table "jam_lines" */
var Jam_Lines_Select_Column;
(function (Jam_Lines_Select_Column) {
    /** column name */
    Jam_Lines_Select_Column["LastUpdate"] = "last_update";
    /** column name */
    Jam_Lines_Select_Column["Line"] = "line";
    /** column name */
    Jam_Lines_Select_Column["LineId"] = "line_id";
    /** column name */
    Jam_Lines_Select_Column["StreetId"] = "street_id";
})(Jam_Lines_Select_Column || (Jam_Lines_Select_Column = {}));
/** update columns of table "jam_lines" */
var Jam_Lines_Update_Column;
(function (Jam_Lines_Update_Column) {
    /** column name */
    Jam_Lines_Update_Column["LastUpdate"] = "last_update";
    /** column name */
    Jam_Lines_Update_Column["Line"] = "line";
    /** column name */
    Jam_Lines_Update_Column["LineId"] = "line_id";
    /** column name */
    Jam_Lines_Update_Column["StreetId"] = "street_id";
})(Jam_Lines_Update_Column || (Jam_Lines_Update_Column = {}));
/** select columns of table "jams_agg_line" */
var Jams_Agg_Line_Select_Column;
(function (Jams_Agg_Line_Select_Column) {
    /** column name */
    Jams_Agg_Line_Select_Column["Level"] = "level";
    /** column name */
    Jams_Agg_Line_Select_Column["LineId"] = "line_id";
})(Jams_Agg_Line_Select_Column || (Jams_Agg_Line_Select_Column = {}));
/** unique or primary key constraints on table "jams" */
var Jams_Constraint;
(function (Jams_Constraint) {
    /** unique or primary key constraint */
    Jams_Constraint["JamsPkey"] = "jams_pkey";
})(Jams_Constraint || (Jams_Constraint = {}));
/** select columns of table "jams" */
var Jams_Select_Column;
(function (Jams_Select_Column) {
    /** column name */
    Jams_Select_Column["Delay"] = "delay";
    /** column name */
    Jams_Select_Column["EndTimestamp"] = "end_timestamp";
    /** column name */
    Jams_Select_Column["Hour"] = "hour";
    /** column name */
    Jams_Select_Column["IsWorkingDay"] = "is_working_day";
    /** column name */
    Jams_Select_Column["Length"] = "length";
    /** column name */
    Jams_Select_Column["Level"] = "level";
    /** column name */
    Jams_Select_Column["LineId"] = "line_id";
    /** column name */
    Jams_Select_Column["Speed"] = "speed";
    /** column name */
    Jams_Select_Column["StartTimestamp"] = "start_timestamp";
    /** column name */
    Jams_Select_Column["Uuid"] = "uuid";
})(Jams_Select_Column || (Jams_Select_Column = {}));
/** update columns of table "jams" */
var Jams_Update_Column;
(function (Jams_Update_Column) {
    /** column name */
    Jams_Update_Column["Delay"] = "delay";
    /** column name */
    Jams_Update_Column["EndTimestamp"] = "end_timestamp";
    /** column name */
    Jams_Update_Column["Hour"] = "hour";
    /** column name */
    Jams_Update_Column["IsWorkingDay"] = "is_working_day";
    /** column name */
    Jams_Update_Column["Length"] = "length";
    /** column name */
    Jams_Update_Column["Level"] = "level";
    /** column name */
    Jams_Update_Column["LineId"] = "line_id";
    /** column name */
    Jams_Update_Column["Speed"] = "speed";
    /** column name */
    Jams_Update_Column["StartTimestamp"] = "start_timestamp";
    /** column name */
    Jams_Update_Column["Uuid"] = "uuid";
})(Jams_Update_Column || (Jams_Update_Column = {}));
/** column ordering options */
var Order_By;
(function (Order_By) {
    /** in ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By || (Order_By = {}));
/** select columns of table "simple_line_type" */
var Simple_Line_Type_Select_Column;
(function (Simple_Line_Type_Select_Column) {
    /** column name */
    Simple_Line_Type_Select_Column["LineId"] = "line_id";
    /** column name */
    Simple_Line_Type_Select_Column["StreetId"] = "street_id";
})(Simple_Line_Type_Select_Column || (Simple_Line_Type_Select_Column = {}));
/** unique or primary key constraints on table "streets" */
var Streets_Constraint;
(function (Streets_Constraint) {
    /** unique or primary key constraint */
    Streets_Constraint["StreetsPkey"] = "streets_pkey";
})(Streets_Constraint || (Streets_Constraint = {}));
/** select columns of table "streets" */
var Streets_Select_Column;
(function (Streets_Select_Column) {
    /** column name */
    Streets_Select_Column["LastUpdate"] = "last_update";
    /** column name */
    Streets_Select_Column["Line"] = "line";
    /** column name */
    Streets_Select_Column["StreetBaseName"] = "street_base_name";
    /** column name */
    Streets_Select_Column["StreetId"] = "street_id";
    /** column name */
    Streets_Select_Column["StreetName"] = "street_name";
    /** column name */
    Streets_Select_Column["StreetSufix"] = "street_sufix";
    /** column name */
    Streets_Select_Column["StreetType"] = "street_type";
})(Streets_Select_Column || (Streets_Select_Column = {}));
/** update columns of table "streets" */
var Streets_Update_Column;
(function (Streets_Update_Column) {
    /** column name */
    Streets_Update_Column["LastUpdate"] = "last_update";
    /** column name */
    Streets_Update_Column["Line"] = "line";
    /** column name */
    Streets_Update_Column["StreetBaseName"] = "street_base_name";
    /** column name */
    Streets_Update_Column["StreetId"] = "street_id";
    /** column name */
    Streets_Update_Column["StreetName"] = "street_name";
    /** column name */
    Streets_Update_Column["StreetSufix"] = "street_sufix";
    /** column name */
    Streets_Update_Column["StreetType"] = "street_type";
})(Streets_Update_Column || (Streets_Update_Column = {}));
const LinesDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query lines {
  jam_lines {
    street_id
    line_id
    line
  }
}
    `;
class LinesGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = LinesDocument;
    }
}
LinesGQL.ɵfac = function LinesGQL_Factory(t) { return new (t || LinesGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
LinesGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LinesGQL, factory: LinesGQL.ɵfac, providedIn: 'root' });
const StreetsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query streets {
  streets {
    street_id
    street_type
    street_name
    street_sufix
    line
  }
}
    `;
class StreetsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = StreetsDocument;
    }
}
StreetsGQL.ɵfac = function StreetsGQL_Factory(t) { return new (t || StreetsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
StreetsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: StreetsGQL, factory: StreetsGQL.ɵfac, providedIn: 'root' });
const Admin_LevelsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query admin_levels {
  admin_levels {
    greater_admin_level_id
    greater_admin_level_name
    lower_admin_level_id
    lower_admin_level_name
    lines_ids
    streets_ids
    shape
    last_update
  }
}
    `;
class Admin_LevelsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = Admin_LevelsDocument;
    }
}
Admin_LevelsGQL.ɵfac = function Admin_LevelsGQL_Factory(t) { return new (t || Admin_LevelsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
Admin_LevelsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Admin_LevelsGQL, factory: Admin_LevelsGQL.ɵfac, providedIn: 'root' });
const JamsDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query jams($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $aggFunc: String, $working_days: _int4) {
  get_jams_lines(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, agg_func: $aggFunc, working_days: $working_days}
  ) {
    line_id
    level
  }
}
    `;
class JamsGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = JamsDocument;
    }
}
JamsGQL.ɵfac = function JamsGQL_Factory(t) { return new (t || JamsGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
JamsGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JamsGQL, factory: JamsGQL.ɵfac, providedIn: 'root' });
const EvolutivoDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query evolutivo($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $metric: String, $aggFunc: String, $working_days: _int4) {
  get_evolutivo(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, metric: $metric, agg_func: $aggFunc, working_days: $working_days}
  ) {
    index
    val
  }
}
    `;
class EvolutivoGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = EvolutivoDocument;
    }
}
EvolutivoGQL.ɵfac = function EvolutivoGQL_Factory(t) { return new (t || EvolutivoGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
EvolutivoGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EvolutivoGQL, factory: EvolutivoGQL.ɵfac, providedIn: 'root' });
const ComparativoDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query comparativo($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $metric: String, $aggFunc: String, $working_days: _int4) {
  get_comparativo(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, metric: $metric, agg_func: $aggFunc, working_days: $working_days}
  ) {
    year
    month
    val
  }
}
    `;
class ComparativoGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = ComparativoDocument;
    }
}
ComparativoGQL.ɵfac = function ComparativoGQL_Factory(t) { return new (t || ComparativoGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
ComparativoGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ComparativoGQL, factory: ComparativoGQL.ɵfac, providedIn: 'root' });
const SummaryDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query summary($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $aggFunc: String, $working_days: _int4) {
  get_summary(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, agg_func: $aggFunc, working_days: $working_days}
  ) {
    index
    val
  }
}
    `;
class SummaryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = SummaryDocument;
    }
}
SummaryGQL.ɵfac = function SummaryGQL_Factory(t) { return new (t || SummaryGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
SummaryGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SummaryGQL, factory: SummaryGQL.ɵfac, providedIn: 'root' });
const PredictivoDocument = apollo_angular__WEBPACK_IMPORTED_MODULE_0__.gql `
    query predictivo($date_from: timestamp, $date_to: timestamp, $hours: _int4, $lines: _int4, $metric: String, $aggFunc: String, $working_days: _int4) {
  get_predictivo(
    args: {date_from: $date_from, date_to: $date_to, hours: $hours, lines: $lines, metric: $metric, agg_func: $aggFunc, working_days: $working_days}
  ) {
    index
    val
  }
}
    `;
class PredictivoGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Query {
    constructor(apollo) {
        super(apollo);
        this.document = PredictivoDocument;
    }
}
PredictivoGQL.ɵfac = function PredictivoGQL_Factory(t) { return new (t || PredictivoGQL)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_1__.Apollo)); };
PredictivoGQL.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PredictivoGQL, factory: PredictivoGQL.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5541:
/*!***************************************!*\
  !*** ./src/app/services/indexedDb.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexedDb": () => (/* binding */ IndexedDb),
/* harmony export */   "indexedDb": () => (/* binding */ indexedDb)
/* harmony export */ });
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ 1273);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25160);


class IndexedDb extends dexie__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor() {
        super('congestiometro');
        this.version(3).stores({
            segment_lines: '++id',
            streets: '++id',
        });
        this.on('populate', () => {
            this.bulkPutLines([]);
            this.bulkPutStreets([]);
        });
    }
    bulkPutLines(newLines) {
        return this.segment_lines.bulkPut(newLines);
    }
    getLines() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => (0,dexie__WEBPACK_IMPORTED_MODULE_0__.liveQuery)(() => this.segment_lines.toArray()).subscribe((lines) => subscriber.next(lines)));
    }
    clearLines() {
        return this.segment_lines.clear();
    }
    bulkPutStreets(newStreets) {
        return this.streets.bulkPut(newStreets);
    }
    getStreets() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => (0,dexie__WEBPACK_IMPORTED_MODULE_0__.liveQuery)(() => this.streets.toArray()).subscribe((streets) => subscriber.next(streets)));
    }
    clearStreets() {
        return this.streets.clear();
    }
}
const indexedDb = new IndexedDb();


/***/ }),

/***/ 73071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12702);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 82516);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 67202);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 92597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ 32975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apollo-angular */ 79424);








const oneHour = 60 * 60 * 1000;
class UserService {
  constructor(http, apollo) {
    this.http = http;
    this.apollo = apollo;
    this.statusChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.currentUser = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(0, oneHour), this.statusChange).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => {
      const token = localStorage.getItem('token'); // console.log({ token });

      if (!token) return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
      const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_1__.default)(token); // console.log({ decodedToken });

      const expired = new Date().getTime() - decodedToken.exp * 1000 > oneHour;

      if (expired) {
        return this.refreshTokens().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mapTo)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null)));
      } else {
        const user = {
          username: decodedToken.username,
          isAdmin: decodedToken.username === 'admin'
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(Object.assign(user, {
          token
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));

    this.refreshTokens = () => {
      return this.http.get('/auth/refresh-token').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(({
        token
      }) => {
        localStorage.setItem('token', token);
        this.statusChange.next();
      }));
    };

    this.createUser = (username, password) => {
      return this.http.post('/auth/users', {
        username,
        password
      }, {
        headers: this.getAuthHeaders()
      }).toPromise();
    };

    this.deleteUser = username => {
      return this.http.delete(`/auth/users/${username}`, {
        headers: this.getAuthHeaders()
      }).toPromise();
    };

    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEvent)(window, 'storage').subscribe(console.log);
  }

  login(username, password) {
    var _this = this;

    return (0,_src_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const {
        token
      } = yield _this.http.post('/auth/login', {
        username,
        password
      }).toPromise();
      localStorage.setItem('token', token);

      _this.statusChange.next();
    })();
  }

  logout() {
    localStorage.removeItem('token');
    this.apollo.client.resetStore();
    this.statusChange.next();
  }

  getAuthHeaders() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpHeaders({
      Authorization: localStorage.getItem('token') || ''
    });
  }

  getUsers() {
    return this.http.get('/auth/users', {
      headers: this.getAuthHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(users => users.map(user => Object.assign(Object.assign({}, user), {
      isAdmin: user.username === 'admin'
    }))));
  }

  editUser(username, password) {
    return this.http.patch(`/auth/users/${username}`, {
      password
    }, {
      headers: this.getAuthHeaders()
    }).toPromise();
  }

}

UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_15__.Apollo));
};

UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7391:
/*!***********************************!*\
  !*** ./src/app/services/utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValid": () => (/* binding */ isValid),
/* harmony export */   "range": () => (/* binding */ range),
/* harmony export */   "daysRange": () => (/* binding */ daysRange),
/* harmony export */   "getPartialDate": () => (/* binding */ getPartialDate),
/* harmony export */   "normalizeString": () => (/* binding */ normalizeString)
/* harmony export */ });
const isValid = (a) => a !== null && a !== undefined;
const range = (n) => Array(n)
    .fill('')
    .map((_, i) => i);
const daysRange = (start, end) => {
    const startDate = new Date(start);
    const days = Math.round((new Date(end).getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    return range(days).map((differenceInDays) => new Date(new Date(start).setDate(startDate.getDate() + differenceInDays)));
};
const getPartialDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
};
const normalizeString = (str) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\d\s]/g, '')
        .toLocaleLowerCase();
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 62275,
	"./af.js": 62275,
	"./ar": 90857,
	"./ar-dz": 11218,
	"./ar-dz.js": 11218,
	"./ar-kw": 14754,
	"./ar-kw.js": 14754,
	"./ar-ly": 66680,
	"./ar-ly.js": 66680,
	"./ar-ma": 92178,
	"./ar-ma.js": 92178,
	"./ar-sa": 56522,
	"./ar-sa.js": 56522,
	"./ar-tn": 95682,
	"./ar-tn.js": 95682,
	"./ar.js": 90857,
	"./az": 70164,
	"./az.js": 70164,
	"./be": 79774,
	"./be.js": 79774,
	"./bg": 60947,
	"./bg.js": 60947,
	"./bm": 21832,
	"./bm.js": 21832,
	"./bn": 89650,
	"./bn-bd": 74477,
	"./bn-bd.js": 74477,
	"./bn.js": 89650,
	"./bo": 66005,
	"./bo.js": 66005,
	"./br": 98492,
	"./br.js": 98492,
	"./bs": 70534,
	"./bs.js": 70534,
	"./ca": 52061,
	"./ca.js": 52061,
	"./cs": 84737,
	"./cs.js": 84737,
	"./cv": 61167,
	"./cv.js": 61167,
	"./cy": 77996,
	"./cy.js": 77996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 14540,
	"./de-at": 49430,
	"./de-at.js": 49430,
	"./de-ch": 67978,
	"./de-ch.js": 67978,
	"./de.js": 14540,
	"./dv": 83426,
	"./dv.js": 83426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 63816,
	"./en-au.js": 63816,
	"./en-ca": 32162,
	"./en-ca.js": 32162,
	"./en-gb": 83305,
	"./en-gb.js": 83305,
	"./en-ie": 61954,
	"./en-ie.js": 61954,
	"./en-il": 43060,
	"./en-il.js": 43060,
	"./en-in": 59923,
	"./en-in.js": 59923,
	"./en-nz": 13540,
	"./en-nz.js": 13540,
	"./en-sg": 16505,
	"./en-sg.js": 16505,
	"./eo": 41907,
	"./eo.js": 41907,
	"./es": 86640,
	"./es-do": 41246,
	"./es-do.js": 41246,
	"./es-mx": 56131,
	"./es-mx.js": 56131,
	"./es-us": 36430,
	"./es-us.js": 36430,
	"./es.js": 86640,
	"./et": 62551,
	"./et.js": 62551,
	"./eu": 32711,
	"./eu.js": 32711,
	"./fa": 54572,
	"./fa.js": 54572,
	"./fi": 33390,
	"./fi.js": 33390,
	"./fil": 87860,
	"./fil.js": 87860,
	"./fo": 48216,
	"./fo.js": 48216,
	"./fr": 99291,
	"./fr-ca": 98527,
	"./fr-ca.js": 98527,
	"./fr-ch": 58407,
	"./fr-ch.js": 58407,
	"./fr.js": 99291,
	"./fy": 47054,
	"./fy.js": 47054,
	"./ga": 49540,
	"./ga.js": 49540,
	"./gd": 73917,
	"./gd.js": 73917,
	"./gl": 51486,
	"./gl.js": 51486,
	"./gom-deva": 56245,
	"./gom-deva.js": 56245,
	"./gom-latn": 48868,
	"./gom-latn.js": 48868,
	"./gu": 59652,
	"./gu.js": 59652,
	"./he": 89019,
	"./he.js": 89019,
	"./hi": 42040,
	"./hi.js": 42040,
	"./hr": 63402,
	"./hr.js": 63402,
	"./hu": 79322,
	"./hu.js": 79322,
	"./hy-am": 27609,
	"./hy-am.js": 27609,
	"./id": 57942,
	"./id.js": 57942,
	"./is": 98275,
	"./is.js": 98275,
	"./it": 73053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 73053,
	"./ja": 46176,
	"./ja.js": 46176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 92726,
	"./ka.js": 92726,
	"./kk": 72953,
	"./kk.js": 72953,
	"./km": 86957,
	"./km.js": 86957,
	"./kn": 59181,
	"./kn.js": 59181,
	"./ko": 47148,
	"./ko.js": 47148,
	"./ku": 27752,
	"./ku.js": 27752,
	"./ky": 65675,
	"./ky.js": 65675,
	"./lb": 41263,
	"./lb.js": 41263,
	"./lo": 65746,
	"./lo.js": 65746,
	"./lt": 11143,
	"./lt.js": 11143,
	"./lv": 38753,
	"./lv.js": 38753,
	"./me": 44054,
	"./me.js": 44054,
	"./mi": 31573,
	"./mi.js": 31573,
	"./mk": 30202,
	"./mk.js": 30202,
	"./ml": 68523,
	"./ml.js": 68523,
	"./mn": 79794,
	"./mn.js": 79794,
	"./mr": 56681,
	"./mr.js": 56681,
	"./ms": 56975,
	"./ms-my": 39859,
	"./ms-my.js": 39859,
	"./ms.js": 56975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 21526,
	"./ne.js": 21526,
	"./nl": 86368,
	"./nl-be": 40076,
	"./nl-be.js": 40076,
	"./nl.js": 86368,
	"./nn": 68420,
	"./nn.js": 68420,
	"./oc-lnc": 51906,
	"./oc-lnc.js": 51906,
	"./pa-in": 94504,
	"./pa-in.js": 94504,
	"./pl": 54721,
	"./pl.js": 54721,
	"./pt": 74645,
	"./pt-br": 54548,
	"./pt-br.js": 54548,
	"./pt.js": 74645,
	"./ro": 71977,
	"./ro.js": 71977,
	"./ru": 26042,
	"./ru.js": 26042,
	"./sd": 78849,
	"./sd.js": 78849,
	"./se": 27739,
	"./se.js": 27739,
	"./si": 50084,
	"./si.js": 50084,
	"./sk": 92449,
	"./sk.js": 92449,
	"./sl": 23086,
	"./sl.js": 23086,
	"./sq": 33139,
	"./sq.js": 33139,
	"./sr": 30607,
	"./sr-cyrl": 30063,
	"./sr-cyrl.js": 30063,
	"./sr.js": 30607,
	"./ss": 40131,
	"./ss.js": 40131,
	"./sv": 21665,
	"./sv.js": 21665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 33622,
	"./ta.js": 33622,
	"./te": 74825,
	"./te.js": 74825,
	"./tet": 48336,
	"./tet.js": 48336,
	"./tg": 39238,
	"./tg.js": 39238,
	"./th": 99463,
	"./th.js": 99463,
	"./tk": 39986,
	"./tk.js": 39986,
	"./tl-ph": 29672,
	"./tl-ph.js": 29672,
	"./tlh": 40043,
	"./tlh.js": 40043,
	"./tr": 51212,
	"./tr.js": 51212,
	"./tzl": 50110,
	"./tzl.js": 50110,
	"./tzm": 80482,
	"./tzm-latn": 38309,
	"./tzm-latn.js": 38309,
	"./tzm.js": 80482,
	"./ug-cn": 42495,
	"./ug-cn.js": 42495,
	"./uk": 54157,
	"./uk.js": 54157,
	"./ur": 80984,
	"./ur.js": 80984,
	"./uz": 64141,
	"./uz-latn": 43662,
	"./uz-latn.js": 43662,
	"./uz.js": 64141,
	"./vi": 12607,
	"./vi.js": 12607,
	"./x-pseudo": 66460,
	"./x-pseudo.js": 66460,
	"./yo": 92948,
	"./yo.js": 92948,
	"./zh-cn": 62658,
	"./zh-cn.js": 62658,
	"./zh-hk": 39352,
	"./zh-hk.js": 39352,
	"./zh-mo": 38274,
	"./zh-mo.js": 38274,
	"./zh-tw": 98451,
	"./zh-tw.js": 98451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.caede7b2489ed901f349.js.map