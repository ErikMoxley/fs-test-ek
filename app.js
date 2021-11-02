const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors());

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'mysql_test',
  password: 'fstest12345',
  database: 'fs_test'
})

connection.connect()

app.get('/', (req, res, next) => {
  connection.query('SELECT * from users', function (err, rows, fields) {
    if (err) throw err
  
    res.send(rows);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})