// If and Else ( se / se não)

// if-else simples

let tempFever = 36.5

if(tempFever >= 37) {
    console.log('Febre')
}else {
    console.log('Tudo Ok!')
}

// if-else mais complexo

let tempFever = 37.3

if(tempFever >= 37) {
    console.log('Febre')
}else if (tempFever < 37.5 && tempFever >= 37){
    console.log('Febre moderada')
}else {
    console.log('Tudo Ok!')
}

// outra forma de fazer

let tempFever = 37.3
let highFever = tempFever >= 37.5
let mediumFever = tempFever < 37.5 && tempFever >= 37

if(highFever) {
    console.log('Febre alta!')
}else if (mediumFever){
    console.log('Febre moderada')
}else{
    console.log('Tudo Ok!')
}
