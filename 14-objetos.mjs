let forma1 = {
    base: 15,
    altura: 12,
    tipo: 'R'   //Retângulo
}

let forma2 = {
    base: 10,
    altura: 26,
    tipo: 'T'   //Triângulo
}

let forma3 = {
    base: 20,
    altura: 10,
    tipo: 'E'   //Elipse
}

let forma4 = {
    base: 7.5,
    altura: 12.3,
    tipo: 'G'   //???
}

let forma5 = {
    base: 'batata',
    altura: 'cebola',
    tipo: 'E'
}

function calculaArea(forma) {
    switch(forma.tipo) {
        case 'R':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura / 2
        case 'E':
            return (forma.base / 2 ) * (forma.altura / 2) * Math.PI
        default:
            return null
    }
}

console.log(`Área de um retângulo de 15x12: ${calculaArea(forma1)}`)
console.log(`Área de um triângulo de 10x26: ${calculaArea(forma2)}`)
console.log(`Área de uma elipse de 20x10: ${calculaArea(forma3)}`)
console.log(`Área de (${JSON.stringify(forma4)}): ${calculaArea(forma4)}`)
console.log(`Área de (${JSON.stringify(forma5)}): ${calculaArea(forma5)}`)