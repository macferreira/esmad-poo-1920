const a = +prompt('Digite o primeiro número?');
const b = +prompt('Digite o segundo número?');

showMultiples(a, b);

function showMultiples(a, b) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        if (i % 3 === 0)
            result += i;
    }
    alert(result);
}
