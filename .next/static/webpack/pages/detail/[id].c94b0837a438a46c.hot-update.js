"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail/[id]",{

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Detail = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), expanded = ref[0], setExpanded = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var handleChange = function(panel) {\n        return function(event, isExpanded) {\n            setExpanded(isExpanded ? panel : false);\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            paddingTop: \"66px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Lorem\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ID: \",\n                    props.data.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            props.data.data.map(function(e, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Accordion, {\n                    expanded: expanded === \"panel\" + i,\n                    onChange: handleChange(\"panel\" + i),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionSummary, {\n                            expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, void 0, void 0),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    sx: {\n                                        width: \"33%\",\n                                        flexShrink: 0\n                                    },\n                                    children: \"General settings\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    sx: {\n                                        color: \"text.secondary\"\n                                    },\n                                    children: \"I am an accordion\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionDetails, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                children: \"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Detail, \"tOeL7QHIzzq+/L4EwgX5WyEiuI0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Detail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFPakI7QUFDcUM7QUFDQTtBQUMzQjs7QUFDakMsSUFBTVEsTUFBTSxHQUFHLFNBQUNDLEtBQUssRUFBSzs7O0lBQ3hCLElBQWdDRixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBWmpELFFBWWlCLEdBQWlCQSxHQUFlLEdBQWhDLEVBWmpCLFdBWThCLEdBQUlBLEdBQWUsR0FBbkI7SUFFNUIsSUFBTUssTUFBTSxHQUFHWixzREFBUyxFQUFFO0lBQzFCLElBQU0sRUFBSSxHQUFLWSxNQUFNLENBQUNFLEtBQUssQ0FBbkJELEVBQUU7SUFFVixJQUFNRSxZQUFZLEdBQUcsU0FBQ0MsS0FBSztlQUFLLFNBQUNDLEtBQUssRUFBRUMsVUFBVSxFQUFLO1lBQ3JEUCxXQUFXLENBQUNPLFVBQVUsR0FBR0YsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO0tBQUE7SUFFRCxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxLQUFLLEVBQUU7WUFBRUMsVUFBVSxFQUFFLE1BQU07U0FBRTs7MEJBQ2hDLDhEQUFDQyxHQUFDOzBCQUFDLE9BQUs7Ozs7O3FCQUFJOzBCQUNaLDhEQUFDQSxHQUFDOztvQkFBQyxNQUFJO29CQUFDYixLQUFLLENBQUNjLElBQUksQ0FBQ1YsRUFBRTs7Ozs7O3FCQUFLO1lBQ3pCSixLQUFLLENBQUNjLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDO3FDQUN4Qiw4REFBQ3pCLG9EQUFTO29CQUNSUyxRQUFRLEVBQUVBLFFBQVEsS0FBSyxPQUFPLEdBQUdnQixDQUFDO29CQUNsQ0MsUUFBUSxFQUFFWixZQUFZLENBQUMsT0FBTyxHQUFHVyxDQUFDLENBQUM7O3NDQUVuQyw4REFBQ3ZCLDJEQUFnQjs0QkFBQ3lCLFVBQVUsZ0JBQUUsOERBQUN0QixzRUFBYyxvQ0FBRzs7OENBQzlDLDhEQUFDRixxREFBVTtvQ0FBQ3lCLEVBQUUsRUFBRTt3Q0FBRUMsS0FBSyxFQUFFLEtBQUs7d0NBQUVDLFVBQVUsRUFBRSxDQUFDO3FDQUFFOzhDQUFFLGtCQUVqRDs7Ozs7MENBQWE7OENBQ2IsOERBQUMzQixxREFBVTtvQ0FBQ3lCLEVBQUUsRUFBRTt3Q0FBRUcsS0FBSyxFQUFFLGdCQUFnQjtxQ0FBRTs4Q0FBRSxtQkFFN0M7Ozs7OzBDQUFhOzs7Ozs7a0NBQ0k7c0NBQ25CLDhEQUFDOUIsMkRBQWdCO3NDQUNmLDRFQUFDRSxxREFBVTswQ0FBQyxtSEFHWjs7Ozs7c0NBQWE7Ozs7O2tDQUNJOzs7Ozs7MEJBQ1Q7YUFDYixDQUFDOzs7Ozs7YUFDRSxDQUNOO0NBQ0g7R0FyQ0tJLE1BQU07O1FBR0tSLGtEQUFTOzs7QUFIcEJRLEtBQUFBLE1BQU07O0FBc0NaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1tpZF0uanM/ODI5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFjY29yZGlvbixcclxuICBBY2NvcmRpb25EZXRhaWxzLFxyXG4gIEFjY29yZGlvblN1bW1hcnksXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgRXhwYW5kTGVzc0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTGVzc1wiO1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBEZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQoaXNFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNjZweFwiIH19PlxyXG4gICAgICA8cD5Mb3JlbTwvcD5cclxuICAgICAgPHA+SUQ6IHtwcm9wcy5kYXRhLmlkfTwvcD5cclxuICAgICAge3Byb3BzLmRhdGEuZGF0YS5tYXAoKGUsIGkpID0+IChcclxuICAgICAgICA8QWNjb3JkaW9uXHJcbiAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWQgPT09IFwicGFuZWxcIiArIGl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFuZWxcIiArIGkpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IHdpZHRoOiBcIjMzJVwiLCBmbGV4U2hyaW5rOiAwIH19PlxyXG4gICAgICAgICAgICAgIEdlbmVyYWwgc2V0dGluZ3NcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH19PlxyXG4gICAgICAgICAgICAgIEkgYW0gYW4gYWNjb3JkaW9uXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICBOdWxsYSBmYWNpbGlzaS4gUGhhc2VsbHVzIHNvbGxpY2l0dWRpbiBudWxsYSBldCBxdWFtIG1hdHRpc1xyXG4gICAgICAgICAgICAgIGZldWdpYXQuIEFsaXF1YW0gZWdldCBtYXhpbXVzIGVzdCwgaWQgZGlnbmlzc2ltIHF1YW0uXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBhID0gY29udGV4dC5xdWVyeTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kZXRhaWwvYCArIGEuaWQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJBY2NvcmRpb24iLCJBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uU3VtbWFyeSIsIlR5cG9ncmFwaHkiLCJFeHBhbmRMZXNzSWNvbiIsIkV4cGFuZE1vcmVJY29uIiwidXNlU3RhdGUiLCJEZXRhaWwiLCJwcm9wcyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJldmVudCIsImlzRXhwYW5kZWQiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJwIiwiZGF0YSIsIm1hcCIsImUiLCJpIiwib25DaGFuZ2UiLCJleHBhbmRJY29uIiwic3giLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ })

});