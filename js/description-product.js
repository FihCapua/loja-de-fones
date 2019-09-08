const $heart = window.document.querySelector(".-heart");
const $buttonSecond = window.document.querySelector(".-last");

$heart.addEventListener("click", handleClick);
$buttonSecond.addEventListener("click", handleClick);

function handleClick () {
    console.log("ae");
}

function handleClick () {
    console.log("Apareci");
}

function funcaoAlerta(){
    alert ("Clicou e eu apareci!");
}

function funcaoMudaTexto(){
    document.getElementById("mudatexto").innerHTML = "Carrinho (11)";
}