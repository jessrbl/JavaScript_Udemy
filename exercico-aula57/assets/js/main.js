const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p') //pega todos os p's 

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor





for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFFF'


}

