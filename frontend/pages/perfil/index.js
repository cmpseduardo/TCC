const idPerfil = (new URLSearchParams(window.location.search).get('id'))

function carregarPerfil() {
    fetch("http://localhost:3300/cadastro")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const item = data.find(item => item.id == idPerfil);
            let imgPerfil = document.querySelector('.img-perfil')
            let nomeOrganizador = document.querySelector('.nome-organizador-info')
            let tipoConta = document.querySelector('.tipo-conta')
            let descPerfil = document.querySelector('.desc-perfil')

            imgPerfil.src = `../../../back/${item.imagens[0].caminho_imagem}`
            nomeOrganizador.innerHTML = item.nome
            if (item.cnpj != null) {
                tipoConta.innerHTML = "Pessoa Jurídica"
            }
            else if (item.cpf != null) {
                tipoConta.innerHTML = "Pessoa Física"
            }
            descPerfil.innerHTML = item.descricao //Trocar para descrição
        })
    carregarRedesSociais()
}

function carregarRedesSociais() {
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

function contarValorTotal() {
    let valorTotal = 0;

    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(item => {
                if (item.organizador.id == idPerfil) {
                    valorTotal += item.valor_arrecadado;
                }
            });
            const valorFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('.valor-total').innerHTML = valorFormatado;
        });
}

function contarCampanhas() {
    let valorTotal = 0

    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(item => {
                if (item.organizador.id == idPerfil) {
                    valorTotal += 1
                    document.querySelector('.n-qtd-campanha').innerHTML = valorTotal
                }
            })
        })
}

var itemCampanha = document.querySelector('.card')

function carregarCampanhas() {
    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(item => {
                if (item.organizador.id == idPerfil) {
                    let novoItem = itemCampanha.cloneNode(true)
                    novoItem.classList.remove('occult')

                    let idCampanha = novoItem.querySelector('#id-campanha')
                    let imgCampanha = novoItem.querySelector('.img-campanha')
                    let nomeCampanha = novoItem.querySelector('.nome-campanha')
                    let descCampanha = novoItem.querySelector('.descricao-campanha')

                    idCampanha.innerHTML = item.id
                    imgCampanha.src = `../../../back/${item.imagens[0].caminho_imagem}`
                    nomeCampanha.innerHTML = item.titulo
                    descCampanha.innerHTML = item.descricao

                    document.querySelector('.cards').appendChild(novoItem)
                }
            })
        })
}


function abrirCampanha(e) {
    let idCampanha = e.querySelector("#id-campanha").innerHTML
    window.location.href = `http://127.0.0.1:5500/frontend/pages/campaign/index.html?id=${idCampanha}`
}