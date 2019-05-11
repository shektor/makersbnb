const { Client } = require('pg')
// var connectionString = "postgres://MaxRobertsDear:@postgresql/ip:5432/MakersBNB"
const client = new Client({
  host: 'localhost',
  port: 5432,
  // user: 'MaxRobertsDear',
  database: 'MakersBNB'
})

client.connect()

class Space {

  static clearSpaces() {
    spaces = []
  }

  static getAllSpaces() {
    client.query('select * from spaces', (err, res) => {
      res.rows.forEach(function(row) {
        var space = new Space(row.title, row.description, row.price)
        spaces.push(space)
      })
    })
  }

  static returnSpaces(spaces) {
    return spaces
  }

  static add(name, description, price) {
    var space = new Space(name, description, price)
    spaces.push(space)
    return space
  }

  constructor (name, description, price){
    this.name = name
    this.description = description
    this.price = price
  }

}


// (module || {}).exports = Space;
// export module all();
module.exports = Space
// var aSpace = new Space("Castle Black", "John Snow is here", "1 arm")
var spaces = [];

// NB: to be implemented
// var query;
// pgClient.query('select * from spaces', (err, res) => {
//   query = res.rows[0]
// });
