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

const arrowFunction = (n1, n2) => {
    return n1 + n2
}
console.log(arrowFunction(3,5))

const arrowFunction2 = (n1, n2) => n1 + n2
console.log(arrowFunction2(5,5))

//const arrow = () => {}
//const arrow = () => (return)

function addNumbers2(num1, num2){
    return function addNumbersHelper(num2){
        return num1 + num2
    }
}

console.log(addNumbers2(3)(4))


const addNumbers4 = (num1) => (num2) => num1 + num2;
console.log(addNumbers4 (18)(16))


const myname = "aksel"
const name = `name is ${myname}`
// ${variableName}

console.log(name)

const nameString = (name) => `name is ${myname}`
console.log(nameString("aksel"))


const numberArray = [1,2,3,4,5,6]

const newArray = numberArray.map((n) => n + 5)

console.log(newArray)

//const filteredArray = numberArray.map(element => element + 5)

const testArray = numberArray.map((element, index, array) => {
    console.log({
        element, 
        newElement: element + 5, 
        "index": index, 
        array
    })

    return element
})

const filteredArray = numberArray.filter(element => element < 4)

console.log({numberArray, filteredArray})

console.log(1<4)

const nimed =['juku', 'mari', 'peeter','jaan']

const data = nimed.map(name =>{
    return {
        name,
        age: name.length +20,
        email: name.toLowerCase()+"@gmail.com",
        address: name + " Street 69",
        username: name.split("").reverse().join("")
        
    }
})

//tahan lisada pikkuse

const newJuku = {
    ...data[0],
    height: 175
}

const evenNewerJuku = {
    ...data[0],
    age: 99
}

console.log(data[0])
console.log(newJuku)
console.log(evenNewerJuku)
//const data = nimed.map(nimi => ({nimi:...}))