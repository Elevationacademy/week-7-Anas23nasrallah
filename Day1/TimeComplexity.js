
/*
1- O(n)
2- O(log(n))
3- O(1)
4- O(nm)
5- O(n)
*/

//6-

const findDuplicates = function (arr) {
    const occurs = {}
    for (element of arr) {
        if (occurs[element]) {
            console.log('there is a duplicate')
            return
        }
        occurs[element] = true
    }
    console.log('no duplicates')
}

//Time complexity: O(n)

//7- 

/* One way is to store all the employees in an object with the ids as keys: */

let employees = {
    ax01: {
        name: "Ray",
        age: 28,
        salary: 1300
    },
    qs84: {
        name: "Lucius",
        age: 31,
        salary: 840
    },
    bg33: {
        name: "Taylor",
        age: 18,
        salary: 2700
    }
}
const findEmployeeSalary = function (employeeID) {
    return employees[employeeID].salary
}

//8-

const findIndex = function (numbers, num) {
    let found = false;
    let start = 0;
    let end = numbers.length
    let index = Math.floor((start + end) / 2);
    while ((end - start) >= 0 ){
        if (numbers[index] === num) {
            found = true;
            break
        } else if (numbers[index] > num) {
            end = index - 1;
            index = Math.floor((start + end) / 2);
        } else if (numbers[index] < num) {
            start = index + 1;
            index = Math.floor((start + end) / 2);
        }
    }
    if (found) {
        return index;
    } else {
        return -1
    }
}

//9-
/*

O(1)       - Green
O(log(n))  - Yellow
O(n)       - Blue
O(n^2)     - Red

*/