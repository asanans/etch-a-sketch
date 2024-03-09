const containerEl = document.querySelector(".container")
console.log(containerEl)

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





