function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de "Date"');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    // É executada quando não há erros.
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    // É executada quando há erros.
    // Tratar erro...
} finally {
    // É executada sempre, (mas pode ser omitida, caso queira).
    console.log('Tenha um Bom dia!');
}