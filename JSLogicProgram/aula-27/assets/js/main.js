// const h1 = document.querySelector(".container h1");
// const data = new Date("2020-09-04 21:48:59");
// h1.innerHTML = data.toString();

// function getDiaSemana(diaSemana) {
//   let diaSemanaTexto;

//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = "Domingo";
//       return diaSemanaTexto;

//     case 1:
//       diaSemanaTexto = "Segunda-feira";
//       return diaSemanaTexto;

//     case 2:
//       diaSemanaTexto = "Terça-feira";
//       return diaSemanaTexto;

//     case 3:
//       diaSemanaTexto = "Quarta-feira";
//       return diaSemanaTexto;

//     case 4:
//       diaSemanaTexto = "Quinta-feira";
//       return diaSemanaTexto;

//     case 5:
//       diaSemanaTexto = "Sexta-feira";
//       return diaSemanaTexto;

//     case 6:
//       diaSemanaTexto = "Sábado";
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = "ERROR";
//   }
// }

// function getNomeMes(numeroMes) {
//   let nomeMes;

//   switch (numeroMes) {
//     case 0:
//       nomeMes = "janeiro";
//       return nomeMes;

//     case 1:
//       nomeMes = "fevereiro";
//       return nomeMes;

//     case 2:
//       nomeMes = "março";
//       return nomeMes;

//     case 3:
//       nomeMes = "abril";
//       return nomeMes;

//     case 4:
//       nomeMes = "maio";
//       return nomeMes;

//     case 5:
//       nomeMes = "junho";
//       return nomeMes;

//     case 6:
//       nomeMes = "julho";
//       return nomeMes;

//     case 7:
//       nomeMes = "agosto";
//       return nomeMes;

//     case 8:
//       nomeMes = "setembro";
//       return nomeMes;

//     case 9:
//       nomeMes = "outubro";
//       return nomeMes;

//     case 10:
//       nomeMes = "novembro";
//       return nomeMes;

//     case 11:
//       nomeMes = "dezembro";
//       return nomeMes;

//     default:
//       nomeMes = "ERROR";
//   }
// }

// function   zeroLeft(num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemana(diaSemana);
//   const nomeMes = getNomeMes(numeroMes)

//   return (
//     `${nomeDia},  ${data.getDay() + 1} de ${nomeMes}` +
//     ` de ${data.getFullYear()} ` + 
//     `${zeroLeft(data.getHours())}:${zeroLeft(data.getMinutes())}`
//   );
// }

// h1.innerHTML = criaData(data);


const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
  dateStyle: 'full',
  timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
