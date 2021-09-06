/*
    Manipulando Strings e Arrays

    Separa um texto que contêm espaços, em um novo array onde
    cada texto é uma posição do array. Depois disso, transforme
    o array em um texto e onde eram espaços, coloque "_" 
*/

let phrase = "Olá! Sou um texto"
let myArray = phrase.split(" ")
// usando metodo join, juntar o array
let phraseWinthUnderscore = myArray.join("_")
console.log(phraseWinthUnderscore)
// console.log(phraseWinthUnderscore.toLocaleUpperCase())
