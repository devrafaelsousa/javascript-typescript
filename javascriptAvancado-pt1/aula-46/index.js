function fn(a, b, c, d, e, f) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c, d, e, f);
}
fn('valor', 'moeda', 'casa', 'fazenda', 'edificio', 'paralalepipedo');

