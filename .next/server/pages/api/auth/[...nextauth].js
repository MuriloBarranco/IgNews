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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"(api)/./src/services/fauna.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  providers: [next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    authorization: {\n      params: {\n        scope: \"read:user\"\n      }\n    }\n  })],\n  callbacks: {\n    async session({\n      session\n    }) {\n      try {\n        const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_user_ref'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(String(session?.user?.email)))))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_status'), \"active\")])));\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: userActiveSubscription\n        });\n      } catch (err) {\n        console.log(err, 'erro no catch');\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: null\n        });\n      }\n    },\n\n    async signIn({\n      user,\n      account,\n      profile,\n      email,\n      credentials\n    }) {\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Let({\n          userExists: faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))\n        }, faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Var(\"userExists\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n          data: {\n            email: user.email\n          }\n        }))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUEsaUVBQWVFLGdEQUFRLENBQUM7RUFDdEJHLFNBQVMsRUFBRSxDQUNURixpRUFBYyxDQUFDO0lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURUO0lBRWJDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUZiO0lBR2JDLGFBQWEsRUFBRTtNQUNiQyxNQUFNLEVBQUU7UUFDTkMsS0FBSyxFQUFFO01BREQ7SUFESztFQUhGLENBQUQsQ0FETCxDQURXO0VBWXRCQyxTQUFTLEVBQUU7SUFDVCxNQUFNQyxPQUFOLENBQWM7TUFBQ0E7SUFBRCxDQUFkLEVBQXlCO01BQ3ZCLElBQUk7UUFDRixNQUFNQyxzQkFBc0IsR0FBRyxNQUFNYix3REFBQSxDQUNuQ0gsOENBQUEsQ0FDQ0EsdURBQUEsQ0FBZSxDQUNkQSxnREFBQSxDQUNFQSxnREFBQSxDQUFRLDBCQUFSLENBREYsRUFFRUEsaURBQUEsQ0FDRSxLQURGLEVBRUVBLDhDQUFBLENBQ0VBLGdEQUFBLENBQ0VBLGdEQUFBLENBQVEsZUFBUixDQURGLEVBRUdBLG1EQUFBLENBQVd1QixNQUFNLENBQUNSLE9BQU8sRUFBRVMsSUFBVCxFQUFlQyxLQUFoQixDQUFqQixDQUZILENBREYsQ0FGRixDQUZGLENBRGMsRUFhVnpCLGdEQUFBLENBQ0NBLGdEQUFBLENBQVEsd0JBQVIsQ0FERCxFQUVDLFFBRkQsQ0FiVSxDQUFmLENBREQsQ0FEbUMsQ0FBckM7UUFzQkEsdUNBQ0tlLE9BREw7VUFFRVcsa0JBQWtCLEVBQUVWO1FBRnRCO01BSUQsQ0EzQkQsQ0EyQkUsT0FBT1csR0FBUCxFQUFZO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLGVBQWpCO1FBQ0EsdUNBQ0taLE9BREw7VUFFRVcsa0JBQWtCLEVBQUU7UUFGdEI7TUFJRDtJQUNGLENBcENROztJQXFDUixNQUFNSSxNQUFOLENBQWE7TUFBRU4sSUFBRjtNQUFRTyxPQUFSO01BQWlCQyxPQUFqQjtNQUEwQlAsS0FBMUI7TUFBaUNRO0lBQWpDLENBQWIsRUFBNkQ7TUFDNUQsSUFBSTtRQUNGLE1BQU05Qix3REFBQSxDQUNKSCw4Q0FBQSxDQUNFO1VBQ0VtQyxVQUFVLEVBQUVuQyxpREFBQSxDQUNWQSxnREFBQSxDQUFRQSxnREFBQSxDQUFRLGVBQVIsQ0FBUixFQUFrQ0EsbURBQUEsQ0FBV3dCLElBQUksQ0FBQ0MsS0FBaEIsQ0FBbEMsQ0FEVTtRQURkLENBREYsRUFNRXpCLDZDQUFBLENBQ0VBLDhDQUFBLENBQU0sWUFBTixDQURGLEVBRUVBLDhDQUFBLENBQU1BLGdEQUFBLENBQVFBLGdEQUFBLENBQVEsZUFBUixDQUFSLEVBQWtDQSxtREFBQSxDQUFXd0IsSUFBSSxDQUFDQyxLQUFoQixDQUFsQyxDQUFOLENBRkYsRUFHRXpCLGlEQUFBLENBQVNBLHFEQUFBLENBQWEsT0FBYixDQUFULEVBQWdDO1VBQzlCeUMsSUFBSSxFQUFFO1lBQUVoQixLQUFLLEVBQUVELElBQUksQ0FBQ0M7VUFBZDtRQUR3QixDQUFoQyxDQUhGLENBTkYsQ0FESSxDQUFOO1FBZ0JBLE9BQU8sSUFBUDtNQUNELENBbEJELENBa0JFLE1BQU07UUFDTixPQUFPLEtBQVA7TUFDRDtJQUNGOztFQTNEUTtBQVpXLENBQUQsQ0FBdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tIFwiZmF1bmFkYlwiO1xuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2NvcGU6IFwicmVhZDp1c2VyXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHtzZXNzaW9ufSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlckFjdGl2ZVN1YnNjcmlwdGlvbiA9IGF3YWl0IGZhdW5hLnF1ZXJ5PHN0cmluZz4oXG4gICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgIHEuSW50ZXJzZWN0aW9uKFtcbiAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgIHEuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV91c2VyX3JlZicpLFxuICAgICAgICAgICAgICBxLlNlbGVjdChcbiAgICAgICAgICAgICAgICBcInJlZlwiLFxuICAgICAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZChTdHJpbmcoc2Vzc2lvbj8udXNlcj8uZW1haWwpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV9zdGF0dXMnKSxcbiAgICAgICAgICAgICAgICAgXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvbjogdXNlckFjdGl2ZVN1YnNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLCAnZXJybyBubyBjYXRjaCcpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2Vzc2lvbixcbiAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IG51bGwsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICBhc3luYyBzaWduSW4oeyB1c2VyLCBhY2NvdW50LCBwcm9maWxlLCBlbWFpbCwgY3JlZGVudGlhbHMgfSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgcS5MZXQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVzZXJFeGlzdHM6IHEuRXhpc3RzKFxuICAgICAgICAgICAgICAgIHEuTWF0Y2gocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksIHEuQ2FzZWZvbGQodXNlci5lbWFpbCkpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcS5JZihcbiAgICAgICAgICAgICAgcS5WYXIoXCJ1c2VyRXhpc3RzXCIpLFxuICAgICAgICAgICAgICBxLkdldChxLk1hdGNoKHEuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLCBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpKSksXG4gICAgICAgICAgICAgIHEuQ3JlYXRlKHEuQ29sbGVjdGlvbihcInVzZXJzXCIpLCB7XG4gICAgICAgICAgICAgICAgZGF0YTogeyBlbWFpbDogdXNlci5lbWFpbCB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJxdWVyeSIsInEiLCJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwiZmF1bmEiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlckFjdGl2ZVN1YnNjcmlwdGlvbiIsIkdldCIsIkludGVyc2VjdGlvbiIsIk1hdGNoIiwiSW5kZXgiLCJTZWxlY3QiLCJDYXNlZm9sZCIsIlN0cmluZyIsInVzZXIiLCJlbWFpbCIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImNyZWRlbnRpYWxzIiwiTGV0IiwidXNlckV4aXN0cyIsIkV4aXN0cyIsIklmIiwiVmFyIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY,\n  domain: 'db.us.fauna.com',\n  scheme: 'https'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxLQUFLLEdBQUcsSUFBSUQsMkNBQUosQ0FBVztFQUM1QkUsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FEUTtFQUU1QkMsTUFBTSxFQUFFLGlCQUZvQjtFQUc1QkMsTUFBTSxFQUFFO0FBSG9CLENBQVgsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9mYXVuYS50cz8zMjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ2ZhdW5hZGInXG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVksXG4gICAgZG9tYWluOiAnZGIudXMuZmF1bmEuY29tJyxcbiAgICBzY2hlbWU6ICdodHRwcycsXG59KSJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSIsImRvbWFpbiIsInNjaGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

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