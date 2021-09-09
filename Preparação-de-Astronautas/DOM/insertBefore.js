/*
    Adicionando elementos
    insertBefore
*/

const div = document.createElement('div')
div.innerText = 'Olá DEVS!'

const body = document.querySelector('body')
const header = document.querySelector('header')
body.insertBefore(div, header.nextElementSibling)