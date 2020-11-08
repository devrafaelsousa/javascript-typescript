// Operador ternário | condições: ? 'valor verdadeiro' | : 'valor falso'

const pontuacaoUsuario = 1000;
const nivelusuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Padrão';


const corUsuario = null;
const corPadrao = corUsuario || 'Black';


console.log(nivelusuario, corPadrao);



// if(pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário PADRÃO');
// }
