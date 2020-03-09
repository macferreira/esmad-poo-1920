// a
console.log('-- a --');
let a = 1, b = 1;
let c = ++a;
let d = b++;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);


// b
console.log('-- b --');
a = 2;
let x = 1 + (a *= 2);

console.log(`a = ${a}`); // multiplicado por 2
console.log(`x = ${x}`); // calculado como 1 + 4
