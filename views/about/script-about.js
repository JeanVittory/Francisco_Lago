const $closeMenuAbout = document.querySelector(".close-menu-about")
const $smallBarsAbout = document.querySelector(".small-bars-about")
const $mobileMenuAbout = document.querySelector(".mobile-menu-about")

$smallBarsAbout.addEventListener("click", show)
$closeMenuAbout.addEventListener("click", close)


function show(){
    $mobileMenuAbout.style.left = "0"
}

function close(){
    $mobileMenuAbout.style.left = "-200%"
}
