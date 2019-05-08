const express = require('express')
const app = express()
const port = 4567

app.set('view engine', 'pug')

app.get('/', (req, res) => res.redirect('/spaces'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/spaces', (req, res) => res.render('index', { title: "Spaces", message: "Book a Space", button: "List a Space" }))

app.get('/spaces/new', (req, res) => res.render('new', { message: "List your Space" }))
