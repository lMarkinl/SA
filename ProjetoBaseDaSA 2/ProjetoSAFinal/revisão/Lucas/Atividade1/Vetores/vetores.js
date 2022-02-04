let numeros = [2, 4, 6, 8, 10, 2, 4, 80]
let cores = ["Amarelo ","Roxo ","Verde ","Vermelho "]
let nomes = ["Marcos","Diego","Leticia"]
let valores = []


NomeExclui = "Diego"
NomeAtualiza = "Carlos"
indeceExclui = 0

    for (let i = 0; i < nomes.length-1; i++) {
        
        if (nomes[i] == "Diego") {

            indeceExclui = i
        }

    }

nomes.splice(1, 1, NomeAtualiza)

console.log(nomes);
