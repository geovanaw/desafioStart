const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacciCheck(num) {
    if (num < 0) {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
    
    let a = 0, b = 1;
    let fibonacciSeq = [a];

    // gerar a sequencia de fibonacci
    while (b <= num) {
        fibonacciSeq.push(b);
        let temp = b;
        b = a + b;
        a = temp;
    }

    // Verifica se o número está na sequência
    if (fibonacciSeq.includes(num)) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", (userInput) => {
    const numberCheck = parseInt(userInput, 10); // converte o input para um número inteiro
    console.log(fibonacciCheck(numberCheck));
    rl.close();
});