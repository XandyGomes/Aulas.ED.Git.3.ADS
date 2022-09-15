function selectionSort(vetor){
   
    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        
        let posMenor = posSel + 1
        
        for(let i=posMenor+1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]) posMenor = i
        }

        if(vetor[posSel] > vetor[posMenor]){
            [ vetor[posSel], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSel] ]
        }
    }
}

// let nums = [ 99, 0, 22, 33, 99, 55, 88, 0, 66, 11 ]

// console.time()
// selectionSort(nums)
// console.timeEnd()

// console.log(nums)

import {nomes} from './data/nomes-desord.mjs'

console.time()
selectionSort(nomes)
console.timeEnd()

console.log(nomes)