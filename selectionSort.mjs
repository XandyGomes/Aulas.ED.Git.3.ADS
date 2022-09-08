function selectionSort(vetor){
   
    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        
        let posMenor = posSel + 1
        
        for(let i=posMenor+1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]) posMenor = i
        }



    }
}