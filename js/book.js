const book__button = document.querySelector(".book__position");
const book__circle = document.querySelector(".circle");
const book__path = document.querySelector(".path")
const text = document.querySelector(".introduccion__button--book");

book__button.addEventListener("click", () =>{
    const existe = document.querySelector(".circle__activo")
    if(existe){
        book__circle.classList.remove("circle__activo");
        book__path.classList.remove("path__activo");
        text.classList.remove("text__activo");
    }
    else{
        book__circle.classList.add("circle__activo");
        book__path.classList.add("path__activo");
        text.classList.add("text__activo");
    }
})