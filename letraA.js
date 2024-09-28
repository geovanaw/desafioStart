const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarLetraA(string) {
    const lowerCaseString = string.toLowerCase();
    const quantidadeA = (lowerCaseString.match(/a/g) || []).length; // contagem de a

    if (quantidadeA > 0) {
        return `A letra 'a' aparece ${quantidadeA} vez(es) na palavra.`;
    } else {
        return "A letra 'a' não está na palavra.";
    }
}

rl.question("Digite uma palavra ou frase para verificar a presença da letra 'a': ", (userInput) => {
    console.log(verificarLetraA(userInput));
    rl.close();
});