
document.querySelector(".btn").addEventListener("click", btnPress);

function btnPress(){
    document.querySelector(".btn__cir").classList.toggle("btn__cir-animation")

    document.querySelectorAll(".card__side--front").forEach(x => {
        x.classList.toggle("animation-front")
    });
    

    document.querySelectorAll(".card__side--back").forEach(x => {
        x.classList.toggle("animation-back")
    });
}