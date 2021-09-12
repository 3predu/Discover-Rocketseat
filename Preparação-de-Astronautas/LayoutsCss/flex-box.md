# Layouts e evolução

Layout tem a ver com a maneira que os elementos estão distribuidos na tela

## Normal flow

- Ou Flow Layout é a maneira que os elementos `block` e `inlune` ficam na página

```html
<p>Texto block com <strong>inline</strong> dentro</p>
```

## Tables

- É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para montar uma tabela

```html
<table>
    <tr>
        <td>item 1</td>
        <td>item 2</td>
    </tr>
    <tr>
        <td>item 3</td>
        <td>item 4</td>
    </tr>
    <tr>
        <td>item 5</td>
        <td>item 6 + outro item</td>
    </tr>
</table>
```

## Tabless

Uso das propriedades `float`, `celar` para que os elementos possam mudar de posição na tela.

```html
<div style="float: left">
    esquerda
</div>

<div style="clear:both">
    direita
</div>

<div style="clear:both">
    noraml
</div>
```

## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:

- Alinhamento
- Ordenação
- Tamanhos felxíveis

```html
<div class="flex-box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
</div>
```

```css
.flex-box{
    display: flex;
    justify-content: space-around;
}
```

# Terminologia

- Flex Container
    - Flex item
- Nesting
- Axis
    - main
        - start, end
    - cross
        - start, end
- Flex sizing
    - flexível
    - altera o width/height dos itens para preenchimento dos espaços do flex container

# Propriedades

* Direção dos itens
* Multi Linhas
* Alinhamento
    * Principal
    * Cruzado
* Espaços entre os itens

# Direção dos itens
- Flex ´é uma dimensão (horizontal ou vertical)
- podemos mudar a direção com `flex-direction`
- valores: (row | row-reverse | column | column-reverse)

# flax-wrap (multi linhas)
- Podemos usar multi linhas
- Cada nova linha, um novo flex container

# flex-flow

- shorthand
- flex-direction | flex-wrap

# justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

# Valores 
- flex-start
    - Padrão
- flex-end
    - Elementos vão para o final da linha
- center
    - agrupados no meio
- space-around
    - Espaço entre eles ( distribuidos )
- space-between
    - Espaço entre eles ( entre eles tem um espaço maior)
- space-evenly
    - Espaço entre eles ( Por igual )


# align-items

- Alinhamento dos elementos no eixo cruzado

## valores

- stretch (esticar)
    - padrão
- flex-start
    - Deixar os elementos no ínicio do eixo cruzado
- flex-end
    - Deixar os elementos ao final do eixo cruzado
- center
    - Centralizar os elementos no eixo cruzado

# gap

- Espaços entre os elementos

## valores

- Unidades de medidas
- fixas: px, pt
- flexíveis: %, em, rem

# Propiedades para os itens

- flex-basis
- flex-grow
    - crescimento do item dentro do container em realão aos espaços vazios.
- flex-shrink
- flex
- order

# flex-shrink

- O encolher o item dentro do container

# flex

- shorthand
- flex-grow flex-shrink flex-basis
- podem ter 1, 2 ou 3 valores

