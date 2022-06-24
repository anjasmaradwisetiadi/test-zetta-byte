// Expected Result : 4200
// Direction :
// Find and returns the largest value
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const midLength = Math.floor(input.length/2)
  const nums = input.sort((a,b)=> a-b )
  return input.length % 2 !== 0 ? nums[midLength] : ((nums[midLength-1]+ nums[midLength])/2)
}

console.log(result(input));