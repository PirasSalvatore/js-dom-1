
const bodyEl = document.body
const figureEl = document.querySelector(".figure")
const imgEl = document.querySelector("#lamp")
const switchEl = document.getElementById("switch")

/* console.log(bodyEl);
console.log(figureEl);
console.log(imgEl);
console.log(switchEl); */

switchEl.addEventListener("click", function () {
    if (figureEl.classList.contains("spenta")) {
        figureEl.className = "figure accesa"
        imgEl.src = "./asset/img/yellow_lamp.png"
        imgEl.alt = "lamp is on"
        switchEl.innerText = "SPEGNI"
        switchEl.className = "turn_off"
        bodyEl.style.backgroundColor = "white"
    } else if (figureEl.classList.contains("accesa")) {
        figureEl.className = "figure spenta"
        imgEl.src = "./asset/img/white_lamp.png"
        imgEl.alt = "lamp is off"
        switchEl.innerText = "Accendi"
        switchEl.className = "turn_on"
        bodyEl.style.backgroundColor = "black"
    }
})