// A resposta: o primeiro e o terceiro serão executados.


if (-1 || 0) alert('first');
/*
Executa.
O resultado de -1 || 0 = -1, truthy
if (-1 || 0) alerta (first);
*/

if (-1 && 0) alert('second');
/*
Não executa.
-1 && 0 = 0, falsamente
if (-1 && 0) alerta (second);
*/

if (null || -1 && 1) alert('third');
/*
Executa
Operador && tem uma precedência maior que ||
então -1 && 1 executa primeiro, nos dando a expresão:
null || -1 && 1 -> null || 1 -> 1
if (null || -1 && 1) alert ('third');
*/