/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NCC1701D_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NCC1701D.png */ \"./src/NCC1701D.png\");\n\ndocument.body.style.overflow = \"hidden\";\nconst buttonWarp = document.createElement(\"button\");\nbuttonWarp.innerHTML = \"warp\";\nbuttonWarp.style.position = \"absolute\";\nbuttonWarp.style.right = \"10px\";\nbuttonWarp.style.bottom = \"70px\";\nbuttonWarp.style.padding = \"10px\";\nbuttonWarp.onclick = () => {\n\tspeed.setValue(speed.getValue() + random(1, 4));\n\twarp.updateWarp();\n};\ndocument.body.appendChild(buttonWarp);\nconst buttonSlow = document.createElement(\"button\");\nbuttonSlow.innerHTML = \"slow\";\nbuttonSlow.style.position = \"absolute\";\nbuttonSlow.style.right = \"10px\";\nbuttonSlow.style.bottom = \"10px\";\nbuttonSlow.style.padding = \"10px\";\nbuttonSlow.onclick = () => {\n\tif (speed.getValue() > 1) {\n\t\tspeed.setValue(speed.getValue() - random(1, 4));\n\t\twarp.updateSlow();\n\t}\n};\ndocument.body.appendChild(buttonSlow);\nconst width = window.innerWidth;\nconst height = window.innerHeight;\nconst canvas = document.createElement(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst random = (min, max) => {\n\treturn Math.floor(Math.random() * (max - min + 1)) + min;\n};\nconst map = (value, min1, max1, min2, max2) => {\n\treturn ((value - min1) / (max1 - min1)) * (max2 - min2) + min2;\n};\nfunction Speed(value) {\n\tthis.value = value;\n}\nSpeed.prototype.setValue = function (value) {\n\tthis.value = value;\n};\nSpeed.prototype.getValue = function () {\n\treturn this.value;\n};\nconst speed = new Speed(random(1, 4));\nconst line = (x1, y1, x2, y2) => {\n\tctx.beginPath();\n\tctx.moveTo(x1, y1);\n\tctx.lineTo(x2, y2);\n\tctx.strokeStyle = \"#fff\";\n\tctx.stroke();\n\tctx.closePath();\n};\nconst elipse = (x, y, rx, ry) => {\n\tctx.beginPath();\n\tctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);\n\tctx.fillStyle = \"#fff\";\n\tctx.fill();\n\tctx.closePath();\n};\nfunction Ship() {\n\tthis.image = new Image();\n\tthis.image.src = _NCC1701D_png__WEBPACK_IMPORTED_MODULE_0__;\n\tthis.size = 200;\n\tthis.ratio = 1;\n\tthis.width = this.size * this.ratio;\n\tthis.height = this.size * this.ratio;\n\tthis.x = this.width / 2;\n\tthis.y = this.height / 2;\n}\nShip.prototype.draw = function () {\n\tctx.drawImage(\n\tthis.image, \n -this.x / warp.getX(),\n\tthis.y / warp.getY(),\n\tthis.width / warp.getX(),\n\tthis.height / warp.getY()\n\t);\n};\nfunction Warp() {\n\tthis.xFactor = 1;\n\tthis.yFactor = 1.6;\n}\nWarp.prototype.updateWarp = function () {\n\tthis.xFactor += 0.1;\n\tthis.yFactor += 0.1;\n};\nWarp.prototype.updateSlow = function () {\n\tthis.xFactor -= 0.1;\n\tthis.yFactor -= 0.1;\n};\nWarp.prototype.getX = function () {\n\treturn this.xFactor;\n};\nWarp.prototype.getY = function () {\n\treturn this.yFactor;\n};\n\nconst warp = new Warp();\n\nconst ship = new Ship();\nconst stars = [];\nconst density = 1;\nconst origin = 2;\nfunction Star() {\n\tthis.z = random(width, width * 4);\n\tthis.x = random(-width, width);\n\tthis.y = random(-height, height);\n\tthis.size = random(1, 2);\n\tthis.speed = speed.getValue();\n\tthis.pz = this.z;\n}\nStar.prototype.show = function () {\n\tconst cx = map(this.x / this.z, 0, 1, 0, width);\n\tconst cy = map(this.y / this.z, 0, 1, 0, height);\n\tconst px = map(this.x / this.pz, 0, 1, 0, width);\n\tconst py = map(this.y / this.pz, 0, 1, 0, height);\n\tthis.pz = this.z;\n\t//elipse(cx, cy, 0.1, 0.1);\n\t//ctx.fillStyle = \"#fff\";\n\t//ctx.fillRect(cx, cy, this.size, this.size);\n\tline(px, py, cx, cy);\n};\nStar.prototype.update = function () {\n\tthis.z -= speed.getValue();\n\tif (this.z < 0) {\n\t\tthis.z = width;\n\t\tthis.x = random(-width, width);\n\t\tthis.y = random(-height, height);\n\t\tthis.pz = this.z;\n\t}\n};\nconst setup = () => {\n\tcanvas.width = width;\n\tcanvas.height = height;\n\tctx.translate(width / origin, height / origin);\n\tctx.fillStyle = \"#000\";\n\tctx.fillRect(0, 0, width, height);\n\tdocument.body.appendChild(canvas);\n\tdocument.body.style.margin = 0;\n\tfor (let i = 0; i < width * density; i++) {\n\t\tstars.push(new Star());\n\t}\n};\nconst draw = () => {\n\tctx.fillStyle = \"#000\";\n\tctx.fillRect(-width / origin, -height / origin, width, height);\n\tfor (let i = 0; i < width * density; i++) {\n\t\tstars[i].update();\n\t\tstars[i].show();\n\t}\n\tship.draw();\n\trequestAnimationFrame(draw);\n};\nsetup();\ndraw();\n\n//const width = window.innerWidth;\n//const height = window.innerHeight;\n//const random = (min, max) => {\n//\treturn Math.random() * (max - min) + min;\n//};\n//const map = (value, min1, max1, min2, max2) => {\n//\treturn (value - min1) / (max1 - min1) * (max2 - min2) + min2;\n//};\n//const line = (x1, y1, x2, y2) => {\n//\tctx.beginPath();\n//\tctx.moveTo(x1, y1);\n//\tctx.lineTo(x2, y2);\n//\tctx.strokeStyle = '#fff';\n//\tctx.stroke();\n//\tctx.closePath();\n//};\n//\n//const canvas = document.createElement('canvas');\n//canvas.width = window.innerWidth;\n//canvas.height = window.innerHeight;\n//canvas.style.position = 'absolute';\n//canvas.style.top = 0;\n//canvas.style.left = 0;\n//canvas.style.right = 0;\n//canvas.style.bottom = 0;\n//canvas.style.zIndex = -1;\n//document.body.appendChild(canvas);\n//const ctx = canvas.getContext('2d');\n////ctx.translate(width / 2, height / 2);\n////ctx.fillStyle = '#000'\n////ctx.fillRect(0, 0, canvas.width, canvas.height);\n//\n// function Ship () {\n// \tthis.image = new Image();\n// \tthis.image.src = NCC;\n//   this.size = 200;\n// \tthis.ratio = 1;\n// \tthis.width = this.size * this.ratio;\n// \tthis.height = this.size * this.ratio;\n// \tthis.x = this.width / 2;\n// \tthis.y = this.height / 2;\n//\n// }\n// Ship.prototype.draw = function () {\n// \t//ctx.drawImage(this.image, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height / 1.4);\n// \tctx.drawImage(this.image, -this.x, this.y , this.width, this.height / 1.4);\n// };\n//\n// const ship = new Ship();\n//const stars = [];\n//\n//function Star () {\n//\tthis.x = random(-width, width);\n//\tthis.y = random(-height, height);\n//\tthis.z = random(width * 2, width * 3);\n//\tthis.pz = this.z;\n//}\n//Star.prototype.draw = function () {\n//\tconst cx = map(this.x / this.z, 0, 1, 0, width);\n//\tconst cy = map(this.y / this.z, 0, 1, 0, height);\n//\tconst px = map(this.x / this.pz, 0, 1, 0, width);\n//\tconst py = map(this.y / this.pz, 0, 1, 0, height);\n//\tthis.pz = this.z;\n//\tline(px, py, cx, cy);\n//};\n//Star.prototype.update = function () {\n//\tthis.z -= random(2,22);\n//\tif(this.z <= 0) {\n//\t\tthis.x = random(-width, width);\n//\t\tthis.y = random(-height, height);\n//\t\tthis.z = random(width * 2, width * 3);\n//\t\tthis.pz = this.z;\n//\t}\n//};\n//function setup() {\n//\tctx.translate(width / 2, height / 2);\n//  ctx.fillStyle = '#000';\n//\tctx.fillRect(-width / 2, -height / 2, width, height);\n//\tfor (let i = 0; i < width; i++) {\n//\t\tstars.push(new Star());\n//\t}\n//}\n//\n//function loop () {\n//\trequestAnimationFrame(loop);\n//\n//\tctx.fillStyle = '#000';\n//\tctx.fillRect(-width / 2, -height / 2, width, height);\n//\tfor (let i = 0; i < stars.length; i++) {\n//\t\tstars[i].update();\n//\t\tstars[i].draw();\n//\t}\n//\tship.draw();\n//}\n//\n//setup();\n//loop();\n\n\n//# sourceURL=webpack://dev/./src/index.js?");

/***/ }),

/***/ "./src/NCC1701D.png":
/*!**************************!*\
  !*** ./src/NCC1701D.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"733fb99858e991d7463c.png\";\n\n//# sourceURL=webpack://dev/./src/NCC1701D.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;