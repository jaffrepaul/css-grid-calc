const calculatorButtons = Array.from(document.getElementsByClassName('calculator-buttons'));
const displayWindow = document.getElementById('display');
const clearDisplay = document.querySelector('.is-clear');

calculatorButtons.forEach(button =>
    addEventListener('click', e => {
        if (e.target.nodeName === 'BUTTON') {
            let val = e.target.innerHTML;

            if (val === '=') {
                displayWindow.innerHTML = eval(displayWindow.innerHTML);
            } else {
                displayWindow.innerHTML += val;
            }
        }
    })
);

clearDisplay.addEventListener('click', () => (display.innerHTML = ''));
