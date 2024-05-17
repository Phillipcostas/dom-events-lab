/*-------------------------------- Constants --------------------------------*/




/*-------------------------------- Variables --------------------------------*/
let display = document.getElementById("display");
let currentNumber = 0
let firstNum, secondNum 
let currentOperator
let clear = 0 
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
          currentOperator = '+'
           if (firstNum === undefined) {
            firstNum = currentNumber
           }  
        } else if (event.target.innerText === '-') {
            currentOperator = '-'
               if (firstNum === undefined) {
                firstNum = currentNumber
          }
      } else if (event.target.innerText === '*') {
          currentOperator = '*'
          if (firstNum === undefined) {
            firstNum = currentNumber
          } 
      } else if (event.target.innerText === '/') {
          currentOperator = '/'
          if (firstNum === undefined) 
            firstNum = currentNumber
  
      } else if (event.target.innerText === '=') {
        console.log(currentOperator)

          if (currentOperator === "+")
            displayBar.innerText = sum (parseInt(currentNumber), parseInt(firstNum))
              
          } else if (currentOperator === "-") {
                displayBar.innerText = minus (parseInt(currentNumber), parseInt(firstNum))    
          } else if 
             (currentOperator === '*') {
              displayBar.innerText = mult (parseInt(currentNumber), parseInt(firstNum))
            
          } else if 
           (currentOperator === '/') {
              displayBar.innerText = div (parseInt(currentNumber), parseInt(firstNum))
            }
          }
  
        currentNumber = 0
        firstNumber = undefined
        secondNum = undefined
        currentOperator = undefined
        })
      })

      clear()


/*-------------------------------- Functions --------------------------------*/
let displayBar = document.querySelector(".display");
//console.log(displayBar)

const sum = (num1 , num2) => {
  return num1 + num2
}

 const minus = (num1, num2) => {
  return num1 - num2 
 }

 const mult = (num1, num2) => {
  return num1 * num2
 }

 const div = (num1, num2) => {
  return num1 / num2
 }

