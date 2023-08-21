const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 3, name: 'quq', price: 13 }
  ];

//  prompts 1-6
// const name = window.prompt("Enter item name", "foo")

// const found = items.find((item) => {
//     if(item.name === name){
//         return true
//     }else{
//         return false
//     }
// })

// if(found){
//     console.log("Found it!")
//     console.log(found)
// }else{
//     console.log("Nothing found")
//     console.log(found)
// }


//7-8

// const search = window.prompt("Enter search term")

// const foundItems = items.filter((item) => {
//     if(!item.name.includes(search)){
//         return false
//     }else{
//         return true
//     }
// })

// console.log(foundItems)

//9

// const keyForMapping = window.prompt("Enter ID, name, or price")

// const mappedValues = items.map((item) => {
//     return item[keyForMapping]
// })

// console.log(mappedValues)

//10
const sumPrompt = window.prompt("Choose to add up all ID or price")

const reduction = items.reduce((accumulate, current) => {
    accumulate = accumulate + current[sumPrompt]
    return accumulate
}, 0)

console.log(reduction)