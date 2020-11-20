// ForEach

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array1.forEach(function(valor, indice, array) {
    console.log(`Valores: ${valor} 
    - Indices: ${indice} 
    - Array: [${array}]`);
});

for (let valor of array1) {
    // console.log(valor);
}