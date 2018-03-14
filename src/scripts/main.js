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