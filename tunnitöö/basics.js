const numbers =[1,2,3,4,5,6,7,8,9]
console.log(numbers [3])
console.log(numbers.indexOf(4))

function findMyIndex(numbers, element){
    return numbers.indexOf(element)
}

console.log(findMyIndex(numbers, 4))

//arrow functions

function add(a, b){
    return a+b
}

console.log(add(1,7))