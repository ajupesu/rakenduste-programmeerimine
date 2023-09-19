//funktsioonid
function tervitus(name) {
    return "Tere, " + name + "!";
}
console.log(tervitus("koer"))

// arrow funktsioonid
const tervitus2 = (name) => {
    return `Tere, ${name}!`;
};
console.log(tervitus2("kass"))

// shorthand arrow funktsioonid
const tervitus3 = (name) => `Tere, ${name}!`
console.log(tervitus3("ahv"))

// string literals
const name = "Peeter"
const tervitus4 = `Tere, ${name}!`
console.log(tervitus4)

// object literals, ehk objekti loomine
const inimene = {
    nimi: "kevin",
    vanus:30
}
console.log(inimene)

// spread syntax, ehk objekti kloonimine ja laiendamine
const inimeneCopy = {
    ...inimene,
    linn: "Tallinn"
}
console.log(inimeneCopy)

// map, kasutame elementide muutmiseks massiivis
const numbrid = [1,2,3,4,5]
const kordaKaks = numbrid.map((nr) => nr * 2)
console.log(kordaKaks)

// filter, kasutame elementide sorteerimiseks 
const jagubKahega = numbrid.filter((nr) => nr % 2 === 0)
console.log(jagubKahega)

// reduce
const words = ["Tere", "kuidas", "läheb", "?"];

// Kasutame reduce, et ühendada massiivi elemendid
const combinedString = words.reduce((currentValue, nextWord) => {
    return `${currentValue} ${nextWord}`;
});

console.log(combinedString);

// lisa - erinevused == ja === vahel
5 == "5"; // true
5 === "5"; // false

// mis on async/await ja kuidas neid kasutada
// async/await võimaldab asünkroonseid funktsioone selgemalt 
//      kirjutada ja oodata nende tulemusi.
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

// mis on Promise-d ja kuidas kasutada
// Promise on objekt, mis esindab asünkroonset operatsiooni 
//      ja võib olla kasulik async/await kasutamisel.
function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}



