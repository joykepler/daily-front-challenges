const eyes = document.querySelector('.meu-itau__imagem')
const saldo = document.querySelector(".saldo__imagem");
const limite = document.querySelector(".limite__imagem");

let eyesActive = 0

eyes.addEventListener('click', () => {
    eyesActive++

    if (eyesActive > 1) {
        eyesActive = 0
    }

    if (eyesActive == 1) {
        eyes.src = './img/open.png'
        saldo.style.display = "block";
        limite.style.display = "block";
    }

    if (eyesActive == 0) {
        eyes.src = './img/closed.png'
        saldo.style.display = "none";
        limite.style.display = "none";
    }
})
