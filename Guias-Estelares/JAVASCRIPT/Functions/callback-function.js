// callback function

function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

// callback - criando fora, e passar o valor para dentro

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)