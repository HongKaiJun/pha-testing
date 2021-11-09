const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

//db structure
const db = mysql.createPool({
  host: 'localhost',
  user: 'root', //make sure its the same in your mysql db
  password: '',
  database: 'pha_test', //point to your database, this is my db name check yours
})
//required to apply for middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

//req==request(getting request from user)
//res==respond(showing user)

//for getting user information from database
app.get('/api/get', (req, res) => {
  const sqlSelect = 'SELECT * FROM pha_test'
  db.query(sqlSelect, (err, result) => {
    console.log(result)
    res.send(result)
  })
})

app.post('api/insert', (req, res) => {
  //declare var

  //sql query
  const sqlInsert = 'INSERT INTO pha_test () VAlUES(?,?)'

  db.query(sqlInsert, [], (err, result) => {
    console.log(result)
  })
})

// to point the mysql server
app.listen(3001, () => {
  console.log('running on port 3001')
})
