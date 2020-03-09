let i = 3;

while (i) {
    alert(i--);
}

/*
Cada iteração de loop diminui i por 1. A verificação while(i) interrompe o loop quando i = 0.
Portanto, as etapas do loop formam a seguinte sequência:
let i = 3;
alerta (i--); // mostra 3, diminui i para 2
alerta (i--); // mostra 2, diminui i para 1
alerta (i--;) // mostra 1, diminui i para 0

feito, i passa a 0 e a condição é avaliada como falsa
*/
