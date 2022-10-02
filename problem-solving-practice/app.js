function largest(numArr) {
  let largestNum = 0
  
  for(var i = 0; i < numArr.length; i++) {
    if(numArr[i] > largestNum) 
      largestNum = numArr[i]
    }
    return largestNum
  }
  
  console.log(largest(["6", "13", "250", "3"]))
  
  console.log(largest(["3", "5", "2", "8", "1"]))
  
  console.log(largest(["-13", "40", "3", "0", "19", "22"]))

