import Deque from './lib/Deque.mjs'

let listaCompra = new Deque()
// console.log(listaCompra.print())
// console.log(listaCompra.isEmpty)

// Alimentício (início)
listaCompra.insertFront('Arroz')
listaCompra.insertFront('Feijão')
listaCompra.insertFront('Macarrão')
console.log(listaCompra.print())

// Higiene/Limpeza (final)
listaCompra.insertBack('Sabão em pó')
listaCompra.insertBack('Desodorante')
listaCompra.insertBack('Água Sanitária')
console.log(listaCompra.print())

listaCompra.insertFront('Café')
listaCompra.insertFront('Açúcar')
console.log(listaCompra.print())

listaCompra.insertBack('Amaciante')
listaCompra.insertBack('Shampoo')
console.log(listaCompra.print())

listaCompra.insertBack('Enxaguante Bucal')
console.log(listaCompra.print())

let removido = listaCompra.removeBack()
console.log({removido})
console.log(listaCompra.print())

console.log("O primeiro da lista é:", listaCompra.peekFront())
console.log("O ultimo da lista é:", listaCompra.peekBack())
