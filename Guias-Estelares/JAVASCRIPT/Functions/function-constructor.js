/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + "andando"
    }
}

const predu = new Person("Predu")
const joao = new Person("Joao")
console.log(predu.walk())
console.log(joao.walk())