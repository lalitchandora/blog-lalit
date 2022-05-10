const mysql = require('mysql');


const DatabaseConnection = () => {
    let connection = mysql.createConnection({
        host: 'sql6.freemysqlhosting.net',
        user: 'sql6490164', 
        password: 'plakldLNUR',
        database: 'sql6490164'
    })

    connection.connect((err) => {
        if (err) {
            console.log("Error occurred", err);
        } else {
            console.log('connected', connection.query);
        }
    });

    return connection;
}

module.exports = DatabaseConnection;