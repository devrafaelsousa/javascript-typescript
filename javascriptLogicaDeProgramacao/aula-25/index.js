

// marco zero
// const Horas = 60  * 60 * 3 * 1000; 
// const umDia = 60 * 60 * 24 * 1000;

// const data = new Date(0 + Horas + umDia);       // 01/01/1970 Timestamp unix ou época unix


// const data = new Date(2020, 07, 28, 20, 11, 999);
// const data = new Date('2020-08-28 20:19:59');
// console.log('Dia:', data.getDate());
// console.log('Mês:', data.getMonth());
// console.log('Ano:', data.getFullYear());
// console.log('Hora:', data.getHours());
// console.log('Min:', data.getMinutes());
// console.log('Seg:', data.getSeconds());
// console.log('ms:', data.getMilliseconds());
// console.log('Dia da Semana:', data.getDay());

// console.log(data.toString());
// console.log(Date.now());

function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
    const dia = zeroLeft(date.getDate());
    const mes = zeroLeft(date.getMonth() + 1);
    const ano = zeroLeft(date.getFullYear());
    const hora = zeroLeft(date.getHours());
    const min = zeroLeft(date.getMinutes());
    const seg = zeroLeft(date.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const date = new Date();
const dateBrazil = formatDate(date);
console.log(dateBrazil);