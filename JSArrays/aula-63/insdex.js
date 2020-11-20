
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Somme todos os números (reduce);
const total = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 !== 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0);
// console.log(total);

// Retorne um array com os pares (filter);
const total2 = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
// console.log(total2);

// Retorne um array com o dobro dos valores (map);
const total3 = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
// console.log(total3);



const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;  
}, 0);
console.log(maisVelha);
