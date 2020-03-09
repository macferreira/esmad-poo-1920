console.log(`5 > 4 -> ${5 > 4}`);
// (1) Obviamente, é verdade.

console.log(`'apple' > 'pineapple' -> ${'apple' > 'pineapple'}`);
// (2) Comparação de dicionário, portanto, falsa.

console.log(`'2' > '12' -> ${'2' > '12'}`);
// (3) Novamente, comparação de dicionário, primeiro caractere de "2" é maior que o primeiro caractere de "1".

console.log(`undefined == null -> ${undefined == null}`);
// (4) Valores nulos e indefinidos são iguais entre si.

console.log(`undefined === null -> ${undefined === null}`);
// (5) A igualdade estrita é rigorosa. Diferentes tipos de ambos os lados levam a falso.

console.log(`null == '\\n0\\n' -> ${null == '\n0\n'}`);
// (6) Veja 4

console.log(`null === +'\\n0\\n' -> ${null === +'\n0\n'}`);
// (7) Igualdade estrita de diferentes tipos de dados
