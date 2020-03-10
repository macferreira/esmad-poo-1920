alert(pow(3, 2));
alert(pow(3, 3));
alert(pow(4, 'x'));
alert(pow(1, 100));

function pow(base, exponent) {
    if (isNaN(+base) || base <= 1) {
        return 'Base deve ser um número inteiro superior a 1';
    } else if (isNaN(+exponent) || exponent <= 1) {
        return 'Expoente deve ser um número inteiro superior a 1';
    } else {
        return base ** exponent;
    }
}
