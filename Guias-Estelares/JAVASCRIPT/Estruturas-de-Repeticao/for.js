/*
    Estrutura de Repetição
    
    For
*/

for(let i = 100; i > 0; i--){
    console.log(i)
}

// podemos usar o break para parar em um ponto

for(let i = 10; i > 0; i--){
    if(i === 5){
        break
    }
    console.log(i)
}

// usando o continue

for(let i = 10; i > 0; i--){
    if(i === 5){
        continue
    }
    console.log(i)
}
