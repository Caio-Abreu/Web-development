// como funciona o map
Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.45}',
    '{"nome": "Kit lapis", "preco": 41.45}',
    '{"nome": "Caneta", "preco": 7.45}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)