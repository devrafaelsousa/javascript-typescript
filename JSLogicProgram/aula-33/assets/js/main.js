const nomes = ['Rafael',  'Sousa', 
    'Pereira'];

for (let valor of nomes) {
    console.log(valor);
}


nomes.forEach(function(e, i, a) {
    console.log(e, i, a);
});


/* 
For clássico = Geralmente com iteraveis (array ou strings)
For in = Retorna o índice ou chave (strings, array ou objetos)
For of = Retorna o valor em si (iteráveis, arrays ou strings) 
*/