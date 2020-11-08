const verdade = true;



// let tem escopo de bloco {... bloco}
// var só tem escopo de função...

let nome = 'Rafael'; // criando
var nome2 = 'Rafael';

if(verdade) {
    let nome = 'Sousa'; // criando
    console.log(nome, nome2);

    if(verdade) {
        let nome = 'Alguma coisa';
        console.log(nome, nome2);
    };
}
