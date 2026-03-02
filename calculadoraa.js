// 🔹 Função para calcular o nível do jogador
function calcularRank(vitorias, derrotas) {
    
    // Operador matemático
    let saldoVitorias = vitorias - derrotas;

    let nivel;

    // Estrutura de decisão
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// 🔹 Lista de jogadores para testar (usando laço de repetição)
let jogadores = [
    { vitorias: 8, derrotas: 3 },
    { vitorias: 25, derrotas: 10 },
    { vitorias: 95, derrotas: 20 },
    { vitorias: 120, derrotas: 30 }
];

// 🔹 Laço de repetição
for (let i = 0; i < jogadores.length; i++) {
    let resultado = calcularRank(jogadores[i].vitorias, jogadores[i].derrotas);

    console.log(
        `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
    );
}