/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const indexPage = (() => {\n    // Finding with lattitude and longitude:\n    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}\n\n    // Finding geo location with name:\n    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}\n\n\n    const myForm = document.querySelector('#my-form');\n    myForm.onsubmit = 'false';\n    const submitBtn = document.querySelector('.submit-btn')\n    const searchBar = document.querySelector('#search-bar');\n\n\n    submitBtn.onclick = async () => {\n        const cityP = document.querySelector('.city-p');\n        const tempP = document.querySelector('.temp-p');\n        const feelsLike = document.querySelector('.feels-like');\n        const pressure = document.querySelector('.pressure');\n\n        const input = searchBar.value;\n        const cityInfo = await getTest(input);\n\n        console.log(cityInfo)\n\n        const cityName = cityInfo.name;\n        const temp = Math.floor(cityInfo.main.temp);\n        const feelsLikeData = Math.floor(cityInfo.main.feels_like);\n        const pressureData = cityInfo.main.pressure;\n\n        console.log(cityName)\n        console.log(temp)\n        cityP.textContent = `City: ${cityName}`\n        tempP.textContent = `Temp: ${temp}`\n        feelsLike.textContent = `Feels like: ${feelsLikeData}`\n        pressure.textContent = `Pressure: ${pressureData}`\n\n\n\n    }\n\n\n\n    const apiKeyStr = \"b80bfc02e42b690c3e4ed8161d1574e4\";\n\n    async function getTest(city) {\n        const geo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&units=metric&limit=1&appid=` + \"b80bfc02e42b690c3e4ed8161d1574e4\");\n\n        const obj = await geo.json();\n\n        const coordinates = {\n            lat: obj[0].lat,\n            lon: obj[0].lon\n        }\n\n        const dataResp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=` + \"b80bfc02e42b690c3e4ed8161d1574e4\")\n        const dataJSON = dataResp.json();\n\n        return dataJSON;\n    }\n\n\n})();\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;