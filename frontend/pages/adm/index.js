function carregarPainel() {
    document.querySelector(".painel-icon").src = "../../../docs/imgs/icon-painel-white.png"
    document.querySelector(".campanha-icon").src = "../../../docs/imgs/icon-doacao.png"
    document.querySelector(".organizador-icon").src = "../../../docs/imgs/icon-organizador.png"
    document.querySelector(".main-campanhas").classList.add("modelo")
    document.querySelector(".main-organizadores").classList.add("modelo")

    document.querySelector(".main-painel").classList.remove("modelo")

    document.querySelector(".option1").classList.add("selected-option")
    document.querySelector(".option2").classList.remove("selected-option")
    document.querySelector(".option3").classList.remove("selected-option")
}

function carregarTelaCampanhas() {
    document.querySelector(".painel-icon").src = "../../../docs/imgs/icon-painel.png"
    document.querySelector(".organizador-icon").src = "../../../docs/imgs/icon-organizador.png"
    document.querySelector(".campanha-icon").src = "../../../docs/imgs/icon-doacao-white.png"
    document.querySelector(".main-organizadores").classList.add("modelo")
    document.querySelector(".main-painel").classList.add("modelo")

    document.querySelector(".main-campanhas").classList.remove("modelo")

    document.querySelector(".option1").classList.remove("selected-option")
    document.querySelector(".option2").classList.add("selected-option")
    document.querySelector(".option3").classList.remove("selected-option")

}

function carregarOrganizador() {
    document.querySelector(".painel-icon").src = "../../../docs/imgs/icon-painel.png"
    document.querySelector(".campanha-icon").src = "../../../docs/imgs/icon-doacao.png"
    document.querySelector(".organizador-icon").src = "../../../docs/imgs/icon-organizador-white.png"
    document.querySelector(".main-campanhas").classList.add("modelo")
    document.querySelector(".main-painel").classList.add("modelo")

    document.querySelector(".main-organizadores").classList.remove("modelo")

    document.querySelector(".option1").classList.remove("selected-option")
    document.querySelector(".option2").classList.remove("selected-option")
    document.querySelector(".option3").classList.add("selected-option")

}

var itemCard = document.querySelector(".card")

function carregarCampanhas() {
    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(campanha => {

                let novoItem = itemCard.cloneNode(true)

                novoItem.classList.remove("occult")

                idCampanha = novoItem.querySelector("#id-campanha")
                img = novoItem.querySelector(".img-campanha")
                nomeCampanha = novoItem.querySelector(".nome-campanha")
                nomeOrganizador = novoItem.querySelector(".nome-organizador")
                descricao = novoItem.querySelector(".descricao-campanha")

                idCampanha.setAttribute("id", campanha.id);
                idCampanha.classList.add("occult")
                img.src = `../../../back/${campanha.imagens[1].caminho_imagem}`
                nomeCampanha.innerHTML = campanha.titulo
                nomeOrganizador.innerHTML = campanha.organizador.nome
                descricao.innerHTML = campanha.descricao

                document.querySelector(".cards").appendChild(novoItem);
            })
        })
}