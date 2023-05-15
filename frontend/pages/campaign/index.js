const idCampanha = (new URLSearchParams(window.location.search).get('id'))

function carregar() {
    console.log("aaaa")
    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            data.forEach(campanha => {
                if (campanha.id == idCampanha) {
                    let nomeCampanha = document.querySelector("h1")
                    let nomeOrganizador = document.querySelector("h2")
                    let img = document.querySelector(".img-campanha")
                    let meta = document.querySelector(".valor-meta")
                    let arrecadado = document.querySelector(".valor-arrecadado")
                    let nomeOrganizadorCard = document.querySelector(".nome-organizador-card")

                    let resumo = document.querySelector(".breve-resumo")
                    let descricao = document.querySelector(".descricao")

                    nomeCampanha.innerHTML = campanha.titulo
                    nomeOrganizador.innerHTML = campanha.organizador.nome
                    img.src = `../../back/${campanha.imagens[0].caminho_imagem}`
                    meta.innerHTML = `R$${campanha.valor_meta}`
                    arrecadado.innerHTML = `R$${campanha.valor_arrecadado}`
                    nomeOrganizadorCard.innerHTML = campanha.organizador.nome

                    resumo.innerHTML = campanha.objetivo
                    descricao.innerHTML = campanha.descricao
                }
                // let novoItem = itemCard.cloneNode(true)

                // novoItem.classList.remove("hidden")
            })
        })
}
