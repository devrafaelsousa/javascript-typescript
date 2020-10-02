// selecionando a class
const paragrafos = document.querySelector('.paragrafos');

// selecionando as tags 'p'
const pes = document.querySelectorAll('p');

// pegando os estilos css do navegador computados do body
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

// modificando a cor cada elemento 'p'
for (let p of pes) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
}
