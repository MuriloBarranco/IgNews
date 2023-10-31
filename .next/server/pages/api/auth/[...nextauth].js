"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    // jwt: {\n    //   signingKey: process.env.SIGNING_KEY,\n    // },\n    callbacks: {\n        async signIn ({ user , account , profile  }) {\n            const { email  } = user;\n            try {\n                await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvQztBQUVKO0FBQ3VCO0FBRVI7QUFFL0MsaUVBQWVFLGdEQUFRLENBQUM7SUFDdEJHLFNBQVMsRUFBRTtRQUNURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxhQUFhLEVBQUU7Z0JBQ2JDLE1BQU0sRUFBRTtvQkFDTkMsS0FBSyxFQUFFLFdBQVc7aUJBQ25CO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7SUFFRCxTQUFTO0lBQ1QseUNBQXlDO0lBQ3pDLEtBQUs7SUFFTEMsU0FBUyxFQUFFO1FBQ1QsTUFBTUMsTUFBTSxFQUFDLEVBQUVDLElBQUksR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEdBQUUsRUFBRTtZQUN2QyxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHSCxJQUFJO1lBRXRCLElBQUk7Z0JBQ0YsTUFBTWIsd0RBQVcsQ0FDZkgsNkNBQUksQ0FDRkEsOENBQUssQ0FDSEEsaURBQVEsQ0FDTkEsZ0RBQU8sQ0FBQ0EsZ0RBQU8sQ0FBQyxlQUFlLENBQUMsRUFBRUEsbURBQVUsQ0FBQ2dCLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUMsQ0FDMUQsQ0FDRixFQUNEbkIsaURBQVEsQ0FBQ0EscURBQVksQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFBRTRCLElBQUksRUFBRTt3QkFBRVQsS0FBSztxQkFBRTtpQkFBRSxDQUFDLEVBQ3BEbkIsOENBQUssQ0FBQ0EsZ0RBQU8sQ0FBQ0EsZ0RBQU8sQ0FBQyxlQUFlLENBQUMsRUFBRUEsbURBQVUsQ0FBQ2dCLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNqRSxDQUNGO2dCQUVELE9BQU8sSUFBSTthQUNaLENBQUMsT0FBTTtnQkFDTixPQUFPLEtBQUs7YUFDYjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSBcImZhdW5hZGJcIlxuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcblxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZmF1bmFcIlxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdpdEh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2NvcGU6IFwicmVhZDp1c2VyXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIC8vIGp3dDoge1xuICAvLyAgIHNpZ25pbmdLZXk6IHByb2Nlc3MuZW52LlNJR05JTkdfS0VZLFxuICAvLyB9LFxuXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkge1xuICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlclxuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICBxLklmKFxuICAgICAgICAgICAgcS5Ob3QoXG4gICAgICAgICAgICAgIHEuRXhpc3RzKFxuICAgICAgICAgICAgICAgIHEuTWF0Y2gocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksIHEuQ2FzZWZvbGQodXNlci5lbWFpbCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxLkNyZWF0ZShxLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiKSwgeyBkYXRhOiB7IGVtYWlsIH0gfSksXG4gICAgICAgICAgICBxLkdldChxLk1hdGNoKHEuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLCBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpKSlcbiAgICAgICAgICApXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59KVxuIl0sIm5hbWVzIjpbInF1ZXJ5IiwicSIsIk5leHRBdXRoIiwiR2l0SHViUHJvdmlkZXIiLCJmYXVuYSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImVtYWlsIiwiSWYiLCJOb3QiLCJFeGlzdHMiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJDcmVhdGUiLCJDb2xsZWN0aW9uIiwiZGF0YSIsIkdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzVCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/MzIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnR9IGZyb20gJ2ZhdW5hZGInXG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVlcbn0pIl0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();