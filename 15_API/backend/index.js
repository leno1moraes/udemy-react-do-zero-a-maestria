const express = require('express')
const app = express()
const port = 8000

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas ou endpoints
app.get('/', (req, res) => {
    res.json({message: 'Olá mundo!!!'})
})

app.get('/olamundo2', (req, res) =>{
    res.json({massage: 'Agora Olá Mundo parte 2'})
})

app.post('/enviodedados', (req, res) =>{
    const nome = req.body.nome
    const idade = req.body.idade

    console.log(nome)
    console.log(idade)

})
app.listen(port)