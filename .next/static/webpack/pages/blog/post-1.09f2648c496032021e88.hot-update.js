webpackHotUpdate_N_E("pages/blog/post-1",{

/***/ "./containers/RecommendedBlogs.tsx":
/*!*****************************************!*\
  !*** ./containers/RecommendedBlogs.tsx ***!
  \*****************************************/
/*! exports provided: RecommendedBlogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedBlogs", function() { return RecommendedBlogs; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.tsx");

var _jsxFileName = "C:\\Users\\David\\github\\wedding-catering\\containers\\RecommendedBlogs.tsx";


var bloglinks = [{
  image: '1.jpg',
  link: '/blog/post-1',
  title: 'Head to Toe Blueprints for Styling a Classic Themed Wedding'
}, {
  image: '2.jpg',
  link: '/blog/post-2',
  title: 'The Most Fabulous & Beautiful Floral Wedding Dresses To Flaunt in 2019'
}, {
  image: '3.jpg',
  link: '/blog/post-3',
  title: 'How To Save Precious Wedding Happy Memories With Wedding Photos'
}, {
  image: '4.jpg',
  link: '/blog/post-4',
  title: 'Up Your Floral Game With These Trending Wedding Flower Ideas'
}, {
  image: '5.jpg',
  link: '/blog/post-5',
  title: 'Step into Spring with Jenny Yoo’s Flirty and Floral Spring 2019 Collection'
}];

function RecommendedBlogs() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "grid grid-cols-2 col-gap-5 mb-12",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-span-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: "font-nunito font-bold text-gray-800 uppercase border-b border-gray-800 pb-2",
        children: "Recommended Blog Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "absolute pt-px -mt-2px bg-coral border-1 border border-coral w-10 mb-5 h-1px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["BlogLinkMainThumbnail"], {
        image: bloglinks[0].image,
        link: bloglinks[0].link,
        title: bloglinks[0].title
      }, 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), bloglinks.map(function (blog, index) {
      return index > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["BlogLinkThumbnail"], {
        image: blog.image,
        link: blog.link,
        title: blog.title
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_c = RecommendedBlogs;


var _c;

$RefreshReg$(_c, "RecommendedBlogs");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9SZWNvbW1lbmRlZEJsb2dzLnRzeCJdLCJuYW1lcyI6WyJibG9nbGlua3MiLCJpbWFnZSIsImxpbmsiLCJ0aXRsZSIsIlJlY29tbWVuZGVkQmxvZ3MiLCJtYXAiLCJibG9nIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUEsSUFBTUEsU0FBb0IsR0FBRyxDQUMzQjtBQUFDQyxPQUFLLEVBQUUsT0FBUjtBQUFpQkMsTUFBSSxFQUFFLGNBQXZCO0FBQXVDQyxPQUFLLEVBQUU7QUFBOUMsQ0FEMkIsRUFFM0I7QUFBQ0YsT0FBSyxFQUFFLE9BQVI7QUFBaUJDLE1BQUksRUFBRSxjQUF2QjtBQUF1Q0MsT0FBSyxFQUFFO0FBQTlDLENBRjJCLEVBRzNCO0FBQUNGLE9BQUssRUFBRSxPQUFSO0FBQWlCQyxNQUFJLEVBQUUsY0FBdkI7QUFBdUNDLE9BQUssRUFBRTtBQUE5QyxDQUgyQixFQUkzQjtBQUFDRixPQUFLLEVBQUUsT0FBUjtBQUFpQkMsTUFBSSxFQUFFLGNBQXZCO0FBQXVDQyxPQUFLLEVBQUU7QUFBOUMsQ0FKMkIsRUFLM0I7QUFBQ0YsT0FBSyxFQUFFLE9BQVI7QUFBaUJDLE1BQUksRUFBRSxjQUF2QjtBQUF1Q0MsT0FBSyxFQUFFO0FBQTlDLENBTDJCLENBQTdCOztBQVFBLFNBQVNDLGdCQUFULEdBQTRCO0FBQUE7O0FBQzFCLHNCQUNFO0FBQUksYUFBUyxFQUFDLGtDQUFkO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyw2RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsaUVBQUQ7QUFFRSxhQUFLLEVBQUVKLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUMsS0FGdEI7QUFHRSxZQUFJLEVBQUVELFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUUsSUFIckI7QUFJRSxhQUFLLEVBQUVGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUc7QUFKdEIsU0FDTyxDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQVdJSCxTQUFTLENBQUNLLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxhQUNkQSxLQUFLLEdBQUcsQ0FBUixpQkFDQSxxRUFBQyw2REFBRDtBQUVFLGFBQUssRUFBRUQsSUFBSSxDQUFDTCxLQUZkO0FBR0UsWUFBSSxFQUFFSyxJQUFJLENBQUNKLElBSGI7QUFJRSxhQUFLLEVBQUVJLElBQUksQ0FBQ0g7QUFKZCxTQUNPSSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGYztBQUFBLEtBQWQsQ0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7S0F4QlFILGdCO0FBMEJUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvcG9zdC0xLjA5ZjI2NDhjNDk2MDMyMDIxZTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJsb2dMaW5rVGh1bWJuYWlsLCBCbG9nTGlua01haW5UaHVtYm5haWwgfSBmcm9tICcuLi9jb21wb25lbnRzJ1xyXG5cclxuaW50ZXJmYWNlIEJsb2cge1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgbGluazogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBCbG9nTGlzdCBleHRlbmRzIEFycmF5PEJsb2c+IHsgfVxyXG5cclxuY29uc3QgYmxvZ2xpbmtzIDogQmxvZ0xpc3QgPSBbXHJcbiAge2ltYWdlOiAnMS5qcGcnLCBsaW5rOiAnL2Jsb2cvcG9zdC0xJywgdGl0bGU6ICdIZWFkIHRvIFRvZSBCbHVlcHJpbnRzIGZvciBTdHlsaW5nIGEgQ2xhc3NpYyBUaGVtZWQgV2VkZGluZyd9LFxyXG4gIHtpbWFnZTogJzIuanBnJywgbGluazogJy9ibG9nL3Bvc3QtMicsIHRpdGxlOiAnVGhlIE1vc3QgRmFidWxvdXMgJiBCZWF1dGlmdWwgRmxvcmFsIFdlZGRpbmcgRHJlc3NlcyBUbyBGbGF1bnQgaW4gMjAxOSd9LFxyXG4gIHtpbWFnZTogJzMuanBnJywgbGluazogJy9ibG9nL3Bvc3QtMycsIHRpdGxlOiAnSG93IFRvIFNhdmUgUHJlY2lvdXMgV2VkZGluZyBIYXBweSBNZW1vcmllcyBXaXRoIFdlZGRpbmcgUGhvdG9zJ30sXHJcbiAge2ltYWdlOiAnNC5qcGcnLCBsaW5rOiAnL2Jsb2cvcG9zdC00JywgdGl0bGU6ICdVcCBZb3VyIEZsb3JhbCBHYW1lIFdpdGggVGhlc2UgVHJlbmRpbmcgV2VkZGluZyBGbG93ZXIgSWRlYXMnfSxcclxuICB7aW1hZ2U6ICc1LmpwZycsIGxpbms6ICcvYmxvZy9wb3N0LTUnLCB0aXRsZTogJ1N0ZXAgaW50byBTcHJpbmcgd2l0aCBKZW5ueSBZb2/igJlzIEZsaXJ0eSBhbmQgRmxvcmFsIFNwcmluZyAyMDE5IENvbGxlY3Rpb24nfVxyXG5dXHJcblxyXG5mdW5jdGlvbiBSZWNvbW1lbmRlZEJsb2dzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBjb2wtZ2FwLTUgbWItMTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtbnVuaXRvIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIHVwcGVyY2FzZSBib3JkZXItYiBib3JkZXItZ3JheS04MDAgcGItMlwiPlJlY29tbWVuZGVkIEJsb2cgUG9zdHM8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcHQtcHggLW10LTJweCBiZy1jb3JhbCBib3JkZXItMSBib3JkZXIgYm9yZGVyLWNvcmFsIHctMTAgbWItNSBoLTFweFwiPjwvZGl2PlxyXG4gICAgICAgIDxCbG9nTGlua01haW5UaHVtYm5haWxcclxuICAgICAgICAgIGtleT17MH1cclxuICAgICAgICAgIGltYWdlPXtibG9nbGlua3NbMF0uaW1hZ2V9XHJcbiAgICAgICAgICBsaW5rPXtibG9nbGlua3NbMF0ubGlua31cclxuICAgICAgICAgIHRpdGxlPXtibG9nbGlua3NbMF0udGl0bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsgYmxvZ2xpbmtzLm1hcCgoYmxvZywgaW5kZXgpID0+IFxyXG4gICAgICAgIGluZGV4ID4gMCAmJlxyXG4gICAgICAgIDxCbG9nTGlua1RodW1ibmFpbFxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIGltYWdlPXtibG9nLmltYWdlfVxyXG4gICAgICAgICAgbGluaz17YmxvZy5saW5rfVxyXG4gICAgICAgICAgdGl0bGU9e2Jsb2cudGl0bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvdWw+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQge1JlY29tbWVuZGVkQmxvZ3N9Il0sInNvdXJjZVJvb3QiOiIifQ==