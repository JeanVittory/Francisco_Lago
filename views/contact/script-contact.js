const $closeMenuContact = document.querySelector(".close-menu-contact")
const $smallBarsContact = document.querySelector(".small-bars-contact")
const $mobileMenuContact = document.querySelector(".mobile-menu-contact")

$smallBarsContact.addEventListener("click", show)
$closeMenuContact.addEventListener("click", close)


function show(){
    $mobileMenuContact.style.right = "0"
}

function close(){
    $mobileMenuContact.style.right = "-200%"
}
