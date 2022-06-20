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
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./pages/about/index.tsx":
/*!*******************************!*\
  !*** ./pages/about/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_notion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notion */ \"react-notion\");\n/* harmony import */ var react_notion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notion__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_notion_src_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notion/src/styles.css */ \"./node_modules/.pnpm/react-notion@0.10.0_react@18.1.0/node_modules/react-notion/src/styles.css\");\n/* harmony import */ var react_notion_src_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notion_src_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst getAbout = async ()=>{\n    return (await fetch(\"api/page/shotclock-9ebbc7b285f84acf80c2a961e989ec31\")).json();\n};\nconst About = ()=>{\n    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([\n        \"getAbout\"\n    ], getAbout);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/dylan/vault/shotclock/pages/about/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-3xl mx-auto mt-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_notion__WEBPACK_IMPORTED_MODULE_2__.NotionRenderer, {\n            blockMap: data.body\n        }, void 0, false, {\n            fileName: \"/Users/dylan/vault/shotclock/pages/about/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dylan/vault/shotclock/pages/about/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDTztBQUNUO0FBRXJDLE1BQU1FLFFBQVEsR0FBRyxVQUFZO0lBQ3pCLE9BQU8sQ0FDSCxNQUFNQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FDckUsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7Q0FDWjtBQUVELE1BQU1DLEtBQUssR0FBRyxJQUFNO0lBQ2hCLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdOLHFEQUFRLENBQUM7UUFBQyxVQUFVO0tBQUMsRUFBRUUsUUFBUSxDQUFDO0lBRWpELElBQUksQ0FBQ0ksSUFBSSxFQUFFLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLFlBQVU7Ozs7O2lCQUFNLENBQUM7SUFFeEMscUJBQ0ksOERBQUNBLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHlCQUF5QjtrQkFDcEMsNEVBQUNQLHdEQUFjO1lBQUNRLFFBQVEsRUFBRUgsSUFBSSxDQUFDSSxJQUFJOzs7OztxQkFBSTs7Ozs7aUJBQ3JDLENBQ1I7Q0FDTDtBQUNELGlFQUFlTCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG90Y2xvY2svLi9wYWdlcy9hYm91dC9pbmRleC50c3g/NjIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgTm90aW9uUmVuZGVyZXIgfSBmcm9tIFwicmVhY3Qtbm90aW9uXCI7XG5pbXBvcnQgXCJyZWFjdC1ub3Rpb24vc3JjL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgZ2V0QWJvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgYXdhaXQgZmV0Y2goXCJhcGkvcGFnZS9zaG90Y2xvY2stOWViYmM3YjI4NWY4NGFjZjgwYzJhOTYxZTk4OWVjMzFcIilcbiAgICApLmpzb24oKTtcbn07XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoW1wiZ2V0QWJvdXRcIl0sIGdldEFib3V0KTtcblxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gbXQtMTBcIj5cbiAgICAgICAgICAgIDxOb3Rpb25SZW5kZXJlciBibG9ja01hcD17ZGF0YS5ib2R5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiTm90aW9uUmVuZGVyZXIiLCJnZXRBYm91dCIsImZldGNoIiwianNvbiIsIkFib3V0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImJsb2NrTWFwIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about/index.tsx\n");

/***/ }),

/***/ "./node_modules/.pnpm/react-notion@0.10.0_react@18.1.0/node_modules/react-notion/src/styles.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-notion@0.10.0_react@18.1.0/node_modules/react-notion/src/styles.css ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "react-notion":
/*!*******************************!*\
  !*** external "react-notion" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-notion");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/about/index.tsx"));
module.exports = __webpack_exports__;

})();