function carregarPainel() {
    document.querySelector(".painel-icon").src = "../../docs/imgs/icon-painel-white.png"
    document.querySelector(".campanha-icon").src = "../../docs/imgs/icon-doacao.png"
    document.querySelector(".organizador-icon").src = "../../docs/imgs/icon-organizador.png"
    document.querySelector(".main-campanhas").classList.add("modelo")
    document.querySelector(".main-organizadores").classList.add("modelo")

    document.querySelector(".main-painel").classList.remove("modelo")

    document.querySelector(".option1").classList.add("selected-option")
    document.querySelector(".option2").classList.remove("selected-option")
    document.querySelector(".option3").classList.remove("selected-option")
}

function carregarCampanhas() {
    document.querySelector(".painel-icon").src = "../../docs/imgs/icon-painel.png"
    document.querySelector(".organizador-icon").src = "../../docs/imgs/icon-organizador.png"
    document.querySelector(".campanha-icon").src = "../../docs/imgs/icon-doacao-white.png"
    document.querySelector(".main-organizadores").classList.add("modelo")
    document.querySelector(".main-painel").classList.add("modelo")

    document.querySelector(".main-campanhas").classList.remove("modelo")

    document.querySelector(".option1").classList.remove("selected-option")
    document.querySelector(".option2").classList.add("selected-option")
    document.querySelector(".option3").classList.remove("selected-option")

}

function carregarOrganizador() {
    document.querySelector(".painel-icon").src = "../../docs/imgs/icon-painel.png"
    document.querySelector(".campanha-icon").src = "../../docs/imgs/icon-doacao.png"
    document.querySelector(".organizador-icon").src = "../../docs/imgs/icon-organizador-white.png"
    document.querySelector(".main-campanhas").classList.add("modelo")
    document.querySelector(".main-painel").classList.add("modelo")

    document.querySelector(".main-organizadores").classList.remove("modelo")

    document.querySelector(".option1").classList.remove("selected-option")
    document.querySelector(".option2").classList.remove("selected-option")
    document.querySelector(".option3").classList.add("selected-option")

}