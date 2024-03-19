// funções construtoras não precisam de vírgulas 

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 123456

    const metodoInterno = function () {

    }

// Atributos ou métodos públicos 
    this.nome = nome
    this.sobrenome = sobrenome
    
    this.metodo = () => {
        console.log(this.nome + ': sou um método')
    }
} 

/* a palavra new cria um novo objeto vazio, faz o this 
apontar para esse objeto vazio e o this retorna implicitamente 
o objeto para essa variável (por isso não precisa usar o return)
*/ 

const p1 = new Pessoa('Luiz', 'Otávio')    // NÃO ESQUECER DE CHAMAR A PALAVRA NEW 
const p2 = new Pessoa('Maria', 'Oliveira')

console.log(p1.nome)
p2.metodo()
