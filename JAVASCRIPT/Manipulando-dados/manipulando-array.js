// Manipulando Arrays

let techs = ['html', 'css', 'js']

// adicionar um item no fim

console.log(techs.push("nodejs"))

// adicionar no começo

techs.unshift("sql")

// remover do fim

techs.pop()

// remover do começo

techs.shift()

// pegar somente alguns elementos do array

// slice == cortar
console.log(techs.slice(1, 3))

// remover 1 ou mais itens em qualquer posição do array

techs.splice(1, 1) // retirando 1 elemento "css"
techs.splice(1, 2) // retirando 2 elementos "css" e "js"

// encontrar a posição de um elemento no array

let positionIndex = techs.indexOf('css')
console.log(positionIndex)

techs.splice(positionIndex, 1)


console.log(techs)