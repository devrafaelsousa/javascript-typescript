/**
 * Aritméticos + - / * 
 * + = adição ou concatenação
 * 
 * - = subtração
 *  / = divisão
 * * = multiplicação
 * ** = potenciação
 * 
 * % = resto da divisão
 * incremento ++
 * ++ pre incremento
 * decremento --
 * -- pre decremento 
 * 
 *  //Exemplos:
 * 
 *  const num1 = 5;
    const num2 = 2;
    const num3 = 10;

    // precedência
    console.log((num1 + num2) * num3);
 */

 //Exemplos:

 
 let contador = 0;
 // operadores de atribuição
 contador *= 2;
 contador += 2;
 contador -= 2;

 console.log(contador);
 

 // NaN - Not a Number | parseInt(inteiro) , parseFloat(decimais) e Number

 const num1 = 10;
 const num2 = Number('5');
 console.log(num2 + num1);
 console.log(typeof num2);