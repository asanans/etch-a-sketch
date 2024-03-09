const containerEl = document.querySelector(".container")

let numberSquaresPerSide = 16
const colors = ["gold", "salmon", "yellowgreen", "skyblue"]

createSquare()

const newSquareBtn = document.querySelector(".new-square")
newSquareBtn.addEventListener("click", selectSquarePerSide)

function createSquare() {
    containerEl.innerHTML = ""

    for (let i = 0; i < numberSquaresPerSide; i++) {
        const rowEl = document.createElement("div")
        rowEl.classList.add("row")
    
        for (let i = 0; i < numberSquaresPerSide; i++) {
            const squareEl = document.createElement("div")
            squareEl.classList.add("square")
            rowEl.appendChild(squareEl)
        }
    
         containerEl.appendChild(rowEl)
    }

    const allSquares = document.querySelectorAll(".square")

    for (square of allSquares) {
        square.addEventListener("mouseenter", changeColor)
    }

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * 4)]
}

function changeColor() {
    // this.classList.add("hover-effect")
    this.style.backgroundColor = getRandomColor()
    this.removeEventListener("mouseenter", changeColor)
}

function selectSquarePerSide() {
    let inputSquaresPerSide = prompt("Please enter number of squares per side (max 100):")
    numberSquaresPerSide = parseInt(inputSquaresPerSide)

    if (!numberSquaresPerSide || numberSquaresPerSide > 100) {
        alert("Invalid input. Please pick a number between 1-100!")
        return
    }
    
    createSquare()
}