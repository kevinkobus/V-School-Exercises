var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]


function countOcc(officeEquip) {

    for (i = 0; i < officeItems.length; i++) {
        const comp = officeEquip.value
        if (comp.value === "computer") {
            console.log(officeEquip[i])
        }
    }

}
