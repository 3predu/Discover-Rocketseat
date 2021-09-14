# Escola 0101

- Informações dos alunos:

matricula |     nome    |      cpf     |    responsavel
1201      |    aaaaa    |     11111    |      dddddd
2302      |    bbbbb    |     22222    |      eeeeee
3403      |    ccccc    |     33333    |      ffffff

- Informações Professores

id     |     nome    |      cpf     |     materia
1      |    ggggg    |     44444    |      abcd
2      |    hhhhh    |     55555    |      fghij
3      |    iiiii    |     66666    |      mnopq

- Aulas (relação professor x aluno)

id-Professor   -       Alunos
    1          -        1201
    2          -        2302
    1          -        3403
    3          -        1201
    2          -        2302
    3          -        3403

# Aluno

matrícula: NUMBER PRIMARY KEY
nome: TEXT
cpf: NUMBER UNIQUE
responsavel: TEXT

# Professor
id: NUMBER PRIMARY KEY
nome: TEXT
cpf: NUMBER UNIQUE
materia: TEXT

# Aulas
id-professor: NUMBER FOREING KEY
id-aluno/matricula: NUMBER FOREING KEY 