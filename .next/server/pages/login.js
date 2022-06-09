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

/***/ "./styles/Login.module.scss":
/*!**********************************!*\
  !*** ./styles/Login.module.scss ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"login\": \"Login_login__43NSn\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTG9naW4ubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFyZXRhaWxpZXUvLi9zdHlsZXMvTG9naW4ubW9kdWxlLnNjc3M/NmE5MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpblwiOiBcIkxvZ2luX2xvZ2luX180M05TblwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Login.module.scss\n");

/***/ }),

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Google */ \"@mui/icons-material/Google\");\n/* harmony import */ var _mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firebase */ \"./services/firebase.js\");\n/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../styles/Login.module.scss */ \"./styles/Login.module.scss\");\n/* harmony import */ var _styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_4__, _services_firebase__WEBPACK_IMPORTED_MODULE_6__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_4__, _services_firebase__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n// firebase\n\n\n\n\n\n\n\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider();\nconst Login = ()=>{\n    const { 0: userInfo , 1: setUserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: errorLogin , 1: setErrorLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: logined , 1: setLogined  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _services_firebase__WEBPACK_IMPORTED_MODULE_6__.auth.onAuthStateChanged((currentUser)=>{\n            console.log(currentUser);\n            if (currentUser !== null) currentUser.getIdTokenResult().then((idTokenResult)=>{\n                console.log(idTokenResult);\n                setLogined(true);\n            }).catch((error)=>{\n                console.log(error);\n                setLogined(false);\n            });\n            else setLogined(false);\n        });\n    });\n    const Login1 = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_services_firebase__WEBPACK_IMPORTED_MODULE_6__.auth, provider).then((result)=>{\n            const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider.credentialFromResult(result);\n            const token = credential.accessToken;\n            const user = result.user;\n            setUserInfo({\n                user: user,\n                token: token\n            });\n            console.log({\n                user: user,\n                token: token\n            });\n            console.log(token);\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n        // ...\n        }).catch((error)=>{\n            const errorCode = error.code;\n            const errorMessage = error.message;\n            setErrorLogin(errorMessage);\n            const email = error.customData.email;\n            const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider.credentialFromError(error);\n        // ...\n        });\n    };\n    const Logout = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)(_services_firebase__WEBPACK_IMPORTED_MODULE_6__.auth).then(()=>{\n            alert(\"OUT\");\n        }).catch((error)=>{\n            alert(\"EOROROrr\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        sx: {\n            paddingTop: \"65px\",\n            position: \"relative\"\n        },\n        className: (_styles_Login_module_scss__WEBPACK_IMPORTED_MODULE_7___default().login),\n        children: [\n            logined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: ()=>Logout()\n                ,\n                variant: \"contained\",\n                sx: {\n                    backgroundColor: \"danger.main\",\n                    position: \"absolute\",\n                    top: \"50%\",\n                    right: \"50%\",\n                    transform: \"translate(50%, 50%)\"\n                },\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: ()=>Login1()\n                ,\n                variant: \"contained\",\n                sx: {\n                    backgroundColor: \"danger.main\",\n                    position: \"absolute\",\n                    top: \"50%\",\n                    right: \"50%\",\n                    transform: \"translate(50%, 50%)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        sx: {\n                            p: \"2px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined),\n                    \" \\u0110\\u0103ng nh\\u1EADp v\\u1EDBi Google\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: errorLogin !== null && errorLogin\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pffdo\\\\Desktop\\\\Learn_FE\\\\hcmute\\\\sharetailieu2\\\\pages\\\\login.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9sb2dpbi5qc3g/OWVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaXJlYmFzZVxyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQ29udGFpbmVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc2lnbkluV2l0aFBvcHVwLCBHb29nbGVBdXRoUHJvdmlkZXIsIHNpZ25PdXQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgR29vZ2xlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Hb29nbGVcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vLi4vc3R5bGVzL0xvZ2luLm1vZHVsZS5zY3NzXCI7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJJbmZvLCBzZXRVc2VySW5mb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3JMb2dpbiwgc2V0RXJyb3JMb2dpbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9naW5lZCwgc2V0TG9naW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgoY3VycmVudFVzZXIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coY3VycmVudFVzZXIpO1xyXG4gICAgICBpZiAoY3VycmVudFVzZXIgIT09IG51bGwpXHJcbiAgICAgICAgY3VycmVudFVzZXJcclxuICAgICAgICAgIC5nZXRJZFRva2VuUmVzdWx0KClcclxuICAgICAgICAgIC50aGVuKChpZFRva2VuUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkVG9rZW5SZXN1bHQpO1xyXG4gICAgICAgICAgICBzZXRMb2dpbmVkKHRydWUpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICBzZXRMb2dpbmVkKGZhbHNlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBlbHNlIHNldExvZ2luZWQoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbCA9IEdvb2dsZUF1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbVJlc3VsdChyZXN1bHQpO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gY3JlZGVudGlhbC5hY2Nlc3NUb2tlbjtcclxuICAgICAgICBjb25zdCB1c2VyID0gcmVzdWx0LnVzZXI7XHJcbiAgICAgICAgc2V0VXNlckluZm8oeyB1c2VyOiB1c2VyLCB0b2tlbjogdG9rZW4gfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyB1c2VyOiB1c2VyLCB0b2tlbjogdG9rZW4gfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAvLyAuLi5cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICBzZXRFcnJvckxvZ2luKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBlcnJvci5jdXN0b21EYXRhLmVtYWlsO1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBHb29nbGVBdXRoUHJvdmlkZXIuY3JlZGVudGlhbEZyb21FcnJvcihlcnJvcik7XHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2lnbk91dChhdXRoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJPVVRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBhbGVydChcIkVPUk9ST3JyXCIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lclxyXG4gICAgICBzeD17eyBwYWRkaW5nVG9wOiBcIjY1cHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlLmxvZ2lufVxyXG4gICAgPlxyXG4gICAgICB7bG9naW5lZCA/IChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBMb2dvdXQoKX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImRhbmdlci5tYWluXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICAgICAgcmlnaHQ6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoNTAlLCA1MCUpXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZ291dFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IExvZ2luKCl9XHJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJkYW5nZXIubWFpblwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBcIjUwJVwiLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDUwJSwgNTAlKVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R29vZ2xlSWNvbiBzeD17eyBwOiBcIjJweFwiIH19IC8+IMSQxINuZyBuaOG6rXAgduG7m2kgR29vZ2xlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8cD57ZXJyb3JMb2dpbiAhPT0gbnVsbCAmJiBlcnJvckxvZ2lufTwvcD5cclxuICAgICAgey8qIHt1c2VySW5mbyAhPT0gbnVsbCAmJiBKU09OLnN0cmluZ2lmeSh1c2VySW5mbyl9ICovfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJSb3V0ZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduT3V0IiwiR29vZ2xlSWNvbiIsImF1dGgiLCJzdHlsZSIsInByb3ZpZGVyIiwiTG9naW4iLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiZXJyb3JMb2dpbiIsInNldEVycm9yTG9naW4iLCJsb2dpbmVkIiwic2V0TG9naW5lZCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsImdldElkVG9rZW5SZXN1bHQiLCJ0aGVuIiwiaWRUb2tlblJlc3VsdCIsImNhdGNoIiwiZXJyb3IiLCJyZXN1bHQiLCJjcmVkZW50aWFsIiwiY3JlZGVudGlhbEZyb21SZXN1bHQiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuIiwidXNlciIsInB1c2giLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImVtYWlsIiwiY3VzdG9tRGF0YSIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJMb2dvdXQiLCJhbGVydCIsInN4IiwicGFkZGluZ1RvcCIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwibG9naW4iLCJvbkNsaWNrIiwidmFyaWFudCIsImJhY2tncm91bmRDb2xvciIsInRvcCIsInJpZ2h0IiwidHJhbnNmb3JtIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.jsx\n");

/***/ }),

/***/ "./services/firebase.js":
/*!******************************!*\
  !*** ./services/firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"firebase/database\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_database__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// import { initializeApp } from \"firebase/app\";\n// import { getAnalytics } from \"firebase/analytics\";\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDO343bctqhV8h-myk0FIrqOshUeYiTx-M\",\n    authDomain: \"khotailieu-hcmute.firebaseapp.com\",\n    databaseURL: \"https://khotailieu-hcmute-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"khotailieu-hcmute\",\n    storageBucket: \"khotailieu-hcmute.appspot.com\",\n    messagingSenderId: \"242891984063\",\n    appId: \"1:242891984063:web:ea1912e0adcec19755ca0a\",\n    measurementId: \"G-VZGP9HTNG3\"\n};\nconst app = firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp(firebaseConfig);\nconst db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst config = firebaseConfig;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDRDtBQUNRO0FBRWhELGdEQUFnRDtBQUNoRCxxREFBcUQ7QUFFckQsTUFBTUcsY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsbUNBQW1DO0lBQy9DQyxXQUFXLEVBQ1QsNkVBQTZFO0lBQy9FQyxTQUFTLEVBQUUsbUJBQW1CO0lBQzlCQyxhQUFhLEVBQUUsK0JBQStCO0lBQzlDQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUVELE1BQU1DLEdBQUcsR0FBR1osdURBQXNCLENBQUNHLGNBQWMsQ0FBQztBQUUzQyxNQUFNVyxFQUFFLEdBQUdaLDhEQUFXLENBQUNVLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLE1BQU1HLElBQUksR0FBR2Qsc0RBQU8sQ0FBQ1csR0FBRyxDQUFDLENBQUM7QUFDMUIsTUFBTUksTUFBTSxHQUFHYixjQUFjLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFyZXRhaWxpZXUvLi9zZXJ2aWNlcy9maXJlYmFzZS5qcz9iZTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGdldERhdGFiYXNlIH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG4vLyBpbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5RE8zNDNiY3RxaFY4aC1teWswRklycU9zaFVlWWlUeC1NXCIsXHJcbiAgYXV0aERvbWFpbjogXCJraG90YWlsaWV1LWhjbXV0ZS5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDpcclxuICAgIFwiaHR0cHM6Ly9raG90YWlsaWV1LWhjbXV0ZS1kZWZhdWx0LXJ0ZGIuYXNpYS1zb3V0aGVhc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXHJcbiAgcHJvamVjdElkOiBcImtob3RhaWxpZXUtaGNtdXRlXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJraG90YWlsaWV1LWhjbXV0ZS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjI0Mjg5MTk4NDA2M1wiLFxyXG4gIGFwcElkOiBcIjE6MjQyODkxOTg0MDYzOndlYjplYTE5MTJlMGFkY2VjMTk3NTVjYTBhXCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLVZaR1A5SFRORzNcIixcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoYXBwKTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSBmaXJlYmFzZUNvbmZpZztcclxuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiZ2V0QXV0aCIsImdldERhdGFiYXNlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZGIiLCJhdXRoIiwiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/firebase.js\n");

/***/ }),

/***/ "@mui/icons-material/Google":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Google" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Google");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ ((module) => {

"use strict";
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