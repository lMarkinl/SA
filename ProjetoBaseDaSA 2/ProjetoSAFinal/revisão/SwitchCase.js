// function codigo(codigo) {

//     switch (codigo) {
//         case 192168015:
//             console.log("Chuteira");
//             break;
//         case 192168001:
//             console.log("Camisa");
//             break
//         case 192168101:
//             console.log("Bola");
//             break;
//         default:
//             break;
//     }
// }
// codigo(192168015)



// function codigo (codigo) {
//     switch (codigo) {
//         case 1:
//             console.log("Deu bom");
//             break;
//         case 2:
//             console.log("Se pa não de bom");
//             break
//         default:
//             console.log("É... Deu ruim");
//             break;
//     }
// }
// codigo(Math.floor(Math.random()*3))

function objetos(objetos) {
    switch (objetos) {
        case 1:
            console.log("A Mesa custa : R$40,00");
            break;
        case 2:
            console.log("O Armario custa : R$80,00");
            break;    
        case 3:
            console.log("A Bola custa : R$4,00");
            break;
    
        default:
            console.log("Objeto Não identificado");
            
    }
}
objetos(Math.floor(Math.random()*5))