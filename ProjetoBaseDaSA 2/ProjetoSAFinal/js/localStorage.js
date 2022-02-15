//Logar
var cadastro = []

var usuario = []
var senha = []
var email = []

const entrar = function() {

    usuario = document.getElementById("usuario2")
    senha = document.getElementById("senha2")
    console.log(usuario.value);
    console.log(senha.value);


    if(usuario.value !="" && senha.value != ""){
        var users = []
        if(localStorage.getItem("cadastro") != null)
        users = JSON.parse(localStorage.getItem("cadastro"))
         if(users.find(users => users.usuario == usuario.value && users.senha == senha.value)){

             var pagina = setTimeout(function(){
                 window.location = "index.html"
             },2000)

             }else{
                 alert("usuario ou senha incorreta")
             }
         }
    }


//Cadastrar


const add = function (event) {
    
    event.preventDefault()

    usuario = document.getElementById('usuario')
    console.log(usuario);
    email = document.getElementById("email")
    senha = document.getElementById("senha")
    if (localStorage.getItem("cadastro") != null)
        cadastro = JSON.parse(localStorage.getItem("cadastro"))

    

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

    // window.location = "entrar.html"
}
document.getElementById("botao").addEventListener("click", add)

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

//Criar uma função
//para puxar dados do Cadastro (JSON.parse)
//Mostrar dados na area de admin



function pes () {
    var pesquisar = document.getElementById("pesquisar").value
        usuario = localStorage.getItem("usuario")
        email = localStorage.getItem("email")
        senha = localStorage.getItem("senha")

    console.log("Vai que da certo");

}