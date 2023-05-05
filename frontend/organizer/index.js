function carregarMeuPerfil() {
    document.querySelector(".perfil-icon").src = "../../docs/imgs/icon-organizador-white.png"
    document.querySelector(".campanha-icon").src = "../../docs/imgs/icon-doacao.png"
    document.querySelector(".main-campanhas").classList.add("ocultar")

    document.querySelector(".main-perfil").classList.remove("ocultar")

    document.querySelector(".option1").classList.remove("selected-option")
    document.querySelector(".option2").classList.add("selected-option")

    // fetch("http://localhost:3300/campanha")
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         data.forEach(campanha => {

    //             let novoItem = itemCardNew.cloneNode(true)

    //             novoItem.classList.remove("modelo")

    //             let img = novoItem.querySelector(".img-campanha")
    //             let nomeCampanha = novoItem.querySelector(".nome-campanha")
    //             let nomeOrganizador = novoItem.querySelector(".nome-organizador")
    //             let descricao = novoItem.querySelector(".descricao-campanha")

    //             img.src = `../../back/${campanha.imagens[0].caminho_imagem}`
    //             nomeCampanha.innerHTML = campanha.titulo
    //             nomeOrganizador.innerHTML = campanha.organizador.nome
    //             descricao.innerHTML = campanha.descricao

    //             document.querySelector(".cards-new").appendChild(novoItem);
    //         })
    //     })

}

function editarCampanha() {

}

function carregarCampanhas() {
    document.querySelector(".campanha-icon").src = "../../docs/imgs/icon-doacao-white.png"
    document.querySelector(".perfil-icon").src = "../../docs/imgs/icon-organizador.png"
    document.querySelector(".main-perfil").classList.add("ocultar")

    document.querySelector(".main-campanhas").classList.remove("ocultar")


    document.querySelector(".option1").classList.add("selected-option")
    document.querySelector(".option2").classList.remove("selected-option")
}

function editarPerfil() {
    document.querySelector("#input-nome-organizador").disabled = false
    document.querySelector("#input-cpf-cnpj").disabled = false
    document.querySelector("#input-email").disabled = false
    document.querySelector("#input-celular").disabled = false
    document.querySelector("#input-instagram").disabled = false
    document.querySelector("#input-whatsapp").disabled = false
    document.querySelector("#input-twitter").disabled = false
    document.querySelector("#input-site").disabled = false
    document.querySelector("#input-file").classList.remove("ocultar")
    document.querySelector("#editar-perfil").classList.add("ocultar")
    document.querySelector("#salvar-edicao").classList.remove("ocultar")
}

function salvarEdicao() {
    document.querySelector("#input-nome-organizador").disabled = true
    document.querySelector("#input-cpf-cnpj").disabled = true
    document.querySelector("#input-email").disabled = true
    document.querySelector("#input-celular").disabled = true
    document.querySelector("#input-instagram").disabled = true
    document.querySelector("#input-whatsapp").disabled = true
    document.querySelector("#input-twitter").disabled = true
    document.querySelector("#input-site").disabled = true
    document.querySelector("#input-file").classList.add("ocultar")
    document.querySelector("#editar-perfil").classList.remove("ocultar")
    document.querySelector("#salvar-edicao").classList.add("ocultar")
}