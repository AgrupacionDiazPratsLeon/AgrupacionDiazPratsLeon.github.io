const header = document.querySelector(".cont-header");
const menu = document.getElementById("menu");
const nav = document.querySelector(".nav-resposive");
const x = document.getElementById("cerrar");


menu.addEventListener('click', () => {
    nav.style.display = "inherit";
    menu.style.display = "none";
    x.style.display = "inherit"

});
x.addEventListener('click', () => {
    nav.style.display = "none";
    menu.style.display = "inherit";
    x.style.display = "none"
});


let leerMas = document.querySelectorAll(".mostrar-text");
let mostrarComentario = document.querySelectorAll(".text-oculto");

leerMas.forEach((elemento, indice) => {
    elemento.addEventListener("click", () => {
        if (mostrarComentario[indice].classList.toggle("mostrar_comentario")) {
            elemento.innerHTML = "Ver Menos";
        } else {
            elemento.innerHTML = "Ver Mas";
        }
    })
});