// 1 - Capturar o evento de submit do formulário
const form = document.querySelector('#form');

// O formulário não está mais sendo enviado...
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // pega o input inteiro
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
   
   // pega o valor do input
   const peso = Number(inputPeso.value);
   const altura = Number(inputAltura.value);    

   if(!peso) {
       setResultado('Peso Inválido', false);
       return;
   }

   if(!altura) {
       setResultado('Altura Inválida', false);
       return;
   }

   const imc = getImc(peso, altura);
   const TabelaImc = getTabelaImc(imc);

   const msg = `Seu IMC é: ${imc} (${TabelaImc})`;

   setResultado(msg, true);
});

/**
 * Menor que 18,5 Abaixo do peso,
 * Entre 18,5 e 24,9 Peso Normal,
 * Enntre 25 e 29,9 Sobrepeso,
 * Entre 30 e 34,9 Obesidade grau #1,
 * Entre 35 e 39,9 Obesidade grau #2,
 * Maior que 40 Obesidade grau #3
 */

function getTabelaImc(imc) {
    const TabelaImc = ['Abaixo do Peso', 'Peso Normal', 'SobrePeso', 
        'Obesidade Grau #1', 'Obesidade Grau #2', 'Obesidade Grau #3'];

    if(imc >= 39.9)
        return TabelaImc[5];
    
    if(imc >= 34.9)
        return TabelaImc[4]
    
    if(imc >= 29.9)
        return TabelaImc[3];
    
    if(imc >= 24.9)
        return TabelaImc[2];

    if(imc >= 18.5)
        return TabelaImc[1];
    
    if(imc < 18.5)
        return TabelaImc[0];  
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(className) {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    
    const p = criaP();
    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}
