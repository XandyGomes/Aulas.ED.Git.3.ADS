import Queue from "./lib/Queue.mjs"

let fila = new Queue()
// fila.print()

fila.enqueue('Alexandre')
fila.enqueue('Maria')
fila.enqueue('José')
fila.enqueue('João')

console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())

fila.enqueue('Joaquim')
console.log(fila.print())

let proximo = fila.peek()
console.log({proximo})