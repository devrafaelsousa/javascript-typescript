// factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}`;
        },
        altura, 
        peso,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Rafael', 'Sousa', 1.88, 64.0);
p1.nomeCompleto = 'José da Silva'
// console.log(`${p1.nome} ${p1.sobrenome} seu imc é: ${p1.imc}`);
console.log(p1.nome);
console.log(p1.sobrenome);
