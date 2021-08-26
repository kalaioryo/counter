let minus = document.getElementById('button-minus');
let plus = document.getElementById('button-plus');
let reset = document.getElementById('reset');
let number = document.getElementById('number');
let h3 = document.querySelector('h3');

number = 0;

plus.addEventListener('click', add);
minus.addEventListener('click', Subtract);
reset.addEventListener('click', zero);




function add(){
    number++;
    h3.textContent = number;
}

function Subtract(){
    number--;
    h3.textContent = number;
}

function zero(){
    number = 0;
    h3.textContent = number;
}

document.addEventListener('keydown', function(event) {
    if (event.code == "NumpadAdd" ) {
        number++;
        h3.textContent = number;
    } else if (event.code == "NumpadSubtract" ){
        number--;
        h3.textContent = number;
    } else if (event.code == 'Delete') {
        number = 0;
        h3.textContent = number;
    } else return
  });