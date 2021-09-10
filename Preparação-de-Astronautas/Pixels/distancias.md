# Distâncias absolutas <length>

São fixas e não alteram seu valor.

Unidade     Nome                Equivalência
cm          Centímetros         1cm = 96px / 2.54
in          Inches(polegadas)   1in = 2.54cm = 96px
px          Pixels              1px = 1/96th of 1in

* o mais comum e utilizado é o 'px'
* Não recomendado usar cm

# Distâncias relativas

são relativas a algum outro valor, pode ser o elemento pai, ou root,
ou o tamanho da tela.

* Benefício: Maior adaptação aos diferentes tipos de tela

Unidade     Relativo a
em          Tamanho da fonte do pai.            
rem         Tamanho da fonte do elemento raiz (root/html).
vw          1% da viewport width.
vh          1% daa viewport height.


* 'em' exemplo:

```html
<div>
    <p>Parágrafo</p>
</div>
```

```css
div{
    font-size: 18px;
}
p{
    font-size: 2em
}
```

-> nesse caso temos uma 'div'(pai), que recebe um children 'p'.
    - No css definimos o font-size fixa(absoluta) da div(pai) em 18px
    - Após isso definimos o font-size do children(p) = 2em.
    - 2em = 2 x 18px, ou seja, 2em equivalem a duas vezes o tamanho da
    font-size da div(pai).

* 'rem'

-> No caso do 'rem' pega direto do elemento raiz(root)/(html)
    - se no exemplo acima, colocássemos 2rem seria relativo não à div, mas
    sim relativo ao (root)/(html) supondo q seja 10px o padrão, então seria
    2 x 10px = 20px, ou seja, duas vezes o tamanho padrão do font-size do
    (root)/(html), que são os elementos 'raiz'.

* 'vw' e 'vh'
-> No caso do 'vw' e 'vh' (viewport width and viewport height), possuem unidade
de medida em %.
    - É como se a tela completa fosse dividida em 100 pedacinhos e cada pedaço vai
    representar +1% da tela, então 'vw' representa a largura e 'vh' a altura. 