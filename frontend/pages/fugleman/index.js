var mainCampanhas = document.querySelector('.main-campanhas');
var mainPerfil = document.querySelector('.main-perfil');
var minhasCampanhas = document.querySelector('#minhas-campanhas');
var meuPerfil = document.querySelector('#meu-perfil');
var itemCard = document.querySelector('.campanha')

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
var modal = document.querySelector("#myModal");

// Obtém o elemento de fechar
var span = document.querySelector("#close");

// Quando o usuário clica no botão, abre o modal
function abrirModal() {
    modal.style.display = "block";
}

// Quando o usuário clica no elemento de fechar, fecha o modal
function fecharModal() {
    modal.style.display = "none";
}


function carregarPerfil() {
    minhasCampanhas.classList.remove('selected-option');
    meuPerfil.classList.add('selected-option');
    meuPerfil.classList.add('selected-option');
    mainPerfil.classList.remove('occult');
    mainCampanhas.classList.add('occult');
}