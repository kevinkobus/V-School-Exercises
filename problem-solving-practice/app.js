var numArr = ["21", "76", "52", "39", "26", "43", "61", "87", "94"]
var largestNum = 0

for(var i = 0; i < numArr.length; i++) {
  if(numArr[i] >= largestNum) {
    largestNum = numArr[i]
  }
}
console.log("The largest number is " + largestNum)