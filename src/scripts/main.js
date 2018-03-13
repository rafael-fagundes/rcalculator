class Calculator{
    constructor() {
        this.numberX = 0;
        this.numbery = 0;
        this.operation = '';
    }

    add(){}
    subtract(){}
    divide(){}
    multiply(){}
    result(){}
}

function buttonListener(e){
    switch(e.target.value) {
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

function numPadInit(){
    const allNumPadButtons = document.querySelectorAll('.button');
    allNumPadButtons.forEach(element => {
        element.addEventListener('click', buttonListener);
    });
}

function powerButtonInit(){
    const powerButton = document.querySelector('.power-button');
    powerButton.addEventListener('click', (e) => {
        const digits = document.getElementsByClassName('digits');
        if(digits[0].style.visibility === "hidden"){
            digits[0].style.visibility = "visible";
        }
        else{
            digits[0].style.visibility = "hidden";
        }
    })
}

/* --- MAIN --- */
function main(){
    powerButtonInit();
    numPadInit();
}

let calculator = new Calculator();
main();