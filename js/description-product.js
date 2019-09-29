const $heart = window.document.querySelector(".-heart");
const $buttonSecond = window.document.querySelector(".-last");

$heart.addEventListener("click", handleClick);
$buttonSecond.addEventListener("click", handleClick);

function handleClick() {
    $heart.classList.toggle("-active");
}

function funcaoMudaTexto(){
    document.getElementById("mudatexto").innerHTML = "Carrinho (11)";
}