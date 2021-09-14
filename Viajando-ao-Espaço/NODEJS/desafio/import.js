const valueGet = require('./getflags')

console.log(`Oi ${valueGet('--name')}. ${valueGet('--greeting')}`)