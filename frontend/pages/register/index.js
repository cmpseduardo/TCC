function toLoadPessoaFisica() {
    document.querySelector(".pessoa-fisica").classList.remove("hidden")
    document.querySelector(".forma-cadastro").classList.add("hidden")
}

function toLoadPessoaJuridica() {
    document.querySelector(".pessoa-juridica").classList.remove("hidden")
    document.querySelector(".forma-cadastro").classList.add("hidden")
}

function backForma() {
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

function cadastrarPessoaJuridica(){
    const dados = {
        "nome": document.querySelector("#nome-pessoa-fisica"),
        "cpf": document.querySelector("#cpf"),
        "email": document.querySelector("#email-pessoa-fisica"),
        "telefone": `${document.querySelector(".ddd-pessoa-fisica")}` + `${document.querySelector("#numero-celular-pessoa-fisica")}`,
        "senha": document.querySelector("#senha-2-pessoa-fisica"),
    } 
}