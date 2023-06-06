var mainCampanhas = document.querySelector('.main-campanhas');
var mainPerfil = document.querySelector('.main-perfil');
var minhasCampanhas = document.querySelector('#minhas-campanhas');
var meuPerfil = document.querySelector('#meu-perfil');
var itemCard = document.querySelector('.campanha')
var itemModal = document.querySelector('.modal')

function cadastrarNovaCampanha() {
    let novaCampanha = document.querySelector('.modal-novo')
    novaCampanha.classList.remove('occult')
    novaCampanha.style.display = 'block'
    console.log(novaCampanha)
}

function carregarCampanhas() {
    minhasCampanhas.classList.add('selected-option');
    meuPerfil.classList.remove('selected-option');
    meuPerfil.classList.remove('selected-option');
    mainPerfil.classList.add('occult');
    mainCampanhas.classList.remove('occult');

    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(campanha => {

                let newItem = itemCard.cloneNode(true)

                newItem.classList.remove('occult')

                let id = newItem.querySelector('.n-id')
                let img = newItem.querySelector('.img-campaign')
                let name = newItem.querySelector('.name-campaign')


                id.innerHTML = campanha.id
                img.src = `../../../back/${campanha.imagens[0].caminho_imagem}`
                name.innerHTML = campanha.titulo

                document.querySelector(".main-campanhas").appendChild(newItem);
            })
        })
}

// Obtém o elemento modal
var modalCampanha = document.querySelector("#modal-campanha");
var modalNovaCampanha = document.querySelector("#modal-nova-campanha");

// Obtém o elemento de fechar
var span = document.querySelector("#close");

// Quando o usuário clica no card, abre o modal
function abrirModal(e) {

    modalCampanha.style.display = "block";
    modalCampanha.style.visibility = "visible";
    var nId = Number(e.querySelector(".n-id").innerHTML);
    localStorage.setItem('idCampanha', nId);

    console.log(nId);
    fetch("http://localhost:3300/campanha")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            const item = data.find(item => item.id == nId);
            console.log(item)

            let dataAtualizacao = document.querySelector('#data-atualizacao')
            let nomeCampanha = document.querySelector('#nome-campanha')
            let objetivo = document.querySelector('#objetivo')
            let meta = document.querySelector('#meta')
            let arrecadado = document.querySelector('#arrecadado')
            let chavePix = document.querySelector('#chave-pix')
            let email = document.querySelector('#email-contato')

            dataAtualizacao.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(item.atualizacoes))
            nomeCampanha.innerHTML = item.titulo
            objetivo.innerHTML = item.descricao
            meta.innerHTML = item.valor_meta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            arrecadado.innerHTML = item.valor_arrecadado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            chavePix.innerHTML = item.chave_pix
            email.value = item.contato

        })
}

// Quando o usuário clica no elemento de fechar, fecha o modal
function fecharModal() {
    modalCampanha.style.display = "none";
    modalNovaCampanha.style.display = "none";
    window.location.reload();
}


function carregarPerfil() {
    document.querySelector('h1').innerHTML = "Meu Perfil"
    minhasCampanhas.classList.remove('selected-option');
    meuPerfil.classList.add('selected-option');
    meuPerfil.classList.add('selected-option');
    mainPerfil.classList.remove('occult');
    mainCampanhas.classList.add('occult');
}

function editarCampanha() {
    document.querySelector('#objetivo').disabled = false;
    document.querySelector('#arrecadado').disabled = false;
    document.querySelector('#chave-pix').disabled = false;
    document.querySelector('#email-contato').disabled = false;
    document.querySelector('.btn-editar').classList.add('occult')
    document.querySelector('.btn-salvar').classList.remove('occult')
}

function fazerAlteracao() {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "atualizacoes": new Date(),
            "objetivo": document.querySelector('#objetivo').value,
            "valor_arrecadado": Number(document.querySelector('#arrecadado').value),
            "chave_pix": document.querySelector('#chave-pix').value,
            "contato": document.querySelector('#email-contato').value,
        })
    };

    let idCampanha = localStorage.getItem('idCampanha')

    fetch(`http://localhost:3300/campanha/${idCampanha}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    document.querySelector('#objetivo').disabled = true;
    document.querySelector('#arrecadado').disabled = true;
    document.querySelector('#chave-pix').disabled = true;
    document.querySelector('#email-contato').disabled = true;
    document.querySelector('.btn-editar').classList.remove('occult')
    document.querySelector('.btn-salvar').classList.add('occult')
}