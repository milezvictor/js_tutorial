var box = document.getElementById('box');
var btnRed = document.getElementById('redBtn');
var btnBlue = document.getElementById('blueBtn');
var btnYellow = document.getElementById('yellowBtn');


btnRed.addEventListener('click', function() {
    box.style.backgroundColor = 'red';
});

btnBlue.addEventListener('click', function(){
    box.style.backgroundColor = 'blue';
});

btnYellow.addEventListener('click', function(){
    box.style.backgroundColor = 'yellow';
});

    