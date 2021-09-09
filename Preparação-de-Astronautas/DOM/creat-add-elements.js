/*
    Criando e adicionando elementos

    createElement - cria um elemento
    append - adiciona depois
    prepend - adiciona antes
*/

const div = document.createElement('div')
div.innerHTML = 'Bom dia!'

const body = document.querySelector('body')

body.prepend(div)