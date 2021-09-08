numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;

function somar(item, indice, array){
    total += item;
    array[indice] = total;
}

numeros.forEach(somar);
console.log(numeros);