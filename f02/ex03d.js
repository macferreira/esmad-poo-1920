alert(calcFactorial(0));
alert(calcFactorial(1));
alert(calcFactorial(5));
alert(calcFactorial(6));

function calcFactorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i
    }
    return product;
}
