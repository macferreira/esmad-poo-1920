alert( null || 2 || undefined );
// A resposta é 2, esse é o primeiro valor verdadeiro.

alert( alert(1) || 2 || alert(3) );
/*
A resposta: primeiro 1 e depois 2.
A chamada para alert não retorna um valor, ou melhor, retorna undefined.
O primeiro OR || avalia o alerta esquerdo (1). Isso mostra a primeira mensagem com 1.
O alerta retorna indefinido, então OU passa para o segundo operando procurando por um valor verdadeiro.
O segundo operando 2 é verdadeiro, então a execução é interrompida, 2 é retornado e então mostrado pelo alerta externo.
Não haverá 3, porque a avaliação não alcança o alerta (3).
*/

alert( 1 && null && 2 );
// A resposta: null, porque é o primeiro valor falso da lista.

alert( alert(1) && alert(2) );
/*
A resposta: 1 e, em seguida, undefined.
A chamada para alerta retorna undefined (apenas mostra uma mensagem, portanto, não há retorno significativo).
Por causa disso, && avalia o operando esquerdo (mostra 1), e imediatamente pára, porque undefined é um valor falso.
E && procura por um valor falso e retorna.
*/

alert( null || 2 && 3 || 4 );
/*
Resposta: 3
A precedência de && é maior que ||, portanto, é executada primeiro.
O resultado de 2 && 3 = 3, então a expressão torna-se:
null || 3 || 4
Agora o resultado é o primeiro valor verdadeiro (truthy): 3.
*/
