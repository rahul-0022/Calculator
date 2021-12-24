let result = document.getElementById('result');
buttons = document.querySelectorAll('button');
let resultValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            resultValue += buttonText;
            result.value = resultValue;
        } else if (buttonText == '÷') {
            buttonText = '/'
            resultValue += buttonText;
            result.value = resultValue;
        } else if (buttonText == 'C') {
            resultValue = "";
            result.value = resultValue;
        } else if (buttonText == 'Del') {
            resultValue = resultValue.slice(0, -1);
            result.value = resultValue;
        } else if (buttonText == '=') {
            result.value = eval(resultValue);
        } else {
            resultValue += buttonText;
            result.value = resultValue;
        }

    })
}