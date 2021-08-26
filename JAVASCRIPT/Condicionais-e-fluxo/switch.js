// Switch

switch (expression){
    case 'a': 
        // código for a
        console.log('a')
        break
    case 'b':
        // código for b
        console.log('b')
    default:
        console.log('default')
        break
}

// Calculadora Simple

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('[ERROR]: Não implementado!')
            break;
    }
}

console.log(calculate(4, '*', 8))