/*
    Buscando e econtrando dados em Array

    Baseado no Array de livros por caterogia abaixo, faça os
    seguintes desafios

        * Contar o número de categorias e o número de livros
        em cada catergoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber
        o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                tittle: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                tittle: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                tittle: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },

    {
        category: "Inteligência Emocional",
        books: [
            {
                tittle: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                tittle: "Ansiedade - Como enfrentar o mal século",
                author: "Augusto Cury",
            },
            {
                tittle: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Augusto Cury",
            },
        ],
    },
]

const totalCategories = booksByCategory.length;

/*
    p/ saber o n° de livros das categorias
    Pegando uma categoria dentro do array(bookByCategory)
*/
console.log(totalCategories);
for(let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.tittle)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}


booksOfAuthor('Augusto Cury')
booksOfAuthor('George S. Clason')