# Shorthand

---> colocar diversas propiedades do css resumidas e legíveis

* junção de propiedades
* resumido
* legível

```css
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font propierties */
    font-style: italic;
    font-wight: bold;
    font-size: .8em;
    line-height: 1.2;
    font family: Arial, sans-serif;

    /* font shrthand */
    font: italic bold .8em/1.2 Arial, sans-serif;
}
```

### Detalhes

* não irá considerar propiedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmente, a ordem descrita não importa, mas, se houver muitas propiedades com valores semelhantes, poderemos encontrar problemas.

**https://developer.mozila.org/en-US/docs/Web/CSS/Shorthand_properties**