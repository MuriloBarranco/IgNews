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

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("stripe");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsubscribe&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fsubscribe.ts&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsubscribe&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fsubscribe.ts&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_subscribe_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/subscribe.ts */ \"(api)/./src/pages/api/subscribe.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_pages_api_subscribe_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_src_pages_api_subscribe_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_subscribe_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_subscribe_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/subscribe\",\n        pathname: \"/api/subscribe\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_subscribe_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnN1YnNjcmliZSZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyUyRnBhZ2VzJTJGYXBpJTJGc3Vic2NyaWJlLnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3lEO0FBQ3pEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLz9jZGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50c1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3N1YnNjcmliZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N1YnNjcmliZVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsubscribe&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fsubscribe.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fauna */ \"(api)/./src/services/fauna.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_stripe__WEBPACK_IMPORTED_MODULE_2__]);\n_services_stripe__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n            req\n        });\n        const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))));\n        let customerId = user.data.stripe_customer_id;\n        if (!customerId) {\n            const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.customers.create({\n                email: session.user.email\n            });\n            await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), user.ref.id), {\n                data: {\n                    stripe_customer_id: stripeCustomer.id\n                }\n            }));\n            customerId = stripeCustomer.id;\n        }\n        const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.checkout.sessions.create({\n            customer: customerId,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1NoB4CIGThJQBt57Yw0q7bjT\",\n                    quantity: 1\n                }\n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return res.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        // Se nao for uma requisicao post\n        res.setHeader(\"Allow\", \"POST\");\n        // Devolver um erro com codigo 405\n        res.status(405).end(\"Method not allowed\");\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ1E7QUFFRTtBQUNGO0FBVzVDLGlFQUFlLE9BQU9LLEtBQXFCQztJQUN6QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxVQUFVLE1BQU1OLDJEQUFVQSxDQUFDO1lBQUVHO1FBQUk7UUFFdkMsTUFBTUksT0FBTyxNQUFNTCxrREFBS0EsQ0FBQ0osS0FBSyxDQUM1QkMsMENBQUNBLENBQUNTLEdBQUcsQ0FBQ1QsMENBQUNBLENBQUNVLEtBQUssQ0FBQ1YsMENBQUNBLENBQUNXLEtBQUssQ0FBQyxrQkFBa0JYLDBDQUFDQSxDQUFDWSxRQUFRLENBQUNMLFFBQVFDLElBQUksQ0FBQ0ssS0FBSztRQUd2RSxJQUFJQyxhQUFhTixLQUFLTyxJQUFJLENBQUNDLGtCQUFrQjtRQUU3QyxJQUFJLENBQUNGLFlBQVk7WUFDZixNQUFNRyxpQkFBaUIsTUFBTWYsb0RBQU1BLENBQUNnQixTQUFTLENBQUNDLE1BQU0sQ0FBQztnQkFDbkROLE9BQU9OLFFBQVFDLElBQUksQ0FBQ0ssS0FBSztZQUUzQjtZQUNBLE1BQU1WLGtEQUFLQSxDQUFDSixLQUFLLENBQ2ZDLDBDQUFDQSxDQUFDb0IsTUFBTSxDQUFDcEIsMENBQUNBLENBQUNxQixHQUFHLENBQUNyQiwwQ0FBQ0EsQ0FBQ3NCLFVBQVUsQ0FBQyxVQUFVZCxLQUFLZSxHQUFHLENBQUNDLEVBQUUsR0FBRztnQkFDbERULE1BQU07b0JBQ0pDLG9CQUFvQkMsZUFBZU8sRUFBRTtnQkFDdkM7WUFDRjtZQUdGVixhQUFhRyxlQUFlTyxFQUFFO1FBQ2hDO1FBRUEsTUFBTUMsd0JBQXdCLE1BQU12QixvREFBTUEsQ0FBQ3dCLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDUixNQUFNLENBQUM7WUFDbEVTLFVBQVVkO1lBQ1ZlLHNCQUFzQjtnQkFBQzthQUFPO1lBQzlCQyw0QkFBNEI7WUFDNUJDLFlBQVk7Z0JBQUM7b0JBQUVDLE9BQU87b0JBQWtDQyxVQUFVO2dCQUFFO2FBQUU7WUFDdEVDLE1BQU07WUFDTkMsdUJBQXVCO1lBQ3ZCQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLGtCQUFrQjtZQUMzQ0MsWUFBWUgsUUFBUUMsR0FBRyxDQUFDRyxpQkFBaUI7UUFDM0M7UUFFQSxPQUFPcEMsSUFBSXFDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsV0FBV25CLHNCQUFzQkQsRUFBRTtRQUFDO0lBQ3BFLE9BQU87UUFDTCxpQ0FBaUM7UUFDakNuQixJQUFJd0MsU0FBUyxDQUFDLFNBQVM7UUFDdkIsa0NBQWtDO1FBQ2xDeEMsSUFBSXFDLE1BQU0sQ0FBQyxLQUFLSSxHQUFHLENBQUM7SUFDdEI7QUFDRixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9zdWJzY3JpYmUudHM/MDU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gXCJmYXVuYWRiXCJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcblxuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZVwiXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mYXVuYVwiXG5cbnR5cGUgVXNlciA9IHtcbiAgcmVmOiB7XG4gICAgaWQ6IHN0cmluZ1xuICB9XG4gIGRhdGE6IHtcbiAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmluZ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGZhdW5hLnF1ZXJ5PFVzZXI+KFxuICAgICAgcS5HZXQocS5NYXRjaChxLkluZGV4KFwidXNlcl9ieV9lbWFpbFwiKSwgcS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpKSlcbiAgICApXG5cbiAgICBsZXQgY3VzdG9tZXJJZCA9IHVzZXIuZGF0YS5zdHJpcGVfY3VzdG9tZXJfaWRcblxuICAgIGlmICghY3VzdG9tZXJJZCkge1xuICAgICAgY29uc3Qgc3RyaXBlQ3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmNyZWF0ZSh7XG4gICAgICAgIGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwsXG4gICAgICAgIC8vbWV0YWRhdGFcbiAgICAgIH0pXG4gICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgcS5VcGRhdGUocS5SZWYocS5Db2xsZWN0aW9uKFwidXNlcnNcIiksIHVzZXIucmVmLmlkKSwge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaXBlQ3VzdG9tZXIuaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgY3VzdG9tZXJJZCA9IHN0cmlwZUN1c3RvbWVyLmlkXG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaXBlQ2hlY2tvdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICBjdXN0b21lcjogY3VzdG9tZXJJZCxcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxuICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246IFwicmVxdWlyZWRcIixcbiAgICAgIGxpbmVfaXRlbXM6IFt7IHByaWNlOiBcInByaWNlXzFOb0I0Q0lHVGhKUUJ0NTdZdzBxN2JqVFwiLCBxdWFudGl0eTogMSB9XSxcbiAgICAgIG1vZGU6IFwic3Vic2NyaXB0aW9uXCIsXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXG4gICAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX1NVQ0NFU1NfVVJMLFxuICAgICAgY2FuY2VsX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX0NBTkNFTF9VUkwsXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNlc3Npb25JZDogc3RyaXBlQ2hlY2tvdXRTZXNzaW9uLmlkIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gU2UgbmFvIGZvciB1bWEgcmVxdWlzaWNhbyBwb3N0XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFwiUE9TVFwiKVxuICAgIC8vIERldm9sdmVyIHVtIGVycm8gY29tIGNvZGlnbyA0MDVcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJxdWVyeSIsInEiLCJnZXRTZXNzaW9uIiwic3RyaXBlIiwiZmF1bmEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXNzaW9uIiwidXNlciIsIkdldCIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsImVtYWlsIiwiY3VzdG9tZXJJZCIsImRhdGEiLCJzdHJpcGVfY3VzdG9tZXJfaWQiLCJzdHJpcGVDdXN0b21lciIsImN1c3RvbWVycyIsImNyZWF0ZSIsIlVwZGF0ZSIsIlJlZiIsIkNvbGxlY3Rpb24iLCJyZWYiLCJpZCIsInN0cmlwZUNoZWNrb3V0U2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjdXN0b21lciIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsIm1vZGUiLCJhbGxvd19wcm9tb3Rpb25fY29kZXMiLCJzdWNjZXNzX3VybCIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU1VDQ0VTU19VUkwiLCJjYW5jZWxfdXJsIiwiU1RSSVBFX0NBTkNFTF9VUkwiLCJzdGF0dXMiLCJqc29uIiwic2Vzc2lvbklkIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "(api)/./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fauna: () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvZmF1bmEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRXhCLE1BQU1DLFFBQVEsSUFBSUQsMkNBQU1BLENBQUM7SUFDNUJFLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL2ZhdW5hLnRzPzMyM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50fSBmcm9tICdmYXVuYWRiJ1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZXG59KSJdLCJuYW1lcyI6WyJDbGllbnQiLCJmYXVuYSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/services/fauna.ts\n");

/***/ }),

/***/ "(api)/./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stripe: () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"(api)/./package.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"Ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQjtBQUNpQjtBQUVyQyxNQUFNRSxTQUFTLElBQUlGLDhDQUFNQSxDQUFDRyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtJQUMzREMsWUFBWTtJQUNaQyxTQUFTO1FBQ1BDLE1BQU07UUFDTlAsT0FBT0Esb0RBQUFBO0lBQ1Q7QUFDRixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cz9hYjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4uLy4uL3BhY2thZ2UuanNvblwiXG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLCB7XG4gIGFwaVZlcnNpb246IFwiMjAyMC0wOC0yN1wiLFxuICBhcHBJbmZvOiB7XG4gICAgbmFtZTogXCJJZ25ld3NcIixcbiAgICB2ZXJzaW9uLFxuICB9LFxufSlcbiJdLCJuYW1lcyI6WyJTdHJpcGUiLCJ2ZXJzaW9uIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/services/stripe.ts\n");

/***/ }),

/***/ "(api)/./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^2.1.9","axios":"^1.5.1","faunadb":"^4.8.0","next":"^13.5.6","next-auth":"^4.24.3","react":"18.2.0","react-dom":"18.2.0","react-icons":"^4.11.0","sass":"^1.66.1","stripe":"^13.5.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^20.5.9","@types/react":"^18.2.21","typescript":"5.2.2"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fsubscribe&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fsubscribe.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();