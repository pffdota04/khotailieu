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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_GppGood__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/GppGood */ \"./node_modules/@mui/icons-material/GppGood.js\");\n/* harmony import */ var _mui_icons_material_GppBad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/GppBad */ \"./node_modules/@mui/icons-material/GppBad.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Detail = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), expanded = ref[0], setExpanded = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var handleChange = function(panel) {\n        return function(event, isExpanded) {\n            setExpanded(isExpanded ? panel : false);\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            paddingTop: \"66px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Lorem\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ID: \",\n                    props.data.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            props.data.data.map(function(e, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Accordion, {\n                    expanded: expanded === \"panel\" + i,\n                    onChange: handleChange(\"panel\" + i),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionSummary, {\n                            expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, void 0, void 0),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    sx: {\n                                        width: \"33%\",\n                                        flexShrink: 0\n                                    },\n                                    children: e.type\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    sx: {\n                                        color: \"text.secondary\"\n                                    },\n                                    children: [\n                                        \"Tr\\u1EA1ng th\\xe1i:\",\n                                        \" \",\n                                        e.status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_GppGood__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            color: \"primary\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 40,\n                                            columnNumber: 17\n                                        }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_GppBad__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            color: \"danger\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionDetails, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                children: e.desc\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Detail, \"tOeL7QHIzzq+/L4EwgX5WyEiuI0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Detail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQU9qQjtBQUNxQztBQUNBO0FBQzNCO0FBQ3FCO0FBQ0Y7O0FBQ3BELElBQU1VLE1BQU0sR0FBRyxTQUFDQyxLQUFLLEVBQUs7OztJQUN4QixJQUFnQ0osR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQWRqRCxRQWNpQixHQUFpQkEsR0FBZSxHQUFoQyxFQWRqQixXQWM4QixHQUFJQSxHQUFlLEdBQW5CO0lBRTVCLElBQU1PLE1BQU0sR0FBR2Qsc0RBQVMsRUFBRTtJQUMxQixJQUFNLEVBQUksR0FBS2MsTUFBTSxDQUFDRSxLQUFLLENBQW5CRCxFQUFFO0lBRVYsSUFBTUUsWUFBWSxHQUFHLFNBQUNDLEtBQUs7ZUFBSyxTQUFDQyxLQUFLLEVBQUVDLFVBQVUsRUFBSztZQUNyRFAsV0FBVyxDQUFDTyxVQUFVLEdBQUdGLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztTQUN6QztLQUFBO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsS0FBSyxFQUFFO1lBQUVDLFVBQVUsRUFBRSxNQUFNO1NBQUU7OzBCQUNoQyw4REFBQ0MsR0FBQzswQkFBQyxPQUFLOzs7OztxQkFBSTswQkFDWiw4REFBQ0EsR0FBQzs7b0JBQUMsTUFBSTtvQkFBQ2IsS0FBSyxDQUFDYyxJQUFJLENBQUNWLEVBQUU7Ozs7OztxQkFBSztZQUN6QkosS0FBSyxDQUFDYyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLENBQUMsRUFBRUMsQ0FBQztxQ0FDeEIsOERBQUMzQixvREFBUztvQkFDUlcsUUFBUSxFQUFFQSxRQUFRLEtBQUssT0FBTyxHQUFHZ0IsQ0FBQztvQkFDbENDLFFBQVEsRUFBRVosWUFBWSxDQUFDLE9BQU8sR0FBR1csQ0FBQyxDQUFDOztzQ0FFbkMsOERBQUN6QiwyREFBZ0I7NEJBQUMyQixVQUFVLGdCQUFFLDhEQUFDeEIsc0VBQWMsb0NBQUc7OzhDQUM5Qyw4REFBQ0YscURBQVU7b0NBQUMyQixFQUFFLEVBQUU7d0NBQUVDLEtBQUssRUFBRSxLQUFLO3dDQUFFQyxVQUFVLEVBQUUsQ0FBQztxQ0FBRTs4Q0FDNUNOLENBQUMsQ0FBQ08sSUFBSTs7Ozs7MENBQ0k7OENBQ2IsOERBQUM5QixxREFBVTtvQ0FBQzJCLEVBQUUsRUFBRTt3Q0FBRUksS0FBSyxFQUFFLGdCQUFnQjtxQ0FBRTs7d0NBQUUscUJBQ2hDO3dDQUFDLEdBQUc7d0NBQ2RSLENBQUMsQ0FBQ1MsTUFBTSxpQkFDUCw4REFBQzVCLG1FQUFXOzRDQUFDMkIsS0FBSyxFQUFDLFNBQVM7Ozs7O2tEQUFHLGlCQUUvQiw4REFBQzFCLGtFQUFVOzRDQUFDMEIsS0FBSyxFQUFDLFFBQVE7Ozs7O2tEQUFHOzs7Ozs7MENBRXBCOzs7Ozs7a0NBQ0k7c0NBQ25CLDhEQUFDakMsMkRBQWdCO3NDQUNmLDRFQUFDRSxxREFBVTswQ0FDUnVCLENBQUMsQ0FBQ1UsSUFBSTs7Ozs7c0NBSUk7Ozs7O2tDQUNJOzs7Ozs7MEJBQ1Q7YUFDYixDQUFDOzs7Ozs7YUFDRSxDQUNOO0NBQ0g7R0E1Q0szQixNQUFNOztRQUdLVixrREFBUzs7O0FBSHBCVSxLQUFBQSxNQUFNOztBQTZDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RldGFpbC9baWRdLmpzPzgyOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBBY2NvcmRpb24sXHJcbiAgQWNjb3JkaW9uRGV0YWlscyxcclxuICBBY2NvcmRpb25TdW1tYXJ5LFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEV4cGFuZExlc3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZExlc3NcIjtcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0V4cGFuZE1vcmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdwcEdvb2RJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dwcEdvb2RcIjtcclxuaW1wb3J0IEdwcEJhZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvR3BwQmFkXCI7XHJcbmNvbnN0IERldGFpbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwYW5lbCkgPT4gKGV2ZW50LCBpc0V4cGFuZGVkKSA9PiB7XHJcbiAgICBzZXRFeHBhbmRlZChpc0V4cGFuZGVkID8gcGFuZWwgOiBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI2NnB4XCIgfX0+XHJcbiAgICAgIDxwPkxvcmVtPC9wPlxyXG4gICAgICA8cD5JRDoge3Byb3BzLmRhdGEuaWR9PC9wPlxyXG4gICAgICB7cHJvcHMuZGF0YS5kYXRhLm1hcCgoZSwgaSkgPT4gKFxyXG4gICAgICAgIDxBY2NvcmRpb25cclxuICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZCA9PT0gXCJwYW5lbFwiICsgaX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJwYW5lbFwiICsgaSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgd2lkdGg6IFwiMzMlXCIsIGZsZXhTaHJpbms6IDAgfX0+XHJcbiAgICAgICAgICAgICAge2UudHlwZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogXCJ0ZXh0LnNlY29uZGFyeVwiIH19PlxyXG4gICAgICAgICAgICAgIFRy4bqhbmcgdGjDoWk6e1wiIFwifVxyXG4gICAgICAgICAgICAgIHtlLnN0YXR1cyA/IChcclxuICAgICAgICAgICAgICAgIDxHcHBHb29kSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8R3BwQmFkSWNvbiBjb2xvcj1cImRhbmdlclwiIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIHtlLmRlc2N9XHJcbiAgICAgICAgICAgICAgey8qIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2UubGlua30+XHJcbiAgICAgICAgICAgICAgICBDbGlja1xyXG4gICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICA8L0FjY29yZGlvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBhID0gY29udGV4dC5xdWVyeTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9kZXRhaWwvYCArIGEuaWQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJBY2NvcmRpb24iLCJBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uU3VtbWFyeSIsIlR5cG9ncmFwaHkiLCJFeHBhbmRMZXNzSWNvbiIsIkV4cGFuZE1vcmVJY29uIiwidXNlU3RhdGUiLCJHcHBHb29kSWNvbiIsIkdwcEJhZEljb24iLCJEZXRhaWwiLCJwcm9wcyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiaGFuZGxlQ2hhbmdlIiwicGFuZWwiLCJldmVudCIsImlzRXhwYW5kZWQiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJwIiwiZGF0YSIsIm1hcCIsImUiLCJpIiwib25DaGFuZ2UiLCJleHBhbmRJY29uIiwic3giLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0eXBlIiwiY29sb3IiLCJzdGF0dXMiLCJkZXNjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ })

});