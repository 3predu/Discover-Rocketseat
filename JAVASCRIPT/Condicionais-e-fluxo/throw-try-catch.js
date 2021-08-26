// Throw

function sayMyName(name = '') {
    if(name == ''){
        throw new Error("[ERROR]: Nome é obrigatório") 
        // interrompe a function
    }


    console.log('name')
}

// try...catch // tentar... capturar
try{ // tenta executar
    sayMyName('Predu')
}catch(e){ // captura o erro e continua a aplicação
    console.log(e)
}

console.log('após o try/catch')