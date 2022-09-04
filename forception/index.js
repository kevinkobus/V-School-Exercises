var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var upperCaseAlpha = alphabet.toUpperCase()
var alphabetArr = upperCaseAlpha.split("")
// console.log(alphabetArr)



for(var i = 1; i < people; i++)
var addAlpha = people.splice([i], 0, alphabetArr)
