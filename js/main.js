const screen = document.querySelector(".screen");
const bottons = document.querySelectorAll(".btn");

bottons.forEach(boton => {
    boton.addEventListener('click', () => {
        // console.log(boton.textContent);
        const pushingBotton = boton.textContent;

        //botton ac
        if(boton.id === "ac") {
            screen.textContent = "0";
            return;
        }

        //botton delete 
        if(boton.id === "clean") {
            if (screen.textContent.length === 1 || screen.textContent === "Error") {
                screen.textContent = "0";
            } else {
              screen.textContent = screen.textContent.slice(0, -1);
              
            }
            return;  
        }

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
            
            return;
        }

        //limit numbers 
        if (screen.textContent.length > 14) {
            screen.textContent = "limit reached";
            return;
        }

        if(screen.textContent === "0" || screen.textContent === "Error" || screen.textContent === "limit reached") {
            screen.textContent = pushingBotton;
        } else {
            screen.textContent += pushingBotton;
        }
        
    })
})