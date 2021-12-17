const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const { body, validationResult } = require('express-validator');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://fs-forms-ek.herokuapp.com");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });
  
app.use(express.urlencoded({ extended: true }))

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b56589ccf620a5',
  password: '5b0ec773',
  database: 'heroku_e26755c34a76256'
})
connection.connect()
app.post('/', cors(),
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

app.listen(port, () => {
    console.log("App is running on port " + port);
});
