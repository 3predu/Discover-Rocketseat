# Box-sizing

Como será calculado o tamanho total da caixa?

- content-box | border-box

```css
div{
    box-sizing: border-box;
}
```

* exemplo²:
```css
div{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 10%;
    padding: 0 20px;
}
```

* Neste exemplo², temos um padding (conteúdo) de 20px nas laterias
    - os 100px do `width` serão somados com os 20px, ou seja, serão
    140px de largura ao todo
    - Para não acontecer isso se quisermos, podemos adicionar o:

```css
div{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 10%;
    padding: 0 20px;
    box-sizing: border-box;
}
```

* O `box-sizing: border-box;` basicamente não adiciona os 40px ao todo na largura
    - Ele irá fazer um cáculo apartir da borda definida, para não alterar o tamanho
    da borda em si e literalmente alterar o conteúdo dentro da box.