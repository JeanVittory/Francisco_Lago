const $closeMenuGallery = document.querySelector(".close-menu-gallery")
const $smallBarsGallery = document.querySelector(".small-bars-gallery")
const $mobileMenuGallery = document.querySelector(".mobile-menu-gallery")

$smallBarsGallery.addEventListener("click", show)
$closeMenuGallery.addEventListener("click", close)


function show(){
    $mobileMenuGallery.style.top = "0"
}

function close(){
    $mobileMenuGallery.style.top = "-200%"
}
