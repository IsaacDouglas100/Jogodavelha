var jogador = 'x'

function jogo(id){
  
  const quadrado = document.getElementById(id)
  
  if (quadrado.innerText.length == 1) {
    return
  }
  
  quadrado.innerText = jogador
  
  if(jogador == 'x') {
    jogador = 'o'
  } else {
    jogador = 'x'
  }
  
  verificar()
}

function verificar(){
  var quadrado1 = document.getElementById('1')
  var quadrado2 = document.getElementById('2')
  var quadrado3 = document.getElementById('3')
  var quadrado4 = document.getElementById('4')
  var quadrado5 = document.getElementById('5')
  var quadrado6 = document.getElementById('6')
  var quadrado7 = document.getElementById('7')
  var quadrado8 = document.getElementById('8')
  var quadrado9 = document.getElementById('9')
  
  if(quadrado1.innerText.length >= 1 && quadrado1.innerText === quadrado2.innerText && quadrado2.innerText === quadrado3.innerText){
    console.log('opaa')
    quadrado1.style.background = '#88FF55'
    quadrado2.style.background = '#88FF55'
    quadrado3.style.background = '#88FF55'
    return
  }
  if (quadrado4.innerText.length >= 1 && quadrado4.innerText === quadrado5.innerText && quadrado5.innerText === quadrado6.innerText) {
    console.log('opaa')
    quadrado4.style.background = '#88FF55'
    quadrado5.style.background = '#88FF55'
    quadrado6.style.background = '#88FF55'
    return
  }
  if(quadrado7.innerText.length >= 1 && quadrado7.innerText === quadrado8.innerText && quadrado8.innerText === quadrado9.innerText) {
    console.log('opaa')
    quadrado7.style.background = '#88FF55'
    quadrado8.style.background = '#88FF55'
    quadrado9.style.background = '#88FF55'
    return
  }
  if(quadrado1.innerText.length >= 1 && quadrado1.innerText === quadrado4.innerText && quadrado4.innerText === quadrado7.innerText) {
    console.log('opaa')
    quadrado1.style.background = '#88FF55'
    quadrado4.style.background = '#88FF55'
    quadrado7.style.background = '#88FF55'
    return
  }
  if(quadrado2.innerText.length >= 1 && quadrado2.innerText === quadrado5.innerText && quadrado5.innerText === quadrado8.innerText) {
    console.log('opaa')
    quadrado2.style.background = '#88FF55'
    quadrado5.style.background = '#88FF55'
    quadrado8.style.background = '#88FF55'
    return
  }
  if(quadrado3.innerText.length >= 1 && quadrado3.innerText === quadrado6.innerText && quadrado6.innerText === quadrado9.innerText) {
    console.log('opaa')
    quadrado3.style.background = '#88FF55'
    quadrado6.style.background = '#88FF55'
    quadrado9.style.background = '#88FF55'
    return
  }
  if(quadrado1.innerText.length >= 1 && quadrado1.innerText === quadrado5.innerText && quadrado5.innerText === quadrado9.innerText) {
    console.log('opaa')
    quadrado1.style.background = '#88FF55'
    quadrado5.style.background = '#88FF55'
    quadrado9.style.background = '#88FF55'
    return
  }
  if(quadrado3.innerText.length >= 1 && quadrado3.innerText === quadrado5.innerText && quadrado5.innerText === quadrado7.innerText) {
    console.log('opaa')
    quadrado3.style.background = '#88FF55'
    quadrado5.style.background = '#88FF55'
    quadrado7.style.background = '#88FF55'
    return
  }
}
verificar()
