/*
    Manipulando elementos
    Atributos

    setAttribute(id/class, nome-atributo) - Adicionar atributo
    getAttribute() - Pegando atributos que existem
    removeAttribute() - removendo um atributo 

*/

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerId = document.querySelector('#header')

console.log(headerId.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')

