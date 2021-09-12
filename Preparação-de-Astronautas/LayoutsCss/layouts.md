# Page Layouts

- Tables
- Floats e clear
- Frameworks e Grid Systems
- Flexbox
- Grid

# Posicionamentos

- Controlar onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- Value: static | relative | absolute | fixed

* Relative

- top, right, bottom, left, z-index

- Mantém o fluxo normal para outros elementos
- Só altera o que está sendo alterado

* Absolute

- Na absolute quando é alterado o elemento, os outros abaixo entram em um fluxo normal, enquanto o que foi alterado entra em um outro fluxo/plano.

* Fixed

- No Fixed, ele fixa um elemento na página

* Element Stacking

- Os elementos ficam empilhados

- z-index

# Flexbox

* Nos permite posicionar os elementos dentro da caixa.
* Controle em uma dimensão (horizontal ou vertical)
* Alinhamento, direcionamento, ordernar e tamanhos

```css
div.parent{
    display: flex
}
```

# flex-direction

* Qual a direção do flex: horizontal ou vertical
* row | column

- alinhamento das caixas, dentro das caixas pai

* justify-content
    - space-between: espaço entre os elementos sempre
    - center: junta os elementos ao centro sempre
* align-items
    - center: Alinhar os itens no meio

# Grid

* Posicionamento dos elementos dentro da caixa
* Posicionamento horizontal e vertical ao mesmo tempo
* Pode ser flexível ou fixo
* Cria espaços para os elementos filhos habitarem

- Cria colunas como se fossem numa tabela

- grid-tamplate-rows: 1° linha 2° linha 3° linha , ...
- grid-tamplate-columns: 1° coluna 2° coluna 3° coluna , ...

```css
body{
    margin: 0;
    height: 100vh;

    display: grid;

    grid-tamplate-areas:
        "header header"
        "main main"
        "footer footer"
    ;

    grid-tamplate-rows: 30px 1fr 30px;
    grid-tamplate-columns:1fr 80px;
}
header{
    grid-area: header;
    background-color: green;
}

main{
    grid-area: main;
    background-color: red;
}

aside{
    grid-area: aside;
    background-color: blue;
}

footer{
    grid-area: footer;
    background-color: yellow;
}
```

# Usando o display felx e display grid juntos

- adicionando 2 divs dentro do header

```html
<body>
    <header>
        <div>Logo</div>
        <div>Menu</div>
    </header>
    <main>Conteúdo</main>
    <aside>Infos adicionais</aside>
    <footer>Rodapé</footer>
</body>
```

```css
body{
    margin: 0;
    height: 100vh;

    display: grid;

    grid-tamplate-areas:
        "header header"
        "main main"
        "footer footer"
    ;

    grid-tamplate-rows: 30px 1fr 30px;
    grid-tamplate-columns:1fr 80px;
}
header{
    grid-area: header;
    background-color: green;
    display: flex;
    justify-content: space-betwenn;
    align-items: center;
    padding: 0 8px; 
}

main{
    grid-area: main;
    background-color: red;
}

aside{
    grid-area: aside;
    background-color: blue;
}

footer{
    grid-area: footer;
    background-color: yellow;
}
```



