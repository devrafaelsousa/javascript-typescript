const elementos = [
    {tag: 'p', texto: 'Oi, sou o Rafa e eu estou aprendendo Javascript'},
    {tag: 'div', texto: 'Javascrip é uma linguagem de programação muito poderosa'},
    {tag: 'section', texto: 'Ela é muito utiizada principalmente para desenvolvimento web'},
    {tag: 'footer', texto: 'É isso ai, até mais!'}
];
 

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCreate = document.createElement(tag);
    let textNode = document.createTextNode(texto);

    tagCreate.appendChild(textNode);
    div.appendChild(tagCreate);
}

container.appendChild(div);
