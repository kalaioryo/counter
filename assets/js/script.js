let minus = document.getElementById('button-minus');
let plus = document.getElementById('button-plus');
let reset = document.getElementById('reset');
let number = document.getElementById('number');
let h3 = document.querySelector('h3');

number = 0;

plus.addEventListener('click', add);
minus.addEventListener('click', less);
reset.addEventListener('click', zero);


function add(){
    number++;
    console.log(parseFloat(number));
    console.log(typeof number);
    h3.textContent = number;
}

function less(){
    number--;
    console.log(parseFloat(number));
    h3.textContent = number;
}

function zero(){
    number = 0;
    console.log(parseFloat(number));
    h3.textContent = number;
}