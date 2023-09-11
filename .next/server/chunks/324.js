exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 607:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__5wTW5",
	"headerContent": "styles_headerContent__fjlN9",
	"active": "styles_active__6wMaL"
};


/***/ }),

/***/ 797:
/***/ ((module) => {

// Exports
module.exports = {
	"signInButton": "styles_signInButton__03omS",
	"closeIcon": "styles_closeIcon__Gk8Oz"
};


/***/ }),

/***/ 96:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: ./src/styles/global.scss
var global = __webpack_require__(439);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(750);
// EXTERNAL MODULE: ./src/components/SignInButton/styles.module.scss
var styles_module = __webpack_require__(797);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/SignInButton/index.tsx




function SignInButton() {
    const isUserLoggedIn = true;
    return isUserLoggedIn ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        type: "button",
        className: (styles_module_default()).signInButton,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(fa_.FaGithub, {
                color: "#04d361"
            }),
            "Murilo Barranco",
            /*#__PURE__*/ jsx_runtime.jsx(fi_.FiX, {
                color: "#737380",
                className: (styles_module_default()).closeIcon
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
        type: "button",
        className: (styles_module_default()).signInButton,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(fa_.FaGithub, {
                color: "#eba417"
            }),
            "Sign in with Github"
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var Header_styles_module = __webpack_require__(607);
var Header_styles_module_default = /*#__PURE__*/__webpack_require__.n(Header_styles_module);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx



function Header() {
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: (Header_styles_module_default()).headerContainer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (Header_styles_module_default()).headerContent,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: "/images/logo.svg",
                    alt: "ig.news"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: (Header_styles_module_default()).active,
                            href: "",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "",
                            children: "Posts"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(SignInButton, {})
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx



function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;0,900;1,400&display=swap",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "shortcut icon",
                            href: "/favicon.png",
                            type: "image/png"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}


/***/ }),

/***/ 439:
/***/ (() => {



/***/ })

};
;