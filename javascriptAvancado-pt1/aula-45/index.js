// Declaração de função (Function Hoisting)
falaOi();
function falaOi() {
    console.log('Oi!');
};

// First-Class objects (Objetos de primeira classe)
// Function expression 
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar a sua função abaixo');
    funcao();
};

// Arrow Fuction
const arrowFuction = () => {
    console.log('Sou uma arrow fuction');
};
arrowFuction();

// dentro de um objeto
const obj = {
    falar: function() {
        console.log('Falando...');
    }
};
