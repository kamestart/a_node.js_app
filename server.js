const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT} `)
})

app.use(express.static(__dirname + '/public'))

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})