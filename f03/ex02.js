//b. Altere o texto do parágrafo com id "p1" para "Está um dia de chuva"
const p1 = document.getElementById('p1');
p1.innerHTML = 'Está um dia de chuva';

//c. Altere a imagem existente para uma outra com o seguinte link: https://www.altominho.tv/site/wp-content/uploads/2019/02/chuva.jpg
const newImg = document.querySelector('img');
newImg.src = 'https://www.altominho.tv/site/wp-content/uploads/2019/02/chuva.jpg';

//d. Altere a cor de fundo do segundo parágrafo para amarelo
const secondP = document.querySelector('p:nth-of-type(2)');
secondP.style.backgroundColor = 'yellow';
