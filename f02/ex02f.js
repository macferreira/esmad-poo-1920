const a = +prompt('Digite o primeiro número?');
const b = +prompt('Digite o segundo número?');

showNumbers(a, b);

function showNumbers(a, b) {
    let result = '';
    for (let i = a; i < b; i++) {
        result += i;
    }
    alert(result);
}
