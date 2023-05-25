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
            let descPerfil = document.querySelector('.desc-perfil')

            nomeOrganizador.innerHTML = item.nome
            if (item.cnpj != null) {
                tipoConta.innerHTML = "Pessoa Jurídica"
            }
            else if (item.cpf != null) {
                tipoConta.innerHTML = "Pessoa Física"
            }
            descPerfil.innerHTML = item.telefone //Trocar para descrição
        })
}