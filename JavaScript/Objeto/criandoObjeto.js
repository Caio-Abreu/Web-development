// usando a notação literal 
const obj1 = {}


//Objeto em JS
const obj2 = new Object


// funçoes construtoras

function produto(nome,preco,desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new produto('Caneta', 7.99,0.15)
const p2 = new produto('Notebook', 2999, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory 
function  criarFuncionario(nome, salarioBase,faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30-faltas)
        }
    }
    
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
filha.idade = 18
console.log(filha)

// Função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)