const pantalla =document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const p = document.querySelector("p");
p.style.animation = "fade-in 2s ease-in-out";


botones.forEach(boton =>{
    boton.addEventListener("click", ()=>{
        console.log(boton.textContent);
        const botonApretado= boton.textContent;
        // Handle events based on the button's ID
        if (boton.id=== "c"){
            pantalla.textContent="0";
            return;
        }
        if (boton.id==="borrar"){
            if(pantalla.textContent.length===1 || pantalla.textContent==="Error!"){
                pantalla.textContent="0";    
            }else{
                pantalla.textContent=pantalla.textContent.slice(0,-1);
            }
            return;
        }

        if (boton.id==="igual"){
            try{
                pantalla.textContent= eval(pantalla.textContent);
            }
            catch{
                pantalla.textContent="Error!";
            }
            return;
        }


         // Handle input of numbers and operators
        if (pantalla.textContent==="0" || pantalla.textContent==="Error!"){
            pantalla.textContent=botonApretado;
        } else{
            pantalla.textContent+=botonApretado;
        }
    })
})