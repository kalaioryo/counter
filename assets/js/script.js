//Elements Body

//main div
const mainDiv = document.getElementById('main');


//display
const display = document.createElement('div');
mainDiv.appendChild(display);
display.classList.add('display');

const textDisplay = document.createElement('h3');
display.appendChild(textDisplay);
textDisplay.innerHTML = '0';


//container button
const containerButton = document.createElement('div');
mainDiv.appendChild(containerButton);
containerButton.classList.add('container-button');


//minus button
const minusButton = document.createElement('div');
const minusImg = document.createElement('img');

containerButton.appendChild(minusButton);
minusButton.appendChild(minusImg);

minusButton.setAttribute('id', 'button-minus');
minusButton.classList.add('button-minus', 'pointer');

minusImg.setAttribute('src', "assets/img/minus.svg");
minusImg.setAttribute('alt', 'minus');


//plus button
const plusButton = document.createElement('div');
const plusImg = document.createElement('img');

containerButton.appendChild(plusButton);
plusButton.appendChild(plusImg);

plusButton.setAttribute('id', 'button-plus');
plusButton.classList.add('button-plus', 'pointer');

plusImg.setAttribute('src', "assets/img/plus.svg");
plusImg.setAttribute('alt', 'plus');


//reset button
const resetButton = document.createElement('div');
const resetText = document.createElement('h2');

mainDiv.appendChild(resetButton);
resetButton.appendChild(resetText);
resetText.innerHTML = 'reset';


resetButton.setAttribute('id', 'reset');
resetButton.classList.add('reset', 'pointer');


//variables and eventListener

let minus = document.getElementById('button-minus');
let plus = document.getElementById('button-plus');
let reset = document.getElementById('reset');


plus.addEventListener('click', add);
minus.addEventListener('click', Subtract);
reset.addEventListener('click', zero);


// function

function add(){
    textDisplay.innerHTML++;
}

function Subtract(){
    textDisplay.innerHTML--;
}

function zero(){
    textDisplay.innerHTML = 0;
}

//keyboard function

document.addEventListener('keydown', function(event) {
    if (event.code == "NumpadAdd" ) {
        textDisplay.innerHTML++;

    } else if (event.code == "NumpadSubtract" ){
        textDisplay.innerHTML--;

    } else if (event.code == 'Delete') {
        textDisplay.innerHTML = 0;

    } else return
  });