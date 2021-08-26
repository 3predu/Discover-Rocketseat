// for...in
// Cria um loop em cima de um objeto / pegando as propiedades do objeto

let person= {
    name: 'John',
    age: 31,
    weight: 76.5
}

for(let propety in person){
    console.log(propety)
    // caso queria acessar as propiedades de person
    console.log(person[propety])
}