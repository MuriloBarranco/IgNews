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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz9mNTY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/NjQ1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_api__WEBPACK_IMPORTED_MODULE_2__]);\n_services_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        }\n        if (session.activeSubscription) {\n            router.push(\"\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJS)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subscribeButton),\n        onClick: handleSubscribe,\n        children: \"Subscribe now\"\n    }, void 0, false, {\n        fileName: \"/Users/barranco/Desktop/IgNews/src/components/SubscribeButton/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBb0Q7QUFDWjtBQUNjO0FBQ2I7QUFDRjtBQU1oQyxTQUFTTSxlQUFlLENBQUMsRUFBRUMsT0FBTyxHQUF3QixFQUFFO0lBQ2pFLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEdBQUUsR0FBR1QsMkRBQVUsRUFBRTtJQUN0QyxNQUFNVSxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFFMUIsZUFBZU0sZUFBZSxHQUFHO1FBQy9CLElBQUksQ0FBQ0YsT0FBTyxFQUFFO1lBQ1pSLHVEQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2hCLE9BQU07U0FDUDtRQUVELElBQUlRLE9BQU8sQ0FBQ0csa0JBQWtCLEVBQUU7WUFDOUJGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNmLE9BQU07U0FDUDtRQUVELElBQUk7WUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTVosbURBQVEsQ0FBQyxZQUFZLENBQUM7WUFFN0MsTUFBTSxFQUFFYyxTQUFTLEdBQUUsR0FBR0YsUUFBUSxDQUFDTixJQUFJO1lBRW5DLE1BQU1TLE1BQU0sR0FBRyxNQUFNZCxnRUFBVyxFQUFFO1lBRWxDLE1BQU1jLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUM7Z0JBQUVGLFNBQVM7YUFBRSxDQUFDO1NBQy9DLENBQUMsT0FBT0csR0FBRyxFQUFFO1lBQ1pDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFPLENBQUM7U0FDbkI7S0FDRjtJQUVELHFCQUNFLDhEQUFDQyxRQUFNO1FBQ0xDLElBQUksRUFBQyxRQUFRO1FBQ2JDLFNBQVMsRUFBRXBCLDRFQUFzQjtRQUNqQ3NCLE9BQU8sRUFBRWYsZUFBZTtrQkFDekIsZUFFRDs7Ozs7WUFBUyxDQUNWO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4PzkwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCJcbmltcG9ydCB7IGdldFN0cmlwZUpTIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZS1qc1wiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5pbnRlcmZhY2UgU3Vic2NyaWJlQnV0dG9uUHJvcHMge1xuICBwcmljZUlkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZUJ1dHRvbih7IHByaWNlSWQgfTogU3Vic2NyaWJlQnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJzY3JpYmUoKSB7XG4gICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICBzaWduSW4oXCJnaXRodWJcIilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZXNzaW9uLmFjdGl2ZVN1YnNjcmlwdGlvbikge1xuICAgICAgcm91dGVyLnB1c2goXCJcIilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3N1YnNjcmliZVwiKVxuXG4gICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gcmVzcG9uc2UuZGF0YVxuXG4gICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBnZXRTdHJpcGVKUygpXG5cbiAgICAgIGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XG4gICAgICBvbkNsaWNrPXtoYW5kbGVTdWJzY3JpYmV9XG4gICAgPlxuICAgICAgU3Vic2NyaWJlIG5vd1xuICAgIDwvYnV0dG9uPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsImFwaSIsImdldFN0cmlwZUpTIiwic3R5bGVzIiwidXNlUm91dGVyIiwiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsImRhdGEiLCJzZXNzaW9uIiwicm91dGVyIiwiaGFuZGxlU3Vic2NyaWJlIiwiYWN0aXZlU3Vic2NyaXB0aW9uIiwicHVzaCIsInJlc3BvbnNlIiwicG9zdCIsInNlc3Npb25JZCIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzdWJzY3JpYmVCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_stripe__WEBPACK_IMPORTED_MODULE_2__, _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_3__]);\n([_services_stripe__WEBPACK_IMPORTED_MODULE_2__, _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Inicio | IgNews\"\n                }, void 0, false, {\n                    fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDD90\\uD83C\\uDFFB Hey, welcome\"\n                            }, void 0, false, {\n                                fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 28\n                                    }, this),\n                                    \" world\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 48\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_3__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"girl coding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/barranco/Desktop/IgNews/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getServerSideProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.prices.retrieve(\"price_1NoB4CIGThJQBt57Yw0q7bjT\");\n    const product = {\n        priceId: price.id,\n        // Salvar em centavos para facilitar na hora de formatar\n        amount: new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0QjtBQUVXO0FBQ0k7QUFDb0I7QUFTaEQsU0FBU0ksSUFBSSxDQUFDLEVBQUVDLE9BQU8sR0FBYSxFQUFFO0lBQ25ELHFCQUNFOzswQkFDRSw4REFBQ0wsa0RBQUk7MEJBQ0gsNEVBQUNNLE9BQUs7OEJBQUMsaUJBQWU7Ozs7O3dCQUFROzs7OztvQkFDekI7MEJBRVAsOERBQUNDLE1BQUk7Z0JBQUNDLFNBQVMsRUFBRVAsMkVBQXVCOztrQ0FDdEMsOERBQUNTLFNBQU87d0JBQUNGLFNBQVMsRUFBRVAsK0RBQVc7OzBDQUM3Qiw4REFBQ1csTUFBSTswQ0FBQyx1Q0FBZTs7Ozs7b0NBQU87MENBQzVCLDhEQUFDQyxJQUFFOztvQ0FBQyxpQkFDYTtrREFBQSw4REFBQ0QsTUFBSTtrREFBQyxPQUFLOzs7Ozs0Q0FBTztvQ0FBQSxRQUNuQzs7Ozs7O29DQUFLOzBDQUVMLDhEQUFDRSxHQUFDOztvQ0FBQyxxQ0FDa0M7a0RBQUEsOERBQUNDLElBQUU7Ozs7NENBQUc7a0RBQ3pDLDhEQUFDSCxNQUFJOzs0Q0FBQyxNQUFJOzRDQUFDUCxPQUFPLENBQUNXLE1BQU07NENBQUMsUUFBTTs7Ozs7OzRDQUFPOzs7Ozs7b0NBQ3JDOzBDQUNKLDhEQUFDYix3RUFBZTtnQ0FBQ2MsT0FBTyxFQUFFWixPQUFPLENBQUNZLE9BQU87Ozs7O29DQUFJOzs7Ozs7NEJBQ3JDO2tDQUVWLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUMsb0JBQW9CO3dCQUFDQyxHQUFHLEVBQUMsYUFBYTs7Ozs7NEJBQUc7Ozs7OztvQkFDN0M7O29CQUNOLENBQ0o7Q0FDRjtBQUVNLE1BQU1DLGtCQUFrQixHQUF1QixVQUFZO0lBQ2hFLE1BQU1DLEtBQUssR0FBRyxNQUFNcEIsb0VBQXNCLENBQUMsZ0NBQWdDLENBQUM7SUFFNUUsTUFBTUcsT0FBTyxHQUFHO1FBQ2RZLE9BQU8sRUFBRUssS0FBSyxDQUFDRyxFQUFFO1FBQ2pCLHdEQUF3RDtRQUN4RFQsTUFBTSxFQUFFLElBQUlVLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUNyQ0MsS0FBSyxFQUFFLFVBQVU7WUFDakJDLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLFdBQVcsR0FBRyxHQUFHLENBQUM7S0FDbkM7SUFFRCxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMM0IsT0FBTztTQUNSO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ob21lLm1vZHVsZS5zY3NzXCJcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdHJpcGVcIlxuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uXCJcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6IHtcbiAgICBwcmljZUlkOiBzdHJpbmdcbiAgICBhbW91bnQ6IG51bWJlclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0IH06IEhvbWVQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkluaWNpbyB8IElnTmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRDb250YWluZXJ9PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cbiAgICAgICAgICA8c3Bhbj7wn5aQ8J+PuyBIZXksIHdlbGNvbWU8L3NwYW4+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgTmV3cyBhYm91dCB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkXG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgR2V0IGFjY2VzcyB0byBhbGwgdGhlIHB1YmxpY2F0aW9ucyA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuPmZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRoPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uIHByaWNlSWQ9e3Byb2R1Y3QucHJpY2VJZH0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hdmF0YXIuc3ZnXCIgYWx0PVwiZ2lybCBjb2RpbmdcIiAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJpY2UgPSBhd2FpdCBzdHJpcGUucHJpY2VzLnJldHJpZXZlKFwicHJpY2VfMU5vQjRDSUdUaEpRQnQ1N1l3MHE3YmpUXCIpXG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICAvLyBTYWx2YXIgZW0gY2VudGF2b3MgcGFyYSBmYWNpbGl0YXIgbmEgaG9yYSBkZSBmb3JtYXRhclxuICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxuICAgIH0pLmZvcm1hdChwcmljZS51bml0X2Ftb3VudCAvIDEwMCksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0LFxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwic3RyaXBlIiwiU3Vic2NyaWJlQnV0dG9uIiwiSG9tZSIsInByb2R1Y3QiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250ZW50Q29udGFpbmVyIiwic2VjdGlvbiIsImhlcm8iLCJzcGFuIiwiaDEiLCJwIiwiYnIiLCJhbW91bnQiLCJwcmljZUlkIiwiaW1nIiwic3JjIiwiYWx0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"/api\"\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBRWxCLE1BQU1DLEdBQUcsR0FBR0Qsb0RBQVksQ0FBQztJQUM5QkcsT0FBTyxFQUFFLE1BQU07Q0FDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9zZXJ2aWNlcy9hcGkudHM/OTU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiL2FwaVwiLFxufSlcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.js":
/*!***********************************!*\
  !*** ./src/services/stripe-js.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJS\": () => (/* binding */ getStripeJS)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJS() {\n    const stripeJS = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51NoAw0IGThJQBt57L1Il6nyLhhJR244pY8Zut9ljlblex1PcfWYT0OQKJNAk52ShnflTcH48kjP3PymVrx7P4n6z00ZN8vq7R5\");\n    return stripeJS;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUV4QyxlQUFlQyxXQUFXLEdBQUc7SUFDaEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLDZEQUFVLENBQUNHLDZHQUF5QyxDQUFDO0lBRTVFLE9BQU9ELFFBQVE7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLmpzPzlhYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RyaXBlSlMoKSB7XG4gICAgY29uc3Qgc3RyaXBlSlMgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZKVxuXG4gICAgcmV0dXJuIHN0cmlwZUpTXG59Il0sIm5hbWVzIjpbImxvYWRTdHJpcGUiLCJnZXRTdHJpcGVKUyIsInN0cmlwZUpTIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe-js.js\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stripe__WEBPACK_IMPORTED_MODULE_0__]);\nstripe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"Ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQjtBQUNpQjtBQUVyQyxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsOENBQU0sQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtJQUMzREMsVUFBVSxFQUFFLFlBQVk7SUFDeEJDLE9BQU8sRUFBRTtRQUNQQyxJQUFJLEVBQUUsUUFBUTtRQUNkUCxPQUFPO0tBQ1I7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cz9hYjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4uLy4uL3BhY2thZ2UuanNvblwiXG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLCB7XG4gIGFwaVZlcnNpb246IFwiMjAyMC0wOC0yN1wiLFxuICBhcHBJbmZvOiB7XG4gICAgbmFtZTogXCJJZ25ld3NcIixcbiAgICB2ZXJzaW9uLFxuICB9LFxufSlcbiJdLCJuYW1lcyI6WyJTdHJpcGUiLCJ2ZXJzaW9uIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("stripe");;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint","slicemachine":"start-slicemachine"},"dependencies":{"@prismicio/client":"5.1.1","@prismicio/next":"^1.4.0","@prismicio/react":"^2.7.3","@stripe/stripe-js":"^2.1.9","axios":"^1.5.1","faunadb":"^4.8.0","next":"12.2.2","next-auth":"^4.24.3","prismic-dom":"^2.2.7","react":"18.2.0","react-dom":"18.2.0","react-icons":"^4.11.0","sass":"^1.66.1","stripe":"^13.5.0"},"devDependencies":{"@slicemachine/adapter-next":"^0.3.22","@types/next-auth":"^3.15.0","@types/node":"^20.5.9","@types/prismic-dom":"^2.1.3","@types/react":"^18.2.21","slice-machine-ui":"^1.19.0","typescript":"5.2.2"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();