class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if (newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }
    findNode(valuetoFind) {
        const currentValue = this.value
        if (currentValue === valuetoFind) {
            return true
        } else if (valuetoFind < currentValue && this.leftChild) {
            this.leftChild.findNode(valuetoFind)
        } else if (valuetoFind > currentValue && this.rightChild) {
            this.rightChild.findNode(valuetoFind)
        } else {
            return false
        }
    }

    findParents(valuetoFind, parents) {
        const currentValue = this.value
        if (currentValue === valuetoFind) {
            return parents
        } else if (valuetoFind < currentValue && this.leftChild) {
            parents.push(currentValue)
            return this.leftChild.findParents(valuetoFind, parents)
        } else if (valuetoFind > currentValue && this.rightChild) {
            parents.push(currentValue)
            return this.rightChild.findParents(valuetoFind, parents)
        } else {
            return parents
        }
    }

    findCommonParent(value1, value2) {
        const parents1 = this.findParents(value1, [])
        const parents2 = this.findParents(value2, [])
        if (parents1.length > parents2.length) {
            for (let i = parents2.length - 1; i >= 0; i--) {
                if (parents1.includes(parents2[i])) {
                    return parents2[i]
                }
            }
        } else {
            for (let i = parents1.length - 1; i >= 0; i--) {
                if (parents2.includes(parents1[i])) {
                    return parents1[i]
                }
            }
        }
    }
    handleDeleteNode(node) {
        let right = node.rightChild
        let left = node.leftChild
        if (!left && !right) {
            node = null
            return
        } else if (!left) {
            node = right
            right = null
        } else if (!right) {
            node = left
            left = null
        } else {
            let minValueNode
            let minValueNodeParent
            while (right.leftChild) {
                minValueNode = right.leftChild
                minValueNodeParent = right
                right = right.leftChild
            }
            node = minValueNode
            minValueNodeParent.left = minValueNode.rightChild
            minValueNode = null

        }
    }
    findAndDeleteNode(value, parentValue) {
        if (this.value === parentValue) {
            if (this.rightChild.value === value) {
                this.handleDeleteNode(this.rightChild)
            }else if(this.leftChild.value === value){
                this.handleDeleteNode(this.leftChild)
            }
        }else if(this.value > parentValue){
            return this.findAndDeleteNode(this.leftChild)
        }else{
            return this.findAndDeleteNode(this.rightChild)
        }
    }

}


// let right = this.rightChild.rightChild
                // let left = this.rightChild.leftChild
                // if (!left && !right) {
                //     this.rightChild = null
                //     return
                // } else if (!left) {
                //     this.rightChild = right
                // } else if (!right) {
                //     this.rightChild = left
                // } else {
                //     let minValueNode
                //     while (right.leftChild) {
                //         minValueNode = right.leftChild
                //         right = right.leftChild
                //     }
                //     right = null
                //     this.rightChild = minValueNode
                // }