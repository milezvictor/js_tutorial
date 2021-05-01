let numbers = document.querySelectorAll('.number');
// let numbers = document.getElementsByClassName('number'); //Cannot use the forEach Loop
let operators = document.querySelectorAll('.operator');
let screen = document.getElementById('output-value');

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
    
        default:
            alert("We don't know this operator");
            break;
    }
}

// A function to clear the calculator screen
function clearScreen() {
    screen.innerText = ''
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

document.addEventListener('keyup', function (e) {
    let keyCode = e.keyCode;
    if (keyCode >= 48 && keyCode <= 57) {
        displayOnScreen(e.key);
    }else if(keyCode == 8){
        backspace();
    }
})

