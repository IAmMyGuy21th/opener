function ck(e) {
if (e.key.toLowerCase() === "enter") {
mainPage()
}
}

function mainPage() {
  let textbox = document.querySelector("#i")
  let button = document.querySelector("#s")
  let divs = document.querySelectorAll(".center")
  let headings = document.querySelector("#h")
  let textp = textbox.value
  if (textp === "I_Am_A_Smart_Programmer") {
    textbox.remove()
    button.remove()
    divs.remove()
    headings.remove()
    let iframe = document.createElement('iframe')
    iframe.src = 'https://iammyguy21th.github.io/opener/open.html'
    iframe.width = '100%'
    iframe.height = '100%'
    iframe.style = 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;'
    document.body.appendChild(iframe)
  }
}
