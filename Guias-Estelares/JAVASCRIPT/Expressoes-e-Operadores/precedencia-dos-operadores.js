/*
    Operator precedece
        Precedência de operadores

    * grouping                      ( )
    * negação e incremento          ! ++ --
    * multiplicação e divisão       * /
    * adição e subtração            + -
    * relacional                    < <= > >= 
    * igualdade                     == != === !==
    * AND                           &&
    * OR                            ||
    * condicional                   ?:
    * assignment (atribuição)       = += -= *=
*/

console.log( (2 + 5) * 10 ) // grouping
console.log(3 > 2 > 1 ) // false, priemeiro olha se 3 > 2 e depois olha se true > 1 e não se 2 > 1
console.log (true == 1) // true
console.log(false == 0) // true
console.log (3 > 2 && 2 > 1) // true
