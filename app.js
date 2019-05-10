const express = require('express')
const app = express()
const port = 4567
const Space = require('./src/space')
var bodyParser = require('body-parser')
var spaces = []
// DB
var pg = require('pg')
// var connectionString = "postgres://MaxRobertsDear:@postgresql/ip:5432/MakersBNB"
var pgClient = new pg.Client({
  host: 'localhost',
  port: 5432,
  user: 'MaxRobertsDear',
  database: 'MakersBNB'
})
pgClient.connect()

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

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug')

app.get('/', (req, res) => res.redirect('/spaces'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/spaces', (req, res) => res.render('spaces/index', { button: "List a Space", spaces: Space.all() }))
// name: name, description: description, price: price

app.get('/spaces/new', (req, res) => res.render('spaces/new', { message: "List your Space" }))


app.post('/spaces', urlencodedParser, (req, res) => {
  Space.add(req.body.name, req.body.description, req.body.price)
  res.redirect('/spaces')
})
