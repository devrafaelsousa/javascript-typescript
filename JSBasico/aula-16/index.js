// Objects

const pessoa1 = {
    nome: 'Rafael',
    sobrenome: 'Sousa',
    idade: 31,

    fala() {
       // console.log(`${this.nome} ${this.sobrenome} está falando oi!`);
       console.log(`A minha idade é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();



// function createPessoa(nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//     };
// }

// const pessoa1 = createPessoa('Rafael', 'Sousa', 31);
// const pessoa2 = createPessoa('Gabriela', 'Marinho', 30);
// const pessoa3 = createPessoa('Julia', 'Gramgnoli', 8);
// const pessoa4 = createPessoa('Pedro', 'Gramgnoli', 14);
// const pessoa5 = createPessoa('Samuel', 'Sousa', 1);

// console.log(
//     pessoa1.nome, 
//     pessoa2.nome, 
//     pessoa3.nome, 
//     pessoa4.nome, 
//     pessoa5.nome
//     );
