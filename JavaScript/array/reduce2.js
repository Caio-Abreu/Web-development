const Alunos = [
    { nome:'Joao', nota:7.3, bolsista:false},
    { nome:'maria', nota:9.3, bolsista:true},
    { nome:'Pedro', nota:9.8, bolsista:false},
    { nome:'Ana', nota:8.7, bolsista:true}
]

//Desafio 1: todos os alunos sao bolsistas ?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(Alunos.map(a=>a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista ?
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(Alunos.map(a=>a.bolsista).reduce(algumBolsista))