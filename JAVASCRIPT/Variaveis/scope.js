 // A maneira de leitura do JS é de cima para baixo (verticalmente)

 // VAR
 // var é global e, também local


 // hoisting (elevanção), sem nos vermos, ele joga a var x para cima sem valor definido 
 console.log('> existe x antes do bloco? ', x)

 {
     var x = 0
 }

 console.log('> existe x depois do bloco? ', x)


// LET e CONST
// const e let são locais e só funcionam no escopo onde foi criada

console.log('> existe y antes do bloco?', y)

// let y = 1;
// const y = 1;

{
    // y = 0 - quando for const não irá alterar pois a variável é constante
    // console.log('> existe y antes?', y)
    let y = 0
    // console.log('> existe y', y)
}

// Não existe, pois o let e const só funcionam dentro do escopo
console.log('> existe y depois do bloco?', y)