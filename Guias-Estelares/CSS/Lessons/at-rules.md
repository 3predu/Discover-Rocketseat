# At-rules

* Está relacionado ao comportamento do CSS
* começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

- @import /* inlcuir um CSS externo */

- @media /* regras condicionais para dispositivos */

- @font-face /* fontes externas */

- @keyframes /* Animation */

```css
@import url("https://local.com/style.css");

@media (min-width: 500px){
    /*rules here*/
}

@font-face{
    /* rules here */
}

@keyframes nameofanimation {
    /*rules here*/
}
```