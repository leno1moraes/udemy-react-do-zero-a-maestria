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

app.listen(port)