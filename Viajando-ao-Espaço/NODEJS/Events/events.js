// const {EventEmitter} = require('events')
// const ev = new EventEmitter()

// ev.on('saySomething', (message) => {
//     console.log('Ouvi você,', message)
// })

// ev.emit('saySomething', "Pedro")

// const {EventEmitter} = require('events')
// const ev = new EventEmitter()

// ev.once('saySomething', (message) => {
//     console.log('Ouvi você,', message)
// })

// ev.emit('saySomething', "Pedro")
// ev.emit('saySomething', "Pedro")
// ev.emit('saySomething', "Pedro")
// ev.emit('saySomething', "Pedro")

const {inherits} = require('util')
const {EventEmitter} = require('events')

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender!?')
chapolin.emit('help')