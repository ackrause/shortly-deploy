var mongoose = require('mongoose');

var dbHostName = process.env.DB_HOST || 'localhost';
var db = mongoose.connect(dbHostName, 'shortly');

module.exports = db;
