function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,      
        configurable: true,
        get: function() {
            return estoquePrivado;
        }, 
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('ERRO: O valor precisa ser um número.')
                  
            }
            estoquePrivado = valor;
        }   
    });

}

const p1 = new Produto('Tênis', 350, 10);
console.log(p1);
p1.estoque = '5';
console.log(p1.estoque);
