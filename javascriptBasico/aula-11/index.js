//               01234567
// let umaString = "A Text";
                 01234567   
let umaString = "O rato roeu a roupa do Rei de Roma.";

console.log(umaString.concat(' ', 'i smile'));
console.log(umaString.indexOf("Text", 3));
console.log(umaString.lastIndexOf('t'));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));
console.log(umaString.replace('A', 'Um'));
console.log(umaString.replace(/A/, 'Um'));

console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(2, 35));
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length -5, -1));

console.log(umaString.split(' ', 5));
console.log(umaString.toLocaleUpperCase());
console.log(umaString.toLocaleLowerCase());