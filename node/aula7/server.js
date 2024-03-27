const express = require('express') 

const app = express()

// http://meusite.com/ <- GET -> entregue a página /
// http://meusite.com/sobre <- GET ->  entregue a página /sobre 
//htt://meusite.com/contato <- GET -> entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button> Envia </button> 
    </form>
    `)
})

app.get('/testando', (req, res) => {
    console.log(req.params)
    res.send('Oi')
})


app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})



app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})


