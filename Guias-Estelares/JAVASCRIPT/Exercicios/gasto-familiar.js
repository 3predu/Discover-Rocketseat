/*
    Sistema de gastos familiar

    Crie um objeto que possuirá 2 propiedades, ambas do tipo
    arrya:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a família está com
    saldo positivo ou negativo, seguido do valor do saldo
*/

/*

let systeFamilyValues = {
    incomes: [4000, 340.23, 909.65, 2300],
    expenses: [500, 150.34, 247.76, 75.23, 100, 350.12, 600]
}

*/

let incomes = [4000, 340.23, 909.65, 2300, 4340.33];
let expenses = [5000, 150.34, 247.76, 75.23, 100, 350.12, 1300, 3500];

const totalIcomes = incomes.reduce((totalIcomes, currentElement) => totalIcomes + currentElement)
const totalExpenses = expenses.reduce((totalExpenses, currentElement) => totalExpenses + currentElement)

const totalSumValues = totalIcomes - totalExpenses

if(totalSumValues >= 0){
    console.log('Seu saldo é: ' + '$ ' + totalSumValues.toFixed(2))
    console.log('Parabéns! está positivo.')
} else {
    console.log('Seu saldo é: ' + '$ ' + totalSumValues.toFixed(2))
    console.log('Cuidado! Seu saldo está negativo.')
}


