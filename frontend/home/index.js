var itemCard = document.querySelector(".card")
var itemCardNew = document.querySelector(".card-new")

function carregar() {
    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(campanha => {

                let novoItem = itemCard.cloneNode(true)

                novoItem.classList.remove("hidden")

                idCampanha = novoItem.querySelector("#id-campanha")
                img = novoItem.querySelector(".img-campanha")
                nomeCampanha = novoItem.querySelector(".nome-campanha")
                nomeOrganizador = novoItem.querySelector(".nome-organizador")
                descricao = novoItem.querySelector(".descricao-campanha")

                idCampanha.setAttribute("id", campanha.id);
                idCampanha.classList.add("hidden")
                img.src = `../../back/${campanha.imagens[0].caminho_imagem}`
                nomeCampanha.innerHTML = campanha.titulo
                nomeOrganizador.innerHTML = campanha.organizador.nome
                descricao.innerHTML = campanha.descricao

                document.querySelector(".cards").appendChild(novoItem);
            })
        })
}

function carregarNovas() {
    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(campanha => {

                let novoItem = itemCardNew.cloneNode(true)

                novoItem.classList.remove("modelo")

                let img = novoItem.querySelector(".img-campanha")
                let nomeCampanha = novoItem.querySelector(".nome-campanha")
                let nomeOrganizador = novoItem.querySelector(".nome-organizador")
                let descricao = novoItem.querySelector(".descricao-campanha")

                img.src = `../../back/${campanha.imagens[0].caminho_imagem}`
                nomeCampanha.innerHTML = campanha.titulo
                nomeOrganizador.innerHTML = campanha.organizador.nome
                descricao.innerHTML = campanha.descricao

                document.querySelector(".cards-new").appendChild(novoItem);
            })
        })
}

function abrirCampanha(e) {
    idCampanha = e.querySelector(".id-campanha")
    window.location.href = `http://127.0.0.1:5500/frontend/campaign/index.html?id=${idCampanha.id}`
}