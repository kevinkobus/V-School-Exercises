const readline = require("readline-sync")

//Intro to situation
const name = readline.question("What is your name? ")
console.log("Hi " + name + "! Your in a room and you want to get out")
let go = readline.question("Are you ready? Type Y for yes, or N for no ")

function start() {
    if (go === "y" || go === "Y") {
        console.log("Lets Go!")
    }
    else if (go === "n" || go === "N") {
        console.log("Ok, but don't forget you're still in the room")
        start()
    }
}

//Room loop
let choice = readline.question("Here are your options: A. Stick your hand in the hole. B. Find the key. C. Open the door. ")

let count = 0

const findKey = (function () {
    if (choice === "A" || choice === "a") {
        count++
        console.log("Bad choice! You've been sucked into a black hole. Try again.")

        choice = readline.question("Here are your options again: A. Stick your hand in the hole. B. Find the key. C. Open the door.")
        findKey()
    }
    else if (choice === "B" || choice === "b") {
        count++
        console.log("Nice, you've found the key!")
        escapeRoom()
    }
    else if (choice === "C" || choice === "c") {
        count++
        console.log("Bummer, it's locked! Try again")

        choice = readline.question("Here are your options again: A. Stick your hand in the hole. B. Find the key. C. Open the door. ")
        findKey()
    }

    else {
        count++
        console.log("Umm, not sure what that means, try again")

        choice = readline.question("Here are your options again: A. Stick your hand in the hole. B. Find the key. C. Open the door. ")
        findKey()
    }

})
//Room loop after key
const escapeRoom = function () {
    let secondChoice = readline.question("Here are your remaining options: A. Stick your hand in the hole. B. Open the door. ")
    if (secondChoice === "A" || secondChoice === "a") {
        count++
        console.log("Bad choice! You've been sucked into a black hole. Try again.")
        escapeRoom()

    }
    else if (secondChoice === "B" || secondChoice === "b") {
        count++
        console.log("Woohoo! You got out of the room.")
        console.log(count)
        return null
    }
    else {
        count++
        console.log("You're still stuck in the room, try again")
        escapeRoom()
    }

}

