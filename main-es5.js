function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shopping-list/shopping-list.component */
    "./src/app/shopping-list/shopping-list.component.ts");
    /* harmony import */


    var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recipes/recipes.component */
    "./src/app/recipes/recipes.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");

    var routes = [{
      path: "",
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]
    }, {
      path: "shopping-list",
      component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingListComponent"]
    }, {
      path: "recipes",
      component: _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'recipeBook';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "component"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shopping-list/shopping-list.component */
    "./src/app/shopping-list/shopping-list.component.ts");
    /* harmony import */


    var _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recipes/recipes.component */
    "./src/app/recipes/recipes.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _shopping_list_ingredient_entry_ingredient_entry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shopping-list/ingredient-entry/ingredient-entry.component */
    "./src/app/shopping-list/ingredient-entry/ingredient-entry.component.ts");
    /* harmony import */


    var _shopping_list_display_ingredients_display_ingredients_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shopping-list/display-ingredients/display-ingredients.component */
    "./src/app/shopping-list/display-ingredients/display-ingredients.component.ts");
    /* harmony import */


    var _recipes_recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./recipes/recipes-detail/recipes-detail.component */
    "./src/app/recipes/recipes-detail/recipes-detail.component.ts");
    /* harmony import */


    var _recipes_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./recipes/recipes-list/recipes-list.component */
    "./src/app/recipes/recipes-list/recipes-list.component.ts");
    /* harmony import */


    var _recipes_recipes_list_recipes_element_recipes_element_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./recipes/recipes-list/recipes-element/recipes-element.component */
    "./src/app/recipes/recipes-list/recipes-element/recipes-element.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"], _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_5__["RecipesComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shopping_list_ingredient_entry_ingredient_entry_component__WEBPACK_IMPORTED_MODULE_9__["IngredientEntryComponent"], _shopping_list_display_ingredients_display_ingredients_component__WEBPACK_IMPORTED_MODULE_10__["DisplayIngredientsComponent"], _recipes_recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_11__["RecipesDetailComponent"], _recipes_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_12__["RecipesListComponent"], _recipes_recipes_list_recipes_element_recipes_element_component__WEBPACK_IMPORTED_MODULE_13__["RecipesElementComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingListComponent"], _recipes_recipes_component__WEBPACK_IMPORTED_MODULE_5__["RecipesComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shopping_list_ingredient_entry_ingredient_entry_component__WEBPACK_IMPORTED_MODULE_9__["IngredientEntryComponent"], _shopping_list_display_ingredients_display_ingredients_component__WEBPACK_IMPORTED_MODULE_10__["DisplayIngredientsComponent"], _recipes_recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_11__["RecipesDetailComponent"], _recipes_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_12__["RecipesListComponent"], _recipes_recipes_list_recipes_element_recipes_element_component__WEBPACK_IMPORTED_MODULE_13__["RecipesElementComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      consts: [[1, "pt-3"], [1, "text-center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "created by Fabian Andiel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%]{\r\nposition:fixed;\r\nbottom:0;\r\nwidth:100%;\r\nbackground-color: #edf4f2;\r\nfont-family: 'Tangerine', cursive;\r\nfont-size: 1.2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsY0FBYztBQUNkLFFBQVE7QUFDUixVQUFVO0FBQ1YseUJBQXlCO0FBQ3pCLGlDQUFpQztBQUNqQyxpQkFBaUI7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJ7XHJcbnBvc2l0aW9uOmZpeGVkO1xyXG5ib3R0b206MDtcclxud2lkdGg6MTAwJTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2VkZjRmMjtcclxuZm9udC1mYW1pbHk6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xyXG5mb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToRecipes",
        value: function goToRecipes() {
          this.router.navigateByUrl('/recipes');
        }
      }, {
        key: "goToShoppingList",
        value: function goToShoppingList() {
          this.router.navigateByUrl('/shopping-list');
        }
      }, {
        key: "toogleNavigation",
        value: function toogleNavigation() {
          var dropDownMenu = document.querySelector(".navbar-collapse");

          if (dropDownMenu.classList.contains("show")) {
            dropDownMenu.classList.remove("show");
          } else {
            dropDownMenu.classList.add("show");
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 13,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "true", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My recipebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
            return ctx.toogleNavigation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() {
            return ctx.goToRecipes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() {
            return ctx.goToShoppingList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shopping List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".navbar-brand[_ngcontent-%COMP%]{\r\n\tfont-family: 'Tangerine', cursive;\r\n\tfont-size: 2rem;\t\r\n}\r\n\r\na.nav-link[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n\tfont-family: 'Smythe', cursive;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUNBQWlDO0NBQ2pDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsOEJBQThCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZHtcclxuXHRmb250LWZhbWlseTogJ1RhbmdlcmluZScsIGN1cnNpdmU7XHJcblx0Zm9udC1zaXplOiAycmVtO1x0XHJcbn1cclxuXHJcbmEubmF2LWxpbmsge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LWZhbWlseTogJ1NteXRoZScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LandingComponent =
    /*#__PURE__*/
    function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)();
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 4,
      vars: 0,
      consts: [["id", "landing-container", 1, "pt-3"], [1, "text-center"], ["src", "./assets/images/books.jpg", 1, "d-block", "img-fluid", "mx-auto"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to the best recipes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#landing-container[_ngcontent-%COMP%] {\r\n\twidth:100%;\r\n\theight:100vh;\r\n\tbackground-color: #D5D5D5;\r\n}\r\n\r\n#landing-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tfont-family: 'Tangerine', cursive;\r\n  \tfont-size: 4.7rem;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\twidth:57%;\r\n\tmin-width:340px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGlDQUFpQztHQUMvQixpQkFBaUI7QUFDcEI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhbmRpbmctY29udGFpbmVyIHtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDoxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDVENUQ1O1xyXG59XHJcblxyXG4jbGFuZGluZy1jb250YWluZXIgaDEge1xyXG5cdGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcclxuICBcdGZvbnQtc2l6ZTogNC43cmVtO1xyXG59XHJcblxyXG5pbWcge1xyXG5cdHdpZHRoOjU3JTtcclxuXHRtaW4td2lkdGg6MzQwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/recipes/receipe.model.ts":
  /*!******************************************!*\
    !*** ./src/app/recipes/receipe.model.ts ***!
    \******************************************/

  /*! exports provided: Recipe */

  /***/
  function srcAppRecipesReceipeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Recipe", function () {
      return Recipe;
    });

    var Recipe = function Recipe(name, description, ingredients, img) {
      _classCallCheck(this, Recipe);

      this.name = name;
      this.description = description;
      this.ingredients = ingredients;
      this.img = img;
    };
    /***/

  },

  /***/
  "./src/app/recipes/recipes-detail/recipes-detail.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/recipes/recipes-detail/recipes-detail.component.ts ***!
    \********************************************************************/

  /*! exports provided: RecipesDetailComponent */

  /***/
  function srcAppRecipesRecipesDetailRecipesDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesDetailComponent", function () {
      return RecipesDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shopping-list/shopping-list.service */
    "./src/app/shopping-list/shopping-list.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RecipesDetailComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ingredient_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r8.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r8.amount);
      }
    }

    var RecipesDetailComponent =
    /*#__PURE__*/
    function () {
      function RecipesDetailComponent(shoppingListService) {
        _classCallCheck(this, RecipesDetailComponent);

        this.shoppingListService = shoppingListService;
      }

      _createClass(RecipesDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddIngredients",
        value: function onAddIngredients() {
          this.shoppingListService.addIngredientsFromRecipes(this.recipe.ingredients);
        }
      }]);

      return RecipesDetailComponent;
    }();

    RecipesDetailComponent.ɵfac = function RecipesDetailComponent_Factory(t) {
      return new (t || RecipesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"]));
    };

    RecipesDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipesDetailComponent,
      selectors: [["app-recipes-detail"]],
      inputs: {
        recipe: "recipe"
      },
      decls: 20,
      vars: 4,
      consts: [[1, "card", "mx-auto", 2, "width", "70%"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "mb-3"], [1, "table", "table-striped"], ["scope", "col", 1, "font-weight-bold"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
      template: function RecipesDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ingredients ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RecipesDetailComponent_tr_17_Template, 5, 2, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipesDetailComponent_Template_button_click_18_listener() {
            return ctx.onAddIngredients();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add ingredients to shopping list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.recipe.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recipe.ingredients);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["@media only screen and (max-width: 576px) {\r\n \r\n \t.card[_ngcontent-%COMP%] {\r\n \t\tmargin-top: 50px;\r\n \t}\r\n\r\n}\r\n\r\nth[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n  font-family: 'Tangerine', cursive;\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n\tfont-family: 'Smythe', cursive;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\tbackground-color: #6d7993;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n\tfont-family: 'Smythe', cursive;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLWRldGFpbC9yZWNpcGVzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0dBQ0MsZ0JBQWdCO0VBQ2pCOztBQUVGOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy1kZXRhaWwvcmVjaXBlcy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuIFxyXG4gXHQuY2FyZCB7XHJcbiBcdFx0bWFyZ2luLXRvcDogNTBweDtcclxuIFx0fVxyXG5cclxufVxyXG5cclxudGgsaDEsaDMge1xyXG4gIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcblx0Zm9udC1mYW1pbHk6ICdTbXl0aGUnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM2ZDc5OTM7XHJcbn1cclxuXHJcbnRkLCBidXR0b24ge1xyXG5cdGZvbnQtZmFtaWx5OiAnU215dGhlJywgY3Vyc2l2ZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipes-detail',
          templateUrl: './recipes-detail.component.html',
          styleUrls: ['./recipes-detail.component.css']
        }]
      }], function () {
        return [{
          type: _shopping_list_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"]
        }];
      }, {
        recipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/recipes/recipes-list/recipes-element/recipes-element.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/recipes/recipes-list/recipes-element/recipes-element.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: RecipesElementComponent */

  /***/
  function srcAppRecipesRecipesListRecipesElementRecipesElementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesElementComponent", function () {
      return RecipesElementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../recipes.service */
    "./src/app/recipes/recipes.service.ts");

    var RecipesElementComponent =
    /*#__PURE__*/
    function () {
      function RecipesElementComponent(recipesService) {
        _classCallCheck(this, RecipesElementComponent);

        this.recipesService = recipesService;
      }

      _createClass(RecipesElementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRecipeClicked",
        value: function onRecipeClicked() {
          this.recipesService.clickedRecipeElemement.emit(this.recipe);
        }
      }]);

      return RecipesElementComponent;
    }();

    RecipesElementComponent.ɵfac = function RecipesElementComponent_Factory(t) {
      return new (t || RecipesElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]));
    };

    RecipesElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipesElementComponent,
      selectors: [["app-recipes-element"]],
      inputs: {
        recipe: "recipe"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "list-group-item", "list-group-item-action", "font-weight-bold", 3, "click"]],
      template: function RecipesElementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipesElementComponent_Template_li_click_0_listener() {
            return ctx.onRecipeClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe.name);
        }
      },
      styles: ["li[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n\tfont-family: 'Tangerine', cursive;\r\n\tfont-size: 1.7rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLWxpc3QvcmVjaXBlcy1lbGVtZW50L3JlY2lwZXMtZWxlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZUFBZTtDQUNmLGlDQUFpQztDQUNqQyxpQkFBaUI7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZXMtbGlzdC9yZWNpcGVzLWVsZW1lbnQvcmVjaXBlcy1lbGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcclxuXHRmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipes-element',
          templateUrl: './recipes-element.component.html',
          styleUrls: ['./recipes-element.component.css']
        }]
      }], function () {
        return [{
          type: _recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]
        }];
      }, {
        recipe: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/recipes/recipes-list/recipes-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/recipes/recipes-list/recipes-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: RecipesListComponent */

  /***/
  function srcAppRecipesRecipesListRecipesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesListComponent", function () {
      return RecipesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../recipes.service */
    "./src/app/recipes/recipes.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _recipes_element_recipes_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recipes-element/recipes-element.component */
    "./src/app/recipes/recipes-list/recipes-element/recipes-element.component.ts");

    function RecipesListComponent_app_recipes_element_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipes-element", 2);
      }

      if (rf & 2) {
        var recipe_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", recipe_r10);
      }
    }

    var RecipesListComponent =
    /*#__PURE__*/
    function () {
      function RecipesListComponent(recipesService) {
        _classCallCheck(this, RecipesListComponent);

        this.recipesService = recipesService;
      }

      _createClass(RecipesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.receipes = this.recipesService.provideRecipes();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.receipes = this.recipesService.provideRecipes();
        }
      }]);

      return RecipesListComponent;
    }();

    RecipesListComponent.ɵfac = function RecipesListComponent_Factory(t) {
      return new (t || RecipesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]));
    };

    RecipesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipesListComponent,
      selectors: [["app-recipes-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 1,
      consts: [[1, "list-group"], [3, "recipe", 4, "ngFor", "ngForOf"], [3, "recipe"]],
      template: function RecipesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecipesListComponent_app_recipes_element_1_Template, 1, 1, "app-recipes-element", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.receipes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _recipes_element_recipes_element_component__WEBPACK_IMPORTED_MODULE_3__["RecipesElementComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy1saXN0L3JlY2lwZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipes-list',
          templateUrl: './recipes-list.component.html',
          styleUrls: ['./recipes-list.component.css']
        }]
      }], function () {
        return [{
          type: _recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/recipes/recipes.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/recipes/recipes.component.ts ***!
    \**********************************************/

  /*! exports provided: RecipesComponent */

  /***/
  function srcAppRecipesRecipesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesComponent", function () {
      return RecipesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recipes.service */
    "./src/app/recipes/recipes.service.ts");
    /* harmony import */


    var _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./recipes-list/recipes-list.component */
    "./src/app/recipes/recipes-list/recipes-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./recipes-detail/recipes-detail.component */
    "./src/app/recipes/recipes-detail/recipes-detail.component.ts");

    function RecipesComponent_app_recipes_detail_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recipes-detail", 7);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recipe", ctx_r0.selectedReceipe);
      }
    }

    function RecipesComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a receipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RecipesComponent =
    /*#__PURE__*/
    function () {
      function RecipesComponent(recipesService) {
        var _this = this;

        _classCallCheck(this, RecipesComponent);

        this.recipesService = recipesService;
        this.recipesService.clickedRecipeElemement.subscribe(function (recipe) {
          _this.selectedReceipe = recipe;
        });
      }

      _createClass(RecipesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecipesComponent;
    }();

    RecipesComponent.ɵfac = function RecipesComponent_Factory(t) {
      return new (t || RecipesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]));
    };

    RecipesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecipesComponent,
      selectors: [["app-recipes"]],
      decls: 9,
      vars: 2,
      consts: [["id", "recipes-container"], [1, "container", "pt-5", "pb-3"], [1, "row"], [1, "col-sm-3"], [1, "col-sm-9"], [3, "recipe", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "recipe"], ["id", "selectReceipeText"]],
      template: function RecipesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-recipes-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecipesComponent_app_recipes_detail_6_Template, 1, 1, "app-recipes-detail", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecipesComponent_ng_template_7_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedReceipe)("ngIfElse", _r1);
        }
      },
      directives: [_recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_2__["RecipesListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _recipes_detail_recipes_detail_component__WEBPACK_IMPORTED_MODULE_4__["RecipesDetailComponent"]],
      styles: ["@media only screen and (max-width: 576px) {\r\n  p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 50px;\r\n  }\r\n\r\n  #recipes-container[_ngcontent-%COMP%] {\r\n  \toverflow: auto; \r\n  \tpadding-bottom: 60px;\r\n  }\r\n\r\n}\r\n\r\n#recipes-container[_ngcontent-%COMP%] {\r\n\tbackground-color: #D5D5D5;\r\n\twidth: 100%;\r\n\theight:100vh;\r\n\tpadding-bottom: 100px;\r\n\toverflow: auto; \r\n}\r\n\r\n#selectReceipeText[_ngcontent-%COMP%] {\r\n  font-family: 'Tangerine', cursive;\r\n  font-size: 1.7rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7R0FDQyxjQUFjO0dBQ2Qsb0JBQW9CO0VBQ3JCOztBQUVGOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCxZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICBwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gICNyZWNpcGVzLWNvbnRhaW5lciB7XHJcbiAgXHRvdmVyZmxvdzogYXV0bzsgXHJcbiAgXHRwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4jcmVjaXBlcy1jb250YWluZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNENUQ1RDU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OjEwMHZoO1xyXG5cdHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHRvdmVyZmxvdzogYXV0bzsgXHJcbn1cclxuXHJcbiNzZWxlY3RSZWNlaXBlVGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recipes',
          templateUrl: './recipes.component.html',
          styleUrls: ['./recipes.component.css']
        }]
      }], function () {
        return [{
          type: _recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/recipes/recipes.service.ts":
  /*!********************************************!*\
    !*** ./src/app/recipes/recipes.service.ts ***!
    \********************************************/

  /*! exports provided: RecipesService */

  /***/
  function srcAppRecipesRecipesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesService", function () {
      return RecipesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _receipe_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./receipe.model */
    "./src/app/recipes/receipe.model.ts");
    /* harmony import */


    var _shopping_list_ingredient_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shopping-list/ingredient.model */
    "./src/app/shopping-list/ingredient.model.ts");

    var RecipesService =
    /*#__PURE__*/
    function () {
      function RecipesService() {
        _classCallCheck(this, RecipesService);

        this.recipes = [new _receipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"]("Recipe 1", "extremely delicious", [new _shopping_list_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Ingredient 1", 40), new _shopping_list_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Ingredient 2", 70)], "./assets/images/cherries.jpg"), new _receipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"]("Recipe 2", "tasty", [new _shopping_list_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Ingredient 3", 40), new _shopping_list_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Ingredient 4", 70)], "./assets/images/cord.jpg"), new _receipe_model__WEBPACK_IMPORTED_MODULE_1__["Recipe"]("Recipe 3", "delicious", [new _shopping_list_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Ingredient X", 70), new _shopping_list_ingredient_model__WEBPACK_IMPORTED_MODULE_2__["Ingredient"]("Ingredient Z", 70)], "./assets/images/potato.jpg")];
        this.clickedRecipeElemement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(RecipesService, [{
        key: "provideRecipes",
        value: function provideRecipes() {
          return this.recipes;
        }
      }]);

      return RecipesService;
    }();

    RecipesService.ɵfac = function RecipesService_Factory(t) {
      return new (t || RecipesService)();
    };

    RecipesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecipesService,
      factory: RecipesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shopping-list/display-ingredients/display-ingredients.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shopping-list/display-ingredients/display-ingredients.component.ts ***!
    \************************************************************************************/

  /*! exports provided: DisplayIngredientsComponent */

  /***/
  function srcAppShoppingListDisplayIngredientsDisplayIngredientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayIngredientsComponent", function () {
      return DisplayIngredientsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shopping_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shopping-list.service */
    "./src/app/shopping-list/shopping-list.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DisplayIngredientsComponent_tr_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ingredient_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ingredient_r6.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ingredient_r6.amount, " ");
      }
    }

    var DisplayIngredientsComponent =
    /*#__PURE__*/
    function () {
      function DisplayIngredientsComponent(shoppingListService) {
        _classCallCheck(this, DisplayIngredientsComponent);

        this.shoppingListService = shoppingListService;
      }

      _createClass(DisplayIngredientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.ingredients = this.shoppingListService.provideIngredientList();
          this.shoppingListService.ingredientEmitter.subscribe(function (ingredients) {
            _this2.ingredients = ingredients;
          });
        }
      }]);

      return DisplayIngredientsComponent;
    }();

    DisplayIngredientsComponent.ɵfac = function DisplayIngredientsComponent_Factory(t) {
      return new (t || DisplayIngredientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"]));
    };

    DisplayIngredientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisplayIngredientsComponent,
      selectors: [["app-display-ingredients"]],
      decls: 10,
      vars: 1,
      consts: [[1, "container", "py-5"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"]],
      template: function DisplayIngredientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DisplayIngredientsComponent_tr_9_Template, 5, 2, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ingredients);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["th[_ngcontent-%COMP%] {\r\n\tfont-family: 'Tangerine', cursive;\r\n\tfont-size: 2rem;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n\tfont-family: 'Smythe', cursive;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9kaXNwbGF5LWluZ3JlZGllbnRzL2Rpc3BsYXktaW5ncmVkaWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlDQUFpQztDQUNqQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLDhCQUE4QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3QvZGlzcGxheS1pbmdyZWRpZW50cy9kaXNwbGF5LWluZ3JlZGllbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCB7XHJcblx0Zm9udC1mYW1pbHk6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xyXG5cdGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxudGQge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LWZhbWlseTogJ1NteXRoZScsIGN1cnNpdmU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayIngredientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-display-ingredients',
          templateUrl: './display-ingredients.component.html',
          styleUrls: ['./display-ingredients.component.css']
        }]
      }], function () {
        return [{
          type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shopping-list/ingredient-entry/ingredient-entry.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shopping-list/ingredient-entry/ingredient-entry.component.ts ***!
    \******************************************************************************/

  /*! exports provided: IngredientEntryComponent */

  /***/
  function srcAppShoppingListIngredientEntryIngredientEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IngredientEntryComponent", function () {
      return IngredientEntryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ingredient.model */
    "./src/app/shopping-list/ingredient.model.ts");
    /* harmony import */


    var _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shopping-list.service */
    "./src/app/shopping-list/shopping-list.service.ts");

    var _c0 = ["IngredientNameInput"];
    var _c1 = ["IngredientAmountInput"];

    var IngredientEntryComponent =
    /*#__PURE__*/
    function () {
      function IngredientEntryComponent(shoppingListService) {
        _classCallCheck(this, IngredientEntryComponent);

        this.shoppingListService = shoppingListService;
      }

      _createClass(IngredientEntryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAdd",
        value: function onAdd() {
          var ingredientName = this.ingredientName.nativeElement.value;
          var ingredientAmount = this.ingredientAmount.nativeElement.value;
          this.shoppingListService.addIngredient(new _ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"](ingredientName, ingredientAmount));
        }
      }]);

      return IngredientEntryComponent;
    }();

    IngredientEntryComponent.ɵfac = function IngredientEntryComponent_Factory(t) {
      return new (t || IngredientEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"]));
    };

    IngredientEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IngredientEntryComponent,
      selectors: [["app-ingredient-entry"]],
      viewQuery: function IngredientEntryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ingredientName = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ingredientAmount = _t.first);
        }
      },
      decls: 16,
      vars: 0,
      consts: [[1, "container"], [1, "w-75", "mx-auto"], [1, "form-group"], ["for", "Ingredient"], ["type", "text", "id", "Ingredient", "aria-describedby", "Ingredient-entry", 1, "form-control", "w-75"], ["IngredientNameInput", ""], ["id", "Ingredient-entry", 1, "form-text", "text-muted"], ["for", "amount"], ["type", "number", "id", "amount", 1, "form-control", "w-25"], ["IngredientAmountInput", ""], [1, "btn", "btn-primary", 3, "click"]],
      template: function IngredientEntryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ingredient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "mhmmmmmmmmmm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IngredientEntryComponent_Template_button_click_14_listener() {
            return ctx.onAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add to list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["label[_ngcontent-%COMP%] {\r\nfont-family: 'Tangerine', cursive;\r\n\tfont-size: 2rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\tbackground-color: #6d7993;\r\n\tborder:none;\r\n\tfont-family: 'Smythe', cursive;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9pbmdyZWRpZW50LWVudHJ5L2luZ3JlZGllbnQtZW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGlDQUFpQztDQUNoQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFdBQVc7Q0FDWCw4QkFBOEI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy1saXN0L2luZ3JlZGllbnQtZW50cnkvaW5ncmVkaWVudC1lbnRyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG5mb250LWZhbWlseTogJ1RhbmdlcmluZScsIGN1cnNpdmU7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM2ZDc5OTM7XHJcblx0Ym9yZGVyOm5vbmU7XHJcblx0Zm9udC1mYW1pbHk6ICdTbXl0aGUnLCBjdXJzaXZlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IngredientEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ingredient-entry',
          templateUrl: './ingredient-entry.component.html',
          styleUrls: ['./ingredient-entry.component.css']
        }]
      }], function () {
        return [{
          type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"]
        }];
      }, {
        ingredientName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['IngredientNameInput', {
            "static": true
          }]
        }],
        ingredientAmount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['IngredientAmountInput', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shopping-list/ingredient.model.ts":
  /*!***************************************************!*\
    !*** ./src/app/shopping-list/ingredient.model.ts ***!
    \***************************************************/

  /*! exports provided: Ingredient */

  /***/
  function srcAppShoppingListIngredientModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ingredient", function () {
      return Ingredient;
    });

    var Ingredient = function Ingredient(name, amount) {
      _classCallCheck(this, Ingredient);

      this.name = name;
      this.amount = amount;
    };
    /***/

  },

  /***/
  "./src/app/shopping-list/shopping-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: ShoppingListComponent */

  /***/
  function srcAppShoppingListShoppingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function () {
      return ShoppingListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ingredient_entry_ingredient_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ingredient-entry/ingredient-entry.component */
    "./src/app/shopping-list/ingredient-entry/ingredient-entry.component.ts");
    /* harmony import */


    var _display_ingredients_display_ingredients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./display-ingredients/display-ingredients.component */
    "./src/app/shopping-list/display-ingredients/display-ingredients.component.ts");

    var ShoppingListComponent =
    /*#__PURE__*/
    function () {
      function ShoppingListComponent() {
        _classCallCheck(this, ShoppingListComponent);
      }

      _createClass(ShoppingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShoppingListComponent;
    }();

    ShoppingListComponent.ɵfac = function ShoppingListComponent_Factory(t) {
      return new (t || ShoppingListComponent)();
    };

    ShoppingListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShoppingListComponent,
      selectors: [["app-shopping-list"]],
      decls: 3,
      vars: 0,
      consts: [["id", "shopping-list-container", 1, "py-4"]],
      template: function ShoppingListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ingredient-entry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-display-ingredients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ingredient_entry_ingredient_entry_component__WEBPACK_IMPORTED_MODULE_1__["IngredientEntryComponent"], _display_ingredients_display_ingredients_component__WEBPACK_IMPORTED_MODULE_2__["DisplayIngredientsComponent"]],
      styles: ["#shopping-list-container[_ngcontent-%COMP%] {\r\n\tbackground-color: #D5D5D5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaG9wcGluZy1saXN0LWNvbnRhaW5lciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q1RDVENTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-shopping-list',
          templateUrl: './shopping-list.component.html',
          styleUrls: ['./shopping-list.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shopping-list/shopping-list.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.service.ts ***!
    \********************************************************/

  /*! exports provided: ShoppingListService */

  /***/
  function srcAppShoppingListShoppingListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingListService", function () {
      return ShoppingListService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ingredient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ingredient.model */
    "./src/app/shopping-list/ingredient.model.ts");

    var ShoppingListService =
    /*#__PURE__*/
    function () {
      function ShoppingListService() {
        _classCallCheck(this, ShoppingListService);

        this.ingredients = [new _ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]("Protein", 40), new _ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]("Carbs", 10), new _ingredient_model__WEBPACK_IMPORTED_MODULE_1__["Ingredient"]("Vitamins", 10)];
        this.ingredientEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ShoppingListService, [{
        key: "addIngredient",
        value: function addIngredient(ingredient) {
          this.ingredients.push(ingredient);
        }
      }, {
        key: "addIngredientsFromRecipes",
        value: function addIngredientsFromRecipes(ingredients) {
          this.ingredients = this.ingredients.concat(ingredients);
          this.ingredientEmitter.emit(this.ingredients);
        }
      }, {
        key: "provideIngredientList",
        value: function provideIngredientList() {
          return this.ingredients;
        }
      }]);

      return ShoppingListService;
    }();

    ShoppingListService.ɵfac = function ShoppingListService_Factory(t) {
      return new (t || ShoppingListService)();
    };

    ShoppingListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShoppingListService,
      factory: ShoppingListService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\fabia\Desktop\Technikum\Webdevelopment_Fabian\Angular\eigeneProjekteProd\recipeBook\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map