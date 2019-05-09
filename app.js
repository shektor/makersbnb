const express = require('express')
const app = express()
const port = 4567
const Space = require('./src/space')
var bodyParser = require('body-parser')
var spaces = []
//
// ES6 version of require
// import Space from './src/space'

// function Space() {
//   this.name
//   this.description
//   this.price
// }


var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('view engine', 'pug')

app.get('/', (req, res) => res.redirect('/spaces'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/spaces', (req, res) => res.render('spaces/index', { button: "List a Space", spaces: spaces }))
// name: name, description: description, price: price

app.get('/spaces/new', (req, res) => res.render('spaces/new', { message: "List your Space" }))


app.post('/spaces', urlencodedParser, (req, res) => {
  var space = new Space()
  space.name = req.body.name
  space.description = req.body.description
  space.price = req.body.price
  spaces.push(space)
  res.redirect('/spaces')
})
