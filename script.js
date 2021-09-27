//Dom Elements
const display = document.querySelector('.display')
const clearBtn = document.querySelector('#clear-btn')
const operatorBtns = document.querySelectorAll('.operator-btn')
const numberBtns = document.querySelectorAll('.number-btn')
const equalsBtn = document.querySelector('.equals-btn')

//Calculator
const calculator = {
    display: "",
    memory: "",
    operationMode: undefined,
    add: (a,b) => a + b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b,
    subtract: (a,b) => a - b,
}

//render calcualtor display to DOM display function
const render = () => display.textContent = calculator.display

//Press a number
Array.from(numberBtns).forEach(element => {
    element.addEventListener('click', e => {
        if(display.textContent.length < 9){
            calculator.display = calculator.display  + e.target.textContent
            render()
        }
    })
});

//press an operations
Array.from(operatorBtns).forEach(element => {
    element.addEventListener('click', e => {
        switch(element.textContent){
            case 'x':
                calculator.operationMode = calculator.multiply
                break
            case '/':
                calculator.operationMode = calculator.divide
                break
            case '-':
                calculator.operationMode = calculator.subtract
                break
            case '+':
                calculator.operationMode = calculator.add
                break        
        }
        if(calculator.memory == ''){
            calculator.memory = calculator.display
        }
    })
})