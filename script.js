function ck(e) {
if (e.key.toLowerCase() === "enter") {
openUrl()
}
}

function openUrl() {
const onw = document.querySelector('#onw').checked
let newWin = window.open('about:blank', ('Home') + Math.random().toString(), onw ? 'width=500,height=500' : undefined)
const title = newWin.document.createElement('title')
const favicon = newWin.document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/x-icon'
favicon.href = '/favicon.ico'
title.innerHTML = 'Home'
newWin.document.head.appendChild(title)
newWin.document.head.appendChild(favicon)
const url = document.querySelector('#i').value
let iframe = newWin.document.createElement('iframe')
iframe.src = url
if (url.startsWith('https://')) {
iframe.src = url
} else {
iframe.src = 'https://' + url
}
iframe.style = 'position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;'
newWin.document.body.appendChild(iframe)
}