/*
    Celsius e Fahrenheit

    Crie uma função que receba uma STRING em celsius
    ou Fahrenheit e faça a transformação de uma unidade
    para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// transformarGraus('50F')
function transformarGraus(graus){
    const celsiuExiste = graus.toUpperCase().includes('C');
    const fahrenheitExiste = graus.toUpperCase().includes('F');

    // fluxo de error
    if(!celsiuExiste && !fahrenheitExiste){
        throw new Error('[ERROR]: Grau não identificado')
    }

    // fluxo ideal, F -> C
    let atualizarGraus = Number(graus.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let novoSinalGrau = 'C'

    // fluxo alternativo, C -> F
    if(celsiuExiste){
        atualizarGraus = Number(graus.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        novoSinalGrau = 'F'
    }

    return formula(atualizarGraus) + novoSinalGrau
}

try {
    console.log(transformarGraus('50C'))
    console.log(transformarGraus('50F'))
} catch (error) {
    console.log(error.message)
}