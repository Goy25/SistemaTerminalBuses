function cambioTamano() {
  body = document.getElementById('body')
  body.style.height = `${document.documentElement.scrollHeight}px`
}


cambioTamano();
window.onresize = cambioTamano;
