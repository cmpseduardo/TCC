function toLoadPessoaFisica() {
    document.querySelector(".pessoa-fisica").classList.remove("hidden")
    document.querySelector(".forma-cadastro").classList.add("hidden")
}

function toLoadPessoaJuridica() {
    document.querySelector(".pessoa-juridica").classList.remove("hidden")
    document.querySelector(".forma-cadastro").classList.add("hidden")
}

function toLoadRegisterInfos() {
    let registerInfo = document.querySelector(".register-infos")
    registerInfo.classList.remove("hidden")
    document.querySelector(".pessoa-fisica").classList.add("hidden")
    document.querySelector(".pessoa-juridica").classList.add("hidden")
    document.querySelector(".forma-cadastro").classList.add("hidden")
}


function backForm() {
    document.querySelector(".pessoa-fisica").classList.add("hidden")
    document.querySelector(".pessoa-juridica").classList.add("hidden")
    document.querySelector(".forma-cadastro").classList.remove("hidden")
}

function cadastrarPessoaFisica() {
    const dados = {
        "nome": document.querySelector("#nome-pessoa-fisica"),
        "cpf": document.querySelector("#cpf"),
        "email": document.querySelector("#email-pessoa-fisica"),
        "telefone": `${document.querySelector(".ddd-pessoa-fisica")}` + `${document.querySelector("#numero-celular-pessoa-fisica")}`,
        "senha": document.querySelector("#senha-2-pessoa-fisica"),
    }
}

function cadastrarPessoaJuridica() {
    if (document.querySelector("#senha-2-pessoa-juridica").value == document.querySelector("#senha-1-pessoa-juridica").value) {
        const acessoJSON = {
            "tipo": 2
        };

        let loginJSON = {
            "nome": document.querySelector("#nome-instituicao").value,
            "descricao": null,
            "cpf": null,
            "cnpj": document.querySelector("#cnpj").value,
            "email": document.querySelector("#email-pessoa-juridica").value,
            "telefone": `${document.querySelector("#ddd-pessoa-juridica").value}` + `${document.querySelector("#numero-celular-pessoa-juridica").value}`,
            "senha": document.querySelector("#numero-celular-pessoa-juridica").value,
            "instagram": null,
            "facebook": null,
            "twitter": null,
            "whatsapp": null,
            "site": null,
            "acessoid": null

        };

        fetch('http://localhost:3300/cadastroAcesso', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(acessoJSON)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Resposta do primeiro JSON:', data);
                loginJSON.acessoid = data.id;
                localStorage.setItem('id', JSON.stringify(data.id))

                fetch('http://localhost:3300/cadastro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginJSON)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Resposta do segundo JSON:', data);
                        toLoadRegisterInfos()
                    })
                    .catch(error => {
                        console.error('Erro na requisição do segundo JSON:', error);
                    });
            })
            .catch(error => {
                console.error('Erro na requisição do primeiro JSON:', error);
            });

    } else {
        alert('puts')
    }

}


function finalizarCadastro() {
    const id = localStorage.getItem('id')
    console.log(id)

    let dados = {
        "descricao": document.querySelector("#descricao-textarea").value,
        "instagram": document.querySelector("#instagram-link").value,
        "facebook": document.querySelector("#facebook-link").value,
        "twitter": document.querySelector("#twitter-link").value,
        "whatsapp": document.querySelector("#whatsapp-link").value,
        "site": document.querySelector("#site-link").value,
    }

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch(`http://localhost:3300/cadastro/${id}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


/* https://api.whatsapp.com/send?phone=5519996371475 */





