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
const render = () => {
    if(calculator.display.toString().length > 8){
        display.textContent = parseFloat(calculator.display).toPrecision(7)
    } else {
        display.textContent = calculator.display
    }
}

//Press a number
Array.from(numberBtns).forEach(element => {
    element.addEventListener('click', e => {
        if(e.target.textContent == '.' && calculator.display.indexOf('.') > 0){}
        else {
            calculator.display = calculator.display  + e.target.textContent
        }
        render()
    })
});

//press an operations
Array.from(operatorBtns).forEach(element => {
    element.addEventListener('click', e => {
        if(calculator.memory == ''){
            calculator.memory = calculator.display
            calculator.display = ''
        } else {
            calculator.display = calculator.operationMode(parseFloat(calculator.memory),parseFloat(calculator.display))
            render()
            calculator.memory = calculator.display
            calculator.display = ''
        }
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
    })
})