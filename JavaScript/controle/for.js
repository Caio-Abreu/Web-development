const notas = [6.7, 7.4, 8.1, 9.8, 7.7]

for (i in notas){
    console.log(i, notas[i])
}

const pessoa ={
    nome: 'Ana',
    sobrenome: 'silva',
    idade:29,
    peso: 64
}

for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}