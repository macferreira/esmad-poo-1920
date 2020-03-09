const result01 = "" + 1 + 0;
console.log(`${result01} - ${typeof (result01)}`);
// A adição com uma string "" + 1 converte 1 numa string: "" + 1 = "1", e então nós temos "1" + 0, a mesma regra é aplicada.

const result02 = "" - 1 + 0;
console.log(`${result02} - ${typeof (result02)}`);
// A subtração - (como a maioria das operações matemáticas) só funciona com números, converte uma string vazia "" em 0.

const result03 = true + false;
console.log(`${result03} - ${typeof (result03)}`);

const result04 = 6 / '3';
console.log(`${result04} - ${typeof (result04)}`);

const result05 = '2' * '3';
console.log(`${result05} - ${typeof (result05)}`);

const result06 = 4 + 5 + 'px';
console.log(`${result06} - ${typeof (result06)}`);

const result07 = '$' + 4 + 5;
console.log(`${result07} - ${typeof (result07)}`);

const result08 = '4' - 2;
console.log(`${result08} - ${typeof (result08)}`);

const result09 = '4px' - 2;
console.log(`${result09} - ${typeof (result09)}`);

const result10 = 7 / 0;
console.log(`${result10} - ${typeof (result10)}`);

const result11 = '  -9  ' + 5;
console.log(`${result11} - ${typeof (result11)}`);
// A adição com uma string anexa o número 5 à string.

const result12 = '  -9  ' - 5;
console.log(`${result12} - ${typeof (result12)}`);
// A subtração sempre se converte em números, portanto, torna "-9" um número -9 (ignorando espaços ao redor).

const result13 = null + 1;
console.log(`${result13} - ${typeof (result13)}`);
// null torna-se 0 após a conversão numérica

const result14 = undefined + 1;
console.log(`${result14} - ${typeof (result14)}`);
// undefined torna-se NaN após a conversão numérica.
