//1,2

class Matrix {
    constructor(r, c) {
        this.matrix = this.generateMatrix(r, c)
    }
    generateMatrix(r, c) {
        let counter = 1
        let matrix = [];
        for (let i = 0; i < r; i++) {
            let row = []
            for (let j = 0; j < c; j++) {
                row.push(counter++)
            }
            matrix.push(row)
        }
        return matrix
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    get(r, c) {
        return this.matrix[r][c]
    }

    alter(r, c, value) {
        this.matrix[r][c] = value
    }

    printRow(r) {
        console.log(this.matrix[r])
    }

    printColumn(c) {
        for (let r of this.matrix) {
            console.log(r[c])
        }
    }

    findCoordinate(value) {
        let rowCounter = 0
        for (let r of this.matrix) {
            for (let c in r) {
                if (r[c] === value) {
                    return { x: c, y: rowCounter }
                }
            }
            rowCounter++
        }
    }
}

//3-6
class EmployeeMatrix extends Matrix {

    loadData(salaryData) {
        let matrix = []
        for (let element of salaryData) {
            let row = [];
            for (let key in element) {
                row.push(element[key])
            }
            matrix.push(row)
        }
        this.matrix = matrix
    }

    getEmployees(department) {
        let employees = []
        for (let r of this.matrix) {
            if (r[2] === department) {
                employees.push(r[1])
            }
        }
        return employees
    }
    getTotalSalary(department) {
        let salary = 0
        for (let r of this.matrix) {
            if (r[2] === department) {
                salary += r[3]
            }
        }
        return salary
    }
    findRichest() {
        let richestRow = this.matrix[0]
        for (let r = 1; r < this.matrix.length; r++) {
            if (this.matrix[r][3] > richestRow[3]) {
                richestRow = this.matrix[r]
            }
        }
        return richestRow[1]
    }
}

//7-9

class TicTacToe extends Matrix {
    constructor(){
        super()
        this.currentPlayer
    }
    loadBoard() {
        let matrix = []
        for (let i = 0; i < 3; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push('.')
            }
            matrix.push(row)
        }
        this.matrix = matrix
    }

    isVictory() {
        let victory = false
        let victoriousSign = null
        if (this.matrix[1][1] !== '.') {
            if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
                victory = true
                victoriousSign = this.matrix[0][0]
            } else if (this.matrix[2][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[0][2]) {
                victory = true
                victoriousSign = this.matrix[2][0]
            }
        }
        for (let r of this.matrix) {
            if (r[0] === r[1] && r[1] === r[2] && r[0] !== '.') {
                victory = true
                victoriousSign = r[0]
            }
        }
        for (let i = 0; i < 3; i++) {
            if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[1][i] === this.matrix[2][i] && this.matrix[0][i] !== '.') {
                victory = true
                victoriousSign = this.matrix[0][i]
                break
            }
        }
        return { victory, victoriousSign }
    }

    play(r, c, player) {
        if(player === this.currentPlayer){
            console.log('It is not allowed to play twice in a row')
            return
        }
        this.currentPlayer = player
        if (this.get(r, c) === '.') {
            if (player === 1) {
                this.alter(r, c, 'x')
            } else if (player === 2) {
                this.alter(r, c, 'o')
            }
            const victoryObj = this.isVictory()
            if (victoryObj.victory) {
                if (victoryObj.victoriousSign === 'o') {
                    console.log('Congratulations Player 2')
                } else {
                    console.log('Congratulations Player 1')
                }
                this.loadBoard()
            }
        } else {
            console.log('this spot is already taken')
        }
    }
}
