const weight = +prompt('Qual o seu peso?');
const height = +prompt('Qual a sua altura?');

calcImc(weight, height);

function calcImc(weight, height) {
    const imc = weight / (height * height);
    if (imc < 18.5) {
        alert('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
        alert('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
        alert('Obesidade grau I');
    } else if (imc >= 35 && imc <= 39.9) {
        alert('Obesidade grau II');
    } else
        alert('Obesidade grau III');
}
