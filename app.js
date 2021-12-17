const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const { body, validationResult } = require('express-validator');

app.use(cors());
app.use(express.urlencoded({ extended: true }))

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'mysql_test',
  password: 'fstest12345',
  database: 'fs_test'
})

connection.connect()

app.post('/',
    body('email').isEmail({ max: 100 }),
    body('name').isLength({ min: 1, max: 50 }),
    body('industry').isLength({ min: 1, max: 100 }),
    body('mobile').isLength({ min: 6, max: 20 }),
    (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {name, email, mobile, industry} = req.body;

    const sql = `INSERT INTO users
    (
        name, email, mobile, industry
    )
    VALUES
    (
        ?, ?, ?, ?
    )`
    connection.query(sql, 
        [name, email, mobile, industry], 
        function (err, data) {
        if (err) throw err
        res.send('Form Successfully Submitted!');
    })
})

app.listen(PORT, () => {
  console.log(`Listening at App Running`)
})