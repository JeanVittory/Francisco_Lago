const $closeMenuAbout = document.querySelector(".close-menu-about")
const $smallBarsAbout = document.querySelector(".small-bars-about")
const $mobileMenuAbout = document.querySelector(".mobile-menu-about")

$smallBarsAbout.addEventListener("click", show)
$closeMenuAbout.addEventListener("click", close)


function show(){
    $mobileMenuAbout.style.top = "0"
}

function close(){
    $mobileMenuAbout.style.top = "-100%"
}
