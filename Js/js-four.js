// Expected Result : 
// [
//   { id: '1', name: 'Sherlock', score: 90 },
//   { id: '4', name: 'Budi', score: 85 }
// ]
// Direction :
// Return array of student for score is bigger than mean score (average score)

const students = [
    {
      id: "1",
      name: "Sherlock",
      score:90
    },
    {
      id: "2",
      name: "Genta",
      score: 75
    },
    {
      id: "3",
      name: "Ai",
      score: 80
    },
    {
      id: "4",
      name: "Budi",
      score:85
    }
  ]
  
  let sumScore = 0
  const len = students.length
  let average = 0
  let collectAverageData = []
  
  
  function result(payload) {
    payload.forEach((item)=>{
    	sumScore+=item.score
    })
    average = sumScore/len
    payload.forEach((item)=>{
    	if(item.score>average){
      	collectAverageData.push(item)
      }
    })
    
    return collectAverageData
  }
  console.log(result(students))
  