// variáveis: const

// Não podemos criar variáveis com palavras reservadas
// As variáveis precisam ter nomes significativos
// Exemplo: const n = 'nomeDeTal';  // não fazer isso
// Exemplo: const nomeCliente = 'nomeDeTal; // Boas práticas
// Também não pode começar com o nome de uma variável com numeros
// Utilizamos camelCase
// Case-sensiitive

// NÃO UTILIZE var, UTILIZE const. SEMPRE!!!

// Exemplos: 

// Sempre inicializar uma const, e nunca modificar uma const...
const nome = 'João';

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log('O primeiro número é = ',primeiroNumero);
console.log('O resultado do primeiro número triplicado é = ',resultadoTriplicado);

console.log('O tipo da primeira variável é um: ',typeof(primeiroNumero));
