/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContactPage = ()=>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent='our contact'

    const form =  document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type='text';
    headingInput.placeholder='Enter heading';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type='text';
    addressInput.placeholder='Enter address';
    form.appendChild(addressInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value='submit';
    form.appendChild(submitButton);

    pageContent.appendChild(heading);
    pageContent.appendChild(form);
    content.appendChild(pageContent);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createmenuPage=()=>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent='our menu';

    const menuList = document.createElement('ul');
    
    const item1 = document.createElement('li');
    item1.textContent='pizaaa'
    const item2 = document.createElement('li');
    item2.textContent='burgurr'
    const item3 = document.createElement('li');
    item3.textContent='friess'
    menuList.appendChild(item1);
    menuList.appendChild(item2);
    menuList.appendChild(item3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createmenuPage);

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ "./src/restaurant.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/tabs.js");



function initiaLoad(){
    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initiaLoad);

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createRestaurantHomePage =()=>{
    const content = document.querySelector("#content");
    const pageContent =  document.createElement("div");
    pageContent.classList.add('page-content');

    //create and append image
    const image = document.createElement('img');
    image.src = "./image.jpg"
    image.height = '300';
    pageContent.appendChild(image);

    //create and append heading
    const heading = document.createElement('h1');
    heading.innerText = 'welcome to our restaurent';
    pageContent.appendChild(heading);

    content.appendChild(pageContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant */ "./src/restaurant.js");




const createTabs=()=>{

    const content= document.querySelector('#content');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    div1.setAttribute('id','home-btn');
    div2.setAttribute('id','menu-btn');
    div3.setAttribute('id','contact-btn');

    div1.textContent='Home';
    div2.textContent='Menu';
    div3.textContent='Contact';

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener('click',()=>{
        clearContent();
        (0,_restaurant__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })
    div2.addEventListener('click',()=>{
        clearContent();
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })
    div3.addEventListener('click',()=>{
        clearContent();
        (0,_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
}

function clearContent(){
    const content= document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent){
        content.removeChild(pageContent);
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");


(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQy9CaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJ1QjtBQUNwQjtBQUNoQztBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkLElBQUksdURBQXdCO0FBQzVCO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ1J6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkc7QUFDTjtBQUNnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBd0I7QUFDaEMsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLGlEQUFjO0FBQ3RCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxvREFBaUI7QUFDekIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7VUMvQ3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOa0M7QUFDbEM7QUFDQSxxREFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcmVzdGF1cmFudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKT0+e1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudD0nb3VyIGNvbnRhY3QnXHJcblxyXG4gICAgY29uc3QgZm9ybSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtZm9ybScpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBoZWFkaW5nSW5wdXQudHlwZT0ndGV4dCc7XHJcbiAgICBoZWFkaW5nSW5wdXQucGxhY2Vob2xkZXI9J0VudGVyIGhlYWRpbmcnO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkaW5nSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGFkZHJlc3NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBhZGRyZXNzSW5wdXQudHlwZT0ndGV4dCc7XHJcbiAgICBhZGRyZXNzSW5wdXQucGxhY2Vob2xkZXI9J0VudGVyIGFkZHJlc3MnO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRyZXNzSW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgc3VibWl0QnV0dG9uLnZhbHVlPSdzdWJtaXQnO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RQYWdlOyIsImNvbnN0IGNyZWF0ZW1lbnVQYWdlPSgpPT57XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwYWdlLWNvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQ9J291ciBtZW51JztcclxuXHJcbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGl0ZW0xLnRleHRDb250ZW50PSdwaXphYWEnXHJcbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBpdGVtMi50ZXh0Q29udGVudD0nYnVyZ3VycidcclxuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGl0ZW0zLnRleHRDb250ZW50PSdmcmllc3MnXHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChpdGVtMSk7XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChpdGVtMik7XHJcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChpdGVtMyk7XHJcblxyXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZW1lbnVQYWdlOyIsImltcG9ydCBjcmVhdGVSZXN0YXVyYW50SG9tZVBhZ2UgZnJvbSAnLi9yZXN0YXVyYW50JztcclxuaW1wb3J0IGNyZWF0ZVRhYnMgZnJvbSAnLi90YWJzJztcclxuXHJcbmZ1bmN0aW9uIGluaXRpYUxvYWQoKXtcclxuICAgIGNyZWF0ZVRhYnMoKTtcclxuICAgIGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFMb2FkOyIsImNvbnN0IGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSA9KCk9PntcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBjb25zdCBwYWdlQ29udGVudCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250ZW50Jyk7XHJcblxyXG4gICAgLy9jcmVhdGUgYW5kIGFwcGVuZCBpbWFnZVxyXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltYWdlLnNyYyA9IFwiLi9pbWFnZS5qcGdcIlxyXG4gICAgaW1hZ2UuaGVpZ2h0ID0gJzMwMCc7XHJcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgLy9jcmVhdGUgYW5kIGFwcGVuZCBoZWFkaW5nXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ3dlbGNvbWUgdG8gb3VyIHJlc3RhdXJlbnQnO1xyXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZTsiLCJpbXBvcnQgY3JlYXRlQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgY3JlYXRlbWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlIGZyb20gXCIuL3Jlc3RhdXJhbnRcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVRhYnM9KCk9PntcclxuXHJcbiAgICBjb25zdCBjb250ZW50PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBkaXYxLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lLWJ0bicpO1xyXG4gICAgZGl2Mi5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudS1idG4nKTtcclxuICAgIGRpdjMuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhY3QtYnRuJyk7XHJcblxyXG4gICAgZGl2MS50ZXh0Q29udGVudD0nSG9tZSc7XHJcbiAgICBkaXYyLnRleHRDb250ZW50PSdNZW51JztcclxuICAgIGRpdjMudGV4dENvbnRlbnQ9J0NvbnRhY3QnO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2MSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdjIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYzKTtcclxuXHJcbiAgICBkaXYxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgICAgIGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSgpO1xyXG4gICAgfSlcclxuICAgIGRpdjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgY3JlYXRlbWVudVBhZ2UoKTtcclxuICAgIH0pXHJcbiAgICBkaXYzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhY3RQYWdlKCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKXtcclxuICAgIGNvbnN0IGNvbnRlbnQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRlbnQnKTtcclxuICAgIGlmIChwYWdlQ29udGVudCl7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChwYWdlQ29udGVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYWJzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZUxvYWQnO1xyXG5cclxucGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=