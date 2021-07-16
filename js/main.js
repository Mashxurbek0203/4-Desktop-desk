const wrapper = document.querySelector('#board');
const SQUARES_NUMBER = 550;
const colors = ['#50CB93', '#4ca3dd', '#FFA900', '#D62AD0', '#F08FC0', '#54436B', '#96BAFF', '#2F5D62']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () =>
        removeColor(square)
    )
    wrapper.append(square)
    console.log(square);
}



function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    let randomNumber = Math.floor(Math.random() * colors.length)
    return colors[randomNumber]
}