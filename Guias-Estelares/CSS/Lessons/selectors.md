# Selectors

Conecta um elemento HTML com o CSS

## Tipos

* Global Selector `*`
* Element/Type selector `h1, h2, p, div`
* Id Selector `#box, #container`
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class, Pseudo-element, e outros

```html
<div id="container" class="m-40">
    <h1>Título</h1>
</div>
```

```css

*{
    margin: 0;
}

#container{
    width: 200px;
}

.m-40{
    margin: 40px;
}

h1{
    color: green;
    font-size: 60px;
    background: gray;
}
