const calculator = Array.from(document.getElementsByClassName('calculator-buttons'));
const display = document.getElementById('display');
console.log(display);

calculator.forEach(button =>
    addEventListener('click', e => {
        if (e.target.nodeName === 'BUTTON') {
            let val = e.target.innerHTML;

            if (val === '=') {
                display.innerHTML = eval(display.innerHTML);
            } else {
                display.innerHTML += val;
            }
        }
    })
);

// function displayInfo(e) {
//     e.target.value += display;
// }
