function bubblesort(vetor){
    let trocou

    do {

        trocou = false

        for(let i = 0; i < vetor.length - 1; i++){
            if(vetor[i] > vetor[i + 1]){
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                trocou = true
            }
        }
    } while(trocou)
}

let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

// bubblesort(nums)
// console.log(nums)

import {nomes} from './data/nomes-desord.mjs'

console.time('tempo de ordenação')
bubblesort(nomes)
console.timeEnd('tempo de ordenação')
console.log(nomes)