// Exercicio aula 09

const num1 = prompt('Digite um número: ');
const num2 = prompt('Digite outro número: ');
const resultado;

resultado = parseInt(num1) + parseInt(num2);
/**
 * ou: 
 * num1 = Number(num1);
 * num2 = Number(num2);
 * 
 * const resultado = num1 + num2
 *  */ 

alert(`O resultado da sua conta é ${resultado}`);
