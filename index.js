function flipCoins() {
    let container = document.getElementById('container')

    container.innerHTML = ''

    for (let i = 1; i < 6; i = i + 1) {
        container.innerHTML += `<p>מטבע ${i}: <span>  ${randomInteger(
            1,
            2
        )} </span> </p>`
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
