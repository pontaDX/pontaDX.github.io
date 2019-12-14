/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/Cards.ts":
/*!********************************!*\
  !*** ./src/component/Cards.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Mark = /** @class */ (function () {\n    function Mark() {\n    }\n    return Mark;\n}());\nexports.Mark = Mark;\nvar DrowedDeck = /** @class */ (function () {\n    function DrowedDeck() {\n    }\n    return DrowedDeck;\n}());\nexports.DrowedDeck = DrowedDeck;\nvar marks = [\n    {\n        color: 0,\n        markName: \"C\",\n        markIcon: \"♧\"\n    }, {\n        color: 0,\n        markName: \"S\",\n        markIcon: \"♤\"\n    }, {\n        color: 1,\n        markName: \"H\",\n        markIcon: \"♡\"\n    }, {\n        color: 1,\n        markName: \"D\",\n        markIcon: \"♢\"\n    }\n];\nvar numbers = [\n    {\n        color: undefined,\n        markName: \"01\",\n        markIcon: \"A\"\n    }, {\n        color: undefined,\n        markName: \"02\",\n        markIcon: \"2\"\n    }, {\n        color: undefined,\n        markName: \"03\",\n        markIcon: \"3\"\n    }, {\n        color: undefined,\n        markName: \"04\",\n        markIcon: \"4\"\n    }, {\n        color: undefined,\n        markName: \"05\",\n        markIcon: \"5\"\n    }, {\n        color: undefined,\n        markName: \"06\",\n        markIcon: \"6\"\n    }, {\n        color: undefined,\n        markName: \"07\",\n        markIcon: \"7\"\n    }, {\n        color: undefined,\n        markName: \"08\",\n        markIcon: \"8\"\n    }, {\n        color: undefined,\n        markName: \"09\",\n        markIcon: \"9\"\n    }, {\n        color: undefined,\n        markName: \"10\",\n        markIcon: \"10\"\n    }, {\n        color: undefined,\n        markName: \"11\",\n        markIcon: \"J\"\n    }, {\n        color: undefined,\n        markName: \"12\",\n        markIcon: \"Q\"\n    }, {\n        color: undefined,\n        markName: \"13\",\n        markIcon: \"K\"\n    }\n];\nvar others = [\n    {\n        color: 0,\n        markName: \"J00\",\n        markIcon: \"Joker\"\n    }, {\n        color: 1,\n        markName: \"J00\",\n        markIcon: \"Joker\"\n    }\n];\nvar Roles = {\n    \"01\": \"引いた人以外全員が飲む\",\n    \"02\": \"引いた人が１人を指名して飲ませる\",\n    \"03\": \"引いた人が飲む\",\n    \"04\": \"女性全員が飲む\",\n    \"05\": \"引いた人の左右の人が飲む\",\n    \"06\": \"男性全員が飲む\",\n    \"07\": \"全員手を挙げて指を天井に向け、一番遅かった人が飲む\",\n    \"08\": \"仲間を１人選び、どちらかが飲むときは仲間も飲む\",\n    \"09\": \"好きなゲームを行い、負けた人が飲む\",\n    \"10\": \"山手線ゲームをし、負けた人が飲む\",\n    \"11\": \"好きなルールを設定し、破った人が飲む\",\n    \"12\": \"クエスチョンマスターになり、クエスチョンマスターの質問に答えた人は飲む\",\n    \"13\": \"中央のグラスに好きな飲み物を注ぐ。4枚目のKingの場合は中央のグラスをすべてのむ\",\n    \"00\": \"ゲーム中に１度、飲まなければいけない場面で代わりに水を飲むことが出来る\"\n};\nvar Cards = /** @class */ (function () {\n    function Cards() {\n        this.deck = this.makeNewDeck();\n        this.shuffledDeck = this.shuffleAllCards(this.deck);\n        this.createButton();\n    }\n    Cards.prototype.makeNewDeck = function () {\n        var deck = [];\n        // marksとnumbersを組み合わせて52枚のデッキを作成\n        marks.forEach(function (mark) {\n            console.log(mark.markName);\n            numbers.forEach(function (number) {\n                deck.push({\n                    color: mark.color,\n                    markName: \"\" + mark.markName + number.markName,\n                    markIcon: \"\" + mark.markIcon + number.markIcon\n                });\n            });\n        });\n        // Jokerを２枚追加\n        others.forEach(function (other) {\n            deck.push(other);\n        });\n        console.log(deck);\n        return deck;\n    };\n    Cards.prototype.shuffleAllCards = function (deck) {\n        var shuffledDeck = [];\n        var randomIndex = [];\n        for (var i = 0; i < deck.length; i++) {\n            var randomNuber = Math.floor(Math.random() * deck.length);\n            if (randomIndex.includes(randomNuber)) {\n                i--;\n            }\n            else {\n                console.log(i);\n                randomIndex.push(randomNuber);\n            }\n        }\n        console.log(randomIndex);\n        randomIndex.forEach(function (number) {\n            shuffledDeck.push(deck[number]);\n        });\n        console.log(shuffledDeck);\n        return shuffledDeck;\n    };\n    Cards.prototype.createButton = function () {\n        var _this = this;\n        var formElement = document.createElement(\"div\");\n        var buttonElement = document.createElement(\"input\");\n        buttonElement.type = \"button\";\n        buttonElement.id = \"drowButton\";\n        buttonElement.value = \"カードを引く\";\n        buttonElement.style.width = \"90%\";\n        buttonElement.style.padding = \"10px\";\n        buttonElement.style.fontSize = \"30px\";\n        formElement.style.marginTop = \"50px\";\n        buttonElement.onclick = function () {\n            _this.viewDrowedCard(_this.shuffledDeck);\n            console.log(_this.shuffledDeck);\n        };\n        formElement.appendChild(buttonElement);\n        document.body.appendChild(formElement);\n    };\n    Cards.prototype.viewDrowedCard = function (deck) {\n        if (deck.length === 0) {\n            if (document.getElementById(\"drowedCards\")) {\n                document.getElementById(\"drowedCards\").innerText = \"終了\";\n            }\n            if (document.getElementById(\"role\")) {\n                document.getElementById(\"role\").innerText = \"山札が０枚になりました\";\n            }\n            return;\n        }\n        // 引いたカード\n        var card = deck[deck.length - 1];\n        console.log(card);\n        // 引いたカードを表示する\n        var drowedCard = document.createElement(\"Div\");\n        drowedCard.id = \"drowedCards\";\n        drowedCard.innerText = card.markIcon;\n        drowedCard.style.fontSize = \"100px\";\n        if (card.color === 1) {\n            drowedCard.style.color = \"red\";\n        }\n        else if (card.color === 0) {\n            drowedCard.style.color = \"blue\";\n        }\n        if (document.body.childElementCount > 2) {\n            if (document.getElementById(\"drowedCards\")) {\n                document.getElementById(\"drowedCards\").innerText = card.markIcon;\n                if (card.color === 1) {\n                    document.getElementById(\"drowedCards\").style.color = \"red\";\n                }\n                else if (card.color === 0) {\n                    document.getElementById(\"drowedCards\").style.color = \"blue\";\n                }\n            }\n        }\n        else {\n            document.body.appendChild(drowedCard);\n        }\n        // 引いたカードのルールを表示する\n        console.log(Roles[card.markName.slice(1, 3)]);\n        var role = document.createElement(\"Div\");\n        role.id = \"role\";\n        role.innerText = Roles[card.markName.slice(1, 3)];\n        role.style.fontSize = \"30px\";\n        if (document.body.childElementCount > 3) {\n            if (document.getElementById(\"role\")) {\n                document.getElementById(\"role\").innerText = Roles[card.markName.slice(1, 3)];\n            }\n        }\n        else {\n            document.body.appendChild(role);\n        }\n        // ドロー済みカードを山札から削除する\n        deck.pop();\n    };\n    return Cards;\n}());\nexports.Cards = Cards;\n\n\n//# sourceURL=webpack:///./src/component/Cards.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar test_1 = __webpack_require__(/*! ./test/test */ \"./src/test/test.ts\");\nvar Cards_1 = __webpack_require__(/*! ./component/Cards */ \"./src/component/Cards.ts\");\nvar test = new test_1.TestClass();\nvar card = new Cards_1.Cards();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/test/test.ts":
/*!**************************!*\
  !*** ./src/test/test.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar TestClass = /** @class */ (function () {\n    function TestClass() {\n        console.log(\"test\");\n    }\n    return TestClass;\n}());\nexports.TestClass = TestClass;\n\n\n//# sourceURL=webpack:///./src/test/test.ts?");

/***/ })

/******/ });