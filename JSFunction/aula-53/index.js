// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Privados
    const ID = 1232020;
    const metodoInterno = function() {

    };
    // Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ' : Sou um método');
    };
}

const p1 = new Pessoa('Rafael', 'Sousa');
const p2 = new Pessoa("Gabriela", "Marinho");

p2.metodo();
