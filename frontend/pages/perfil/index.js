const idPerfil = (new URLSearchParams(window.location.search).get('id'))

function carregarPerfil() {
    fetch("http://localhost:3300/cadastro")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const item = data.find(item => item.id == idPerfil);

            let nomeOrganizador = document.querySelector('.nome-organizador-info')
            let tipoConta = document.querySelector('.tipo-conta')

            nomeOrganizador.innerHTML = item.nome
            if (item.cnpj != null) {
                tipoConta.innerHTML = "Jurídica"
            }

        })
}