/**
 * 
 * Avaliação curto-circuito
 * 
 * 
 * && --> false && true
 * || --> retorna o valor
 * 
 * qualquer coisa diferente de zero avalia em true
 * false --> 0, '', null/undefined, NaN
 */

//  console.log('Rafael Sousa' && NaN && 'Gabriela');

// function falaOi() {
//     return 'Oi';
// };

// let vaiExecutar = 'Joãozinho';

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Rafael' || true);

// const corUsuario = null;
// const corPadrão = corUsuario || 'black';

// console.log(corPadrão);

const a = 0;
const b = null;
const c = 'false'; // saída
const d = false;
const e = NaN;


console.log(a || b || c || d || e);