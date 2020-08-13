let varA = 'A';  // B = varB
let varB = 'B';  // C = varC
let varC = 'C';  // A = varA

// const temp = varA;
// varA = varB;
// varB = varC;
// varC = temp;

[varA, varB, varC] = [varB, varC, varA];


console.log(`O valor de varA agora é: ${varA} O valor de varB agora é: ${varB} O valor de varC agora é: ${varC}`);
