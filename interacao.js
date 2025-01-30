const tagh2 = document.querySelector("h2")
const button_dark = document.querySelector('button')
const corpo = document.body
const button_inform = document.querySelector(".btn-informacao")
const inform = document.querySelector(".informacao")

// tagh2.textContent = ("Sobre min:");

// document.querySelectorAll("h2")[0].textContent = ("Sobre mim")

// textContent - conteudo de texto,
// innerHTML - tag dentro de tag
// innerText - ?


// tagh2.style.backgroundColor = "black";
// tagh2.style.width = "125px";
// tagh2.style.padding = "5px";

function light_dark() {
    if (corpo.classList.contains("light") ) {
        corpo.classList.toggle("light");
        button_dark.textContent = 'light';

    } else {
        corpo.classList.toggle("light");
        button_dark.textContent = 'dark';

    }
};
button_dark.addEventListener('click', light_dark);

button_inform.addEventListener('click', function () {
    if (inform.classList.contains("visivel") ) {
        inform.classList.toggle("visivel");
        button_inform.textContent = 'Exibir informações';
    }
    else {
        inform.classList.toggle("visivel");
        button_inform.textContent = 'Ocultar informações';
    }
})
console.log(inform.classList)