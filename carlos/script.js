const gif = document.querySelector(".otario")


function loop (){
    setInterval(() => {

    setTimeout(() => {
    gif.style.display = "flex"
    }, 1000);

    }, 13000);
}
loop()


function detectar (){
    gif.remove()
}

gif.addEventListener("click", detectar)