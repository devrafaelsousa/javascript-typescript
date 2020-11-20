// Retorne a soma do dobro d todos os pares;
// -> Filtrar pares; Saída = [ 50, 80, 2, 8, 22 ]
// -> Dobrar ps valores;  Saída = [ 100, 160, 4, 16, 44 ]
// -> Reduzir (somar tudo); Saída = 324


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

console.log(numerosPares);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
