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
exports.id = "pages/api/info/[id]";
exports.ids = ["pages/api/info/[id]"];
exports.modules = {

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "(api)/./lib/cors.js":
/*!*********************!*\
  !*** ./lib/cors.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ runMiddleware)\n/* harmony export */ });\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction runMiddleware(req, res, methods) {\n    const cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n        methods: methods\n    });\n    return new Promise((resolve, reject)=>{\n        cors(req, res, (result)=>{\n            if (result instanceof Error) {\n                return reject(result);\n            }\n            return resolve(result);\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29ycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0I7QUFFVCxTQUFTQyxhQUFhLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFDdkQsTUFBTUMsSUFBSSxHQUFHTCwyQ0FBSSxDQUFDO1FBQ2hCSSxPQUFPLEVBQUVBLE9BQU87S0FDakIsQ0FBQztJQUVGLE9BQU8sSUFBSUUsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxHQUFLO1FBQ3RDSCxJQUFJLENBQUNILEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUNNLE1BQU0sR0FBSztZQUN6QixJQUFJQSxNQUFNLFlBQVlDLEtBQUssRUFBRTtnQkFDM0IsT0FBT0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQzthQUN2QjtZQUVELE9BQU9GLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFyZXRhaWxpZXUvLi9saWIvY29ycy5qcz9lZTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JzIGZyb20gXCJjb3JzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBtZXRob2RzKSB7XHJcbiAgY29uc3QgY29ycyA9IENvcnMoe1xyXG4gICAgbWV0aG9kczogbWV0aG9kcyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvcnMocmVxLCByZXMsIChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvcnMiLCJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibWV0aG9kcyIsImNvcnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/cors.js\n");

/***/ }),

/***/ "(api)/./pages/api/info/[id].js":
/*!********************************!*\
  !*** ./pages/api/info/[id].js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ personHandler)\n/* harmony export */ });\n/* harmony import */ var _lib_cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/cors */ \"(api)/./lib/cors.js\");\n/* harmony import */ var _services_admin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/admin/index */ \"(api)/./services/admin/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_admin_index__WEBPACK_IMPORTED_MODULE_1__]);\n_services_admin_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nlet messagesRef = _services_admin_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].database().ref();\nasync function personHandler(req, res) {\n    await (0,_lib_cors__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(req, res, [\n        \"GET\"\n    ]);\n    const { id  } = req.query;\n    try {\n        const fdata = await messagesRef.child(\"info\").orderByChild(\"id\").equalTo(id).once(\"value\");\n        if (fdata.val().length === undefined) {\n            res.status(200).json(Object.values(fdata.val())[0]);\n        } else res.status(200).json(fdata.val().filter((item)=>item\n        )[0]);\n    } catch (error) {\n        console.log(error);\n        res.status(404).json({\n            message: `Info by id: ${id} not found.`\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW5mby9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQUNNO0FBQ3BELElBQUlFLFdBQVcsR0FBR0Qsc0VBQWMsRUFBRSxDQUFDRyxHQUFHLEVBQUU7QUFFekIsZUFBZUMsYUFBYSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNwRCxNQUFNUCxxREFBYSxDQUFDTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtRQUFDLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFDdkMsTUFBTSxFQUFFQyxFQUFFLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBQ3hCLElBQUk7UUFDRixNQUFNQyxLQUFLLEdBQUcsTUFBTVIsV0FBVyxDQUM1QlMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUNiQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQ2xCQyxPQUFPLENBQUNMLEVBQUUsQ0FBQyxDQUNYTSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hCLElBQUlKLEtBQUssQ0FBQ0ssR0FBRyxFQUFFLENBQUNDLE1BQU0sS0FBS0MsU0FBUyxFQUFFO1lBQ3BDVixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1gsS0FBSyxDQUFDSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQsTUFBTVIsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ1QsS0FBSyxDQUFDSyxHQUFHLEVBQUUsQ0FBQ08sTUFBTSxDQUFDLENBQUNDLElBQUksR0FBS0EsSUFBSTtRQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BFLENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FBQztRQUNuQmpCLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRVEsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFbkIsRUFBRSxDQUFDLFdBQVcsQ0FBQztTQUFFLENBQUMsQ0FBQztLQUNuRTtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhcmV0YWlsaWV1Ly4vcGFnZXMvYXBpL2luZm8vW2lkXS5qcz8wODk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBydW5NaWRkbGV3YXJlIGZyb20gXCIuLi8uLi8uLi9saWIvY29yc1wiO1xyXG5pbXBvcnQgYWRtaW4gZnJvbSBcIi4vLi4vLi4vLi4vc2VydmljZXMvYWRtaW4vaW5kZXhcIjtcclxubGV0IG1lc3NhZ2VzUmVmID0gYWRtaW4uZGF0YWJhc2UoKS5yZWYoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHBlcnNvbkhhbmRsZXIocmVxLCByZXMpIHtcclxuICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBbXCJHRVRcIl0pO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZmRhdGEgPSBhd2FpdCBtZXNzYWdlc1JlZlxyXG4gICAgICAuY2hpbGQoXCJpbmZvXCIpXHJcbiAgICAgIC5vcmRlckJ5Q2hpbGQoXCJpZFwiKVxyXG4gICAgICAuZXF1YWxUbyhpZClcclxuICAgICAgLm9uY2UoXCJ2YWx1ZVwiKTtcclxuICAgIGlmIChmZGF0YS52YWwoKS5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihPYmplY3QudmFsdWVzKGZkYXRhLnZhbCgpKVswXSk7XHJcbiAgICB9IGVsc2UgcmVzLnN0YXR1cygyMDApLmpzb24oZmRhdGEudmFsKCkuZmlsdGVyKChpdGVtKSA9PiBpdGVtKVswXSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogYEluZm8gYnkgaWQ6ICR7aWR9IG5vdCBmb3VuZC5gIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicnVuTWlkZGxld2FyZSIsImFkbWluIiwibWVzc2FnZXNSZWYiLCJkYXRhYmFzZSIsInJlZiIsInBlcnNvbkhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwiZmRhdGEiLCJjaGlsZCIsIm9yZGVyQnlDaGlsZCIsImVxdWFsVG8iLCJvbmNlIiwidmFsIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic3RhdHVzIiwianNvbiIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsIml0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/info/[id].js\n");

/***/ }),

/***/ "(api)/./services/admin/index.js":
/*!*********************************!*\
  !*** ./services/admin/index.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _serviceAccountKey_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceAccountKey.json */ \"(api)/./services/admin/serviceAccountKey.json\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\nfirebase_auth__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nif (!(firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    try {\n        firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({\n            credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().credential.cert(_serviceAccountKey_json__WEBPACK_IMPORTED_MODULE_1__),\n            databaseURL: \"https://khotailieu-hcmute-default-rtdb.asia-southeast1.firebasedatabase.app/\"\n        });\n    } catch (error) {\n        console.log(\"Firebase admin initialization error\", error.stack);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((firebase_admin__WEBPACK_IMPORTED_MODULE_0___default()));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9hZG1pbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtQztBQUNtQjtBQUNkO0FBRXhDLElBQUksQ0FBQ0EsbUVBQWlCLEVBQUU7SUFDdEIsSUFBSTtRQUNGQSxtRUFBbUIsQ0FBQztZQUNsQk0sVUFBVSxFQUFFTixxRUFBcUIsQ0FBQ0Msb0RBQWMsQ0FBQztZQUNqRE8sV0FBVyxFQUNULDhFQUE4RTtTQUNqRixDQUFDLENBQUM7S0FDSixDQUFDLE9BQU9DLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRUYsS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQztLQUNqRTtDQUNGO0FBQ0QsaUVBQWVaLHVEQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFyZXRhaWxpZXUvLi9zZXJ2aWNlcy9hZG1pbi9pbmRleC5qcz85ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZG1pbiBmcm9tIFwiZmlyZWJhc2UtYWRtaW5cIjtcclxuaW1wb3J0IHNlcnZpY2VBY2NvdW50IGZyb20gXCIuL3NlcnZpY2VBY2NvdW50S2V5Lmpzb25cIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pZiAoIWFkbWluLmFwcHMubGVuZ3RoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGFkbWluLmluaXRpYWxpemVBcHAoe1xyXG4gICAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoc2VydmljZUFjY291bnQpLFxyXG4gICAgICBkYXRhYmFzZVVSTDpcclxuICAgICAgICBcImh0dHBzOi8va2hvdGFpbGlldS1oY211dGUtZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9cIixcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIGFkbWluIGluaXRpYWxpemF0aW9uIGVycm9yXCIsIGVycm9yLnN0YWNrKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYWRtaW47XHJcbiJdLCJuYW1lcyI6WyJhZG1pbiIsInNlcnZpY2VBY2NvdW50IiwiZ2V0QXV0aCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY3JlZGVudGlhbCIsImNlcnQiLCJkYXRhYmFzZVVSTCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./services/admin/index.js\n");

/***/ }),

/***/ "(api)/./services/admin/serviceAccountKey.json":
/*!***********************************************!*\
  !*** ./services/admin/serviceAccountKey.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"khotailieu-hcmute","private_key_id":"3bfb6cbb725488a9fb830e0ea42069cc7fc92b25","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrq1Yp+zHi0Vav\\nhaPxoADfRMZh8fVCTcB16ZsqHMxGQMm4RPqSj9PZMr1ilkUJrcKUkpNMq6lMB71M\\nzvjoRI6fo9X6gZ2zkI4TbQ+iCc9Ixg7jKMbUlNWulcDdLHRU5NYQchKYHhpA5g3/\\nRMYFqUhvVrIVxBF1Qt+8IJ2fDFRTfJXUTpMvgDUTBqe0jDIQZfH5TTslVwpUb6Jr\\ne8fCu7CpgU/ImRBN87H22MoH7Zg5OJegtpXQhhLP2y4oJBEl4U16Dqjom13keMMs\\n3RZbPtDdOw0JNnphBDsrnh90UwnZtdYx0IVQevKRcemmxbSHl0CL1sm3SUR2ArSi\\n3yIpItTjAgMBAAECggEAEvEGQlPoRrXAwgArEouMMmu/vz83x7eVhKJ1z5k62YY8\\n27CnZzQodLQvslOQotyXINaQGysWXysRcjVPay1kAUL4vA8WK/ccvhGlYm8rqG92\\nEA7H6t0l5gFkX426o5gA80fq5k7tUvuEpYWx8HOjvZPhdXEGA3Fmsgwf6CnaRMBx\\nmswCU8ywZNOU/z7AUDqIwmfkTV2etNwL9iIS5D7ZvPw1ENbWD4i50PW9t//Bo2+1\\nMtpeiVxA5JGfGc5WHH5SyYeHXTgkHvowARU4TXvTVqCH13Ezdgz93ArwqbxNlGvp\\nrGuy7w3B8wrnk2nAUzC/GZkNTl0NUGExlqbrfb3ByQKBgQDWBRFVaNdndp17bzh/\\neauIGfd4Zzc2WVgy5vZwT/jBu/hWNW6SqvEmupX/zOv04vAAkB8OGd5A1Id77klQ\\nf/t3IshSUpUAstn5tW8KRnC97xLCk4L3yYVtvNzYBGAa03OCk51UyICRDZx1tBuc\\nBNU8pN+jd4o3CZ+vqf0s/KAjaQKBgQDNV6bvuH91TiYjle3g5U2X2zGH6B7AanbS\\nWUCJTRc6DrD1wvZq4k+YroOQX+cCuMQ0S85HHqhCfBoyZAzlnTP0TuuhJXUGh9ry\\nrVJrdCsZjV2/3FY/BH6rgROutJzpoSN4XBKtfgv80HSZjTaj8F3mJu6Y5X/Asnus\\nH67rkvrIawKBgE7+490Aq7FWyN4MuW/j+vprizp37psy8ykmswPVoN3xgcJgSoX8\\nbrJ64G7gtp9XPHsYtz2/Mpf/WlrWI12BP9JDlmk8bh8p5OcUnv3N7kNNAUGsrQTE\\n72kH8wQQ6WA9eD9UORhYQYxI191iM2atKgAOYzW1I+EYvkZamkaGoJ0xAoGBAL4T\\nyhKTLWDvwzwjl/wbJnVQUIwmoPiqVG0ocyXld3+lg8cq/qE39kg2GtD1BUkusWhb\\nV4nb5hMM/87vcETH/QTEXTdhDe/KqDEFoYqYESFpC4QDOM7CoWKubALHa4yUPdo3\\nGI8CY6RVbemJny+n27OlDC36GwTL8tEEzw1/k6cbAoGADan07bV2r5WvgZrUFWfN\\nFyypwcWcBUUdZXNXnCKHPCdxPBViKwgg/vwipA2H32E56roQBdmXZB16Dex2BPss\\nrCLuANwHIOjLJCyh/2al4JO1s4cqD37gcllxAh3L4qtTYUv7DO2E4gtVLMK3nE38\\npzF4XWRu4rybNmhBNYS/CO4=\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-9kpxn@khotailieu-hcmute.iam.gserviceaccount.com","client_id":"105922424510608310854","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9kpxn%40khotailieu-hcmute.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/info/[id].js"));
module.exports = __webpack_exports__;

})();