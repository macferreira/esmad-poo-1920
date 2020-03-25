//b. Selecionar o elemento com id 'p2' e imprimi-lo na consola
const p2 = document.getElementById('p2');
console.log(p2);

//c. Selecionar todos os parágrafos e imprimi-los na consola
const ps = document.getElementsByTagName('p')
for (const p of ps) {
    console.log(p)
}

//d. Selecionar todos os parágrafos e imprimir os seus conteúdos
const psContents = document.getElementsByTagName('p')
for (const p of psContents) {
    console.log(p.innerHTML)
}

//e. Selecionar todos os elementos cujo atributo class tenha o valor 'red'
const elmsRed = document.getElementsByClassName('red')
for (const elm of elmsRed) {
    console.log(elm.innerHTML)
}

//f. Selecionar e imprimir um elemento <p> cujo atributo id tenha o valor 'p3'
const pp3 = document.querySelector('p#p3')
console.log(pp3)

//g. Selecionar e imprimir todo os conteúdos dos elementos <p> e <div>
const pDivs = document.querySelectorAll('p,div')
for (const elm of pDivs) {
    console.log(elm.innerHTML)
}

//h. Selecionar e imprimir os textos dos elementos <span>
const spans = document.querySelectorAll('span')
for (const elm of spans) {
    console.log(elm.innerHTML)
}

//i. Selecionar e imprimir o texto do elemento <span> dentro do elemento <div>
const spanDiv = document.querySelector('div span')
console.log(spanDiv.innerHTML)

//j. Selecionar e imprimir o texto do elemento <span> fora do elemento <div>
const spanOutDiv = document.querySelector('body>span')
console.log(spanOutDiv.innerHTML)
