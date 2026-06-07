// Selecting Tags //
var txtArea = document.getElementById("txtarea")
var typChar = document.getElementById("typchar")
var warningMsg = document.getElementById("warningmsg")
var typElement = 0

//Counting characters//
txtArea.addEventListener("input",function(){
    typElement = txtArea.value.length
    typChar.textContent = "No of characters typed " + typElement + "/200"
    if (typElement >= 200) {
        warningMsg.classList.remove("hidden")
    } else {
        warningMsg.classList.add("hidden")
    }
})
