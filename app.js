const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const { body, validationResult } = require('express-validator');

app.use(cors());
app.use(express.urlencoded({ extended: true }))

const mysql = require('mysql')
const connection = mysql.createPool({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b56589ccf620a5',
  password: '5b0ec773',
  database: 'heroku_e26755c34a76256'
})
// ^ I need .env implemented here

app.post('/',
    body('email').isEmail({ max: 100 }),
    body('name').isLength({ min: 1, max: 50 }),
    body('mobile').isLength({ min: 6, max: 20 }),
    body('industry').isLength({ min: 1, max: 100 }),
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

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})