
const express = require('express');
const mysql = require('mysql');


// database connection and query promisify
var conn = mysql.createPool({
    host     : process.env.DB_HOST || 'localhost',
    user     : process.env.DB_USER || 'username',
    password : process.env.DB_PASSWORD || 'password',
    database : process.env.DB_NAME || 'database',
    connectionLimit : 100
  });


const mySqlQury =(qry)=>{
    return new Promise((resolve, reject)=>{
        conn.query(qry, (err, row)=>{
            if (err) return reject(err);
            resolve(row)
        })
    }) 
}

  
module.exports = {conn, mySqlQury}