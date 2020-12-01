module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Rpix":
/***/ (function(module, exports) {



/***/ }),

/***/ "VAPu":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zPlV");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Rpix");
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("m/eG");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VAPu");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    const removeFouc = foucElement => {
      foucElement.className = foucElement.className.replace('no-fouc', 'fouc');
    };

    removeFouc(document.documentElement);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    id: "root-page-elem",
    className: "flex flex-col justify-center",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "flex",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "z-50 md:w-84",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_4__[/* SideNav */ "w"], {})
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "w-full md:w-body",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))
      })]
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "jSAk":
/***/ (function(module, exports) {



/***/ }),

/***/ "m/eG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ BlogLink; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ BlogLinkThumbnail; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ BlogLinkMainThumbnail; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ BlogGallery; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ SideNav; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ LandingPage; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ AboutUs; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ AboutUsSection; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ FeatureSection; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ ServicesSection; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ OurServices; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ ServicesSection2; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ DailyMenu; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ SeasonalMenu; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ SeasonalMenu2; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ ReviewSection; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ ReviewSection2; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ ContactUsHeading; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ ContactSection; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ ContactSection2; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ ContactForm; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ CallUsImage; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ Footer; });

// UNUSED EXPORTS: BlogTile

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/BlogLink.tsx




function BlogLink({
  image,
  title,
  link
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    onClick: () => {
      window.location.href = link;
    },
    className: "flex mt-6",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: "max-w-full height-auto w-32 flex-shrink-0 cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out",
      src: `/${image}`
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: "font-nunito font-bold ml-5 text-sm text-gray-900 cursor-pointer hover:text-coral transition-colors duration-300 ease-in-out",
      children: title
    })]
  });
}


// CONCATENATED MODULE: ./components/BlogLinkThumbnail.tsx




function BlogLinkThumbnail({
  image,
  title,
  link,
  date
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    onClick: () => {
      window.location.href = link;
    },
    className: "flex flex-col mt-6",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: "max-w-full height-auto w-full cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out mb-4",
      src: `/${image}`
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: "font-nunito font-bold leading-snug text-sm text-gray-800 cursor-pointer hover:text-coral transition-colors duration-300 ease-in-out",
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "font-rubik text-gray-600 text-sm mt-1",
      children: date
    })]
  });
}


// CONCATENATED MODULE: ./components/blog/BlogLinkMainThumbnail.tsx




function BlogLinkMainThumbnail({
  image,
  title,
  link
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    onClick: () => {
      window.location.href = link;
    },
    className: "flex flex-col mt-6",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: "max-w-full height-auto w-full cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out mb-4",
      src: `/${image}`
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      className: "font-nunito font-bold text-lg text-gray-800 cursor-pointer hover:text-coral transition-colors duration-300 ease-in-out",
      children: title
    })]
  });
}


// CONCATENATED MODULE: ./components/BlogTile.tsx





function BlogTile(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-span-6",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        onClick: () => {
          window.location.href = props.link;
        },
        className: "cursor-pointer hover:opacity-85 transition-all duration-500 ease-in-out mb-4",
        src: props.src
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: `http://localhost:3000/category/${props.category}`,
        className: "block cursor-pointer text-sm text-coral mb-2",
        children: props.category
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: `http://localhost:3000/${props.link}`,
        className: "block cursor-pointer font-nunito font-bold leading-tight text-h4 text-gray-900 hover:text-gray-600 transition-color duration-500 ease-in-out",
        children: props.title
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex mt-4 items-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-600 mr-1",
          children: "by"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "cursor-pointer font-rubik text-gray-900 hover:text-coral transition-color duration-300 ease-in-out",
          children: props.author
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-600 text-xs mx-4",
          children: "|"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-600",
          children: props.date
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "font-nunito text-gray-900 mt-4",
        children: props.preview
      })]
    })
  });
}


// CONCATENATED MODULE: ./components/BlogGallery.tsx





function BlogGallery() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "grid grid-cols-1 md:grid-cols-12 gap-8",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogTile, {
      link: "blog/post-1",
      title: "Head to Toe Blueprints for Styling a Classic Themed Wedding",
      src: "our blog/1-2-585x390.jpg",
      category: "Planning",
      author: "Penci Design",
      date: "June 23, 2019",
      preview: "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis \u2026 "
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogTile, {
      link: "blog/post-2",
      title: "The Most Fabulous & Beautiful Floral Wedding Dresses To Flaunt in 2019",
      src: "our blog/2-585x390.jpg",
      category: "Beauty",
      author: "Penci Design",
      date: "June 23, 2019",
      preview: "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis \u2026"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogTile, {
      link: "blog/post-3",
      title: "How To Save Precious Wedding Happy Memories With Wedding Photos",
      src: "our blog/3-585x390.jpg",
      category: "Photos",
      author: "Penci Design",
      date: "June 23, 2019",
      preview: "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis \u2026 "
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogTile, {
      link: "blog/post-4",
      title: "Up Your Floral Game With These Trending Wedding Flower Ideas",
      src: "our blog/4-585x390.jpg",
      category: "Planning",
      author: "Penci Design",
      date: "June 23, 2019",
      preview: "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis \u2026"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogTile, {
      link: "blog/post-5",
      title: "Step into Spring with Jenny Yoo\u2019s Flirty and Floral Spring 2019 Collection",
      src: "our blog/6-585x390.jpg",
      category: "Beauty",
      author: "Penci Design",
      date: "June 23, 2019",
      preview: "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis \u2026"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogTile, {
      link: "blog/post-2",
      title: "Unforgettable Memories & Happy Moments In These Beautiful Photos",
      src: "our blog/7-585x390.jpg",
      category: "Photos",
      author: "Penci Design",
      date: "June 23, 2019",
      preview: "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis \u2026"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogTile, {
      link: "blog/post-2",
      title: "The Most Helpful Features to Add to Your Wedding Website, According To Us",
      src: "our blog/8-585x390.jpg",
      category: "Planning",
      author: "Penci Design",
      date: "June 23, 2019",
      preview: "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis \u2026 "
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogTile, {
      link: "blog/post-2",
      title: "This Collection Was Made for the Carefree Bride with a Boho Heart",
      src: "our blog/11-585x390.jpg",
      category: "Beauty",
      author: "Penci Design",
      date: "June 23, 2019",
      preview: "Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis \u2026 "
    })]
  });
}


// CONCATENATED MODULE: ./containers/BlogLinkContainer.tsx



const bloglinks = [{
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

function BlogLinkContainer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    children: bloglinks.map((blog, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogLink, {
      image: blog.image,
      link: blog.link,
      title: blog.title,
      flexDirection: "flex-row"
    }, index))
  });
}


// CONCATENATED MODULE: ./containers/index.tsx

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__("VAPu");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./components/NavButton.tsx







function NavButton({
  setShow
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "lg:-ml-24",
      onClick: () => {
        setShow(prev => !prev);
      },
      style: {
        position: 'absolute',
        cursor: 'pointer',
        top: '0',
        width: "0",
        height: "0",
        borderStyle: "solid",
        borderWidth: "50px 50px 0 0",
        borderColor: "#ff8965 transparent transparent transparent"
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      onClick: () => {
        setShow(prev => !prev);
      },
      className: "cursor-pointer text-white absolute z-50",
      style: {
        position: 'absolute',
        top: '7',
        left: '8',
        fontSize: '16px'
      },
      icon: free_solid_svg_icons_["faBars"]
    })]
  });
}
// CONCATENATED MODULE: ./components/SideNav.tsx






function SideNav() {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const showNav = show ? "translate-x-0" : "-translate-x-84";
  const showNavBar = show ? "translate-x-0" : "-translate-x-84";
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: `no-scroll-bar bg-green h-full md:shadow fixed overflow-y-scroll block transform ${showNav} md:translate-x-0 transition-all duration-500 ease-in-out`,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `h-full bg-white block md:w-84 px-5 py-8 flex-none transform ${showNavBar} md:translate-x-0 transition-all duration-500 ease-in-out`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "w-1/2 mx-auto",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: "148",
            height: "95",
            className: "h-auto max-w-full",
            src: "/logo.png",
            alt: "logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "my-10",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "mb-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out",
                href: "/Home",
                children: "HOME"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "mb-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out",
                href: "/Services",
                children: "SERVICES"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "mb-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out",
                href: "/AboutUs",
                children: "ABOUT US"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "mb-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out",
                href: "/ContactUs",
                children: "CONTACT US"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
              className: "mb-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out",
                href: "/OurBlog",
                children: "OUR BLOG"
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "mb-5",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            className: "font-nunito font-bold text-gray-800 uppercase border-b border-gray-800 pb-2",
            children: "Recent Posts"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "absolute pt-px -mt-2px bg-coral border-1 border border-coral w-10 mb-5 h-1px"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BlogLinkContainer, {})]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavButton, {
      setShow: setShow
    })]
  });
}

// CONCATENATED MODULE: ./components/LandingPage.tsx




function LandingPage() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "relative flex flex-col items-center justify-center lg:h-screen overflow-hidden",
    style: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: "linear-gradient(45deg, rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(home/1.jpg)"
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: "h-42 w-48 mt-32 lg:mt-0",
      src: "home/2.png"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: "font-parisienne text-center text-white font-semibold text-6xl",
      children: "Wedding Catering Service"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "text-white text-center font-rubik text-lg w-1/2",
      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      className: "text-white cursor-pointer font-bold bg-coral mb-32 lg:mb-5 hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 mt-4",
      children: "Discover More"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full transform rotate-180 absolute",
      style: {
        bottom: '-1px'
      },
      "data-negative": "false",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: "lg:h-24 w-full",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 100",
        preserveAspectRatio: "none",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: "fill-current text-white",
          d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        })
      })
    })]
  });
}


// CONCATENATED MODULE: ./components/AboutUs.tsx





function AboutUs() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "bg-gray-100 p-16 text-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "font-parisienne text-5xl font-semibold",
        children: "About Us"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "font-rubik text-gray-700 lg:px-24 xl:px-48",
        children: " Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil."
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full transform rotate-180 bg-gray-100",
      style: {
        bottom: '-19px'
      },
      "data-negative": "false",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: "h-12 lg:h-24 w-full",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 100",
        preserveAspectRatio: "none",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: "fill-current text-white",
          d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "lg:grid lg:grid-cols-2 lg:col-gap-8 md:px-4 lg:mt-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "w-full lg:relative mr-8 mb-56 lg:mb-0",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: "w-full",
          src: "about us/g2-1024x683.jpg"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "no-scroll-bar absolute bg-white -mt-16 shadow-lg mx-8 p-8 text-center h-72 overflow-y-auto",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-parisienne text-h2 font-semibold",
            children: "Our Story "
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-700",
            children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "lg:relative bg-white",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "about us/1-1024x682.jpg"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "no-scroll-bar absolute bg-white -mt-16 shadow-lg mx-8 p-8 text-center h-72 overflow-y-auto",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-parisienne text-h2 font-semibold",
            children: "Our Core Values "
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-700",
            children: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos."
          })]
        })]
      })]
    })]
  });
}


// CONCATENATED MODULE: ./components/AboutUsSection.tsx







function AboutUsSection() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-col sm:flex-row items-center p-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex-1 mr-5",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-parisienne font-semibold text-5xl",
          children: "About Us"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: "font-rubik text-gray-600",
          children: ["Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda."]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "w-full mb-1 lg:mb-0 lg:w-1/3 relative lg:mr-1",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "/_next/static/media/g1e-768x512.87f7437b7e5f727b60de48830bce3ea6.jpg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "cursor-pointer w-88 h-64 bg-cover text-transparent shadow-inner-opaque hover:text-white bg-food-on-stump hover:shadow-inner-full text-xs hover:text-4xl transition-all duration-500 ease-in-out",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              className: "parent-hover:size-0 absolute",
              icon: free_solid_svg_icons_["faExpandArrowsAlt"],
              style: {
                top: 'calc(50% - 0.5em)',
                left: 'calc(50% - 0.5em)'
              }
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "w-full lg:w-1/3 relative",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "/_next/static/media/g2-768x512.ebdbf48ac1c1b7739c0a8b5e08a0feb1.jpg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "cursor-pointer w-88 h-64 text-transparent shadow-inner-opaque hover:text-white bg-cover bg-wedding-table hover:shadow-inner-full text-xs hover:text-4xl transition-all duration-500 ease-in-out",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              className: "parent-hover:size-0 absolute",
              icon: free_solid_svg_icons_["faExpandArrowsAlt"],
              style: {
                top: 'calc(50% - 0.5em)',
                left: 'calc(50% - 0.5em)'
              }
            })
          })
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-col sm:flex-row items-center p-4 mb-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "w-full lg:w-1/3 relative mr-1 inline-block",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "/_next/static/media/g4-768x613.bc53d5f3697e416c0dcb3b46f34a77c7.jpg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "cursor-pointer w-88 h-64 text-transparent shadow-inner-opaque hover:text-white bg-cover bg-cupcake hover:shadow-inner-full text-xs hover:text-4xl transition-all duration-500 ease-in-out",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              className: "parent-hover:size-0 absolute",
              icon: free_solid_svg_icons_["faExpandArrowsAlt"],
              style: {
                top: 'calc(50% - 0.5em)',
                left: 'calc(50% - 0.5em)'
              }
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "w-full lg:w-1/3 relative inline-block",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "/_next/static/media/g3-768x513.482360b5cb3722435e20df6ba6daac15.jpg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "cursor-pointer w-88 h-64 text-transparent shadow-inner-opaque hover:text-white bg-cover bg-necklace hover:text-4xl hover:shadow-inner-full text-xs hover:text-4xl transition-all duration-500 ease-in-out",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              className: "parent-hover:size-0 absolute",
              icon: free_solid_svg_icons_["faExpandArrowsAlt"],
              style: {
                top: 'calc(50% - 0.5em)',
                left: 'calc(50% - 0.5em)'
              }
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "w-full lg:w-1/4 ml-5 inline-block",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          className: "font-rubik text-gray-600 ml-2 mb-5 mt-12 lg:mt-0",
          children: ["Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda."]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
          className: "flex items-center w-48 text-white cursor-pointer font-bold bg-coral hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 ml-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "mr-3 mt-1",
            icon: free_solid_svg_icons_["faPhoneAlt"]
          }), "(01)-2345678"]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full lg:w-full transform rotate-180",
      style: {
        bottom: '-19px'
      },
      "data-negative": "false",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: "h-24 w-full",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 100",
        preserveAspectRatio: "none",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: "fill-current text-gray-100",
          d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        })
      })
    })]
  });
}


// CONCATENATED MODULE: ./components/FeatureSection.tsx







function FeatureSection() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "lg:grid lg:grid-cols-12 py-10 px-4 mt-48",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-span-4 flex",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-col justify-center flex-shrink-0 items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "text-3xl text-white",
          icon: free_solid_svg_icons_["faCheck"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "p-5 flex-1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-nunito text-2xl font-bold mb-2",
          children: "10 Years Experience"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-700",
          children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-span-4 flex",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-col justify-center flex-shrink-0 items-center rounded-full min-w-16 min-h-16 w-16 h-16 bg-coral border-1 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "text-3xl text-white",
          icon: free_solid_svg_icons_["faLeaf"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "p-5 flex-1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-nunito text-2xl font-bold mb-2",
          children: "Wedding Specialisation"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-700",
          children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-span-4 flex",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-col justify-center flex-shrink-0 items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "text-3xl text-white",
          icon: free_solid_svg_icons_["faUsers"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "p-5 flex-1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-nunito text-2xl font-bold mb-2",
          children: "Professional Staffs"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-700",
          children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-span-4 flex",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-col justify-center flex-shrink-0 items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "text-3xl text-white",
          icon: free_solid_svg_icons_["faList"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "p-5 flex-1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-nunito text-2xl font-bold mb-2",
          children: "Tasty Menu"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-700",
          children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-span-4 flex",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-col justify-center flex-shrink-0 items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "text-3xl text-white",
          icon: free_solid_svg_icons_["faThumbsUp"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "p-5 flex-1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-nunito text-2xl font-bold mb-2",
          children: "Safe Ingredients"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-700",
          children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "col-span-4 flex",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-col justify-center flex-shrink-0 items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "text-3xl text-white",
          icon: free_solid_svg_icons_["faCalendarMinus"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "p-5 flex-1",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-nunito text-2xl font-bold mb-2",
          children: "24 Hour Services"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-700",
          children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
        })]
      })]
    })]
  });
}


// CONCATENATED MODULE: ./components/ServicesSection.tsx





function ServicesSection() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "p-4 bg-gray-100",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex-1 mr-5 pb-16",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-parisienne font-semibold text-5xl text-center",
          children: "Our Services"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-600 text-center md:px-24",
          children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "w-full lg:flex lg:justify-between lg:mb-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "mb-5 lg:mb-0 lg:mr-4 bg-white",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "home/3-1024x683.jpg"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "p-10",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: "font-parisienne font-semibold text-5xl",
              children: "Wedding Catering"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-rubik text-gray-600",
              children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "bg-white",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "home/4-1024x683.jpg"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "p-10",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: "font-parisienne font-semibold text-5xl",
              children: "Wedding Gifts"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-rubik text-gray-600",
              children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "w-full lg:grid lg:grid-cols-2 my-8 lg:items-center lg:-ml-4",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: "max-w-100 h-auto w-full",
          src: "home/5-1024x681.jpg"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "p-10 h-full bg-white lg:-mr-4",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-parisienne font-semibold text-5xl mb-2",
            children: "Wedding Gifts"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-600 mb-10",
            children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: "cursor-pointer py-3 px-8 rounded-full font-semibold bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out",
            children: " Learn More"
          })]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full transform",
      style: {
        bottom: '-19px'
      },
      "data-negative": "false",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: "h-24 w-full",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 100",
        preserveAspectRatio: "none",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: "fill-current text-gray-100",
          d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        })
      })
    })]
  });
}


// CONCATENATED MODULE: ./components/OurServices.tsx





function OurServices() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "bg-gray-100 p-16 text-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "font-parisienne text-5xl font-semibold",
        children: "Our Services"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "font-rubik text-gray-700 md:px-48",
        children: " Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil."
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full transform rotate-180 bg-gray-100",
      style: {
        bottom: '-14px'
      },
      "data-negative": "false",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: "lg:h-24 w-full",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 100",
        preserveAspectRatio: "none",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: "fill-current text-white",
          d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        })
      })
    })]
  });
}


// CONCATENATED MODULE: ./components/ServicesSection2.tsx





function ServicesSection2() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "lg:flex mt-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: "w-full lg:w-1/2",
        src: "home/3-1024x683.jpg"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "p-10 bg-gray-100",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-parisienne font-semibold text-h2",
          children: "Wedding Catering"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-700 mb-10",
          children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "cursor-pointer py-3 px-8 rounded-full font-rubik text-sm font-medium bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out",
          children: " Call Us Now"
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "lg:flex",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "p-10 bg-gray-100",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-parisienne font-semibold text-h2",
          children: "Wedding Gifts"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-700 mb-10",
          children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "cursor-pointer py-3 px-8 rounded-full font-rubik text-sm font-medium bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out",
          children: " Call Us Now"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: "w-full lg:w-1/2",
        src: "home/4-1024x683.jpg"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "lg:flex mb-24",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: "w-full lg:w-1/2",
        src: "home/5-1024x681.jpg"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "p-10 bg-gray-100",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-parisienne font-semibold text-h2",
          children: "Wedding Gifts"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-gray-700 mb-10",
          children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "cursor-pointer py-3 px-8 rounded-full font-semibold bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out",
          children: " Learn More"
        })]
      })]
    })]
  });
}


// CONCATENATED MODULE: ./components/DailyMenu.tsx






function DailyMenu() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "lg:flex mt-5",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "p-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: "font-parisienne text-h1 font-semibold",
        children: "Daily Menu"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "font-rubik text-gray-700 mb-5",
        children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil."
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        className: "mb-5 list-disc",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Finger Foods"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Roasted Salmon"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Special Chicken"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Strawberry Cake"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Wedding Food"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: "flex items-center w-48 text-white cursor-pointer font-bold bg-coral hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 ml-2",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "mr-3 mt-1",
          icon: free_solid_svg_icons_["faPhoneAlt"]
        }), "(01)-2345678"]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "p-10",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "services/g1e-ojs6tq3cg4k059k15pjk204bm87b2ypqcove6tleds.jpg"
      })
    })]
  });
}


// CONCATENATED MODULE: ./components/SeasonalMenu.tsx






function SeasonalMenu() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "lg:flex mt-5",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "p-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: "font-parisienne text-6xl font-semibold",
        children: "Seasonal Menu"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "font-rubik text-gray-700 mb-5",
        children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil."
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        className: "mb-5 list-disc",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Finger Foods"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Roasted Salmon"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Special Chicken"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Strawberry Cake"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Wedding Food"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: "flex items-center w-48 text-white cursor-pointer font-bold bg-coral hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 ml-2",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "mr-3 mt-1",
          icon: free_solid_svg_icons_["faPhoneAlt"]
        }), "(01)-2345678"]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "p-10",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "home/6-1024x1024.jpg"
      })
    })]
  });
}


// CONCATENATED MODULE: ./components/SeasonalMenu2.tsx






function SeasonalMenu2() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "lg:flex mt-5",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "p-10",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "home/6-1024x1024.jpg"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "p-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        className: "font-parisienne text-6xl font-semibold",
        children: "Seasonal Menu"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "font-rubik text-gray-700 mb-5",
        children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil."
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        className: "mb-5 list-disc",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Finger Foods"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Roasted Salmon"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Special Chicken"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Strawberry Cake"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "flex",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: " font-rubik font-semibold text-gray-700 text-lg mb-5",
            children: "Wedding Food"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-semibold text-coral text-xl font-rubik",
            children: "$15"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: "flex items-center w-48 text-white cursor-pointer font-bold bg-coral hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 ml-2",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "mr-3 mt-1",
          icon: free_solid_svg_icons_["faPhoneAlt"]
        }), "(01)-2345678"]
      })]
    })]
  });
}


// CONCATENATED MODULE: ./components/Rating.tsx





function Rating() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "flex mt-8",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: "text-gold-800 mr-1",
      icon: free_solid_svg_icons_["faStar"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: "text-gold-800 mr-1",
      icon: free_solid_svg_icons_["faStar"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: "text-gold-800 mr-1",
      icon: free_solid_svg_icons_["faStar"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: "text-gold-800 mr-1",
      icon: free_solid_svg_icons_["faStar"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: "text-gold-800 mr-1",
      icon: free_solid_svg_icons_["faStar"]
    })]
  });
}
// EXTERNAL MODULE: external "react-awesome-slider"
var external_react_awesome_slider_ = __webpack_require__("oZiw");
var external_react_awesome_slider_default = /*#__PURE__*/__webpack_require__.n(external_react_awesome_slider_);

// EXTERNAL MODULE: ./node_modules/react-awesome-slider/dist/styles.css
var dist_styles = __webpack_require__("jSAk");

// CONCATENATED MODULE: ./components/ReviewSection.tsx









function ReviewSection() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "w-full bg-cover bg-scene-tint text-center mb-24",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-col items-center py-20 lg:p-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "font-parisienne font-semibold text-5xl text-white",
        children: "What Customers Say"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "font-rubik text-white md:px-24 -mb-20",
        children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_awesome_slider_default.a, {
        className: "h-screen lg:h-auto",
        organicArrows: false,
        buttonContentRight: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "rounded-full bg-white opacity-75 hover:opacity-100 mt-24 w-8 h-8 cursor-pointer flex flex-col justify-center items-center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "text-gray-900",
            icon: free_solid_svg_icons_["faChevronRight"]
          })
        }),
        buttonContentLeft: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "rounded-full bg-white opacity-75 hover:opacity-100 mt-24 w-8 h-8 cursor-pointer flex flex-col justify-center items-center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "text-gray-900",
            icon: free_solid_svg_icons_["faChevronLeft"]
          })
        }),
        infinite: true,
        bullets: false,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-col items-center bg-transparent",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto",
            children: "\u201C"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-playfair text-white text-xl italic",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "home/ava1.jpg"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "text-white font-nunito text-lg font-bold mt-3",
            children: "John Travolta"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-col items-center bg-transparent",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-4 mx-auto",
            children: "\u201C"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-playfair text-white text-xl italic",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "home/ava2.jpg"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "text-white font-nunito text-lg font-bold mt-3",
            children: "Kelly Clarkson"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-col items-center bg-transparent",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto",
            children: "\u201C"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-playfair text-white text-xl italic",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "home/ava3.jpg"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "text-white font-nunito text-lg font-bold mt-3",
            children: "Kurt Russel"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-col items-center bg-transparent",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto",
            children: "\u201C"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-playfair text-white text-xl italic",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "home/ava4.jpg"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "text-white font-nunito text-lg font-bold mt-3",
            children: "John Travolta"
          })]
        })]
      })]
    })
  });
}


// CONCATENATED MODULE: ./components/ReviewSection2.tsx










function ReviewSection2() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-full bg-cover bg-scene-tint text-center my-24",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-col items-center",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "w-full bg-transparent",
          style: {
            bottom: '-19px'
          },
          "data-negative": "false",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            className: "lg:h-24 w-full",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1000 100",
            preserveAspectRatio: "none",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              className: "fill-current text-white",
              d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-parisienne px-20 font-semibold text-h1 text-white",
          children: "What Customers Say"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-white md:px-24 lg:-mb-20",
          children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_awesome_slider_default.a, {
          organicArrows: false,
          buttonContentRight: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "rounded-full bg-white opacity-75 hover:opacity-100 mt-24 w-8 h-8 cursor-pointer flex flex-col justify-center items-center",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              className: "text-gray-900",
              icon: free_solid_svg_icons_["faChevronRight"]
            })
          }),
          buttonContentLeft: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "rounded-full bg-white opacity-75 hover:opacity-100 mt-24 w-8 h-8 cursor-pointer flex flex-col justify-center items-center",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              className: "text-gray-900",
              icon: free_solid_svg_icons_["faChevronLeft"]
            })
          }),
          infinite: true,
          bullets: false,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "flex flex-col items-center bg-transparent",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto",
              children: "\u201C"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-playfair text-white text-xl italic",
              children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "home/ava1.jpg"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-white font-nunito text-lg font-bold mt-3",
              children: "John Travolta"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "flex flex-col items-center bg-transparent",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-4 mx-auto",
              children: "\u201C"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-playfair text-white text-xl italic",
              children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "home/ava2.jpg"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-white font-nunito text-lg font-bold mt-3",
              children: "Kelly Clarkson"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "flex flex-col items-center bg-transparent",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto",
              children: "\u201C"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-playfair text-white text-xl italic",
              children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "home/ava3.jpg"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-white font-nunito text-lg font-bold mt-3",
              children: "Kurt Russel"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "flex flex-col items-center bg-transparent",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto",
              children: "\u201C"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "font-playfair text-white text-xl italic",
              children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida."
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "home/ava4.jpg"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-white font-nunito text-lg font-bold mt-3",
              children: "John Travolta"
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "w-full transform rotate-180 bg-transparent",
        style: {
          bottom: '-19px'
        },
        "data-negative": "false",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "h-10 lg:h-24 w-full",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1000 100",
          preserveAspectRatio: "none",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            className: "fill-current text-white",
            d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          })
        })
      })]
    })
  });
}


// CONCATENATED MODULE: ./components/ContactUsHeading.tsx





function ContactUsHeading() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "bg-gray-100 text-center p-12 pb-20",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "font-parisienne text-h1 font-semibold mb-3",
        children: "Contact Us"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "font-rubik md:px-32 text-gray-700",
        children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil."
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "contact/8.jpg"
    })]
  });
}


// CONCATENATED MODULE: ./components/ContactSection.tsx







function ContactSection() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full transform rotate-180",
      style: {
        bottom: '-19px'
      },
      "data-negative": "false",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: "h-24 w-full",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 100",
        preserveAspectRatio: "none",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: "fill-current text-gray-100",
          d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "lg:flex bg-gray-100 py-10 px-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "text-3xl text-white",
            icon: free_solid_svg_icons_["faKey"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "p-5 flex-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-nunito text-2xl font-bold mb-2",
            children: "Office Location"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-700",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-1 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "text-3xl text-white",
            icon: free_solid_svg_icons_["faEnvelope"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "p-5 flex-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-nunito text-2xl font-bold mb-2",
            children: "Email Address"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-700",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "text-3xl text-white",
            icon: free_solid_svg_icons_["faPhoneAlt"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "p-5 flex-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-nunito text-2xl font-bold mb-2",
            children: "Phone Number"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-700",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
          })]
        })]
      })]
    })]
  });
}


// CONCATENATED MODULE: ./components/ContactSection2.tsx







function ContactSection2() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full transform rotate-180",
      style: {
        bottom: '-19px'
      },
      "data-negative": "false",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: "h-24 w-full",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1000 100",
        preserveAspectRatio: "none",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: "fill-current text-gray-100",
          d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "lg:grid lg:grid-cols-12 bg-gray-100 py-10 px-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-span-6 flex",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "text-3xl text-white",
            icon: free_solid_svg_icons_["faKey"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "p-5 flex-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-nunito text-2xl font-bold mb-2",
            children: "Office Location"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-700",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-span-6 flex",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-1 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "text-3xl text-white",
            icon: free_solid_svg_icons_["faEnvelope"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "p-5 flex-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-nunito text-2xl font-bold mb-2",
            children: "Email Address"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-700",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-span-6 flex",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "text-3xl text-white",
            icon: free_solid_svg_icons_["faPhoneAlt"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "p-5 flex-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-nunito text-2xl font-bold mb-2",
            children: "Phone Number"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-700",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-span-6 flex",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: "text-3xl text-white",
            icon: free_solid_svg_icons_["faPaperPlane"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "p-5 flex-1",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-nunito text-2xl font-bold mb-2",
            children: "Social Connect"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "font-rubik text-gray-700",
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
          })]
        })]
      })]
    })]
  });
}


// CONCATENATED MODULE: ./components/ContactForm.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ContactForm() {
  function isValidEmail() {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email) || user.email === '';
  }

  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])({
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false
  });

  function setSubmitted(bool) {
    setUser(user => _objectSpread(_objectSpread({}, user), {}, {
      submitted: bool
    }));
  }

  function handleTextAreaChange(e) {
    const {
      name,
      value
    } = e.target;
    setUser(user => _objectSpread(_objectSpread({}, user), {}, {
      [name]: value
    }));
  }

  function handleInputChange(e) {
    const {
      name,
      value
    } = e.target;
    setUser(user => _objectSpread(_objectSpread({}, user), {}, {
      [name]: value
    }));
  }

  function allFieldsExist() {
    Object.keys(user).forEach(key => {
      if (user[key] === '') {
        return false;
      } //use key and value here

    });
    return true;
  } // dispatch an action to the redux store, updates 'user' object


  function handleSubmit() {
    //console.log(`%cuser details: ${JSON.stringify(user)}`, 'color:green')
    setSubmitted(true);

    if (allFieldsExist()) {
      console.log("message sent");
    }
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "text-center px-1 my-12",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: "font-parisienne text-h1 font-semibold",
      children: "Send Us A Message"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "font-rubik text-gray-700 md:px-24",
      children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil."
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      name: "form",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "grid grid-cols-12 gap-8",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            name: "name",
            className: "border border-gray-400 px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-700",
            placeholder: "Full Name*",
            value: user.name,
            onChange: handleInputChange
          }), user.submitted && !user.name && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "text-theme-6 mt-2",
            children: "Full Name is required"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            name: "email",
            className: "border border-gray-400 px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-700",
            style: {
              borderColor: isValidEmail() ? '' : '#D32929'
            },
            placeholder: "Email*",
            value: user.email,
            onChange: handleInputChange
          }), user.submitted && !user.email && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "text-theme-6 mt-2",
            children: "Email is required"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "col-span-4",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "text",
            name: "subject",
            className: "border border-gray-400 px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-700",
            style: {
              borderColor: isValidEmail() ? '' : '#D32929'
            },
            placeholder: "Subject",
            value: user.subject,
            onChange: handleInputChange
          }), user.submitted && !user.subject && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "text-theme-6 mt-2",
            children: "Subject is required"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-span-12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
          name: "message",
          rows: 5,
          className: "border border-gray-400 px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-700",
          style: {
            borderColor: isValidEmail() ? '' : '#D32929'
          },
          placeholder: "Message",
          value: user.message,
          onChange: handleTextAreaChange
        }), user.submitted && !user.message && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "text-theme-6 mt-2",
          children: "Message is required"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "w-full",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          type: "submit",
          className: "hover:text-white font-rubik text-sm font-medium cursor-pointer py-3 px-8 mt-5 mx-auto hover:bg-coral bg-gray-200 text-grey-700 transition-all duration-300 ease-in-out",
          children: "SUBMIT"
        })
      })]
    })]
  });
}


// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// CONCATENATED MODULE: ./components/CallUsImage.tsx






function CallUsImage() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "bg-platter-tint bg-cover h-screen",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full bg-transparent",
      style: {
        bottom: '-19px'
      },
      "data-negative": "false",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
        className: "lg:h-24 w-full",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 800 100",
        preserveAspectRatio: "none",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
          className: "fill-current text-white",
          d: "M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7\r c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4\r c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "lg:grid lg:grid-cols-2",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "col-start-2 my-auto p-5",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: "text-5xl text-white mb-5",
          icon: free_regular_svg_icons_["faGem"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-parisienne text-white text-h1 font-semibold",
          children: "Wedding Catering Service For Your Happy Day"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "font-rubik text-white mt-5 mb-16",
          children: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "font-rubik cursor-pointer text-sm rounded-full font-medium text-white py-4 px-12 bg-coral hover:text-coral hover:bg-white",
          children: "(01)23456789"
        })]
      })
    })]
  });
}


// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// CONCATENATED MODULE: ./components/Footer.tsx






function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "flex justify-center bg-rich_black py-10",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex items-center mr-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        style: {
          color: "#0d47a1"
        },
        icon: free_brands_svg_icons_["faFacebookF"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: "hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out",
        children: "Facebook"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex items-center mr-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        style: {
          color: "#4D7A9E"
        },
        icon: free_brands_svg_icons_["faInstagram"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: "hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out",
        children: "Instagram"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex items-center mr-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        style: {
          color: "#ff0000"
        },
        icon: free_brands_svg_icons_["faYoutube"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: "hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out",
        children: "Youtube"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex items-center mr-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        style: {
          color: "#40c4ff"
        },
        icon: free_brands_svg_icons_["faTwitter"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: "hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out",
        children: "Twitter"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex items-center mr-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        style: {
          color: "#bd081c"
        },
        icon: free_brands_svg_icons_["faPinterestP"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: "hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out",
        children: "Pinterest"
      })]
    })]
  });
}


// CONCATENATED MODULE: ./components/index.tsx

























/***/ }),

/***/ "oZiw":
/***/ (function(module, exports) {

module.exports = require("react-awesome-slider");

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });