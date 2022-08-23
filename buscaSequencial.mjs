function buscaSequencial(vetor, valorBusca){
    for(let i=0; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i
    }
    return -1
}

// const frutas = ['laranja', 'maça', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão']

// console.log('Posição de uva = ', buscaSequencial(frutas, 'uva'))
// console.log('Posição de abacate = ', buscaSequencial(frutas, 'abacate'))
// console.log('Posição de mamão = ', buscaSequencial(frutas, 'mamão'))

import {nomes} from './data/vetor-nomes.mjs'

console.time()
console.log('Posição de ALEXANDRE...', buscaSequencial(nomes, 'ALEXANDRE'))
console.timeEnd()