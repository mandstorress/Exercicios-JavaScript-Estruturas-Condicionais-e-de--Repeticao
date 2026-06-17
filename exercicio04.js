const diaDaSemana = 6
let nomeDoDia

switch (diaDaSemana){
    case 1:
        nomeDoDia = "Domingo"
        break;
    case 2:
        nomeDoDia = "Segunda-Feira"
        break;
    case 3:
        nomeDoDia = "Terça-Feira"
        break;
    case 4:
        nomeDoDia = "Quarta-Feira"
        break;
    case 5: 
        nomeDoDia = "Quinta-Feira"
        break;
    case 6:
        nomeDoDia = "Sexta-Feira"
        break;
    case 7:
        nomeDoDia = "Sábado"
        break;
    default:
        nomeDoDia = "Dia inválido"
}

console.log(nomeDoDia)