const express = require('express');
const middleware = require('./middleware/middleware');
const mysql = require('mysql'); 

const con = mysql.createConnection({
    host: "localhost",
    database: "lawyer",
    user: 'root',
    password: ''
});

const app = express();
const port = process.env.PORT || 3001;

//middleware(app);
con.connect();
console.log('eeeeeeeee');

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));



const appointment = require('./modules/appointment/routes');
app.use('/appointment', appointment);

const cases = require('./modules/cases/routes');
app.use('/case', cases);

const deed = require('./modules/deed/routes');
app.use('/deed', deed);






app.listen(port, function(err){
    console.log('yuu')
    if(err){
        console.error(err);
    }
    else{
        console.log('server is running on port ',port);
    }
});

module.exports = app;