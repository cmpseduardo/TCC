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

var itemCard = document.querySelector(".card-completo")

function carregarCampanhas() {
    document.querySelector(".campanha-icon").src = "../../docs/imgs/icon-doacao-white.png"
    document.querySelector(".perfil-icon").src = "../../docs/imgs/icon-organizador.png"
    document.querySelector(".main-perfil").classList.add("ocultar")

    document.querySelector(".main-campanhas").classList.remove("ocultar")


    document.querySelector(".option1").classList.add("selected-option")
    document.querySelector(".option2").classList.remove("selected-option")

    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(campanha => {

                let novoItem = itemCard.cloneNode(true)

                novoItem.classList.remove("ocultar")
                document.querySelector(".descricao-textarea")

                let id = novoItem.querySelector(".n-id")
                let img = novoItem.querySelector(".img-organizador")
                let nomeCampanha = novoItem.querySelector("#nome-campanha")
                let meta = novoItem.querySelector("#meta")
                let arrecadado = novoItem.querySelector("#arrecadado")
                let descricao = novoItem.querySelector(".descricao-textarea")

                id.innerHTML = campanha.id
                img.src = `../../back/${campanha.imagens[0].caminho_imagem}`
                nomeCampanha.value = campanha.titulo
                meta.value = campanha.valor_meta
                arrecadado.value = campanha.valor_arrecadado
                descricao.innerHTML = campanha.descricao

                document.querySelector(".main-campanhas").appendChild(novoItem);
            })
        })
}

function editarCampanha(e) {
    e.querySelector("#arrecadado").disabled = false;
    e.querySelector(".descricao-textarea").disabled = false;
    e.querySelector("#salvar").classList.remove("ocultar");
    if (!e.querySelector("#editar").classList.contains("ocultar")) {
        e.querySelector("#editar").classList.add("ocultar");
    }
}


function salvarCampanha(e) {
    let id = e.querySelector(".n-id").innerHTML
    let arrecadado = e.querySelector("#arrecadado").value
    let descricao = e.querySelector(".descricao-textarea").value

    const data = {
        "valor_arrecadado": Number(arrecadado),
        "descricao": descricao
    }

    fetch(`http://localhost:3300/campanha/${id}`, {
        "method": 'PUT',
        "headers": {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(updatedUser => {
            window.location.reload()
            alert('Campanha atualizada com sucesso!', updatedUser)
        }
        )
        .catch(error => console.error('Erro ao atualizar campanha.', error))

    arrecadado.disabled = true;
    descricao.disabled = true;

    document.querySelector("#salvar").classList.add("ocultar");
    document.querySelector("#editar").classList.remove("ocultar");
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
    let nomeOrganizador = document.querySelector("#input-nome-organizador").value
    let cpfCnpj = document.querySelector("#input-cpf-cnpj").value
    let email = document.querySelector("#input-email").value
    let celular = document.querySelector("#input-celular").value
    let instagram = document.querySelector("#input-instagram").value
    let whatsapp = document.querySelector("#input-whatsapp").value
    let twitter = document.querySelector("#input-twitter").value
    let site = document.querySelector("#input-site").value
    let file = document.querySelector("#input-file").value
    let editar = document.querySelector("#editar-perfil")
    let salvar = document.querySelector("#salvar-edicao")

    nomeOrganizador.disabled = true
    cpfCnpj.disabled = true
    email.disabled = true
    celular.disabled = true
    instagram.disabled = true
    whatsapp.disabled = true
    twitter.disabled = true
    site.disabled = true
    file.classList.add("ocultar")
    editar.classList.remove("ocultar")
    salvar.classList.add("ocultar")

    let body = {
        // "id": 3,
        "nome": nomeOrganizador,
        // Se cpfCnpj = 11 {
        "cpf": "581.579.687-85",
        // }
        // Se cpfCnpj = 14 {
        "cnpj": "22706924000103",
        // }
        "email": "bora6822@uorak.com",
        "telefone": "(14)1231-8117",
        "senha": "$2b$10$fj7XyaXCM79oWIO9eat4OeNR4zPl7VS9zDsaMfX.4Kaf8radRa5GC",
        "acessoid": 2
    }

    fetch(`http://localhost:3300/campanha/${id}`, {
        "method": 'PUT',
        "headers": {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(updatedUser => {
            window.location.reload()
            alert('Campanha atualizada com sucesso!', updatedUser)
        }
        )
        .catch(error => console.error('Erro ao atualizar campanha.', error))

    arrecadado.disabled = true;
    descricao.disabled = true;

    document.querySelector("#salvar").classList.add("ocultar");
    document.querySelector("#editar").classList.remove("ocultar");
}
