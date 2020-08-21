/**
 * Dados primitivos = string, number, 
 * boolean, undefined, null,
 * (bigint, symbol).
 * 
 * Referência (mutáveis) = array, object, function = 
 * passados por referência.
 */

//  let a = [1, 2, 3];
//  let b = [...a]; // copiando o valor da variável a para variavel b.
//  let c = b;

//  console.log(a, b);

//  a.push(4);
//  console.log(a, b);

//  a.pop();
//  console.log(a, b);


//  a.push('Rafael');
//  console.log(a, c);


//  let nome = 'Rafael'; // strings são indexadas em javascript

//  console.log(nome[0], nome);

// let a = 'A';
// let b = a; // cópia
// console.log(a, b);

// a = 'C';
// console.log(a, b);

const a = {
    nome: 'Rafael',
    sobrenome: 'Sousa'
};

const b = {...a};

// const b = a;

a.nome = 'Pedro';
console.log(a);
console.log(b);
