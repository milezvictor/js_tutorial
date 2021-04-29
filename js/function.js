// // Simple Method without return value (Procedure/Sub-Routine)
// function greet(){
//     console.log("Hello Programmers!");
// }

// // Simple Method with parameter and without return value (Procedure/Sub-Routine)
// function greetPerson(person){
//     console.log("Hello " + person);
// }

// // greet();
// // greetPerson("Destiny");

// // Simple Method with return value (Function)
// function PI() {
//     var pi = 22/7;
//     return pi;
// }
// // Simple Method with parameter and a return value (Function)
// function calculateAreaC(raduis){
//     var area;
//     area = 2 * PI() * (raduis * raduis);
//     return area;
// }


function findFactorial(number) {
    let fact = 1; let i;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

document.getElementById('btnFactCal').addEventListener('click', function(){
    let no = document.getElementById('fact_number').value;

    let factorial = findFactorial(no);

    document.getElementById('fact_result').innerText = factorial;
});

function displayOnScreen(number){
    document.getElementById('screen').innerText += number;
}

var allBtns = document.getElementsByClassName('no_btn')

for (let index = 0; index < allBtns.length; index++) {
    let button = allBtns[index];
    button.addEventListener('click', function(){
        displayOnScreen(this.innerText);
    });
}
