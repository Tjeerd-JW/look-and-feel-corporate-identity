const heart = document.getElementById("heart");
const tomato = document.getElementById("tomato");
const star = document.getElementById("star")
const clock = document.getElementById("countdown");


window.onload = () => {
    if (document.getElementById("countdown")) {
        timer();
    }
}

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

function timer() {
    console.log("coutdown started")
    let seconds = Math.floor(Math.random() * (21600 - 3600) + 3600);
    setInterval(() => {
        seconds--;
        clock.textContent = timeFormat(seconds);
    }, 1000);

    if (seconds <= 0) {
        clock.textContent = "je was op niks aan het wachten"
    }
}


function timeFormat(seconds) {
    // uitrekenen hoeveel uren minuten en seconden er moeten zijn
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60;

    // zorgen dat er een 0 voorkomt zodat 1:3:2 -> 01:03:02 word
    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(secs).padStart(2, "0");

    return `${h}:${m}:${s}`
}