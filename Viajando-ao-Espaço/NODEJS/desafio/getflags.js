function valueGet (flag){
    const position = process.argv.indexOf(flag) + 1
    return process.argv[position]
}
module.exports = valueGet;