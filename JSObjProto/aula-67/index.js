// definedProperty | defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,      // mostra a chave
        value: estoque,        // valor
        writable: false,       // pode alterar
        configurable: true    // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,      
            value: nome,        
            writable: true,       
            configurable: true    
        },

        preco: {
            enumerable: true,      
            value: preco,        
            writable: true,       
            configurable: true    
        },
    });
}

const p1 = new Produto('Tênis', 350, 10);
console.log(p1);


for (let chave in p1) {
    return chave;
}

// p1.estoque = 50000; // tentando alterar o valor
// delete p1.estoque;  // tentando deletar a propriedade
// console.log(p1);
