
 function pessoa(nome, sobrenome) {
     return {
         nome,
         sobrenome
     };
 }

 const p1 = pessoa( 'rafael', 'sousa')
 const p2 = {
     nome: 'José',
     sobrenome: 'da Silva'
 };

 console.log(p1, p2);
