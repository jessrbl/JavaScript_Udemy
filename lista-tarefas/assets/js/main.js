const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li')
  return li
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
  }
})

function limpaInput() {
  inputTarefa.value =''
  inputTarefa.focus()
}


function criaTarefa(textoInput) {
  const li = criaLi()
  li.innerText = textoInput
  tarefas.appendChild(li)
  limpaInput()
  criaBotaoApagar(li)
  salvarTarefa()
}




function criaBotaoApagar(li) {
  li.innerText += ' '
  const BotaoApagar = document.createElement('button')
  BotaoApagar.innerText = 'Apagar'
  BotaoApagar.setAttribute('class', 'apagar')
  li.appendChild(BotaoApagar)
}


btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return
  criaTarefa(inputTarefa.value)
})


document.addEventListener('click', function(e) {
  const el = e.target

  if (el.classList.contains('apagar')) {
    el.parentElement.remove()    
    salvarTarefa()
  }
})

function salvarTarefa() {
  const liTarefas = tarefas.querySelectorAll('li')
  const listadeTarefas = []

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('apagar', '').trim()
    listadeTarefas.push(tarefaTexto)
  }

  const tarefasJSON = JSON.stringify(listadeTarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

function adicionarTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listadeTarefas = JSON.parse(tarefas)

  for (let tarefa of listadeTarefas) {
    criaTarefa(tarefa)
  }
}

adicionarTarefasSalvas()
