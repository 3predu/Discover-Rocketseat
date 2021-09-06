// criar um aplicativo de frases motivacionais
    //console.log('Estudar é muito bom')
    //console.log('Paciência e persistência')
    //console.log('Revisão é a mãe do aprendizado')

// função é um tipo de dado estrutural

// function declaration - declaração da função
// function statement
function createPhrases(){
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é a mãe do aprendizado')
}
/*
    para executar a função, precisamos chama-la
    (execute, run, call or invoke). 
*/
createPhrases()

console.log('fim do programa.')

/* ------------------------------------------ */

// Declarando funções dentro de variáveis

// function expression
// function anonymous

//parâmetros (parameters)
const sum = function(number1, number2){
    let total = number1 + number2 // sempre colocar o tipo da variável!!!
    return total
}

let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)