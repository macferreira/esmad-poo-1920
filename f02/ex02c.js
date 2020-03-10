const num1 = +prompt('Digite o primeiro número?');
const num2 = +prompt('Digite o segundo número?');
const operator = prompt('Digite o operador?');

calculator(num1, num2, operator);

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            alert(`O resultado é ${num1 + num2}`);
            break;
        case '+':
            alert(`O resultado é ${num1 - num2}`);
            break;
        case '*':
            alert(`O resultado é ${num1 * num2}`);
            break;
        case '/':
            if (num2 === 0) {
                alert('Não é possível efetuar a divisão de um número por 0');
            } else {
                alert(`O resultado é ${num1 / num2}`);
            }
            break;
        default:
            alert('Operador inválido!')
            break;
    }
}
