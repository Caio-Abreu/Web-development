const Alunos = [
    { nome:'Joao', nota:7.3, bolsista:false},
    { nome:'maria', nota:9.3, bolsista:true},
    { nome:'Pedro', nota:9.8, bolsista:false},
    { nome:'Ana', nota:8.7, bolsista:true}
]

const resultado = Alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
})

console.log(resultado)