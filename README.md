# Project Title

Full Stack Form Input Using Express, NodeJS and MySQL

## Built With

- Frontend - HTML, CSS, JavaScript
- Backend - ExpressJS, NodeJS
- Database - MySQL
- Backend Validation - Express Validator
- Frontend Validation - HTML's "Required"

## How I Ran the App in Develop Before Deploying to Heroku

- Using XAMPP Control Panel, I ran an Apache and MySQL off of my local machine
- I use fetch("http://localhost:3000/" in my index.js to connect my front end to my local backend
- host: 'localhost', user: 'mysql_test', database: 'fs_test' from MySQL
- Running node app.js listens to port 3000 for backend
- Start Live Server on VSCode for frontend
- Once Submitted, POST goes to the ExpressJS server, which then validates and inserts into MySQL DB
- http://localhost/phpmyadmin/ to view/edit MySQL Database
- Still would have to add .env to not show MySQL credentials

## Dependencies
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "env": "^0.0.2",
    "express": "^4.17.1",
    "express-validator": "^6.13.0",
    "mysql": "^2.18.1"
## Author

  - **Eric K** - 
    [ErikMoxley](https://github.com/ErikMoxley)

    
