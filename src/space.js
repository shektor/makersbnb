var pg = require('pg')
// var connectionString = "postgres://MaxRobertsDear:@postgresql/ip:5432/MakersBNB"
var pgClient = new pg.Client({
  host: 'localhost', 
  port: 5432, 
  user: 'MaxRobertsDear', 
  database: 'MakersBNB'
})
// pgClient.connect()




class Space {

  static all() {
    var query;
    pgClient.connect()
    pgClient.query('select * from spaces', (err, res) => {
      if (err) {
        console.log("connection didn't work")
      } else {
        query = (res.fields.map(f => field.name))
        }

    })
    return query
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
// var spaces = [aSpace];

// NB: to be implemented
// var query;
// pgClient.query('select * from spaces', (err, res) => {
//   query = res.rows[0]
// });
