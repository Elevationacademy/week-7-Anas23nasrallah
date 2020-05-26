class MinStack {

    constructor() {
        this.orderedStack = []
        this.stack = []
        this.length = 0
    }

    print() {
        console.log(this.stack)
    }

    push(x) {
        if (this.length) {
            if (this.orderedStack[0] > x) {
                this.orderedStack.unshift(x)
            } else if(this.orderedStack[this.orderedStack.length - 1] < x){
                this.orderedStack[this.orderedStack.length]  = x
            } else {
                for (let i = this.orderedStack.length - 1; i > 0; i--) {
                    if (this.orderedStack[i] < x) {
                        this.orderedStack.splice(this.orderedStack.length - i - 1, 0, x)
                    }
                }
            }
        } else {
            this.orderedStack[this.length] = x
        }
        this.stack[this.length] = x
        this.length++
    }

    isEmpty() {
        return this.length === 0
    }

    peek() {
        return this.isEmpty() ? null : this.stack[this.length - 1]
    }

    pop() {
        if (this.isEmpty()) {
            return null
        }
        this.length--
        const toDelete = this.stack[this.length]
        for(let i in this.orderedStack){
            if (this.orderedStack[i] === toDelete){
                this.orderedStack.splice(i, 1)
            }
        }
        return delete this.stack[this.length]
        
    }

    getMin() {
        return this.orderedStack[0]? this.orderedStack[0]: null
    }
}

