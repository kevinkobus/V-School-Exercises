// function fizzBuzz(numArr) {
  
    for (var i = 1; i <= 100; i++) {
        var nums = []
        var numArr = nums.push(i)
        
          if (i % 3 === 0 && i % 5 === 0) {
              console.log("fizzbuzz")
          }
          else if (i % 3 === 0) {
              console.log("fizz")
          }
          else if (i % 5 === 0) {
              console.log("buzz")
          }
          else {
              console.log(i)
          }
      }
      // }
      
      // console.log(fizzBuzz(numArr))