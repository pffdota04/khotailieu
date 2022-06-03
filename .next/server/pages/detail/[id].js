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
exports.id = "pages/detail/[id]";
exports.ids = ["pages/detail/[id]"];
exports.modules = {

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ExpandLess */ \"@mui/icons-material/ExpandLess\");\n/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"@mui/icons-material/ExpandMore\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_GppGood__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/GppGood */ \"@mui/icons-material/GppGood\");\n/* harmony import */ var _mui_icons_material_GppGood__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GppGood__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_icons_material_GppBad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/GppBad */ \"@mui/icons-material/GppBad\");\n/* harmony import */ var _mui_icons_material_GppBad__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GppBad__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Link */ \"@mui/icons-material/Link\");\n/* harmony import */ var _mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst Detail = (props)=>{\n    const { 0: expanded , 1: setExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    const handleChange = (panel)=>(event, isExpanded)=>{\n            setExpanded(isExpanded ? panel : false);\n        }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            paddingTop: \"66px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Lorem\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ID: \",\n                    props.data.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            props.data.data.map((e, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Accordion, {\n                    expanded: expanded === \"panel\" + i,\n                    onChange: handleChange(\"panel\" + i),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionSummary, {\n                            expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, void 0, void 0),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    sx: {\n                                        width: \"33%\",\n                                        flexShrink: 0\n                                    },\n                                    children: e.type\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                    sx: {\n                                        color: \"text.secondary\"\n                                    },\n                                    children: [\n                                        \"Tr\\u1EA1ng th\\xe1i:\",\n                                        \" \",\n                                        e.status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_GppGood__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            color: \"primary\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_GppBad__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                            color: \"danger\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.AccordionDetails, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                                direction: \"row\",\n                                justifyContent: \"space-around\",\n                                alignItems: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                        children: [\n                                            \"M\\xf4 t\\u1EA3: \",\n                                            e.desc\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                                        children: [\n                                            \"Link:\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                target: \"_blank\",\n                                                href: e.link,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    variant: \"contained\",\n                                                    children: [\n                                                        \"Click here \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Link__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                                            lineNumber: 60,\n                                                            columnNumber: 32\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\detail\\\\[id].js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);\nasync function getServerSideProps(context) {\n    const a = context.query;\n    try {\n        const data = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`https://hcmute.netlify.app/api/detail/` + a.id);\n        return {\n            props: {\n                data: data.data\n            }\n        };\n    } catch (error) {\n        console.error(error);\n        return {\n            props: {\n                data: null\n            }\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1OLENBQUMsR0FBR00sT0FBTyxDQUFDL0IsS0FBSztJQUN2QixJQUFJO1FBQ0YsTUFBTVMsSUFBSSxHQUFHLE1BQU01QixnREFBUyxDQUFDLENBQUMsaUNBQWlDLENBQUMsR0FBRzRDLENBQUMsQ0FBQzFCLEVBQUUsQ0FBQztRQUN4RSxPQUFPO1lBQ0xKLEtBQUssRUFBRTtnQkFDTGMsSUFBSSxFQUFFQSxJQUFJLENBQUNBLElBQUk7YUFDaEI7U0FDRixDQUFDO0tBQ0gsQ0FBQyxPQUFPd0IsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztRQUNyQixPQUFPO1lBQ0x0QyxLQUFLLEVBQUU7Z0JBQ0xjLElBQUksRUFBRSxJQUFJO2FBQ1g7U0FDRixDQUFDO0tBQ0g7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NoYXJldGFpbGlldS8uL3BhZ2VzL2RldGFpbC9baWRdLmpzPzgyOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBBY2NvcmRpb24sXHJcbiAgQWNjb3JkaW9uRGV0YWlscyxcclxuICBBY2NvcmRpb25TdW1tYXJ5LFxyXG4gIEJ1dHRvbixcclxuICBTdGFjayxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBFeHBhbmRMZXNzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRMZXNzXCI7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHcHBHb29kSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9HcHBHb29kXCI7XHJcbmltcG9ydCBHcHBCYWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0dwcEJhZFwiO1xyXG5pbXBvcnQgTGlua0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTGlua1wiO1xyXG5jb25zdCBEZXRhaWwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocGFuZWwpID0+IChldmVudCwgaXNFeHBhbmRlZCkgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWQoaXNFeHBhbmRlZCA/IHBhbmVsIDogZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiNjZweFwiIH19PlxyXG4gICAgICA8cD5Mb3JlbTwvcD5cclxuICAgICAgPHA+SUQ6IHtwcm9wcy5kYXRhLmlkfTwvcD5cclxuICAgICAge3Byb3BzLmRhdGEuZGF0YS5tYXAoKGUsIGkpID0+IChcclxuICAgICAgICA8QWNjb3JkaW9uXHJcbiAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWQgPT09IFwicGFuZWxcIiArIGl9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFuZWxcIiArIGkpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IHdpZHRoOiBcIjMzJVwiLCBmbGV4U2hyaW5rOiAwIH19PlxyXG4gICAgICAgICAgICAgIHtlLnR5cGV9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgY29sb3I6IFwidGV4dC5zZWNvbmRhcnlcIiB9fT5cclxuICAgICAgICAgICAgICBUcuG6oW5nIHRow6FpOntcIiBcIn1cclxuICAgICAgICAgICAgICB7ZS5zdGF0dXMgPyAoXHJcbiAgICAgICAgICAgICAgICA8R3BwR29vZEljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEdwcEJhZEljb24gY29sb3I9XCJkYW5nZXJcIiAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCJcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk3DtCB04bqjOiB7ZS5kZXNjfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIExpbms6XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtlLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICBDbGljayBoZXJlIDxMaW5rSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgYSA9IGNvbnRleHQucXVlcnk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGV0YWlsL2AgKyBhLmlkKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiYXhpb3MiLCJBY2NvcmRpb24iLCJBY2NvcmRpb25EZXRhaWxzIiwiQWNjb3JkaW9uU3VtbWFyeSIsIkJ1dHRvbiIsIlN0YWNrIiwiVHlwb2dyYXBoeSIsIkV4cGFuZExlc3NJY29uIiwiRXhwYW5kTW9yZUljb24iLCJ1c2VTdGF0ZSIsIkdwcEdvb2RJY29uIiwiR3BwQmFkSWNvbiIsIkxpbmtJY29uIiwiRGV0YWlsIiwicHJvcHMiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImhhbmRsZUNoYW5nZSIsInBhbmVsIiwiZXZlbnQiLCJpc0V4cGFuZGVkIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nVG9wIiwicCIsImRhdGEiLCJtYXAiLCJlIiwiaSIsIm9uQ2hhbmdlIiwiZXhwYW5kSWNvbiIsInN4Iiwid2lkdGgiLCJmbGV4U2hyaW5rIiwidHlwZSIsImNvbG9yIiwic3RhdHVzIiwiZGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGVzYyIsImEiLCJ0YXJnZXQiLCJocmVmIiwibGluayIsInZhcmlhbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ }),

/***/ "@mui/icons-material/ExpandLess":
/*!*************************************************!*\
  !*** external "@mui/icons-material/ExpandLess" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandLess");

/***/ }),

/***/ "@mui/icons-material/ExpandMore":
/*!*************************************************!*\
  !*** external "@mui/icons-material/ExpandMore" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ "@mui/icons-material/GppBad":
/*!*********************************************!*\
  !*** external "@mui/icons-material/GppBad" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/GppBad");

/***/ }),

/***/ "@mui/icons-material/GppGood":
/*!**********************************************!*\
  !*** external "@mui/icons-material/GppGood" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/GppGood");

/***/ }),

/***/ "@mui/icons-material/Link":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Link" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Link");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/detail/[id].js"));
module.exports = __webpack_exports__;

})();