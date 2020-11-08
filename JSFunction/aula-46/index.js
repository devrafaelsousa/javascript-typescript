function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);


// function  fn2({ nome, sobrenome, idade }) {

//     console.log(nome, sobrenome, idade);
// }

// fn2({ nome: 'Rafael', sobrenome: 'Sousa', idade: 31 });



// function fn(a, b, c, d, e, f) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total, a, b, c, d, e, f);
// }
// fn('valor', 
//     'moeda', 
//     'casa', 
//     'fazenda', 
//     'edificio', 
//     'paralalepipedo');

