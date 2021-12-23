const $closeMenuContact = document.querySelector(".close-menu-contact")
const $smallBarsContact = document.querySelector(".small-bars-contact")
const $mobileMenuContact = document.querySelector(".mobile-menu-contact")

$smallBarsContact.addEventListener("click", show)
$closeMenuContact.addEventListener("click", close)


function show(){
    $mobileMenuContact.style.top = "0"
}

function close(){
    $mobileMenuContact.style.top = "-100%"
}
