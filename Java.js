var direita = window.document.getElementById ("direita")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samanta = window.document.getElementById("samanta")
var esquerda = window.document.getElementById ("esquerda")

function ScrollRigth() {
bruna.style = "display:none"
samanta.style = "display:flex"
direita.style = "display:none"
esquerda.style = "display:flex; margin-top:55px ; margin-left:60px"

}

function ScrollLeft() {
bruna.style = "display:flex"
samanta.style = "display:none"
direita.style = "display:flex"
esquerda.style = "display:none"
}
