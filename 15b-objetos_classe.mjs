import FormaGeometrica from './15a-classe.mjs'

let forma1 = new FormaGeometrica(15, 12, 'R')
let forma2 = new FormaGeometrica(10, 26, 'T')
let forma3 = new FormaGeometrica(20, 10, 'E')
let forma4 = new FormaGeometrica(7.5, 12.3, 'G')
let forma5 = new FormaGeometrica('cebola', 'batata', 'E')

console.log(`Área de um retângulo de 15x12: ${forma1.calculaArea()}`)
console.log(`Área de um triângulo de 10x26: ${forma2.calculaArea()}`)
console.log(`Área de um elipse de 20x10: ${forma3.calculaArea()}`)
console.log('Área de base: 20 altura: 10 tipo: G: ', forma4.calculaArea()) 
console.log('Área de base: batata altura: cebola tipo: E: ', forma5.calculaArea())