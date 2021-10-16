const board = document.querySelector('#board')
const SQ_NUMBER = 513;
const colors = ['green', 'red', 'purple', 'yellow']

for (let i = 0; i < SQ_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    elem.style.backgroundColor = 'rgb(9, 24, 66)'
    elem.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}