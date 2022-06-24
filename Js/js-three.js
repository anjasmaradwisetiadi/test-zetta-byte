// Expected Result : 4200
// Direction :
// Find and returns the largest value

const item = [
    {
      name: 'spoon',
      details: {
        value: 4120,
      },
    },
    {
      name: 'fork',
      details: {
        value: 4200,
      },
    },
    {
      name: 'plate',
      details: {
        value: 2032,
      },
    },
  ];
  
  let max=0
  
  function result(item) {
    item.forEach((item)=>{
        if(item.details.value>max){
          max = item.details.value
      }
    })
    return max
  }
  
  console.log(result(item));