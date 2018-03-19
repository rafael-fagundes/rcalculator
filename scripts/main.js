'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
    function Calculator() {
        var _this = this;

        _classCallCheck(this, Calculator);

        this.powerState = false;

        var powerButton = document.querySelector('.power-button');
        powerButton.addEventListener('click', this.powerSwitch);

        var clearButton = document.querySelector('.clear-button');
        clearButton.addEventListener('click', function (e) {
            _this.clearDisplay(e);
            e.stopPropagation();
        });

        var allNumPadButtons = document.querySelectorAll('.button');
        allNumPadButtons.forEach(function (element) {
            element.addEventListener('click', function (e) {
                _this.numPadHandler(e);
                e.stopPropagation();
            });
        });
    }

    _createClass(Calculator, [{
        key: 'result',
        value: function result() {
            var currentValue = document.querySelector('.digits');
            try {
                currentValue.innerHTML = eval(currentValue.innerHTML);
            } catch (error) {
                currentValue.innerHTML = "Error";
            }
            calculator.adaptDisplay();
        }
    }, {
        key: 'adaptDisplay',
        value: function adaptDisplay() {
            var currentValue = document.querySelector('.digits');
            var digitsStyle = document.getElementsByClassName('digits')[0].style;
            if (currentValue.innerHTML.length > 46) {
                currentValue.innerHTML = " Take it easy, man! ";
                calculator.adaptDisplay();
            } else if (currentValue.innerHTML.length > 36 && currentValue.innerHTML.length <= 46) {
                digitsStyle.fontSize = "0.4em";
            } else if (currentValue.innerHTML.length > 18 && currentValue.innerHTML.length <= 36) {
                digitsStyle.fontSize = "0.5em";
            } else if (currentValue.innerHTML.length > 12 && currentValue.innerHTML.length <= 18) {
                digitsStyle.fontSize = "1.0em";
            } else {
                digitsStyle.fontSize = "1.5em";
            }
        }
    }, {
        key: 'addToDisplay',
        value: function addToDisplay(value) {
            var currentValue = document.querySelector('.digits');

            if (currentValue.innerHTML === "0") {
                currentValue.innerHTML = value;
            } else {
                currentValue.innerHTML += value;
            }
            calculator.adaptDisplay();
        }
    }, {
        key: 'clearDisplay',
        value: function clearDisplay() {
            var currentValue = document.querySelector('.digits');
            currentValue.innerHTML = "0";
            calculator.adaptDisplay();
        }
    }, {
        key: 'powerSwitch',
        value: function powerSwitch() {
            var digits = document.getElementsByClassName('digits');
            if (digits[0].style.visibility === "hidden") {
                calculator.clearDisplay();
                digits[0].style.visibility = "visible";
                calculator.powerState = true;
            } else {
                digits[0].style.visibility = "hidden";
                calculator.powerState = false;
            }
        }
    }, {
        key: 'numPadHandler',
        value: function numPadHandler(e) {
            if (calculator.powerState) {
                switch (e.target.value) {
                    case "=":
                        calculator.result();
                        e.stopPropagation();
                        break;
                    default:
                        calculator.addToDisplay(e.target.value);
                        e.stopPropagation();
                        break;
                }
            }
        }
    }]);

    return Calculator;
}();

var calculator = new Calculator();

// Key binding
document.body.addEventListener('keypress', function (e) {
    switch (e.keyCode) {
        case 111:
            // o (on / off)
            calculator.powerSwitch();
            e.stopPropagation();
            break;
        case 99:
            // c (clear)
            calculator.clearDisplay();
            e.stopPropagation();
            break;
        case 13:
            // enter (result)
            calculator.result();
            e.stopPropagation();
            break;
        case 61:
            // = (result)
            calculator.result();
            e.stopPropagation();
            break;
        case 43:
            // + (add)
            calculator.addToDisplay('+');
            e.stopPropagation();
            break;
        case 45:
            // - (subtract)
            calculator.addToDisplay('-');
            e.stopPropagation();
            break;
        case 42:
            // * (multiply)
            calculator.addToDisplay('*');
            e.stopPropagation();
            break;
        case 47:
            // / (divide)
            calculator.addToDisplay('/');
            e.stopPropagation();
            break;
        case 46:
            // . (dot)
            calculator.addToDisplay('.');
            e.stopPropagation();
            break;
        case 48:
            // 0
            calculator.addToDisplay(0);
            e.stopPropagation();
            break;
        case 49:
            // 1
            calculator.addToDisplay(1);
            e.stopPropagation();
            break;
        case 50:
            // 2
            calculator.addToDisplay(2);
            e.stopPropagation();
            break;
        case 51:
            // 3
            calculator.addToDisplay(3);
            e.stopPropagation();
            break;
        case 52:
            // 4
            calculator.addToDisplay(4);
            e.stopPropagation();
            break;
        case 53:
            // 5
            calculator.addToDisplay(5);
            e.stopPropagation();
            break;
        case 54:
            // 6
            calculator.addToDisplay(6);
            e.stopPropagation();
            break;
        case 55:
            // 7
            calculator.addToDisplay(7);
            e.stopPropagation();
            break;
        case 56:
            // 8
            calculator.addToDisplay(8);
            e.stopPropagation();
            break;
        case 57:
            // 9
            calculator.addToDisplay(9);
            e.stopPropagation();
            break;
        default:
            e.stopPropagation();
            break;
    }
});