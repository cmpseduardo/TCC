function fazerLogin() {

    let info = {
        "email": document.querySelector('#email').value,
        "senha": document.querySelector('#senha').value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    };


    fetch('http://localhost:3300/cadastro/login', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.validation == true) {
                window.location.href = `../fugleman/index.html`
            } else {
                alert("Usuário ou senha incorretos")
            }
        })
        .catch(err => console.error(err));
}