const pilotos = ['Vettel', 'Aloson', 'Raikkonen', 'Massa']
pilotos.pop() // massa sai
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2) // novo array
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1,4) // vai pegar do 1 ao terceiro elemento
console.log(algunspilotos2)