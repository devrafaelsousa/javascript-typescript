// let a = 'A';
// let b = 'B';
// let c = 'C';


// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);


// (...) rest, (...) spread


// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, dois, tres, ...resto] = numeros;
// console.log(um, dois, tres);
// console.log(resto);


const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Sousa',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 222
    }
};

const { nome, ...resto} = pessoa;
console.log(nome, resto);


// const { 
//     endereco: {rua, numero}, 
//     endereco 
// }  = pessoa;
// console.log(rua, numero, endereco);





// const numeros = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const [, [,,seis]] = numeros;

// console.log(numeros[1][2]);
// console.log(seis);
