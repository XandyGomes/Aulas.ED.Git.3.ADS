export default class FormaGeometrica{
    #base
    #altura
    #tipo

    constructor(base, altura, tipo){
        this.#base = base
        this.#altura = altura
        this.#tipo = tipo
    }

    get base(){
        return this.#base
    }

    get altura(){
        return this.#altura
    }

    get tipo(){
        return this.#tipo
    }

    set base(valor){
        this.#base = valor
    }

    set altura(valor){
        this.#altura = valor
    }

    set tipo(valor){
        this.#tipo = valor
    }

    calculaArea() {
        switch(this.tipo) {
            case 'R':
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2
            case 'E':
                return (this.base / 2 ) * (this.altura / 2) * Math.PI
            default:
                return null
        }
    }
}