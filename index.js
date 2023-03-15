
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/node', (req, res) => res.send('Hello Node js'));
app.get('/node/subnode', (req, res) => res.send('Hello soy un hijo de node'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('Hola NodeJS pruebas de software');