const listaDeNumeros = [2, 16, 42, 68]
let maiorNumero = (listaDeNumeros[0])

for (const numero of listaDeNumeros){
    if (numero > maiorNumero){
        maiorNumero = numero
    }
}

console.log(`O maior número na lista é: ${maiorNumero}`);