const trigger = document.querySelector('.trigger');
const result = document.getElementById('result');

function generate() {
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    min = parseInt(min);
    max = parseInt(max);
    resultado = Math.floor(Math.random() * (max - min)) + min;
    result.innerHTML = resultado;
}

trigger.addEventListener('click', generate);