const modal__closer = document.querySelector(".modal__closer");
const modal = document.querySelector(".modal");
const modal__opener = document.querySelector("#modal__opener");


modal__opener.addEventListener("click", () =>{
    modal.classList.add("modal--active");
})
modal__closer.addEventListener("click", ()=> {
    modal.classList.remove("modal--active");
})

