const express = require('express') 
const app = express()


app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
) 

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

app.get('/testando/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.query.facebookprofile)
})


app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`)
})


app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})


