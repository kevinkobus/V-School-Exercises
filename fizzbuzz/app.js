const num = []

for (var i = 1; i <= 100; i++) {
    var numArr = [i]
    var resultNum = num.push(numArr)
    console.log(resultNum)

    if (i % 3 == 0) {
        console.log("fizz")
    }     
}
