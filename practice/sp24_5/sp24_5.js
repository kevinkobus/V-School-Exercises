//document.input = "something"

var newDiv = document.createElement("div")
//newDiv.textContent = "abc"

document.body.append(newDiv)

var button = document.getElementById("clickButton")
button.addEventListener("click", getInputValue)

function getInputValue() {
    var inputVal = document.getElementById("inputValue").value
    alert(inputVal)
}
//
