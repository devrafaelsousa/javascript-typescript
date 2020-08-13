/**
 * XXXXXXX XXXXXXXX XXXXXXX tem XX anos, pesa XX kg
 * tem X.XX de altura e seu IMC é de XXXXXXXXX
 * 
 * XXXXXXXX XXXXXXX nasceu em XXXX
 */

const nome = 'Rafael';
const sobrenome = 'Sousa';
const idade = 31;
const peso = 70;
const altura = 1.88;
// calculo do imc
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (altura * altura); 
anoNascimento = 2020 -idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos,`);
console.log(`pesa ${peso} kg tem ${altura} de ${altura} e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
