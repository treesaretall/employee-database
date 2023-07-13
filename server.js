const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'treesaretall',
    database: 'employee_database'
});

db.connect((err) => { if (err) throw err });

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

module.exports = db;