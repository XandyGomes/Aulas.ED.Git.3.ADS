let frase = 'Socorram-me, subi no ônibus em Marrocos'

let vetor = []

for(let i = 0; i < frase.length; i++){
    vetor.push(frase.charAt(i))
}

vetor.unshift('X')

vetor.splice(11, 5, 'W')

vetor.splice(23, 2)

console.log(vetor)

let reverso = ''

while(vetor.length > 0){
    reverso += vetor.pop()
}

console.log(reverso)