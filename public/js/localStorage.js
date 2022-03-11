let cadastro = []
let userLogado = []
var excluirUsers = 0
var EditUser = 0
let UserId = 0
let usuario_cadastro = document.getElementById('usuario')
let email_cadastro = document.getElementById('email')
let senha_cadastro = document.getElementById('senha')


let usuario_login = document.getElementById('usuario2')
let senha_login = document.getElementById('senha2')

let pesquisarUsers = document.getElementById('pesquisarUsers')

let dadosNome = document.getElementById('dados_nome')
let dadosEmail = document.getElementById('dados_email')
let dadosSenha = document.getElementById('dados_senha')

let userNome = document.getElementById('Usuario_nome')
let userEmail = document.getElementById('Usuario_email')
let userSenha = document.getElementById('Usuario_senha')

let pgH = document.getElementsByClassName('pgH')
let pgCad = document.getElementsByClassName('pgCad')
let pgLog = document.getElementsByClassName('pgLog')
let pgHist = document.getElementsByClassName('pgHist')
let pgUser = document.getElementsByClassName('pgUser')


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
                    Swal.fire('nome de usuario ja existe')
                    return
                } else if (auxEmail.length > 0) {

                    Swal.fire('email ja existe')
                }
                else {
                    if (usuario_cadastro.value.length >= 4) {

                        if (senha_cadastro.value.length >= 6) {

                            if ((localStorage.getItem('cadastro') == null)) {

                                UserId = 1

                            } else {
                                UserId = cadastro.length + 1
                            }
                            alert(UserId)

                            cadastro.push({
                                Id: UserId,
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
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'senha com no minimo 6 caracteris',
                            })
                        }


                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'usuario precisa de no menimo 3 caracteris',
                        })
                    }
                }

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'coloque um email valido como',
                    footer: 'exemplo@gmail.com'
                })
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Coloque o @',
                footer: 'exemplo@gmail.com'
            })
        }

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha todos os campos',
        })
    }


}


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function conectado() {

    let logado = getCookie("logado")
    if (logado == "sim") {



        for (let i = 0; i < pgH.length; i++) {
            pgH[i].style.display = "block"

        }

        for (let i = 0; i < pgCad.length; i++) {
            pgCad[i].style.display = "none"

        }
        for (let i = 0; i < pgLog.length; i++) {
            pgLog[i].style.display = "none"

        }
        for (let i = 0; i < pgHist.length; i++) {
            pgHist[i].style.display = "inline"
           
        }
        for (let i = 0; i < pgUser.length; i++) {
            pgUser[i].style.display = "inline"

        }
        



    }



}

//Logar
const entrar = function () {




    if (usuario_login.value != "" && senha_login.value != "") {
        let users = []


        if (localStorage.getItem('cadastro') != null)
            users = JSON.parse(localStorage.getItem('cadastro'))
        if (users.find(users => users.usuario == usuario_login.value && users.senha == senha_login.value)) {

            id = users.find(users => users.usuario == usuario_login.value && users.senha == senha_login.value)
           
            document.cookie = "id=" + JSON.stringify(id.Id)
            document.cookie = "User= " + JSON.stringify(users.find(users => users.usuario == usuario_login.value && users.senha == senha_login.value))
            document.cookie = "logado = sim"

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'logado com sucesso',
                showConfirmButton: false,
                timer: 1500
              })
            let pagina = setTimeout(function () {
                window.location = "index.html"
            }, 1500)

        } else { Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario ou senha incorreto', })}
                     
        
    }
}





// Area de Admin

function pesquisar() {

    cadastro = JSON.parse(localStorage.getItem('cadastro'))



    for (let i = 0; i < cadastro.length; i++) {

        if (pesquisarUsers.value == cadastro[i].usuario) {


            EditUser = i
            dadosNome.value = cadastro[i].usuario
            dadosEmail.value = cadastro[i].email
            dadosSenha.value = cadastro[i].senha

        }

    }
}

//excluir usuario

function delhist() {

    cadastro = JSON.parse(localStorage.getItem('cadastro'))

    for (i = 0; i < cadastro.length; i++) {

        if (pesquisarUsers.value == cadastro[i].usuario) {
            excluirUsers = i
            cadastro.splice(excluirUsers, 1)

            Swal.fire('usuario excluido')

            localStorage.setItem('cadastro', JSON.stringify(cadastro))
        }

    }

}

//editar
function UpDados() {

    cadastro = JSON.parse(localStorage.getItem('cadastro'))

    if (dadosNome.value != "" && dadosEmail.value != "" && dadosSenha.value != "") {

        if (dadosEmail.value.includes('@', 2) && dadosEmail.value.length > 2) {

            if (dadosEmail.value.indexOf('.') > dadosEmail.value.indexOf('@') + 1) {



                let auxEmail = cadastro.filter(cad => cad.email == dadosEmail.value)

              if (auxEmail.length > 0) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email ja existe',
                    })
                }
                else {
                    if (dadosNome.value.length >= 4) {

                        if (dadosSenha.value.length >= 6) {


                            cadastro[EditUser].usuario = dadosNome.value
                            cadastro[EditUser].email = dadosEmail.value
                            cadastro[EditUser].senha = dadosSenha.value

                            Swal.fire('dados atualizados')

                            localStorage.setItem('cadastro', JSON.stringify(cadastro))

                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Senha com no minimo 6 caracteris',
                            })
                        }

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Usuario precisa de no minimo 3 caracteris',
                        })
                    }
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Coloque um Email valido',
                    footer: 'exemplo@gmail.com'
                })
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Coloque o @ no seu email',
            })
        }

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preencha todos os campos',
        })
    }




}




