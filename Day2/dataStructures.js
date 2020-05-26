class UniqueArray {

    constructor() {
        this.data = {}
        this.length = 0
    }

    add(item) {
        if (this.data[item] === undefined) {
            this.data[item] = this.length
            this.length++
        }
    }

    showAll() {
        if (this.length) {
            let string = '['
            for (let key in this.data) {
                string += key + ', '
            }
            console.log(string.substring(0, string.length - 2) + ']')
        } else {
            console.log('[]')
        }
    }

    exists(item) {
        return (this.data[item] === undefined) ? false : true
    }

    get(index) {
        for (let key in this.data) {
            if (this.data[key] === index) {
                return key
            }
        }
        return -1;
    }
}
