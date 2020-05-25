//1-

const printStars = function (num) {
    let line = ''
    for (let i = 1; i <= num; i++) {
        line += '*'
        console.log(line)
    }
}

//2-

const printBackwardsStars = function (num) {
    let line = ''
    for (let i = 1; i <= num; i++) {
        line += '*'
    }
    for (i = 0; i < num; i++) {
        console.log(line.substring(0, line.length - i))
    }
}

//3-

const printStarSeries = function (num, count) {
    for (let i = 0; i < count; i++) {
        printStars(num)
        printBackwardsStars(num - 1)
        console.log()
    }
}

//4-

const reverse = function (str) {
    let reversed = ''
    for (i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

//5-

const isPalindrom = function (str) {
    str = str.toLowerCase()
    str = str.replace(/\s/g, '')
    const lastIndex = str.length - 1
    for (i = 0; i <= Math.floor(str.length / 2); i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false
        }
    }
    return true;
}

//6-

const encrypt = function (str) {
    let encrypted = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'z') {
            encrypted += 'a'
            continue
        }
        let code = str.charCodeAt(i)
        encrypted += String.fromCharCode(code + 1)
    }
    return encrypted
}

//7-

const decrypt = function (str) {
    let decrypted = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            decrypted += 'z'
            continue
        }
        let code = str.charCodeAt(i)
        decrypted += String.fromCharCode(code - 1)
    }
    return decrypted
}

//8-

const jumble = function (arr1, arr2) {
    let jumbledArr = []
    let totalItemsNum = arr1.length + arr2.length;
    while (totalItemsNum > 0) {
        if (Math.random() >= 0.5) {
            if (arr1.length) {
                jumbledArr.push(arr1.splice(Math.floor(Math.random() * arr1.length), 1)[0])
                totalItemsNum--
            }
        }
        else {
            if (arr2.length) {
                jumbledArr.push(arr2.splice(Math.floor(Math.random() * arr2.length), 1)[0])
                totalItemsNum--
            }
        }
    }
    return jumbledArr
}

//9-

const getLetter = function (rawDist) {
    const letters = []
    const distributions = []
    for (let letter in rawDist) {
        distributions.push(rawDist[letter])
        letters.push(letter)
    }
    ranges = []
    ranges[0] = distributions[0]
    for (let i = 1; i < distributions.length; i++) {
        ranges[i] = ranges[i - 1] + distributions[i]
    }
    let randomNum = Math.floor((Math.random() * 100) + 1)
    for(let i in ranges){
        if(randomNum <= ranges[i]){
            return letters[i]
        }
    }
}

const test = function(numOfRuns, rawDist){
    const counter = {}
    for(let i = 0; i < numOfRuns; i++){
        letter = getLetter(rawDist)
        if(counter[letter]){
            counter[letter]++
        }else{
            counter[letter] = 1
        }
    }
    console.log(counter)
    for (let letter in counter) {
        console.log(`We got ${letter} ${(counter[letter] / numOfRuns) * 100}% of the times`)
    }
}

const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}