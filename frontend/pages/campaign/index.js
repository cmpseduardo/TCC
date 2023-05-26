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
                    let idOrganizador = document.querySelector(".id-organizador")
                    let img = document.querySelector(".img-campanha")
                    let meta = document.querySelector(".valor-meta")
                    let arrecadado = document.querySelector(".valor-arrecadado")
                    let nomeOrganizadorCard = document.querySelector(".nome-organizador-card")

                    let resumo = document.querySelector(".breve-resumo")
                    let descricao = document.querySelector(".descricao")

                    let valorMeta = campanha.valor_meta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                    let valorArrecadado = campanha.valor_arrecadado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


                    nomeCampanha.innerHTML = campanha.titulo
                    nomeOrganizador.innerHTML = campanha.organizador.nome
                    idOrganizador.innerHTML = campanha.organizador.id
                    img.src = `../../../back/${campanha.imagens[0].caminho_imagem}`
                    meta.innerHTML = valorMeta
                    arrecadado.innerHTML = valorArrecadado
                    nomeOrganizadorCard.innerHTML = campanha.organizador.nome

                    resumo.innerHTML = campanha.objetivo
                    descricao.innerHTML = campanha.descricao
                }
                // let novoItem = itemCard.cloneNode(true)

                // novoItem.classList.remove("hidden")
            })
        })
}

function levarPerfil(e) {
    let idPerfil = document.querySelector(".id-organizador").innerHTML
    window.location.href = `http://127.0.0.1:5500/frontend/pages/perfil/index.html?id=${idPerfil}`
}
