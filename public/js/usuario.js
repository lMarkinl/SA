let edit = 0


let logado = getCookie("logado")
if (logado == "sim") {

  let log = JSON.parse(getCookie("User"))
  userNome.value = log.usuario
  userEmail.value = log.email
  userSenha.value = log.senha
}

function LogOut() {

  let cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=./sa;";
  }
  window.location = "index.html"
}


function EditUsuario() {


  log = JSON.parse(getCookie("User"))

  cadastro = JSON.parse(localStorage.getItem('cadastro'))

  if (userNome.value != "" && userEmail.value != "" &&userSenha.value != "") {

    if (userEmail.value.includes('@', 2) && userEmail.value.length > 2) {

      if (userEmail.value.indexOf('.') > userEmail.value.indexOf('@') + 1) {



        let auxEmail = cadastro.filter(cad => cad.email== userEmail.value)

        if (auxEmail.length > 0) {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'esse email ja existe',
          })
        }
        else {
          if (userNome.value.length >= 4) {

            if (userSenha.value.length >= 6) {


              log.usuario = userNome.value
              log.email = userEmail.value
              log.senha = userSenha.value


              let UserEditado = {
                usuario: userNome.value,
                email: userEmail.value,
                senha: userSenha.value
              }

              document.cookie = "User= " + JSON.stringify(UserEditado)

              for (let i = 0; i < cadastro.length; i++) {

                if (log.Id == cadastro[i].Id) {
                  edit = i

                }

              }

              cadastro[edit].usuario = userNome.value
              cadastro[edit].email = userEmail.value
              cadastro[edit].senha = userSenha.value

              localStorage.setItem('cadastro', JSON.stringify(cadastro))

              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'atualizado com sucesso',
                showConfirmButton: false,
                timer: 1500
              })




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
