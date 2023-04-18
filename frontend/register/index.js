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