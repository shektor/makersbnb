const express = require('express')
const app = express()
const port = 4567

app.get('/', (req, res) => res.redirect('/spaces'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/spaces', (req, res) => res.send('Hello Gavin'))

// app.get('/spaces/new')
