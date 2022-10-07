function start () {
    var buttonCalculateImc = document.querySelector("#button-calculate-imc");
    buttonCalculateImc.addEventListener('click', handlebuttonclick);

    var inputWeigth = document.querySelector('#input-weigth');
    var inputHeigth = document.querySelector('#input-heigth');

    inputWeigth.addEventListener('input', handlebuttonclick);
    inputHeigth.addEventListener('input', handlebuttonclick);

    handlebuttonclick();
}

function calculateImc(weigth, heigth) {
    return weigth / (heigth * heigth);
}

function handlebuttonclick() {
    var inputWeigth = document.querySelector('#input-weigth');
    var inputHeigth = document.querySelector('#input-heigth');
    var imcResult = document.querySelector('#imc-result');
    
    var weigth = Number (inputWeigth.value);
    var heigth = Number (inputHeigth.value);
   
    var imc = calculateImc(weigth, heigth);
    var formattedImc = imc.toFixed(2).replace('.',',');
    
    imcResult.textContent = formattedImc;
}

start();