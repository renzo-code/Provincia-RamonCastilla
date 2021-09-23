window.addEventListener('scroll', function(){
  let animacion = document.getElementById('mapa')
  let R1 = document.getElementById('r1')
  let R2 = document.getElementById('r2')
  let R3 = document.getElementById('r3')
  let R4 = document.getElementById('r4')
  let R5 = document.getElementById('r5')

  let SC1 = document.getElementById('sc1')
  let SC2 = document.getElementById('sc2')

  let C1 = document.getElementById('c1')
  let C2 = document.getElementById('c2')
  let C3 = document.getElementById('c3')

  let SR1 = document.getElementById('sr1')

  let M1 = document.getElementById('medico1')
  let M2 = document.getElementById('medico2')
  let M3 = document.getElementById('medico3')
  let M4 = document.getElementById('medico4')
  let M5 = document.getElementById('medico5')
  let M6 = document.getElementById('medico6')
  let M7 = document.getElementById('medico7')
  let M8 = document.getElementById('medico8')
  let M9 = document.getElementById('medico9')
  let M10 = document.getElementById('medico10')
  
  let posicionObj1 = animacion.getBoundingClientRect().top
  console.log(posicionObj1)
  let tamañoDePantalla = window.innerHeight/5;

  if(posicionObj1 < tamañoDePantalla){
    R1.style.display = 'none'
    R2.style.display = 'none'
    R3.style.display = 'none'
    R4.style.display = 'none'
    R5.style.display = 'none'

    SC1.style.display = 'none'
    SC2.style.display = 'none'

    C1.style.display = 'none'
    C2.style.display = 'none'
    C3.style.display = 'none'

    SR1.style.display = 'none'

    M1.style.display = 'block'
    M2.style.display = 'block'
    M3.style.display = 'block'
    M4.style.display = 'block'
    M5.style.display = 'block'
    M6.style.display = 'block'
    M7.style.display = 'block'
    M8.style.display = 'block'
    M9.style.display = 'block'
    M10.style.display = 'block'

    AIDESEP.style.display = 'block'
  }
})