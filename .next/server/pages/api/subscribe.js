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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fauna */ \"(api)/./src/services/fauna.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_stripe__WEBPACK_IMPORTED_MODULE_2__]);\n_services_stripe__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n            req\n        }) ////////////\n        ;\n        const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session?.user?.email))));\n        let customerId = user.data.stripe_customer_id;\n        if (!customerId) {\n            const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.customers.create({\n                email: session.user.email\n            });\n            await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), user.ref.id), {\n                data: {\n                    stripe_customer_id: stripeCustomer.id\n                }\n            }));\n            customerId = stripeCustomer.id;\n        }\n        const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.checkout.sessions.create({\n            customer: customerId,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1NoB4CIGThJQBt57Yw0q7bjT\",\n                    quantity: 1\n                }\n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return res.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        // Se nao for uma requisicao post\n        res.setHeader(\"Allow\", \"POST\");\n        // Devolver um erro com codigo 405\n        res.status(405).end(\"Method not allowed\");\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ1E7QUFFRTtBQUNGO0FBVzVDLGlFQUFlLE9BQU9LLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbEUsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLE9BQU8sR0FBRyxNQUFNTiwyREFBVSxDQUFDO1lBQUVHLEdBQUc7U0FBRSxDQUFDLENBQUMsWUFBWTtRQUFiO1FBRXpDLE1BQU1JLElBQUksR0FBRyxNQUFNTCx3REFBVyxDQUM1QkgsOENBQUssQ0FBQ0EsZ0RBQU8sQ0FBQ0EsZ0RBQU8sQ0FBQyxlQUFlLENBQUMsRUFBRUEsbURBQVUsQ0FBQ08sT0FBTyxFQUFFQyxJQUFJLEVBQUVLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDM0U7UUFFRCxJQUFJQyxVQUFVLEdBQUdOLElBQUksQ0FBQ08sSUFBSSxDQUFDQyxrQkFBa0I7UUFFN0MsSUFBSSxDQUFDRixVQUFVLEVBQUU7WUFDZixNQUFNRyxjQUFjLEdBQUcsTUFBTWYscUVBQXVCLENBQUM7Z0JBQ25EVyxLQUFLLEVBQUVOLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDSyxLQUFLO2FBRTFCLENBQUM7WUFDRixNQUFNVix3REFBVyxDQUNmSCxpREFBUSxDQUFDQSw4Q0FBSyxDQUFDQSxxREFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFUSxJQUFJLENBQUNlLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDLEVBQUU7Z0JBQ2xEVCxJQUFJLEVBQUU7b0JBQ0pDLGtCQUFrQixFQUFFQyxjQUFjLENBQUNPLEVBQUU7aUJBQ3RDO2FBQ0YsQ0FBQyxDQUNIO1lBRURWLFVBQVUsR0FBR0csY0FBYyxDQUFDTyxFQUFFO1NBQy9CO1FBRUQsTUFBTUMscUJBQXFCLEdBQUcsTUFBTXZCLDZFQUErQixDQUFDO1lBQ2xFMEIsUUFBUSxFQUFFZCxVQUFVO1lBQ3BCZSxvQkFBb0IsRUFBRTtnQkFBQyxNQUFNO2FBQUM7WUFDOUJDLDBCQUEwQixFQUFFLFVBQVU7WUFDdENDLFVBQVUsRUFBRTtnQkFBQztvQkFBRUMsS0FBSyxFQUFFLGdDQUFnQztvQkFBRUMsUUFBUSxFQUFFLENBQUM7aUJBQUU7YUFBQztZQUN0RUMsSUFBSSxFQUFFLGNBQWM7WUFDcEJDLHFCQUFxQixFQUFFLElBQUk7WUFDM0JDLFdBQVcsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGtCQUFrQjtZQUMzQ0MsVUFBVSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csaUJBQWlCO1NBQzFDLENBQUM7UUFFRixPQUFPcEMsR0FBRyxDQUFDcUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxFQUFFbkIscUJBQXFCLENBQUNELEVBQUU7U0FBRSxDQUFDO0tBQ3JFLE1BQU07UUFDTCxpQ0FBaUM7UUFDakNuQixHQUFHLENBQUN3QyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUM5QixrQ0FBa0M7UUFDbEN4QyxHQUFHLENBQUNxQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztLQUMxQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9zdWJzY3JpYmUudHM/MDU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gXCJmYXVuYWRiXCJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcblxuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZVwiXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mYXVuYVwiXG5cbnR5cGUgVXNlciA9IHtcbiAgcmVmOiB7XG4gICAgaWQ6IHN0cmluZ1xuICB9XG4gIGRhdGE6IHtcbiAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmluZ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KSAvLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmYXVuYS5xdWVyeTxVc2VyPihcbiAgICAgIHEuR2V0KHEuTWF0Y2gocS5JbmRleChcInVzZXJfYnlfZW1haWxcIiksIHEuQ2FzZWZvbGQoc2Vzc2lvbj8udXNlcj8uZW1haWwpKSlcbiAgICApXG5cbiAgICBsZXQgY3VzdG9tZXJJZCA9IHVzZXIuZGF0YS5zdHJpcGVfY3VzdG9tZXJfaWRcblxuICAgIGlmICghY3VzdG9tZXJJZCkge1xuICAgICAgY29uc3Qgc3RyaXBlQ3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmNyZWF0ZSh7XG4gICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXG4gICAgICAgIC8vbWV0YWRhdGFcbiAgICAgIH0pXG4gICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgcS5VcGRhdGUocS5SZWYocS5Db2xsZWN0aW9uKFwidXNlcnNcIiksIHVzZXIucmVmLmlkKSwge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaXBlQ3VzdG9tZXIuaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgY3VzdG9tZXJJZCA9IHN0cmlwZUN1c3RvbWVyLmlkXG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaXBlQ2hlY2tvdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICBjdXN0b21lcjogY3VzdG9tZXJJZCxcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxuICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246IFwicmVxdWlyZWRcIixcbiAgICAgIGxpbmVfaXRlbXM6IFt7IHByaWNlOiBcInByaWNlXzFOb0I0Q0lHVGhKUUJ0NTdZdzBxN2JqVFwiLCBxdWFudGl0eTogMSB9XSxcbiAgICAgIG1vZGU6IFwic3Vic2NyaXB0aW9uXCIsXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXG4gICAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX1NVQ0NFU1NfVVJMLFxuICAgICAgY2FuY2VsX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX0NBTkNFTF9VUkwsXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNlc3Npb25JZDogc3RyaXBlQ2hlY2tvdXRTZXNzaW9uLmlkIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gU2UgbmFvIGZvciB1bWEgcmVxdWlzaWNhbyBwb3N0XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFwiUE9TVFwiKVxuICAgIC8vIERldm9sdmVyIHVtIGVycm8gY29tIGNvZGlnbyA0MDVcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJxdWVyeSIsInEiLCJnZXRTZXNzaW9uIiwic3RyaXBlIiwiZmF1bmEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXNzaW9uIiwidXNlciIsIkdldCIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsImVtYWlsIiwiY3VzdG9tZXJJZCIsImRhdGEiLCJzdHJpcGVfY3VzdG9tZXJfaWQiLCJzdHJpcGVDdXN0b21lciIsImN1c3RvbWVycyIsImNyZWF0ZSIsIlVwZGF0ZSIsIlJlZiIsIkNvbGxlY3Rpb24iLCJyZWYiLCJpZCIsInN0cmlwZUNoZWNrb3V0U2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjdXN0b21lciIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsIm1vZGUiLCJhbGxvd19wcm9tb3Rpb25fY29kZXMiLCJzdWNjZXNzX3VybCIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU1VDQ0VTU19VUkwiLCJjYW5jZWxfdXJsIiwiU1RSSVBFX0NBTkNFTF9VUkwiLCJzdGF0dXMiLCJqc29uIiwic2Vzc2lvbklkIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzVCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/MzIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnR9IGZyb20gJ2ZhdW5hZGInXG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVlcbn0pIl0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ }),

/***/ "(api)/./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"(api)/./package.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"Ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQjtBQUNpQjtBQUVyQyxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsOENBQU0sQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtJQUMzREMsVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE9BQU8sRUFBRTtRQUNQQyxJQUFJLEVBQUUsUUFBUTtRQUNkUCxPQUFPO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cz9hYjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4uLy4uL3BhY2thZ2UuanNvblwiXG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLCB7XG4gIGFwaVZlcnNpb246IFwiMjAyMC0wOC0yN1wiLFxuICBhcHBJbmZvOiB7XG4gICAgbmFtZTogXCJJZ25ld3NcIixcbiAgICB2ZXJzaW9uLFxuICB9LFxufSlcbiJdLCJuYW1lcyI6WyJTdHJpcGUiLCJ2ZXJzaW9uIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/stripe.ts\n");

/***/ }),

/***/ "(api)/./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint","slicemachine":"start-slicemachine"},"dependencies":{"@prismicio/client":"5.1.1","@prismicio/next":"^1.4.0","@prismicio/react":"^2.7.3","@stripe/stripe-js":"^2.1.9","axios":"^1.5.1","faunadb":"^4.8.0","next":"12.2.2","next-auth":"^4.24.3","prismic-dom":"^2.2.7","react":"18.2.0","react-dom":"18.2.0","react-icons":"^4.11.0","sass":"^1.66.1","stripe":"^13.5.0"},"devDependencies":{"@slicemachine/adapter-next":"^0.3.22","@types/next-auth":"^3.15.0","@types/node":"^20.5.9","@types/prismic-dom":"^2.1.3","@types/react":"^18.2.21","slice-machine-ui":"^1.19.0","typescript":"5.2.2"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();