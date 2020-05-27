//1-

const findFactorial = function (num) {

    if (num === 1) {
        return num
    }
    return num * findFactorial(num - 1)
}

//2-

const reverseString = function (str, reversed) {

    if (str.length === 0) {
        return reversed
    }
    let lastLetter = str.substring(str.length - 1, str.length)
    str = str.substring(0, str.length - 1)
    return reverseString(str, reversed + lastLetter)
}

//3-

const swap = function (arr1, arr2) {
    if (arr1.length === 0) {
        return arr2
    }
    arr2.push(arr1[0])
    arr1.shift()
    return swap(arr1, arr2)
}

//Extension 

class Stack {
    constructor() {
        this.stack = []
        this.length = 0
    }

    print() {
        console.log(this.stack)
    }

    push(x) {
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
        return delete this.stack[this.length]
    }
}

const swapStacks = function (stack1, stack2, stack3) {
    if (stack1.isEmpty()) {
        if (stack3.isEmpty()) {
            return stack2
        } else {
            let element = stack3.peek()
            stack2.push(element)
            stack3.pop()
            return swapStacks(stack1, stack2, stack3)
        }
    }
    let element = stack1.peek()
    stack3.push(element)
    stack1.pop()
    return swapStacks(stack1, stack2, stack3)
}

const swapStacksLihi = function (stack1, stack2) {
    if (stack1.isEmpty()) {
        return stack2
    }
    let temp = stack1.peek()
    stack1.pop()
    swapStacksLihi(stack1, stack2)
    stack2.push(temp)
}