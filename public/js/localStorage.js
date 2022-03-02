//Logar
let cadastro = []

let usuario_cadastro = document.getElementById('usuario')
let email_cadastro = document.getElementById('email')
let senha_cadastro = document.getElementById('senha')

let usuario_login = document.getElementById('usuario2')
let senha_login = document.getElementById('senha2')

let pesquisarUsers = document.getElementById('pesquisarUsers')

let dadosNome = document.getElementById('dados_nome')
let dadosEmail = document.getElementById('dados_email')
let dadosSenha = document.getElementById('dados_senha')




const entrar = function () {


    // console.log(usuario.value);
    // console.log(senha.value);

    if (usuario_login.value != "" && senha_login.value != "") {
        let users = []
        if (localStorage.getItem('cadastro') != null)
            users = JSON.parse(localStorage.getItem('cadastro'))
        if (users.find(users => users.usuario == usuario_login.value && users.senha == senha_login.value)) {

            let pagina = setTimeout(function () {
                window.location = "index.html"
            }, 1000)

        } else {
            alert('usuario ou senha incorreta')
        }
    }
}


//Cadastrar

const add = function () {




    if (localStorage.getItem('cadastro') != null)
        cadastro = JSON.parse(localStorage.getItem('cadastro'))

    if (usuario_cadastro.value != "" && senha_cadastro.value != "" && email_cadastro.value != "") {

        if (email_cadastro.value.includes('@', 2) && email_cadastro.value.length > 2) {

            if (email_cadastro.value.indexOf('.') > email_cadastro.value.indexOf('@') + 1) {


                let auxUsers = cadastro.filter(cad => cad.usuario == usuario_cadastro.value)
                let auxEmail = cadastro.filter(cad => cad.email == email_cadastro.value)

                if (auxUsers.length > 0) {
                    alert('nome de usuario ja existe')
                    return
                } else if (auxEmail.length > 0) {

                    alert('email ja existe')
                }
                else {
                    if (usuario_cadastro.value.length >= 4) {

                        if (senha_cadastro.value.length >= 6) {

                            cadastro.push({
                                usuario: usuario_cadastro.value,
                                email: email_cadastro.value,
                                senha: senha_cadastro.value,
                            })

                            console.log(cadastro)
                            localStorage.setItem("cadastro", JSON.stringify(cadastro))
                            usuario_cadastro.value = ""
                            email_cadastro.value = ""
                            senha_cadastro.value = ""
                            window.location = "entrar.html"

                        } else {
                            alert('senha com no minimo 6 caracteris') }
                       
                    } else {  alert('usuario precisa de no menimo 3 caracteris') }
                }
            } else { alert('coloque um email valido como: nome@nome.com') }

        } else { alert('coloque o @')   }
           
    } else {   alert('preencha todos os campos') }
     
  
}

// Area de Admin

function pesquisar() {

    cadastro = JSON.parse(localStorage.getItem('cadastro'))

    for (let i = 0; i < cadastro.length; i++) {

        if (pesquisarUsers.value == cadastro[i].usuario) {



            dadosNome.value = cadastro[i].usuario
            dadosEmail.value = cadastro[i].email
            dadosSenha.value = cadastro[i].senha

        }

    }
}

//excluir usuario

function delhist() {

    cadastro = JSON.parse(localStorage.getItem('cadastro'))
    let excluirUsers
    for (i = 0; i < cadastro.length; i++) {

        if (dadosNome.value == cadastro[i].usuario) {
            excluirUsers = i
            cadastro.splice(excluirUsers, 1)

            alert('usuario excluido')

            localStorage.setItem('cadastro', JSON.stringify(cadastro))
        }

    }

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