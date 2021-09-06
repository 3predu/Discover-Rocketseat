// function scope

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject)) // retornará 'study'
console.log(subject) // variável subject fora do escopo da function - 'create video'

