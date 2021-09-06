/* 1. Declare uma variável de nome wight */

let weight;

/*  2. Que tipo de dado é a variável acima? */
// se eu não souber:
console.log(typeof weight);
let variavel = 'undefined';


/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (interger (inteiro))
        * stars: Number (float (real/quebrado))
        * insSubscribed: Boolean
*/

let name = "George";
let age = 50;
let stars = 4.9;
let insSubscribed = true;

/*
    4. A variável student abaixo é que tipo de dado?

    4.1 Atribua a ela as mesmas propiedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
*/

// se não souber:
console.log (typeof student)

// let student = {};  ----> Object
let student = {
    name = "George",
    age = 50,
    weight = 67.3,
    insSubscribed = true
};

// mostrando no console

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela
    nenhum valor, ou seja, somente o Array vazio
*/
let students = [];

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto
    student da questão 4. (não copiar e colar o objeto, mas usar o objeto
    criado e inserir ele no Array)
*/

students = [
    student // posição 0
]

console.log(students)

/*
        7. Coloque no console o valor da posição zero do Array acima.
*/
console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students.
*/

const robert = {
    name = "Robert",
    age = 67,
    weight = 73,
    insSubscribed = true
}

// pode-se fazer assim também (reatribuir o students)
students = [
    student,
    robert
]

console.log(students)

// ou assim (pegando a posição 1 e colocar diretamente)
students[1] = robert
console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo
    e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1

    - Irá imprimir no console "undefined", pois como o JS trabalha de maneira vertical
    então a variável não teve o valor 1 atribuido à ela.
    - Irá sofrer o Hoisting.
    ---> representação prática do que foi explicado
        -ficará assim por baixo dos panos
            var a
            console.log(a)
            a = 1
*/

console.log(a)
var a = 1
