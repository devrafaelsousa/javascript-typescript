// // new Object --> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// };

// const objB = {
//     chaveB: 'B'
//     // __proto__: objA
// };

// const objC = new Object();
// Object.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveB);


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


const p1 = new Produto('Camisa', 50);

const p2 = {
    nome: 'Blusa',
    preco: 60
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(15);


const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Tênis Nike'
    },

    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 310
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});

p3.aumento(10);
console.log(p3);

// p1.desconto(50);
// p1.aumento(100);
// console.log(p1);
// console.log(p2);
