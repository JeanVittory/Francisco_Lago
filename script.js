const $mediumLetterContainer = document.querySelector(".medium-letter-container")
const $mediumLetterFront = document.querySelector(".medium-letter-front")
const $closeMenu = document.querySelector(".close-menu")
const $mediumNavBack = document.querySelector(".medium-nav-back")
const $smallBars = document.querySelector(".small-bars")

$mediumLetterFront.addEventListener("click", show);
$smallBars.addEventListener("click", show)
$closeMenu.addEventListener("click", close)


function show(){
    $mediumNavBack.style.top = "0"
}

function close(){
    $mediumNavBack.style.top = "-200vh"
}

