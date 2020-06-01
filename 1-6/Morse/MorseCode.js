const BSTree = require('./BinarySearch')
const alphabet = require('./alphabet')

class ScoreTree extends BSTree {
    constructor(value, score) {
        super(value)
        this.score = score
    }
    insertNode(key, score) { //this function inserts a letter into the morse code tree - this should run once in the beginning
        if (!this.value) {
            this.value = key
            this.score = score
        }
        else if (score > this.score && this.rightChild) {
            this.rightChild.insertNode(key, score)
        }
        else if (score <= this.score && this.leftChild) {
            this.leftChild.insertNode(key, score)
        }
        else if (score <= this.score) {
            this.leftChild = new ScoreTree(key, score)
        }
        else {
            this.rightChild = new ScoreTree(key, score)
        }
    }
    fromLetterToMorse(letter, path) {
        const score = alphabet[letter]
        if (this.value === letter) {
            return path
        } else if (this.score > score) {
            path += '.'
            return this.leftChild.fromLetterToMorse(letter, path)
        } else {
            path += '-'
            return this.rightChild.fromLetterToMorse(letter, path)
        }
    }
    fromMorseToLetter(morseLetter){
        let currNode = this
        for(let symbol of morseLetter){
            if(symbol === '.'){
                currNode = currNode.leftChild
            }else{
                currNode = currNode.rightChild
            }
        }
        return currNode.value
    }
    translateWord(word) {
        word = word.toUpperCase()
        let translatedToMorse = ''
        for(let letter of word){
            if(letter === ' '){
                translatedToMorse += '/'
                continue
            }
            let pathToLetter = this.fromLetterToMorse(letter, '')
            pathToLetter += ' '
            translatedToMorse += pathToLetter
        }
        
        translatedToMorse = translatedToMorse.slice(0, -1)
        return translatedToMorse
    }

    translateMorse(morseWord) {
        let translatedToWord = ''
        const morseLetters = morseWord.split(' ')
        for(let morseLetter of morseLetters){
            if(morseLetter === '/'){
                translatedToWord += ' '
                continue
            }
            translatedToWord += this.fromMorseToLetter(morseLetter)
        }
        console.log(translatedToWord)
        return translatedToWord.slice(0, -1)
    }
}

