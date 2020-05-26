class Queue {
    
    constructor() {
        this.stack = []
        this.length = 0
    }

    print() {
        console.log(this.stack)
    }

    enqueue(x) {
        this.stack[this.length] = x
        this.length++
    }

    isEmpty() {
        return this.length === 0
    }

    peek() {
        return this.isEmpty() ? null : this.stack[0]
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        this.length--
        return delete this.stack[0]
    }
}

module.exports = Queue
export { Queue }