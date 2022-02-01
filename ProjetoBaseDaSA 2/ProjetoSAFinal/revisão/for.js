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



const jogos = ["Lol", "Cs", "Dota", "R6"]

function MeusAmigosJogao(jogos) {
    console.log("Jogos :");
    for (let i = 0; i < jogos.length; i++) {
        console.log(jogos[i]);
    }
}

MeusAmigosJogao(jogos)



const amigos = ["Jonas","Dudas","Lipas","Marcas"]

function MeusAmigos(amigos) {
    console.log("---");
    console.log("Amigos:");
    for (let i = 0; i< amigos.length; i++) {
      console.log(amigos[i]);
       
    }
}
MeusAmigos(amigos)

const Jonas = ["Lol"]
const Dudas = ["Lol", "R6"]
const Lipas = ["Lol", "Cs", "Dota", "R6"]
const Marcas = ["Lol", "Cs"]

console.log("--Jogos que cada um joga--");

function QuaisJogosNosJogamos(quais) {
    
    switch (quais) {
        case Jonas:
            console.log("--Jonas--");
            for (let i = 0; i < Jonas.length; i++) {
                console.log(Jonas[i]);
            }
            break;
        case Dudas:
            console.log("--Dudas--");
            for (let i = 0; i < Dudas.length; i++) {
                console.log(Dudas[i]);
                
            }
        
            break;
        case Lipas:
            console.log("--Lipas--");
            for (let i = 0; i < Lipas.length; i++) {
                console.log(Lipas[i]);
                    
            }
            
            break;
        case Marcas:
            console.log("--Marcas--");
            for (let i = 0; i < Marcas.length; i++) {
                console.log(Marcas[i]);
            }
            break;    
    }
}
QuaisJogosNosJogamos(Jonas)
QuaisJogosNosJogamos(Dudas)
QuaisJogosNosJogamos(Lipas)
QuaisJogosNosJogamos(Marcas)