let historico = []
let excluirHist = 0
let EditHIst = 0
let medicao = document.getElementById('medicao')
let dataMed = document.getElementById('dataMed')
let eat = document.getElementById('eat')



let PesquisarHistorico = document.getElementById('PesquisarHistorico')
let histMed = document.getElementById('histMed')
let histData = document.getElementById('histData')
let histC = document.getElementById('histC')

let inputN = document.getElementById('inputN')
let inputM = document.getElementById('inputM')
let inputN2 = document.getElementById('inpurN2')
let inputM2 = document.getElementById('inpurM2')
let comparacao = document.getElementById('Comparacao')

let data1
let data2
var med1
var med2



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

function mandar() {

    if (localStorage.getItem('historico') != null)
        historico = JSON.parse(localStorage.getItem('historico'))



    historico.push({
        medicao: medicao.value,
        data: dataMed.value,
        eat: eat.value,
        Id: getCookie('id')
    })
    Swal.fire('historico salvo')
    console.log(historico)
    localStorage.setItem("historico", JSON.stringify(historico))
    medicao.value = ""
    dataMed.value = ""
    eat.value = ""

}


function PesqHist() {

    historico = JSON.parse(localStorage.getItem('historico'))



    for (let i = 0; i < historico.length; i++) {

        if (historico[i].Id == getCookie("id")) {

            if (PesquisarHistorico.value == historico[i].data) {

                EditHIst = i
                histMed.value = historico[i].medicao
                histData.value = historico[i].data
                histC.value = historico[i].eat
                break
            }else{
                Swal.fire('data não encontrada')
                PesquisarHistorico.value = ""
                histMed.value = ""
                histData.value = ""
                histC.value = ""
            }
    
        }
    }

}

function pegardata(data) {


    return historico.filter(date => {

        return date.data === data

    })
}

function buscardata1() {

    historico = JSON.parse(localStorage.getItem('historico'))

    for (let i = 0; i < historico.length; i++) {
        if (historico[i].Id == getCookie("id")) {
            if (inputN.value === historico[i].data) {
                med1 = historico[i].medicao
                inputN2.value = med1 + "mg/dl"
            }
        }
    }


    for (let i = 0; i < historico.length; i++) {
        if (historico[i].Id == getCookie("id")) {
            if (inputM.value === historico[i].data) {
                med2 = historico[i].medicao
                inputM2.value = med2 + "mg/dl"

            }
        }
    }
}


function Comparar() {
    historico = JSON.parse(localStorage.getItem('historico'))
    let resultado = 100 * (parseInt(med2) - parseInt(med1)) / parseInt(med1)

    if (med1 > med2) {


        comparacao.value = `sua glicose diminuiu em ${Math.abs(resultado.toFixed(2))}%`
    } else if (med1 < med2) {

        comparacao.value = `sua glicose aumento em ${Math.abs(resultado.toFixed(2))}%`

    }
    else {
        Swal.fire('uma das datas nao foi encontrada')
    }

    inputN.value = ""
    inputM.value = ""
    inputN2.value = ""
    inputM2.value = ""
    setTimeout(function () {
        comparacao.value = ""
    }, 5000)
}

function deletar() {

    historico = JSON.parse(localStorage.getItem('historico'))

    for (i = 0; i < historico.length; i++) {

        if (historico[i].Id == getCookie("id")) {

            if (PesquisarHistorico.value == historico[i].data) {
                excluirHist = i
                historico.splice(excluirHist, 1)

                Swal.fire('historico deletado')

                localStorage.setItem('historico', JSON.stringify(historico))

                histMed.value = ""
                histData.value = ""
                histC.value = ""
            }
        }


    }

}

function editar() {

    historico = JSON.parse(localStorage.getItem('historico'))
   

        historico[EditHIst].medicao = histMed.value
        historico[EditHIst].data = histData.value
        historico[EditHIst].eat = histC.value
    


    Swal.fire('historico atualizados')

    localStorage.setItem('historico', JSON.stringify(historico))


    
    histMed.value = ""
    histData.value = ""
    histC.value = ""
    PesquisarHistorico.value = ""
}
