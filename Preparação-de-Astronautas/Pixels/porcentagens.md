# % Porcentagens %

* Em muitos casos é tratado da mesma maneira que as distâncias <length>
* Sempre será relativo a algum valor

* exemplo¹:

```html
<p>Texto</p>
```

```css
html{
    font-size: 50%;
}
```
- Nesse caso o 50% é relativo ao do que está fixo no browser.
    - Caso o font-size padrão do browser for 20px, o font-size
    definido vai pegar 50% desse valor, ou seja, 10px.

* exemplo²:

```html
<ul>
    <li>ONE</li>
    <li>TWO</li>
    <li>THREE
        <ul>
            <li>THREE A</li>
            <li>THREE B
                <ul>
                    <li>THREE B 2</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
```

```css
li{
    font-size: 50%
}
```

- Nesse caso o 50% é relativo aos li(pais). Ou seja, o font-size
do li da 1° lista, terá 50% tamanho padrão do browser, já no font-size do li da 2° lista, será relativo não ao browser, mas sim ao font-size definido na 1° lista. Ou seja, se temos um font-size padrão do browser de 20px, o tamanho de todos serão estes: 1° lista = 10px, 2° lista = 5px, 3° lista = 2.5px e assim por diante...
