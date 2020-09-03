const mysql = require('mysql'); 

const con = mysql.createConnection({
    host: "localhost",
    database: "lawyer",
    user: 'root',
    password: ''
});

con.connect(function(err){
    if(err){
        console.error('Error connecting: ',err.stack);
        return;
    }
    else{
        console.log('Sql Db connecting');
    }
});

module.exports = con;