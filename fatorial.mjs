/*
5! = 5 * 4 * 3 * 2 * 1 (120)
4! = 4 * 3 * 2 * 1 (24)

casos especiais

1! = 1
0! = 1

*/

function fatorial(n){
    let res = 1
    for(let i = n; i > 1; i--){
        res = res * i
    } return res
}

console.log('Fatorial de 10: ', fatorial(10))