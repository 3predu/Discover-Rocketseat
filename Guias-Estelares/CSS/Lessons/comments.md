# Comentários

* Não irá afetar o seu código
* Ajuda a lembrar blocos de códigos
* Deixar dicas para leitura
* Ajuda outros a entender
* Possivel desabilitar o código

* Comentários Começam com `/*` e terminam com `*/`

``` css

/* Básico */
/* ------------------------------------- */

nav{
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background-color: #111011;
    font-family: 'Sora', sans-serif;
}

li a:hover{
    color: #ff66b3;
    transition: all ease-in-out 200ms;
}

@media screen and (max-width:768px) {
    body{
        overflow-x: hidden;
    }
    .nav-links{
        position: absolute;
         right: 0px;
         height: 92vh;
         top: 8vh;
         background-color: #111011;
         display: flex;
         flex-direction: column;
         align-items: center;
         width: 50%; /*ocupa 50% da tela*/
         transform: translateX(100%);
         transition: transform 0.5s ease-in;

    }
    .nav-links li{
        opacity: 0;
    }
    .hamburger{
        display: block;
    }
}
