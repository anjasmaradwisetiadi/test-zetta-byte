// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let collectOne = []
let collectTwo = []
let collectJoin = []

function result(number) {
    number.forEach((val)=>{
        const modulo = val%2
        if(modulo){
            collectOne.push(val)
        } else{
            collectTwo.push(val)
        }
    })
    collectJoin.push(collectOne, collectTwo)
    return collectJoin
}

console.log(result(number));
