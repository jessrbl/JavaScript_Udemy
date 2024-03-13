const form = document.querySelector('.form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')


    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false)
        return
    }

    if (!altura) {
        setResultado('Altura inválida', false)
        return
    }

    const IMC = getIMC(peso, altura)
    const nivelIMC = getNivelIMC(IMC)

    const msg = `Seu IMC é ${IMC} (${nivelIMC}).`

    setResultado(msg, true)

})

function getNivelIMC (IMC) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3']

    if (IMC >= 39.9) return nivel[5]
    if (IMC >= 34.9) return nivel[4]
    if (IMC >= 29.9) return nivel[3]
    if (IMC >= 24.9) return nivel[2]
    if (IMC >= 18.5) return nivel[1]
    if (IMC < 18.5)  return nivel[0]
}


function getIMC (peso, altura) {
    const IMC = peso / altura ** 2
    return IMC.toFixed(2)
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
    const p = criaP()

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
}

function criaP () {
    const p = document.createElement('p')
    return p
}









