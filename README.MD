# 🔢 CALCULADORA / CALCULATOR 
[![https://i.imgur.com/COtbJ9K.gif](https://i.imgur.com/COtbJ9K.gif "https://i.imgur.com/COtbJ9K.gif")](https://i.imgur.com/COtbJ9K.gif "https://i.imgur.com/COtbJ9K.gif")

### 📄 Introducción
Calculadora desarrollada con las tecnologias HTML, CSS y JAVASCRIPT VAINILLA.
En este proyecto se ponen en practica los siguientes conceptos:
- [EventTarget: addEventListener() method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener "EventTarget: addEventListener() method")
- [Array.prototype.forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "Array.prototype.forEach()")
- [if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else "if...else")
- [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval "eval()")

Como podemos observar a continuación, utilizamos la función [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval "eval()") junto al boton de igual. Esto es debido a que al apretar este valor se evaluan los parametros que se encuentran escritos en la pantalla de la calculadora y se procede a realizar el metodo requerido dependiendo de los párametros otorgados por el usuario.
#### JavaScript
```
        //botton equals
        if (boton.id === "equals") {
            try {
               screen.textContent = eval(screen.textContent);
               if (screen.textContent.length > 14) {
                screen.textContent = "limit reached";
                return;
            } 
            } catch (error) {
                screen.textContent = "Error";
            }
```

### 📄 Content
Calculator developed with HTML, CSS and JAVASCRIPT VAINILLA technologies.
In this project the following concepts are put into practice:
- [EventTarget: addEventListener() method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener "EventTarget: addEventListener() method")
- [Array.prototype.forEach()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "Array.prototype.forEach()")
- [if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else "if...else")
- [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval "eval()")

#### JavaScript
As we can see below, we use the function  [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval "eval()") next to the equals button. This is because pressing this value evaluates the parameters that are written on the calculator screen and proceeds to perform the required method depending on the parameters given by the user.
```
        //botton equals
        if (boton.id === "equals") {
            try {
               screen.textContent = eval(screen.textContent);
               if (screen.textContent.length > 14) {
                screen.textContent = "limit reached";
                return;
            } 
            } catch (error) {
                screen.textContent = "Error";
            }
```

### ✒️  Autor
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.
