/**
 * Javascript é baseado em protótiṕos para passar propriedades e métodos
 * de um objeto para outro;
 * 
 * Definição de protótiṕ:
 * 
 * Protótipo é o termo usado para se referir ao que foi criado pela
 * primeira vez, servindo de modelo ou molde para futuras produções.
 * 
 * TOdos os objetos tem uma referência inteira para um protótipo (__proto__)
 * que vem da propriedade prototype da função construtora que foi usada para 
 * criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
 * do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
 * de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
 * @param {*} nome 
 * @param {*} sobrenome 
 */ 

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome)

{
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL:' + ' ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// instância
const pessoa1 = new Pessoa('Rafael', 'S.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Gabriela', 'M.');
const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);
