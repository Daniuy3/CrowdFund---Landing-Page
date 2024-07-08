const radios = document.querySelectorAll(".radio");
const modal__buttons = document.querySelectorAll(".modal__button");

const lastModal = document.querySelector(".exito");
const exit__button = document.querySelector(".exit__button");

radios.forEach(radio =>{
    radio.addEventListener("click", ()=>{
        const existe = document.querySelector(".card--modal--active"); /* Revisa si ya existe un elemento seleccionado */
        
        /* Selecciona al card */
        const card_padre = radio.parentElement.parentElement;
        /* Selecciona el label correspondiete al radio */
        const label = radio.nextElementSibling;
        const id = parseInt(radio.value);
        
        if(existe){
            /* Selecciona el label activo y elimina la clase activa del label y del card */
            const labelPrevio = document.querySelector
            (".label--activo");
            

            existe.classList.remove("card--modal--active");
            labelPrevio.classList.remove("label--activo");
            

            /* En caso de se haya dado click al mismo se le da el estado activo de nuevo */
            label.classList.add("label--activo");
            card_padre.classList.add("card--modal--active");
            

            /* Revisamos si es un id valido para hacer el dropdown */
            if(id !== 1){
                const pledge = document.querySelector(`#modal${id}`)

                const pledgePrevio = document.querySelector(".modal__pledge--active")

                if(pledgePrevio){
                    pledgePrevio.classList.remove("modal__pledge--active")
                }
                pledge.classList.add("modal__pledge--active")
            }
            else{
                const pledgePrevio = document.querySelector(".modal__pledge--active")

                if(pledgePrevio){
                    pledgePrevio.classList.remove("modal__pledge--active")
                }
            }

        }else{
            label.classList.add("label--activo");
            card_padre.classList.add("card--modal--active");
            
            if(id !== 1){
                const pledge = document.querySelector(`#modal${id}`)
                pledge.classList.add("modal__pledge--active")
            }
        }
    })
})

modal__buttons.forEach(button =>{
    const min1 = 25;
    const min2 = 75;
    button.addEventListener("click", () =>{
        /* Validamos la cantidad del input */
        const cardPadre = button.parentElement.parentElement.parentElement;

        if(button.id == "modal__button1"){
            const pledge__input = document.querySelector("#pledge__input1").value

            if(pledge__input < min1 || pledge__input == "" ){
                mostrarAlerta(cardPadre);
                return
            }
            mostrarLastModal();
        }
        else{
            const pledge__input = document.querySelector("#pledge__input2").value

            if(pledge__input < min2 || pledge__input == "" ){
                mostrarAlerta(cardPadre);
                return
            }
            mostrarLastModal();
        }
    })
})

function mostrarAlerta(Card) {
    const alertaDiv = document.createElement("DIV");
    alertaDiv.classList.add("div--alerta")
    
    const mensaje = document.createElement("P")
    mensaje.textContent = "Ingresa una cantidad correcta!"
    mensaje.classList.add("texto--alerta")

    alertaDiv.appendChild(mensaje);
    Card.appendChild(alertaDiv);

    setTimeout(() => {
        alertaDiv.remove();
    }, 1000);
}
function mostrarLastModal() {
    lastModal.classList.add("exito--active")

    const modal = document.querySelector(".modal");
    modal.classList.remove("modal--active");

    exit__button.addEventListener("click", (e) =>{
        e.preventDefault();
        lastModal.classList.remove("exito--active")
    })
}
