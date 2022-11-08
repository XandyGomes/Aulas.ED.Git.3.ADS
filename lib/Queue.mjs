export default class Queue {

    #data

    constructor(){
        this.#data = []
    }

    enqueue(val){
        this.#data.push(val)
    }

    dequeue(){
        return this.#data.shift()
    }

    peek(){
        return this.#data[0]
    }

    get isEmpty(){
        return this.#data.length === 0
    }

    // print(){
    //     return console.log(JSON.stringify(this.#data))
    // }

    print() {
        let output = '[ '
        for(let i = 0; i < this.#data.length; i++) {
          if(output !== '[ ') output += ', '
          output += `(${i}): ${this.#data[i]}`
        }
        return output + ' ]'
      }

}