const idCampanha = (new URLSearchParams(window.location.search).get('id'))
let idOrganizador = document.querySelector(".id-organizador")

function carregar() {
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
                    let chavePix = document.querySelector(".chave-pix")

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
                    chavePix.innerHTML = campanha.chave_pix

                    resumo.innerHTML = campanha.objetivo
                    descricao.innerHTML = campanha.descricao
                }
            })
        })

    fetch("http://localhost:3300/cadastro")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            data.forEach(campanha => {
                let imgOrganizador = document.querySelector(".img-organizador")

                imgOrganizador.src = `../../../back/${campanha.imagens[0].caminho_imagem}`
                console.log(imgOrganizador)

            })
        })
}

function levarPerfil(e) {
    let idPerfil = document.querySelector(".id-organizador").innerHTML
    window.location.href = `http://127.0.0.1:5500/frontend/pages/perfil/index.html?id=${idPerfil}`
}

function abrirPix() {
    document.querySelector(".pix-campanha").classList.remove("occult")
}

function fecharPix() {
    document.querySelector(".pix-campanha").classList.add("occult")
}