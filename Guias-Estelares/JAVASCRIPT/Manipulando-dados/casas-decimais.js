/*
    Manipulando Strings e Números


    Transformar um número quebrado com 2 casas decimais
    e trocar por ponto e vírgula.
*/

let number = 45.5654675
console.log(number.toFixed(2)) // colocando 2 casas decimais
console.log(number.toFixed(2).replace(".", ",")) // trocar ponto por vírgula
