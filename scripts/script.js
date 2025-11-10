const heart = document.getElementById("heart");
const tomato = document.getElementById("tomato");
const star = document.getElementById("star")

heart.addEventListener("click", () => {
    console.log("heart")
    var element = document.getElementById("heart-love");
    element.classList.add("love");
})

tomato.addEventListener("click", () => {
    console.log("tomato")
    var element = document.getElementById("tomato-throw");
    element.classList.add("throw");
})

star.addEventListener("click", () => {
    console.log("star")
    var element = document.getElementById("star-sparkle");
    element.classList.add("sparkle");
})