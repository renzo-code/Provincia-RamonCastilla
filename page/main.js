window.addEventListener('scroll', function(){
  let animacion = document.getElementById('mapa')
  let flecha2 = document.getElementById('flecha2')
  let flecha3 = document.getElementById('flecha3')
  let AIDESEP = document.getElementById('AIDESEP')
  let AIDESEP2 = document.getElementById('AIDESEP2')
  let FECOTYBA = document.getElementById('FECOTYBA')
  let FECOTYBA2 = document.getElementById('FECOTYBA2')
  let COMUNIDADES = document.getElementById('COMUNIDADES')
  let COMUNIDADES2 = document.getElementById('COMUNIDADES2')
  let FFAA = document.getElementById('FFAA')
  let IGLESIAS = document.getElementById('IGLESIAS')
  let DEVIDA = document.getElementById('DEVIDA')
  let DEVIDA2 = document.getElementById('DEVIDA2')
  let FREPAP = document.getElementById('FREPAP')
  let FREPAP2 = document.getElementById('FREPAP2')
  let PNP = document.getElementById('PNP')
  let ALCALDIA = document.getElementById('ALCALDIA')
  let ALCALDIA2 = document.getElementById('ALCALDIA2')
  let DIRANDRO = document.getElementById('DIRANDRO')
  let AEMINPU = document.getElementById('AEMINPU')
  let AEMINPU2 = document.getElementById('AEMINPU2')
  
  let posicionObj1 = animacion.getBoundingClientRect().top
  console.log(posicionObj1)
  let tamañoDePantalla = window.innerHeight/5;
  if(posicionObj1 < tamañoDePantalla){
    animacion.style.display = 'none'
    flecha2.style.display = 'block'
    flecha3.style.display = 'block'
    AIDESEP.style.display = 'block'
    AIDESEP2.style.display = 'block'
    FECOTYBA.style.display = 'block'
    FECOTYBA2.style.display = 'block'
    COMUNIDADES.style.display = 'block'
    COMUNIDADES2.style.display = 'block'
    FFAA.style.display = 'block'
    IGLESIAS.style.display = 'block'
    DEVIDA.style.display = 'block'
    DEVIDA2.style.display = 'block'
    FREPAP.style.display = 'block'
    FREPAP2.style.display = 'block'
    PNP.style.display = 'block'
    ALCALDIA.style.display = 'block'
    ALCALDIA2.style.display = 'block'
    DIRANDRO.style.display = 'block'
    AEMINPU.style.display = 'block'
    AEMINPU2.style.display = 'block'
  }
})