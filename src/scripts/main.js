class Calculator{
    constructor() {
        this.powerState = false;

        const powerButton = document.querySelector('.power-button');
        powerButton.addEventListener('click', this.powerSwitch);

        const clearButton = document.querySelector('.clear-button');
        clearButton.addEventListener('click', (e) => {
            this.clearDisplay(e);
            e.stopPropagation();
        });

        const allNumPadButtons = document.querySelectorAll('.button');
        allNumPadButtons.forEach(element => {
            element.addEventListener('click', (e) => {
                this.numPadHandler(e);
                e.stopPropagation();
            });
        });
    }

    result(){
        const currentValue = document.querySelector('.digits');
        try {
            currentValue.innerHTML = eval(currentValue.innerHTML);
        } catch (error) {
            currentValue.innerHTML = "Error";
        }
        calculator.adaptDisplay();        
    }

    adaptDisplay(){
        const currentValue = document.querySelector('.digits');
        const digitsStyle = document.getElementsByClassName('digits')[0].style;
         if(currentValue.innerHTML.length > 46){
            currentValue.innerHTML = " Take it easy, man! ";
            calculator.adaptDisplay();
        }
        else if(currentValue.innerHTML.length > 36 && currentValue.innerHTML.length <= 46){
            digitsStyle.fontSize  = "0.4em";
        }
        else if(currentValue.innerHTML.length > 18 && currentValue.innerHTML.length <= 36){
            digitsStyle.fontSize  = "0.5em";
        }
        else if(currentValue.innerHTML.length > 12 && currentValue.innerHTML.length <= 18){
            digitsStyle.fontSize  = "1.0em";
        }
        else{
            digitsStyle.fontSize  = "1.5em";
        }
    }

    addToDisplay(value){
        const currentValue = document.querySelector('.digits');
        
        if (currentValue.innerHTML === "0"){
            currentValue.innerHTML = value;
        }
        else{
            currentValue.innerHTML += value;
        }
        calculator.adaptDisplay();
    }

    clearDisplay(){
        const currentValue = document.querySelector('.digits');
        currentValue.innerHTML = "0";
        calculator.adaptDisplay();
    }

    powerSwitch(){
        const digits = document.getElementsByClassName('digits');
        if(digits[0].style.visibility === "hidden"){
            calculator.clearDisplay();
            digits[0].style.visibility = "visible";
            calculator.powerState = true;
        }
        else{
            digits[0].style.visibility = "hidden";
            calculator.powerState = false;
        }
    }

    numPadHandler(e){
        if (calculator.powerState){ 
            switch(e.target.value) {
                case "=":
                    calculator.result();
                    e.stopPropagation();
                    break;
                default:
                    calculator.addToDisplay(e.target.value)
                    e.stopPropagation();
                    break;
            }
        }       
    }
}

const calculator = new Calculator();

// Key binding
document.body.addEventListener('keypress', function(e) {
    switch(e.keyCode) {
        case 111: // o (on / off)
            calculator.powerSwitch();
            e.stopPropagation();
            break;
        case 99: // c (clear)
            calculator.clearDisplay();
            e.stopPropagation();
            break;
        case 13: // enter (result)
            calculator.result();
            e.stopPropagation();
            break;
        case 61: // = (result)
            calculator.result();
            e.stopPropagation();
            break;
        case 43: // + (add)
            calculator.addToDisplay('+')
            e.stopPropagation();
            break;
        case 45: // - (subtract)
            calculator.addToDisplay('-')
            e.stopPropagation();
            break;
        case 42: // * (multiply)
            calculator.addToDisplay('*')
            e.stopPropagation();
            break;
        case 47: // / (divide)
            calculator.addToDisplay('/')
            e.stopPropagation();
            break;
        case 46: // . (dot)
            calculator.addToDisplay('.')
            e.stopPropagation();
            break;
        case 48: // 0
            calculator.addToDisplay(0)
            e.stopPropagation();
            break;
        case 49: // 1
            calculator.addToDisplay(1)
            e.stopPropagation();
            break;
        case 50: // 2
            calculator.addToDisplay(2)
            e.stopPropagation();
            break;
        case 51: // 3
            calculator.addToDisplay(3)
            e.stopPropagation();
            break;
        case 52: // 4
            calculator.addToDisplay(4)
            e.stopPropagation();
            break;
        case 53: // 5
            calculator.addToDisplay(5)
            e.stopPropagation();
            break;
        case 54: // 6
            calculator.addToDisplay(6)
            e.stopPropagation();
            break;
        case 55: // 7
            calculator.addToDisplay(7)
            e.stopPropagation();
            break;
        case 56: // 8
            calculator.addToDisplay(8)
            e.stopPropagation();
            break;
        case 57: // 9
            calculator.addToDisplay(9)
            e.stopPropagation();
            break;
        default:
            e.stopPropagation();
            break;
    }
});