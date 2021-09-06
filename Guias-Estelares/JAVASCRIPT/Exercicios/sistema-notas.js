/*
    # Transformar notas escolares 

    Crie um algoritmo que transforme as notas do sistema
    número para sistema de notas escolares em caracteres
    tipo A B C
    
    * de 90 para cima   - A
    * entre 80 - 89     - B
    * entre 70 - 79     - C
    * entre 60 - 69     - D
    * menor que 60      - F
    
*/


const getGrade = (grade) => {
    let gradeA = grade >= 90 && grade <= 100
    let gradeB = grade >= 80 && grade <= 89
    let gradeC = grade >= 70 && grade <= 79
    let gradeD = grade >= 60 && grade <= 69
    let gradeF = grade <= 60

    if(gradeA){
        console.log('Nota A')
    }else if (gradeB){
        console.log('Nota B')
    }else if (gradeC){
        console.log('Nota C')
    }else if (gradeD){
        console.log('Nota D')
    }else if (gradeF){
        console.log('Nota F')
    }else{
        console.log('[ERROR]')
    }

    console.log(grade)

}

getGrade(100)




