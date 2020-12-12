const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.45}',
    '{"nome": "Kit lapis", "preco": 41.45}',
    '{"nome": "Caneta", "preco": 7.45}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

