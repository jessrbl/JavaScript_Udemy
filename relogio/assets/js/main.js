function relogio () {

function getTimeFromSeconds(seconds) {
  const date = new Date(seconds*1000)
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })  
}


const relogio = document.querySelector('.relogio')
let seconds = 0
let timer 

function initiateClock() {
  timer = setInterval(function() {
    seconds++ 
    relogio.innerHTML = getTimeFromSeconds(seconds)
  }, 1000)
}

document.addEventListener('click', function(e) {
  const el = e.target 

  if (el.classList.contains('zerar')) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    relogio.innerHTML = '00:00:00' 
    seconds = 0
  } 

  if (el.classList.contains('iniciar')) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    initiateClock()
  } 

  if (el.classList.contains('pausar')) {
    relogio.classList.add('pausado')
    clearInterval(timer)
  } 
})


}

relogio()

