# Banco de dados
- Repositório sistemico de informações
    - forma de guardar dados de forma organizada, e acessá-los de forma rápida

- Serviços
    - SQLite
    - MariaDB
    - MySQL
    - PostgreSQL
    - Oracle
    - FireBase
    - mongoDB
    - redis

## Como são guardadas as informações?
- As informações são organizadas no banco de dados e tabelas
    - Dentro do banco de dados tempos os campos, que são os títulos das informações que vamos guardar nas tabelas
    - E nessa tabela, dentro dos campos temos às informações
- Nos bancos de dados, podemos relacionar uma tabela com outra, ou seja, relacionar um campo específico da tabela com uma informação.

# Tipos de campos

- TEXT
    - Tipo texto
        - @, letras, _ (underline)
- NUMBERS
    - Tipo número
- DATETIME
    - Data + hora (ex: 01-04-2020-09-30-22 )
- PRIMARY KEY
    - Informação única
- FOREIGN KEY (chave estrangiera)
    - Referencia a PRIMARY KEY
    - Pode se repitir na tabela, pois está referenciando a PRIMATY KEY
- UNIQUE
    - Comando p/ dizer que o nome é único

# Nome de campos e tables
- 1° Deve começar por uma letra do alfabeto
- 2° Os caracteres a seguir não são permitidos: 
    - () + - * " ; = & | # >< ^ ' {} %
- 3° Não pode conter espaços
- 4° Não pode conter acentuação
