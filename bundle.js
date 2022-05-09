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

/***/ "./src/Canvas.js":
/*!***********************!*\
  !*** ./src/Canvas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\nfunction Canvas (width, height) {\n\tthis.width = width;\n\tthis.height = height;\n\tthis.canvas = document.createElement('canvas');\n\tthis.canvas.width = width;\n\tthis.canvas.height = height;\n\tthis.context = this.canvas.getContext('2d');\n}\n\nCanvas.prototype.init = function () {\n\tthis.canvas.style.position = 'absolute';\n\tthis.canvas.style.top = '0px';\n\tthis.canvas.style.left = '0px';\n\tthis.canvas.style.width = '100%';\n\tthis.canvas.style.height = '100%';\n\tthis.clear();\n\tthis.context.translate(this.width / 2, this.height / 2);\n\tdocument.body.appendChild(this.canvas);\n\treturn this.context;\n}\n\nCanvas.prototype.clear = function () {\n\t//this.context.clearRect(-this.width, -this.height, this.width, this.height);\n\tthis.context.fillStyle = '#000';\n\tthis.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);\n}\n\n\n\n\n//# sourceURL=webpack://dev/./src/Canvas.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(ctx, img) {\n\tthis.ctx = ctx;\n\tthis.img = new Image();\n\tthis.img.src = img;\n\tthis.width = 0;\n\tthis.height = 0;\n\tthis.x = 0;\n\tthis.y = 0;\n\tthis.v = {\n\t\tx: 0,\n\t\ty: 0,\n\t};\n\tthis.g = {\n\t\tw: 0,\n\t\th: 0,\n\t};\n\tthis.initial = {\n\t\tw: 0,\n\t\th: 0,\n\t\tx: 0,\n\t\ty: 0,\n\t\tduration: 0,\n\t};\n\tthis.isLoaded = false;\n\tthis.isAnimating = false;\n\n\tthis.timestamp = 0;\n\n\tthis.duration = 0;\n}\n\nShip.prototype.setTimestamp = function (timestamp) {\n\tthis.timestamp = timestamp;\n};\n\nShip.prototype.getTimestamp = function () {\n\treturn this.timestamp;\n};\n\nShip.prototype.init = function () {\n\tthis.img.onload = () => {\n\t\tthis.width = this.img.width / 4;\n\t\tthis.height = this.img.height / 4;\n\t\tthis.x = -this.width / 2;\n\t\tthis.y = -this.height / 2;\n\t\tthis.isLoaded = true;\n\t\tthis.initial.w = this.width;\n\t\tthis.initial.h = this.height;\n\t\tthis.initial.x = this.x;\n\t\tthis.initial.y = this.y;\n\t\tthis.startTime = window.performance.now();\n\t};\n\n\treturn this;\n};\n\nShip.prototype.draw = function () {\n\tif (this.isLoaded) {\n    //this.ctx.fillStyle = \"#fff\";\n\t\t//this.ctx.font = \"20px Arial\";\n\t\t//this.ctx.fillText(this.duration, -100, -200);\n\t  //this.ctx.fillText(this.g.w, -100, -180);\n\t\t//this.ctx.fillText(this.g.h, -100, -160);\n\t\t//this.ctx.fillText(this.v.x, -100, -140);\n\t\t//this.ctx.fillText(this.v.y, -100, -120);\n\t\t//this.ctx.fillText(this.startTime, 0, -200);\n\t\t//this.clear();\n\t\tthis.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);\n\t}\n};\n\nShip.prototype.clear = function () {\n\tthis.ctx.fillStyle = \"#000\";\n\tthis.ctx.fillRect(this.x, this.y, this.width, this.height);\n};\n\nShip.prototype.down = function () {\n\t//this.v.y = this.v.y === 0.2 ? -0.2 : this.v.y - 0.2;\n\tthis.v.y += -0.4;\n\tthis.isAnimating = true;\n};\n\nShip.prototype.up = function () {\n\t//this.v.y = this.v.y === -0.2 ? 0.2 : this.v.y + 0.2;\n\tthis.v.y += 0.4;\n\tthis.isAnimating = true;\n};\n\nShip.prototype.left = function () {\n\t//this.v.x = this.v.x === -0.2 ? 0.2 : this.v.x + 0.2;\n\tthis.v.x += 0.2;\n\tthis.isAnimating = true;\n};\n\nShip.prototype.right = function () {\n\t//this.v.x = this.v.x === 0.2 ? -0.2 : this.v.x - 0.2;\n\tthis.v.x += -0.2;\n\tthis.isAnimating = true;\n};\n\nShip.prototype.upLeft = function () {\n\t//this.v.x = this.v.x === -0.2 ? 0.2 : this.v.x + 0.2;\n\t//this.v.y = this.v.y === -0.2 ? 0.2 : this.v.y + 0.2;\n\tthis.v.x += 0.2;\n\tthis.v.y += 0.2;\n\tthis.isAnimating = true;\n};\n\nShip.prototype.upRight = function () {\n\t//this.v.x = this.v.x === 0.2 ? -0.2 : this.v.x - 0.2;\n\t//this.v.y = this.v.y === -0.2 ? 0.2 : this.v.y + 0.2;\n\tthis.v.x += -0.2;\n\tthis.v.y += 0.2;\n\tthis.isAnimating = true;\n};\n\nShip.prototype.downLeft = function () {\n\t//this.v.x = this.v.x === -0.2 ? 0.2 : this.v.x + 0.2;\n\t//this.v.y = this.v.y === 0.2 ? -0.2 : this.v.y - 0.2;\n\tthis.v.x += 0.2;\n\tthis.v.y += -0.2;\n\tthis.isAnimating = true;\n};\n\nShip.prototype.downRight = function () {\n\t//this.v.x = this.v.x === 0.2 ? -0.2 : this.v.x - 0.2;\n\t//this.v.y = this.v.y === 0.2 ? -0.2 : this.v.y - 0.2;\n\tthis.v.x += -0.2;\n\tthis.v.y += -0.2;\n\tthis.isAnimating = true;\n};\n\nShip.prototype.warp = function () {\n\t//this.g.w = this.g.w === 0.1 ? -0.1 : this.g.w - 0.1;\n\t//this.g.h = this.g.h === -0.1 ? 0.1 : this.g.h + 0.1;\n\t//this.v.x = this.v.x === 0.05 ? -0.05 : this.v.x - 0.05;\n\t//this.v.y = this.v.y === -0.1 ? 0.1 : this.v.y + 0.1;\n\tthis.g.w = 0;\n\tthis.g.h = 0;\n\tthis.v.x = 0;\n\tthis.v.y = 0;\n\tthis.g.w += -0.2;\n\tthis.g.h += 0.2;\n\tthis.v.x += -0.1;\n\t//this.v.y += 0.2;\n\tthis.isAnimating = true;\n\tthis.duration = 60;\n};\n\nShip.prototype.unwarp = function () {\n\t//this.g.w = this.g.w === -0.1 ? 0.1 : this.g.w + 0.1;\n\t//this.g.h = this.g.h === 0.1 ? -0.1 : this.g.h - 0.1;\n\t//this.v.x = this.v.x === -0.05 ? 0.05 : this.v.x + 0.05;\n\t//this.v.y = this.v.y === 0.1 ? -0.1 : this.v.y - 0.1;\n\tthis.g.w = 0;\n\tthis.g.h = 0;\n\tthis.v.x = 0;\n\tthis.v.y = 0;\n\tthis.g.w += 0.2;\n\tthis.g.h += -0.2;\n\tthis.v.x += 0.1;\n\t//this.v.y += -0.2;\n\tthis.isAnimating = true;\n\tthis.duration = 60;\n};\n\nShip.prototype.stop = function () {\n\tthis.g.w = 0;\n\tthis.g.h = 0;\n\tthis.v.x = 0;\n\tthis.v.y = 0;\n\tthis.isAnimating = false;\n};\nShip.prototype.reset = function () {\n\t//this.clear();\n\tthis.g.w = 0;\n\tthis.g.h = 0;\n\tthis.v.x = 0;\n\tthis.v.y = 0;\n\tthis.x = this.initial.x;\n\tthis.y = this.initial.y;\n\tthis.width = this.initial.w;\n\tthis.height = this.initial.h;\n\tthis.isAnimating = false;\n\tthis.duration = 0;\n};\n\nShip.prototype.update = function () {\n\t//this.clear();\n\n\t//\tif (this.isWarping && !this.isUnwarping) {\n\n\t//\tthis.g.w -= 0.001;\n\t//\tthis.g.h -= -0.001;\n\t//\tthis.v.x -= 0.0005;\n\t//\tthis.v.y -= -0.001;\n\n\t//\t}\n\n\t//\tif (this.isUnwarping && !this.isWarping) {\n\n\t//\tthis.g.w -= -0.001;\n\t//\tthis.g.h -= 0.001;\n\t//\tthis.v.x -= -0.0005;\n\t//\tthis.v.y -= 0.001;\n\n\t//\t}\n\tif (this.duration === 0) {\n\n\t\tthis.y += -this.v.y;\n\t\tthis.isAnimating = false;\n\t\tthis.duration = 0;\n\t}\n\n\tif (this.isAnimating && this.duration > 0 && this.duration <= 60) {\n\t\tthis.duration--;\n\n\t\tthis.width += this.g.w;\n\t\tthis.height += this.g.h;\n\t\tthis.x += -this.v.x;\n\t\t//this.y += -this.v.y;\n\t}\n\n\tif (this.isAnimating) {\n\t}\n};\n\n\n//# sourceURL=webpack://dev/./src/Ship.js?");

/***/ }),

/***/ "./src/Star.js":
/*!*********************!*\
  !*** ./src/Star.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Star\": () => (/* binding */ Star)\n/* harmony export */ });\nfunction Star (ctx) {\n\tthis.ctx = ctx;\n\tthis.x = this.random(-this.ctx.canvas.width, this.ctx.canvas.width);\n\tthis.y = -this.random(-this.ctx.canvas.height, this.ctx.canvas.height);\n\tthis.z = this.random(0, this.ctx.canvas.width * 2);\n\tthis.pz = this.z;\n\tthis.d = {\n\t\tz: 5\n\t};\n\tthis.initial = {\n\t\tz: 5\n\t};\n}\n\nStar.prototype.random = (min, max) => {\n\treturn Math.floor(Math.random() * (max - min + 1)) + min;\n};\n\nStar.prototype.map = function (value, start1, stop1, start2, stop2) {\n\treturn start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));\n}\n\nStar.prototype.line = function (sx, sy, px, py) {\n\tthis.ctx.beginPath();\n\tthis.ctx.moveTo(sx, sy);\t\n\tthis.ctx.lineTo(px, py);\n\tthis.ctx.strokeStyle = '#fff';\n\tthis.ctx.stroke();\n\tthis.ctx.closePath();\n}\n\nStar.prototype.faster = function () {\n\tthis.d.z += 3;\n}\n\nStar.prototype.slower = function () {\n\tthis.d.z -= 3;\n}\n\nStar.prototype.reset = function () {\n\tthis.d.z = this.initial.z;\n}\n\nStar.prototype.stop = function () {\n\tthis.d.z = 0;\n}\n\nStar.prototype.update = function () {\n\tthis.z -= this.d.z;\n\tif (this.z < 1) {\n\t\tthis.z = this.ctx.canvas.width * 2;\n\t\tthis.x = this.random(-this.ctx.canvas.width, this.ctx.canvas.width);\n\t\tthis.y = -this.random(-this.ctx.canvas.height, this.ctx.canvas.height);\n\t\tthis.pz = this.z;\n\t}\n}\n\nStar.prototype.draw = function () {\n\tconst sx = this.map(this.x / this.z, 0, 1, 0, this.ctx.canvas.width);\n\tconst sy = this.map(this.y / this.z, 0, 1, 0, this.ctx.canvas.height);\n\tconst px = this.map(this.x / this.pz, 0, 1, 0, this.ctx.canvas.width);\n\tconst py = this.map(this.y / this.pz, 0, 1, 0, this.ctx.canvas.height);\n\tthis.pz = this.z;\n\n\tthis.line(sx, sy, px, py);\n}\n\n\n//# sourceURL=webpack://dev/./src/Star.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NCC_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NCC.png */ \"./src/NCC.png\");\n/* harmony import */ var _Canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas.js */ \"./src/Canvas.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n/* harmony import */ var _Star_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Star.js */ \"./src/Star.js\");\n\n\n\n\n\nconst width  = window.innerWidth;\nconst height = window.innerHeight;\n\nconst canvas = new _Canvas_js__WEBPACK_IMPORTED_MODULE_1__.Canvas(width, height);\nconst ctx = canvas.init();\n\nconst ship   = new _Ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(ctx, _NCC_png__WEBPACK_IMPORTED_MODULE_0__).init();\nconst stars = [];\n\nfor (let i = 0; i < width; i++) {\n\tstars.push(new _Star_js__WEBPACK_IMPORTED_MODULE_3__.Star(ctx));\n}\n\nconst loop = (timestamp) => {\n\tcanvas.clear();\n\tfor (let i = 0; i < stars.length; i++) {\n\t\tstars[i].update();\n\t\tstars[i].draw();\n\t}\n\tship.setTimestamp(timestamp);\n\tship.update();\n  ship.draw();\n\trequestAnimationFrame(loop);\n}\n\nconst down = document.createElement('button');\ndown.innerText = 'Down';\ndown.addEventListener('click', () => ship.down());\ndown.style.backgroundColor = '#333';\ndown.style.color = '#fff';\ndown.style.border = 'none';\ndown.style.position = 'absolute';\ndown.style.bottom = '0';\ndown.style.left = '0';\ndown.style.padding = '10px';\ndocument.body.appendChild(down);\n\nconst up = document.createElement('button');\nup.innerText = 'Up';\nup.addEventListener('click', () => ship.up());\nup.style.backgroundColor = '#333';\nup.style.color = '#fff';\nup.style.border = 'none';\nup.style.position = 'absolute';\nup.style.bottom = '50px';\nup.style.left = '0';\nup.style.padding = '10px';\ndocument.body.appendChild(up);\n\nconst left = document.createElement('button');\nleft.innerText = 'Left';\nleft.addEventListener('click', () => ship.left());\nleft.style.position = 'absolute';\nleft.style.bottom = '100px';\nleft.style.left = '0';\nleft.style.padding = '10px';\n//document.body.appendChild(left);\t\n\nconst right = document.createElement('button');\nright.innerText = 'Right';\nright.addEventListener('click', () => ship.right());\nright.style.position = 'absolute';\nright.style.bottom = '150px';\nright.style.left = '0';\nright.style.padding = '10px';\n//document.body.appendChild(right);\n\nconst upLeft = document.createElement('button');\nupLeft.innerText = 'Up Left';\nupLeft.addEventListener('click', () => ship.upLeft());\nupLeft.style.position = 'absolute';\nupLeft.style.bottom = '200px';\nupLeft.style.left = '0';\nupLeft.style.padding = '10px';\n//document.body.appendChild(upLeft);\n\nconst upRight = document.createElement('button');\nupRight.innerText = 'Up Right';\nupRight.addEventListener('click', () => ship.upRight());\nupRight.style.position = 'absolute';\nupRight.style.bottom = '250px';\nupRight.style.left = '0';\nupRight.style.padding = '10px';\n//document.body.appendChild(upRight);\n\nconst downLeft = document.createElement('button');\ndownLeft.innerText = 'Down Left';\ndownLeft.addEventListener('click', () => ship.downLeft());\ndownLeft.style.position = 'absolute';\ndownLeft.style.bottom = '300px';\ndownLeft.style.left = '0';\ndownLeft.style.padding = '10px';\n//document.body.appendChild(downLeft);\n\nconst downRight = document.createElement('button');\ndownRight.innerText = 'Down Right';\ndownRight.addEventListener('click', () => ship.downRight());\ndownRight.style.position = 'absolute';\ndownRight.style.bottom = '350px';\ndownRight.style.left = '0';\ndownRight.style.padding = '10px';\n//document.body.appendChild(downRight);\n\nconst warp = document.createElement('button');\nwarp.innerText = 'Warp';\nwarp.addEventListener('click', () => {\n\tfor (let i = 0; i < stars.length; i++) {\n\t\tstars[i].faster();\n\t}\n\tship.warp()\n});\nwarp.style.backgroundColor = '#333';\nwarp.style.color = '#fff';\nwarp.style.border = 'none';\nwarp.style.position = 'absolute';\nwarp.style.bottom = '50px';\nwarp.style.right = '0';\nwarp.style.padding = '10px';\ndocument.body.appendChild(warp);\n\nconst unwarp = document.createElement('button');\nunwarp.innerText = 'Unwarp';\nunwarp.addEventListener('click', () => {\n\tfor (let i = 0; i < stars.length; i++) {\n\t\tstars[i].slower();\n\t}\n\tship.unwarp()\n});\nunwarp.style.backgroundColor = '#333';\nunwarp.style.color = '#fff';\nunwarp.style.border = 'none';\nunwarp.style.position = 'absolute';\nunwarp.style.bottom = '0';\nunwarp.style.right = '0';\nunwarp.style.padding = '10px';\ndocument.body.appendChild(unwarp);\n\nconst stop = document.createElement('button');\nstop.innerText = 'Stop';\nstop.addEventListener('click', () => {\n\tfor (let i = 0; i < stars.length; i++) {\n\t\tstars[i].stop();\n\t}\n\tship.stop()\n});\nstop.style.backgroundColor = '#333';\nstop.style.color = '#fff';\nstop.style.border = 'none';\nstop.style.position = 'absolute';\nstop.style.bottom = '0';\nstop.style.left = '200px';\nstop.style.padding = '10px';\ndocument.body.appendChild(stop);\n\nconst reset = document.createElement('button');\nreset.innerText = 'Reset';\nreset.addEventListener('click', () => {\n\tfor (let i = 0; i < stars.length; i++) {\n\t\tstars[i].reset();\n\t}\n\tship.reset()\n});\nreset.style.backgroundColor = '#333';\nreset.style.color = '#fff';\nreset.style.border = 'none';\nreset.style.position = 'absolute';\nreset.style.bottom = '0';\nreset.style.left = '270px';\nreset.style.padding = '10px';\ndocument.body.appendChild(reset);\n\nloop();\n\n\n//# sourceURL=webpack://dev/./src/index.js?");

/***/ }),

/***/ "./src/NCC.png":
/*!*********************!*\
  !*** ./src/NCC.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"733fb99858e991d7463c.png\";\n\n//# sourceURL=webpack://dev/./src/NCC.png?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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