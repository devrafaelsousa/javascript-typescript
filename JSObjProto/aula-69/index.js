/**
    Object.values
    Object.entries
    Object.assign(des, any)
    Object.getOwnPropretyDescriptor(o, 'prop')
    ...(spread)

    -------------------------------------------

    Já vimos
    Object.keys (retorna as chaves)
    Object.freeze (congela o objeto)
    Object.defineProperty (define uma propriedade)
    Object.defineProperties (define várias propriedades)
 */

const produto = {nome: 'Caneca', preco: 1.8, material: 'Porcelana'};

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'um valor'
// });

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'qlq coisa';
// delete produto.preco;
// console.log(produto);


// const caneca = { nome: produto.nome, preco: produto.preco};

// const caneca = Object.assign({}, produto, { material: 'Porcelana' });

// const caneca = { 
//     ...produto, 
//     material: 'Porcelana'
// };
