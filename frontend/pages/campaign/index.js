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

                    carregarFotoOrganizador()
                }
            })
        })

}

function carregarFotoOrganizador() {
    let idPerfil = document.querySelector(".id-organizador").innerHTML
    fetch("http://localhost:3300/cadastro")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            data.forEach(campanha => {
                if (campanha.id == idPerfil) {
                    let imgOrganizador = document.querySelector(".img-organizador")
                    imgOrganizador.src = `../../../back/${campanha.imagens[0].caminho_imagem}`
                }
            })
            carregarRedesSociais()
        })
}

function carregarRedesSociais() {
    let idPerfil = document.querySelector(".id-organizador").innerHTML

    fetch("http://localhost:3300/cadastro")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(campanha => {
                if (campanha.id == idPerfil) {
                    let btnInstagram = document.querySelector('.btn-instagram')
                    let btnFacebook = document.querySelector('.btn-facebook')
                    let btnTwitter = document.querySelector('.btn-twitter')
                    let btnWhatsApp = document.querySelector('.btn-whatsapp')
                    let btnSite = document.querySelector('.btn-site')

                    if (campanha.instagram == null || campanha.instagram == "") {
                        btnInstagram.classList.add('occult')
                    } else {
                        btnInstagram.addEventListener('click', () => {
                            window.location.href = `https://${campanha.instagram}`;
                        });
                    }


                    if (campanha.facebook == null || campanha.facebook == "") {
                        btnFacebook.classList.add('occult')
                    } else {
                        btnFacebook.addEventListener('click', () => {
                            window.location.href = `https://${campanha.facebook}`;
                        });
                    }


                    if (campanha.twitter == null || campanha.twitter == "") {
                        btnTwitter.classList.add('occult')
                    } else {
                        btnTwitter.addEventListener('click', () => {
                            window.location.href = `https://${campanha.twitter}`;
                        });
                    }


                    if (campanha.whatsapp == null || campanha.whatsapp == "") {
                        btnWhatsApp.classList.add('occult')
                    } else {
                        btnWhatsApp.addEventListener('click', () => {
                            window.location.href = `https://api.whatsapp.com/send?phone=${campanha.whatsapp}`;
                        });

                    }


                    if (campanha.site == null || campanha.site == "") {
                        btnSite.classList.add('occult')
                    } else {
                        btnSite.addEventListener('click', () => {
                            window.location.href = `https://${campanha.site}`;
                        });

                    }
                }

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