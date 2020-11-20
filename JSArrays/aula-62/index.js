// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobro = numeros.map(valor => valor * 2);

// Para cada elemento:
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// Retorne apenas uma string com o nome da pesso;
const nomes = pessoas.map(obj => obj.nome);
// Remova apenas a chave "nome" do objeto;
const idades = pessoas.map(obj => ({idade: obj.idade}));


// Adicione uma chave "id" em cada objeto;
const IDs = pessoas.map(function(obj, indices) {
    const newObj = { ...obj };
    newObj.id = indices;
    return newObj;
});
console.log(pessoas);
console.log(IDs);
