function mergeSort(vetor){
    if(vetor.length < 2) return vetor
    let meio = Math.floor(vetor.length / 2)

    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio)

    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    let posEsq = 0
    let posDir = 0
    let vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else if(vetDir[posDir] < vetEsq[posEsq] ){
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }

    let sobra

    if(posEsq < posDir){
        sobra = vetEsq.slice(posEsq)
    } else {
        sobra = vetDir.slice(posDir)
    }

    return [...vetRes, ...sobra]  //notação spread

}

let nums = [ 5, 3 , 1 , 4 , 2 ]

let numsOrd = mergeSort(nums)

console.log({numsOrd})