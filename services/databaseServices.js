var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'todotravel',
    user: 'root',
    password: '1235',
    port: 3306
});


connection.connect( (error, response) => {
    if (error) {
        throw error;
    }else{
        console.log('Conexion exitosa!');
    }
});

connection.query( 'SELECT * from ciudades', (error, response, fields) => {
    if (error) 
    throw error;

    response.forEach(element => {
        console.log(element);
    });
});

connection.end();