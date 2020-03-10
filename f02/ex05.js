let attempts = 0;
let result;
const limitAttempts = 5;
const randomNumber = Math.floor((Math.random() * 100) + 1);

do {
    attempts++;
    const attemptNumber = +prompt('Digite um número?');
    result = checkNumber(randomNumber, attemptNumber);
    if (result === 0) {
        break;
    } else if (result > 0) {
        alert('PARA BAIXO!');
    } else {
        alert('PARA CIMA!');
    }
} while (attempts < limitAttempts)

if (result === 0) {
    alert('ADIVINHOU, PARABÉNS!');
} else {
    alert('PACIÊNCIA, JOGUE OUTRA VEZ');
}

function checkNumber(randomNumber, attemptNumber) {
    if (randomNumber === attemptNumber) {
        return 0;
    } else if (randomNumber > attemptNumber) {
        return -1;
    } else {
        return 1;
    }
}
