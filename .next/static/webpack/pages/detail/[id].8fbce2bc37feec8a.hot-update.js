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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"./node_modules/@mui/icons-material/ExpandMore.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_GppGood__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/GppGood */ \"./node_modules/@mui/icons-material/GppGood.js\");\n/* harmony import */ var _mui_icons_material_GppBad__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/GppBad */ \"./node_modules/@mui/icons-material/GppBad.js\");\n/* harmony import */ var _mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Link */ \"./node_modules/@mui/icons-material/Link.js\");\n/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/YouTube */ \"./node_modules/@mui/icons-material/YouTube.js\");\n/* harmony import */ var _mui_icons_material_AddToDrive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/AddToDrive */ \"./node_modules/@mui/icons-material/AddToDrive.js\");\n/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/GitHub */ \"./node_modules/@mui/icons-material/GitHub.js\");\n/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Share */ \"./node_modules/@mui/icons-material/Share.js\");\n/* harmony import */ var _components_Chip_Chip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Chip/Chip */ \"./components/Chip/Chip.jsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Detail = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), expanded = ref[0], setExpanded = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var handleChange = function(panel) {\n        return function(event, isExpanded) {\n            setExpanded(isExpanded ? panel : false);\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            paddingTop: \"66px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: props.info.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: props.info.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                    variant: \"body2\",\n                    children: [\n                        \"Bao g\\u1ED3m:\",\n                        \" \",\n                        props.info.include.map(function(e) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chip_Chip__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                type: e,\n                                sx: {\n                                    m: \"1px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, _this1);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"ID: \",\n                        props.data.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                props.data.data.map(function(e, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Accordion, {\n                        expanded: expanded === \"panel\" + i,\n                        onChange: handleChange(\"panel\" + i),\n                        sx: _objectSpread({}, expanded === \"panel\" + i && {\n                            backgroundColor: \"grey.main\"\n                        }),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.AccordionSummary, {\n                                expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, void 0, void 0),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                        sx: {\n                                            width: \"33%\",\n                                            flexShrink: 0\n                                        },\n                                        children: e.type == \"drive\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddToDrive__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, _this1) : e.type == \"youtube\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 58,\n                                            columnNumber: 19\n                                        }, _this1) : e.type == \"github\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                        sx: {\n                                            color: \"text.secondary\"\n                                        },\n                                        children: [\n                                            \"Tr\\u1EA1ng th\\xe1i:\",\n                                            \" \",\n                                            e.status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_GppGood__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                color: \"primary\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                                lineNumber: 68,\n                                                columnNumber: 19\n                                            }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_GppBad__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                color: \"danger\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.AccordionDetails, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                                    direction: \"row\",\n                                    justifyContent: \"space-around\",\n                                    alignItems: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            children: [\n                                                \"M\\xf4 t\\u1EA3: \",\n                                                e.desc\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            children: [\n                                                \"Link:\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    target: \"_blank\",\n                                                    href: e.link,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                                        variant: \"contained\",\n                                                        children: [\n                                                            \"Click here \",\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                                                lineNumber: 85,\n                                                                columnNumber: 34\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 21\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 19\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(Detail, \"tOeL7QHIzzq+/L4EwgX5WyEiuI0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Detail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxFQUFFLGdCQUFnQjt5Q0FBRTs7NENBQUUscUJBQ2hDOzRDQUFJLEdBQUc7NENBQ2RYLENBQUYsQ0FBQ1ksTUFBTSxpQkFDUCw4REFBQ3hDLG9FQUFXO2dEQUFDdUMsS0FBSyxFQUFDLFNBQVM7Ozs7O3NEQUFHLGlCQUUvQiw4REFBQ3RDLG1FQUFVO2dEQUFDc0MsS0FBSyxFQUFDLFFBQVE7Ozs7O3NEQUFHOzs7Ozs7OENBRXBCOzs7Ozs7c0NBQ0k7MENBQ25CLDhEQUFDaEQsMkRBQWdCOzBDQUNmLDRFQUFDSSxnREFBSztvQ0FDSjhDLFNBQVMsRUFBQyxLQUFLO29DQUNmQyxjQUFjLEVBQUMsY0FBYztvQ0FDN0JDLFVBQVUsRUFBQyxRQUFROztzREFFbkIsOERBQUMvQyxxREFBVTs7Z0RBQUMsaUJBQU87Z0RBQUNnQyxDQUFDLENBQUNnQixJQUFJOzs7Ozs7a0RBQWM7c0RBQ3hDLDhEQUFDaEQscURBQVU7O2dEQUFDLE9BRVY7OERBQUEsOERBQUNpRCxHQUFDO29EQUFDQyxNQUFNLEVBQUMsUUFBUTtvREFBQ0MsSUFBSSxFQUFFbkIsQ0FBQyxDQUFDb0IsSUFBSTs4REFDN0IsNEVBQUN2RCxpREFBTTt3REFBQ2dDLE9BQU8sRUFBQyxXQUFXOzs0REFBQyxhQUNmOzBFQUFBLDhEQUFDdkIsaUVBQVE7Ozs7c0VBQUc7Ozs7Ozs4REFDaEI7Ozs7OzBEQUNQOzs7Ozs7a0RBQ087Ozs7OzswQ0FDUDs7Ozs7c0NBQ1M7Ozs7Ozs4QkFDVDtpQkFDYixDQUFDOzs7Ozs7aUJBQ1E7Ozs7O2FBQ1IsQ0FDTjtDQUNIO0dBekVLTSxNQUFNOztRQUdLbkIsa0RBQVM7OztBQUhwQm1CLEtBQUFBLE1BQU07O0FBMEVaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1tpZF0uanM/ODI5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEFjY29yZGlvbixcclxuICBBY2NvcmRpb25EZXRhaWxzLFxyXG4gIEFjY29yZGlvblN1bW1hcnksXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBTdGFjayxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBFeHBhbmRMZXNzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRMZXNzXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHcHBHb29kSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9HcHBHb29kXCI7XHJcbmltcG9ydCBHcHBCYWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dwcEJhZFwiO1xyXG5pbXBvcnQgTGlua0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTGlua1wiO1xyXG5pbXBvcnQgWW91VHViZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvWW91VHViZVwiO1xyXG5pbXBvcnQgQWRkVG9Ecml2ZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkVG9Ecml2ZVwiO1xyXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9HaXRIdWJcIjtcclxuaW1wb3J0IFNoYXJlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TaGFyZVwiO1xyXG5pbXBvcnQgTXlDaGlwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NoaXAvQ2hpcFwiO1xyXG5jb25zdCBEZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQoaXNFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNjZweFwiIH19PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxwPntwcm9wcy5pbmZvLm5hbWV9PC9wPlxyXG4gICAgICAgIDxwPntwcm9wcy5pbmZvLm5hbWV9PC9wPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgQmFvIGfhu5NtOntcIiBcIn1cclxuICAgICAgICAgIHtwcm9wcy5pbmZvLmluY2x1ZGUubWFwKChlKSA9PiAoXHJcbiAgICAgICAgICAgIDxNeUNoaXAgdHlwZT17ZX0gc3g9e3sgbTogXCIxcHhcIiB9fSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxwPklEOiB7cHJvcHMuZGF0YS5pZH08L3A+XHJcbiAgICAgICAge3Byb3BzLmRhdGEuZGF0YS5tYXAoKGUsIGkpID0+IChcclxuICAgICAgICAgIDxBY2NvcmRpb25cclxuICAgICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkID09PSBcInBhbmVsXCIgKyBpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFuZWxcIiArIGkpfVxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIC4uLihleHBhbmRlZCA9PT0gXCJwYW5lbFwiICsgaSAmJiB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5Lm1haW5cIiB9KSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyB3aWR0aDogXCIzMyVcIiwgZmxleFNocmluazogMCB9fT5cclxuICAgICAgICAgICAgICAgIHtlLnR5cGUgPT0gXCJkcml2ZVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8QWRkVG9Ecml2ZUljb24gLz5cclxuICAgICAgICAgICAgICAgICkgOiBlLnR5cGUgPT0gXCJ5b3V0dWJlXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxZb3VUdWJlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IGUudHlwZSA9PSBcImdpdGh1YlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8R2l0SHViSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFNoYXJlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiB9fT5cclxuICAgICAgICAgICAgICAgIFRy4bqhbmcgdGjDoWk6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAge2Uuc3RhdHVzID8gKFxyXG4gICAgICAgICAgICAgICAgICA8R3BwR29vZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxHcHBCYWRJY29uIGNvbG9yPVwiZGFuZ2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk3DtCB04bqjOiB7ZS5kZXNjfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICBMaW5rOlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtlLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgaGVyZSA8TGlua0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IGEgPSBjb250ZXh0LnF1ZXJ5O1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2RldGFpbC9gICsgYS5pZCk7XHJcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2luZm8vYCArIGEuaWQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXHJcbiAgICAgICAgaW5mbzogaW5mby5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQWNjb3JkaW9uIiwiQWNjb3JkaW9uRGV0YWlscyIsIkFjY29yZGlvblN1bW1hcnkiLCJCdXR0b24iLCJDb250YWluZXIiLCJTdGFjayIsIlR5cG9ncmFwaHkiLCJFeHBhbmRMZXNzSWNvbiIsIkV4cGFuZE1vcmVJY29uIiwidXNlU3RhdGUiLCJHcHBHb29kSWNvbiIsIkdwcEJhZEljb24iLCJMaW5rSWNvbiIsIllvdVR1YmVJY29uIiwiQWRkVG9Ecml2ZUljb24iLCJHaXRIdWJJY29uIiwiU2hhcmVJY29uIiwiTXlDaGlwIiwiRGV0YWlsIiwicHJvcHMiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJpc0V4cGFuZGVkIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nVG9wIiwicCIsImluZm8iLCJuYW1lIiwidmFyaWFudCIsImluY2x1ZGUiLCJtYXAiLCJlIiwidHlwZSIsInN4IiwibSIsImRhdGEiLCJpIiwib25DaGFuZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJleHBhbmRJY29uIiwid2lkdGgiLCJmbGV4U2hyaW5rIiwiY29sb3IiLCJzdGF0dXMiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJkZXNjIiwiYSIsInRhcmdldCIsImhyZWYiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ })

});