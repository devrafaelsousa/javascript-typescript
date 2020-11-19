const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elements);

// const removidos = nomes.splice(3, 1, 'Rafael');

// shift 
nomes.shift(0, 1);
nomes.splice(1, 0, 'Rafael');

console.log(nomes);
