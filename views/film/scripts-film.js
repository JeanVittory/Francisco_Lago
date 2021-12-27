const $closeMenuFilm = document.querySelector(".close-menu-film")
const $smallBarsFilm = document.querySelector(".small-bars-film")
const $mobileMenuFilm = document.querySelector(".mobile-menu-film")

$smallBarsFilm.addEventListener("click", show)
$closeMenuFilm.addEventListener("click", close)


function show(){
    $mobileMenuFilm.style.top = "0"
}

function close(){
    $mobileMenuFilm.style.top = "-200%"
}
