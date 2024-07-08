/* Menu dropdown */

const menu = document.querySelector("#menu");
const desplegable = document.querySelector("#menu_dropdown");

menu.addEventListener("click", () =>{
    mostrarMenu();
});


function mostrarMenu (){
    const existe = document.querySelector(".visible");

    if(existe){
        desplegable.classList.remove("visible");
    }
    else{
        desplegable.classList.add("visible");
    }
}
