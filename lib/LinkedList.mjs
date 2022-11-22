class Node{
    data
    next

    constructor(val){
        this.data = val
        this.next = null
    }

}

export default class LinkedList {

    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get isEmpty(){
        return this.#count === 0
    }

    get count(){
        return this.#count
    }

    insert(pos, val){
        const inserted = new Node(val)

        if(this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted

        }else if(pos === 0){
            inserted.next = this.#head
            this.#head = inserted

        }else if(pos >= this.#count){
            this.#tail.next = inserted
            this.#tail = inserted  

        }else{

            let before = this.#head

            for(let i = 1; i < pos; i++){
                before = before.next
            }
            let after = before.next

            inserted.next = after
            before.next = inserted

        }

        this.#count++

    }

    remove(pos){

        //1º caso
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        let removed

        //2º
        if (pos === 0){
            removed = this.#head
            this.#head = this.#head.next

            if(this.#count === 1){
                this.#tail = null
            }
        }

        //3º caso

        else {
            let before = this.#head

            for(let i = 1; i < 2; i++){
                before = before.next
            }

            removed = before.next

            let after = removed.next

            before.next = after 

            if(pos === this.#count -1){
                this.#tail = before
            }
        }


        this.#count--

        return removed.data
    }
    
    print() {
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            if (output !== '( ') output += ', '
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += ` ), Quantidade: ${this.#count}`
        return output
    }
    

}