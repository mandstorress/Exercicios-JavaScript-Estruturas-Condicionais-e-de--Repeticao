let numeroSorteado
const numeroAlvo = 8

do {
    numeroSorteado = Math.floor(Math.random() * 10) + 1
    console.log(`O número sorteado foi: ${numeroSorteado}`)
} while (numeroSorteado !== numeroAlvo)

console.log("\nFinalmente! O número 8 foi sorteado.")