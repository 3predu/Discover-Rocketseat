// eventos

// addEventlistener(typeEvent/Function, nomefunction) 

const h1 = document.querySelector('h1')

h1.addEventListener('click', 'print')

function print(){
    console.log('print')
}