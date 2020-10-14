// IIFE - Immediately Invoked Function Expression
(function(idade, peso, altura) {
    const sobrenome = 'Sousa';
    function criaNome (nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome () {
        console.log(criaNome('Rafael'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(25, 77, 1.88);
