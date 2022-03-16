let historico = []
let medicao = document.getElementById('medicao')
let dataMed = document.getElementById('dataMed')
let eat = document.getElementById('eat')

let PesquisarHistorico = document.getElementById('PesquisarHistorico')
let histMed = document.getElementById('histMed')
let histData = document.getElementById('histData')
let histC = document.getElementById('histC')

let inputN = document.getElementById('inputN')
let inputM = document.getElementById('inputM')
let comparacao = document.getElementById('comparacao')

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

    console.log(historico)
    localStorage.setItem("historico", JSON.stringify(historico))
    medicao.value = ""
    dataMed.value = ""
    eat.value = ""

}


function PesqHist() {

    historico = JSON.parse(localStorage.getItem('historico'))
  
    
  
    for (let i = 0; i < historico.length; i++) {
  
      if (PesquisarHistorico.value == historico[i].data ) {
       if(historico[i].Id == getCookie("id")){
 
       histMed.value = historico[i].medicao
       histData.value =  historico[i].data
       histC.value = historico[i].eat
       }
  
      }
  
    }
  
  }
function pegardata(data){
 
   
    return historico.filter(date =>{

   return date.data === data

    })
}

function buscardata1() {

    historico = JSON.parse(localStorage.getItem('historico'))
    
for (let i = 0; i< historico.length; i++) {
    if(historico[i].Id == getCookie("id")){
    if (inputN.value === historico[i].data) {
    med1 =  historico[i].medicao
    }
    }
    }
    
    
    for (let i = 0; i< historico.length; i++) {
        if(historico[i].Id == getCookie("id")){
        if (inputM.value === historico[i].data) {
         med2 = historico[i].medicao
        }
        }
        }
}

function Comparar(){
    historico = JSON.parse(localStorage.getItem('historico'))

if (med1 > med2) {

alert(med2 - med1)

}else if(med1 < med2){
    
    alert(med2 - med1)
}
else{
alert('uma das datas nao foi encontrada')
}

inputN.value = ""
inputM.value = ""
 
}