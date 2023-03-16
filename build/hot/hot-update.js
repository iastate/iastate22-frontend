webpackHotUpdate("main", {
  /***/ "./src/js/index.ts":
    /*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";
      eval(
        '\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", { value: true });\n__webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");\n/**\n * Modules\n */\nvar focus_within_1 = __importDefault(__webpack_require__(/*! focus-within */ "./node_modules/focus-within/index.mjs"));\nvar object_fit_images_1 = __importDefault(__webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js"));\nvar silc_core_1 = __webpack_require__(/*! silc-core */ "./node_modules/silc-core/dist/index.js");\nvar silc_accordion_1 = __webpack_require__(/*! silc-accordion */ "./node_modules/silc-accordion/dist/index.js");\nvar modal_1 = __importDefault(__webpack_require__(/*! ./components/modal */ "./src/js/components/modal.ts"));\nvar site_header_1 = __importDefault(__webpack_require__(/*! ./components/site-header */ "./src/js/components/site-header.ts"));\nvar card_1 = __importDefault(__webpack_require__(/*! ./components/card */ "./src/js/components/card.ts"));\nvar subnav_1 = __importDefault(__webpack_require__(/*! ./components/subnav */ "./src/js/components/subnav.ts"));\nvar privacy_consent_1 = __importDefault(__webpack_require__(/*! ../components/privacy-consent/privacy-consent */ "./src/components/privacy-consent/privacy-consent.ts"));\nvar accordion_1 = __importDefault(__webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.ts"));\nvar video_embed_1 = __importDefault(__webpack_require__(/*! ./components/video-embed */ "./src/js/components/video-embed.ts"));\nvar ecosystem_home_hero_1 = __importDefault(__webpack_require__(/*! ./components/ecosystem-home-hero */ "./src/js/components/ecosystem-home-hero.ts"));\nvar carousel_1 = __importDefault(__webpack_require__(/*! ./components/carousel */ "./src/js/components/carousel.ts"));\nvar home_1 = __importDefault(__webpack_require__(/*! ./pages/home */ "./src/js/pages/home.ts"));\nvar college_template_1 = __importDefault(__webpack_require__(/*! ./pages/college-template */ "./src/js/pages/college-template.ts"));\nvar accessibility_1 = __importDefault(__webpack_require__(/*! ./utilities/accessibility */ "./src/js/utilities/accessibility.ts"));\nvar scroll_padding_top_1 = __importDefault(__webpack_require__(/*! ./utilities/scroll-padding-top */ "./src/js/utilities/scroll-padding-top.ts"));\n/**\n * Init\n */\nfocus_within_1.default(document);\nobject_fit_images_1.default();\naccessibility_1.default.init();\nsilc_core_1.silcCoreInit();\nsilc_accordion_1.silcAccordionInit();\nsite_header_1.default();\nmodal_1.default();\ncard_1.default();\nprivacy_consent_1.default();\naccordion_1.default();\nsubnav_1.default();\nvideo_embed_1.default();\necosystem_home_hero_1.default();\nhome_1.default();\ncollege_template_1.default();\ncarousel_1.default();\nscroll_padding_top_1.default();\n\n\n//# sourceURL=webpack:///./src/js/index.ts?'
      );

      /***/
    },

  /***/ "./src/js/utilities/scroll-padding-top.ts":
    /*!************************************************!*\
  !*** ./src/js/utilities/scroll-padding-top.ts ***!
  \************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";
      eval(
        '\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nexports.ScrollPaddingTop = void 0;\nvar lodash_debounce_1 = __importDefault(__webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js"));\nvar ScrollPaddingTop = /** @class */ (function () {\n    function ScrollPaddingTop(element) {\n        if (!!element) {\n            this.element = element;\n            this.htmlRoot = document.querySelector("html");\n            this.init();\n        }\n    }\n    ScrollPaddingTop.prototype.init = function () {\n        this.handleResize();\n    };\n    ScrollPaddingTop.prototype.handleResize = function () {\n        var _this = this;\n        var resize = function () {\n            _this.handleScrollPadding();\n        };\n        window.addEventListener("resize", lodash_debounce_1.default(resize, 100));\n        resize();\n    };\n    ScrollPaddingTop.prototype.handleScrollPadding = function () {\n        var siteHeaderHeight = this.element.offsetHeight;\n        this.htmlRoot.style.scrollPaddingTop = siteHeaderHeight + "px";\n    };\n    return ScrollPaddingTop;\n}());\nexports.ScrollPaddingTop = ScrollPaddingTop;\nfunction scrollPaddingTopInit() {\n    var ecosystemSiteHeader = document.querySelector(".site-header--ecosystem");\n    new ScrollPaddingTop(ecosystemSiteHeader);\n}\nexports.default = scrollPaddingTopInit;\n\n\n//# sourceURL=webpack:///./src/js/utilities/scroll-padding-top.ts?'
      );

      /***/
    },
});
