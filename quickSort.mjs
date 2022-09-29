function quickSort(vetor, ini = 0, fim = vetor.length - 1){
    if(fim <= ini) return

    const pivot = fim
    let div = ini - 1

    for(let i = ini; i < fim; i++){
        if(vetor[pivot] > vetor[i]){
            div++
            if(div !== i){
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
            }
        }
    }
    div++
    if(vetor[div] > vetor[pivot] && div !== pivot){
        [vetor[div], vetor[pivot]] = [vetor[pivot], vetor[div]]
    }

    quickSort(vetor, ini, div - 1)
    quickSort(vetor, div + 1, fim)
}

// let nums = [2, 5, 7, 1, 6, 3, 4]

// quickSort(nums)

// console.log(nums)

import { nomes } from './data/nomes-desord.mjs'

quickSort(nomes)

console.log(nomes)