// pessoa -> 123 {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }


// quando congelado o objeto nao podera mais utilizado e-
// sera constante
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
console.log(pessoa)
