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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stripe */ \"(api)/./src/services/stripe.ts\");\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fauna */ \"(api)/./src/services/fauna.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_stripe__WEBPACK_IMPORTED_MODULE_2__]);\n_services_stripe__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n            req\n        }) ////////////\n        ;\n        const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"user_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))));\n        let customerId = user.data.stripe_customer_id;\n        if (!customerId) {\n            const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.customers.create({\n                email: session.user.email\n            });\n            await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), user.ref.id), {\n                data: {\n                    stripe_customer_id: stripeCustomer.id\n                }\n            }));\n            customerId = stripeCustomer.id;\n        }\n        const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.checkout.sessions.create({\n            customer: customerId,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1NoB4CIGThJQBt57Yw0q7bjT\",\n                    quantity: 1\n                }\n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return res.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        // Se nao for uma requisicao post\n        res.setHeader(\"Allow\", \"POST\");\n        // Devolver um erro com codigo 405\n        res.status(405).end(\"Method not allowed\");\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ1E7QUFFRTtBQUNGO0FBVzVDLGlFQUFlLE9BQU9LLEtBQXFCQztJQUN6QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxVQUFVLE1BQU1OLDJEQUFVQSxDQUFDO1lBQUVHO1FBQUksR0FBRSxZQUFZOztRQUVyRCxNQUFNSSxPQUFPLE1BQU1MLGtEQUFLQSxDQUFDSixLQUFLLENBQzVCQywwQ0FBQ0EsQ0FBQ1MsR0FBRyxDQUFDVCwwQ0FBQ0EsQ0FBQ1UsS0FBSyxDQUFDViwwQ0FBQ0EsQ0FBQ1csS0FBSyxDQUFDLGtCQUFrQlgsMENBQUNBLENBQUNZLFFBQVEsQ0FBQ0wsUUFBUUMsSUFBSSxDQUFDSyxLQUFLO1FBR3ZFLElBQUlDLGFBQWFOLEtBQUtPLElBQUksQ0FBQ0Msa0JBQWtCO1FBRTdDLElBQUksQ0FBQ0YsWUFBWTtZQUNmLE1BQU1HLGlCQUFpQixNQUFNZixvREFBTUEsQ0FBQ2dCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO2dCQUNuRE4sT0FBT04sUUFBUUMsSUFBSSxDQUFDSyxLQUFLO1lBRTNCO1lBQ0EsTUFBTVYsa0RBQUtBLENBQUNKLEtBQUssQ0FDZkMsMENBQUNBLENBQUNvQixNQUFNLENBQUNwQiwwQ0FBQ0EsQ0FBQ3FCLEdBQUcsQ0FBQ3JCLDBDQUFDQSxDQUFDc0IsVUFBVSxDQUFDLFVBQVVkLEtBQUtlLEdBQUcsQ0FBQ0MsRUFBRSxHQUFHO2dCQUNsRFQsTUFBTTtvQkFDSkMsb0JBQW9CQyxlQUFlTyxFQUFFO2dCQUN2QztZQUNGO1lBR0ZWLGFBQWFHLGVBQWVPLEVBQUU7UUFDaEM7UUFFQSxNQUFNQyx3QkFBd0IsTUFBTXZCLG9EQUFNQSxDQUFDd0IsUUFBUSxDQUFDQyxRQUFRLENBQUNSLE1BQU0sQ0FBQztZQUNsRVMsVUFBVWQ7WUFDVmUsc0JBQXNCO2dCQUFDO2FBQU87WUFDOUJDLDRCQUE0QjtZQUM1QkMsWUFBWTtnQkFBQztvQkFBRUMsT0FBTztvQkFBa0NDLFVBQVU7Z0JBQUU7YUFBRTtZQUN0RUMsTUFBTTtZQUNOQyx1QkFBdUI7WUFDdkJDLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0Msa0JBQWtCO1lBQzNDQyxZQUFZSCxRQUFRQyxHQUFHLENBQUNHLGlCQUFpQjtRQUMzQztRQUVBLE9BQU9wQyxJQUFJcUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxXQUFXbkIsc0JBQXNCRCxFQUFFO1FBQUM7SUFDcEUsT0FBTztRQUNMLGlDQUFpQztRQUNqQ25CLElBQUl3QyxTQUFTLENBQUMsU0FBUztRQUN2QixrQ0FBa0M7UUFDbEN4QyxJQUFJcUMsTUFBTSxDQUFDLEtBQUtJLEdBQUcsQ0FBQztJQUN0QjtBQUNGLEdBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz8wNThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSBcImZhdW5hZGJcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlXCJcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ZhdW5hXCJcblxudHlwZSBVc2VyID0ge1xuICByZWY6IHtcbiAgICBpZDogc3RyaW5nXG4gIH1cbiAgZGF0YToge1xuICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaW5nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZmF1bmEucXVlcnk8VXNlcj4oXG4gICAgICBxLkdldChxLk1hdGNoKHEuSW5kZXgoXCJ1c2VyX2J5X2VtYWlsXCIpLCBxLkNhc2Vmb2xkKHNlc3Npb24udXNlci5lbWFpbCkpKVxuICAgIClcblxuICAgIGxldCBjdXN0b21lcklkID0gdXNlci5kYXRhLnN0cmlwZV9jdXN0b21lcl9pZFxuXG4gICAgaWYgKCFjdXN0b21lcklkKSB7XG4gICAgICBjb25zdCBzdHJpcGVDdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcbiAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCxcbiAgICAgICAgLy9tZXRhZGF0YVxuICAgICAgfSlcbiAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICBxLlVwZGF0ZShxLlJlZihxLkNvbGxlY3Rpb24oXCJ1c2Vyc1wiKSwgdXNlci5yZWYuaWQpLCB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc3RyaXBlX2N1c3RvbWVyX2lkOiBzdHJpcGVDdXN0b21lci5pZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBjdXN0b21lcklkID0gc3RyaXBlQ3VzdG9tZXIuaWRcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpcGVDaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgIGN1c3RvbWVyOiBjdXN0b21lcklkLFxuICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFtcImNhcmRcIl0sXG4gICAgICBiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbjogXCJyZXF1aXJlZFwiLFxuICAgICAgbGluZV9pdGVtczogW3sgcHJpY2U6IFwicHJpY2VfMU5vQjRDSUdUaEpRQnQ1N1l3MHE3YmpUXCIsIHF1YW50aXR5OiAxIH1dLFxuICAgICAgbW9kZTogXCJzdWJzY3JpcHRpb25cIixcbiAgICAgIGFsbG93X3Byb21vdGlvbl9jb2RlczogdHJ1ZSxcbiAgICAgIHN1Y2Nlc3NfdXJsOiBwcm9jZXNzLmVudi5TVFJJUEVfU1VDQ0VTU19VUkwsXG4gICAgICBjYW5jZWxfdXJsOiBwcm9jZXNzLmVudi5TVFJJUEVfQ0FOQ0VMX1VSTCxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzdHJpcGVDaGVja291dFNlc3Npb24uaWQgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBTZSBuYW8gZm9yIHVtYSByZXF1aXNpY2FvIHBvc3RcbiAgICByZXMuc2V0SGVhZGVyKFwiQWxsb3dcIiwgXCJQT1NUXCIpXG4gICAgLy8gRGV2b2x2ZXIgdW0gZXJybyBjb20gY29kaWdvIDQwNVxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoXCJNZXRob2Qgbm90IGFsbG93ZWRcIilcbiAgfVxufVxuIl0sIm5hbWVzIjpbInF1ZXJ5IiwicSIsImdldFNlc3Npb24iLCJzdHJpcGUiLCJmYXVuYSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJ1c2VyIiwiR2V0IiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiZW1haWwiLCJjdXN0b21lcklkIiwiZGF0YSIsInN0cmlwZV9jdXN0b21lcl9pZCIsInN0cmlwZUN1c3RvbWVyIiwiY3VzdG9tZXJzIiwiY3JlYXRlIiwiVXBkYXRlIiwiUmVmIiwiQ29sbGVjdGlvbiIsInJlZiIsImlkIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImN1c3RvbWVyIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TVUNDRVNTX1VSTCIsImNhbmNlbF91cmwiLCJTVFJJUEVfQ0FOQ0VMX1VSTCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

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