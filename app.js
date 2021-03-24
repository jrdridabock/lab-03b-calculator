// This is the addition zone.

const  numberInputOne = document.getElementById('add-input-1');
const  numberInputTwo = document.getElementById('add-input-2');
const  addResult = document.getElementById('add-result');
const addButton = document.getElementById('add-button'); 

addButton.addEventListener('click', () => {
    const numberOne = Number(numberInputOne.value);
    const numberTwo = Number(numberInputTwo.value);
    addResult.textContent = numberOne + numberTwo;
});

// This is the subtraction zone.

const subInputOne = document.getElementById('subtract-input-1');
const subInputTwo = document.getElementById('subtract-input-2');
const subButton = document.getElementById('subtract-button');
const subResult = document.getElementById('subtract-result');

subButton.addEventListener('click', () => {
    const subNumberOne = Number(subInputOne.value);
    const subNumberTwo = Number(subInputTwo.value);
    subResult.textContent = subNumberOne - subNumberTwo;

    
});

// This is Division Street

const divInputOne = document.getElementById('div-input-1');
const divInputTwo = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');

divButton.addEventListener('click', () => {
    const divNumberOne = Number(divInputOne.value);
    const divNumberTwo = Number(divInputTwo.value);
    divResult.textContent = divNumberOne / divNumberTwo;
});

// Multiply me, captain

const multInputOne = document.getElementById('mult-input-1');
const multInputTwo = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');

multButton.addEventListener('click', () => {
    const multNumberOne = Number(multInputOne.value);
    const multNumberTwo = Number(multInputTwo.value);
    multResult.textContent = multNumberOne * multNumberTwo;
});
