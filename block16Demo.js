const arr = [1,2,3,4,5,7]

// arr.forEach(
//     (element, idx) => {
//     console.log(element, idx)
//     }
// )

const mappedArr = arr.map((element) => {

    return element*2

})
//console.log(mappedArr)

const mappingAgain = arr.map(element => element*2)
//console.log(mappingAgain)

const findArr = ["test","bad apple", "apple",  "nothing"]
const result = findArr.find((notWord) => {
    return notWord.includes("apple")
})

const filteredArr = findArr.filter((element) => {
    return element.includes("apple")
})

// console.log(filteredArr)

// console.log(result)

function test () {
    console.log("test")
}

const arrowTest = () => {
    console.log("arrow")
}


// const product = arr.reduce((accumulate, current) => {
//     console.log("acc ==> ", accumulate)
//     console.log("current ==> ", current)
//     console.log("result ==>", accumulate + current)
//     accumulate = accumulate + current

//     return accumulate
// })

const evenOdds = arr.reduce((accumulate, current) => {
    if(current%2 === 0){
        accumulate.even.push(current)
    }else{
        accumulate.odd.push(current)
    }
    return accumulate
}, {even:[], odd: []})

//console.log(evenOdds)

//console.log(product)
//console.log(1*2*3*4*5*7)

const sortedArray = [23, 4, 67, 100, 3, 49]
//[3, 4, 23, 49, 67, 100]
console.log(sortedArray.sort((a,b) => {
    return a-b
}))