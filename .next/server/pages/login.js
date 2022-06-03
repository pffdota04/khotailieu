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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-meta-tags */ \"react-meta-tags\");\n/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_meta_tags__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase */ \"./services/firebase.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__]);\n([_services_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// firebase\n\n\n\n\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthProvider();\nconst getauth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();\nconst Login = ()=>{\n    const { 0: userInfo , 1: setUserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { 0: errorLogin , 1: setErrorLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const { 0: count , 1: setCounte  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getauth.onAuthStateChanged((currentUser)=>{\n            console.log(currentUser);\n            if (currentUser !== null) currentUser.getIdTokenResult().then((idTokenResult)=>{\n                console.log(idTokenResult);\n            }).catch((error)=>{\n                console.log(error);\n            });\n        });\n    });\n    const Logout = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signOut)(_services_firebase__WEBPACK_IMPORTED_MODULE_2__.auth).then(()=>{\n            alert(\"OUT\");\n        }).catch((error)=>{\n            alert(\"EOROROrr\");\n        // An error happened.\n        });\n    };\n    const Login1 = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithPopup)(getauth, provider).then((result)=>{\n            // This gives you a Google Access Token. You can use it to access the Google API.\n            const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthProvider.credentialFromResult(result);\n            const token = credential.accessToken;\n            // The signed-in user info.\n            const user = result.user;\n            setUserInfo({\n                user: user,\n                token: token\n            });\n            console.log({\n                user: user,\n                token: token\n            });\n            console.log(token);\n            localStorage;\n        // ...\n        }).catch((error)=>{\n            // Handle Errors here.\n            const errorCode = error.code;\n            const errorMessage = error.message;\n            setErrorLogin(errorMessage);\n            // The email of the user's account used.\n            const email = error.customData.email;\n            // The AuthCredential type that was used.\n            const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_5__.GoogleAuthProvider.credentialFromError(error);\n        // ...\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_meta_tags__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"\\u0110\\u0103ng nh\\u1EADp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"\\u0110\\u0103ng nh\\u1EADp ngay \\u0111\\u1EC3 xem th\\xeam nhi\\u1EC1u phim hay c\\u1EADp nh\\u1EADt li\\xean t\\u1EE5c t\\u1EA1i Kphim.xyz v\\u1EDBi ch\\u1EA5t l\\u01B0\\u1EE3ng cao HD, fullHD, 4K, Bluray,.. v\\u1EDBi t\\u1ED1c \\u0111\\u1ED9 c\\u1EF1c m\\u1EA1nh!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                id: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setCounte((prv)=>prv + 1\n                            )\n                        ,\n                        children: count\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>Login1()\n                        ,\n                        children: \"LOGIN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"xcvxc\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>Logout()\n                        ,\n                        children: \"LOGOUT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: errorLogin !== null && errorLogin\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    userInfo !== null && JSON.stringify(userInfo)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRSxJQUFNdkIsTUFBTSxFQUFFO3dCQUFBO2tDQUFFLFFBQU07Ozs7O2lDQUFNO2tDQUMxQyw4REFBQ3lCLEdBQUM7a0NBQUV0QyxVQUFVLEtBQUssSUFBSSxJQUFJQSxVQUFVOzs7OztpQ0FBSztvQkFDekNGLFFBQVEsS0FBSyxJQUFJLElBQUl5QyxJQUFJLENBQUNDLFNBQVMsQ0FBQzFDLFFBQVEsQ0FBQzs7Ozs7O3lCQUN6Qzs7Ozs7O2lCQUNILENBQ047Q0FDSDtBQUVELGlFQUFlRCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFyZXRhaWxpZXUvLi9wYWdlcy9sb2dpbi5qc3g/OWVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWV0YVRhZ3MgZnJvbSBcInJlYWN0LW1ldGEtdGFnc1wiO1xyXG5cclxuLy8gZmlyZWJhc2VcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoUG9wdXAsXHJcbiAgR29vZ2xlQXV0aFByb3ZpZGVyLFxyXG4gIHNpZ25PdXQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbmNvbnN0IGdldGF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvckxvZ2luLCBzZXRFcnJvckxvZ2luXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0YXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoKGN1cnJlbnRVc2VyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VyKTtcclxuICAgICAgaWYoY3VycmVudFVzZXIhPT1udWxsKVxyXG4gICAgICBjdXJyZW50VXNlclxyXG4gICAgICAgIC5nZXRJZFRva2VuUmVzdWx0KClcclxuICAgICAgICAudGhlbigoaWRUb2tlblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaWRUb2tlblJlc3VsdCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2lnbk91dChhdXRoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJPVVRcIilcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiRU9ST1JPcnJcIik7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBzaWduSW5XaXRoUG9wdXAoZ2V0YXV0aCwgcHJvdmlkZXIpXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAvLyBUaGlzIGdpdmVzIHlvdSBhIEdvb2dsZSBBY2Nlc3MgVG9rZW4uIFlvdSBjYW4gdXNlIGl0IHRvIGFjY2VzcyB0aGUgR29vZ2xlIEFQSS5cclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsID0gR29vZ2xlQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWxGcm9tUmVzdWx0KHJlc3VsdCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAgIC8vIFRoZSBzaWduZWQtaW4gdXNlciBpbmZvLlxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSByZXN1bHQudXNlcjtcclxuICAgICAgICBzZXRVc2VySW5mbyh7IHVzZXI6IHVzZXIsIHRva2VuOiB0b2tlbiB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh7IHVzZXI6IHVzZXIsIHRva2VuOiB0b2tlbiB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlO1xyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIEVycm9ycyBoZXJlLlxyXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICBzZXRFcnJvckxvZ2luKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gVGhlIGVtYWlsIG9mIHRoZSB1c2VyJ3MgYWNjb3VudCB1c2VkLlxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gZXJyb3IuY3VzdG9tRGF0YS5lbWFpbDtcclxuICAgICAgICAvLyBUaGUgQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcik7XHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TWV0YVRhZ3M+XHJcbiAgICAgICAgPHRpdGxlPsSQxINuZyBuaOG6rXA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgIFwixJDEg25nIG5o4bqtcCBuZ2F5IMSR4buDIHhlbSB0aMOqbSBuaGnhu4F1IHBoaW0gaGF5IGPhuq1wIG5o4bqtdCBsacOqbiB04bulYyB04bqhaSBLcGhpbS54eXogduG7m2kgY2jhuqV0IGzGsOG7o25nIGNhbyBIRCwgZnVsbEhELCA0SywgQmx1cmF5LC4uIHbhu5tpIHThu5FjIMSR4buZIGPhu7FjIG3huqFuaCFcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTWV0YVRhZ3M+XHJcbiAgICAgIDxtYWluIGlkPVwibWFpblwiPlxyXG4gICAgICAgIDxkaXY+eGN2eGM8L2Rpdj5cclxuICAgICAgICA8ZGl2PnhjdnhjPC9kaXY+XHJcbiAgICAgICAgPGRpdj54Y3Z4YzwvZGl2PlxyXG4gICAgICAgIDxkaXY+eGN2eGM8L2Rpdj5cclxuICAgICAgICA8ZGl2PnhjdnhjPC9kaXY+XHJcbiAgICAgICAgPGRpdj54Y3Z4YzwvZGl2PlxyXG4gICAgICAgIDxkaXY+eGN2eGM8L2Rpdj5cclxuICAgICAgICA8ZGl2PnhjdnhjPC9kaXY+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudGUoKHBydikgPT4gcHJ2ICsgMSl9Pntjb3VudH08L2Rpdj5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IExvZ2luKCl9PkxPR0lOPC9kaXY+XHJcbiAgICAgICAgPGRpdj54Y3Z4YzwvZGl2PlxyXG4gICAgICAgIDxkaXY+eGN2eGM8L2Rpdj5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IExvZ291dCgpfT5MT0dPVVQ8L2Rpdj5cclxuICAgICAgICA8cD57ZXJyb3JMb2dpbiAhPT0gbnVsbCAmJiBlcnJvckxvZ2lufTwvcD5cclxuICAgICAgICB7dXNlckluZm8gIT09IG51bGwgJiYgSlNPTi5zdHJpbmdpZnkodXNlckluZm8pfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJNZXRhVGFncyIsImF1dGgiLCJmaXJlYmFzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXV0aCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25PdXQiLCJwcm92aWRlciIsImdldGF1dGgiLCJMb2dpbiIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJlcnJvckxvZ2luIiwic2V0RXJyb3JMb2dpbiIsImNvdW50Iiwic2V0Q291bnRlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiY3VycmVudFVzZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0SWRUb2tlblJlc3VsdCIsInRoZW4iLCJpZFRva2VuUmVzdWx0IiwiY2F0Y2giLCJlcnJvciIsIkxvZ291dCIsImFsZXJ0IiwicmVzdWx0IiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImVtYWlsIiwiY3VzdG9tRGF0YSIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJpZCIsIm9uQ2xpY2siLCJwcnYiLCJwIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.jsx\n");

/***/ }),

/***/ "./services/firebase.js":
/*!******************************!*\
  !*** ./services/firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// import { initializeApp } from \"firebase/app\";\n// import { getAnalytics } from \"firebase/analytics\";\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDO343bctqhV8h-myk0FIrqOshUeYiTx-M\",\n    authDomain: \"khotailieu-hcmute.firebaseapp.com\",\n    databaseURL: \"https://khotailieu-hcmute-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"khotailieu-hcmute\",\n    storageBucket: \"khotailieu-hcmute.appspot.com\",\n    messagingSenderId: \"242891984063\",\n    appId: \"1:242891984063:web:ea1912e0adcec19755ca0a\",\n    measurementId: \"G-VZGP9HTNG3\"\n};\nconst app = firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp(firebaseConfig);\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst config = firebaseConfig; // export const analytics = getAnalytics(app);\n // export const auth = firebase.auth;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDRDtBQUNRO0FBRWhELGdEQUFnRDtBQUNoRCxxREFBcUQ7QUFFckQsTUFBTUcsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsbUNBQW1DO0lBQy9DQyxXQUFXLEVBQ1QsNkVBQTZFO0lBQy9FQyxTQUFTLEVBQUUsbUJBQW1CO0lBQzlCQyxhQUFhLEVBQUUsK0JBQStCO0lBQzlDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUVELE1BQU1DLEdBQUcsR0FBR1osdURBQXNCLENBQUNHLGNBQWMsQ0FBQztBQUUzQyxNQUFNVyxFQUFFLEdBQUdaLDhEQUFXLENBQUNVLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLE1BQU1HLElBQUksR0FBR2Qsc0RBQU8sQ0FBQ1csR0FBRyxDQUFDLENBQUM7QUFDMUIsTUFBTUksTUFBTSxHQUFHYixjQUFjLENBQUMsQ0FDckMsOENBQThDO0NBQzlDLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoYXJldGFpbGlldS8uL3NlcnZpY2VzL2ZpcmViYXNlLmpzP2JlNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YWJhc2UgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuXHJcbi8vIGltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbi8vIGltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gXCJmaXJlYmFzZS9hbmFseXRpY3NcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lETzM0M2JjdHFoVjhoLW15azBGSXJxT3NoVWVZaVR4LU1cIixcclxuICBhdXRoRG9tYWluOiBcImtob3RhaWxpZXUtaGNtdXRlLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOlxyXG4gICAgXCJodHRwczovL2tob3RhaWxpZXUtaGNtdXRlLWRlZmF1bHQtcnRkYi5hc2lhLXNvdXRoZWFzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcclxuICBwcm9qZWN0SWQ6IFwia2hvdGFpbGlldS1oY211dGVcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImtob3RhaWxpZXUtaGNtdXRlLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjQyODkxOTg0MDYzXCIsXHJcbiAgYXBwSWQ6IFwiMToyNDI4OTE5ODQwNjM6d2ViOmVhMTkxMmUwYWRjZWMxOTc1NWNhMGFcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctVlpHUDlIVE5HM1wiLFxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG5leHBvcnQgY29uc3QgZGIgPSBnZXREYXRhYmFzZShhcHApO1xyXG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGZpcmViYXNlQ29uZmlnO1xyXG4vLyBleHBvcnQgY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XHJcbi8vIGV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aDtcclxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiZ2V0QXV0aCIsImdldERhdGFiYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJhdXRoIiwiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/firebase.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-meta-tags":
/*!**********************************!*\
  !*** external "react-meta-tags" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-meta-tags");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("firebase/database");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.jsx"));
module.exports = __webpack_exports__;

})();