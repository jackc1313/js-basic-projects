const colors = ['#ffffff', '#000000', 'red', 'green', 'rgb(255, 165, 0)'];

const button = document.getElementById('btn');

const color = document.getElementById('color');

function randomizer() {
    return Math.floor(Math.random() * colors.length);
}

button.addEventListener('click', function() {
    const randomNumber = randomizer()
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})