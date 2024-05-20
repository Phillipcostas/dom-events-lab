/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/
let display = document.getElementById("display");
let currentNumber = 0
let firstNum, secondNum
let currentOperator
//let clear = 0
/*------------------------ Cached Element References ------------------------*/




/*----------------------------- Event Listeners -----------------------------*/
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if ([...event.target.classList].includes('number')) {
            currentNumber = event.target.innerText
            displayBar.innerText = currentNumber

        } else {

            if (event.target.innerText === '+') {
                console.log(currentNumber)
                currentOperator = '+'
                console.log(currentOperator)

                if (firstNum === undefined) {
                    firstNum = currentNumber
                }

            } else if (event.target.innerText === '-') {
                //console.log('hi')
                currentOperator = '-'
                if (firstNum === undefined) {
                    firstNum = currentNumber
                }
            } else if (event.target.innerText === '*') {
                // console.log('hi')
                currentOperator = '*'
                if (firstNum === undefined) {
                    firstNum = currentNumber
                }

            } else if (event.target.innerText === '/') {
                // console.log('hi')

                currentOperator = '/'
                if (firstNum === undefined) {
                    firstNum = currentNumber
                }
            } else if (event.target.innerText === '=') {
                console.log(currentOperator)

                if (currentOperator === "+") {
                    displayBar.innerText = sum(parseInt(currentNumber), parseInt(firstNum))
                } else if (currentOperator === "-") {
                  displayBar.innerText = minus(parseInt(currentNumber), parseInt(firstNum))
              } else if (currentOperator === '*') {
                  displayBar.innerText = multiply(parseInt(currentNumber), parseInt(firstNum))
  
              } else if (currentOperator === '/') {
                  displayBar.innerText = divide(parseInt(currentNumber), parseInt(firstNum))
              }
                currentNumber = 0
                firstNum = undefined
                secondNum = undefined
                currentOperator = undefined
            } 
        }
    })
     }
)

const clear = () => {
  if (currentOperator === 'C')  {
    return 0 
  }
}



/*-------------------------------- Functions --------------------------------*/
let displayBar = document.querySelector(".display");


const sum = (num1, num2) => {
    return num1 + num2
}

const minus = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    return num1 / num2
}

