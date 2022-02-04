//Logar
let cadastro = []

const entrar = function() {

    let usuario = document.getElementById('usuario2')
    let senha = document.getElementById('senha2')
    console.log(usuario.value);
    console.log(senha.value);

    if(usuario.value !="" && senha.value != ""){
        let users = []
        if(localStorage.getItem('cadastro') != null)
        users = JSON.parse(localStorage.getItem('cadastro'))
         if(users.find(users => users.usuario == usuario.value && users.senha == senha.value)){

             let pagina = setTimeout(function(){
                 window.location = "index.html"
             },2000)

             }else{
                 alert('usuario ou senha incorreta')
             }
         }
    }


//Cadastrar

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
// Ver Senhna

// let btn = document.querySelector('#ver')
// btn.addEventListener('click', function(){
// let senha = document.querySelector('#senha')
//     if(senha.getAttribute('type') == 'password') {
//         senha.setAttribute('type', 'text');
//     } else {
//         senha.setAttribute('type', 'password');
//     }})

// Area de Admin

const pesquisar = function () {

   document.getElementById("nome").value = localStorage.usuario
   
}