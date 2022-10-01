/*
Fatorial é um número natural inteiro positivo, o qual é representado por n!
O fatorial de um número é calculado pela multiplicação desse número por todos
os seus antecessores até chegar ao número 1.
*/

function fatorial(n){
    let res = 1
    for(let i = n; i > 1; i--){
        res *= i
    }return res
}

console.log('Fatorial de 10: ', fatorial(10))