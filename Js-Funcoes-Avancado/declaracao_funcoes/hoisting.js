// Declaração de função (Function hoisting)


//falaOi()   => eu poderia chamar a função antes de declarar ela

function falaOi() {
    console.log('Oie')
}

falaOi() //eu posso executar a função aqui 


// As funções em JS são First-Class objects

const souUmDado = function(){      //a variável recebeu uma função e passou a ser uma função
    console.log('Sou um dado')
}
 // souUmDado()

function executaFuncao(funcao) {
     console.log('Vou executar sua função abaixo')
    funcao()
}

executaFuncao(souUmDado)

