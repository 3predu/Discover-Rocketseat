* SELECT - trazer os campos/dados da tabela
```SQL
SELECT * FROM aluno
SELECT * FROM professor
SELECT * FROM aulas
```
# Especificando campos:

```SQL
SELECT nome, responsavel FROM aluno
SELECT nome, materia, cpf FROM professor
```

* WHERE

# Buscando um dado em específico

```SQL
SELECT * FROM aluno WHERE matricula = 1 (quando for numbers)
SELECT * FROM aluno WHERE nome like "j%" (quando for txt)
SELECT matricula, cpf FROM aluno WHERE nome like "%G%"
```

* '=' (IGUAL)

# Buscando uma matrícula em específico

```SQL
SELECT * FROM aluno WHERE matricula = 3
```

* like

# Buscando um nome em específico

```SQL
    SELECT * FROM aluno WHERE responsavel like "responsaveltal"
```

* '>' (MAIOR QUE)

# Buscando as matriculas maiores que 1

```SQL
SELECT * FROM aluno WHERE matricula > 1
```

* '<' (MENOR QUE)

# Buscando as matriculas menor que 3

```SQL
SELECT * FROM aluno WHERE matricula > 2
```

* '>=' (MAIOR OU IGUAL QUE)

# Buscando as matriculas maior ou igual que 1

```SQL
SELECT * FROM aluno WHERE matricula >= 1
```

* '<=' (MENOR OU IGUAL QUE)

# Buscando as matriculas menor ou igual que 3

```SQL
SELECT * FROM aluno WHERE matricula <= 3
```

* '<>' (NÃO IGUAL QUE)

# Buscando as matriculas não igual que 3

```SQL
SELECT * FROM aluno WHERE matricula <> 2
```

* '!=' (DIFERENTE DE)

# Buscando as matriculas diferente de 3

```SQL
SELECT * FROM aluno WHERE matricula != 3
```

----------------------------------------------------

* OPERADORES MATEMÁTICOS
- +, -, *, /, %
    - Módulo vai ser resto da divisão


----------------------------------------------------

* OPERADORES LÓGICOS:

# END

- ADIÇÃO DE INFO/CONDIÇÕES

```SQL
    SELECT * FROM aluno WHERE nome like 'J%' AND < 2
```

# OR

```SQL
    SELECT * FROM aluno WHERE matricula > 1 or nome like "j%"
```

# BETWEEN e NOT BETWEEN

- Buscar entre intervalo

```SQL
    SELECT * FROM funcionarios WHERE id_funcionario
    BETWEEN 4 AND 7

    SELECT * FROM funcionarios WHERE id_funcionario
    NOT BETWEEN 4 AND 7
```

# IN e NOT IN

- Trazer informações

```SQL
    SELECT * FROM funcionarios WHERE id_departamento
    IN (1, 3, 5)

    SELECT * FROM funcionarios WHERE id_departamento
    IN (1, 3, 5)
```

# IS NULL e IS NOT NULL

- trazer uma informação específica

```SQL
    SELECT * FROM funcionarios
    WHERE id_departamento IS NULL
```

----------------------------------------------------------

# INSERT INTO

- Inserir informações na tabela

```SQL
    INSERT INTO aluno(nome, cpf, responsavel) VALUES ("nome", numberCpf, "nomeResponsável")
```

# UPTADE

- Atualizadar dados

```SQL
   UPDATE aluno SET nome="", responsavel="", cpf=12342344 WHERE matricula = 2
```

# DELETE

- Apagar dados (NÃO APAGA CAMPO)

```SQL
   DELETE FROM aluno WHERE matricula = 3 
```

---------------------------------------------------------------

* UNINDO TABELAS

# JOIN

```SQL
   SELECT * FROM funcionarios
   JOIN departamentos
   ON departamentos.id_dept = funcionarios.id_departamento 
```

# JOIN + WHERE

```SQL
   SELECT * FROM funcionarios
   JOIN departamentos
   ON funcionarios.id_departamento = departamento.id_dept
   WHERE funcionarios.id_departamento = 2
```

# JOIN ESPECIFICANDO CAMPOS

```SQL
    SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao
    FROM funcionarios
    JOIN departamentos
    ON funcionarios.id_departamento = departamento.id_dept
```

# ALIAS (AS)

- SÓ FUNCIONA DENTRO DO SELECT

```SQL
    SELECT func.nome, func.cpf, dpt.descricao
    FROM funcionarios as func
    JOIN departamentos as dpt
    ON func.id_departamento = dpt.id_dept
```

# LEFT OUTER JOIN

```SQL
    SELECT * FROM funcionarios
    LEFT OUTER JOIN departamentos
    ON funcionarios.id_departamento = departamentos.id_dept
```

---------------------------------------------------------------

# COMANDOS AVANÇADOS

* ORDER BY
    - Organizando por algum campo em específico
    ```SQL
    SELECT * FROM professor
    ORDER BY nomedocampo
    ```

* LIMIT
    - Traz um limite de resultados
    ```SQL
    SELECT * FROM professor
    LIMIT 2
    ```

* OFFSET
    - Ignora os primeiros resultados/ elementos/ informações

    ```SQL
    SELECT * FROM professor
    ORDER BY nomedocampo
    LIMIT 4 OFFSET 4
    ```

* COUNT
    - Conta o número de dados dentro do campo
    ```SQL
    SELECT count(cpf) FROM alunos
    ```

* GROUP BY
    - Agrupar dados por campos

    ```SQL
    SELECT id_departamento count (id_departamento)
    FROM funcionarios
    GROUP BY id_departamentos
    ```

* HAVING

    - 

    ```SQL
    SELECT count(id_departamento) FROM funcionarios
    JOIN departamentos
    ON funcionarios.id_departamento = departamento.id_dept
    GROUP BY departamentos.id_dept
    HAVING count (funcionarios.id_departamento) >= 2
    ```


----------------------------------------------------------------

* CREATE TABLE
    - Criando tabela

    ```SQL
        CREATE TABLE alunos (
            matricula INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            cpf INTEGER UNIQUE,
            responsavel TEXT
        )
    ```

* ALTER TABLE
    - Fazendo alterações na tabela

    ```SQL
    ALTER TABLE aluno REANME TO alunos
    ```

* DROP TABLE
    - Apagar uma tabela/ Limpando registros

    ```SQL
    DROP TABLE alunos
    ```

