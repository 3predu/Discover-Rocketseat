# A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores:

1. Origem do estilo
2. Especificidade 
3. Importância

### Origem do estilo

inline > tag style > tag link

``` html
<!--tag style  2° important -->
<style>
    h1{
    color: gray;
    }
</style>
<!--inline 1° important -->
<h1 style="color: green">Título</h1>
<p>parágrafo</p>
```
```css
/*tag link 3° important */
h1{
    color: red;
}
h1{
    color: blue;
}
```

### Especificidade 

É um cálculo matemático, onde cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

--- Valores ---

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

```css
#my-tittle /* ID SELECTOR POSSUI VALOR 100 (MAIS FORTE DOS 3) */{
    color: gray;
}
.title /* ClASS TYPE POSSUI VALOR 10 */{
    color: red;
}
h1 /* ELEMENT TYPE POUSSUI VALOR 1 */{
    color: blue;
}
*{ /* SELETOR UNIVERSAL POSSUI VALOR 0 */
    color: green;
}
```

### A regra !important

* Evitar o uso
* não é considerado uma boa prática
* quebra natural do fluxo da cascata

