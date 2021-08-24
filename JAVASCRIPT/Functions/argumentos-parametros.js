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
    console.log(number1 + number2) // tem que colocar dentro do escopo
}

sum(2, 3) // sum(number1, number2) -- passando arguments(argumentos)