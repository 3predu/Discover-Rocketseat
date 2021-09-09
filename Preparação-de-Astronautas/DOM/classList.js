/*
    Alterando estilos

    classList

    classList.add() - adiciona uma classe por exemplo
    classList.remove() - remove a classe no exemplo
    classList.toggle() - pesquisa a classe, se ela 
    estiver ele remove, se não estiver ele adiciona
    Funciona como um interruptor
*/

const element = document.querySelector('body')

element.classList.add('active', 'bgcolor')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active')