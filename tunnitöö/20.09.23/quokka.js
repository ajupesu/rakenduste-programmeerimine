//console.log(1 =='1')
//console.log(1 === '1')

;(() => {
  console.log("hi")
})()

const a = 1
const b = 2

console.log(a + b)

let actuallyANumber = "1"
console.log(parseInt(actuallyANumber))
console.log(+actuallyANumber)
;(async () => {
  const myPromise = () =>
    new Promise(resolve =>
      setTimeout(() => resolve("myPromise() resolved in 100ms"), 100)
    )

  const myPromise2 = new Promise(resolve =>
    setTimeout(() => resolve("myPromise2 resolved in 200ms"), 200)
  )

  const asyncAwait = async () => {
    const myPromiseResponse = await myPromise()
    const myPromiseResponse2 = await myPromise2

    return { myPromiseResponse, myPromiseResponse2 }
  }

  console.log(await asyncAwait())
})()

const x = 1,
  y = 2,
  z = 3

let u = 5
let i = 99

;[u, i] = [i, u]

console.log({ i, u })

const numbrid = [1, 2, 3, 4, 47]
let number = numbrid[4]
console.log(number)
;(() => {
  const testNumbrid = () => [5, 6, 7, 8, 99]

  const deconstruct = () => {
    const [b, , d, , a] = testNumbrid()

    return { a, b, d }
  }

  console.log(deconstruct())
})()

const mina = {
  nimi: "Aksel",
  kool: "TLU",
  "unistused jne": "🍗"
}
console.log(mina.nimi)
console.log(mina.nimi + " " + mina.kool)
console.log(mina["unistused jne"] + mina["nimi"])
