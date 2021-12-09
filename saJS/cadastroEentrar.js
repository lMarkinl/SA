let cadastro = []

const entrar = function() {
    
    let usuario = document.getElementById('usuario2')
    let senha = document.getElementById('senha2')
    if (localStorage.getItem('cadastro') != null)
        users = JSON.parse(localStorage.getItem('cadastro'))

    users.forEach(cadastro => {
       if (usuario.value === cadastro.usuario && senha.value === cadastro.senha) {
           window.location = "index.html"
       }

    });
}

const add = function () {
    window.location = "entrar.html"

    let usuario = document.getElementById('usuario')
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')
    if (localStorage.getItem('cadastro') != null)
        cadastro = JSON.parse(localStorage.getItem('cadastro'))
        

    cadastro.push({
        usuario: usuario.value,
        email: email.value,
        senha: senha.value,

    })
    console.log(cadastro)
    localStorage.setItem("cadastro", JSON.stringify(cadastro))
    usuario.value = ""
    email.value = ""
    senha.value= ""
    
}
