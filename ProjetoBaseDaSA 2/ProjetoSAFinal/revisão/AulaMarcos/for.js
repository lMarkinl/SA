// const ingredientes = [
//     "Arroz",
//     "Feijão",
//     "Carne",
//     "Frango",
//     "Alface",
//     "Cebola",
//     "Tomate"
// ]
// const pratos = [
//     "Bife acebolado", "Frango a milanesa", "X-tudo"
// ]

// function MostrarIngrediente(ingredientes) {
//     console.log("Ingredientes:");

//     for (var i = 0; i < ingredientes.length; i++) {
//         console.log(ingredientes[i]);
//     }
// }
// MostrarIngrediente(ingredientes);
// console.log("-----------------");


// function MostrarPratos(pratos) {
//     console.log("Pratos:");

//     for (var i = 0; i < pratos.length; i++) {
//         console.log(pratos[i]);
//     }
// }
// MostrarPratos(pratos);

// console.log("------------------");


// const BifeAcebolado = ["Carne","Cebola","Arroz"];
// const FrangoMilanesa = ["Frango", "Arroz","Tomate"]
// const Xtudo = ["Carne", "Frango","Alface"]

// console.log("ingredientes dos Pratos");

// function IngredientesDosPratos(nome) {
    
//     switch (nome) {
//         case BifeAcebolado:
//             console.log("------");
//             console.log("Bife Acebolado");
            
//             for (let i = 0; i < BifeAcebolado.length; i++) {
//                 console.log(BifeAcebolado[i]);
//             }
//             break;
//         case FrangoMilanesa:
//             console.log("------");
//             console.log("Frango Milanesa");
//             for (let i = 0; i < FrangoMilanesa.length; i++) {
//                 console.log(FrangoMilanesa[i]);
//             }
//             break;
//         case Xtudo:
//             console.log("------");
//             console.log("X tudo");
//             for (let i = 0; i < Xtudo.length; i++) {
//                 console.log(Xtudo[i]);
//             }
//             break
//         default:
//             break;
//     }
        
    
// }
// IngredientesDosPratos(BifeAcebolado);
// IngredientesDosPratos(Xtudo);
// IngredientesDosPratos(FrangoMilanesa);



// const jogos = ["Lol", "Cs", "Dota", "R6"]

// function MeusAmigosJogao(jogos) {
//     console.log("Jogos :");
//     for (let i = 0; i < jogos.length; i++) {
//         console.log(jogos[i]);
//     }
// }

// MeusAmigosJogao(jogos)



// const amigos = ["Jonas","Dudas","Lipas","Marcas"]

// function MeusAmigos(amigos) {
//     console.log("---");
//     console.log("Amigos:");
//     for (let i = 0; i< amigos.length; i++) {
//       console.log(amigos[i]);
       
//     }
// }
// MeusAmigos(amigos)

// const Jonas = ["Lol"]
// const Dudas = ["Lol", "R6"]
// const Lipas = ["Lol", "Cs", "Dota", "R6"]
// const Marcas = ["Lol", "Cs"]

// console.log("--Jogos que cada um joga--");

// function QuaisJogosNosJogamos(quais) {
    
//     switch (quais) {
//         case Jonas:
//             console.log("--Jonas--");
//             for (let i = 0; i < Jonas.length; i++) {
//                 console.log(Jonas[i]);
//             }
//             break;
//         case Dudas:
//             console.log("--Dudas--");
//             for (let i = 0; i < Dudas.length; i++) {
//                 console.log(Dudas[i]);
                
//             }
        
//             break;
//         case Lipas:
//             console.log("--Lipas--");
//             for (let i = 0; i < Lipas.length; i++) {
//                 console.log(Lipas[i]);
                    
//             }
            
//             break;
//         case Marcas:
//             console.log("--Marcas--");
//             for (let i = 0; i < Marcas.length; i++) {
//                 console.log(Marcas[i]);
//             }
//             break;    
//     }
// }
// QuaisJogosNosJogamos(Jonas)
// QuaisJogosNosJogamos(Dudas)
// QuaisJogosNosJogamos(Lipas)
// QuaisJogosNosJogamos(Marcas)


// const alunos = ["Joao", "Lipe","Dudu"] 
//     console.log("Alunos:");
    
//     function MostrarAlunos(alunos) {
//         for (let i = 0; i < alunos.length; i++) {
//            console.log(alunos[i]);
//         }
//     }
// MostrarAlunos(alunos)

// const Joao = [10,5,9]
// const Lipe = [5,7,10]
// const Dudu = [10,6,10]

// console.log("3 notas  de cada aluno");
// function Mostrar3notas(notas) {
    
//     switch (notas) {
//         case Joao:
//             console.log("--João--");
//             for (let i = 0; i < Joao.length; i++) {
//                 console.log(Joao[i]);
//             }
//             break;
//         case Lipe:
//             console.log("--Lipe--");
//             for (let i = 0; i < Lipe.length; i++) {
//                 console.log(Lipe[i]);
//             }
//             break;

//         case Dudu:
//             console.log("--Dudu--");
//             for (let i = 0; i < Dudu.length; i++) {
//                 console.log(Dudu[i]);   
//             }
//             break;
//     }
// }

// Mostrar3notas(Joao)
// Mostrar3notas(Lipe)
// Mostrar3notas(Dudu)



// const JoaoFinal = [(10+5+9)/3]
// const LipeFinal = [(5+7+10)/3]
// const DuduFinal = [(10+6+10)/3]


// console.log("Notas Finais");
//     function NotasFinais(Final) {
        
//         switch (Final) {
//             case JoaoFinal:
//                 console.log("--João--");
//                 for (let i = 0; i < JoaoFinal.length; i++) {
//                     console.log(JoaoFinal[i]);
//                 }
//                 break;
//             case LipeFinal:
//                 console.log("--Lipe--");
//                 for (let i = 0; i < LipeFinal.length; i++) {
//                     console.log(LipeFinal[i]);
//                 }
//                 break;
//             case DuduFinal:
//                 console.log("--Dudu--");
//                 for (let i = 0; i < DuduFinal.length; i++) {
//                      console.log(DuduFinal[i]);
//                 }
//         }
//     }
// NotasFinais(JoaoFinal)
// NotasFinais(LipeFinal)
// NotasFinais(DuduFinal)


const itens = ["Cinto do Gigante", "Espada GPC", "Cajado Desnecesariamente Grande"]

console.log("-- Esses são os itens do TFF --");

function MostrarItens(itens) {
    for (let i = 0; i < itens.length; i++) {
        console.log(itens[i]);
    }
}

MostrarItens(itens)

const campeoes = ["Leona","Quenn","Vex"]

console.log("--  Campeões do TFT --");

function MostrarCampeoes(campeoes) {
    for (let i = 0; i < campeoes.length; i++) {
        console.log(campeoes[i]);
        
    }
}

MostrarCampeoes(campeoes)


const Leona = ["Cinto do Gigante"]
const Quenn  = ["Espada GPC"]
const Vex = ["Cajado Desnecesariamente Grande"]

console.log("-- Esses são os itens que mais combinam com os seguintes campeoes --");

function Combinaçao(Combina) {
    switch (Combina) {
        case Leona:
            console.log("Leona");
            for (let i = 0; i < Leona.length; i++) {
                console.log(Leona[i]);
                
            }
            console.log("---");
            break;
        case Quenn:
            console.log("Quenn");
            for (let i = 0; i < Quenn.length; i++) {
                console.log(Quenn[i]);
                    
            }
            console.log("---");
            break;
            
        case Vex:
            console.log("Vex");
            for (let i = 0; i < Vex.length; i++) {
                console.log(Vex[i])
            }
            break;
        default:
            break;
    }
}
Combinaçao(Leona)
Combinaçao(Quenn)
Combinaçao(Vex)