function ck(e) {
if (e.key.toLowerCase() === "enter") {
mainPage()
}
}

function mainPage() {
  let textbox = document.querySelector("#i")
  let button = document.querySelector("#s")
  let divs = document.querySelectorAll(".center")
  let textp = textbox.value
  if (textp === "I_Am_A_Smart_Programmer") {
    textbox.remove()
    button.remove()
    divs.remove()
    
  }
}
