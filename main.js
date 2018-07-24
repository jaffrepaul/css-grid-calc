const buttons = document.getElementsByClassName('calc-button');
const calculator = Array.from(document.getElementsByClassName('calculator-buttons'));

calculator.forEach(button =>
    addEventListener('click', (e) => {
        console.log(e.target);
    })
);
