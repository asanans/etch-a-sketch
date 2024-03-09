const containerEl = document.querySelector(".container")

for (let i = 0; i < 17; i++) {
    const rowEl = document.createElement("div")
    rowEl.classList.add("row")

for (let i = 0; i < 17; i++) {
    const squareEl = document.createElement("div")
    squareEl.classList.add("square")
    rowEl.appendChild(squareEl)
}

containerEl.appendChild(rowEl)
}

const allSquares = document.querySelectorAll(".square")
console.log(allSquares)

for (square of allSquares) {
    square.addEventListener("mouseenter", changeColor)
}

function changeColor() {
    this.classList.add("hover-effect")
    this.removeEventListener("mouseenter", changeColor)
}