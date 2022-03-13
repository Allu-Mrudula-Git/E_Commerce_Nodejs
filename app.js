var express= require("express");
var app= express();
var mysql= require("mysql");
var connection= mysql.createConnection({
    host: 'localhost',
    database: 'ecommerce',
    user: 'root',
    password: 'Nani123@'
});

connection.connect(function(err){
    if(err)
      throw err;
    console.log("Connected");
});