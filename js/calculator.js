let numbers = document.querySelectorAll('.number');
// let numbers = document.getElementsByClassName('number'); //Cannot use the forEach Loop
let operators = document.querySelectorAll('.operator');
let screen = document.getElementById('output-value');
let history = document.getElementById('history-value');
let history_log = document.getElementById('history-new');
let currentOperator = '';

// Add Event Listener to all number buttons (Event: click)
numbers.forEach(function(button) {
    button.addEventListener('click', function(){
        let number = this.id;
        // let number = this.innerText;
        displayOnScreen(number)
    });
});

// A function to recieve number and display it on the screen
function displayOnScreen(number) {
    screen.innerText += number
}

// Add Event Listener to all operators buttons (Event: click)
operators.forEach(function (button) {
    button.addEventListener('click', function(){
        let operator = this.id;
        handleOperation(operator)
    })
})

// A function to handle operations
function handleOperation(operator) {
    switch (operator) {
        case 'clear':
            clearScreen();
            break;

        case 'backspace':
            backspace();
            break;

        case 'sin':
            findSinOfNumber();
            break;
           
        case 'sqrt':
            findSquareRoot();
            break;
            
        case 'fact':
            findFactorial();
            break;
        
        case '=':
            finalResult(operator);
            break;
    
        default:
            ArithmeticOperation(operator)
            break;
    }
}

// A function to clear the calculator screen
function clearScreen() {
    screen.innerText = '';
    history.innerText = '';
}

// A function to delete one value from the end of the calculator screen
function backspace() {
    let numberOnScreen = screen.innerText
    let lent = numberOnScreen.length
    let newnumber = ''; //A variable to hold the newly formed number 
    for (let i = 0; i < lent - 1; i++) {
        newnumber += numberOnScreen[i];
    }
    screen.innerText = newnumber;
}

// A function to add the values
function ArithmeticOperation(operator) {
    if (history.innerText != '' && screen.innerText != '') {
        switch (currentOperator) {
            case '+':
                history.innerText = parseInt(history.innerText) + parseInt(screen.innerText);
                break;
    
            case '-':
                history.innerText = parseInt(history.innerText) - parseInt(screen.innerText);
                break;
    
            case '*':
                history.innerText = parseInt(history.innerText) * parseInt(screen.innerText);
                break;
                
            case '/':
                history.innerText = parseInt(history.innerText) / parseInt(screen.innerText);
                break;

            case '%':
                history.innerText = parseInt(history.innerText) % parseInt(screen.innerText);
                break;

            case 'comb':
                Combination();
                break;
        }
    } else {
        if(screen.innerText != ''){
            history.innerText = parseInt(screen.innerText);
        }
    }
    logHistory();
    
    if (operator == '=') {
        currentOperator = '';
    } else {
        currentOperator = operator;
        screen.innerText = '';
    }
}

function finalResult(operator) {
    ArithmeticOperation(operator)
    if (history.innerText != '' && screen.innerText != '') {
        screen.innerText = history.innerText;
        history.innerText = '';
    }
}

function logHistory() {
    
}

function findSinOfNumber(){
    let number = parseInt(screen.innerText);
    screen.innerText = Math.sin(number)
}

function findSquareRoot(){
    let number = parseInt(screen.innerText);
    screen.innerText = Math.sqrt(number)
}

function findFactorial(){
    let fact = 1;
    let number = parseInt(screen.innerText);
    for (let i = 1; i <= number; i++) {
         fact *= i
    }
    screen.innerText = fact;
}

function Combination(){
    
}

document.addEventListener('keyup', function (e) {
    let keyCode = e.keyCode;
    if (keyCode >= 48 && keyCode <= 57) {
        displayOnScreen(e.key);
    }else if(keyCode == 8){
        backspace();
    }
})

