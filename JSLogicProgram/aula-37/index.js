// Exercicios
// Escreva uma função que receba 2 numeros e retorne o maior deles

// Minha solução...
// function max() {
//     const numero1 = 3;
//     const numero2 = 10;

//     if (numero1 > numero2) {
//         return `${numero1} é o maior`;
//     } else {
//         return `${numero2} é o maior`;
//     }
    
// }
// console.log(max());



// Código refatorado...
// function max(x, y) {
//     return x > y ? `${x} é o maior` : `${y} é o maior`;
// }


// Arrow Fuction
const max2 = (x, y) => x > y ? `${x} é o maior` : `${y} é o maior`;
console.log(max2(10, 5));
