const readline = require('readline-sync')

const precoDoPao = readline.questionFloat("informe o preço do pao ")


for (let i = 1; i <=50; i++) {
    const valorPaes = i * precoDoPao;
    console.log(`${i} - R$ ${valorPaes.toFixed(2)}`)
}