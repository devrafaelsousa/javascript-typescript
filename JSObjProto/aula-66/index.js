// Revisão de Objetos

// factory function | constructor function | Classes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// a palavra 'new' cria um novo objeto.
const p1 = new Pessoa('Rafael', 'Sousa');
console.log(p1);

// function criaPessoa(nome, sobrenome) 
// {
//     return {
//         nome, 
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Rafael', 'Sousa');
// console.log(p1.nomeCompleto);


// const pessoa = {
//     nome: "Rafa",
//     sobrenome: "Sousa"
// };
// // console.log(`${pessoa.nome} ${pessoa.sobrenome}`);

// const pessoa1 = new Object();
// pessoa1.nome = 'Rafael';
// pessoa1.sobrenome = 'Sousa';
// pessoa1.idade = 30;

// pessoa1.falarNome = function() {
//     return `${this.nome} está falando seu nome.`;
// };
// pessoa1.getDataNasc = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }
