"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
    function Calculator() {
        _classCallCheck(this, Calculator);

        this.numberX = 0;
        this.numbery = 0;
        this.operation = '';
    }

    _createClass(Calculator, [{
        key: "add",
        value: function add() {}
    }, {
        key: "subtract",
        value: function subtract() {}
    }, {
        key: "divide",
        value: function divide() {}
    }, {
        key: "multiply",
        value: function multiply() {}
    }, {
        key: "result",
        value: function result() {}
    }]);

    return Calculator;
}();

function buttonListener(e) {
    switch (e.target.value) {
        case "+":
            calculator.add();
            break;
        case "-":
            calculator.subtract();
            break;
        case "÷":
            calculator.divide();
            break;
        case "×":
            calculator.multiply();
            break;
        case "=":
            calculator.result();
            break;
        default:
            console.log(e.target.value);
    }
}

function numPadInit() {
    var allNumPadButtons = document.querySelectorAll('.button');
    allNumPadButtons.forEach(function (element) {
        element.addEventListener('click', buttonListener);
    });
}

function powerButtonInit() {
    var powerButton = document.querySelector('.power-button');
    powerButton.addEventListener('click', function (e) {
        var digits = document.getElementsByClassName('digits');
        if (digits[0].style.visibility === "hidden") {
            digits[0].style.visibility = "visible";
        } else {
            digits[0].style.visibility = "hidden";
        }
    });
}

/* --- MAIN --- */
function main() {
    powerButtonInit();
    numPadInit();
}

var calculator = new Calculator();
main();