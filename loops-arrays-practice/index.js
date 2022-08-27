var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]


let count = 0

officeItems.forEach(element => {
  if (element === "computer") {
    count += 1
  }
})

console.log(count)

