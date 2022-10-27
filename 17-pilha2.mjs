import Stack from './lib/Stack.mjs'

let pilha = new Stack()

console.log('A pilha está vazia?', pilha.isEmpty)
console.log(pilha.print())

pilha.push(10)
pilha.push(20)
pilha.push(30)

console.log('A pilha está vazia?', pilha.isEmpty)
console.log(pilha.print())

console.log('o ultimo é o:', pilha.peek())

let removido = pilha.pop()
console.log({removido})

console.log('o ultimo é o:', pilha.peek())
removido = pilha.pop()

console.log({removido})

console.log(pilha.print())
