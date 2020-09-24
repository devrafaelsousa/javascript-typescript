function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números'); // Lançando um novo erro
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    // console.log(error);
    console.log('ERRRRRRROU!!!!! (Alguma coisa mais amigável ao usuário)');
}
