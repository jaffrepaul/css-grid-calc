const buttons = document.getElementsByClassName('calc-button');
const calculator = Array.from(document.getElementsByClassName('calculator-buttons'));
const display = document.getElementById('display');

calculator.forEach(button =>
    addEventListener('click', (e) => {
        if (e.target.nodeName === 'BUTTON') {
            // console.log(e.target.value);
            e.target.value += display.innerHTML;
        }
    })
);

function displayInfo(e) {
    e.target.value += display;
}