const form = document.querySelector('.form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const numero1Input = e.target.querySelector('#numero1')
    const numero2Input = e.target.querySelector('#numero2')

    const numero1 = Number(numero1Input.value)
    const numero2 = Number(numero2Input.value)

    const resultado = document.querySelector('.res')
    resultado.innerHTML = ''
    const p = createP() // Corrigido o nome da função
    resultado.appendChild(p)
    if (numero1 > numero2) {
        p.innerHTML = `${numero1} é maior que ${numero2} `        
    } else {
        p.innerHTML = `${numero2} é maior que ${numero1} `    
    }

})

function createP() { // Corrigido o nome da função
    const p = document.createElement('p')
    return p 
}
