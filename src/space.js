const { Client } = require('pg')
// var connectionString = "postgres://MaxRobertsDear:@postgresql/ip:5432/MakersBNB"
const client = new Client({
  host: 'localhost', 
  port: 5432, 
  user: 'MaxRobertsDear', 
  database: 'MakersBNB'
})
client.connect()


class Space {

  static all() {
    var query;
    client.query('select * from spaces', (err, res) => {
      query = res
      console.log(query.title)
      return query.title
      client.end()
    })
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
